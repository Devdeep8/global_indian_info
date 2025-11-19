import { generateSeoMeta } from "./tasks/generateSeoMeta";
import { calculateReadMinutes } from "./tasks/calculateReadMinutes";
import { db } from "../db";
export async function triggerPostWorkflows(postId: string) {
  try {
    // Fetch full post with relations (if needed)
    const post = await db.post.findUnique({
      where: { id: postId },
      include: {
        tags: { include: { tag: true } },
        author: true,
      },
    });

    if (!post) {
      console.error("Workflow error: Post not found:", postId);
      return;
    }

    // Run workflows in parallel (fast)
    await Promise.all([
      generateSeoMeta(post),
      calculateReadMinutes(post),
    //   indexPostInSearch(post),
    //   sendPostNotifications(post)
    ]);

    console.log("Workflows completed for post:", post.id);

  } catch (error) {
    console.error("Workflow execution error:", error);
  }
}
