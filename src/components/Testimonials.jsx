import React from 'react';
import { TESTIMONIALS } from '../data/servicesData';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const avatarGradients = [
  'from-blue-500 to-indigo-600',
  'from-orange-500 to-amber-500',
  'from-emerald-500 to-teal-600'
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/40 border-t border-border relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="success" className="mb-3.5 gap-1.5 px-3.5 py-1 font-display font-semibold text-xs rounded-full">
            <Star className="w-3.5 h-3.5 fill-emerald-500 text-transparent" />
            <span>Proven Client Success in India</span>
          </Badge>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight">
            Trusted by Founders Across India
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Hear from retail brands, clinics, and enterprises who scaled their online revenue with our software engineering and digital marketing.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => {
            const initials = t.name.split(' ').map(n => n[0]).join('').slice(0, 2);
            const gradient = avatarGradients[idx % avatarGradients.length];

            return (
              <Card
                key={idx}
                className="relative flex flex-col justify-between p-8 rounded-3xl bg-card border border-border/80 shadow-card-elevated hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
              >
                {/* Top Subtle Ambient Sheen */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500/20 via-amber-400/40 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  {/* Star Rating & Quote Emblem */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-xs" />
                      ))}
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Quote className="w-4 h-4 fill-primary/30" />
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm sm:text-base text-foreground leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                {/* Client Profile Footer */}
                <div className="mt-8 pt-5 border-t border-border/80">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar with Initials */}
                      <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${gradient} text-white flex items-center justify-center font-display font-black text-sm shadow-sm shrink-0`}>
                        {initials}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-display font-black text-sm text-foreground">
                            {t.name}
                          </h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" title="Verified Customer" />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </div>

                    <Badge variant="brand" className="text-[10px] font-display font-bold px-2 py-0.5 rounded-md">
                      {t.tag}
                    </Badge>
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
