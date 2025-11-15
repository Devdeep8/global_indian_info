import { PostStatus, PostType } from "@/generated/client";
import { db } from "@/lib/db";

class PostService {
  async getPublishedArticles() {
    try {
      return db.post.findMany({
        where: {
          status: PostStatus.PUBLISHED,
          type: PostType.ARTICLE,
          isFeatured: false,
        },
        orderBy: { publishedAt: "desc" },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              avatarUrl: true,
            },
          },
          category: { select: { name: true, slug: true } },
        },
      });
    } catch (error) {
      console.error("Error fetching published articles:", error);
      throw new Error("Failed to load published articles");
    }
  }
  async getAllArticles() {
    try {
      return await db.post.findMany({
        where: { type: PostType.ARTICLE },
        include: {
          author: { select: { id: true, name: true, avatarUrl: true } },
        },
      });
    } catch (error) {
      console.error("Error fetching all articles:", error);
      throw new Error("Failed to load all articles");
    }
  }

  async getPublishedArticlesByCategory(categorySlug?: string) {
    try {
      // If categorySlug not provided, return all published
      if (!categorySlug) {
        return await this.getPublishedArticles();
      }
      // Fetch published posts under that category
      return await db.post.findMany({
        where: {
          status: PostStatus.PUBLISHED,
          type: PostType.ARTICLE,
          category : {
            slug : categorySlug
          }
        },
        orderBy: { publishedAt: "desc" },
        include: {
          author: { select: { id: true, name: true, avatarUrl: true } },
          category: { select: { name: true, slug: true } },
        },
      });
    } catch (error) {
      console.error("Error fetching articles by category:", error);
      throw new Error("Failed to load category-based articles");
    }
  }
}

export const postService = new PostService();
