import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getLatestMagazine } from "@/services/magazine";
import { ArrowRight, BookOpen } from "lucide-react";
export async function MagazineSection() {
  const magazine = await getLatestMagazine();
  if (!magazine) {
    return null;
  }
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
              Latest Issue
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {magazine.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {magazine.description ||
                "Read our latest magazine issue featuring exclusive stories and interviews."}
            </p>
            <div className="flex gap-4">
              <Link href={`/magazine/${magazine.slug}`}>
                <Button size="lg" className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  Read Magazine
                </Button>
              </Link>
              <Link href="/magazine">
                <Button variant="outline" size="lg" className="gap-2">
                  View Archive
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02]">
              {magazine.coverImageUrl ? (
                <>
                  <img
                    src={magazine.coverImageUrl}
                    alt={magazine.title || "Magazine Cover"}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-6">
                    <div className="text-white text-right">
                      <p className="text-sm font-medium mb-2">
                        Issue #{magazine.issueNumber}
                      </p>
                      <h3 className="font-bold text-lg line-clamp-2">
                        {magazine.title}
                      </h3>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-muted-foreground/50" />
                </div>
              )}
            </div>
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-decorative-blue rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
