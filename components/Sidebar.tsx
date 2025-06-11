"use client";

import {
  Search,
  Plus,
  Shield,
  ListChecks,
  Calendar1,
  Store,
  ListCheck,
  Clock,
  TrendingUp,
  ChartColumnIncreasing,
  Instagram,
  UserSearch,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const projects = [
  {
    title: "Business Growth",
    icon: TrendingUp,
    href: "/business-growth",
    selected: false, // TODO: Make this dynamic based on the current route
  },
  {
    title: "Task Manager",
    icon: ListChecks,
    href: "/task-manager",
    selected: true, // TODO: Make this dynamic based on the current route
  },
];

const connectedApps = [
  { title: "Simply Business", icon: Shield },
  { title: "Shopify", icon: Store },
  { title: "Google Calendar", icon: Calendar1 },
  { title: "Google Analytics", icon: ChartColumnIncreasing },
  { title: "Instagram", icon: Instagram },
  { title: "Xero", icon: UserSearch },
];

const chatHistory = [
  "Create employee onboarding guide",
  "Cash flow analysis",
  "Streamlining daily workflow",
  "Insurance recommendations",
]; // TODO: does this need to be dynamic? Do we have access to chat histories via the API?

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white w-80 border-r border-gray-200 flex flex-col p-4">
      {/* Header */}
      <div className="flex flex-row items-center gap-2 mb-6">
        <Image
          src="/ai-orb.png"
          className="relative z-10 bg-transparent"
          alt="orb"
          width={40}
          height={40}
        />
        <h3 className="text-sm font-medium text-gray-900 tracking-wide">
          Ash & Co. AI Assistant
        </h3>
      </div>

      <div className="flex flex-col space-y-16">
        <div className="flex flex-col gap-4">
          {/* New Chat */}
          <div className="">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white cursor-pointer">
              New Chat
            </Button>
          </div>

          {/* Search */}
          <div className="">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4" />
              <Input
                placeholder="Search"
                className="pl-10 bg-gray-50 border-gray-200 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-purple-800 uppercase tracking-wide">
              PROJECTS
            </h3>
            <Plus className="w-4 h-4 text-purple-800 cursor-pointer" />
          </div>
          <div className="flex flex-col space-y-3">
            {projects.map(({ title, icon: Icon, href }) => (
              <Link href={href} key={title}>
                <div
                  className={cn(
                    pathname === href
                      ? "border-purple-600 bg-purple-600"
                      : "hover:bg-purple-200 border-purple-200",
                    "flex items-center space-x-3 px-2 py-4 rounded-lg cursor-pointer border"
                  )}
                >
                  <Icon
                    className={cn(
                      pathname === href ? "text-white" : "text-purple-600",
                      "w-4 h-4"
                    )}
                  />
                  <span
                    className={cn(
                      pathname === href ? "text-white" : "text-gray-900",
                      "text-sm"
                    )}
                  >
                    {title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Connected Apps */}
        <div className="">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-purple-800 uppercase tracking-wide">
              PROJECTS
            </h3>
            <Plus className="w-4 h-4 text-purple-800 cursor-pointer" />
          </div>
          <div className="space-y-1">
            {connectedApps.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <Icon className="w-4 h-4 text-purple-600" />
                {/* <div className="w-2 h-2 bg-purple-300 rounded-full group-hover:bg-gray-400"></div> */}
                <span className="text-sm text-gray-900 truncate">{title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1">
          <h3 className="text-sm font-medium text-purple-800 uppercase tracking-wide mb-3">
            CHAT HISTORY
          </h3>
          <div className="space-y-1">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <Clock className="w-4 h-4 text-gray-600" />
                {/* <div className="w-2 h-2 bg-purple-300 rounded-full group-hover:bg-gray-400"></div> */}
                <span className="text-sm text-gray-900 truncate">{chat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
