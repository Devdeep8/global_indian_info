"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export const currentUser = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user) return undefined;
  return user;
};

export const getUserIdByUsername = async (username: string) => {
  try {
    const userObej = await db.user.findUnique({
      where: { username },
      select: { id: true },
    });

    return userObej?.id;
  } catch (error) {
    return undefined;
  }
};
