// app/(main-group)/layout.tsx
import { NamePromptDialog } from "@/app/(main-pages)/_components/new-dialog-prompt";
import CategoriesTabs from "@/components/layout/categories-tabs";
import MainHeader from "@/components/layout/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainHeader />
      <CategoriesTabs />
      <div className="p-6">{children}</div>

      {/* Name prompt dialog - will only show if user has no name */}
      <NamePromptDialog />
    </div>
  );
}
