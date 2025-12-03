"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

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

export function HighlightSection({ items }: { items: Article[] }) {
  if (!items || items.length === 0) return null;

  const mainArticle = items[0];
  const sideArticles = items.slice(1, 5); // Take next 4 articles

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main Highlight Article (Left - 7 cols) */}
      <div className="lg:col-span-7 group">
        <Link href={`/articles/${mainArticle.slug}`}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4">
            <img
              src={mainArticle.coverImageUrl || mainArticle.coverImage || "/placeholder.svg"}
              alt={mainArticle.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
              {mainArticle.category && (
                <Badge className="mb-3 bg-primary text-primary-foreground hover:bg-primary/90 border-none">
                  {mainArticle.category.name}
                </Badge>
              )}
              <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-3 group-hover:text-primary-foreground/90 transition-colors">
                {mainArticle.title}
              </h3>
              <p className="text-gray-200 line-clamp-2 mb-4 md:text-lg hidden md:block">
                {mainArticle.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span className="font-medium">{mainArticle.author?.name}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {mainArticle.readTime} min
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Side List (Right - 5 cols) */}
      <div className="lg:col-span-5 flex flex-col gap-4">
        {sideArticles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.id} className="group/item">
            <Card className="flex items-center gap-4 p-3 hover:bg-muted/50 transition-colors border-none shadow-none">
              <div className="relative w-24 h-24 md:w-32 md:h-24 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={article.coverImageUrl || article.coverImage || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium text-primary">{article.category?.name}</span>
                  <span>•</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <h4 className="font-bold text-base leading-snug group-hover/item:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <div className="flex items-center text-xs text-muted-foreground group-hover/item:translate-x-1 transition-transform">
                  Read article <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
