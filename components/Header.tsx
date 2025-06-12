import { Bell } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  return (
    <div className="flex flex-row justify-end items-center w-full py-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="relative bg-purple-100 rounded-full"
        >
          <Bell className="h-5 w-5 text-purple-800" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
        </Button>

        <Avatar className="h-8 w-8">
          <AvatarImage src="/members/ash.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
