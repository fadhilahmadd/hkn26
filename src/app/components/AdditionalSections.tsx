"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";


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

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth - 0.5;
      mouse.current.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMouse);

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

      
      {/* EVENT INFO SECTION */}
      <section className="px-[4%] sm:px-10 py-16 sm:py-24 relative isolate">
        <div className="scroll-reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-auto flex-1 space-y-8">
            <div>
              <h2 className="text-4xl sm:text-7xl font-bold font-nunito tracking-tight text-[#1a6860] leading-none uppercase">
                HKN62<br/>
                <span className="text-[#8baa37]">FUN RUN 2026</span>
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 border-b border-[#e6e8ec] pb-4">
                <div className="w-12 h-12 rounded-full bg-[#f4f4f4] flex items-center justify-center text-[#1a6860]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div>
                  <div className="text-sm text-[#717784] uppercase font-bold tracking-wider">Tanggal Pelaksanaan</div>
                  <div className="text-2xl font-bold font-nunito text-[#0a0a0a]">18 OKTOBER 2026</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 border-b border-[#e6e8ec] pb-4">
                <div className="w-12 h-12 rounded-full bg-[#f4f4f4] flex items-center justify-center text-[#1a6860]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div className="text-sm text-[#717784] uppercase font-bold tracking-wider">Lokasi</div>
                  <div className="text-2xl font-bold font-nunito text-[#0a0a0a]">Alun Alun Wonosobo</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 border-b border-[#e6e8ec] pb-4">
                <div className="w-12 h-12 rounded-full bg-[#f4f4f4] flex items-center justify-center text-[#1a6860]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <div className="text-sm text-[#717784] uppercase font-bold tracking-wider">Kategori - 5K</div>
                  <div className="text-xl font-bold font-nunito text-[#0a0a0a]">Umum | Pelajar | Instansi Kesehatan</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 border-b border-[#e6e8ec] pb-4">
                <div className="w-12 h-12 rounded-full bg-[#f4f4f4] flex items-center justify-center text-[#1a6860]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M12 12h.01"></path><path d="M17 12h.01"></path><path d="M7 12h.01"></path></svg>
                </div>
                <div>
                  <div className="text-sm text-[#717784] uppercase font-bold tracking-wider mb-2">Harga Tiket</div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#1a6860] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm">Early Bird</span>
                      <span className="text-[#717784] text-sm sm:text-base line-through font-bold">Rp 150.000,-</span>
                    </div>
                    <div className="text-3xl font-black font-nunito text-[#8baa37]">Rp 140.000,-</div>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="/category" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1a6860] text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#8baa37] transition-colors duration-300 w-full sm:w-auto mt-6">
              Register Now
            </a>
          </div>
          
          <div className="w-full lg:w-auto flex-1 bg-[#f4f4f4] rounded-[2rem] p-6 sm:p-12 shadow-inner">
            <h3 className="text-3xl font-bold font-nunito text-[#1a6860] mb-8 border-b-2 border-[#8baa37] inline-block pb-2">Benefit</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-base sm:text-lg font-medium text-[#0a0a0a]">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#8baa37]"></span>Racepack Bag</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#8baa37]"></span>Waterstation</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#8baa37]"></span>Running Jersey</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#8baa37]"></span>Refreshment</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#8baa37]"></span>Bib</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#8baa37]"></span>Documentation</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#8baa37]"></span>Podium Prize</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#8baa37]"></span>Finisher Medal</li>
              <li className="flex items-center gap-3 col-span-1 sm:col-span-2"><span className="w-2 h-2 rounded-full bg-[#8baa37]"></span>Full DoorPrize</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SIZE CHART SECTION */}
      <section className="bg-[#093833] text-white px-[4%] sm:px-10 py-20 mx-2 sm:mx-4 rounded-[2rem] shadow-xl relative overflow-hidden">
        {/* Background Wayang pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none object-cover">
          <Image src="/line-art-jersey.webp" fill alt="" aria-hidden="true" className="object-cover" sizes="100vw" quality={60} priority />
        </div>
        
        <div className="scroll-reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-100 max-w-7xl mx-auto relative z-10">
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
