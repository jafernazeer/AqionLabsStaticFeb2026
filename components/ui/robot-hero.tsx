'use client';

import { useEffect, useState } from 'react';
import { SplineScene } from '@/components/ui/splite';

interface RobotHeroProps {
  scene?: string;
  height?: string;
  className?: string;
}

const DEFAULT_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';
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

  if (reduceMotion) return null;

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ height }}
      aria-label="Interactive 3D robot"
      role="img"
    >
      <SplineScene scene={scene} className="h-full w-full touch-pan-y" />
    </div>
  );
}
