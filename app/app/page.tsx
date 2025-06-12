import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChatAreaOG from "../components/ChatAreaOG";

const ChatsPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />
        
        {/* Chat area */}
        <div className="flex-1 overflow-hidden">
          <ChatAreaOG />
        </div>
      </div>
    </div>
  );
};

export default ChatsPage;
