/**
 * The wave ribbon.
 *
 * The artwork animates itself — `service-motion.svg` carries its own SMIL
 * timeline — so the only question is how it reaches the page.
 *
 * Rendering the markup inside React was the mistake. Inline SMIL depends on
 * how the nodes were created and on React not rebuilding them at hydration;
 * either one going wrong leaves the ribbon frozen on its opening frame, which
 * is what made it look like a static picture that only started moving once the
 * bundle had loaded.
 *
 * An `<img>` has none of that. The browser treats the SVG as its own document,
 * starts its timeline the moment the image decodes, and loops it forever.
 * Nothing about React can interrupt it, there is no hydration to survive, and
 * the file is cached across every page instead of being re-parsed per render.
 * This is the same delivery the industry hero artwork has always used.
 */

const SRC = '/service-motion.svg';

/** Intrinsic viewBox of the artwork; the wrapper holds its ratio. */
const RATIO = '1080 / 653';

export default function WaveMotion({
  className = '',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <img
      src={SRC}
      alt=""
      aria-hidden="true"
      decoding="async"
      className={className}
      style={{ aspectRatio: RATIO, pointerEvents: 'none', ...style }}
    />
  );
}
