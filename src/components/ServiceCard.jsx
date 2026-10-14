import React from 'react';
import { 
  Globe, 
  LayoutDashboard, 
  Sparkles, 
  ShoppingBag, 
  Smartphone, 
  TrendingUp, 
  Share2, 
  Target, 
  Search, 
  Palette, 
  Video, 
  Clock, 
  Check, 
  ArrowRight,
  Layers,
  Server,
  Cpu,
  Flame,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const iconMap = {
  Globe,
  LayoutDashboard,
  Sparkles,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  Share2,
  Target,
  Search,
  Palette,
  Video,
  Layers
};

// Tech stack badge styling map with brand colors
const techBadgeStyles = {
  'React.js': 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/25',
  'Tailwind CSS': 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/25',
  'Node.js': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
  'Express.js': 'bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/25',
  'MySQL': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25',
  'Three.js': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/25',
  'CMS / Admin': 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25',
  'Google Search Console': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25',
  'Meta Ads': 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/25',
  'Google Ads': 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25',
  'Illustrator': 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/25',
  'Figma': 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/25',
  'AI Voiceover': 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/25',
};

export default function ServiceCard({ service, onSelectService }) {
  const IconComponent = iconMap[service.icon] || Globe;
  const isHighlighted = service.badge === 'Most Requested' || service.badge === 'Enterprise Tech Stack' || service.badge === 'High Conversion';

  return (
    <Card className={`relative flex flex-col justify-between h-full rounded-3xl bg-card border transition-all duration-300 group overflow-hidden ${
      isHighlighted 
        ? 'border-primary/40 shadow-card-elevated hover:shadow-2xl hover:border-primary/70 hover:-translate-y-2' 
        : 'border-border/80 shadow-card-elevated hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2'
    }`}>
      
      {/* Top Ambient Glow Sheen on Hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-amber-500 opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div>
        <CardHeader className="p-7 pb-4">
          {/* Top Header: Elevated Squircle Icon & Modern Badge */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 via-orange-500/10 to-amber-500/5 border border-primary/20 flex items-center justify-center text-primary shadow-sm group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-600 group-hover:text-white group-hover:shadow-glow-primary transition-all duration-300">
              <IconComponent className="w-7 h-7" />
            </div>

            <div className="flex flex-col items-end gap-1.5">
              {service.badge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-bold bg-gradient-to-r from-orange-500/15 to-amber-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30 shadow-xs">
                  {isHighlighted ? <Sparkles className="w-3 h-3 text-primary animate-pulse" /> : <Flame className="w-3 h-3 text-orange-500" />}
                  <span>{service.badge}</span>
                </span>
              )}
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold px-2 py-0.5 rounded-md bg-secondary/60">
                {service.billingType === 'monthly' ? 'Monthly Retainer' : 'One-Time Project'}
              </span>
            </div>
          </div>

          {/* Title */}
          <CardTitle className="font-display font-black text-2xl text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
            {service.title}
          </CardTitle>

          {/* Tech Stack Pills (Colored, Modern, Highly Legible) */}
          {service.techStack && service.techStack.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {service.techStack.map((tech, i) => {
                const badgeStyle = techBadgeStyles[tech] || 'bg-secondary text-secondary-foreground border-border';
                return (
                  <span 
                    key={i} 
                    className={`inline-flex items-center gap-1.5 text-xs font-display font-semibold px-2.5 py-1 rounded-lg border shadow-2xs ${badgeStyle}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
                    <span>{tech}</span>
                  </span>
                );
              })}
            </div>
          )}

          {/* Description */}
          <p className="mt-3.5 text-sm text-muted-foreground leading-relaxed min-h-[44px]">
            {service.shortDesc}
          </p>

          {/* Delivery & Hosting Metadata Chips */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 bg-secondary/80 dark:bg-slate-900/80 px-3 py-1.5 rounded-xl border border-border/70 text-xs font-medium">
              <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Timeline: <strong className="text-foreground font-display font-bold">{service.delivery}</strong></span>
            </div>

            {service.hostingPolicy && (
              <div className="inline-flex items-center gap-2 bg-blue-500/10 dark:bg-blue-500/15 px-3 py-1.5 rounded-xl border border-blue-500/20 text-xs text-blue-700 dark:text-blue-300 font-medium">
                <Server className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Hosting: <strong>Client Account</strong></span>
              </div>
            )}
          </div>
        </CardHeader>

        {/* What You Get Deliverables Checklist */}
        <CardContent className="px-7 pt-2 pb-6">
          <div className="pt-4 border-t border-border/80">
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-foreground">
                Included Deliverables:
              </span>
              <span className="text-[11px] font-mono text-muted-foreground">
                {service.whatYouGet.length} items
              </span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              {service.whatYouGet.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug text-muted-foreground group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular For Pill */}
          {service.popularFor && (
            <div className="mt-5 p-3 rounded-xl bg-secondary/50 border border-border/60 text-xs text-muted-foreground">
              <span className="font-display font-bold text-foreground">Best For: </span>
              <span>{service.popularFor}</span>
            </div>
          )}
        </CardContent>
      </div>

      {/* Card Footer: Dedicated Pricing Showcase & Shadcn CTA Button */}
      <CardFooter className="flex-col items-stretch p-7 pt-0 mt-auto">
        
        {/* Price Showcase Inset Box */}
        <div className="mb-4.5 p-4 rounded-2xl bg-secondary/60 dark:bg-slate-900/80 border border-border/80">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-display font-medium text-muted-foreground">
              Hyderabad IT Standard Rate
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-display font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/25">
              <Zap className="w-2.5 h-2.5" />
              <span>Transparent</span>
            </span>
          </div>

          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="font-display font-black text-2xl sm:text-3xl text-foreground tracking-tight">
              {service.priceRange}
            </span>
          </div>

          <p className="text-[10px] text-muted-foreground mt-1 font-mono">
            + 18% GST • Domain & hosting provided by client
          </p>
        </div>

        {/* CTA Button */}
        <Button
          variant="brand"
          size="lg"
          onClick={() => onSelectService(service)}
          className="w-full gap-2.5 font-display text-sm font-bold shadow-md shadow-orange-500/10 hover:shadow-glow-primary rounded-xl transition-all duration-200"
        >
          <span>Select & Request Quote</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>

    </Card>
  );
}
