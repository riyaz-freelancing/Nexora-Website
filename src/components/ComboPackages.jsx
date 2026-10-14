import React from 'react';
import { COMBO_PACKAGES } from '../data/servicesData';
import { 
  Check, 
  ArrowRight, 
  Flame, 
  Sparkles, 
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function ComboPackages({ onSelectCombo }) {
  return (
    <section id="combos" className="py-24 bg-background border-t border-border relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="accent" className="mb-3.5 gap-1.5 px-3.5 py-1 font-display font-semibold text-xs rounded-full">
            <Flame className="w-3.5 h-3.5 fill-orange-500 text-transparent" />
            <span>High Value Bundles</span>
          </Badge>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight">
            Curated All-In-One Combo Packs
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Save up to ₹15,000 with our comprehensive startup & growth bundles. Designed to take Indian entrepreneurs from zero to a fully launched brand in weeks.
          </p>
        </div>

        {/* Combo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {COMBO_PACKAGES.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 overflow-hidden ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white shadow-2xl ring-2 ring-primary/80 md:-translate-y-3 border-primary/50'
                  : 'bg-card text-card-foreground border-border/80 shadow-card-elevated hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2'
              }`}
            >
              
              {/* Top Accent Line */}
              <div className={`absolute top-0 inset-x-0 h-1.5 ${
                pkg.isPopular 
                  ? 'bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 animate-pulse-slow' 
                  : 'bg-gradient-to-r from-blue-500 to-primary/60'
              }`}></div>

              {/* Most Popular Floating Tag */}
              {pkg.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-black uppercase tracking-wider bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 ring-2 ring-white/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular Choice</span>
                  </span>
                </div>
              )}

              <div>
                {/* Pack Title & Tagline */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <h3 className={`font-display font-black text-2xl tracking-tight ${pkg.isPopular ? 'text-white' : 'text-foreground'}`}>
                    {pkg.name}
                  </h3>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-display font-bold ${
                    pkg.isPopular 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                      : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25'
                  }`}>
                    {pkg.savings}
                  </span>
                </div>

                <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${pkg.isPopular ? 'text-slate-300' : 'text-muted-foreground'}`}>
                  {pkg.tagline}
                </p>

                {/* Delivery Time */}
                <div className="mt-4 flex items-center gap-2 text-xs font-medium">
                  <Clock className={`w-3.5 h-3.5 ${pkg.isPopular ? 'text-orange-400' : 'text-primary'}`} />
                  <span className={pkg.isPopular ? 'text-slate-300' : 'text-muted-foreground'}>
                    Estimated Delivery: <strong className={pkg.isPopular ? 'text-white font-display' : 'text-foreground font-display'}>{pkg.delivery}</strong>
                  </span>
                </div>

                {/* Dedicated Price Showcase Box */}
                <div className={`mt-6 p-5 rounded-2xl border ${
                  pkg.isPopular 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-secondary/60 dark:bg-slate-900/70 border-border/70'
                }`}>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl sm:text-4xl font-display font-black tracking-tight">
                      {pkg.price}
                    </span>
                    <span className={`text-base font-display line-through ${pkg.isPopular ? 'text-slate-400' : 'text-muted-foreground'}`}>
                      {pkg.originalPrice}
                    </span>
                  </div>
                  <span className={`text-[11px] block mt-1 font-mono ${pkg.isPopular ? 'text-slate-400' : 'text-muted-foreground'}`}>
                    One-time package rate (+ 18% GST)
                  </span>
                </div>

                {/* Features List */}
                <div className="mt-6 pt-5 border-t border-border/70">
                  <p className={`text-xs font-display font-bold uppercase tracking-wider mb-3.5 ${pkg.isPopular ? 'text-orange-300' : 'text-foreground'}`}>
                    Bundle Highlights:
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.isPopular 
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                            : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className={pkg.isPopular ? 'text-slate-200' : 'text-muted-foreground leading-snug'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <Button
                  variant={pkg.isPopular ? 'brand' : 'outline'}
                  size="lg"
                  onClick={() => onSelectCombo(pkg)}
                  className={`w-full gap-2 font-display text-sm font-bold rounded-xl shadow-md transition-all duration-200 ${
                    pkg.isPopular
                      ? 'shadow-orange-500/25 hover:shadow-glow-primary'
                      : 'hover:bg-primary hover:text-white hover:border-primary'
                  }`}
                >
                  <span>Choose {pkg.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
