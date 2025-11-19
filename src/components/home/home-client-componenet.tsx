// app/components/home/home-content.tsx

"use client";
import CategoriesTabs from "@/components/layout/categories-tabs";
import MainHeader from "@/components/layout/Header";

import { useState, useEffect } from "react";
import {
  TrendingUp,
  Users,
  ChevronRight,
  Star,
  Heart,
  Share2,
  Clock,
  User,
  Calendar,
  MapPin,
  Award,
  Globe,
  BookOpen,
  Briefcase,
  Mic,
  Camera,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { FeaturedCarousel } from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import ForthSection from "./forth-section";

interface FeaturedArticle {
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
}

interface GlobalIndian {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarUrl?: string;
  story: string;
  category: string;
}

export default function HomeContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredArticles, setFeaturedArticles] = useState<FeaturedArticle[]>([]);
  const [globalIndians, setGlobalIndians] = useState<GlobalIndian[]>([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";

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
        <CategoriesTabs />
      </div>

      {/* Hero Section with Featured Story */}
      <section className=" py-8">
      <FeaturedCarousel items={featuredArticles}/>
      </section>

      <SecondSection items={featuredArticles}/>
      <ThirdSection items={featuredArticles}/>
      <ForthSection items={featuredArticles}/> 

    </div>
  );
}