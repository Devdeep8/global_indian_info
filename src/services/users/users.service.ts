import { db } from "@/lib/db";

class UsersService {
  // User service methods would go here
  async getCurrentUserProfile(userId: string) {
    try {
      return await db.user.findUnique({
        where: {
          username: userId,
        },
        select: {
          id: true,
          email: true,
          emailVerified: true,
          image: true,
          role: true,
          bio: true,
          avatarUrl: true,
          socialLinks: true,
        },
      });
    } catch (error) {
      console.log("Error in fetching user profile : ", error);
      throw new Error("Failed to fetch user profile");
    }
  }
}

export const usersService = new UsersService();
