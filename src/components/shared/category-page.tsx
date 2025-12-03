"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FeaturedCarousel } from "@/components/home/hero-section";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: { name: string; slug: string };
  author: { name: string; avatarUrl?: string };
  readTime: number;
  slug: string;
  image?: string;
  likes: number;
  views: number;
  publishedAt: string;
  coverImage?: string;
  coverImageUrl?: string;
}

interface CategoryPageProps {
  categorySlug: string;
  categoryName: string;
  description?: string;
}

export default function CategoryPage({ categorySlug, categoryName, description }: CategoryPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        // For MVP, we might use the same data if API doesn't return enough for specific categories
        // But we try to filter if possible.
        // The user said "we for fast mvp we have used the same data in every list".
        // So if the category specific fetch returns empty, we might fallback to all articles or just show what we have.
        
        // We will try to fetch by category first.
        const url = `/api/posts/articles?category=${categorySlug}`; 
        const res = await fetch(url);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Failed to fetch articles");
        
        // If no articles found for this category (common in MVP with limited data), 
        // maybe fetch ALL articles to show something?
        // The user said "used the same data in every list". 
        // So let's fallback to all articles if the specific category returns empty.
        if (!data.posts || data.posts.length === 0) {
             const allUrl = `/api/posts/articles`;
             const allRes = await fetch(allUrl);
             const allData = await allRes.json();
             setArticles(allData.posts || []);
        } else {
             setArticles(data.posts || []);
        }

      } catch (error) {
        console.error("Error fetching articles:", error);
        toast.error("Failed to load articles");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [categorySlug]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-12 w-64" />
          <Skeleton className="h-4 w-full max-w-2xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Header Section */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary tracking-tight">{categoryName}</h1>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Section (if any articles) */}
        {articles.length > 0 && (
           <div className="mb-16">
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
               <span className="w-1 h-8 bg-primary rounded-full"></span>
               Featured in {categoryName}
             </h2>
             {/* Reusing the FeaturedCarousel but maybe we can just show one big hero card if we prefer. 
                 For consistency and "premium" feel, let's use the Carousel if we have multiple, 
                 or just a big Hero card. Let's use the Carousel for the top 3 items.
             */}
             <FeaturedCarousel items={articles.slice(0, 5)} />
           </div>
        )}

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link href={`/articles/${article.slug}`} key={article.id} className="group h-full">
              <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col bg-card">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={article.coverImageUrl || article.coverImage || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm">
                    {article.category?.name || categoryName}
                  </Badge>
                </div>
                
                <CardHeader className="flex-grow space-y-3 p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                     <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                     </div>
                     <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime} min read</span>
                     </div>
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </CardHeader>
                
                <CardFooter className="p-5 pt-0 mt-auto border-t bg-muted/5">
                  <div className="flex items-center justify-between w-full pt-4">
                    <div className="flex items-center gap-2">
                      {article.author?.avatarUrl ? (
                        <img src={article.author.avatarUrl} alt={article.author.name} className="w-6 h-6 rounded-full object-cover" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="w-3 h-3 text-primary" />
                        </div>
                      )}
                      <span className="text-xs font-medium text-foreground/80">{article.author?.name || "Unknown"}</span>
                    </div>
                    <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        {articles.length === 0 && !isLoading && (
            <div className="text-center py-20">
                <h3 className="text-2xl font-semibold text-muted-foreground">No articles found in this category.</h3>
                <Button className="mt-4" variant="outline" asChild>
                    <Link href="/">Go Back Home</Link>
                </Button>
            </div>
        )}
      </div>
    </div>
  );
}
