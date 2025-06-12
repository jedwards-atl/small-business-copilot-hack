"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import ChatArea from "@/components/chat/chatArea";
import { useChat, type Message } from "@ai-sdk/react"; // Ensure Message type is imported
import { useSearchParams } from "next/navigation";

const suggestions = [
  "Create a marketing plan",
  "Schedule a task",
  "Write a blog post",
  "Find the cost of business insurance",
  "Respond to an online review",
];

const ChatPage = () => {
  const searchParams = useSearchParams();
  const notification = searchParams.get("notification");

  const [chatSubmitted, setChatSubmitted] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  // Add `append` to the destructured props from useChat
  const { messages, input, handleInputChange, handleSubmit, setInput, append } =
    useChat({ api: "/api/chat" });

  const submitChat = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }

    setChatSubmitted(true);
    handleSubmit(event);
  };

  const handleSuggestionClick = async (suggestion: string) => {
    setChatSubmitted(true); // Expand the chat area

    // Create the message object for the user's suggestion
    const userMessage: Message = {
      id: crypto.randomUUID(), // Generate a unique ID for the message
      role: "user",
      content: suggestion,
    };

    // Append the message to the chat. This updates the `messages` state
    // and triggers the API call to get the AI's response.
    // No need to call handleSubmit separately.
    await append(userMessage);

    // After the message is appended and the process starts,
    // clear the input field, similar to how handleSubmit behaves.
    setInput("");
  };

  // Effect to handle clicks outside the chat box
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        chatBoxRef.current &&
        !chatBoxRef.current.contains(event.target as Node) &&
        chatSubmitted
      ) {
        const targetElement = event.target as HTMLElement;

        if (targetElement.closest('button[data-suggestion-button="true"]')) {
          return;
        }
        setChatSubmitted(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatSubmitted]);

  useEffect(() => {
    console.log(notification);
    if (notification) {
      // Create a synthetic event to set the input
      // const event = {
      //   target: {
      //     value:
      //       "I have a new warehouse, and I'm also going to be hiring my first employee, can you check my insurance coverage is still appropriate?",
      //   },
      // } as React.ChangeEvent<HTMLInputElement>;

      // handleInputChange(event);
      // // Click the submit button to trigger form submission
      // setTimeout(() => {
      //   submitButtonRef.current?.click();
      // }, 0);
      handleSuggestionClick(
        "I have a new warehouse, and I'm also going to be hiring my first employee, can you check my insurance coverage is still appropriate?"
      );
    }
  }, [notification]);

  return (
    <div className="items-center justify-center flex flex-col w-full h-full">
      {/* Header */}
      {!chatSubmitted && (
        <div className="text-center items-center flex flex-col space-y-4">
          <Image
            src="/ai-orb.png"
            className="relative z-10 bg-transparent"
            alt="orb"
            width={77}
            height={77}
          />
          <h1 className="text-4xl font-semibold text-sb-primary">
            SimplyPilot
          </h1>
        </div>
      )}

      {/* Input Section */}
      <div
        className={`w-full flex flex-col items-center transition-all duration-500 ease-in-out ${
          chatSubmitted ? "mt-0 h-full" : "mt-20 space-y-6"
        }`}
      >
        {!chatSubmitted && (
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              What can I help with Ash?
            </h2>
          </div>
        )}

        {/* Input Box and Expanded Chat - Assign ref here */}
        <div
          ref={chatBoxRef} // Assign the ref to the container
          className={`relative transition-all duration-500 ease-in-out ${
            chatSubmitted
              ? "w-full h-4/5 mt-8 flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm" // Changed w-5/5 to w-full for clarity
              : "w-2/5"
          }`}
        >
          {/* Chat Area: Rendered first when chat is submitted for flex order, takes available space */}
          {chatSubmitted && (
            <div className="flex-grow p-4 overflow-y-auto rounded-t-lg">
              <ChatArea messages={messages} handleSubmit={handleSubmit} chatSubmitted={chatSubmitted} />
            </div>
          )}

          {/* Input Bar: Positioned at the bottom when chat is expanded */}
          <div
            className={`flex items-center gap-2 p-2 bg-white transition-all duration-500 ease-in-out ${
              chatSubmitted
                ? "border-t border-gray-200 rounded-b-lg" // Style for bottom of expanded chat
                : "border border-gray-200 rounded-lg shadow-sm" // Style for standalone input
            }`}
          >
            <Button
              variant="ghost"
              size="sm"
              className="cursor-pointer h-8 w-8 p-0 text-sb-primary hover:bg-background-highlight"
            >
              <Plus className="h-4 w-4" />
            </Button>

            <form onSubmit={submitChat} className="flex-grow flex">
              <Input
                placeholder="Ask anything"
                className="border-0 shadow-none focus-visible:ring-0 text-base flex-grow"
                value={input}
                onChange={handleInputChange}
              />
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="cursor-pointer h-8 w-8 p-0 text-sb-primary hover:bg-background-highlight"
                  type="button"
                >
                  <Mic className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="cursor-pointer h-8 w-8 p-0 bg-sb-primary hover:bg-azure-600 text-white hover:text-white"
                  type="submit"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          {/* The old ChatArea container is removed as it's now part of the flex layout above */}
        </div>

        {/* Suggestions */}
        {!chatSubmitted && (
          <div className="flex flex-wrap gap-4 justify-center w-3/5">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                className="text-sb-primary hover:bg-gray-200 hover:text-sb-primary bg-gray-100 font-bold border-none text-sm px-4 py-2 h-auto cursor-pointer rounded-3xl"
                onClick={() => handleSuggestionClick(suggestion)}
                data-suggestion-button="true" // Add a data attribute
              >
                {suggestion}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
