"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (containerRef.current) {
      if (isHome) {
        // Landing page gets ONLY an opacity fade. 
        // We cannot use a 'y' transform here because CSS transforms break the fixed positioning of the Hero background.
        gsap.fromTo(
          containerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power2.out", delay: 0.1 }
        );
      } else {
        // Sub-pages get the full fade and slide-up animation
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.05 }
        );
      }
    }
  }, [isHome]);

  return (
    <div ref={containerRef} className="opacity-0">
      {children}
    </div>
  );
}