import { useEffect, useId, useMemo, useState } from 'react';

/**
 * The wave ribbon — the artwork from `service-motion.svg`.
 *
 * Two constraints pull against each other here.
 *
 * The motion is 24 SMIL `<animate>` elements, and mobile engines freeze SMIL
 * whenever the SVG is a nested document — referenced through `<img>` or
 * `<object>`. The markup therefore has to live in the host document.
 *
 * But it cannot be *bundled* into the document either. Inlined at build time it
 * lands in all 55 prerendered pages, taking `index.html` from 11KB to 502KB and
 * re-downloading the same artwork on every navigation.
 *
 * So the file is fetched once and injected inline: one request, shared by every
 * ribbon on every page and served from cache after the first, with the markup
 * still sitting in the host document where SMIL runs. `index.html` preloads it
 * so the request starts while the head is parsing rather than at first render.
 */

const SRC = '/service-motion.min.svg';

/** Intrinsic viewBox of the artwork; the wrapper holds this ratio. */
const RATIO = '1080 / 653';

/** The token the file carries in place of its clip-path id. */
const CLIP_TOKEN = /__WAVE_CLIP__/g;

/**
 * One request for the whole session. Every ribbon awaits the same promise, so
 * mounting three of them does not fetch three copies.
 */
let pending: Promise<string> | null = null;

function loadWave(): Promise<string> {
  if (!pending) {
    pending = fetch(SRC)
      .then((response) => (response.ok ? response.text() : ''))
      // A failed fetch leaves the decoration absent rather than breaking a page.
      .catch(() => '');
  }
  return pending;
}

export default function WaveMotion({
  className = '',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  // Several ribbons can share a page, and each needs its own clip-path id.
  const clipId = `wave-clip-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const [markup, setMarkup] = useState('');
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    let active = true;
    loadWave().then((text) => {
      if (active) setMarkup(text);
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(query.matches);

    const onChange = () => setReduceMotion(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const html = useMemo(() => {
    if (!markup) return '';
    // SMIL ignores `prefers-reduced-motion`, so the still frame is the same
    // markup with the timing elements removed — each path holds its opening `d`.
    const source = reduceMotion ? markup.replace(/<animate\b[^>]*\/>/g, '') : markup;
    return source.replace(CLIP_TOKEN, clipId);
  }, [markup, reduceMotion, clipId]);

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ aspectRatio: RATIO, pointerEvents: 'none', ...style }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
