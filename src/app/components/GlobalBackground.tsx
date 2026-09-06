"use client";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function GlobalBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHome) return;

    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHome]);

  if (isHome) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0a] pointer-events-none">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Mouse following glow with smooth GPU hardware transform */}
      <div 
        ref={glowRef}
        className="absolute top-0 left-0 w-[40vw] h-[40vw] min-w-[450px] min-h-[450px] rounded-full opacity-35 mix-blend-screen transition-transform duration-500 ease-out pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(139,170,55,0.4) 0%, rgba(9,56,51,0.2) 45%, transparent 70%)',
          transform: 'translate3d(50vw, 50vh, 0) translate(-50%, -50%)'
        }}
      />
      
      {/* Ambient static glows */}
      <div 
        className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full opacity-20 -translate-y-1/3 translate-x-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #093833 0%, transparent 70%)' }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full opacity-15 translate-y-1/3 -translate-x-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1a6860 0%, transparent 70%)' }}
      ></div>
    </div>
  );
}
