import React from 'react';
import { 
  Code2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  ShieldCheck,
  Lock,
  FileText,
  Sparkles
} from 'lucide-react';
import { AGENCY_INFO } from '../data/servicesData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import logoImg from '../assets/logo-Hr.jpeg';

export default function Footer({ onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col items-start gap-3">
              <a href="#home" className="inline-block group" aria-label="NexOra Home">
                <div className="bg-white rounded-xl p-1.5 sm:p-2 px-2.5 sm:px-3 shadow-md border border-white/20 flex items-center justify-center group-hover:shadow-lg group-hover:scale-102 transition-all duration-300">
                  <img
                    src={logoImg}
                    alt="NexOra - Web and Digital Services"
                    className="h-9 sm:h-11 w-auto max-w-[220px] object-contain"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="flex items-center gap-2 text-xs font-display font-semibold tracking-wider text-sky-400">
                <span>Click.</span>
                <span className="text-slate-600">•</span>
                <span>Connect.</span>
                <span className="text-slate-600">•</span>
                <span>Convert.</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We engineer ultra-fast websites with <strong>React.js & Tailwind CSS</strong>, and full-stack web applications using <strong>React, Node.js, Express.js & MySQL</strong> at transparent rates. Domain & hosting provided by client.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registered GST Partner & MSME Certified Agency</span>
            </div>

            {/* Official Social Media Icons */}
            <div className="pt-3">
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 font-semibold">
                Follow & Connect With Us
              </p>
              <div className="flex items-center gap-2.5 flex-wrap">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-600/10 text-slate-400 hover:text-blue-400 flex items-center justify-center transition-all duration-200"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0-.02-3.36 1.68 1.68 0 0 0 .02 3.36m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500 hover:bg-pink-600/10 text-slate-400 hover:text-pink-400 flex items-center justify-center transition-all duration-200"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-400 hover:bg-sky-400/10 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                  title="X (Twitter)"
                  aria-label="X"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-600 hover:bg-blue-600/10 text-slate-400 hover:text-blue-500 flex items-center justify-center transition-all duration-200"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500 hover:bg-red-600/10 text-slate-400 hover:text-red-500 flex items-center justify-center transition-all duration-200"
                  title="YouTube"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=Hi%20Innaya%20Software,%20I'd%20like%20to%20connect.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:bg-emerald-600/10 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-all duration-200"
                  title="WhatsApp Official Channel"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.119.553 4.184 1.603 6.006L.069 24l6.128-1.597a11.96 11.96 0 0 0 5.834 1.508h.005c6.632 0 12.026-5.395 12.026-12.032 0-3.213-1.252-6.234-3.525-8.508A11.97 11.97 0 0 0 12.031 0zm7.147 17.185c-.297.836-1.728 1.597-2.395 1.7-.638.099-1.467.14-2.378-.154-1.472-.475-3.376-1.57-4.887-3.08-1.51-1.51-2.606-3.415-3.081-4.887-.294-.911-.253-1.74-.154-2.378.103-.667.864-2.098 1.7-2.395.284-.101.558-.088.759.04.253.16.574.928.773 1.411.198.483.33.642.235.836-.095.194-.21.32-.423.535-.213.214-.37.378-.173.719.502.868 1.258 1.83 2.186 2.657.928.827 1.89 1.583 2.758 2.085.341.197.505.04.719-.173.215-.213.341-.328.535-.423.194-.095.353.037.836.235.483.199 1.251.52 1.411.773.128.201.141.475.04.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Web & App Services */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Web & App Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#web-services" className="hover:text-orange-400 transition-colors">Static Sites (React + Tailwind, from ₹8k)</a></li>
              <li><a href="#web-services" className="hover:text-orange-400 transition-colors">Dynamic CMS Portals (from ₹25k)</a></li>
              <li><a href="#web-services" className="hover:text-orange-400 transition-colors">3D Interactive Sites (from ₹60k)</a></li>
              <li><a href="#web-services" className="hover:text-orange-400 transition-colors">E-Commerce (React+Node+MySQL, from ₹40k)</a></li>
              <li><a href="#web-services" className="hover:text-orange-400 transition-colors">Full-Stack Apps (React+Node+MySQL, from ₹75k)</a></li>
              <li><a href="#calculator" className="hover:text-orange-400 transition-colors">Instant Price Estimator</a></li>
            </ul>
          </div>

          {/* Digital Marketing Services */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Growth Marketing
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#digital-marketing" className="hover:text-orange-400 transition-colors">Google SEO & Local Maps</a></li>
              <li><a href="#digital-marketing" className="hover:text-orange-400 transition-colors">Meta Ads (FB & Insta)</a></li>
              <li><a href="#digital-marketing" className="hover:text-orange-400 transition-colors">Google Search & Performance Max</a></li>
              <li><a href="#digital-marketing" className="hover:text-orange-400 transition-colors">Social Media Management</a></li>
              <li><a href="#digital-marketing" className="hover:text-orange-400 transition-colors">Brand Identity & Logo Design</a></li>
              <li><a href="#digital-marketing" className="hover:text-orange-400 transition-colors">AI Viral Reels & Promo Videos</a></li>
            </ul>
          </div>

          {/* Quick Links & Locations */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2 mb-3">
              <p className="text-[11px] font-display font-bold uppercase text-white tracking-wider">
                Equal Co-Founders Desk:
              </p>
              <div className="space-y-1.5 text-[11px] text-slate-400">
                <div>
                  <strong className="text-white">Azhar</strong> <span className="text-orange-400 font-mono">(Client Relations)</span>:
                  <a href="tel:919010952596" className="block text-slate-300 font-mono hover:text-white">+91 90109 52596</a>
                </div>
                <div>
                  <strong className="text-white">Riyaz</strong> <span className="text-orange-400 font-mono">(Lead Developer)</span>:
                  <a href="tel:919948135827" className="block text-slate-300 font-mono hover:text-white">+91 99481 35827</a>
                </div>
                <div>
                  <strong className="text-white">Habeeb Hussain</strong> <span className="text-orange-400 font-mono">(Digital Marketing)</span>:
                  <a href="tel:919502626677" className="block text-slate-300 font-mono hover:text-white">+91 95026 26677</a>
                </div>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white">{AGENCY_INFO.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Links Bar */}
        <div className="pt-6 pb-6 border-b border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="flex items-center gap-1.5 hover:text-white hover:underline transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-orange-400" />
              <span>Privacy Policy</span>
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="flex items-center gap-1.5 hover:text-white hover:underline transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-orange-400" />
              <span>Terms & Conditions</span>
            </button>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400 font-mono text-[11px]">
              GST (18%) Registered • Domain & Hosting by Client
            </span>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">Accepted:</span>
            <Badge variant="outline" className="border-slate-800 text-[10px] text-slate-300 font-mono">UPI / GPay / PhonePe</Badge>
            <Badge variant="outline" className="border-slate-800 text-[10px] text-slate-300 font-mono">NetBanking</Badge>
            <Badge variant="outline" className="border-slate-800 text-[10px] text-slate-300 font-mono">Cards</Badge>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Back-to-Top (with right padding to prevent collision with floating WhatsApp) */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 lg:pr-24">
          
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} {AGENCY_INFO.name}. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-500 mt-1 font-mono">
              All prices listed in Indian Rupees (₹ INR). GST (18%) applicable as per government tax regulations.
            </p>
          </div>

          {/* Back to top button positioned safely */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
}
