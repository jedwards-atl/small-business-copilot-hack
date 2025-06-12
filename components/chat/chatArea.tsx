'use client';

import React, { useEffect, useRef } from 'react'; // Import useEffect and useRef
import Markdown from 'react-markdown';
import { type Message } from '@ai-sdk/react';

interface ChatAreaProps {
    messages: Message[];
    handleSubmit: (event?: React.FormEvent<HTMLFormElement>) => void; // Assuming this is still needed for a form wrapper
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages, handleSubmit }) => {
  const scrollableContainerRef = useRef<HTMLDivElement>(null); // Ref for the scrollable container

  useEffect(() => {
    // Scroll to the bottom every time messages update
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTop = scrollableContainerRef.current.scrollHeight;
    }
  }, [messages]); // Dependency array ensures this runs when messages change

  if (!messages || messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-400">No messages yet. Start typing!</p>
      </div>
    );
  }

  return (
      <form
        onSubmit={handleSubmit} // If this form is not actually submitting from here, consider removing it
        className="h-full flex flex-col"
      >
        <div className="flex-1 min-h-0 flex flex-col">
          {/* Messages area */}
          <div 
            ref={scrollableContainerRef} // Assign ref to the scrollable div
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
            {/* Optional: An empty div at the end to help ensure smooth scrolling to the very bottom */}
            {/* <div ref={messagesEndRef} /> */}
          </div>
        </div>
      </form>
  );
};

export default ChatArea;