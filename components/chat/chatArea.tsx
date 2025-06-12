'use client';

import React from 'react';
import Markdown from 'react-markdown'
import { type Message } from '@ai-sdk/react'; // Import Message type

interface ChatAreaProps {
    messages: Message[];
    handleSubmit: (event?: React.FormEvent<HTMLFormElement>) => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages, handleSubmit }) => {
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
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
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
                  <div className="flex-1">
                    <div
                        className={`rounded-lg p-4 shadow-sm message ${
                            message.role === 'user'
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-gray-800'
                        }`}
                    >
                      <Markdown>{message.content}</Markdown>
                    </div>
                  </div>
                  {message.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">AP</span>
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