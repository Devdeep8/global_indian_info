import { Button } from "@/components/ui/button";
import { SectionLayout } from "./section-layout";
import { GridSection } from "./grid-section";
import Link from "next/link";

interface CategorySectionProps {
  title: string;
  subtitle?: string;
  categorySlug: string;
  items: any[];
  viewAllLink?: string;
  className?: string; // For background colors etc
  limit?: number;
}

export function CategorySection({
  title,
  subtitle,
  categorySlug,
  items,
  viewAllLink,
  className,
  limit = 6,
}: CategorySectionProps) {
  // Filter items by category slug or name (case insensitive partial match for robustness)
  const filteredItems = items.filter((item) => {
    if (!item.category) return false;
    const itemCat =
      item.category.slug || item.category.name.toLowerCase().replace(" ", "-");
    return itemCat.includes(categorySlug.toLowerCase());
  });

  // If no items match, fall back to showing some items (for demo/development if data is sparse)
  // OR return null. For now, let's show items if we can't find specific ones to ensure UI isn't empty.
  // BUT in production, we should return null.
  // Let's stick to strict filtering but provide a fallback if items length is 0 and we are in dev/demo mode?
  // No, strict filtering is better.

  const displayItems = filteredItems.length > 0 ? filteredItems : [];

  if (displayItems.length === 0) return null;

  return (
    <div className={className}>
      <SectionLayout
        title={title}
        subtitle={subtitle}
        showSeparator
        center={true}
      >
        <GridSection items={displayItems.slice(0, limit)} />
        <div className="flex justify-center mt-8">
          <Link href={viewAllLink || `/category/${categorySlug}`}>
            <Button variant="outline" className="rounded-full px-8">
              View All Stories
            </Button>
          </Link>
        </div>
      </SectionLayout>
    </div>
  );
}
