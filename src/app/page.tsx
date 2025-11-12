"use client";
import CategoriesTabs from "@/components/layout/categories-tabs";
import MainHeader from "@/components/layout/Header";

import { useState, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  TrendingUp,
  Globe,
  Users,
  Award,
  Calendar,
  ChevronRight,
  Star,
  BookOpen,
  Heart,
  Share2,
  Clock,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";


interface FeaturedArticle {
  id: string;
  title: string;
  excerpt: string;
  category: { name: string; slug: string };
  author: { name: string; avatarUrl?: string };
  readTime: number;
  likes: number;
  views: number;
  publishedAt: string;
  coverImage?: string;
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredArticles, setFeaturedArticles] = useState<FeaturedArticle[]>([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || ""; // ✅ get category from URL (e.g., ?category=business)

  useEffect(() => {
    fetchArticles(category);
  }, [category]);

  const fetchArticles = async (category: string) => {
    setIsLoading(true);
    try {
      const url = category
        ? `/api/posts/articles?category=${category}`
        : `/api/posts/articles`;

      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to fetch articles");
      setFeaturedArticles(data.posts || []);
    } catch (error) {
      console.error("Error fetching articles:", error);
      toast.error("Failed to load articles");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="border-b bg-background sticky top-0 z-50">
        <MainHeader />
        <Separator />
        {/* ✅ CategoriesTabs now controls ?category=... in URL */}
        <CategoriesTabs />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-12 md:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/image.png"
            alt="Global Indian Professionals"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center space-y-6">
          <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Positive News from the Global Indian Community
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Celebrating Indian Excellence
            <span className="block text-primary">Worldwide</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover inspiring stories of Indians and the diaspora making a
            positive impact across the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Reading
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Articles */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">
                  {category ? `${category} Stories` : "Featured Stories"}
                </h2>
                <Badge variant="secondary" className="text-sm">
                  <Star className="w-4 h-4 mr-1" />
                  Editor's Choice
                </Badge>
              </div>

              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <Skeleton className="h-4 w-20 mb-4" />
                        <Skeleton className="h-6 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-4" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {featuredArticles.length > 0 ? (
                    featuredArticles.slice(0, 3).map((article) => (
                      <Card
                        key={article.id}
                        className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      >
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <Badge variant="secondary">
                                {article.category?.name}
                              </Badge>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span>{article.readTime} min read</span>
                              </div>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold leading-tight hover:text-primary transition-colors">
                              {article.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                              {article.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t">
                              <div className="flex items-center space-x-3">
                                <Avatar>
                                  <AvatarImage src={article.author?.avatarUrl} />
                                  <AvatarFallback>
                                    <User className="h-4 w-4" />
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium text-sm">
                                    {article.author?.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {new Date(
                                      article.publishedAt
                                    ).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Heart className="h-4 w-4" />
                                  <span>{article.likes}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Users className="h-4 w-4" />
                                  <span>{article.views}</span>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <p className="text-muted-foreground">
                      No articles found for this category.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Trending Topics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Innovation", "Leadership", "Culture", "Service"].map(
                    (topic) => (
                      <Badge
                        key={topic}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {topic}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
