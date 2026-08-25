import { useEffect, useState } from 'react';

/**
 * The animated wave ribbon.
 *
 * The artwork drives itself with 36 SMIL `<animate>` elements. Browsers run
 * those reliably when the SVG is a document (`<object>`), but mobile engines
 * frequently freeze SMIL on the first painted frame when the same file is
 * referenced from an `<img>` — which is why the wave looked static on phones.
 *
 * The file is a single shared asset across every page, so after the first
 * request it comes from cache; the `preload` in index.html starts that request
 * during head parsing rather than at layout.
 */

const SRC = '/service-motion.svg';

/** Intrinsic viewBox of the artwork, used to hold its ratio inside an <object>. */
const RATIO = '1080 / 653';

export default function WaveMotion({
  className = '',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(query.matches);

    const onChange = () => setReduceMotion(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const shared: React.CSSProperties = {
    aspectRatio: RATIO,
    pointerEvents: 'none',
    ...style,
  };

  // Readers who ask for less motion get the same artwork as a still frame.
  if (reduceMotion) {
    return (
      <img
        src={SRC}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className={className}
        style={shared}
      />
    );
  }

  return (
    <object
      type="image/svg+xml"
      data={SRC}
      aria-hidden="true"
      tabIndex={-1}
      className={className}
      style={shared}
    />
  );
}
