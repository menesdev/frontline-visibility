"use client";

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is AI visibility and why does it matter?',
    answer: 'AI visibility refers to how often and how prominently your brand appears in responses from AI platforms like ChatGPT, Perplexity, and Google AI Overviews. As more users rely on AI for recommendations and research, being visible in these responses is becoming critical for brand awareness and customer acquisition.',
  },
  {
    question: 'Which AI platforms do you track?',
    answer: 'We track all major AI platforms including ChatGPT (OpenAI), Claude (Anthropic), Perplexity AI, Google AI Overviews, Google AI Mode, Microsoft Copilot, and Gemini. We\'re constantly adding support for new platforms as they emerge.',
  },
  {
    question: 'How is the AI Visibility Score calculated?',
    answer: 'Our AI Visibility Score is a composite metric based on four factors: Mention Frequency (how often you appear), Prominence (where in the response you appear), Sentiment (positive/negative context), and Source Authority (quality of sources citing you). Scores range from 0-100.',
  },
  {
    question: 'Can I track my competitors?',
    answer: 'Absolutely! All plans include competitor tracking. You can compare your visibility scores side-by-side, see where competitors are mentioned but you\'re not, and identify opportunities to improve your presence.',
  },
  {
    question: 'How often is the data updated?',
    answer: 'Data is updated daily for all plans. Professional and Enterprise plans also get real-time alerts when significant changes occur, such as sudden visibility drops or competitor mentions.',
  },
  {
    question: 'Do you offer API access?',
    answer: 'Yes, Professional and Enterprise plans include API access. You can integrate AI visibility data into your existing dashboards, CRM, or analytics tools. Our API is RESTful and well-documented.',
  },
];

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 transition-all duration-700 ${!mounted ? 'opacity-0 translate-y-4' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <span className="text-sm text-brand-beige">FAQ</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Questions?{' '}
            <span className="text-gradient">Answers.</span>
          </h2>
          <p
            className={`text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 delay-200 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Everything you need to know about AI Visibility Scores.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-500 ${openIndex === index
                  ? 'bg-white/[0.03] border-brand-beige/30'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                } ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                <div
                  className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-brand-beige/20 rotate-180' : ''
                    }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-colors duration-300 ${openIndex === index ? 'text-brand-beige' : 'text-white/40'
                      }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-6 pb-6 text-white/60 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${!mounted ? 'opacity-0 translate-y-8' : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-full bg-brand-beige/10 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-brand-beige" />
            </div>
            <div className="text-left">
              <div className="text-sm text-white">Still have questions?</div>
              <button className="text-sm text-brand-beige hover:underline">
                Chat with our team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
