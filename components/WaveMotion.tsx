import { useEffect, useId, useMemo, useState } from 'react';
import waveMarkup from '../assets/service-motion.svg?raw';

/**
 * The wave ribbon — the artwork from `service-motion.svg`, drawn inline.
 *
 * The motion comes from the file's own SMIL `<animate>` elements. Those run
 * everywhere when the SVG is part of the host document; it is only when the
 * same file is referenced through `<img>` or `<object>` that mobile engines
 * freeze it on the first frame. So the markup is inlined rather than fetched:
 * the animation is the browser's normal SMIL path on every engine, and there
 * is no second request to lose to cache or race conditions.
 *
 * The bundled copy is the source file with its unused `<defs>` duplicate of the
 * ribbon removed — 190KB of markup, ~5KB over the wire once compressed.
 */

/** Intrinsic viewBox of the artwork; the wrapper holds this ratio. */
const RATIO = '1080 / 653';

/** The token `assets/service-motion.svg` carries in place of its clip-path id. */
const CLIP_TOKEN = /__WAVE_CLIP__/g;

/**
 * SMIL ignores `prefers-reduced-motion`, so the still frame is the same markup
 * with the timing elements removed — each path holds its opening `d`.
 */
const STILL_MARKUP = waveMarkup.replace(/<animate\b[^>]*\/>/g, '');

export default function WaveMotion({
  className = '',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  // Several ribbons can share a page, and each needs its own clip-path id.
  const clipId = `wave-clip-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(query.matches);

    const onChange = () => setReduceMotion(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const html = useMemo(
    () => (reduceMotion ? STILL_MARKUP : waveMarkup).replace(CLIP_TOKEN, clipId),
    [clipId, reduceMotion],
  );

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ aspectRatio: RATIO, pointerEvents: 'none', ...style }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
