import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Clock
} from 'lucide-react';
import { AGENCY_INFO, SERVICES, COMBO_PACKAGES, FOUNDERS } from '../data/servicesData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import WhatsAppIcon from './WhatsAppIcon';

export default function ContactSection({ selectedService, prefillDetails }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedService?.title || selectedService?.name || 'Static Website',
    budget: '₹25,000 – ₹50,000',
    message: prefillDetails?.estimatedRange 
      ? `Hi Innaya Software, I estimated my project around ${prefillDetails.estimatedRange}. Details: ${prefillDetails.website}` 
      : ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for quotes';
    } else if (cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details about your project';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hi Innaya Software, I would like a quote!%0A%0A*Name:* ${formData.name || 'Not provided'}%0A*Phone:* ${formData.phone || 'Not provided'}%0A*Email:* ${formData.email || 'Not provided'}%0A*Service:* ${formData.service}%0A*Budget:* ${formData.budget}%0A*Details:* ${formData.message || 'Standard quote request'}`;
    window.open(`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="brand" className="mb-3 gap-1.5 px-3 py-1 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2-Hour Guaranteed Response</span>
          </Badge>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight">
            Start Your Project with a Free Quote
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Tell us about your requirements or budget. We'll share a comprehensive scope breakdown and fixed price proposal within 2 hours.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Trust */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                Let's talk about your vision
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Whether you're launching a new venture from scratch or revamping an underperforming website, our team in India is ready to help you grow.
              </p>

              {/* Direct Founder Contact Cards */}
              <div className="space-y-3.5 mb-6">
                <p className="text-xs font-display font-bold uppercase tracking-wider text-foreground">
                  Direct Founder Desk (Speak With Co-Founders):
                </p>

                {FOUNDERS.map((founder) => (
                  <div
                    key={founder.id}
                    className="p-3.5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 shadow-xs transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-black text-sm text-foreground">
                          {founder.name}
                        </span>
                        <span className="text-[10px] font-display font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                          Co-Founder
                        </span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-foreground">
                        {founder.phone}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground mb-2.5 font-medium">
                      {founder.role}
                    </p>

                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${founder.phoneRaw}`}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full h-7 text-[11px] gap-1.5 font-display font-semibold rounded-lg hover:bg-primary hover:text-white hover:border-primary"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Call</span>
                        </Button>
                      </a>

                      <a
                        href={`https://wa.me/${founder.whatsapp}?text=Hi%20${encodeURIComponent(founder.name)},%20I'm%20inquiring%20about%20a%20project%20with%20Innaya%20Software.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="whatsapp"
                          size="sm"
                          className="w-full h-7 text-[11px] gap-1.5 font-display font-semibold rounded-lg"
                        >
                          <WhatsAppIcon className="w-3 h-3 fill-white" />
                          <span>WhatsApp</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office & Email Info */}
              <div className="space-y-3 pt-2 border-t border-border/70">
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-foreground">{AGENCY_INFO.email}</span>
                    <span className="text-muted-foreground block text-[11px]">Proposals & RFP submissions</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-foreground">{AGENCY_INFO.address}</span>
                    <span className="text-muted-foreground block text-[11px]">Hyderabad, Telangana, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom SLA Promise */}
            <div className="mt-8 p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center gap-3 text-xs text-foreground">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <span>We value your time. If you submit during business hours, our tech lead will personally review and reply within 2 hours.</span>
            </div>
          </div>

          {/* Right Column: Interactive Form using shadcn Card */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 border-border shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-foreground">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm max-w-md mx-auto">
                    Your quote request for <strong className="text-primary">{formData.service}</strong> has been received. Our team is preparing your custom proposal.
                  </p>
                  
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                      variant="whatsapp"
                      size="default"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up: Continue on WhatsApp</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="default"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto text-sm"
                    >
                      Submit Another Query
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-border pb-3 mb-4">
                    <h4 className="font-display font-bold text-lg text-foreground">
                      Request Detailed Proposal & Timeline
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Fill out the form below or submit directly to our WhatsApp team.
                    </p>
                  </div>

                  {/* Name & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Your Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="e.g. Amit Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1 font-mono">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono font-semibold text-muted-foreground">
                          +91
                        </span>
                        <Input
                          type="tel"
                          placeholder="98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`pl-12 font-mono ${errors.phone ? 'border-red-500' : ''}`}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-red-500 mt-1 font-mono">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="amit@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1 font-mono">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="flex h-11 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <optgroup label="Web & App Development">
                          {SERVICES.filter(s => s.category === 'web').map(s => (
                            <option key={s.id} value={s.title}>{s.title} ({s.priceRange})</option>
                          ))}
                        </optgroup>
                        <optgroup label="Digital Marketing">
                          {SERVICES.filter(s => s.category === 'marketing').map(s => (
                            <option key={s.id} value={s.title}>{s.title} ({s.priceRange})</option>
                          ))}
                        </optgroup>
                        <optgroup label="Combo Packages">
                          {COMBO_PACKAGES.map(c => (
                            <option key={c.id} value={c.name}>{c.name} ({c.price})</option>
                          ))}
                        </optgroup>
                        <option value="Custom Project Scope">Custom Project Scope (Multi-service)</option>
                      </select>
                    </div>
                  </div>

                  {/* Estimated Budget Range Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Estimated Budget Range (₹ INR)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="flex h-11 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-mono"
                    >
                      <option value="₹8,000 – ₹25,000">₹8,000 – ₹25,000 (Small Starter Site / Logo)</option>
                      <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000 (Dynamic CMS / Marketing Pack)</option>
                      <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000 (E-commerce / 3D Site / SEO)</option>
                      <option value="₹1,00,000 – ₹2,50,000">₹1,00,000 – ₹2,50,000 (Custom Web App / High Growth)</option>
                      <option value="₹2,50,000+">₹2,50,000+ (Full Mobile App / Enterprise Platform)</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Project Details / Specific Requirements *
                    </label>
                    <Textarea
                      rows={3}
                      placeholder="Briefly describe what your business does and what you'd like your website or marketing campaign to accomplish..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1 font-mono">{errors.message}</p>}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      variant="brand"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 gap-2 font-display text-sm tracking-wide"
                    >
                      {isSubmitting ? (
                        <span>Submitting proposal request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Quote Request</span>
                        </>
                      )}
                    </Button>

                    <Button
                      variant="whatsapp"
                      size="lg"
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto gap-2 font-display text-sm tracking-wide"
                      title="Send this enquiry directly to WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      <span>Send to WhatsApp</span>
                    </Button>
                  </div>

                  <p className="text-[11px] text-center text-muted-foreground pt-1">
                    🔒 Zero spam guarantee. We will never share your email or phone number.
                  </p>
                </form>
              )}

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
}
