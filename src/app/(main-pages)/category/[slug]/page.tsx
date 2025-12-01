import { ArticleService } from "@/services/article.service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch category first to get ID and Name
  const category = await db.category.findUnique({
    where: { slug },
  });

  if (!category) {
    notFound();
  }

  // Fetch articles for this category
  const { articles } = await ArticleService.getAllArticles(1, 20, { status: "PUBLISHED" });
  // Note: ArticleService.getAllArticles currently doesn't support filtering by categoryId in the arguments I defined earlier.
  // I need to update ArticleService or filter here. 
  // Let's update ArticleService to support categoryId filter, but for now I'll just fetch all and filter (inefficient) or use a direct DB call here if service update is too much.
  // Actually, let's do it right and update the service. But for this step, I'll write the page assuming the service *will* support it or I'll use a direct db call for now to be safe and fast.
  
  const categoryArticles = await db.post.findMany({
    where: {
      categoryId: category.id,
      status: "PUBLISHED",
    },
    include: {
      author: true,
      category: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category.name}</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categoryArticles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.id} className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              {article.coverImageUrl && (
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={article.coverImageUrl}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{article.category?.name}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {format(new Date(article.createdAt), "MMM d, yyyy")}
                  </span>
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {categoryArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No articles found in this category.</p>
        </div>
      )}
    </main>
  );
}
