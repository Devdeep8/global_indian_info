import { PostStatus, PostType } from "@/generated/client/client";
import { db } from "@/lib/db";

class PostService {
  async getFeaturedArticles() {
    try {
      return await db.post.findMany({
        where: {
          status: PostStatus.PUBLISHED,
          type: PostType.ARTICLE,
          isFeatured: true,
        },
        orderBy: {
          publishedAt: "desc",
        },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              avatarUrl: true,
            },
          },
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
        take: 10, // limit for speed
      });
    } catch (error) {
      console.error("Error fetching featured articles:", error);
      throw new Error("Failed to load featured carousel articles");
    }
  }

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
          category: {
            slug: categorySlug,
          },
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

  async createArticle(Data: any) {
    try {
      return await db.post.create({
        data: Data,
      });
    } catch (error) {
      console.error("Error creating article:", error);
      throw new Error(`Database Error : ${error}`);
    }
  }

  async getArticleById(id: string) {
    try {
      return await db.post.findUnique({
        where: { id },
        include: {
          author: { select: { id: true, name: true, avatarUrl: true } },
          tags: { include: { tag: true } },
          category: true,
        },
      });
    } catch (error) {
      console.error("Error fetching article by ID:", error);
      throw new Error(`Failed to fetch article: ${error}`);
    }
  }

  async updateArticle(id: string, data: any) {
    try {
      return await db.post.update({
        where: { id },
        data: data,
      });
    } catch (error) {
      console.error("Error updating article:", error);
      throw new Error(`Failed to update article: ${error}`);
    }
  }

  async deleteArticle(id: string) {
    try {
      return await db.post.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Error deleting article:", error);
      throw new Error(`Failed to delete article: ${error}`);
    }
  }
}

export const postService = new PostService();
