'use client';

import React, { useEffect, useRef } from 'react';
import Markdown from 'react-markdown';
import { type Message } from '@ai-sdk/react';

interface ChatAreaProps {
    messages: Message[];
    handleSubmit: (event?: React.FormEvent<HTMLFormElement>) => void;
    chatSubmitted: boolean; // Add chatSubmitted to props
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages, handleSubmit, chatSubmitted }) => {
  const scrollableContainerRef = useRef<HTMLDivElement>(null);
  const hasScrolledOnExpansionRef = useRef<boolean>(false);

  useEffect(() => {
    if (chatSubmitted) {
      // If chat is expanded and we haven't performed the initial scroll for this expansion
      if (!hasScrolledOnExpansionRef.current && scrollableContainerRef.current) {
        // Use setTimeout to ensure the scroll happens after DOM updates (e.g., messages rendering)
        setTimeout(() => {
          if (scrollableContainerRef.current) {
            scrollableContainerRef.current.scrollTop = scrollableContainerRef.current.scrollHeight;
          }
        }, 0);
        hasScrolledOnExpansionRef.current = true; // Mark that initial scroll for this expansion has occurred
      }
    } else {
      // Reset the flag when the chat is collapsed
      hasScrolledOnExpansionRef.current = false;
    }
  }, [chatSubmitted, messages]); // Rerun effect if chatSubmitted state or messages change

  if (!messages || messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-400">No messages yet. Start typing!</p>
      </div>
    );
  }

  return (
      <form
        onSubmit={handleSubmit}
        className="h-full flex flex-col"
      >
        <div className="flex-1 min-h-0 flex flex-col">
          {/* Messages area */}
          <div 
            ref={scrollableContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-6"
          >
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`flex items-start space-x-4 ${
                        message.role === 'user' ? 'justify-end' : ''
                    }`}
                >
                  {message.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        AI
                      </div>
                  )}
                    <div className={`flex-1 ${message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}`}>
                    <div
                      className={`rounded-lg p-4 w-4/5 shadow-sm message ${
                        message.role === 'user'
                          ? 'bg-sb-primary text-white'
                          : 'bg-white text-gray-800'
                      }`}
                    >
                      <Markdown>{message.content}</Markdown>
                    </div>
                    </div>
                  {message.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-sb-primary text-white flex items-center justify-center">
                        <span className="text-sm font-medium">AP</span>
                      </div>
                  )}
                </div>
            ))}
          </div>
        </div>
      </form>
  );
};

export default ChatArea;