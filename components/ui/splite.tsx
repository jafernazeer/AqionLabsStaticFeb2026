'use client';

import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import type { Application } from '@splinetool/runtime';

const Spline = lazy(() => import('@splinetool/react-spline'));
const ROBOT_REVEAL_DELAY_MS = 1200;

interface SplineSceneProps {
  scene: string;
  className?: string;
  transparent?: boolean;
}

export function SplineScene({
  scene,
  className = '',
  transparent = true,
}: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const revealTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (revealTimer.current !== null) window.clearTimeout(revealTimer.current);
    },
    [],
  );

  return (
    <div className="relative h-full w-full overflow-visible [contain:layout_paint]">
      <Suspense fallback={null}>
        <Spline
          scene={scene}
          className={`${className} transition-opacity duration-[1800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
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
            if (revealTimer.current !== null) window.clearTimeout(revealTimer.current);
            revealTimer.current = window.setTimeout(() => {
              requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsLoaded(true));
              });
            }, ROBOT_REVEAL_DELAY_MS);
          }}
        />
      </Suspense>
    </div>
  );
}
