'use client';

import { useEffect, useState } from 'react';
import { SplineScene } from '@/components/ui/splite';

interface RobotHeroProps {
  scene?: string;
  height?: string;
  className?: string;
}

const DEFAULT_SCENE = '/3d/nexbot-robot-v2.splinecode';
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function RobotHero({
  scene = DEFAULT_SCENE,
  height = '500px',
  className = '',
}: RobotHeroProps) {
  const [reduceMotion, setReduceMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setReduceMotion(media.matches);

    syncPreference();
    media.addEventListener('change', syncPreference);
    return () => media.removeEventListener('change', syncPreference);
  }, []);

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ height }}
      aria-label="Interactive 3D robot"
      role="img"
    >
      <SplineScene
        scene={scene}
        className="home-robot-scene h-full w-full touch-pan-y"
        staticOnly={reduceMotion}
      />
    </div>
  );
}
