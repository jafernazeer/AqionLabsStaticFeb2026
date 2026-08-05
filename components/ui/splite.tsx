'use client';

import { Suspense, lazy, useState } from 'react';
import type { Application } from '@splinetool/runtime';

const Spline = lazy(() => import('@splinetool/react-spline'));
const ROBOT_FALLBACK_IMAGE = '/aqionlabs-hero-robot-v2.svg';

interface SplineSceneProps {
  scene: string;
  className?: string;
  transparent?: boolean;
}

const SceneFallback = ({ className = '' }: { className?: string }) => (
  <div
    className={`pointer-events-none absolute inset-0 flex items-center justify-center ${className}`}
    aria-hidden="true"
  >
    <img
      src={ROBOT_FALLBACK_IMAGE}
      alt=""
      className="h-full w-full object-contain opacity-90 drop-shadow-[0_44px_42px_rgba(20,20,15,0.14)]"
      decoding="async"
      fetchPriority="high"
    />
  </div>
);

export function SplineScene({
  scene,
  className = '',
  transparent = true,
}: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-visible [contain:layout_paint]">
      {!isLoaded && <SceneFallback className={className} />}
      <Suspense fallback={null}>
        <Spline
          scene={scene}
          className={`${className} transition-opacity duration-500 ${
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
            setIsLoaded(true);
          }}
        />
      </Suspense>
    </div>
  );
}
