import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient, UserRole, PostType, PostStatus, PostVisibility, MediaType, CommentStatus, MagazineStatus } from "@/generated/client";

// MariaDB Adapter Connection
const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});

// Prisma Client
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');

  // Helper to create or get category
  async function getOrCreateCategory(name: string, slug: string, parentId?: string) {
    return prisma.category.upsert({
      where: { slug },
      update: {},
      create: { name, slug, parentId },
    });
  }

  // Helper to create or get user
  async function getOrCreateUser(email: string, name: string, role: UserRole, bio?: string, avatarUrl?: string) {
    return prisma.user.upsert({
      where: { email },
      update: {},
      create: { 
        email, 
        name, 
        role, 
        username: email.split('@')[0],
        bio,
        avatarUrl
      },
    });
  }

  // Create Users
  const admin = await getOrCreateUser('admin@example.com', 'Admin User', UserRole.ADMIN, 'System Admin', 'https://example.com/avatars/admin.jpg');
  const editor = await getOrCreateUser('editor@example.com', 'Editor User', UserRole.EDITOR, 'Chief Editor', 'https://example.com/avatars/editor.jpg');
  const writer1 = await getOrCreateUser('john@example.com', 'John Writer', UserRole.WRITER, 'Senior Writer', 'https://example.com/avatars/john.jpg');
  const writer2 = await getOrCreateUser('sarah@example.com', 'Sarah Writer', UserRole.WRITER, 'Tech Journalist', 'https://example.com/avatars/sarah.jpg');

  // Create Categories
  const globalIndiansCat = await getOrCreateCategory('Global Indians', 'global-indians');
  const businessCat = await getOrCreateCategory('Business', 'business');
  const techCat = await getOrCreateCategory('Technology', 'technology');
  const politicsCat = await getOrCreateCategory('Politics', 'politics');
  const cultureCat = await getOrCreateCategory('Culture', 'culture');

  // Global Indians Content
  // Satya Nadella
  const satyaMedia = await prisma.media.create({
    data: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/800px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg',
      type: MediaType.IMAGE,
      uploadedById: admin.id,
      altText: 'Satya Nadella'
    }
  });

  await prisma.post.upsert({
    where: { slug: 'satya-nadella-transforming-microsoft' },
    update: {},
    create: {
      title: 'Satya Nadella: Transforming Microsoft',
      slug: 'satya-nadella-transforming-microsoft',
      content: `# Satya Nadella: Transforming Microsoft\n\nSatya Narayana Nadella is an Indian-American business executive. He is the executive chairman and CEO of Microsoft, succeeding Steve Ballmer in 2014 as CEO and John W. Thompson in 2021 as chairman.\n\nUnder his leadership, Microsoft has shifted its focus to cloud computing and artificial intelligence, leading to a significant increase in the company's value.`,
      excerpt: 'How Satya Nadella transformed Microsoft into a cloud computing giant.',
      coverImageUrl: satyaMedia.url,
      status: PostStatus.PUBLISHED,
      authorId: writer1.id,
      categoryId: techCat.id,
      type: PostType.ARTICLE,
      publishedAt: new Date(),
    }
  });

  // Sundar Pichai
  const sundarMedia = await prisma.media.create({
    data: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_pichai.png/800px-Sundar_pichai.png',
      type: MediaType.IMAGE,
      uploadedById: admin.id,
      altText: 'Sundar Pichai'
    }
  });

  await prisma.post.upsert({
    where: { slug: 'sundar-pichai-leading-google' },
    update: {},
    create: {
      title: 'Sundar Pichai: Leading Google into the AI Era',
      slug: 'sundar-pichai-leading-google',
      content: `# Sundar Pichai: Leading Google into the AI Era\n\nPichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive. He is the chief executive officer (CEO) of Alphabet Inc. and its subsidiary Google.\n\nPichai began his career as a materials engineer. Following a short stint at the management consulting firm McKinsey & Co., he joined Google in 2004.`,
      excerpt: 'From humble beginnings in Chennai to leading one of the world\'s most powerful tech companies.',
      coverImageUrl: sundarMedia.url,
      status: PostStatus.PUBLISHED,
      authorId: writer1.id,
      categoryId: techCat.id,
      type: PostType.ARTICLE,
      publishedAt: new Date(),
    }
  });

  // Indra Nooyi
  const indraMedia = await prisma.media.create({
    data: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Indra_Nooyi_2018.jpg/800px-Indra_Nooyi_2018.jpg',
      type: MediaType.IMAGE,
      uploadedById: admin.id,
      altText: 'Indra Nooyi'
    }
  });

  await prisma.post.upsert({
    where: { slug: 'indra-nooyi-redefining-leadership' },
    update: {},
    create: {
      title: 'Indra Nooyi: Redefining Leadership',
      slug: 'indra-nooyi-redefining-leadership',
      content: `# Indra Nooyi: Redefining Leadership\n\nIndra Nooyi is an Indian-American business executive and former chairperson and chief executive officer of PepsiCo. She has consistently ranked among the world's most powerful women.\n\nNooyi joined PepsiCo in 1994 and was named CEO in 2006. She was instrumental in diversifying the company's brands and emphasizing sustainability.`,
      excerpt: 'Lessons in leadership from the former CEO of PepsiCo.',
      coverImageUrl: indraMedia.url,
      status: PostStatus.PUBLISHED,
      authorId: writer1.id,
      categoryId: businessCat.id,
      type: PostType.ARTICLE,
      publishedAt: new Date(),
    }
  });

  // Magazine
  const magazine = await prisma.magazine.upsert({
    where: { slug: 'global-indians-monthly-october-2023' },
    update: {},
    create: {
      title: 'Global Indians Monthly - October 2023',
      slug: 'global-indians-monthly-october-2023',
      description: 'The premier issue of Global Indians Monthly, featuring stories of success and innovation.',
      coverImageUrl: satyaMedia.url,
      issueNumber: 1,
      status: MagazineStatus.PUBLISHED,
      publishedAt: new Date('2023-10-01'),
      editorId: editor.id
    }
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });