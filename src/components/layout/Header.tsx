"use client";
import React from "react";
import {
  Search,
  User,
  Menu,
  ChevronDown,
  LogOut,
  Settings,
  UserCircle,
  NewspaperIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MainHeader = () => {
  const { data: session, status } = useSession();

  // Derive values from session - no need for separate state!
  const isLoading = status === "loading";
  const isLoggedIn = status === "authenticated";
  const user = session?.user;
  const pathname = usePathname();
  const siteName = "Global Indian Info";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const isActiveTab = (href: string) => {
    if (href == "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className=" ">
      <div className="container mx-auto  px-4">
        <div className="flex h-16 items-center justify-between  gap-4">
          {/* Site Name/Logo */}
          <div className="flex items-center gap-4">
            <NewspaperIcon className=" w-8 h-8" />
            <Link
              href="/"
              className="text-[21px] font-bold text-foreground hover:text-foreground/80 transition-colors"
            >
              {siteName}
            </Link>

            {/* Navigation Items - Desktop */}
          </div>
          <div>
            <nav className="hidden md:flex gap-6 md:text-sm">
              {navItems.map((item, index) => {
                const isActive = isActiveTab(item.href);
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors relative py-1",
                      isActive
                        ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          {/* Right Section: Search + User Nav */}
          <div className="flex items-center gap-4 justify-end">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search News..."
                className="w-[100px] lg:w-[200px] pl-8 bg-background"
              />
            </div>

            {/* User Navigation */}
            {isLoading ? (
              <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
            ) : isLoggedIn && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      {user.image ? (
                        <img
                          src={user.image}
                          alt={user.name || "User"}
                          className="h-8 w-8 rounded-full"
                        />
                      ) : (
                        <User className="h-4 w-4 text-primary" />
                      )}
                    </div>

                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium text-foreground">
                        {user.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    className="cursor-pointer text-destructive focus:text-destructive"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/sign-in">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign In
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            {/* <ModeToggle/> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
