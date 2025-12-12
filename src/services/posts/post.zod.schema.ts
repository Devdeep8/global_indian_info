import { z } from "zod";

export const createPostSchema = z
  .object({
    title: z.string().min(3),
    slug: z.string().min(3),
    excerpt: z.string().optional(),
    content: z.string().min(1),
    readMinutes: z.number().optional(),
    type: z.enum(["BLOG", "ARTICLE", "FEATURE", "INTERVIEW"]),
    coverImageUrl: z.string().optional(),
    status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).optional(),
    visibility: z.enum(["PUBLIC", "PRIVATE", "SUBSCRIBERS_ONLY"]).optional(),
    isFeatured: z.boolean().optional(),
    scheduledAt: z.string().datetime().nullable().optional(),
    publishedAt: z.string().datetime().nullable().optional(),
    authorId: z.string(),
    magazineId: z.string().optional().nullable(),
    categoryId: z.string().optional().nullable(),

    tags: z.array(z.string()).optional().default([]), // ← Add this

    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    metaKeywords: z.string().optional(),
    slugHistory: z.any().optional(),
    seoSchema: z.any().optional(),
    settings: z.any().optional(),
  })
  .superRefine((data, ctx) => {
    if (
      (data.type === "FEATURE" || data.type === "INTERVIEW") &&
      !data.magazineId
    ) {
      ctx.addIssue({
        code: "custom",
        message: "FEATURE and INTERVIEW posts must have a magazineId",
        path: ["magazineId"],
      });
    }

    if (data.type === "BLOG" && data.magazineId) {
      ctx.addIssue({
        code: "custom",
        message: "BLOG posts cannot belong to a magazine",
        path: ["magazineId"],
      });
    }
  });

export const updatePostSchema = z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  excerpt: z.string().optional(),
  content: z.string().optional(),
  readMinutes: z.number().optional(),
  type: z.enum(["BLOG", "ARTICLE", "FEATURE", "INTERVIEW"]).optional(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).optional(),
  visibility: z.enum(["PUBLIC", "PRIVATE", "SUBSCRIBERS_ONLY"]).optional(),
  isFeatured: z.boolean().optional(),

  magazineId: z.string().nullable().optional(),
  categoryId: z.string().nullable().optional(),

  tags: z.array(z.string()).optional(),

  scheduledAt: z.string().datetime().nullable().optional(),
  publishedAt: z.string().datetime().nullable().optional(),
  coverImageUrl: z.string().nullable().optional(),
});
