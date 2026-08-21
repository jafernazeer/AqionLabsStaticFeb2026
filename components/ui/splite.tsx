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
        // touch-action: pan-y lets the page keep scrolling vertically while the
        // scene still receives pointer/touch moves, so the head tracks the finger.
        style={{ touchAction: 'pan-y', pointerEvents: 'auto' }}
        className={`${className} transition-opacity duration-200 ease-out ${
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
          // Reveal on the next frame: long enough for the transparent background
          // to commit (no black flash), short enough to feel instant.
          requestAnimationFrame(() => setIsLoaded(true));
        }}
      />
    </div>
  );
}
