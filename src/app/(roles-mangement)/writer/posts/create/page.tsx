// app/posts/create/page.tsx
import { db } from "@/lib/db";
import CreatePostForm from "./_components/post-form";
import { currentUser } from "@/utils/get-current-user.helper";

export default async function Create() {
  // Fetch categories from DB (server-side)
  const categories = await db.category.findMany({
    orderBy: { name: "asc" }
  });

  const user = await currentUser()

  return (
    <main className="p-6  mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create a New Post</h1>

      <CreatePostForm categories={categories} user={user} />
    </main>
  );
}
