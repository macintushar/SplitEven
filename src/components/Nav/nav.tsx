"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Home,
  ArrowLeftRight,
  Package2,
  PanelLeft,
  Settings,
  Users,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Profile from "./Profile";
import { ModeToggle } from "../ui/mode-toggle";

type NavItemType = {
  icon: typeof Home;
  text: string;
  link: string;
};

const navItems: Array<NavItemType> = [
  {
    icon: Home,
    text: "Dashboard",
    link: "/app/",
  },
  {
    icon: Users,
    text: "Groups",
    link: "/app/groups/",
  },
  {
    icon: ArrowLeftRight,
    text: "Transactions",
    link: "/app/transactions/",
  },
];

const bottomNavItems: Array<NavItemType> = [
  {
    icon: Settings,
    text: "Settings",
    link: "/app/settings/",
  },
];

export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <aside className="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Link
            href="#"
            className="bg-primary text-primary-foreground group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <TooltipProvider>
            {navItems.map((navItem) => (
              <Tooltip key={navItem.link}>
                <TooltipTrigger asChild>
                  <Link
                    href={navItem.link}
                    className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                  >
                    <navItem.icon className="h-5 w-5" />
                    <span className="sr-only">{navItem.text}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{navItem.text}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <TooltipProvider>
            {bottomNavItems.map((bottomNavItem) => (
              <Tooltip key={bottomNavItem.link}>
                <TooltipTrigger asChild>
                  <Link
                    href={bottomNavItem.link}
                    className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                  >
                    <bottomNavItem.icon className="h-5 w-5" />
                    <span className="sr-only">{bottomNavItem.text}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  {bottomNavItem.text}
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex h-full flex-col sm:py-4 sm:pl-14">
        <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="bg-primary text-primary-foreground group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="text-foreground flex items-center gap-4 px-2.5"
                >
                  <Users className="h-5 w-5" />
                  Groups
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                >
                  <ArrowLeftRight className="h-5 w-5" />
                  Transactions
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full justify-center text-center">
            <div className="flex flex-col">
              {/* <Image
                src="https://utfs.io/f/8858c672-5b2e-4c8c-bb15-abea6b440aa7-crv4th.jpeg"
                width={36}
                height={36}
                alt="Avatar"
                className="mx-auto overflow-hidden rounded-full"
                priority={true}
              /> */}
              <h1 className="text-xl font-bold">SplitEven</h1>
            </div>
          </div>
          <div className="relative ml-auto flex gap-4 md:grow-0">
            <ModeToggle />
            <Profile />
          </div>
        </header>

        <div className="w-ful h-full px-5 py-3">{children}</div>
      </div>
    </div>
  );
}
