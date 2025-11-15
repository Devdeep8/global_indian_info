import { db } from "@/lib/db";
import slugify from "slugify";

async function run() {
  const users = await db.user.findMany();

  for (const user of users) {
    const base = user.name ? slugify(user.name, { lower: true }) : `user-${user.id.slice(0, 6)}`;
    
    // ensure uniqueness by appending user id last 4 chars
    const username = `${base}-${user.id.slice(-4)}`;

    await db.user.update({
      where: { id: user.id },
      data: { username }
    });

    console.log(`Updated user ${user.email} -> ${username}`);
  }

  console.log("Backfilling complete!");
}

run();
