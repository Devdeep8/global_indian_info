"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {Carousel,CarouselContent,CarouselItem,CarouselApi,} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
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
  const [api, setApi] = React.useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const plugin = React.useRef(Autoplay({ delay: 6000, stopOnInteraction: true }));
  React.useEffect(() => {
    if (!api) {return;}
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);
  const handlePrevious = React.useCallback(() => {
    if (api) {api.scrollPrev();}
  }, [api]);
  const handleNext = React.useCallback(() => {
    if (api) {api.scrollNext();}
  }, [api]);
  const goToSlide = React.useCallback((index: number) => {
    if (api) {api.scrollTo(index);}
  }, [api]);
  if (!items || items.length === 0) {
    return (<div className="w-full h-[60vh] bg-muted flex items-center justify-center"><div className="text-center space-y-4"><div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div><p className="text-muted-foreground">Loading featured stories...</p></div></div>);
  }
  return (<div className="relative w-full group"><Carousel setApi={setApi} plugins={[plugin.current]} className="w-full" opts={{loop: true,}} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}><CarouselContent>{items.map((item, index) => (<CarouselItem key={item.id}><div className="relative w-full h-[70vh] min-h-[500px]"><div className="absolute inset-0 overflow-hidden"><motion.img initial={{ scale: 1 }} animate={{ scale: index === currentIndex ? 1.05 : 1 }} transition={{ duration: 6, ease: "linear" }} src={item.coverImageUrl || item.coverImage || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover"/></div><div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div><div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent opacity-80"></div><div className="absolute inset-0 flex items-center"><div className="container mx-auto px-4 md:px-8"><div className="w-full md:w-3/4 lg:w-1/2 text-white"><AnimatePresence mode="wait">{index === currentIndex && (<motion.div key={`content-${index}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-6"><div className="space-y-4">{item.category && (<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm"><span className="text-xs font-bold uppercase tracking-wider text-primary-foreground">{item.category.name}</span></motion.div>)}<motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">{item.title}</motion.h2></div>{item.excerpt && (<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed line-clamp-3">{item.excerpt}</motion.p>)}<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center space-x-6 text-sm text-gray-300 pt-2">{item.author && (<div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">{item.author.avatarUrl ? (<img src={item.author.avatarUrl} alt={item.author.name} className="w-full h-full rounded-full object-cover"/>):(<User className="w-4 h-4 text-white"/>)}</div><span className="font-medium">{item.author.name}</span></div>)}{item.readTime && (<div className="flex items-center gap-2"><Clock className="w-4 h-4"/><span>{item.readTime} min read</span></div>)}</motion.div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="pt-4"><Link href={`/articles/${item.slug}`}><Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-primary/25 transition-all duration-300">Read Full Story</Button></Link></motion.div></motion.div>)}</AnimatePresence></div></div></div></div></CarouselItem>))}</CarouselContent></Carousel><div className="absolute inset-y-0 left-0 flex items-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><Button variant="ghost" size="icon" className="bg-black/20 hover:bg-black/40 text-white rounded-full w-12 h-12 backdrop-blur-sm border border-white/10" onClick={handlePrevious}><ChevronLeft className="h-8 w-8"/></Button></div><div className="absolute inset-y-0 right-0 flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><Button variant="ghost" size="icon" className="bg-black/20 hover:bg-black/40 text-white rounded-full w-12 h-12 backdrop-blur-sm border border-white/10" onClick={handleNext}><ChevronRight className="h-8 w-8"/></Button></div><div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">{items.map((_, index) => (<button key={index} className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-8" : "bg-white/30 w-2 hover:bg-white/50"}`} onClick={() => goToSlide(index)} aria-label={`Go to slide ${index + 1}`}/>))}</div></div>);
}
