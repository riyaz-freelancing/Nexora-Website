import React, { useState } from 'react';
import { AGENCY_INFO } from '../data/servicesData';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      {/* Official WhatsApp Floating Button */}
      <div className="relative group">
        
        {/* Animated Pulse Waves */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping duration-1000"></span>

        <a
          href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=Hi%20NexOra,%20I'm%20inquiring%20about%20your%20website%20and%20application%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-white/20 dark:ring-slate-900/40"
          aria-label="Chat with us on WhatsApp"
        >
          {/* Authentic Realtime WhatsApp Logo */}
          <WhatsAppIcon className="w-8 h-8 fill-white" />
        </a>

        {/* Notification Ping Dot */}
        <span className="absolute 0 top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
        </span>

        {/* Hover Tooltip */}
        {showTooltip && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl animate-fadeIn pointer-events-none border border-slate-700/60">
            Chat with NexOra on WhatsApp
          </div>
        )}
      </div>
    </div>
  );
}
