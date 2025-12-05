import { getMagazineBySlug } from "@/services/magazine";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import FlipbookViewer from "@/components/magazine/flipbook-viewer/flipbook-viewer";

export default async function MagazineViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const magazine = await getMagazineBySlug(slug);

  if (!magazine) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 text-white">
      {/* <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="font-semibold truncate max-w-md">{magazine.title}</h1>
        </div>
        <div className="flex items-center gap-2">
          {magazine.pdfUrl && (
            <a href={magazine.pdfUrl} download target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </a>
          )}
        </div>
      </header> */}
      
      <main className="flex-1 relative overflow-hidden flex items-center justify-center bg-zinc-900/50">
        {magazine.pdfUrl ? (
          <FlipbookViewer pdfUrl={magazine.pdfUrl} shareUrl={`/magazine/${magazine.slug}`} />
        ) : (
          <div className="flex items-center justify-center h-full text-zinc-500">
            No PDF available for this magazine.
          </div>
        )}
      </main>
    </div>
  );
}
