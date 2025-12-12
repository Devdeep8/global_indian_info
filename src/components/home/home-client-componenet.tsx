"use client";
import MainHeader from "@/components/layout/Header";
import { useState, useEffect } from "react";

import { Separator } from "@/components/ui/separator";

import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { FeaturedCarousel } from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import ForthSection from "./forth-section";
import WhatsappCommunity from "./whatsapp-community";
import { CategorySection } from "./category-section";
import { DidYouKnow } from "./did-you-know";
import { WorldInNumbers } from "./world-in-numbers";
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
  const [featuredArticles, setFeaturedArticles] = useState<FeaturedArticle[]>(
    []
  );
  const [publishedArticles, setPublishedArticles] = useState<FeaturedArticle[]>(
    []
  );
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
      setPublishedArticles(data.posts || []);
    } catch (error) {
      console.error("Error fetching articles:", error);
      toast.error("Failed to load articles");
    } finally {
      setIsLoading(false);
    }
  };




  useEffect(() => {
  fetchFeatured();
}, []);

const fetchFeatured = async () => {
  try {
    const res = await fetch("/api/posts/articles/featured");
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    setFeaturedArticles(data.posts);
  } catch (error) {
    console.error("Failed to load featured carousel:", error);
  }
};

  return (
    <div>
      <div className="border-b bg-background sticky top-0 z-50">
        <MainHeader />
        <Separator />
      </div>

      {/* Hero Section */}
      <section className="py-0">
        <FeaturedCarousel items={featuredArticles} />
      </section>

      {/* Cover Stories */}
      <SecondSection
        items={
          publishedArticles.filter(
            (a) => a.category?.slug === "global-indian-exclusive"
          ).length > 0
            ? publishedArticles.filter(
                (a) => a.category?.slug === "global-indian-exclusive"
              )
            : publishedArticles
        }
      />

      {/* Youth */}
      <CategorySection
        title="GLOBAL INDIAN YOUTH"
        subtitle="Inspiring the next generation of leaders"
        categorySlug="youth"
        items={publishedArticles}
        className="bg-muted/30 py-12"
      />

      {/* Market Place */}
      <CategorySection
        title="MARKET PLACE"
        subtitle="Discover unique products and services"
        categorySlug="market-place"
        items={publishedArticles}
        className="py-12"
      />

      {/* Campus Life & Work Life - Could be side by side or stacked */}
      <CategorySection
        title="GLOBAL INDIAN | CAMPUS LIFE"
        categorySlug="campus-life"
        items={publishedArticles}
        className="bg-muted/30 py-12"
      />

      <CategorySection
        title="GLOBAL INDIAN | WORK LIFE"
        categorySlug="work-life"
        items={publishedArticles}
        className="py-12"
      />

      {/* Whatsapp Community CTA */}
      <WhatsappCommunity />

      {/* Cuisine */}
      <CategorySection
        title="GLOBAL INDIAN | CUISINE"
        categorySlug="cuisine"
        items={publishedArticles}
        className="py-12"
      />

      {/* Giving Back */}
      <CategorySection
        title="GLOBAL INDIANS | GIVING BACK"
        categorySlug="giving-back"
        items={publishedArticles}
        className="bg-muted/30 py-12"
      />

      {/* Startups */}
      <CategorySection
        title="STARTUPS & ENTREPRENEURS"
        categorySlug="startups"
        items={publishedArticles}
        className="py-12"
      />

      {/* Culture */}
      <CategorySection
        title="GLOBAL INDIAN | CULTURE"
        categorySlug="culture"
        items={publishedArticles}
        className="bg-muted/30 py-12"
      />

      <CategorySection
        title="GOOD READS"
        categorySlug="good-reads"
        items={publishedArticles}
        className="py-12"
      />

      {/* Did You Know? */}
      <DidYouKnow />

      {/* World In Numbers */}
      <WorldInNumbers />
    </div>
  );
}
