import { db } from "@/lib/db";

export async function generateSeoMeta(post: any) {
  try {
    const updates: any = {};

    // Auto-generate metaDescription if missing
    if (!post.metaDescription) {
      updates.metaDescription = post.excerpt ?? post.content.slice(0, 150) + "...";
    }

    // Auto-generate metaTitle if missing
    if (!post.metaTitle) {
      updates.metaTitle = post.title.substring(0, 60);
    }

    // Auto-generate keywords from tags
    if (!post.metaKeywords && post.tags?.length) {
      updates.metaKeywords = post.tags.map((t: { tag: { name: any; }; }) => t.tag.name).join(", ");
    }

    // Only update if needed
    if (Object.keys(updates).length > 0) {
      await db.post.update({
        where: { id: post.id },
        data: updates,
      });
    }
  } catch (err) {
    console.error("generateSeoMeta error:", err);
  }
}
