import MainHeader from "@/components/layout/Header";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function HomePage() {
  const session = await auth();
  return (
    <div>
      <MainHeader />
    </div>
  );
}
