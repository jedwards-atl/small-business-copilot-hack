import { Separator } from "@radix-ui/react-separator";
import { Search, Plus } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const chatHistory = [
  "Create employee onboarding guide",
  "Cash flow analysis",
  "Streamlining daily workflow",
  "Insurance recommendations",
];

const Sidebar = () => {
  return (
    <div className="bg-white w-80 border-r border-gray-200 flex flex-col">
      {/* New Chat */}
      <div className="p-4">
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white cursor-pointer">
          New Chat
        </Button>
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search"
            className="pl-10 bg-gray-50 border-gray-200 rounded-lg"
          />
        </div>
      </div>

      {/* Projects */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            PROJECTS
          </h3>
          <Plus className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
          <span className="text-sm text-gray-700">Business Insurance</span>
        </div>
      </div>

      <Separator />

      {/* Chat History */}
      <div className="flex-1 px-4 py-4">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
          CHAT HISTORY
        </h3>
        <div className="space-y-1">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div className="w-2 h-2 bg-purple-300 rounded-full group-hover:bg-gray-400"></div>
              <span className="text-sm text-gray-700 truncate">{chat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
