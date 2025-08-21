import { useEffect, useRef, useState } from 'react';

export default function HeroVanta() {
  const vantaRef = useRef(null);
  const TITLE_PLAIN = "AKASH INTER COLLEGE";
  const TITLE_DISPLAY = "𝑨𝑲𝑨𝑺𝑯 𝑰𝑵𝑻𝑬𝑹 𝑪𝑶𝑳𝑳𝑬𝑮𝑬";
  const [showTagline] = useState(true);
  const [showCta] = useState(true);

  useEffect(() => {
    let vantaEffect = null;

    const loadVanta = () => {
      if (typeof window !== 'undefined' && window.VANTA && vantaRef.current) {
        vantaEffect = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xf5e2cc,
          color1: 0x2563eb,
          color2: 0xa7f3d0,
          birdSize: 2.5,
        });
      }
    };

    if (typeof window !== 'undefined' && window.VANTA) {
      loadVanta(); // Initialize immediately if VANTA is available
    } else {
      const interval = setInterval(() => {
        if (window.VANTA) {
          loadVanta();
          clearInterval(interval);
        }
      }, 100); // Retry every 100ms until VANTA is loaded
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  // No text sequencing; show tagline and CTA immediately

  return (
    <section className="relative w-full h-[420px] overflow-hidden pt-12"> {/* Padding for navbar */}
      <div ref={vantaRef} className="absolute inset-0 z-0 vanta-layer" /> {/* Animation container */}
      {/* Soft animated gradient overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.18),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.18),transparent_50%)]" />
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-8 text-left md:items-center md:text-center hero-content">
        <img src="/logo1.png" alt="College Logo" className="college-logo" width="120" height="120" loading="eager" decoding="async" fetchpriority="high" />
        <h1 className="hero-title hero-title-gradient text-5xl md:text-6xl font-extrabold italic" aria-label={TITLE_PLAIN}>{TITLE_DISPLAY}</h1>
        {showTagline && (
          <p className="mt-3 text-base md:text-lg hero-tagline max-w-2xl">
            Inspiring excellence in academics, leadership, and character
          </p>
        )}
        {showCta && (
          <a
            href="/admissions"
            className="mt-5 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 px-6 py-3 text-white shadow-lg ring-1 ring-white/10 transition-all transform-gpu animate-fade-up hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(56,189,248,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Admission Open
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        )}
      </div>
    </section>
  );
}