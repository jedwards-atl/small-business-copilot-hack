import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock"
import { fromSSO } from "@aws-sdk/credential-providers";
import { streamText } from "ai";
import { NextResponse } from "next/server";
import { useChat } from '@ai-sdk/react'

const bedrock = createAmazonBedrock({
    region: 'us-east-1',
    credentialProvider: fromSSO({
        ssoStartUrl: 'https://d-93676304be.awsapps.com/start',
        ssoAccountId: '339712779037',
        ssoRoleName: "llm-dev-bedrock",
        ssoRegion: "eu-west-1",
        ssoSession: 'bnw-sso',
        profile: 'dev-bedrock'
    }),
});


export async function POST(request: Request) {
    try {
        const { messages } = await request.json();

        if (!messages) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        const response = streamText({
            model: bedrock('anthropic.claude-3-5-sonnet-20240620-v1:0'),
            system: 'You are a helpful assistant. Use tools as needed. Format your responses elegantly, concisely, and in a way that is easy to read..',
            messages: messages,
            maxSteps: 5,
        });

        return response.toDataStreamResponse()
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Failed to process request" },
            { status: 500 }
        );
    }
}