import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  MessageCircle, 
  CheckCircle2
} from 'lucide-react';
import { AGENCY_INFO, SERVICES, COMBO_PACKAGES } from '../data/servicesData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import WhatsAppIcon from './WhatsAppIcon';

export default function QuoteModal({ isOpen, onClose, initialService, initialDetails }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService.title || initialService.name || '');
    } else if (initialDetails?.website) {
      setSelectedService(initialDetails.website);
      setMessage(`Estimated budget: ${initialDetails.estimatedRange}`);
    } else {
      setSelectedService('Static Website');
    }
  }, [initialService, initialDetails, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please provide your name and 10-digit phone number');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Innaya Software, I would like to request a quote for *${selectedService}*.%0A*Name:* ${name || 'Prospective Client'}%0A*Phone:* ${phone || 'N/A'}%0A*Email:* ${email || 'N/A'}%0A*Notes:* ${message || 'Please send detailed proposal and pricing.'}`;
    window.open(`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <Card 
        className="relative w-full max-w-lg bg-card p-6 sm:p-8 border-border shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-5 right-5 text-muted-foreground hover:text-foreground"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </Button>

        {submitted ? (
          <div className="py-8 text-center animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-foreground">
              Quote Request Sent!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our technical team is reviewing your requirements for <strong className="text-primary">{selectedService}</strong>. We'll contact you within 2 hours.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <Button
                variant="whatsapp"
                size="default"
                onClick={handleWhatsAppDirect}
                className="w-full gap-2 text-sm font-semibold"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Open Instant WhatsApp Chat</span>
              </Button>
              <Button
                variant="outline"
                size="default"
                onClick={onClose}
                className="w-full text-xs font-semibold"
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Badge variant="accent" className="mb-2 gap-1.5 font-mono text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Consultation & Quote</span>
            </Badge>

            <h3 className="font-display font-black text-xl sm:text-2xl text-foreground">
              Get Quote for {selectedService}
            </h3>

            <p className="text-xs text-muted-foreground mt-1">
              Transparent ₹ INR pricing. Zero obligations. Response in under 2 hours.
            </p>

            {error && (
              <div className="mt-4 p-3 rounded-xl bg-destructive/10 text-destructive text-xs font-medium border border-destructive/20 font-mono">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Selected Service / Package
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="flex h-11 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-xs sm:text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <optgroup label="Services">
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.title}>{s.title} ({s.priceRange})</option>
                    ))}
                  </optgroup>
                  <optgroup label="Combo Packs">
                    {COMBO_PACKAGES.map(c => (
                      <option key={c.id} value={c.name}>{c.name} ({c.price})</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Your Full Name *
                </label>
                <Input
                  type="text"
                  placeholder="e.g. Rahul Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Phone / WhatsApp (10 digits) *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-muted-foreground">
                    +91
                  </span>
                  <Input
                    type="tel"
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-12 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Any Specific Requirements / Timeline?
                </label>
                <Textarea
                  rows={2}
                  placeholder="Tell us what you'd like built, e.g. need payment gateway, delivery within 2 weeks..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <Button
                  variant="brand"
                  size="lg"
                  type="submit"
                  className="w-full gap-2 font-display text-sm font-bold"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Proposal</span>
                </Button>

                <Button
                  variant="whatsapp"
                  size="default"
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full gap-2 text-xs font-semibold"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp Directly</span>
                </Button>
              </div>
            </form>
          </div>
        )}

      </Card>
    </div>
  );
}
