import { db } from "@/lib/db";
import { MagazineStatus, Prisma } from "../generated/client";
import slugify from "slugify";

export const createMagazine = async (data: {
  title: string;
  description?: string;
  coverImageUrl?: string;
  pdfUrl?: string;
  issueNumber?: number;
  publishedAt?: Date;
  status?: MagazineStatus;
  editorId?: string;
}) => {
  const slug = slugify(data.title, { lower: true, strict: true }) + "-" + Date.now();
  
  return db.magazine.create({
    data: {
      ...data,
      slug,
    },
  });
};

export const getMagazines = async (params?: {
  status?: MagazineStatus;
  take?: number;
  skip?: number;
}) => {
  const { status, take, skip } = params || {};
  return db.magazine.findMany({
    where: {
      status,
    },
    orderBy: {
      createdAt: "desc",
    },
    take,
    skip,
    include: {
      editor: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
};

export const getMagazineBySlug = async (slug: string) => {
  return db.magazine.findUnique({
    where: { slug },
    include: {
      editor: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
};

export const getLatestMagazine = async () => {
  return db.magazine.findFirst({
    where: {
      status: "PUBLISHED",
    },
    orderBy: {
      publishedAt: "desc",
    },
  });
};

export const updateMagazine = async (
  id: string,
  data: Prisma.MagazineUpdateInput
) => {
  return db.magazine.update({
    where: { id },
    data,
  });
};

export const deleteMagazine = async (id: string) => {
  return db.magazine.delete({
    where: { id },
  });
};
