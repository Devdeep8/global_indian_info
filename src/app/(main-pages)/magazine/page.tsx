import Link from "next/link";
import { getMagazines } from "@/services/magazine";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default async function MagazineArchivePage() {
  const magazines = await getMagazines({ status: "PUBLISHED" });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Magazine Archive</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {magazines.map((magazine) => (
          <Card key={magazine.id} className="overflow-hidden flex flex-col">
            <div className="aspect-[3/4] relative bg-muted">
              {magazine.coverImageUrl ? (
                <img
                  src={magazine.coverImageUrl}
                  alt={magazine.title || "Cover"}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground/50" />
                </div>
              )}
            </div>
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">
                Issue #{magazine.issueNumber} • {magazine.publishedAt ? new Date(magazine.publishedAt).toLocaleDateString() : "Unpublished"}
              </div>
              <CardTitle className="line-clamp-2">{magazine.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground line-clamp-3">
                {magazine.description}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/magazine/${magazine.slug}`} className="w-full">
                <Button className="w-full gap-2">
                  <BookOpen className="w-4 h-4" />
                  Read Issue
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {magazines.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No magazines found.
        </div>
      )}
    </div>
  );
}
