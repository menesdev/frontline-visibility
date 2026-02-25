"use client";

import { useEffect, useRef, useState } from 'react';
import { Search, BarChart3, TrendingUp, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Connect & Track',
    description: 'Connect your brand and competitors. Our AI scans ChatGPT, Perplexity, Google AI Overviews, and other major platforms to find every mention.',
    color: 'from-[#75fb4c]/20 to-[#75fb4c]/10',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Analyze & Score',
    description: 'Get your AI Visibility Score based on mention frequency, prominence, sentiment, and source authority. See exactly where you stand.',
    color: 'from-[#d22e9c]/20 to-[#75fb4c]/10',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Compare & Benchmark',
    description: 'Benchmark against competitors. Discover which topics and queries drive visibility in your industry.',
    color: 'from-[#75fb4c]/10 to-[#d22e9c]/20',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Optimize & Grow',
    description: 'Receive actionable recommendations to improve your visibility. Track progress over time and celebrate wins.',
    color: 'from-[#d22e9c]/20 to-[#d22e9c]/10',
  },
];

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-beige/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 transition-all duration-700 ${!mounted ? 'opacity-0 translate-y-4' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <span className="text-sm text-brand-beige">How it Works</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Four steps to{' '}
            <span className="text-gradient">AI visibility</span>
          </h2>
          <p
            className={`text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 delay-200 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Get started in minutes and start tracking your brand across AI platforms today.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Steps list */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${activeStep === index
                  ? 'bg-white/[0.05] border-brand-beige/30'
                  : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                  } ${!mounted ? 'opacity-0 -translate-x-8' : isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div
                    className={`text-2xl font-bold transition-colors duration-300 ${activeStep === index ? 'text-brand-beige' : 'text-white/20'
                      }`}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${activeStep === index ? 'bg-brand-beige/10' : 'bg-white/5'
                          }`}
                      >
                        <step.icon
                          className={`w-4 h-4 transition-colors duration-300 ${activeStep === index ? 'text-brand-beige' : 'text-white/40'
                            }`}
                        />
                      </div>
                      <h3
                        className={`text-lg font-semibold transition-colors duration-300 ${activeStep === index ? 'text-white' : 'text-white/60'
                          }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className={`text-sm leading-relaxed transition-all duration-500 ${activeStep === index
                        ? 'text-white/60 max-h-24 opacity-100'
                        : 'text-white/40 max-h-0 opacity-0 overflow-hidden'
                        }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                {activeStep === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-beige animate-[progress_3s_linear]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right - Visual */}
          <div
            className={`relative transition-all duration-700 delay-500 ${!mounted ? 'opacity-0 translate-x-12' : isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-beige/20 to-brand-beige/5 border border-brand-beige/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-brand-bg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-beige">
                        {steps[activeStep].number}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              {steps.map((step, index) => {
                const angle = (index * 90 - 90) * (Math.PI / 180);
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={index}
                    className={`absolute w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeStep === index
                      ? 'bg-brand-beige/20 border-brand-beige/40 scale-110'
                      : 'bg-white/5 border-white/10 scale-100'
                      }`}
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                      border: '1px solid',
                    }}
                  >
                    <step.icon
                      className={`w-6 h-6 transition-colors duration-300 ${activeStep === index ? 'text-brand-beige' : 'text-white/30'
                        }`}
                    />
                  </div>
                );
              })}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <circle
                  cx="50%"
                  cy="50%"
                  r="140"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                  strokeDasharray="8 4"
                />
              </svg>

              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full opacity-50 transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at ${50 + Math.cos((activeStep * 90 - 90) * (Math.PI / 180)) * 30}% ${50 + Math.sin((activeStep * 90 - 90) * (Math.PI / 180)) * 30}%, rgba(117, 251, 76, 0.15), transparent 50%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
