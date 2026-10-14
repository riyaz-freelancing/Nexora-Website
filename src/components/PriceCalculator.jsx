import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  Sparkles,
  Server,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { AGENCY_INFO } from '../data/servicesData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import WhatsAppIcon from './WhatsAppIcon';

export default function PriceCalculator({ onOpenQuoteWithDetails }) {
  const [websiteType, setWebsiteType] = useState('static');
  const [includeSeo, setIncludeSeo] = useState(false);
  const [includeSocial, setIncludeSocial] = useState(false);
  const [includeAds, setIncludeAds] = useState(false);
  const [includeLogo, setIncludeLogo] = useState(false);
  const [aiVideosCount, setAiVideosCount] = useState(0);

  const websiteOptions = {
    none: { label: 'No Website (Marketing Only)', min: 0, max: 0, tech: 'Marketing Assets' },
    static: { label: 'Static Website (React.js + Tailwind CSS)', min: 8000, max: 25000, tech: 'React.js & Tailwind CSS' },
    dynamic: { label: 'Dynamic Website (React.js + CMS Admin)', min: 25000, max: 80000, tech: 'React.js + Tailwind + CMS' },
    '3d': { label: '3D WebGL Site (React.js + Three.js)', min: 60000, max: 200000, tech: 'React.js + Three.js' },
    ecommerce: { label: 'E-commerce (React, Node, Express, MySQL)', min: 40000, max: 150000, tech: 'React + Node + Express + MySQL' },
    app: { label: 'Full-Stack App (React, Node, Express, MySQL)', min: 75000, max: 400000, tech: 'React + Node + Express + MySQL' }
  };

  const marketingAddons = {
    seo: { min: 10000, max: 25000, label: 'SEO 1st Month Optimization' },
    social: { min: 8000, max: 18000, label: 'Social Media Management' },
    ads: { min: 8000, max: 20000, label: 'Meta/Google Ads Campaign Setup' },
    logo: { min: 2000, max: 8000, label: 'Logo Design & Brand Identity' },
    videoPerUnit: 2500
  };

  const webMin = websiteOptions[websiteType].min;
  const webMax = websiteOptions[websiteType].max;

  const marketingMin = 
    (includeSeo ? marketingAddons.seo.min : 0) +
    (includeSocial ? marketingAddons.social.min : 0) +
    (includeAds ? marketingAddons.ads.min : 0) +
    (includeLogo ? marketingAddons.logo.min : 0) +
    (aiVideosCount * marketingAddons.videoPerUnit);

  const marketingMax = 
    (includeSeo ? marketingAddons.seo.max : 0) +
    (includeSocial ? marketingAddons.social.max : 0) +
    (includeAds ? marketingAddons.ads.max : 0) +
    (includeLogo ? marketingAddons.logo.max : 0) +
    (aiVideosCount * marketingAddons.videoPerUnit * 1.5);

  const totalMin = webMin + marketingMin;
  const totalMax = webMax + marketingMax;

  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleBookEstimate = () => {
    const details = {
      website: websiteOptions[websiteType].label,
      tech: websiteOptions[websiteType].tech,
      hostingPolicy: 'Domain & Hosting provided by client',
      seo: includeSeo,
      social: includeSocial,
      ads: includeAds,
      logo: includeLogo,
      aiVideos: aiVideosCount,
      estimatedRange: `${formatINR(totalMin)} - ${formatINR(totalMax)}`
    };
    onOpenQuoteWithDetails(details);
  };

  return (
    <section id="calculator" className="py-24 bg-muted/40 border-t border-border relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="brand" className="mb-3.5 gap-1.5 px-3.5 py-1 font-display font-semibold text-xs rounded-full">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </Badge>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight">
            Instant Project Price Estimator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Select the services you need to calculate an instant ballpark budget range in Indian Rupees (₹). Note: Domain and hosting are provided by client.
          </p>
        </div>

        {/* Calculator Elevated Container Card */}
        <Card className="max-w-5xl mx-auto rounded-3xl border-border/80 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 p-0 bg-card">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 p-7 sm:p-9 border-b lg:border-b-0 lg:border-r border-border/80 bg-card/60 backdrop-blur-sm">
            
            {/* Step 1: Website Architecture Selection */}
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <label className="text-xs font-display font-bold uppercase tracking-wider text-foreground">
                  1. Select Architecture & Tech Stack
                </label>
                <span className="text-[11px] font-mono text-muted-foreground">Pick 1 option</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(websiteOptions).map(([key, opt]) => {
                  const isSelected = websiteType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setWebsiteType(key)}
                      className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm transition-all duration-200 relative ${
                        isSelected
                          ? 'border-primary bg-primary/10 text-foreground font-semibold shadow-sm ring-1 ring-primary/80'
                          : 'border-border/80 bg-secondary/40 hover:bg-secondary text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="leading-snug font-display font-semibold">{opt.label}</span>
                        <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border transition-all ${
                          isSelected ? 'bg-primary border-primary text-white' : 'border-border bg-background'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hosting Policy Notice inside Calculator */}
            <div className="mt-5 p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center gap-3 text-xs text-blue-700 dark:text-blue-300">
              <Server className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span><strong>Client Policy:</strong> Domain & hosting are provided by client. We provide 100% free server setup, SSL, and staging links.</span>
            </div>

            {/* Step 2: Digital Marketing Add-ons */}
            <div className="mt-7">
              <label className="text-xs font-display font-bold uppercase tracking-wider text-foreground block mb-3.5">
                2. Select Marketing & Creative Add-ons
              </label>
              
              <div className="space-y-3">
                <label className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer text-xs sm:text-sm transition-all ${
                  includeSeo 
                    ? 'border-primary/60 bg-primary/5 ring-1 ring-primary/30' 
                    : 'border-border/80 bg-secondary/40 hover:bg-secondary'
                }`}>
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={includeSeo} 
                      onChange={(e) => setIncludeSeo(e.target.checked)}
                      className="rounded-md text-primary focus:ring-primary w-4 h-4"
                    />
                    <span className="text-foreground font-display font-semibold">Google SEO 1st Month Optimization</span>
                  </div>
                  <span className="text-xs font-display font-bold text-primary">+₹10,000</span>
                </label>

                <label className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer text-xs sm:text-sm transition-all ${
                  includeSocial 
                    ? 'border-primary/60 bg-primary/5 ring-1 ring-primary/30' 
                    : 'border-border/80 bg-secondary/40 hover:bg-secondary'
                }`}>
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={includeSocial} 
                      onChange={(e) => setIncludeSocial(e.target.checked)}
                      className="rounded-md text-primary focus:ring-primary w-4 h-4"
                    />
                    <span className="text-foreground font-display font-semibold">Social Media Management (15 Posts)</span>
                  </div>
                  <span className="text-xs font-display font-bold text-primary">+₹8,000</span>
                </label>

                <label className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer text-xs sm:text-sm transition-all ${
                  includeAds 
                    ? 'border-primary/60 bg-primary/5 ring-1 ring-primary/30' 
                    : 'border-border/80 bg-secondary/40 hover:bg-secondary'
                }`}>
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={includeAds} 
                      onChange={(e) => setIncludeAds(e.target.checked)}
                      className="rounded-md text-primary focus:ring-primary w-4 h-4"
                    />
                    <span className="text-foreground font-display font-semibold">Meta & Google Ads Campaign Setup</span>
                  </div>
                  <span className="text-xs font-display font-bold text-primary">+₹8,000</span>
                </label>

                <label className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer text-xs sm:text-sm transition-all ${
                  includeLogo 
                    ? 'border-primary/60 bg-primary/5 ring-1 ring-primary/30' 
                    : 'border-border/80 bg-secondary/40 hover:bg-secondary'
                }`}>
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={includeLogo} 
                      onChange={(e) => setIncludeLogo(e.target.checked)}
                      className="rounded-md text-primary focus:ring-primary w-4 h-4"
                    />
                    <span className="text-foreground font-display font-semibold">Custom Logo Design (3 Concepts + SVG)</span>
                  </div>
                  <span className="text-xs font-display font-bold text-primary">+₹2,000</span>
                </label>
              </div>
            </div>

            {/* Step 3: AI Video Reels Counter */}
            <div className="mt-5 flex items-center justify-between p-3.5 rounded-2xl border border-border/80 bg-secondary/40">
              <div>
                <span className="text-xs sm:text-sm font-display font-bold text-foreground block">AI Promo Videos / Reels</span>
                <span className="text-[11px] text-muted-foreground font-mono">₹2,500 per video (script + HD export)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  onClick={() => setAiVideosCount(Math.max(0, aiVideosCount - 1))}
                  className="w-8 h-8 p-0 rounded-lg font-bold"
                >
                  -
                </Button>
                <span className="w-6 text-center text-sm font-display font-black text-foreground">
                  {aiVideosCount}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  onClick={() => setAiVideosCount(aiVideosCount + 1)}
                  className="w-8 h-8 p-0 rounded-lg font-bold"
                >
                  +
                </Button>
              </div>
            </div>

          </div>

          {/* Result Column: Deep Obsidian Glass */}
          <div className="lg:col-span-5 p-7 sm:p-9 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Top Sheen */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative">
              <div className="flex items-center gap-2 text-orange-400 text-xs font-display font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Estimated Ballpark Investment</span>
              </div>
              
              <div className="mt-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
                  {formatINR(totalMin)} – {formatINR(totalMax)}
                </div>
                <p className="text-xs text-slate-300 mt-1 font-mono">
                  All prices in ₹ INR. GST extra as applicable.
                </p>
              </div>

              {/* Scope Breakdown */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Architecture:</span>
                  <span className="font-semibold text-white font-display">{websiteOptions[websiteType].label}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Domain & Hosting:</span>
                  <span className="text-orange-300 font-semibold">Client Account (Free Setup)</span>
                </div>
                {includeSeo && (
                  <div className="flex justify-between text-slate-300">
                    <span>Google SEO:</span>
                    <span className="text-emerald-400 font-semibold">Included</span>
                  </div>
                )}
                {includeSocial && (
                  <div className="flex justify-between text-slate-300">
                    <span>Social Media:</span>
                    <span className="text-emerald-400 font-semibold">Included</span>
                  </div>
                )}
                {includeAds && (
                  <div className="flex justify-between text-slate-300">
                    <span>Meta/Google Ads:</span>
                    <span className="text-emerald-400 font-semibold">Included</span>
                  </div>
                )}
                {includeLogo && (
                  <div className="flex justify-between text-slate-300">
                    <span>Logo & Branding:</span>
                    <span className="text-emerald-400 font-semibold">Included</span>
                  </div>
                )}
                {aiVideosCount > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>AI Video Reels:</span>
                    <span className="text-emerald-400 font-semibold">{aiVideosCount} Videos</span>
                  </div>
                )}
              </div>
            </div>

            {/* Booking Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3 relative">
              <Button
                variant="brand"
                size="lg"
                type="button"
                onClick={handleBookEstimate}
                className="w-full gap-2 font-display text-sm font-bold shadow-lg shadow-orange-500/25 rounded-xl"
              >
                <span>Lock In This Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <a
                href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=Hi%20Innaya,%20I%20used%20your%20estimator%20and%20got%20an%20estimate%20of%20${encodeURIComponent(formatINR(totalMin))}%20to%20${encodeURIComponent(formatINR(totalMax))}.%20Can%20we%20discuss?`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button
                  variant="whatsapp"
                  size="default"
                  type="button"
                  className="w-full gap-2 text-xs font-semibold rounded-xl"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Discuss via WhatsApp</span>
                </Button>
              </a>
            </div>

          </div>

        </Card>

      </div>
    </section>
  );
}
