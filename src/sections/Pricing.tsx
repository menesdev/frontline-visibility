"use client";

import { useEffect, useRef, useState } from 'react';
import { Check, Sparkles, Zap, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started',
    monthlyPrice: 49,
    yearlyPrice: 39,
    icon: Zap,
    features: [
      'Track up to 3 brands',
      '5,000 prompts/month',
      'ChatGPT & Perplexity',
      'Basic analytics',
      'Email support',
      '7-day data history',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'For growing businesses that need more',
    monthlyPrice: 149,
    yearlyPrice: 119,
    icon: Sparkles,
    features: [
      'Track up to 10 brands',
      '25,000 prompts/month',
      'All AI platforms',
      'Advanced analytics',
      'Priority support',
      '90-day data history',
      'Competitor tracking',
      'Custom reports',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    monthlyPrice: null,
    yearlyPrice: null,
    icon: Building2,
    features: [
      'Unlimited brands',
      'Unlimited prompts',
      'All AI platforms + beta',
      'Custom analytics',
      'Dedicated support',
      'Unlimited history',
      'Advanced competitor intel',
      'White-label reports',
      'Full API access',
      'SSO & custom integrations',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isYearly, setIsYearly] = useState(true);
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
    <section id="pricing" ref={sectionRef} className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-beige/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 transition-all duration-700 ${!mounted ? 'opacity-0 translate-y-4' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <span className="text-sm text-brand-beige">Pricing</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Simple, transparent{' '}
            <span className="text-gradient">pricing</span>
          </h2>
          <p
            className={`text-lg text-white/60 max-w-2xl mx-auto mb-8 transition-all duration-700 delay-200 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>

          {/* Billing toggle */}
          <div
            className={`inline-flex items-center gap-4 p-2 rounded-full bg-white/5 border border-white/10 transition-all duration-700 delay-300 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-white/50'}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-brand-beige"
            />
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-white/50'}`}>
              Yearly
              <span className="ml-2 text-xs text-brand-beige">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-700 ${plan.popular
                ? 'bg-gradient-to-b from-brand-beige/10 to-transparent border-2 border-brand-beige/30 scale-105 z-10'
                : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
                } ${!mounted ? 'opacity-0 translate-y-12' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full bg-brand-beige text-brand-bg text-xs font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.popular ? 'bg-brand-beige/20' : 'bg-white/5'
                      }`}
                  >
                    <plan.icon
                      className={`w-5 h-5 ${plan.popular ? 'text-brand-beige' : 'text-white/60'}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  </div>
                </div>

                <p className="text-sm text-white/50 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-white/50">/month</span>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-white">Custom</div>
                  )}
                  {plan.monthlyPrice && isYearly && (
                    <div className="text-sm text-white/40 mt-1">
                      Billed annually (${plan.yearlyPrice! * 12}/year)
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={plan.name === 'Enterprise' ? '/login' : `/checkout?plan=${plan.name.toLowerCase()}`}
                  className="block mb-8"
                >
                  <Button
                    className={`w-full ${plan.popular
                      ? 'bg-brand-beige text-brand-bg hover:bg-brand-beige/90'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                      }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                {/* Features */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-white/70 mb-3">What's included:</div>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? 'bg-brand-beige/20' : 'bg-white/10'
                          }`}
                      >
                        <Check
                          className={`w-3 h-3 ${plan.popular ? 'text-brand-beige' : 'text-white/60'}`}
                        />
                      </div>
                      <span className="text-sm text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-700 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-sm text-white/40">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
