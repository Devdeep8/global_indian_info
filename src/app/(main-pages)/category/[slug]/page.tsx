import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import CategoryPageClient from "@/components/shared/category-page";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch category to get Name
  const category = await db.category.findUnique({
    where: { slug },
  });

  if (!category) {
    notFound();
  }

  return (
    <CategoryPageClient 
      categorySlug={slug} 
      categoryName={category.name} 
      description={`Explore our collection of articles in ${category.name}.`}
    />
  );
}
