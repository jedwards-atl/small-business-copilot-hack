import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock";
import { fromSSO } from "@aws-sdk/credential-providers";
import { streamText } from "ai";
import { NextResponse } from "next/server";
import { experimental_createMCPClient, generateText } from "ai";
import { Experimental_StdioMCPTransport } from "ai/mcp-stdio";
import dotenv from "dotenv";

dotenv.config();

const bedrock = createAmazonBedrock({
  region: "us-east-1",
  credentialProvider: fromSSO({
    ssoStartUrl: "https://d-93676304be.awsapps.com/start",
    ssoAccountId: "339712779037",
    ssoRoleName: "llm-dev-bedrock",
    ssoRegion: "eu-west-1",
    ssoSession: "bnw-sso",
    profile: "dev-bedrock",
  }),
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Apple
    const apple_transport = new Experimental_StdioMCPTransport({
      command: "bunx",
      args: ["@dhravya/apple-mcp@latest"],
    });
    const apple_clientOne = await experimental_createMCPClient({
      transport: apple_transport,
    });

    // Apple
    const shopify_transport = new Experimental_StdioMCPTransport({
      command: "npx",
      args: [
        "shopify-mcp",
        "--accessToken",
        process.env.SHOPIFY_ACCESS_TOKEN as string,
        "--domain",
        "0pi94v-h9.myshopify.com",
      ],
    });
    const shopify_clientOne = await experimental_createMCPClient({
      transport: shopify_transport,
    });

    const apple_toolSetOne = await apple_clientOne.tools();
    const shopify_toolSetOne = await shopify_clientOne.tools();

    const tools = {
      ...apple_toolSetOne,
      ...shopify_toolSetOne,
    };

    if (!messages) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = streamText({
      model: bedrock("anthropic.claude-3-5-sonnet-20240620-v1:0"),
      system:
        "You are a helpful assistant. Use tools as needed. Format your responses elegantly, concisely, and in a way that is easy to read..",
      tools: tools,
      messages: messages,
      maxSteps: 5,
    });

    return response.toDataStreamResponse();
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
