import { useEffect, useMemo, useState } from 'react';
import waveMarkup from '../assets/service-motion.min.svg?raw';

/**
 * The wave ribbon — the artwork from `service-motion.svg`, drawn inline.
 *
 * The motion is 24 SMIL `<animate>` elements, and how the markup reaches the
 * page decides whether they run at all:
 *
 *  - Through `<img>` or `<object>`, mobile engines freeze SMIL on the opening
 *    frame. This is what made the ribbon a still picture on phones.
 *  - Fetched and written with `innerHTML` after load, the nodes come from the
 *    fragment parser, and Blink does not reliably hand them to its SMIL
 *    scheduler — the clock stays at zero and the ribbon is static again. It
 *    also cannot appear until the route's JavaScript has downloaded and run.
 *  - Parsed by the HTML parser as part of the document, they always run, and
 *    they start with the page rather than after it.
 *
 * So the markup is bundled and rendered inline. It is ~147KB of text, which
 * looks expensive until you check the wire: it compresses to about 3.5KB, and
 * the host already serves gzip. Paying that per page buys motion that is
 * running before the first frame is painted.
 */

/** Intrinsic viewBox of the artwork; the wrapper holds this ratio. */
const RATIO = '1080 / 653';

/** The token `assets/service-motion.min.svg` carries for its clip-path id. */
const CLIP_TOKEN = /__WAVE_CLIP__/g;

/**
 * A constant, deliberately, rather than a per-instance generated id.
 *
 * The ribbon is painted by the prerendered HTML and animates the moment the
 * parser reaches it. React then hydrates over that DOM, and it only leaves
 * `dangerouslySetInnerHTML` untouched when the markup matches exactly. A
 * generated id does not survive that comparison: lazy routes resolve in a
 * different order at hydration than they did during prerender, so the ids
 * differ, React rebuilds the subtree, and SMIL restarts from zero once the
 * bundle has loaded. That rebuild is the static wave that suddenly starts
 * moving a few seconds in.
 *
 * Every ribbon on a page carries the same clipPath, so one shared id renders
 * identically while keeping the markup stable across server and client.
 */
const CLIP_ID = 'wave-clip';

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
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(query.matches);

    const onChange = () => setReduceMotion(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const html = useMemo(
    () => (reduceMotion ? STILL_MARKUP : waveMarkup).replace(CLIP_TOKEN, CLIP_ID),
    [reduceMotion],
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
