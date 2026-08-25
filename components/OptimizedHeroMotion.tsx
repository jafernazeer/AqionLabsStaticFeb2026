import React from 'react';
import WaveMotion from './WaveMotion';

type MotionKind = 'video' | 'image';

interface OptimizedHeroMotionProps {
  kind: MotionKind;
  src: string;
  className: string;
  mediaClassName?: string;
  mediaStyle?: React.CSSProperties;
  onLoad?: () => void;
  /** true for the above-the-fold hero artwork, false for decorative backdrops. */
  priority?: boolean;
}

const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const OptimizedHeroMotion: React.FC<OptimizedHeroMotionProps> = ({
  kind,
  src,
  className,
  mediaClassName,
  mediaStyle,
  onLoad,
  priority = true,
}) => {
  // Keep static image/SVG artwork visible for reduced-motion users. Only
  // autoplay video is omitted because it has no equivalent static frame here.
  if (kind === 'video' && shouldReduceMotion()) return null;

  if (kind === 'video') {
    return (
      <video
        aria-hidden="true"
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return (
    <div className={className} aria-hidden="true">
      <img
        src={src}
        alt=""
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'low'}
        onLoad={onLoad}
        className={mediaClassName}
        style={mediaStyle}
      />
    </div>
  );
};

export const ServiceMotionBackdrop: React.FC<{ className?: string }> = ({ className = 'opacity-70' }) => (
  <div className={`absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none ${className}`} aria-hidden>
    <WaveMotion
      className="w-[170%] max-w-none shrink-0 md:w-[135%] lg:w-[115%]"
      style={{ opacity: 0.44, filter: 'saturate(0.92)' }}
    />
  </div>
);

export const IndustryMotionBackdrop: React.FC<{ src: string; className?: string }> = ({
  src,
  className = 'opacity-[0.55]',
}) => (
  <OptimizedHeroMotion
    kind="image"
    src={src}
    priority={false}
    className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    mediaClassName="h-full w-full object-cover"
  />
);

export default OptimizedHeroMotion;
