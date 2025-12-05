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
  if (!items || items.length < 2) return null;
  const mainArticle = items[0];
  const secondArticle = items[1];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Link href={`/articles/${mainArticle.slug}`} className="group">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <img
            src={
              mainArticle.coverImageUrl ||
              mainArticle.coverImage ||
              "/placeholder.svg"
            }
            alt={mainArticle.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full">
            <Badge className="mb-3 bg-primary text-primary-foreground hover:bg-primary/90 border-none">
              {mainArticle.category?.name}
            </Badge>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-3 group-hover:text-primary-foreground/90 transition-colors">
              {mainArticle.title}
            </h3>
            <p className="text-gray-200 line-clamp-2 mb-4 md:text-lg">
              {mainArticle.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="font-medium">{mainArticle.author?.name}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {mainArticle.readTime} min
              </span>
            </div>
          </div>
        </div>
      </Link>
      <Link href={`/articles/${secondArticle.slug}`} className="group">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <img
            src={
              secondArticle.coverImageUrl ||
              secondArticle.coverImage ||
              "/placeholder.svg"
            }
            alt={secondArticle.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full">
            <Badge className="mb-3 bg-primary text-primary-foreground hover:bg-primary/90 border-none">
              {secondArticle.category?.name}
            </Badge>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-3 group-hover:text-primary-foreground/90 transition-colors">
              {secondArticle.title}
            </h3>
            <p className="text-gray-200 line-clamp-2 mb-4 md:text-lg">
              {secondArticle.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="font-medium">{secondArticle.author?.name}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {secondArticle.readTime} min
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
