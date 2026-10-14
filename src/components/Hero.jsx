import React, { useState, useRef, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  ChevronDown 
} from 'lucide-react';
import heroVideo from '../assets/video.mp4';

export default function Hero({ onOpenQuote }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Autoplay video on load
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full pt-16 sm:pt-20 bg-black overflow-hidden select-none"
    >
      {/* Pure Full-Viewport Video Directly After Navbar */}
      <div 
        className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] min-h-[480px] max-h-[1080px] bg-black flex items-center justify-center cursor-pointer"
        onClick={togglePlay}
      >
        {/* The Clean Video Element */}
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Floating Sound Toggle Pill (Top Right) */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={toggleMute}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-display font-bold backdrop-blur-xl border shadow-2xl transition-all duration-300 hover:scale-105 ${
              isMuted 
                ? 'bg-slate-900/90 text-amber-300 border-amber-400/50 hover:bg-slate-900 ring-2 ring-amber-400/20' 
                : 'bg-emerald-500/95 text-white border-emerald-400/80 hover:bg-emerald-600 shadow-emerald-500/20'
            }`}
            title={isMuted ? "Click to turn sound ON" : "Click to mute audio"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 shrink-0" />
                <span>Tap for Sound 🔊</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Sound On 🎵</span>
              </>
            )}
          </button>
        </div>

        {/* Subtle Bottom Scroll Indicator Arrow to explore services */}
        <a
          href="#web-services"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors group/scroll"
          aria-label="Scroll down to services"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase opacity-0 group-hover/scroll:opacity-100 transition-opacity">
            Scroll to Services
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-sky-400" />
        </a>
      </div>
    </section>
  );
}
