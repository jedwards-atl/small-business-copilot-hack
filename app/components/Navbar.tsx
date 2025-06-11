import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">
          Business Chat
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">AP</span>
            </div>
            <span className="text-sm text-gray-700">Ashley Peacock</span>
          </div>
          
          <button className="text-sm text-gray-600 hover:text-gray-900">
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 