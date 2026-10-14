import React, { useState } from 'react';
import { SERVICES } from '../data/servicesData';
import ServiceCard from './ServiceCard';
import { 
  Code2, 
  TrendingUp, 
  Info, 
  Search, 
  Sparkles,
  Server,
  Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function ServicesSection({ onSelectService, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('all');
  const [billingFilter, setBillingFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES.filter((service) => {
    if (activeTab !== 'all' && service.category !== activeTab) {
      return false;
    }
    if (billingFilter !== 'all' && service.billingType !== billingFilter) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = service.title.toLowerCase().includes(q);
      const matchDesc = service.shortDesc.toLowerCase().includes(q);
      const matchTech = service.techStack?.some(t => t.toLowerCase().includes(q));
      const matchPopular = service.popularFor?.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchPopular && !matchTech) {
        return false;
      }
    }
    return true;
  });

  return (
    <section id="pricing" className="py-20 bg-muted/30 border-t border-border">
      <div id="web-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="brand" className="mb-4 gap-1.5 px-3 py-1 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hyderabad IT Standard Pricing in ₹ INR</span>
          </Badge>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight">
            Web Services & Transparent Rates
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Clear, honest pricing aligned with Hyderabad IT industry benchmarks. We use modern, production-grade stacks with zero technical lock-in.
          </p>
        </div>

        {/* Prominent Tech Stack & Hosting Policy Callout Box */}
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tech Stack Banner */}
          <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-foreground">
                Our Engineering Tech Stack
              </h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                • <strong>Websites:</strong> Built with <strong>React.js & Tailwind CSS</strong> for instant loading.<br />
                • <strong>Applications:</strong> Full-stack architecture using <strong>React.js, Node.js, Express.js & MySQL</strong>.
              </p>
            </div>
          </div>

          {/* Domain & Hosting Banner */}
          <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-foreground">
                Domain & Hosting Policy
              </h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                <strong>Provided by Client:</strong> You purchase and own 100% of your domain & server (Hostinger, AWS, cPanel, or VPS). Our team handles <strong>100% free deployment & SSL setup</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Note Alert Banner */}
        <div className="mt-4 max-w-4xl mx-auto bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 sm:p-5 flex items-start sm:items-center gap-3.5 text-foreground shadow-xs">
          <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs sm:text-sm leading-relaxed flex-1">
            <strong className="font-bold text-amber-600 dark:text-amber-400">Transparent Pricing Note: </strong>
            All prices in ₹ INR. GST extra (18%) as applicable. Final quote depends on requirements. Domain & hosting provided by client.
          </div>
          <Button 
            variant="outline"
            size="sm"
            onClick={onOpenQuote}
            className="hidden sm:inline-flex shrink-0 text-xs font-semibold border-amber-500/40 hover:bg-amber-500/15"
          >
            Custom Scope Quote
          </Button>
        </div>

        {/* Filters & Tabs Controls */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-secondary/80 rounded-2xl border border-border w-full sm:w-auto">
            <Button
              variant={activeTab === 'all' ? 'navy' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('all')}
              className="text-xs sm:text-sm font-semibold rounded-xl"
            >
              All Services ({SERVICES.length})
            </Button>

            <Button
              variant={activeTab === 'web' ? 'navy' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('web')}
              className="gap-2 text-xs sm:text-sm font-semibold rounded-xl"
            >
              <Code2 className="w-4 h-4 text-blue-500" />
              <span>Web & App Development</span>
            </Button>

            <Button
              id="digital-marketing"
              variant={activeTab === 'marketing' ? 'navy' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('marketing')}
              className="gap-2 text-xs sm:text-sm font-semibold rounded-xl"
            >
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span>Digital Marketing</span>
            </Button>
          </div>

          {/* Secondary Controls: Billing Type Filter & Search Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            {/* Billing Toggle: One-Time vs Monthly */}
            <div className="flex items-center gap-1 p-1 bg-card rounded-xl border border-border text-xs font-medium">
              <Button
                variant={billingFilter === 'all' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setBillingFilter('all')}
                className="h-8 px-3 text-xs"
              >
                All Billing
              </Button>

              <Button
                variant={billingFilter === 'one-time' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setBillingFilter('one-time')}
                className="h-8 px-3 text-xs"
              >
                One-Time
              </Button>

              <Button
                variant={billingFilter === 'monthly' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setBillingFilter('monthly')}
                className="h-8 px-3 text-xs"
              >
                Monthly
              </Button>
            </div>

            {/* Quick Keyword Search with shadcn Input */}
            <div className="relative min-w-[200px]">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Search React, MySQL, Node..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-10 text-xs bg-card"
              />
            </div>
          </div>

        </div>

        {/* Services Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-card rounded-2xl border border-dashed border-border mt-6">
            <p className="text-muted-foreground text-sm">No services found matching your filter criteria.</p>
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                setActiveTab('all');
                setBillingFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold"
            >
              Reset Filters
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}
