import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full">
      {/* New Chat Button */}
      <div className="p-4">
        <button className="w-full bg-white text-gray-900 rounded-lg py-2 px-4 flex items-center justify-center hover:bg-gray-100">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          New Chat
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-2 py-2">
          {/* Sample chat items */}
          <button className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-800 mb-1">
            Marketing Strategy Discussion
          </button>
          <button className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-800 mb-1">
            Sales Report Analysis
          </button>
          <button className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-800 mb-1">
            Customer Feedback Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 