"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ViewCardProps {
  items: Array<{
    coverImageUrl: any;
    id: string | number;
    title: string;
    description?: string;
    image?: string;
    slug: string;
  }>;
}

export default function ViewCard({ items }: ViewCardProps) {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3; // show 3 cards
  const endIndex = startIndex + visibleCount;

  const next = () => {
    if (endIndex < items.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div className="relative mt-6">

      {/* Cards Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleItems.map((item) => (
          <Link href={`/articles/${item.slug}`} key={item.id} className="block h-full">
            <Card className="shadow-md h-full hover:shadow-lg transition-shadow">
              {item.coverImageUrl && (
                <img
                  src={item.coverImageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-md"
                />
              )}

              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
              </CardHeader>

              {item.description && (
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>
                </CardContent>
              )}
            </Card>
          </Link>
        ))}
      </div>

      {/* LEFT ARROW */}
      {startIndex > 0 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}

      {/* RIGHT ARROW */}
      {endIndex < items.length && (
        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
