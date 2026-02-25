"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  scrollY: number;
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isScrolled = scrollY > 100;

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-brand-bg/80 backdrop-blur-xl border-b border-brand-border'
            : 'bg-transparent'
          } ${!mounted ? '' : isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-brand-beige flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                <Sparkles className="w-5 h-5 text-brand-bg" />
              </div>
              <span className="text-lg font-semibold text-white">
                AI Visibility
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-beige group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-sm text-white/70 hover:text-white hover:bg-white/5"
                onClick={() => scrollToSection('#pricing')}
              >
                Sign In
              </Button>
              <Button
                className="text-sm bg-brand-beige text-brand-bg hover:bg-brand-beige/90 font-medium"
                onClick={() => scrollToSection('#pricing')}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-brand-bg/95 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-medium text-white/70 hover:text-white transition-colors duration-300"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col gap-4 mt-8">
            <Button
              variant="outline"
              className="w-48 border-white/20 text-white hover:bg-white/5"
              onClick={() => scrollToSection('#pricing')}
            >
              Sign In
            </Button>
            <Button
              className="w-48 bg-brand-beige text-brand-bg hover:bg-brand-beige/90 font-medium"
              onClick={() => scrollToSection('#pricing')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
