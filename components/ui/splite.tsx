'use client';

import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import type { Application } from '@splinetool/runtime';

// Spline runtime + three are ~1MB of JS. Keep them out of the initial bundle and
// only fetch the chunk once the canvas is close to the viewport.
const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
  transparent?: boolean;
  /** Static artwork shown while the scene loads, on small screens and for reduced motion. */
  fallbackSrc?: string;
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isSmallScreen = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;

export function SplineScene({
  scene,
  className = '',
  transparent = true,
  fallbackSrc = '/aqionlabs-hero-robot-v2.svg',
}: SplineSceneProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Phones and reduced-motion users get the lightweight static robot instead of
    // downloading and rasterising the full 3D scene.
    if (prefersReducedMotion() || isSmallScreen()) return undefined;

    const host = hostRef.current;
    if (!host) return undefined;

    let idleId: number | undefined;
    let usedIdleCallback = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        const start = () => setShouldRender(true);
        const idleWindow = window as unknown as {
          requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
          cancelIdleCallback?: (id: number) => void;
        };
        if (typeof idleWindow.requestIdleCallback === 'function') {
          usedIdleCallback = true;
          idleId = idleWindow.requestIdleCallback(start, { timeout: 1200 });
        } else {
          idleId = window.setTimeout(start, 200);
        }
      },
      { rootMargin: '300px' },
    );

    observer.observe(host);
    return () => {
      observer.disconnect();
      if (idleId === undefined) return;
      const idleWindow = window as unknown as { cancelIdleCallback?: (id: number) => void };
      if (usedIdleCallback && typeof idleWindow.cancelIdleCallback === 'function') {
        idleWindow.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <div ref={hostRef} className="relative h-full w-full overflow-visible [contain:layout_paint]">
      <img
        src={fallbackSrc}
        alt=""
        aria-hidden="true"
        decoding="async"
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-out ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {shouldRender && (
        <Suspense fallback={null}>
          <Spline
            scene={scene}
            className={`${className} transition-opacity duration-500 ease-out ${
              isLoaded ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            onLoad={(app: Application) => {
              if (transparent) {
                try {
                  app.setBackgroundColor('transparent');
                } catch {
                  // Older runtimes may not expose background control.
                }
              }
              // Wait two frames so the transparent background is committed before we
              // fade in — prevents the one-frame black canvas flash on reveal.
              requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsLoaded(true));
              });
            }}
          />
        </Suspense>
      )}
    </div>
  );
}
