"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";
import { TooltipProvider } from "@/components/ui/tooltip";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { isCollapsed } = useSidebarStore();

  return (
    <TooltipProvider delayDuration={0}>
      <div className="min-h-screen bg-stone-50">
        {/* Sidebar */}
        <SideBar />

        {/* Main content area */}
        <div
          className={cn(
            "flex min-h-screen flex-col transition-all duration-300",
            isCollapsed ? "md:ml-[70px]" : "md:ml-[250px]"
          )}
        >
          {/* Top Navbar */}
          <NavBar />

          {/* Page Content */}
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </TooltipProvider>
  );
}
