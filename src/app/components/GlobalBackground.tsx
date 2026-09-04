"use client";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function GlobalBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHome) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      glowRef.current.animate({
        left: `${x}px`,
        top: `${y}px`
      }, { duration: 3000, fill: "forwards" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHome]);

  if (isHome) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0a] pointer-events-none">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Mouse following glow */}
      <div 
        ref={glowRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] min-w-[500px] min-h-[500px] rounded-full blur-[120px] opacity-40 mix-blend-screen transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(139,170,55,0.6) 0%, rgba(9,56,51,0.3) 50%, transparent 70%)',
          left: '50%',
          top: '50%'
        }}
      />
      
      {/* Ambient static glows */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#093833] rounded-full blur-[150px] opacity-20 -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#1a6860] rounded-full blur-[120px] opacity-10 translate-y-1/3 -translate-x-1/3"></div>
    </div>
  );
}
