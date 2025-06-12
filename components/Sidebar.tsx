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
  { icon: "/apps/sb.png", height: 19, width: 69 },
  { icon: "/apps/shopify.png", height: 25, width: 80 },
  { icon: "/apps/g-calendar.png", height: 22, width: 73 },
  { icon: "/apps/g-analytics.png", height: 24, width: 101 },
  { icon: "/apps/instagram.png", height: 24, width: 101 },
  { title: "Xero", icon: "/apps/xero.png", height: 29, width: 29 },
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

      <div className="flex flex-col h-full justify-between pb-10">
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
            {connectedApps.map(({ icon, title, height, width }) => (
              <div
                key={icon}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <Image src={icon} alt={icon} width={width} height={30} />
                {title && (
                  <span className="text-sm text-gray-900 truncate">
                    {title}
                  </span>
                )}
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
