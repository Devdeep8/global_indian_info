import { db } from "@/lib/db";
import { UserRole } from "@/generated/client";

export class UserService {
  static async getUserById(id: string) {
    return db.user.findUnique({
      where: { id },
    });
  }

  static async updateUserRole(id: string, role: UserRole) {
    return db.user.update({
      where: { id },
      data: { role },
    });
  }

  static async getUsersByRole(role: UserRole) {
    return db.user.findMany({
      where: { role },
    });
  }

  static async getAllUsers(page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const [users, total] = await Promise.all([
      db.user.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      db.user.count(),
    ]);

    return {
      users,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
