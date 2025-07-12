'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook untuk mendeteksi media query
 * @param query Media query yang ingin dideteksi, contoh: '(min-width: 768px)'
 * @returns Boolean yang menunjukkan apakah media query cocok
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Cek apakah window tersedia (client-side)
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(query);
    
    // Set nilai awal
    setMatches(media.matches);

    // Callback untuk update nilai saat media query berubah
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Tambahkan event listener
    media.addEventListener('change', listener);

    // Cleanup
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}

// Preset media queries
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');