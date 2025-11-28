"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import { Loader2, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Setup PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface MagazineFlipbookProps {
  pdfUrl: string;
  title: string;
}

export function MagazineFlipbook({ pdfUrl, title }: MagazineFlipbookProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const bookRef = useRef<any>(null);
  const [containerWidth, setContainerWidth] = useState(800);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize page flip sound
  useEffect(() => {
    audioRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZRQ0PVqzn77BdGAg+lt7xw3ApBSl+zPLZizoIFmS56+mjUBELTKXh8bllHAU2jtTyzH0vBSF1xe/glEILElyx6OywWBgKQJve8cJwKAUofsvx2Yk6CBZkuevpo1ARCkyl4fG5ZRwFN47U8sx9LwUhdcXv4JRCC');
  }, []);

  // Handle window resize to adjust book size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setContainerWidth(width - 40);
      } else if (width < 1024) {
        setContainerWidth(width - 80);
      } else {
        setContainerWidth(1000); // Max width
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const onPageFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
    // Play flip sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Ignore errors if audio can't play
      });
    }
  }, []);

  const nextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const width = containerWidth / 2;
  const height = width * 1.414; // A4 aspect ratio approx

  // Calculate display page numbers (for 2-page spread view)
  const leftPage = currentPage * 2 + 1;
  const rightPage = currentPage * 2 + 2;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full gap-4">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-50">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
        </div>
      )}

      <div className="relative shadow-2xl rounded-sm overflow-hidden bg-white">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-[600px] w-[800px]">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          }
          className="flex justify-center"
        >
          {/* @ts-ignore - HTMLFlipBook types are sometimes tricky with React 18 */}
          <HTMLFlipBook
            width={width}
            height={height}
            size="fixed"
            minWidth={300}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onPageFlip}
            ref={bookRef}
            className="flip-book"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div key={`page_${index + 1}`} className="bg-white overflow-hidden shadow-sm">
                <Page
                  pageNumber={index + 1}
                  width={width}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  scale={scale}
                />
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                  {index + 1}
                </div>
              </div>
            ))}
          </HTMLFlipBook>
        </Document>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 bg-background/90 backdrop-blur p-2 rounded-full shadow-lg border mt-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <span className="text-sm font-medium min-w-[80px] text-center">
          {leftPage <= numPages && rightPage <= numPages
            ? `${leftPage}-${rightPage}`
            : leftPage <= numPages
            ? `${leftPage}`
            : `${numPages}`} of {numPages}
        </span>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextPage}
          disabled={currentPage === numPages - 1}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        <div className="w-px h-6 bg-border mx-2" />

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
        <span className="text-xs w-12 text-center">{Math.round(scale * 100)}%</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setScale(s => Math.min(2, s + 0.1))}
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}