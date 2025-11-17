"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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

export function FeaturedCarousel({ items }: { items: Article[] }) {
  const [api, setApi] = React.useState<any>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handlePrevious = React.useCallback(() => {
    if (api) {
      api.scrollPrev();
    }
  }, [api]);

  const handleNext = React.useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  const goToSlide = React.useCallback((index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  }, [api]);

  // Ensure we have valid items
  if (!items || items.length === 0) {
    return <div className="w-full h-[60vh] bg-gray-200 flex items-center justify-center">No articles to display</div>;
  }

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative w-full h-[60vh] md:h-[60vh]">
                {/* Full-width background image */}
                <img
                  src={item.coverImageUrl || item.coverImage || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                
                {/* Text content overlay */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full md:w-2/3 lg:w-1/2 text-white p-8 md:p-12">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        {item.category && (
                          <div className="text-sm font-medium uppercase tracking-wider text-yellow-400">
                            {item.category.name}
                          </div>
                        )}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                          {item.title}
                        </h2>
                      </div>

                      {item.excerpt && (
                        <p className="text-base md:text-lg text-gray-200 max-w-lg">
                          {item.excerpt}
                        </p>
                      )}

                      <div className="flex items-center space-x-6 text-sm text-gray-300">
                        {item.author && <span>By {item.author.name}</span>}
                        {item.readTime && (
                          <span>{item.readTime} min read</span>
                        )}
                      </div>

                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-none px-8 py-3 mt-4 w-fit">
                        READ
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Custom navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 md:w-12 md:h-12"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 md:w-12 md:h-12"
        onClick={handleNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}