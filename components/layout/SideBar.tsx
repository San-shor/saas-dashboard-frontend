"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Calendar,
  BarChart3,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: Calendar,
  },
  {
    title: "Team",
    href: "/team",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
];

const bottomNavItems = [
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

function SidebarContent({ isCollapsed }: { isCollapsed: boolean }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div
        className={cn(
          "flex h-16 items-center border-b border-slate-700/50 px-4",
          isCollapsed ? "justify-center" : "gap-3"
        )}
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500 text-white">
          <Zap className="h-4 w-4" />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white">TaskFlow</span>
            <span className="text-[10px] text-slate-400">
              Project Manager
            </span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 space-y-1 overflow-y-auto p-3">
        <div className={cn("mb-2", !isCollapsed && "px-2")}>
          {!isCollapsed && (
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Menu
            </p>
          )}
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const linkContent = (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-violet-500/15 text-violet-400"
                  : "text-slate-400 hover:bg-slate-700/50 hover:text-slate-200",
                isCollapsed && "justify-center px-2"
              )}
            >
              <item.icon className={cn("h-4 w-4 shrink-0")} />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          );

          if (isCollapsed) {
            return (
              <Tooltip key={item.href} delayDuration={0}>
                <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                <TooltipContent side="right" className="font-medium">
                  {item.title}
                </TooltipContent>
              </Tooltip>
            );
          }

          return <React.Fragment key={item.href}>{linkContent}</React.Fragment>;
        })}
      </div>

      {/* Bottom section */}
      <div className="border-t border-slate-700/50 p-3">
        {bottomNavItems.map((item) => {
          const isActive = pathname === item.href;
          const linkContent = (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-violet-500/15 text-violet-400"
                  : "text-slate-400 hover:bg-slate-700/50 hover:text-slate-200",
                isCollapsed && "justify-center px-2"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          );

          if (isCollapsed) {
            return (
              <Tooltip key={item.href} delayDuration={0}>
                <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                <TooltipContent side="right" className="font-medium">
                  {item.title}
                </TooltipContent>
              </Tooltip>
            );
          }

          return <React.Fragment key={item.href}>{linkContent}</React.Fragment>;
        })}
      </div>
    </div>
  );
}

export default function SideBar() {
  const { isCollapsed, isMobileOpen, toggleCollapsed, setMobileOpen } =
    useSidebarStore();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden h-screen bg-slate-900 transition-all duration-300 ease-in-out md:fixed md:inset-y-0 md:left-0 md:z-50 md:flex md:flex-col",
          isCollapsed ? "md:w-[70px]" : "md:w-[250px]"
        )}
      >
        <SidebarContent isCollapsed={isCollapsed} />

        {/* Collapse toggle button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-20 z-50 hidden h-6 w-6 rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 md:flex"
          onClick={toggleCollapsed}
        >
          {isCollapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </Button>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-[250px] bg-slate-900 p-0 border-slate-700">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
          </SheetHeader>
          <SidebarContent isCollapsed={false} />
        </SheetContent>
      </Sheet>
    </>
  );
}
