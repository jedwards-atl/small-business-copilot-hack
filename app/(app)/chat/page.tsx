import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

const suggestions = [
  "Create a marketing plan",
  "Schedule a task",
  "Write a blog post",
  "Find the cost of business insurance",
  "Respond to an online review",
];

const ChatPage = () => {
  return (
    <div className="items-center justify-center flex flex-col w-full h-full">
      {/* Header */}
      <div className="text-center items-center flex flex-col space-y-4">
        <Image
          src="/ai-orb.png"
          className="relative z-10 bg-transparent"
          alt="orb"
          width={77}
          height={77}
        />
        <h1 className="text-4xl font-semibold text-sb-primary">SimplyPilot</h1>
      </div>

      {/* Input Section */}
      <div className="mt-20 space-y-6 w-full flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            What can I help with Ash?
          </h2>
        </div>

        {/* Input Box */}
        <div className="relative w-2/5">
          <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg bg-white shadow-sm">
            <Button
              variant="ghost"
              size="sm"
              className="cursor-pointer h-8 w-8 p-0 text-sb-primary hover:bg-background-highlight"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Ask anything"
              className="border-0 shadow-none focus-visible:ring-0 text-base"
            />
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer h-8 w-8 p-0 text-sb-primary hover:bg-background-highlight"
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer h-8 w-8 p-0 bg-sb-primary hover:bg-azure-600 text-white hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="flex flex-wrap gap-4 justify-center w-3/5">
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              className="text-sb-primary hover:bg-gray-200 hover:text-sb-primary bg-gray-100 font-bold border-none text-sm px-4 py-2 h-auto cursor-pointer rounded-3xl"
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
