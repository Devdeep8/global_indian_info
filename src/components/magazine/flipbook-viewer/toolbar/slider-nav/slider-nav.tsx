import React, { memo, useCallback } from 'react';
import { Slider } from '@/components/ui/slider';

interface SliderNavProps {
    flipbookRef: any;
    pdfDetails: any;
    viewerStates: any;
    screenWidth: number;
}

const SliderNav = memo(({ flipbookRef, pdfDetails, viewerStates, screenWidth }: SliderNavProps) => {
    const handleValueChange = useCallback((value: number[]) => {
        if (flipbookRef.current) {
            if (screenWidth < 768) {
                flipbookRef.current.pageFlip().turnToPage(value[0]);
            } else {
                flipbookRef.current.pageFlip().flip(value[0]);
            }
        }
    }, [flipbookRef, screenWidth]);

    if (!pdfDetails) return null;

    return (
        <div className="w-full py-2">
            <Slider
                value={[viewerStates.currentPageIndex]}
                max={pdfDetails.totalPages - 1}
                step={1}
                onValueChange={handleValueChange}
                className="w-full"
            />
        </div>
    );
});

SliderNav.displayName = 'SliderNav';
export default SliderNav;
