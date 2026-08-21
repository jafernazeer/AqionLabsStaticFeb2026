import React, { useEffect } from 'react';

/**
 * Placeholder surface for pages whose copy has not landed yet.
 * Renders the sitewide beige mesh background with the subtle hairline grid
 * and a soft petrol gradient bloom — nothing else.
 */
const BlankCanvas: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg relative min-h-screen overflow-hidden pt-20 font-sans text-ink">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hairline-grid opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/10 blur-[130px]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bone/70 via-transparent to-bone/85" />
      <div className="relative min-h-[calc(100vh-5rem)]" />
    </div>
  );
};

export default BlankCanvas;
