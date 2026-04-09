import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenisReady, setLenisReady] = useState(false);
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Dynamic import Lenis to avoid issues
    import('lenis').then((LenisModule) => {
      const Lenis = LenisModule.default;
      
      // Initialize Lenis smooth scroll
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      lenisRef.current = lenis;

      // Sync Lenis with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      // Add Lenis to GSAP ticker
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
      setLenisReady(true);

      // Cleanup
      return () => {
        lenis.destroy();
      };
    });

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return <>{children}</>;
};
