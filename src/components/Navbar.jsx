import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ArrowRight,
  Code2,
  Sparkles
} from 'lucide-react';
import { AGENCY_INFO } from '../data/servicesData';
import { Button } from '@/components/ui/button';
import WhatsAppIcon from './WhatsAppIcon';
import logoImg from '../assets/logo-Hr.jpeg';

export default function Navbar({ darkMode, setDarkMode, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Web Services', href: '#web-services' },
    { label: 'Marketing', href: '#digital-marketing' },
    { label: 'Combos', href: '#combos' },
    { label: 'Estimator', href: '#calculator' },
    { label: 'Process', href: '#process' },
    { label: 'Founders', href: '#founders' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-xs py-2' 
          : 'bg-background/70 backdrop-blur-md border-b border-border/40 py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          
          {/* Authentic NexOra Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group shrink-0" aria-label="NexOra Home">
            <div className="bg-white rounded-xl p-1 sm:p-1.5 px-2 sm:px-2.5 shadow-xs border border-slate-200/90 dark:border-white/20 flex items-center justify-center group-hover:shadow-md group-hover:scale-102 transition-all duration-300">
              <img
                src={logoImg}
                alt="NexOra - Web and Digital Services"
                className="h-8 sm:h-9 md:h-10 w-auto max-w-[170px] sm:max-w-[210px] md:max-w-[230px] object-contain"
                loading="eager"
              />
            </div>
          </a>

          {/* Desktop Navigation Links - Single Line */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent/70 transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-xl text-foreground h-9 w-9 hover:bg-accent"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-800" />}
            </Button>

            {/* Primary Get Free Quote Button */}
            <Button
              variant="brand"
              size="sm"
              onClick={() => onOpenQuote()}
              className="h-9 gap-2 font-display font-bold text-xs sm:text-sm tracking-wide shadow-glow-primary px-4.5 rounded-xl"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Get Free Quote</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden h-9 w-9 text-foreground"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pt-3 pb-6 animate-fadeIn shadow-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 mt-3 border-t border-border flex flex-col gap-2">
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=Hi%20NexOra,%20I%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="whatsapp" className="w-full gap-2 text-sm font-semibold">
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp ({AGENCY_INFO.phone})</span>
              </Button>
            </a>

            <Button
              variant="navy"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full gap-2 text-sm font-semibold"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
