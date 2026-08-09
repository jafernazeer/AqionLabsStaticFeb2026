'use client';

import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';

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

  return (
    <div className="relative h-full w-full overflow-visible [contain:layout_paint]">
      <Spline
        scene={scene}
        className={`${className} transition-opacity duration-300 ease-out ${
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
    </div>
  );
}
