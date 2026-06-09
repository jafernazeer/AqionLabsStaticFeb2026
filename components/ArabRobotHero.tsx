import React, { useEffect, useRef } from 'react';

const ArabRobotHero: React.FC = () => {
  const shellRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const normalizedX = event.clientX / window.innerWidth - 0.5;
      const normalizedY = event.clientY / window.innerHeight - 0.5;
      const x = normalizedX * 18;
      const y = normalizedY * 18;

      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      frameRef.current = window.requestAnimationFrame(() => {
        if (shellRef.current) {
          shellRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="relative flex h-[38vh] min-h-[320px] w-full items-center justify-center overflow-visible sm:h-[44vh] sm:min-h-[360px] lg:h-[620px]">
      <style>{`
        @keyframes aqionRobotEnter {
          0% { opacity: 0; transform: scale(0) rotate(-180deg); filter: blur(10px); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0); }
        }
        @keyframes aqionRobotGlow {
          0%, 100% { opacity: 0.24; transform: scale(1); }
          50% { opacity: 0.46; transform: scale(1.18); }
        }
        @keyframes aqionRobotDrift {
          0%, 100% { transform: translate3d(-38px, 0, 0); }
          50% { transform: translate3d(38px, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .aqion-hero-robot,
          .aqion-hero-robot-drift,
          .aqion-hero-robot-shell,
          .aqion-hero-robot-glow {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.10),rgba(100,206,251,0.08)_38%,transparent_68%)] blur-3xl"
      />
      <div className="aqion-hero-robot-drift relative z-10 will-change-transform" style={{ animation: 'aqionRobotDrift 10s ease-in-out infinite' }}>
        <div
          ref={shellRef}
          className="aqion-hero-robot-shell relative will-change-transform"
          style={{
            transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <div
            aria-hidden
            className="aqion-hero-robot-glow absolute -inset-8 -z-10 rounded-full bg-gradient-to-r from-[#4f46e5]/18 to-[#9333ea]/18 blur-3xl"
            style={{ animation: 'aqionRobotGlow 3s ease-in-out infinite' }}
          />
          <div
            aria-hidden
            className="absolute bottom-[7%] left-1/2 -z-10 h-12 w-[62%] -translate-x-1/2 rounded-full bg-ink/18 blur-2xl"
          />
          <img
            src="/aqionlabsrobo.svg"
            alt="AqionLabs animated AI robot"
            className="aqion-hero-robot h-[min(44vh,430px)] min-h-[330px] w-auto max-w-full object-contain drop-shadow-[0_48px_44px_rgba(20,20,15,0.16)] sm:h-[min(46vh,480px)] sm:min-h-[350px] lg:h-[min(54vh,576px)] lg:min-h-[340px]"
            style={{ animation: 'aqionRobotEnter 900ms cubic-bezier(0.22, 1, 0.36, 1) 200ms both' }}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};

export default ArabRobotHero;
