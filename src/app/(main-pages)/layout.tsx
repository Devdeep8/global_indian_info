// app/(main-group)/layout.tsx
import Link from "next/link";
import { NamePromptDialog } from "@/app/(main-pages)/_components/new-dialog-prompt";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="p-4 border-b flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/sign-in">Sign In</Link>
      </nav>
      <div className="p-6">{children}</div>
      
      {/* Name prompt dialog - will only show if user has no name */}
      <NamePromptDialog />
    </div>
  );
}