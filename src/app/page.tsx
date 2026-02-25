"use client";

import { useEffect, useRef, useState } from 'react';
import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import LogoTicker from '../sections/LogoTicker';
import Features from '../sections/Features';
import HowItWorks from '../sections/HowItWorks';
import Pricing from '../sections/Pricing';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={mainRef} className="min-h-screen bg-brand-bg text-white overflow-x-hidden">
            {/* Animated background gradient */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(117, 251, 76, 0.12), transparent)`,
                    }}
                />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `radial-gradient(ellipse 60% 40% at 80% 80%, rgba(210, 46, 156, 0.08), transparent)`,
                    }}
                />
            </div>

            {/* Noise texture overlay */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-full overflow-hidden">
                <Navigation scrollY={scrollY} />
                <Hero />
                <LogoTicker />
                <Features />
                <HowItWorks />
                <Pricing />
                <Testimonials />
                <FAQ />
                <CTA />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
