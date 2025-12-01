import { UserRole } from "@/generated/client";
import { auth } from "@/lib/auth"; // Assuming auth is set up in src/lib/auth.ts
import { redirect } from "next/navigation";

export async function checkRole(allowedRoles: UserRole[]) {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/sign-in");
  }

  const userRole = session.user.role as UserRole;

  if (!allowedRoles.includes(userRole)) {
    redirect("/unauthorized"); // Or some other error page
  }

  return session.user;
}

export function hasRole(userRole: UserRole, allowedRoles: UserRole[]) {
  return allowedRoles.includes(userRole);
}
