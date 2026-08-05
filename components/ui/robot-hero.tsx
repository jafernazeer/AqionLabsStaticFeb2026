'use client';

import { SplineScene } from '@/components/ui/splite';

interface RobotHeroProps {
  scene?: string;
  height?: string;
  className?: string;
}

const DEFAULT_SCENE = '/3d/nexbot-robot-v2.splinecode';

export function RobotHero({
  scene = DEFAULT_SCENE,
  height = '500px',
  className = '',
}: RobotHeroProps) {
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
      />
    </div>
  );
}
