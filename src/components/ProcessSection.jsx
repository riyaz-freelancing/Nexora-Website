import React from 'react';
import { WORK_PROCESS } from '../data/servicesData';
import { 
  MessageSquareHeart, 
  FileCheck2, 
  Cpu, 
  Rocket, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const iconMap = {
  MessageSquareHeart,
  FileCheck2,
  Cpu,
  Rocket
};

// Rich color schemes for each milestone step
const stepThemes = [
  {
    step: "01",
    tag: "Discovery & Alignment",
    accent: "from-sky-500 to-blue-600",
    borderGlow: "group-hover:border-sky-500/50",
    bgGlow: "from-sky-500/10 via-transparent to-transparent",
    iconBg: "bg-sky-500/10 border-sky-500/25 text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-sky-500/30",
    dotColor: "bg-sky-500",
    badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/25"
  },
  {
    step: "02",
    tag: "Milestones & Scope",
    accent: "from-indigo-500 to-violet-600",
    borderGlow: "group-hover:border-indigo-500/50",
    bgGlow: "from-indigo-500/10 via-transparent to-transparent",
    iconBg: "bg-indigo-500/10 border-indigo-500/25 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-indigo-500/30",
    dotColor: "bg-indigo-500",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/25"
  },
  {
    step: "03",
    tag: "Agile Development",
    accent: "from-orange-500 to-amber-600",
    borderGlow: "group-hover:border-orange-500/50",
    bgGlow: "from-orange-500/10 via-transparent to-transparent",
    iconBg: "bg-orange-500/10 border-orange-500/25 text-orange-600 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-orange-500/30",
    dotColor: "bg-orange-500",
    badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/25"
  },
  {
    step: "04",
    tag: "Go-Live & Warranty",
    accent: "from-emerald-500 to-teal-600",
    borderGlow: "group-hover:border-emerald-500/50",
    bgGlow: "from-emerald-500/10 via-transparent to-transparent",
    iconBg: "bg-emerald-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-emerald-500/30",
    dotColor: "bg-emerald-500",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden border-t border-border">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/5 via-orange-500/5 to-emerald-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="brand" className="mb-4 gap-1.5 px-3.5 py-1 font-display font-semibold text-xs rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>Clear & Transparent Workflow</span>
          </Badge>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight">
            How We Work Together
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            A frictionless 4-step milestone engineering process built specifically for non-technical business founders. No hidden jargon, no ghosting, and complete progress visibility.
          </p>
        </div>

        {/* 4 Steps Grid with Connected Pipeline Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative">
          
          {WORK_PROCESS.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Rocket;
            const theme = stepThemes[idx % stepThemes.length];

            return (
              <Card 
                key={item.step}
                className={`relative flex flex-col justify-between p-7 rounded-3xl bg-card/95 backdrop-blur-sm border border-border/80 shadow-card-elevated hover:shadow-2xl ${theme.borderGlow} hover:-translate-y-2 transition-all duration-300 group overflow-hidden`}
              >
                {/* Top Subtle Ambient Sheen */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${theme.bgGlow} blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`}></div>
                
                {/* Top Glowing Accent Line */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${theme.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div>
                  {/* Step Header: Giant Number + Illuminated Squircle Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <span className="font-display font-black text-4xl sm:text-5xl tracking-tight text-slate-300 dark:text-slate-700 group-hover:text-foreground transition-colors duration-300">
                        {item.step}
                      </span>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                        Step {item.step} of 04
                      </span>
                    </div>

                    <div className={`w-13 h-13 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-sm ${theme.iconBg}`}>
                      <IconComp className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-xl text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Subtitle Pill with Status Dot */}
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-secondary/80 border border-border/60 text-xs font-semibold text-foreground">
                    <span className={`w-1.5 h-1.5 rounded-full ${theme.dotColor} animate-pulse`}></span>
                    <span>{item.subtitle}</span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Milestone Footer Status Bar */}
                <div className="mt-8 pt-4 border-t border-border/70 flex items-center justify-between text-xs font-display font-bold">
                  <div className="flex items-center gap-1.5 text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Milestone {item.step} Scope</span>
                  </div>
                  
                  <div className="w-7 h-7 rounded-full bg-secondary/60 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </Card>
            );
          })}

        </div>

      </div>
    </section>
  );
}
