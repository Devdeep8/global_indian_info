import { ArticleService } from "@/services/article.service";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { db } from "@/lib/db";

// Custom components for MDX
const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-medium mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="leading-7 mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
  ),
  img: (props: any) => (
    <img className="rounded-lg my-6 w-full object-cover max-h-[500px]" {...props} />
  ),
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch article directly from DB or Service
  // Using DB directly here for speed as Service might need update for slug fetching if not already there
  // Actually ArticleService.getArticleBySlug exists, let's use it.
  const article = await ArticleService.getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        {/* Header */}
        <header className="mb-8 not-prose">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>{article.category?.name}</span>
            <span>•</span>
            <span>{format(new Date(article.createdAt), "MMMM d, yyyy")}</span>
            <span>•</span>
            <span>{article.readMinutes || 5} min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 mb-8">
            {article.author.image ? (
              <img 
                src={article.author.image} 
                alt={article.author.name || "Author"} 
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {article.author.name?.charAt(0) || "A"}
              </div>
            )}
            <div>
              <p className="font-medium text-foreground">{article.author.name}</p>
              <p className="text-xs text-muted-foreground">Author</p>
            </div>
          </div>

          {article.coverImageUrl && (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-8">
              <img
                src={article.coverImageUrl}
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </header>

        {/* Content */}
        <div className="mdx-content">
          <MDXRemote source={article.content} components={components} />
        </div>
      </article>
    </main>
  );
}
