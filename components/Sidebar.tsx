"use client";

import {
  Search,
  Plus,
  Shield,
  ListChecks,
  Calendar1,
  Store,
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
    <div className="bg-white w-80 border-r border-gray-200 flex flex-col p-4 h-full">
      {/* Header */}
      <div className="flex flex-row items-center gap-2 mb-6">
        <Link href="/">
          <Image
            src="/ai-orb.png"
            className="relative z-10 bg-transparent"
            alt="orb"
            width={40}
            height={40}
          />
        </Link>
        <h3 className="text-sm font-medium text-sb-primary tracking-wide">
          Business Buddy
        </h3>
      </div>

      <div className="flex flex-col h-full max-lg:justify-between xl:gap-16 pb-10">
        <div className="flex flex-col gap-4">
          {/* New Chat */}
          <div className="">
            <Link href="/chat">
              <Button className="w-full bg-sb-primary hover:bg-sb-primary-hover text-white cursor-pointer">
                New Chat
              </Button>
            </Link>
          </div>

          {/* Search */}
          <div className="">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4" />
              <Input
                placeholder="Search"
                className="pl-10 bg-background-highlight border-gray-200 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-sb-primary uppercase tracking-wide">
              PROJECTS
            </h3>
            <Plus className="w-4 h-4 text-sb-primary cursor-pointer" />
          </div>
          <div className="flex flex-col space-y-3">
            {projects.map(({ title, icon: Icon, href }) => (
              <Link href={href} key={title}>
                <div
                  className={cn(
                    pathname === href
                      ? "text-sb-primary bg-sb-primary"
                      : "hover:bg-sb-light border-sb-light",
                    "flex items-center space-x-3 px-2 py-4 rounded-lg cursor-pointer border"
                  )}
                >
                  <Icon
                    className={cn(
                      pathname === href ? "text-white" : "text-sb-primary",
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
            <h3 className="text-sm font-medium text-sb-primary uppercase tracking-wide">
              CONNECTED APPS
            </h3>
            <Plus className="w-4 h-4 text-sb-primary cursor-pointer" />
          </div>
          <div className="space-y-1">
            {connectedApps.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <Icon className="w-4 h-4 text-sb-primary" />
                <span className="text-sm text-gray-900 truncate">{title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat History */}
        <div className="flex flex-col">
          <h3 className="text-sm font-medium text-sb-primary uppercase tracking-wide mb-3">
            CHAT HISTORY
          </h3>
          <div className="space-y-1">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <Clock className="w-4 h-4 text-medium" />
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
