'use client';

import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollDirection: null,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      setScrollPosition({
        scrollY,
        scrollDirection: direction,
      });
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    // Add event listener
    window.addEventListener('scroll', updateScrollPosition, { passive: true });

    // Call once to initialize
    updateScrollPosition();

    // Clean up
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  return scrollPosition;
}