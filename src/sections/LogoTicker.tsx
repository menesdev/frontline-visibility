"use client";

import { useEffect, useRef, useState } from 'react';

const logos = [
  {
    name: 'OpenAI', svg: (
      <svg viewBox="0 0 120 30" className="h-6 w-auto fill-current">
        <text x="0" y="22" className="text-lg font-semibold">OpenAI</text>
      </svg>
    )
  },
  {
    name: 'Anthropic', svg: (
      <svg viewBox="0 0 120 30" className="h-6 w-auto fill-current">
        <text x="0" y="22" className="text-lg font-semibold">Anthropic</text>
      </svg>
    )
  },
  {
    name: 'Perplexity', svg: (
      <svg viewBox="0 0 120 30" className="h-6 w-auto fill-current">
        <text x="0" y="22" className="text-lg font-semibold">Perplexity</text>
      </svg>
    )
  },
  {
    name: 'Google', svg: (
      <svg viewBox="0 0 100 30" className="h-6 w-auto fill-current">
        <text x="0" y="22" className="text-lg font-semibold">Google</text>
      </svg>
    )
  },
  {
    name: 'Microsoft', svg: (
      <svg viewBox="0 0 120 30" className="h-6 w-auto fill-current">
        <text x="0" y="22" className="text-lg font-semibold">Microsoft</text>
      </svg>
    )
  },
  {
    name: 'Meta', svg: (
      <svg viewBox="0 0 80 30" className="h-6 w-auto fill-current">
        <text x="0" y="22" className="text-lg font-semibold">Meta</text>
      </svg>
    )
  },
];

const LogoTicker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p
          className={`text-center text-sm text-white/40 uppercase tracking-widest transition-all duration-700 ${!mounted ? 'opacity-0 translate-y-4' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          Trusted by teams at
        </p>
      </div>

      {/* Logo track */}
      <div
        className={`relative transition-all duration-700 delay-200 ${!mounted ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-slide-infinite">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-12 py-4 text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-400 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {[
            { value: '500+', label: 'Companies Tracked' },
            { value: '10M+', label: 'AI Responses Analyzed' },
            { value: '50+', label: 'Countries Covered' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
