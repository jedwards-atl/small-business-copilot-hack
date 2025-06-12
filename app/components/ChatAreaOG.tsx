'use client';

import React, { useEffect } from 'react';
import { useChat } from '@ai-sdk/react'
import Markdown from 'react-markdown'


import '../styles/chat.css'

const ChatAreaOG = ({ notification }: { notification: string }) => {
  const {messages, input, handleInputChange, handleSubmit } = useChat({api: '/api/chat'});
  const formRef = React.useRef<HTMLFormElement>(null);
  const submitButtonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (notification) {
      // Create a synthetic event to set the input
      const event = {
        target: {
          value: 'I have a new warehouse, and I\'m also going to be hiring my first employee, can you check my insurance coverage is still appropriate?'
        }
      } as React.ChangeEvent<HTMLInputElement>;
      
      handleInputChange(event);
      // Click the submit button to trigger form submission
      setTimeout(() => {
        submitButtonRef.current?.click();
      }, 0);
    }
  }, [notification]);

  return (
      <form
        ref={formRef}
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

          {/* Input area */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex space-x-4">
              <div className="flex-1">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                  ref={submitButtonRef}
                  type={"submit"}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
  );
};

export default ChatAreaOG; 