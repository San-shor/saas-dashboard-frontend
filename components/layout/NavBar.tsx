"use client";

import React from "react";
import { useSidebarStore } from "@/store/useSidebarStore";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  Search,
  Bell,
  User,
  LogOut,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function NavBar() {
  const { isCollapsed, setMobileOpen } = useSidebarStore();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex h-16 items-center border-b border-stone-200/60 bg-stone-50/80 backdrop-blur-md transition-all duration-300",
        isCollapsed ? "md:pl-[70px]" : "md:pl-[250px]"
      )}
    >
      <div className="flex w-full items-center justify-between px-4 md:px-6">
        {/* Left side */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-600 md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Search */}
          <div className="hidden items-center sm:flex">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <Input
                placeholder="Search anything..."
                className="w-[200px] border-stone-200 bg-white pl-9 text-slate-700 placeholder:text-stone-400 focus-visible:ring-violet-400 lg:w-[320px]"
              />
            </div>
          </div>
          {/* Mobile search button */}
          <Button variant="ghost" size="icon" className="text-slate-600 sm:hidden">
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-9 w-9 text-slate-600 hover:text-slate-900">
                <Bell className="h-4 w-4" />
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">
                  3
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[320px]">
              <DropdownMenuLabel className="flex items-center justify-between">
                <span className="text-slate-800">Notifications</span>
                <Badge variant="secondary" className="bg-violet-100 text-violet-700 text-xs">
                  3 new
                </Badge>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <p className="text-sm font-medium text-slate-800">New task assigned</p>
                <p className="text-xs text-slate-500">
                  &quot;Design homepage UI&quot; was assigned to you
                </p>
                <p className="text-xs text-stone-400">2 min ago</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <p className="text-sm font-medium text-slate-800">Project updated</p>
                <p className="text-xs text-slate-500">
                  Website Redesign moved to In Progress
                </p>
                <p className="text-xs text-stone-400">1 hour ago</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <p className="text-sm font-medium text-slate-800">New comment</p>
                <p className="text-xs text-slate-500">
                  Sarah commented on &quot;API Integration&quot;
                </p>
                <p className="text-xs text-stone-400">3 hours ago</p>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-sm font-medium text-violet-600">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative flex items-center gap-2 rounded-full px-2 py-1.5"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-slate-800 text-white text-xs">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="hidden flex-col items-start md:flex">
                  <span className="text-sm font-medium text-slate-800">John Doe</span>
                  <span className="text-xs text-stone-500">Admin</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-800">John Doe</span>
                  <span className="text-xs text-stone-500">
                    john@example.com
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-slate-700">
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-slate-700">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-slate-700">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help & Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-rose-600 focus:text-rose-600">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
