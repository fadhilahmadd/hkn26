"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import type { ModelViewerElement } from "@google/model-viewer";
import "@google/model-viewer";
import gsap from "gsap";
import Image from "next/image";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace React {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        "model-viewer": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & {
            src?: string;
            alt?: string;
            "camera-controls"?: boolean;
            "disable-zoom"?: boolean;
            "shadow-intensity"?: number;
            "environment-image"?: string;
            exposure?: string | number;
            "interaction-prompt"?: string;
            "camera-orbit"?: string;
            "field-of-view"?: string;
            loading?: string;
            variantName?: string;
          },
          ModelViewerElement
        >;
      }
    }
  }
}


type Theme = "classic" | "energy";

// Using official Khronos sample models for the running shoe and water bottles




const FLOATING_ASSETS: Array<{type: string, src: string}> = [];

// Inline SVG to avoid network requests (better Lighthouse score)

const POS = [
  { t: "15%", l: "20%", w: 180, h: 180 },
  { t: "60%", l: "45%", w: 100, h: 100 },
  { t: "30%", l: "65%", w: 220, h: 220 },
  { t: "75%", l: "15%", w: 120, h: 120 },
  { t: "45%", l: "70%", w: 140, h: 140 },
  { t: "20%", l: "50%", w: 160, h: 160 },
];

const ORBITS = [
  "45deg 70deg 105%",
  "-120deg 45deg 105%",
  "200deg 80deg 105%",
  "10deg 60deg 105%",
  "-45deg 65deg 105%",
  "80deg 75deg 105%",
];

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<Theme>("classic");
  const [centerImage, setCenterImage] = useState("/MEDALI-TAMPAK-DEPAN-Photoroom.webp");
  const containerRef = useRef<HTMLDivElement>(null);
  const centerModelRef = useRef<HTMLImageElement>(null);

  const mouse = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });
  const isSwitching = useRef(false);
  const switchSpin = useRef(0);
  const animFrameId = useRef(0);
  
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const container = containerRef.current;
    if (!container) return;


    const onMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth - 0.5;
      mouse.current.y = e.clientY / window.innerHeight - 0.5;
      mouse.current.px = e.clientX;
      mouse.current.py = e.clientY;
    };
    window.addEventListener("mousemove", onMouse);

        const render = () => {
      // Lerp mouse
      currentMouse.current.x += (mouse.current.x - currentMouse.current.x) * 0.1;
      currentMouse.current.y += (mouse.current.y - currentMouse.current.y) * 0.1;
      
      // Rotate center image
      if (centerModelRef.current) {
        centerModelRef.current.style.transform = `perspective(1000px) rotateX(${-currentMouse.current.y * 30}deg) rotateY(${currentMouse.current.x * 30}deg) translateZ(50px)`;
      }
      
      // Move floating layers slightly for parallax and add idle float
      const container = containerRef.current;
      if (container) {
        const t = Date.now() / 1000;
        
        // Parallax the groups
        const floatersGroup = container.querySelector('.floating-models') as HTMLElement;
        const leavesGroup = container.querySelector('.leaf-container') as HTMLElement;
        if (floatersGroup) floatersGroup.style.transform = `translate(${currentMouse.current.x * -30}px, ${currentMouse.current.y * -30}px)`;
        if (leavesGroup) leavesGroup.style.transform = `translate(${currentMouse.current.x * -60}px, ${currentMouse.current.y * -60}px)`;
        
        // Idle float each model
        const floaters = container.querySelectorAll('.floating-model');
        floaters.forEach((el, i) => {
          const phase = t + i * 1.5;
          const htmlEl = el as HTMLElement;
          // Apply a gentle up/down and rotation to each GLB
          htmlEl.style.transform = `translateY(${Math.sin(phase) * 15}px) rotate(${Math.cos(phase) * 5}deg)`;
        });
        
        const leaves = container.querySelectorAll('.leaf-item');
        leaves.forEach((el, i) => {
          const phase = t + i * 0.8;
          const htmlEl = el as HTMLElement;
          htmlEl.style.transform = `translateY(${Math.sin(phase) * 10}px) rotate(${Math.cos(phase) * 10}deg)`;
        });
      }

      animFrameId.current = requestAnimationFrame(render);
    };
    render();


    return () => {
      window.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(animFrameId.current);
    };
  }, [mounted]);

  const switchTheme = (theme: Theme) => {
    if (isSwitching.current) return;
    isSwitching.current = true;
    setActiveCard(theme);
    const body = document.body;
    const target =
      theme === "energy"
        ? { inner: "#F0F7F4", mid: "#d4e6df", outer: "#b3cec4" }
        : { inner: "#0D6B69", mid: "#0a5553", outer: "#182525" };

    if (theme === "energy") body.classList.add("energy-theme");
    else body.classList.remove("energy-theme");

    gsap.to(body, {
      duration: 1.5,
      ease: "power2.inOut",
      "--bg-inner": target.inner,
      "--bg-mid": target.mid,
      "--bg-outer": target.outer,
    });

    const spinObj = { val: 0, blur: 0 };
    gsap.to(spinObj, {
      val: 360,
      blur: 15,
      duration: 0.6,
      ease: "power2.in",
      onUpdate: () => {
        switchSpin.current = spinObj.val;
        if (centerModelRef.current)
          centerModelRef.current.style.filter = `blur(${spinObj.blur}px)`;
      },
      onComplete: () => {
        setCenterImage(theme === "energy" ? "/JERSEY-Photoroom.webp" : "/MEDALI-TAMPAK-DEPAN-Photoroom.webp");
        
        gsap.to(spinObj, {
          val: 720,
          blur: 0,
          duration: 1.5,
          ease: "back.out(0.7)",
          onUpdate: () => {
            switchSpin.current = spinObj.val;
            if (centerModelRef.current)
              centerModelRef.current.style.filter = `blur(${spinObj.blur}px)`;
          },
          onComplete: () => {
            switchSpin.current = 0;
            if (centerModelRef.current)
              centerModelRef.current.style.filter = "none";
            isSwitching.current = false;
          },
        });
      },
    });
  };

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="relative h-screen w-screen overflow-hidden">
      
      {/* Hero Background Image */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <Image src="/hero-bg.webp" fill alt="Background" className="object-cover opacity-80" priority sizes="100vw" quality={90} />
        {/* Optional overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-[#093833]/40 mix-blend-multiply"></div>
      </div>


      {/* Skip link */}
      <a href="#hero-main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-6 focus:py-2 focus:text-[#182525]">
        Skip to content
      </a>

      
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-[4%] py-4 md:py-6 bg-gradient-to-b from-[#051f1c]/80 to-transparent">
        <div className="flex items-center">
          <Image 
            src="/logo-hkn-run.webp" 
            width={240} 
            height={96} 
            alt="HKN62 Logo" 
            className="object-contain h-20 sm:h-28 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-300" 
            sizes="(max-width: 768px) 80vw, 60vw" priority 
          />
        </div>
        <nav className="glass hidden md:flex items-center gap-1 rounded-full p-1.5 shadow-xl border border-white/10" aria-label="Main">
          {["Home", "Route", "Categories", "Rules"].map((item, i) => (
            <a key={item} href="#" className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${i === 0 ? "bg-white text-[#1a6860] shadow-md" : "text-white/80 hover:text-white hover:bg-white/10"}`} aria-current={i === 0 ? "page" : undefined}>
              {item}
            </a>
          ))}
        </nav>
        <button type="button" className="rounded-full bg-[#8baa37] px-8 py-3.5 text-sm font-bold tracking-wide text-[#093833] uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(139,170,55,0.4)] hover:scale-105 border border-[#8baa37]">
          Register Now
        </button>
      </header>

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
              <div className="glass flex h-12 w-12 items-center justify-center rounded-xl">
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

          {/* Center 3D model */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-full w-full items-center justify-center pointer-events-none">
            <Image
              ref={centerModelRef}
              src={centerImage}
              alt="Medal for HKN62 Fun Run 2026"
              width={800}
              height={800}
              className="object-contain drop-shadow-2xl w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vh] max-h-[600px]"
              sizes="(max-width: 768px) 80vw, 60vw" priority
            />
          </div>

          {/* Floating models */}
          <div className="floating-models hidden sm:block absolute inset-0 z-30 pointer-events-none transition-transform duration-100 ease-out">
            {FLOATING_ASSETS.map((asset, i) => (
              asset.type === 'glb' ? (
                <model-viewer
                  key={i}
                  src={asset.src}
                  className="floating-model absolute"
                  style={{
                    top: POS[i].t,
                    left: POS[i].l,
                    width: `${POS[i].w}px`,
                    height: `${POS[i].h}px`,
                    pointerEvents: "none",
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
                  }}
                  loading="lazy"
                  environment-image="neutral"
                  exposure="1.2"
                  interaction-prompt="none"
                  camera-orbit={ORBITS[i]}
                />
              ) : (
                <div
                  key={i}
                  className="floating-model absolute"
                  style={{
                    top: POS[i].t,
                    left: POS[i].l,
                    width: `${POS[i].w}px`,
                    height: `${POS[i].h}px`,
                    pointerEvents: "none",
                  }}
                >
                  <Image src={asset.src} fill alt="Floating Event Asset" className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
                </div>
              )
            ))}
          </div>

          {/* Leaf items (emoji placeholders) */}
          <div className="leaf-container hidden sm:block absolute inset-0 z-0 pointer-events-none transition-transform duration-100 ease-out">
            {["🏅", "👟", "⏱️", "🚩"].map((emoji, i) => (
              <div
                key={i}
                className="leaf-item absolute text-4xl opacity-20"
                style={{
                  top: `${[10, 40, 70, 85][i]}%`,
                  left: `${[15, 80, 75, 20][i]}%`,
                }}
              >
                {emoji}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="z-20 flex w-full lg:w-[450px] flex-col items-center lg:items-end justify-end lg:justify-between py-0 lg:py-24 text-center lg:text-right mt-auto lg:mt-0 gap-8">
            <div className="flex flex-col items-end gap-6">
              {/* Flavor cards */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => switchTheme("classic")}
                  className={`glass flex flex-col items-center gap-3 rounded-2xl p-4 pt-16 w-[135px] text-center backdrop-blur transition-all duration-300 ${
                    activeCard === "classic" ? "border-2 border-[#8CA825] shadow-lg" : "border border-white/10"
                  }`}
                >
                  <div className="-mt-16 h-20 w-20 relative"><Image src="/MEDALI-TAMPAK-DEPAN-Photoroom.webp" fill alt="Medal" className="object-contain drop-shadow-xl" sizes="80px" /></div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">Medali</span>
                    <span className="text-sm text-white/80">Finisher</span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => switchTheme("energy")}
                  className={`glass flex flex-col items-center gap-3 rounded-2xl p-4 pt-16 w-[135px] text-center backdrop-blur transition-all duration-300 ${
                    activeCard === "energy" ? "border-2 border-[#8CA825] shadow-lg" : "border border-white/10"
                  }`}
                >
                  <div className="-mt-16 h-20 w-20 relative"><Image src="/JERSEY-Photoroom.webp" fill alt="Jersey" className="object-contain drop-shadow-xl" sizes="80px" /></div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">Jersey</span>
                    <span className="text-sm text-white/80">Exclusive</span>
                  </div>
                </button>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => switchTheme(activeCard === "classic" ? "energy" : "classic")} aria-label="Previous Option" className="glass flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:bg-white/10 text-white">←</button>
                <button type="button" onClick={() => switchTheme(activeCard === "classic" ? "energy" : "classic")} aria-label="Next Option" className="glass flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:bg-white/10 text-white">→</button>
              </div>
            </div>
            <h2 className="text-[clamp(3rem,5vw,6rem)] leading-[0.9] text-white font-nunito font-black uppercase tracking-tighter drop-shadow-xl text-center lg:text-right hidden sm:block">
              <span className="text-[#8baa37]">Take Your</span><br />
              <span className="text-white">Healthy Step</span>
            </h2>
          </div>
        </div>
      </main>
      {/* Seamless transition gradient to white */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-40 bg-gradient-to-b from-transparent to-black pointer-events-none z-40"></div>
    </div>
  );
}
