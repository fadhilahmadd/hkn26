"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import CategoryRouteSection from "./CategoryRouteSection";


const ASSETS = [
  { src: '/running1.webp', w: 180, h: 180, t: '5%', l: '2%' },
  { src: '/running2.webp', w: 150, h: 150, t: '30%', l: '85%' },
  { src: '/running3.webp', w: 200, h: 200, t: '60%', l: '5%' },
  { src: '/shoe1.webp', w: 140, h: 140, t: '85%', l: '85%' },
];

export default function AdditionalSections() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(0);

  // Scroll reveal animation using GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.7, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%", // Trigger earlier when it just enters the viewport
            toggleActions: "play none none none"
          }
        }
      );
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);


  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth - 0.5;
      mouse.current.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMouse);

    const onTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouse.current.x = touch.clientX / window.innerWidth - 0.5;
        mouse.current.y = touch.clientY / window.innerHeight - 0.5;
      }
    };
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });


    const render = () => {
      currentMouse.current.x += (mouse.current.x - currentMouse.current.x) * 0.1;
      currentMouse.current.y += (mouse.current.y - currentMouse.current.y) * 0.1;
      
      if (containerRef.current) {
        const t = Date.now() / 1000;
        const floaters = containerRef.current.querySelectorAll('.sect-floater');
        floaters.forEach((el, i) => {
          const phase = t + i * 1.5;
          const htmlEl = el as HTMLElement;
          const px = currentMouse.current.x * (i % 2 === 0 ? -60 : 60);
          const py = currentMouse.current.y * (i % 2 === 0 ? -60 : 60) + Math.sin(phase) * 15;
          const rot = Math.cos(phase) * 5 + (currentMouse.current.x * 15);
          htmlEl.style.transform = `translate(${px}px, ${py}px) rotate(${rot}deg)`;
        });
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



  return (
    <div ref={containerRef} className="bg-white text-[#0a0a0a] font-poppins relative z-20 overflow-hidden">

      {/* Background Floating Assets */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden sm:block">
        {ASSETS.map((asset, i) => (
          <div
            key={i}
            className="sect-floater absolute drop-shadow-xl"
            style={{
              top: asset.t,
              left: asset.l,
              width: `${asset.w}px`,
              height: `${asset.h}px`,
            }}
          >
            <Image src={asset.src} fill alt="Decorative Asset" className="object-contain opacity-80" sizes="200px" />
          </div>
        ))}
      </div>

      
      {/* CATEGORY & ROUTE SECTION (UGM TRAIL RUN STYLE) */}
      <CategoryRouteSection />

      {/* DOWNLOAD DOCUMENTS */}
      <section className="px-[4%] sm:px-10 pb-16 sm:pb-24 relative" id="dokumen">
        <div className="scroll-reveal max-w-7xl mx-auto bg-[#f4f4f4] rounded-[2rem] p-6 sm:p-12 shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold font-nunito tracking-tight text-[#1a6860] uppercase">
            Dokumen <span className="text-[#8baa37]">Pendukung</span>
          </h2>
          <p className="mt-3 text-[#717784] max-w-2xl">
            Unduh format surat yang diperlukan untuk pendaftaran dan pengambilan paket lomba.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/Surat-Persetujuan-Orang-Tua-HKN-FUN-RUN-2026.pdf"
              download="Surat-Persetujuan-Orang-Tua-HKN-FUN-RUN-2026.pdf"
              className="group inline-flex items-center gap-4 rounded-2xl border border-[#e6e8ec] bg-white px-5 py-4 shadow-sm hover:border-[#8baa37] hover:shadow-md transition-all duration-300"
            >
              <span className="w-11 h-11 shrink-0 rounded-full bg-[#1a6860]/10 text-[#1a6860] flex items-center justify-center group-hover:bg-[#1a6860] group-hover:text-white transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </span>
              <span className="text-left">
                <span className="block font-bold font-nunito text-[#0a0a0a]">Surat Persetujuan Orang Tua</span>
                <span className="block text-sm text-[#717784]">PDF · Wajib untuk peserta di bawah 17 tahun</span>
              </span>
            </a>

            <a
              href="/Surat-Kuasa-HKN-FUN-RUN-2026.pdf"
              download="Surat-Kuasa-HKN-FUN-RUN-2026.pdf"
              className="group inline-flex items-center gap-4 rounded-2xl border border-[#e6e8ec] bg-white px-5 py-4 shadow-sm hover:border-[#8baa37] hover:shadow-md transition-all duration-300"
            >
              <span className="w-11 h-11 shrink-0 rounded-full bg-[#1a6860]/10 text-[#1a6860] flex items-center justify-center group-hover:bg-[#1a6860] group-hover:text-white transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </span>
              <span className="text-left">
                <span className="block font-bold font-nunito text-[#0a0a0a]">Surat Kuasa Pengambilan Paket</span>
                <span className="block text-sm text-[#717784]">PDF · Wajib bila paket lomba diwakilkan</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* SIZE CHART SECTION */}
      <section className="bg-[#093833] text-white px-[4%] sm:px-10 py-20 mx-2 sm:mx-4 rounded-[2rem] shadow-xl relative overflow-hidden">
        {/* Background Wayang pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none object-cover">
          <Image src="/line-art-jersey.webp" fill alt="" aria-hidden="true" className="object-cover" sizes="100vw" quality={60} priority />
        </div>
        
        <div className="scroll-reveal max-w-7xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-nunito text-center mb-12 sm:mb-16 tracking-tight text-white px-4">
            SIZE CHART - HKN 62 FUN RUN 2026
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
            
            <div className="flex gap-4 sm:gap-8 items-end relative">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-40 sm:w-56 sm:h-64 shadow-2xl rounded-2xl overflow-hidden bg-[#1a6860] border-4 border-[#8baa37]">
                  <Image src="/jersey-running-depan.webp" fill alt="Jersey Depan HKN62" className="object-cover" sizes="(max-width: 640px) 160px, 224px" />
                </div>
                <span className="mt-4 font-bold tracking-wide">Tampak Depan</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-40 sm:w-56 sm:h-64 shadow-2xl rounded-2xl overflow-hidden bg-[#1a6860] border-4 border-[#8baa37]">
                  <Image src="/jersey-running-belakang.webp" fill alt="Jersey Belakang HKN62" className="object-cover" sizes="(max-width: 640px) 160px, 224px" />
                </div>
                <span className="mt-4 font-bold tracking-wide">Tampak Belakang</span>
              </div>
            </div>
            
            <div className="w-full max-w-2xl bg-[#E6F4E8] text-[#0a0a0a] rounded-2xl overflow-x-auto shadow-2xl">
              <table className="w-full text-center border-collapse text-sm sm:text-lg">
                <thead>
                  <tr className="bg-[#D3EEDB] font-bold border-b border-[#a4d2b2]">
                    <th className="p-2 sm:p-4 border-r border-[#a4d2b2] align-middle">SIZE</th>
                    <th className="p-2 sm:p-4 border-r border-[#a4d2b2] leading-tight">CHEST<br/>WIDTH<br/>(CM)</th>
                    <th className="p-2 sm:p-4 border-r border-[#a4d2b2] leading-tight">BODY<br/>LENGTH<br/>(CM)</th>
                    <th className="p-2 sm:p-4 leading-tight">SLEEVE<br/>LENGTH<br/>(CM)</th>
                  </tr>
                </thead>
                <tbody className="font-bold font-nunito text-xl">
                  <tr className="border-b border-[#a4d2b2] bg-white"><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">S</td><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">46</td><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">68</td><td className="p-2 sm:p-4">21</td></tr>
                  <tr className="border-b border-[#a4d2b2] bg-[#F7FBF8]"><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">M</td><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">49</td><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">71</td><td className="p-2 sm:p-4">22</td></tr>
                  <tr className="border-b border-[#a4d2b2] bg-white"><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">L</td><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">52</td><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">74</td><td className="p-2 sm:p-4">23</td></tr>
                  <tr className="border-b border-[#a4d2b2] bg-[#F7FBF8]"><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">XL</td><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">56</td><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">76</td><td className="p-2 sm:p-4">24</td></tr>
                  <tr className="border-b border-[#a4d2b2] bg-white"><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">XXL</td><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">58</td><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">78</td><td className="p-2 sm:p-4">25</td></tr>
                  <tr className="bg-[#F7FBF8]"><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">XXXL</td><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">64</td><td className="p-2 sm:p-4 border-r border-[#a4d2b2]">80</td><td className="p-2 sm:p-4">26</td></tr>
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
      </section>

      
      {/* 6. FOOTER */}
      
    </div>
  );
}
