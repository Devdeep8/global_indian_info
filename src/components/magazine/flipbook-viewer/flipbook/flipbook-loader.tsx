import React, { forwardRef, memo, useCallback, useRef, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import PdfPage from './pdf-page'
import { cn } from '@/lib/utils';
import useScreenSize from '@/app/_hooks/use-screensize';

// Simple debounce hook since the one in _hooks might not exist or be compatible
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const MemoizedPdfPage = memo(PdfPage)

interface FlipbookLoaderProps {
  pdfDetails: any;
  scale: number;
  viewerStates: any;
  setViewerStates: (states: any) => void;
  viewRange: number[];
  setViewRange: (range: number[]) => void;
}

const FlipbookLoader = forwardRef<any, FlipbookLoaderProps>(({ pdfDetails, scale, viewerStates, setViewerStates, viewRange, setViewRange }, ref) => {
    const { width } = useScreenSize();
    const debouncedZoom = useDebounce(viewerStates.zoomScale, 500);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize page flip sound
    useEffect(() => {
        audioRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZRQ0PVqzn77BdGAg+lt7xw3ApBSl+zPLZizoIFmS56+mjUBELTKXh8bllHAU2jtTyzH0vBSF1xe/glEILElyx6OywWBgKQJve8cJwKAUofsvx2Yk6CBZkuevpo1ARCkyl4fG5ZRwFN47U8sx9LwUhdcXv4JRCC');
    }, []);

    // Check if page is in View range or in view window >>>>>>>>
    const isPageInViewRange = (index: number) => { return index >= viewRange[0] && index <= viewRange[1] };
    const isPageInView = (index: number) => { return viewerStates.currentPageIndex === index || viewerStates.currentPageIndex + 1 === index };

    // Update pageViewRange on page flip >>>>>>>>
    const onFlip = useCallback((e: any) => {
        // Play flip sound
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {
                // Ignore errors if audio can't play
            });
        }

        let newViewRange;
        if (e.data > viewerStates.currentPageIndex) {
            newViewRange = [viewRange[0], Math.max(Math.min(e.data + 4, pdfDetails.totalPages), viewRange[1])]
        } else if (e.data < viewerStates.currentPageIndex) {
            newViewRange = [Math.min(Math.max(e.data - 4, 0), viewRange[0]), viewRange[1]]
        } else {
            newViewRange = viewRange
        }
        setViewRange(newViewRange);
        setViewerStates({
            ...viewerStates,
            currentPageIndex: e.data,
        });
    }, [viewerStates, viewRange, setViewRange, setViewerStates, pdfDetails.totalPages]);

    return (
        <div className="relative">
            {/* @ts-ignore */}
            <HTMLFlipBook
                ref={ref}
                key={scale}
                startPage={viewerStates.currentPageIndex}
                width={pdfDetails.width * scale * 5}
                height={pdfDetails.height * scale * 5}
                size="stretch"
                drawShadow={false}
                flippingTime={700}
                usePortrait={false}
                showCover={true}
                showPageCorners={false}
                onFlip={onFlip}
                disableFlipByClick={width < 768 ? true : false}
                className={cn(viewerStates.zoomScale > 1 && 'pointer-events-none md:pointer-events-none')}
            >
                {
                    Array.from({ length: pdfDetails.totalPages }, (_, index) => (
                        <MemoizedPdfPage
                            key={index}
                            height={pdfDetails.height * scale}
                            zoomScale={debouncedZoom}
                            page={index + 1}
                            isPageInViewRange={isPageInViewRange(index)}
                            isPageInView={isPageInView(index)}
                        />
                    ))
                }
            </HTMLFlipBook >
        </div>
    )
})

FlipbookLoader.displayName = 'FlipbookLoader'

export default FlipbookLoader
