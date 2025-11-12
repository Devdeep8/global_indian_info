"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "../ui/button";

interface Category {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  articleCount: number;
}

export default function CategoriesTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get current category from URL
  const currentCategory = searchParams.get("category");

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/categories");
        const data = await response.json();

        if (data.success) {
          setCategories(data.data);
        } else {
          setError("Failed to load categories");
        }
      } catch (err) {
        setError("Error loading categories");
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Handle category selection
  const handleCategoryClick = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (slug === null) {
      // Remove category parameter to show all posts
      params.delete("category");
    } else {
      // Set category parameter
      params.set("category", slug);
    }

    // Update URL with new parameters
    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(newUrl);
  };

  // Check if tab is active
  const isActive = (slug: string | null) => {
    if (slug === null) {
      return !currentCategory;
    }
    return currentCategory === slug;
  };

  if (loading) {
    return (
      <div className="mt-4">
        <div className="flex gap-2 justify-center items-center overflow-x-auto pb-2">
          {[...Array(9)].map((_, i) => (
            <Skeleton key={i} className="h-9 w-32 rounded-full" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-4">
        <p className="text-sm text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <div className="mt-4 flex justify-center items-center border-b-2 ">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {/* All Posts Tab */}
        <Button
        
          onClick={() => handleCategoryClick(null)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-normal whitespace-nowrap transition-colors",
            isActive(null)
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          All News
        </Button>

        {/* Category Tabs */}
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => handleCategoryClick(category.slug)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-normal whitespace-nowrap transition-colors  flex items-center gap-2",
              isActive(category.slug)
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            )}
          >
            {category.name}
            <span
              className={cn(
                "px-1.5 py-0.5 rounded-full text-xs",
                isActive(category.slug)
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-secondary-foreground/20 text-secondary-foreground"
              )}
            >
              {category.articleCount}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}