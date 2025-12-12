"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
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
export function GridSection({ items }: { items: Article[] }) {
  if (!items || items.length === 0) return null;
  const displayItems = items.slice(0, 6);
  const fallbackImage =
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800"; // Forest / Nature
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayItems.map((article) => (
        <Link
          href={`/articles/${article.slug}`}
          key={article.id}
          className="group h-full"
        >
          <Card className="h-full overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col bg-card">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={
                  article.coverImageUrl || article.coverImage || fallbackImage
                }
                alt={article.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 left-3">
                <Badge
                  variant="secondary"
                  className="backdrop-blur-md bg-background/80 hover:bg-background/90"
                >
                  {article.category?.name}
                </Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-sm line-clamp-2">
                  {article.title}
                </h3>
              </div>
            </div>
            <CardHeader className="space-y-2 p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>
              <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-0 flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {article.excerpt}
              </p>
            </CardContent>
            <CardFooter className="p-5 pt-0 mt-auto border-t bg-muted/5">
              <div className="flex items-center justify-between w-full pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                    {article.author?.avatarUrl ? (
                      <img
                        src={article.author.avatarUrl}
                        alt={article.author.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-3 h-3 text-primary" />
                    )}
                  </div>
                  <span className="text-xs font-medium">
                    {article.author?.name}
                  </span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
