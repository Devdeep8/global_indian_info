import { auth } from "@/lib/auth";
import { ArticleService } from "@/services/article.service";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { PlusCircle } from "lucide-react";

export default async function WriterPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const { articles } = await ArticleService.getAllArticles(1, 10, { authorId: session.user.id });

  return (
    <main className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Writer Dashboard</h1>
        <Link href="/writer/posts/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Post
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        <h2 className="text-xl font-semibold">My Recent Posts</h2>
        {articles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{article.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(article.createdAt), "PPP")}
                  </p>
                </div>
                <Badge variant={article.status === "PUBLISHED" ? "default" : "secondary"}>
                  {article.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
            </CardContent>
          </Card>
        ))}
        {articles.length === 0 && (
          <p className="text-muted-foreground">You haven't created any posts yet.</p>
        )}
      </div>
    </main>
  );
}