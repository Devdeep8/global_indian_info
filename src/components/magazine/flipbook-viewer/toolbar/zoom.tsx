import React, { memo } from 'react';
import { useControls } from 'react-zoom-pan-pinch';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ZoomProps {
    zoomScale: number;
    screenWidth: number;
}

const Zoom = memo(({ zoomScale, screenWidth }: ZoomProps) => {
    const { zoomIn, zoomOut } = useControls();

    return (
        <div className='flex items-center gap-2'>
            <Button
                onClick={() => zoomOut()}
                disabled={zoomScale <= 1}
                variant='secondary'
                size='icon'
                className='size-8 min-w-8'
            >
                <ZoomOut className="size-4 min-w-4" />
            </Button>
            <Button
                onClick={() => zoomIn()}
                disabled={zoomScale >= 5}
                variant='secondary'
                size='icon'
                className='size-8 min-w-8'
            >
                <ZoomIn className="size-4 min-w-4" />
            </Button>
        </div>
    );
});

Zoom.displayName = 'Zoom';
export default Zoom;
