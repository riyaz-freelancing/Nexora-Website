import React, { useState } from 'react';
import { FAQS } from '../data/servicesData';
import { 
  HelpCircle, 
  ChevronDown, 
  Phone,
  Sparkles
} from 'lucide-react';
import { AGENCY_INFO } from '../data/servicesData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import WhatsAppIcon from './WhatsAppIcon';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-background border-t border-border relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="accent" className="mb-3.5 gap-1.5 px-3.5 py-1 font-display font-semibold text-xs rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-primary" />
            <span>Honest Answers for Founders</span>
          </Badge>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about payment milestones, delivery timelines, revisions, advertising budgets, and domain/hosting ownership.
          </p>
        </div>

        {/* Accordion List with Elevated Card Aesthetic */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-card border-primary/50 shadow-card-elevated ring-1 ring-primary/30'
                    : 'bg-card/70 border-border/80 hover:border-border hover:bg-card shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-black text-base sm:text-lg text-foreground transition-colors group"
                >
                  <span className="flex items-center gap-3.5">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-display font-black transition-all ${
                      isOpen ? 'bg-primary text-white shadow-sm' : 'bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="group-hover:text-primary transition-colors">{faq.q}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-primary/15 text-primary' : 'bg-secondary text-muted-foreground'
                  }`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/60 animate-fadeIn">
                    <div className="pl-11 pr-4">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <Card className="mt-14 p-7 bg-gradient-to-r from-secondary/60 via-secondary/40 to-secondary/60 border-border/80 rounded-3xl shadow-card-elevated flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="w-4 h-4 text-primary" />
              <h4 className="font-display font-black text-lg text-foreground">
                Have a question not listed here?
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-lg leading-relaxed">
              Talk directly with our lead solution architect on WhatsApp or schedule a 10-minute discovery call today.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=Hi%20Innaya%20Software,%20I%20have%20a%20question%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="default" className="gap-2 text-xs font-semibold rounded-xl">
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Ask on WhatsApp</span>
              </Button>
            </a>

            <a href={`tel:${AGENCY_INFO.phoneRaw}`}>
              <Button variant="navy" size="default" className="gap-2 text-xs font-semibold rounded-xl">
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </Button>
            </a>
          </div>
        </Card>

      </div>
    </section>
  );
}
