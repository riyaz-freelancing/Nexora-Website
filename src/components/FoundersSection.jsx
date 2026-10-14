import React from 'react';
import { FOUNDERS } from '../data/servicesData';
import { 
  Phone, 
  Code2, 
  TrendingUp, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import WhatsAppIcon from './WhatsAppIcon';

const founderRoleIcons = {
  azhar: Users,
  riyaz: Code2,
  habeeb: TrendingUp
};

export default function FoundersSection() {
  return (
    <section id="founders" className="py-24 bg-muted/30 border-t border-border relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-r from-blue-500/5 via-orange-500/5 to-emerald-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="brand" className="mb-4 gap-1.5 px-3.5 py-1 font-display font-semibold text-xs rounded-full">
            <Users className="w-3.5 h-3.5 text-primary" />
            <span>Equal Founding Partners</span>
          </Badge>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight">
            Meet The Co-Founders of Innaya Software
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Three equal partners driving engineering, digital marketing, and client partnership. When you work with Innaya Software, you collaborate directly with the founders.
          </p>
        </div>

        {/* 3 Founders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {FOUNDERS.map((founder) => {
            const RoleIcon = founderRoleIcons[founder.id] || Users;
            const initials = founder.name.split(' ').map(n => n[0]).join('').slice(0, 2);

            return (
              <Card
                key={founder.id}
                className="relative flex flex-col justify-between p-8 rounded-3xl bg-card border border-border/80 shadow-card-elevated hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
              >
                {/* Top Glowing Ambient Sheen */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${founder.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div>
                  {/* Top Header: Avatar Squircle + Co-Founder Badge */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${founder.gradient} text-white flex items-center justify-center font-display font-black text-xl shadow-lg shadow-black/10 group-hover:scale-105 transition-transform duration-300`}>
                      {initials}
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-bold bg-primary/10 text-primary border border-primary/25">
                        <Sparkles className="w-3 h-3 animate-pulse" />
                        <span>Equal Co-Founder</span>
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider font-semibold">
                        Hyderabad, India
                      </span>
                    </div>
                  </div>

                  {/* Founder Name & Primary Role */}
                  <h3 className="font-display font-black text-2xl text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {founder.name}
                  </h3>

                  <div className="mt-1.5 inline-flex items-center gap-2 text-xs font-display font-bold text-foreground">
                    <div className="w-5 h-5 rounded-lg bg-secondary text-primary flex items-center justify-center">
                      <RoleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{founder.role}</span>
                  </div>

                  {/* Tagline / Responsibility */}
                  <div className="mt-3 p-3 rounded-xl bg-secondary/60 dark:bg-slate-900/60 border border-border/70 text-xs font-medium text-foreground">
                    <span className="font-display font-bold text-primary">Core Focus: </span>
                    <span>{founder.tagline}</span>
                  </div>

                  {/* Bio */}
                  <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {founder.desc}
                  </p>

                  {/* Skills Pills */}
                  <div className="mt-5">
                    <p className="text-[11px] font-display font-bold uppercase tracking-wider text-foreground mb-2.5">
                      Key Competencies:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {founder.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-secondary/80 text-foreground font-display font-semibold text-[11px] border border-border/80"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Founder Contact Actions - Commented out per user request */}
                {/* 
                <div className="mt-8 pt-6 border-t border-border/80 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono pb-1">
                    <span>Direct Phone:</span>
                    <strong className="text-foreground">{founder.phone}</strong>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={`tel:${founder.phoneRaw}`}
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full gap-2 text-xs font-display font-bold hover:bg-primary hover:text-white hover:border-primary transition-all rounded-xl"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </Button>
                    </a>

                    <a
                      href={`https://wa.me/${founder.whatsapp}?text=Hi%20${encodeURIComponent(founder.name)},%20I'm%20reaching%20out%20from%20Innaya%20Software%20website%20regarding%20a%20project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        variant="whatsapp"
                        size="sm"
                        className="w-full gap-2 text-xs font-display font-bold rounded-xl"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                        <span>WhatsApp</span>
                      </Button>
                    </a>
                  </div>
                </div>
                */}

              </Card>
            );
          })}
        </div>

        {/* Co-Founders Commitment Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-3xl bg-card border border-border/80 shadow-card-elevated flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-black text-base text-foreground">
                Zero Middlemen. Speak Directly With The Founders.
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Riyaz builds your codebase, Habeeb scales your marketing, and Azhar guarantees transparent delivery.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${FOUNDERS[0].whatsapp}?text=Hi%20Azhar,%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20Innaya%20Software.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button variant="brand" size="sm" className="gap-2 font-display font-bold text-xs rounded-xl">
              <span>Start Founder Discussion</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
