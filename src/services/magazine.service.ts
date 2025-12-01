import { db } from "@/lib/db";
import { MagazineStatus, Prisma } from "@/generated/client";
import slugify from "slugify";

export class MagazineService {
  static async createMagazine(data: {
    title: string;
    description?: string;
    coverImageUrl?: string;
    pdfUrl?: string;
    issueNumber?: number;
    editorId?: string;
  }) {
    const slug = slugify(data.title, { lower: true, strict: true }) + "-" + Date.now();

    return db.magazine.create({
      data: {
        title: data.title,
        slug,
        description: data.description,
        coverImageUrl: data.coverImageUrl,
        pdfUrl: data.pdfUrl,
        issueNumber: data.issueNumber,
        editorId: data.editorId,
      },
    });
  }

  static async updateMagazine(id: string, data: Prisma.MagazineUpdateInput) {
    return db.magazine.update({
      where: { id },
      data,
    });
  }

  static async getMagazineById(id: string) {
    return db.magazine.findUnique({
      where: { id },
      include: {
        editor: true,
        posts: true,
      },
    });
  }

  static async getAllMagazines(
    page = 1,
    limit = 10,
    filter: { status?: MagazineStatus } = {}
  ) {
    const skip = (page - 1) * limit;
    const where: Prisma.MagazineWhereInput = {
      status: filter.status,
    };

    const [magazines, total] = await Promise.all([
      db.magazine.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          editor: { select: { name: true } },
        },
      }),
      db.magazine.count({ where }),
    ]);

    return {
      magazines,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  static async approveMagazine(id: string) {
    return db.magazine.update({
      where: { id },
      data: { status: "PUBLISHED", publishedAt: new Date() },
    });
  }
}
