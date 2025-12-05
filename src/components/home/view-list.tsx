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
  const visibleCount = 3;
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
  return (<div className="relative mt-6"><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{visibleItems.map((item) => (<Link href={`/articles/${item.slug}`} key={item.id} className="block h-full group"><Card className="shadow-md h-full hover:shadow-lg transition-shadow overflow-hidden">{item.coverImageUrl && (<div className="relative w-full h-48 overflow-hidden rounded-t-md"><img src={item.coverImageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"><h3 className="text-white font-bold text-sm line-clamp-2">{item.title}</h3></div></div>)}<CardHeader><CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle></CardHeader>{item.description && (<CardContent><p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p></CardContent>)}</Card></Link>))}</div>{startIndex > 0 && (<Button variant="ghost" size="icon" onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full"><ChevronLeft className="h-6 w-6"/></Button>)}{endIndex < items.length && (<Button variant="ghost" size="icon" onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full"><ChevronRight className="h-6 w-6"/></Button>)}</div>);
}
