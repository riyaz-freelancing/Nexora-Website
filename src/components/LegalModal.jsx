import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { AGENCY_INFO } from '../data/servicesData';

export default function LegalModal({ isOpen, onClose, defaultTab = 'privacy' }) {
  const [activeTab, setActiveTab] = React.useState(defaultTab);

  React.useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <Card 
        className="relative w-full max-w-3xl bg-card border-border shadow-2xl max-h-[85vh] flex flex-col p-0 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-primary flex items-center justify-center">
              {activeTab === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-xl text-foreground">
                  {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                </h3>
                <Badge variant="outline" className="font-mono text-[10px]">
                  {AGENCY_INFO.name}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 font-mono">
                Effective Date: January 2025 • Governed by Indian IT & Contract Laws
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-border bg-muted/40 px-6 pt-2 gap-2">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'privacy'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Privacy & Data Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'terms'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Terms of Service & Delivery
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {activeTab === 'privacy' ? (
            <div className="space-y-4">
              <section>
                <h4 className="font-display font-bold text-foreground text-sm mb-1.5 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  1. Information We Collect
                </h4>
                <p>
                  At <strong>{AGENCY_INFO.name}</strong>, we respect your confidentiality. When you submit an inquiry, request a quote, or hire our agency, we collect your name, business name, phone number, email address, and project requirements. We do not sell, rent, or trade your contact information to any third-party brokers.
                </p>
              </section>

              <section>
                <h4 className="font-display font-bold text-foreground text-sm mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  2. Use of Information
                </h4>
                <p>
                  Your information is exclusively utilized to:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-foreground/80">
                  <li>Prepare itemized project estimates, scopes of work, and formal service agreements.</li>
                  <li>Coordinate milestone reviews, design previews, and staging server updates.</li>
                  <li>Provide ongoing post-launch technical support, maintenance, and GST billing.</li>
                  <li>Communicate via WhatsApp, phone, or email regarding your project status.</li>
                </ul>
              </section>

              <section>
                <h4 className="font-display font-bold text-foreground text-sm mb-1.5">
                  3. Client Credentials & Cloud Data Security
                </h4>
                <p>
                  Any server credentials, API tokens (Razorpay, Meta Pixel, Google Console), or database access keys shared with our developers for deployment purposes are handled under strict NDA protocols. Credentials are never hardcoded in public repositories or shared outside the assigned engineering team.
                </p>
              </section>

              <section>
                <h4 className="font-display font-bold text-foreground text-sm mb-1.5">
                  4. Cookies & Web Analytics
                </h4>
                <p>
                  Our website uses standard secure cookies and privacy-respecting analytics to track general website visitor trends, browser types, and conversion events to optimize loading performance. You can disable cookies in your browser settings at any time.
                </p>
              </section>

              <section>
                <h4 className="font-display font-bold text-foreground text-sm mb-1.5">
                  5. Contact for Privacy Matters
                </h4>
                <p>
                  For any questions or data removal requests, contact our compliance officer at <a href={`mailto:${AGENCY_INFO.email}`} className="text-primary hover:underline">{AGENCY_INFO.email}</a> or call {AGENCY_INFO.phone}.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-4">
              <section>
                <h4 className="font-display font-bold text-foreground text-sm mb-1.5">
                  1. Project Scope & Milestone Payments
                </h4>
                <p>
                  All projects are executed under mutually agreed itemized milestones:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-foreground/80">
                  <li><strong>40% Advance:</strong> Commences UX wireframing, architecture planning, and environment setup.</li>
                  <li><strong>40% Staging Approval:</strong> Payable upon review and client approval of the functional staging build.</li>
                  <li><strong>20% Handover:</strong> Payable upon final deployment to the client's live domain and hosting server.</li>
                </ul>
              </section>

              <section>
                <h4 className="font-display font-bold text-foreground text-sm mb-1.5">
                  2. Domain & Hosting Ownership Policy
                </h4>
                <p>
                  <strong>Domain and hosting are provided by the client.</strong> The client purchases and maintains 100% legal ownership of their domain registrar accounts (GoDaddy, Namecheap, etc.) and server providers (Hostinger, AWS, DigitalOcean, cPanel, Vercel). <strong>{AGENCY_INFO.name}</strong> provides 100% free server setup, DNS linking, and SSL installation assistance.
                </p>
              </section>

              <section>
                <h4 className="font-display font-bold text-foreground text-sm mb-1.5">
                  3. 100% Client Source Code & Asset Ownership
                </h4>
                <p>
                  Upon final settlement of the invoice, 100% of the custom source code (React.js, Node.js, Express.js, MySQL schemas), design files (Figma, SVG logos), and creative assets become the exclusive intellectual property of the client with zero vendor lock-in.
                </p>
              </section>

              <section>
                <h4 className="font-display font-bold text-foreground text-sm mb-1.5">
                  4. Digital Marketing & Advertising Budgets
                </h4>
                <p>
                  Monthly marketing management fees cover copywriting, graphic design, ad strategy, A/B testing, and campaign optimization. Ad spend is paid directly by the client to Meta or Google via their own card or UPI. We do not charge commissions on your ad spend.
                </p>
              </section>

              <section>
                <h4 className="font-display font-bold text-foreground text-sm mb-1.5">
                  5. Taxes & GST Invoicing
                </h4>
                <p>
                  All project fees are quoted in Indian Rupees (₹ INR). GST (18%) is added as applicable by Indian tax law. Registered businesses with a valid GSTIN are provided formal tax invoices to claim Input Tax Credit (ITC).
                </p>
              </section>

              <section>
                <h4 className="font-display font-bold text-foreground text-sm mb-1.5">
                  6. Post-Launch Warranty
                </h4>
                <p>
                  Every website and application delivery includes 1 to 3 months of complimentary technical warranty covering bug fixes, domain connectivity, and form troubleshooting.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 px-6 border-t border-border bg-muted/20 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground font-mono">
            {AGENCY_INFO.name} • {AGENCY_INFO.address}
          </span>
          <Button
            variant="navy"
            size="sm"
            onClick={onClose}
            className="text-xs font-semibold px-4"
          >
            I Understand & Accept
          </Button>
        </div>

      </Card>
    </div>
  );
}
