'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

const useRefSize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const refreshSize = useCallback(() => {
    if (ref.current) {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, []);

  useEffect(() => {
    refreshSize();
    window.addEventListener('resize', refreshSize);
    return () => window.removeEventListener('resize', refreshSize);
  }, [refreshSize]);

  return { ref, ...size, refreshSize };
};

export default useRefSize;
