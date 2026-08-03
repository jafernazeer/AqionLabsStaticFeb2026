'use client';

import { Suspense, lazy, useState } from 'react';
import type { Application } from '@splinetool/runtime';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
  transparent?: boolean;
}

const SceneLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
    <span className="h-8 w-8 animate-pulse rounded-full border border-[#4f46e5]/20 bg-white/45 shadow-[0_0_36px_rgba(79,70,229,0.12)] backdrop-blur-sm" />
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
      {!isLoaded && <SceneLoader />}
      <Suspense fallback={<SceneLoader />}>
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
