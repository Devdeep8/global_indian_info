import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import {
  PrismaClient,
  UserRole,
  PostType,
  PostStatus,
  PostVisibility,
  MediaType,
} from "@/generated/client";

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

const CATEGORIES = [
  {
    name: "Global Indian Exclusive",
    slug: "global-indian-exclusive",
    images: [
      "https://images.unsplash.com/photo-1560525821-d5615ef80c69",
      "https://images.unsplash.com/photo-1544980650-c44d18ec3324",
    ],
  },
  {
    name: "Youth",
    slug: "youth",
    images: [
      "https://images.unsplash.com/photo-1529156069896-857e497b772c",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    ],
  },
  {
    name: "Market Place",
    slug: "market-place",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1444653614773-995cb747b0e2",
    ],
  },
  {
    name: "Campus Life",
    slug: "campus-life",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    ],
  },
  {
    name: "Work Life",
    slug: "work-life",
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    ],
  },
  {
    name: "Cuisine",
    slug: "cuisine",
    images: [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    ],
  },
  {
    name: "Giving Back",
    slug: "giving-back",
    images: [
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433",
    ],
  },
  {
    name: "Startups & Entrepreneurs",
    slug: "startups-and-entrepreneurs",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    ],
  },
  {
    name: "Culture",
    slug: "culture",
    images: [
      "https://images.unsplash.com/photo-1532375810709-75b1da00539c",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    ],
  },
  {
    name: "Good Reads",
    slug: "good-reads",
    images: [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
      "https://images.unsplash.com/photo-1524985069026-a77e77d85854",
    ],
  },
];

async function main() {
  console.log("Start seeding...");

  // 1. Create Users
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: "admin@example.com" },
      update: {},
      create: {
        name: "Admin User",
        email: "admin@example.com",
        role: UserRole.ADMIN,
        bio: "System administrator",
        avatarUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      },
    }),
    prisma.user.upsert({
      where: { email: "editor@example.com" },
      update: {},
      create: {
        name: "Priya Sharma",
        email: "editor@example.com",
        role: UserRole.EDITOR,
        bio: "Senior Editor at Global Indian",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      },
    }),
    prisma.user.upsert({
      where: { email: "writer@example.com" },
      update: {},
      create: {
        name: "Rohan Gupta",
        email: "writer@example.com",
        role: UserRole.WRITER,
        bio: "Tech and Startup Correspondent",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      },
    }),
  ]);

  const authors = users.slice(1); // Use only editor and writer for posts

  // 2. Create Categories & Posts
  for (const cat of CATEGORIES) {
    const category = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: {
        name: cat.name,
        slug: cat.slug,
      },
    });

    console.log(`Seeding category: ${cat.name}`);

    // Create 6 posts per category
    for (let i = 1; i <= 6; i++) {
      const image =
        cat.images[i % cat.images.length] + "?auto=format&fit=crop&q=80&w=800";
      const author = authors[i % authors.length];

      await prisma.post.create({
        data: {
          title: `${cat.name} Story ${i}: Inspiring Global Indians`,
          slug: `${cat.slug}-story-${i}-${Date.now()}`,
          excerpt: `This is a fascinating excerpt for story ${i} in the ${cat.name} category. It highlights the achievements of Indians globally.`,
          content: `# ${cat.name} Story ${i}\n\nThis is the main content of the story. It talks about how Global Indians are making a mark in ${cat.name}. \n\n## Achievements\n\nThey have achieved great things...`,
          type: PostType.ARTICLE,
          coverImageUrl: image,
          status: PostStatus.PUBLISHED,
          visibility: PostVisibility.PUBLIC,
          publishedAt: new Date(),
          authorId: author.id,
          categoryId: category.id,
          views: Math.floor(Math.random() * 10000),
          likes: Math.floor(Math.random() * 500),
          metaTitle: `${cat.name} Story ${i}`,
          metaDescription: `Read about ${cat.name} Story ${i}`,
        },
      });
    }
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
