import { db } from "@/lib/db";


export async function calculateReadMinutes(post: any) {
  try {
    if (post.readMinutes) return;

    const words = post.content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);

    await db.post.update({
      where: { id: post.id },
      data: { readMinutes: minutes },
    });

  } catch (err) {
    console.error("calculateReadMinutes error:", err);
  }
}
