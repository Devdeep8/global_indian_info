// app/(main-group)/layout.tsx
import MainHeader from "@/components/layout/Header";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainHeader />
      <div className="p-6">{children}</div>

      {/* Name prompt dialog - will only show if user has no name */}
    </div>
  );
}
