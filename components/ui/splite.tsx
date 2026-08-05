'use client';

import { Suspense, lazy, useState } from 'react';
import type { Application } from '@splinetool/runtime';

const Spline = lazy(() => import('@splinetool/react-spline'));
const ROBOT_FALLBACK_IMAGE = '/aqionlabs-hero-robot-static.png';

interface SplineSceneProps {
  scene: string;
  className?: string;
  transparent?: boolean;
  staticOnly?: boolean;
}

const SceneFallback = ({ hidden = false }: { hidden?: boolean }) => (
  <div
    className={`home-robot-fallback pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out ${
      hidden ? 'opacity-0' : 'opacity-100'
    }`}
    aria-hidden="true"
  >
    <img
      src={ROBOT_FALLBACK_IMAGE}
      alt=""
      className="home-robot-fallback-image absolute h-auto max-w-none object-contain drop-shadow-[0_44px_42px_rgba(20,20,15,0.14)]"
      decoding="sync"
      fetchPriority="high"
    />
  </div>
);

export function SplineScene({
  scene,
  className = '',
  transparent = true,
  staticOnly = false,
}: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-visible [contain:layout_paint]">
      <SceneFallback hidden={isLoaded && !staticOnly} />
      {!staticOnly && (
        <Suspense fallback={null}>
          <Spline
            scene={scene}
            className={`${className} transition-opacity duration-700 ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={(app: Application) => {
              if (transparent) {
                try {
                  app.setBackgroundColor('transparent');
                } catch {
                  // Older runtimes may not expose background control.
                }
              }
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
