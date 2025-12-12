// MainHeader.tsx
"use client";
import React from "react";
import {
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { GoogleTranslate } from "../ui/google-translate";

// --- 1. PRESENTATIONAL UI COMPONENT ---
// This component only renders the UI based on the props it receives.
// It contains no logic of its own.

type NavItem = {
  label: string;
  href: string;
  isActive: boolean;
};

type MainHeaderViewProps = {
  siteName: string;
  navItems: NavItem[];
  isLoading: boolean;
  isLoggedIn: boolean;
  user: any | undefined;
  onSignOut: () => void;
  onProfileClick: () => void;
  onSettingsClick: () => void;
  onAdminPanelClick: () => void;
  onWriterPanelClick: () => void;
};

const MainHeaderView: React.FC<MainHeaderViewProps> = ({
  siteName,
  navItems,
  isLoading,
  isLoggedIn,
  user,
  onSignOut,
  onProfileClick,
  onSettingsClick,
  onAdminPanelClick,
  onWriterPanelClick,
}) => {
  return (
    <header className="">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/global_indians.png"
              alt={`${siteName} Logo`}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  item.isActive ? "text-primary" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section: User Nav */}
          <div className="flex items-center gap-4 justify-end">
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
                  <DropdownMenuItem
                    onClick={onProfileClick}
                    className="cursor-pointer"
                  >
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={onSettingsClick}
                    className="cursor-pointer"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {(user as any).role === "ADMIN" && (
                    <DropdownMenuItem
                      onClick={onAdminPanelClick}
                      className="cursor-pointer"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Admin Panel</span>
                    </DropdownMenuItem>
                  )}
                  {((user as any).role === "WRITER" ||
                    (user as any).role === "ADMIN") && (
                    <DropdownMenuItem
                      onClick={onWriterPanelClick}
                      className="cursor-pointer"
                    >
                      <NewspaperIcon className="mr-2 h-4 w-4" />
                      <span>Writer Panel</span>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={onSignOut}
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

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium hover:text-primary transition-colors",
                        item.isActive ? "text-primary" : "text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <GoogleTranslate />
            <ModeToggle />
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
};

// --- 2. LOGIC COMPONENT (CONTAINER) ---
// This component handles all the logic, state, and data fetching.
// It then renders the UI component, passing data and functions as props.

const MainHeader = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  // --- State and Data ---
  const siteName = "Global Indian Info";

  // Derived state from the session hook
  const isLoading = status === "loading";
  const isLoggedIn = status === "authenticated";
  const user = session?.user;

  // Define navigation structure
  const navItemsConfig = [
    { label: "Home", href: "/" },
    { label: "Cover Stories", href: "/category/cover-stories" },
    { label: "Youth", href: "/category/youth" },
    { label: "Market Place", href: "/category/market-place" },
    { label: "Campus Life", href: "/category/campus-life" },
    { label: "Work Life", href: "/category/work-life" },
    { label: "Cuisine", href: "/category/cuisine" },
    { label: "Culture", href: "/category/culture" },
    { label: "Giving Back", href: "/category/giving-back" },
  ];

  // Prepare nav items with active state for the view component
  const navItems = navItemsConfig.map((item) => ({
    ...item,
    isActive:
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
  }));

  // --- Event Handlers ---
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const handleProfileClick = () => {
    if (user?.username) {
      window.location.href = `/profile/${user.username}`;
    }
  };

  const handleSettingsClick = () => {
    // Placeholder for settings navigation logic
    console.log("Navigate to Settings");
    // Example: window.location.href = '/settings';
  };

  const handleAdminPanelClick = () => {
    window.location.href = "/admin";
  };

  const handleWriterPanelClick = () => {
    window.location.href = "/writer";
  };

  // --- Render the UI Component, passing logic and data as props ---
  return (
    <MainHeaderView
      siteName={siteName}
      navItems={navItems}
      isLoading={isLoading}
      isLoggedIn={isLoggedIn}
      user={user}
      onSignOut={handleSignOut}
      onProfileClick={handleProfileClick}
      onSettingsClick={handleSettingsClick}
      onAdminPanelClick={handleAdminPanelClick}
      onWriterPanelClick={handleWriterPanelClick}
    />
  );
};

export default MainHeader;
