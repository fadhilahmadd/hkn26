"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const finishLoading = () => {
      // Add a tiny delay so it feels intentional and guarantees hydration finishes
      setTimeout(() => {
        setFade(true);
        setTimeout(() => setLoading(false), 800); // Matches the CSS transition duration
      }, 500);
    };

    // If the document is already completely loaded when the component mounts
    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      return () => window.removeEventListener("load", finishLoading);
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#051f1c] transition-opacity duration-800 ease-in-out ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 animate-[wa-pulse_2s_infinite]">
          <Image src="/logo-hkn-run.webp" fill alt="HKN62 Fun Run" className="object-contain drop-shadow-2xl" priority sizes="160px" />
        </div>
        
        {/* Modern progress bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#8baa37] rounded-full animate-[loading-bar_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes loading-bar {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 50%; transform: translateX(50%); }
          100% { width: 0%; transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
