"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
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
  const sideArticles = items.slice(1, 4);
  const fallbackImage =
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1600";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* Main Feature */}
      <Link
        href={`/articles/${mainArticle.slug}`}
        className="group relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg block"
      >
        <img
          src={
            mainArticle.coverImageUrl || mainArticle.coverImage || fallbackImage
          }
          alt={mainArticle.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
          <Badge className="mb-3 bg-primary text-primary-foreground border-none">
            {mainArticle.category?.name || "Cover Story"}
          </Badge>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
            {mainArticle.title}
          </h3>
          <p className="line-clamp-2 text-gray-200 md:text-lg mb-4">
            {mainArticle.excerpt}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>{mainArticle.author?.name}</span>
            <span>•</span>
            <span>
              {new Date(mainArticle.publishedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </Link>

      {/* Side List */}
      <div className="space-y-6">
        {sideArticles.map((article) => (
          <Link
            href={`/articles/${article.slug}`}
            key={article.id}
            className="flex gap-4 group items-start"
          >
            <div className="relative w-32 h-24 md:w-40 md:h-28 flex-shrink-0 rounded-lg overflow-hidden">
              <img
                src={
                  article.coverImageUrl || article.coverImage || fallbackImage
                }
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 min-w-0 py-1">
              <Badge variant="outline" className="mb-2 text-[10px] h-5">
                {article.category?.name}
              </Badge>
              <h4 className="text-base md:text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-1">
                {article.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
