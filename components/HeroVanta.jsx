import { useEffect, useRef } from 'react';

export default function HeroVanta() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;

    const loadVanta = () => {
      if (window.VANTA && vantaRef.current) {
        vantaEffect = window.VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x1e40af, // Keeping original darker blue for waves
          waveHeight: 20,
          shininess: 50,
          waveSpeed: 1.0,
          backgroundColor: 0x93c5fd, // Keeping original light blue background
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

    // Cleanup on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-[420px] overflow-hidden pt-12"> {/* Padding for navbar */}
      <div ref={vantaRef} className="absolute inset-0 z-0" /> {/* Animation container */}
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-8 text-left md:items-center md:text-center">
        <h1 className="text-5xl font-bold text-gray-900 md:text-6xl">AKASH INTER COLLEGE</h1>
        <p className="mt-2 text-lg text-black-600">Inspiring excellence in academics, leadership, and character.</p>
        <a
          href="/admissions"
          className="mt-4 inline-block rounded bg-blue-700 px-6 py-3 text-black-700 hover:text-blue-600 hover:bg-blue-800 shadow-lg transition-colors"
        >
          Admission Open
        </a>
      </div>
    </section>
  );
}