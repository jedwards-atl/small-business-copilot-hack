'use client';

import { Bell } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Card } from "./ui/card";
import { useRouter } from "next/navigation";

const Header = () => {
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000); // 60000ms = 1 minute

    return () => clearTimeout(timer);
  }, []);

  const handleNotificationClick = () => {
    setShowNotification(false);
    router.push('/business-growth');
  };

  return (
    <div className="flex flex-row justify-end items-center w-full py-6">
      <div className="flex items-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative bg-background-highlight rounded-full cursor-pointer"
            >
              <Bell className="h-5 w-5 text-sb-primary" />
              {showNotification && (
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0">
            <Card className="border-none shadow-none">
              <div 
                className="p-4 hover:bg-slate-50 cursor-pointer transition-colors"
                onClick={handleNotificationClick}
              >
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 bg-blue-500 rounded-full" />
                  <div>
                    <h4 className="text-sm font-medium">Change In Your Business Detected</h4>
                    <p className="text-sm text-muted-foreground">
                      It looks like you started paying rent for a new warehouse, click here to check your insurance coverage is still appropriate for your business.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-right">
                  Just now
                </p>
              </div>
            </Card>
          </PopoverContent>
        </Popover>

        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarImage src="/members/ash.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
