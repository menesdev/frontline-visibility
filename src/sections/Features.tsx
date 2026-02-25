"use client";

import { useEffect, useRef, useState } from 'react';
import { Brain, Activity, Users, FileText, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze your brand presence across all major AI platforms including ChatGPT, Perplexity, Google AI Overviews, and more.',
    image: '/feature-analysis.jpg',
    size: 'large',
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'Get instant alerts when your brand is mentioned. Track visibility trends as they happen.',
    image: '/feature-monitoring.jpg',
    size: 'small',
  },
  {
    icon: Users,
    title: 'Competitor Insights',
    description: 'See how you stack up against competitors. Identify gaps and opportunities.',
    image: '/feature-competitor.jpg',
    size: 'small',
  },
  {
    icon: FileText,
    title: 'Custom Reports',
    description: 'Generate beautiful, shareable reports with one click. Schedule automated reports for stakeholders. Export in PDF, CSV, or integrate with your existing analytics stack.',
    image: '/feature-reports.jpg',
    size: 'full',
  },
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-96 h-96 bg-brand-beige/5 rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-beige/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 transition-all duration-700 ${!mounted ? 'opacity-0 translate-y-4' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <span className="text-sm text-brand-beige">Features</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Everything you need to{' '}
            <span className="text-gradient">dominate AI search</span>
          </h2>
          <p
            className={`text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 delay-200 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Comprehensive tools to track, analyze, and optimize your brand's visibility across all major AI platforms.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-brand-beige/30 hover:bg-white/[0.04] ${feature.size === 'large' ? 'md:col-span-1 md:row-span-2' : ''
                } ${feature.size === 'full' ? 'md:col-span-2' : ''} ${!mounted ? 'opacity-0 translate-y-12' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${feature.size === 'large' ? 'h-64 md:h-80' : 'h-48'}`}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-beige/10 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-brand-beige" />
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-beige transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-beige/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Feature list */}
        <div
          className={`mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-700 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {[
            { title: 'Multi-Platform', desc: 'ChatGPT, Claude, Perplexity & more' },
            { title: 'Sentiment Analysis', desc: 'Track positive vs negative mentions' },
            { title: 'Historical Data', desc: '12 months of trend analysis' },
            { title: 'API Access', desc: 'Integrate with your workflow' },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300"
            >
              <div className="text-sm font-medium text-white mb-1">{item.title}</div>
              <div className="text-xs text-white/50">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
