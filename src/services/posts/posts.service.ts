import { PostStatus, PostType } from "@/generated/client/client";
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
  
async updateArticle(slug: string, data: any) {
  try {
    const { tagIds, ...rest } = data;

    console.log("Updating article with data:", tagIds , rest);

    const cleanedData = Object.fromEntries(
      Object.entries(rest).filter(([_, v]) => v !== undefined)
    );

    return await db.post.update({
      where: { slug },
      data: {
        ...cleanedData,
        ...(Array.isArray(tagIds)
          ? {
              tags: {
                deleteMany: {}, // remove existing tags
                create: tagIds.map((tagId: string) => ({ tagId })),
              },
            }
          : {}),
      },
    });
  } catch (error: any) {
    console.error("Error updating article:", error);
    throw new Error(`Database Error: ${error.message}`);
  }
}

}

export const postService = new PostService();
