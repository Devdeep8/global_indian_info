import { db } from "@/lib/db";
import slugify from "slugify";


export const tagService = {
  async findOrCreateTags(tagNames: string[]) {
    if (!tagNames?.length) return [];

    const normalized = tagNames.map((name) => ({
      name,
      slug: slugify(name, { lower: true, strict: true }),
    }));

    const tagRecords = await Promise.all(
      normalized.map((tag) =>
        db.tag.upsert({
          where: { slug: tag.slug },
          update: {},
          create: { name: tag.name, slug: tag.slug },
        })
      )
    );

    return tagRecords;
  },
};