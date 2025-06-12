import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock";
import { fromSSO } from "@aws-sdk/credential-providers";
import { NextResponse } from "next/server";
import {
  experimental_createMCPClient,
  streamText,
  tool,
  generateText,
} from "ai";
import { Experimental_StdioMCPTransport } from "ai/mcp-stdio";
import dotenv from "dotenv";
import { z } from "zod";
import readPdf from "../../../lib/pdf";

dotenv.config();

function randomNumFromInterval(min, max) { // min and max included
  return (Math.random() * (max - min + 1) + min).toFixed(2);
}

const indicativePriceUrl = "https://indicative-pricing-staging.api.simplybusiness.com/v1/indicative_prices"
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

// Apple
const apple_transport = new Experimental_StdioMCPTransport({
  command: "bunx",
  args: ["@dhravya/apple-mcp@latest"],
});
const apple_clientOne = await experimental_createMCPClient({
  transport: apple_transport,
});

// Shopify
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

// Xero
const xero_transport = new Experimental_StdioMCPTransport({
  command: "npx",
  args: ["-y", "@xeroapi/xero-mcp-server@latest"],
  env: {
    XERO_CLIENT_ID: process.env.XERO_CLIENT_ID as string,
    XERO_CLIENT_SECRET: process.env.XERO_CLIENT_SECRET as string,
  },
});
const xero_clientOne = await experimental_createMCPClient({
  transport: xero_transport,
});

const apple_toolSetOne = await apple_clientOne.tools();
const shopify_toolSetOne = await shopify_clientOne.tools();
const xero_toolSetOne = await xero_clientOne.tools();

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const tools = {
      ...apple_toolSetOne,
      ...shopify_toolSetOne,
      ...xero_toolSetOne,
      read_policy: tool({
        description: "Read the insurance policy information",
        parameters: z.object({
          user_question: z
            .string()
            .describe("Question the user ask about the policy"),
        }),
        execute: async ({ user_question }) => {
          const pdf = await readPdf();
          const { text } = await generateText({
            model: bedrock("anthropic.claude-3-5-sonnet-20240620-v1:0"),
            prompt:
              "You have been given the policy document. Answer the user question based on the policy document. User question is: " +
              user_question +
              ". Policy content:" +
              pdf,
          });
          return text;
        },
      }),
      insurance_indicative_price: tool({
        description: "Generate an indicative price for insurance",
        parameters: z.object({
          trade: z
              .string()
              .describe("The trade of the business"),
          employee_payroll: z
              .string()
              .describe("The total employee payroll for one year"),
          state: z
              .string()
              .describe("The state the business operates in"),
          insurance_product: z
              .string()
              .describe("The insurance product you want an indicative price for including Worker's Compensation and Business Owners Policy")

        }),
        execute: async ({ trade, employee_payroll, state, insurance_product }) => {
          return `The price for ${insurance_product} is ${randomNumFromInterval(20,100)} per month`
        },
      }),
      task_scheduler: tool({
        description: "Schedule a task in the future",
        parameters: z.object({
          task_name: z.string().describe("The name of the task"),
          task_description: z.string().describe("The description of the task"),
        }),
        execute: async ({ task_name, task_description }) => {
          console.log(task_name, task_description);

          return `Good morning ☀️ Here's your schedule for the day:

- 9am to 10am: Meet with Larry
- 12pm-1pm: Lunch with Mum
- 3:30-5pm: Create social media posts

> "Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill`;
        },
      }),
      scrape_website: tool({
        description: "Scrape a website and return the HTML",
        parameters: z.object({
          url: z.string().describe("The URL of the website to scrape"),
        }),
        execute: async ({ url }) => {
          const response = await fetch(url);
          const html = await response.text();

          return html;
        },
      }),
      get_business_info: tool({
        description:
          "Get information about the business including name, location, website URL",
        parameters: z.object({}),
        execute: async () => {
          return `The business is called Peacock Productions run by Ashley Peacock and they sell clothing online. They are based in the United States. Their website URL is https://www.simplybusiness.com.`;
        },
      }),
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
        "You are an assistant designed to help small business owners run their business in the United States. Their business is called Peacock Productions run by Ashley Peacock and they sell clothing online. Include this information in the responses to make them more personalised where appropriate." +
        "You will be given the chat history and the latest message. You have access to tools that can help you answer questions about Apple, Xero and Shopify, use them when necessary. Today's date is 12th June 2025. You need to format your response in an easy to read way with paragraphs, headings, lists, etc. ALWAYS format the response with Markdown.",
      tools: tools,
      messages: messages,
      maxSteps: 15,
      onStepFinish({ text, toolCalls, toolResults, finishReason, usage }) {
        // your own logic, e.g. for saving the chat history or recording usage
        console.log(toolCalls, toolResults);
      },
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
