"use client";

import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "AI Visibility Scores has completely transformed how we track our brand presence. We've increased our ChatGPT mentions by 340% in just three months by following their recommendations.",
    author: 'Michael Chen',
    role: 'Head of Digital Marketing',
    company: 'TechFlow Inc.',
    avatar: '/avatar-1.jpg',
    rating: 5,
  },
  {
    quote: "The competitor insights are game-changing. We can see exactly where we're losing visibility and take action immediately. The ROI has been incredible.",
    author: 'Sarah Williams',
    role: 'CMO',
    company: 'GrowthLabs',
    avatar: '/avatar-2.jpg',
    rating: 5,
  },
  {
    quote: "Finally, a tool that helps us understand how AI platforms see our brand. The custom reports make it easy to share insights with our executive team.",
    author: 'David Park',
    role: 'VP of Marketing',
    company: 'ScaleUp Co.',
    avatar: '/avatar-3.jpg',
    rating: 5,
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-beige/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 transition-all duration-700 ${!mounted ? 'opacity-0 translate-y-4' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <span className="text-sm text-brand-beige">Testimonials</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Loved by teams{' '}
            <span className="text-gradient">worldwide</span>
          </h2>
          <p
            className={`text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 delay-200 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            See what marketing leaders are saying about AI Visibility Scores.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-700 delay-300 ${!mounted ? 'opacity-0 translate-y-12' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {/* Main testimonial card */}
          <div className="relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-brand-beige/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-brand-beige/40" />
            </div>

            {/* Content */}
            <div className="relative">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-beige text-brand-beige" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 transition-all duration-500">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <div className="font-semibold text-white">{testimonials[activeIndex].author}</div>
                  <div className="text-sm text-white/50">
                    {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-brand-beige/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index
                      ? 'w-8 bg-brand-beige'
                      : 'bg-white/20 hover:bg-white/40'
                    }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div
          className={`mt-20 transition-all duration-700 delay-500 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-center text-sm text-white/40 mb-8">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
            {['Salesforce', 'HubSpot', 'Zendesk', 'Slack', 'Notion'].map((company, index) => (
              <div key={index} className="text-xl font-semibold text-white">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
