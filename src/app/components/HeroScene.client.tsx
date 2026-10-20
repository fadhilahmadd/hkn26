"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

type Theme = "classic" | "energy";

export default function HeroScene() {
  const [activeCard, setActiveCard] = useState<Theme | null>(null);
  const [displayedCard, setDisplayedCard] = useState<Theme | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const centerModelRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth - 0.5;
      mouse.current.y = e.clientY / window.innerHeight - 0.5;
      mouse.current.px = e.clientX;
      mouse.current.py = e.clientY;
    };
    window.addEventListener("mousemove", onMouse);

    const onTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouse.current.x = touch.clientX / window.innerWidth - 0.5;
        mouse.current.y = touch.clientY / window.innerHeight - 0.5;
        mouse.current.px = touch.clientX;
        mouse.current.py = touch.clientY;
      }
    };
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });

    const render = () => {
      // Lerp mouse
      currentMouse.current.x += (mouse.current.x - currentMouse.current.x) * 0.1;
      currentMouse.current.y += (mouse.current.y - currentMouse.current.y) * 0.1;
      
      // Rotate center image
      if (centerModelRef.current) {
        centerModelRef.current.style.transform = `perspective(1000px) rotateX(${-currentMouse.current.y * 30}deg) rotateY(${currentMouse.current.x * 30}deg) translateZ(50px)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchstart", onTouch);
      cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const toggleTheme = (theme: Theme) => {
    if (activeCard === theme) {
      // Toggle off / disappear!
      setActiveCard(null);
      setDisplayedCard(null);

      const body = document.body;
      body.classList.remove("energy-theme");
      gsap.to(body, {
        duration: 0.8,
        ease: "power2.out",
        "--bg-inner": "#0D6B69",
        "--bg-mid": "#0a5553",
        "--bg-outer": "#182525",
      });
      return;
    }

    // Switch to selected theme
    setActiveCard(theme);
    setDisplayedCard(theme);

    const body = document.body;
    const target =
      theme === "energy"
        ? { inner: "#F0F7F4", mid: "#d4e6df", outer: "#b3cec4" }
        : { inner: "#0D6B69", mid: "#0a5553", outer: "#182525" };

    if (theme === "energy") body.classList.add("energy-theme");
    else body.classList.remove("energy-theme");

    gsap.to(body, {
      duration: 1.0,
      ease: "power2.out",
      "--bg-inner": target.inner,
      "--bg-mid": target.mid,
      "--bg-outer": target.outer,
    });
  };

  const handleArrowClick = () => {
    if (activeCard === null) {
      toggleTheme("classic");
    } else {
      toggleTheme(activeCard === "classic" ? "energy" : "classic");
    }
  };

  const isFloatingVisible = displayedCard !== null;

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      
      {/* Hero Background Image - Full in bottom so HKN logo is completely visible, unoptimized to prevent Next.js from downsampling to low-res blurry thumbnail on mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <Image
          src="/hero-bg.webp"
          fill
          alt="HKN62 Fun Run Wonosobo Background"
          className="object-cover object-bottom"
          priority
          unoptimized
        />
        {/* Subtle top/mid gradient to maintain text legibility while keeping the bottom logo completely clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#051f1c]/70 via-[#051f1c]/25 to-transparent"></div>
      </div>


      {/* Skip link */}
      <a href="#hero-main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-6 focus:py-2 focus:text-[#182525]">
        Skip to content
      </a>

      
      {/* Header */}
      

      {/* Hero main */}
      <main id="hero-main" className="relative flex h-full items-center justify-center pt-20">
        <div className="relative z-10 flex h-full w-full flex-col lg:flex-row items-center justify-between px-[4%] pt-16 lg:pt-0 pb-10 lg:pb-0">
          {/* Left column */}
          <div className="z-20 flex w-full lg:max-w-md flex-col items-center lg:items-start justify-center gap-4 lg:gap-6 py-0 lg:py-24 text-center lg:text-left mt-4 lg:mt-0 z-50">
            <h1 className="text-[clamp(3.5rem,10vw,11rem)] leading-[0.85] text-white font-nunito font-black uppercase tracking-tighter drop-shadow-2xl">
              <span className="text-[#8baa37]">HKN</span>62
              <br />
              <span className="text-white opacity-95">FUN RUN</span>
            </h1>
            <p className="max-w-[400px] text-sm sm:text-base leading-relaxed text-white/90 px-4 lg:px-0">
              18 OKTOBER 2026 &bull; ALUN ALUN WONOSOBO &bull; 5K
            </p>
            
            <div className="mt-8 hidden sm:flex items-center justify-center lg:justify-start gap-4">
              <div className="glass flex h-12 w-12 items-center justify-center rounded-xl text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M13 17L18 12L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 17L11 12L6 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs tracking-wider text-white/80">HKN</span>
                <span className="text-sm font-semibold text-white">5K EVENT 2026</span>
              </div>
            </div>
          </div>

          {/* Center 3D model - Auto-hidden by default, appears on button click */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-full w-full items-center justify-center transition-all duration-500 ease-out pointer-events-none ${
              isFloatingVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            <div
              ref={centerModelRef}
              className={`relative w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vh] max-w-[800px] max-h-[600px] ${
                isFloatingVisible ? "pointer-events-auto cursor-grab active:cursor-grabbing" : "pointer-events-none"
              }`}
              style={{ touchAction: "none" }}
            >
              <Image
                src="/MEDALI-TAMPAK-DEPAN-Photoroom.webp"
                alt="Medal for HKN62 Fun Run 2026"
                fill
                className={`object-contain drop-shadow-2xl transition-opacity duration-300 ${
                  displayedCard === "classic" ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 768px) 80vw, 60vw"
              />
              <Image
                src="/JERSEY-Photoroom.webp"
                alt="Jersey for HKN62 Fun Run 2026"
                fill
                className={`object-contain drop-shadow-2xl transition-opacity duration-300 ${
                  displayedCard === "energy" ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 768px) 80vw, 60vw"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="z-20 flex w-full lg:w-[450px] flex-col items-center lg:items-end justify-end lg:justify-between py-0 lg:py-24 text-center lg:text-right mt-auto lg:mt-0 gap-8">
            {/* Medali & Jersey Buttons on Desktop - Hidden on Mobile */}
            <div className="hidden sm:flex flex-col items-end gap-6">
              {/* Flavor cards */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => toggleTheme("classic")}
                  className={`glass flex flex-col items-center gap-3 rounded-2xl p-4 pt-16 w-[135px] text-center backdrop-blur transition-all duration-300 cursor-pointer ${
                    activeCard === "classic"
                      ? "border-2 border-[#8CA825] shadow-lg shadow-[#8CA825]/20 bg-white/10 ring-2 ring-[#8CA825]/40"
                      : "border border-white/10 hover:border-white/30 hover:bg-white/5"
                  }`}
                  aria-pressed={activeCard === "classic"}
                  title={activeCard === "classic" ? "Sembunyikan Medali" : "Tampilkan Medali"}
                >
                  <div className="-mt-16 h-20 w-20 relative">
                    <Image
                      src="/MEDALI-TAMPAK-DEPAN-Photoroom.webp"
                      fill
                      alt="Medal"
                      className="object-contain drop-shadow-xl"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">Medali</span>
                    <span className="text-sm text-white/80">Finisher</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => toggleTheme("energy")}
                  className={`glass flex flex-col items-center gap-3 rounded-2xl p-4 pt-16 w-[135px] text-center backdrop-blur transition-all duration-300 cursor-pointer ${
                    activeCard === "energy"
                      ? "border-2 border-[#8CA825] shadow-lg shadow-[#8CA825]/20 bg-white/10 ring-2 ring-[#8CA825]/40"
                      : "border border-white/10 hover:border-white/30 hover:bg-white/5"
                  }`}
                  aria-pressed={activeCard === "energy"}
                  title={activeCard === "energy" ? "Sembunyikan Jersey" : "Tampilkan Jersey"}
                >
                  <div className="-mt-16 h-20 w-20 relative">
                    <Image
                      src="/JERSEY-Photoroom.webp"
                      fill
                      alt="Jersey"
                      className="object-contain drop-shadow-xl"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">Jersey</span>
                    <span className="text-sm text-white/80">Exclusive</span>
                  </div>
                </button>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleArrowClick}
                  aria-label="Previous Option"
                  className="glass flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:bg-white/10 text-white cursor-pointer transition-colors"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleArrowClick}
                  aria-label="Next Option"
                  className="glass flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:bg-white/10 text-white cursor-pointer transition-colors"
                >
                  →
                </button>
              </div>
            </div>

            <h2 className="text-[clamp(3rem,5vw,6rem)] leading-[0.9] text-white font-nunito font-black uppercase tracking-tighter drop-shadow-xl text-center lg:text-right hidden sm:block">
              <span className="text-[#8baa37]">Take Your</span><br />
              <span className="text-white">Healthy Step</span>
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
