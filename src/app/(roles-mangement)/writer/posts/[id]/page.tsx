import { db } from "@/lib/db";
import CreatePostForm from "../create/_components/post-form";
import { currentUser } from "@/utils/get-current-user.helper";
import { postService } from "@/services/posts/posts.service";
import { notFound } from "next/navigation";

export default async function EditPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await currentUser();
  if (!user) {
    return <div>Please log in</div>;
  }

  const { id } = await params;

  // Fetch categories
  const categories = await db.category.findMany({
    orderBy: { name: "asc" },
  });

  // Fetch post data
  const post = await postService.getArticleById(id);

  if (!post) {
    return notFound();
  }

  return (
    <main className="p-6 mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
      <CreatePostForm categories={categories} user={user} initialData={post} />
    </main>
  );
}
