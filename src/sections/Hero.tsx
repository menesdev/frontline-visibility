"use client";

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Zap, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const stats = [
    { icon: Zap, label: 'AI Platforms', value: '6+' },
    { icon: TrendingUp, label: 'Accuracy', value: '99%' },
    { icon: Shield, label: 'Data Privacy', value: 'SOC 2' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(117, 251, 76, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(117, 251, 76, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-beige/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 transition-all duration-1000 ${!mounted ? 'opacity-0 translate-y-4' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <span className="w-2 h-2 rounded-full bg-brand-beige animate-pulse" />
              <span className="text-sm text-white/70">Now tracking ChatGPT, Perplexity & more</span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-1000 delay-200 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <span className="text-white">Track Your</span>
              <br />
              <span className="text-gradient">AI Visibility</span>
              <br />
              <span className="text-white">Scores</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg sm:text-xl text-white/60 max-w-lg transition-all duration-1000 delay-300 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              Monitor how your brand appears across AI platforms. Get real-time insights,
              competitor analysis, and actionable recommendations to boost your presence.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-400 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <Button
                size="lg"
                className="bg-brand-beige text-brand-bg hover:bg-brand-beige/90 font-semibold px-8 group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 px-8 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-8 pt-4 transition-all duration-1000 delay-500 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-brand-beige" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Dashboard Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-600 ${!mounted ? 'opacity-0 translate-x-12' : isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-brand-beige/20 rounded-3xl blur-3xl opacity-50" />

            {/* Dashboard image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/hero-dashboard.jpg"
                alt="AI Visibility Dashboard"
                className="w-full h-auto"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/50 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-brand-bg/90 backdrop-blur-xl border border-white/10 shadow-xl"
              style={{
                transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-beige/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-brand-beige" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Visibility Score</div>
                  <div className="text-2xl font-bold text-brand-beige">+24%</div>
                </div>
              </div>
            </div>

            {/* Another floating element */}
            <div
              className="absolute -top-4 -right-4 px-4 py-3 rounded-xl bg-brand-bg/90 backdrop-blur-xl border border-white/10 shadow-xl"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-brand-beige/30 border-2 border-brand-bg" />
                  ))}
                </div>
                <div className="text-sm text-white/70">+2.4k users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
