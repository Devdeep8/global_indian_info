// your next-auth config
import { auth } from "@/lib/auth";
import { db } from "@/lib/db"; // prisma or database client

export default async function DraftPage() {
  // 1️⃣ Get authenticated user (server-side)
  const session = await auth();

  if (!session || !session.user?.id) {
    return (
      <main className="p-4">
        <h1 className="text-xl font-bold">Unauthorized</h1>
        <p>You must be logged in to view drafts.</p>
      </main>
    );
  }

  const userId = session.user.id;

  // 2️⃣ Fetch draft articles belonging to the user
  const articles = await db.post.findMany({
    where: {
      authorId: userId,
      status: "DRAFT",
      type: "ARTICLE",
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">Your Draft Articles</h1>

      {articles.length === 0 && (
        <p className="text-gray-500 mt-4">No draft articles found.</p>
      )}

      <ul className="mt-4 space-y-2">
        {articles.map((post) => (
          <li key={post.id} className="p-3 border rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">Draft</p>

            {post.excerpt && (
              <p className="text-sm mt-1 text-gray-500">{post.excerpt}</p>
            )}

            <p className="text-xs mt-1 text-gray-400">
              Created: {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
