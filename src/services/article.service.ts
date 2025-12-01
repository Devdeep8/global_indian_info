import { db } from "@/lib/db";
import { PostStatus, PostType, Prisma } from "@/generated/client";
import slugify from "slugify";

export class ArticleService {
  static async createArticle(data: {
    title: string;
    content: string;
    authorId: string;
    excerpt?: string;
    coverImageUrl?: string;
    categoryId?: string;
    tags?: string[];
    type?: PostType;
  }) {
    const slug = slugify(data.title, { lower: true, strict: true }) + "-" + Date.now();
    
    return db.post.create({
      data: {
        title: data.title,
        content: data.content,
        slug,
        authorId: data.authorId,
        excerpt: data.excerpt,
        coverImageUrl: data.coverImageUrl,
        categoryId: data.categoryId,
        type: data.type || "ARTICLE",
        tags: data.tags
          ? {
              create: data.tags.map((tagId) => ({
                tag: { connect: { id: tagId } },
              })),
            }
          : undefined,
      },
    });
  }

  static async updateArticle(id: string, data: Prisma.PostUpdateInput) {
    return db.post.update({
      where: { id },
      data,
    });
  }

  static async getArticleById(id: string) {
    return db.post.findUnique({
      where: { id },
      include: {
        author: true,
        category: true,
        tags: { include: { tag: true } },
        media: { include: { media: true } },
      },
    });
  }

  static async getArticleBySlug(slug: string) {
    return db.post.findUnique({
      where: { slug },
      include: {
        author: true,
        category: true,
        tags: { include: { tag: true } },
        media: { include: { media: true } },
      },
    });
  }

  static async getAllArticles(
    page = 1,
    limit = 10,
    filter: { status?: PostStatus; authorId?: string; type?: PostType } = {}
  ) {
    const skip = (page - 1) * limit;
    const where: Prisma.PostWhereInput = {
      status: filter.status,
      authorId: filter.authorId,
      type: filter.type,
    };

    const [articles, total] = await Promise.all([
      db.post.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          author: { select: { name: true, image: true } },
          category: { select: { name: true } },
        },
      }),
      db.post.count({ where }),
    ]);

    return {
      articles,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  static async approveArticle(id: string) {
    return db.post.update({
      where: { id },
      data: { status: "PUBLISHED", publishedAt: new Date() },
    });
  }
  
  static async rejectArticle(id: string) {
      return db.post.update({
        where: { id },
        data: { status: "DRAFT" }, // Or REJECTED if enum exists, but DRAFT is safe
      });
    }
}
