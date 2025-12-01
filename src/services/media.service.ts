import { db } from "@/lib/db";
import { uploadImage, deleteImageKit } from "@/lib/imagekit";
import { MediaType } from "@/generated/client";

export class MediaService {
  static async uploadMedia(file: File, userId: string, type: MediaType = "IMAGE") {
    // Upload to ImageKit
    const url = await uploadImage(file, "global-indians");

    // Save to DB
    return db.media.create({
      data: {
        url,
        type,
        uploadedById: userId,
        altText: file.name,
      },
    });
  }

  static async deleteMedia(id: string) {
    const media = await db.media.findUnique({
      where: { id },
    });

    if (!media) {
      throw new Error("Media not found");
    }

    // Attempt to delete from ImageKit (if we had the fileId stored, but we only stored URL. 
    // In a real app we should store fileId too. For now, we'll just delete from DB or try to extract ID)
    // Assuming we can't easily delete from ImageKit without ID, we'll skip that for now or improve schema later.
    
    return db.media.delete({
      where: { id },
    });
  }

  static async getMediaLibrary(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [media, total] = await Promise.all([
      db.media.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: { uploadedBy: true },
      }),
      db.media.count(),
    ]);

    return {
      media,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
