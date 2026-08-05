import React from 'react';

type MotionKind = 'video' | 'image';

interface OptimizedHeroMotionProps {
  kind: MotionKind;
  src: string;
  className: string;
  mediaClassName?: string;
  mediaStyle?: React.CSSProperties;
  onLoad?: () => void;
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
        loading="eager"
        decoding="async"
        fetchPriority="high"
        onLoad={onLoad}
        className={mediaClassName}
        style={mediaStyle}
      />
    </div>
  );
};

export const ServiceMotionBackdrop: React.FC<{ className?: string }> = ({ className = 'opacity-70' }) => (
  <OptimizedHeroMotion
    kind="image"
    src="/service-motion.svg"
    className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    mediaClassName="absolute inset-[-16%_-10%] h-[132%] w-[120%] max-w-none object-cover"
    mediaStyle={{ opacity: 0.44, filter: 'saturate(0.92)', transform: 'scaleX(-1) scale(1.08)' }}
  />
);

export const IndustryMotionBackdrop: React.FC<{ src: string; className?: string }> = ({
  src,
  className = 'opacity-[0.55]',
}) => (
  <OptimizedHeroMotion
    kind="image"
    src={src}
    className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    mediaClassName="h-full w-full object-cover"
  />
);

export default OptimizedHeroMotion;
