import { db } from "@/lib/db";

class UsersService {
  async getCurrentUserProfile(userId: string) {
    try {
      const dbData = await db.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          emailVerified: true,
          image: true,
          role: true,
          bio: true,
          avatarUrl: true,
          socialLinks: true, // stored JSON
        },
      });

      if (!dbData) {
        throw new Error("User not found");
      }
      return dbData

    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw new Error("Failed to fetch user profile");
    }
  }
}

export const usersService = new UsersService();
