"use client";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface SectionLayoutProps {
  title?: string;
  subtitle?: string;
  center?: boolean;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  showSeparator?: boolean;
}

export function SectionLayout({
  title,
  subtitle,
  center = false,
  children,
  className,
  containerClassName,
  showSeparator = false,
}: SectionLayoutProps) {
  return (
    <section className={cn("py-10 md:py-16 w-full", className)}>
      <div className={cn("max-w-7xl mx-auto px-4 md:px-6", containerClassName)}>

        {/* TITLE BLOCK */}
        {(title || subtitle) && (
          <div className={cn("mb-10", center && "text-center")}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                <span className="inline-block border-l-8 border-red-600 mr-3"></span>
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="text-muted-foreground mt-2 text-sm md:text-base">
                {subtitle}
              </p>
            )}

            {showSeparator && <Separator className="mt-6" />}
          </div>
        )}

        {/* CONTENT */}
        {children}
      </div>
    </section>
  );
}
