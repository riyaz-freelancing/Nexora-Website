import React from 'react';
import logoImg from '../assets/logo-Hr.jpeg';

export default function InayaLogo({ 
  className = "h-11", 
  imgClassName = "h-9 sm:h-10 w-auto object-contain", 
  showText = false 
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Clean high-contrast card for the logo image */}
      <div className="bg-white rounded-xl p-1.5 px-2.5 shadow-xs border border-slate-200/90 dark:border-white/20 flex items-center justify-center transition-all duration-200 hover:shadow-md">
        <img
          src={logoImg}
          alt="NexOra - Web and Digital Services (Click. Connect. Convert.)"
          className={imgClassName}
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className="font-display font-black text-xl text-foreground tracking-tight leading-none">
            NexOra
          </span>
          <span className="text-[10px] text-muted-foreground font-semibold tracking-wider uppercase mt-1">
            Click. Connect. Convert.
          </span>
        </div>
      )}
    </div>
  );
}
