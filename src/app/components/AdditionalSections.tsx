"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function AdditionalSections() {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <div ref={containerRef} className="bg-white text-[#0a0a0a] font-poppins relative z-20 overflow-hidden">
      
      {/* EVENT INFO SECTION */}
      <section className="px-[4%] sm:px-10 py-16 sm:py-24 relative isolate">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
          
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
                  <div className="text-sm text-[#717784] uppercase font-bold tracking-wider">Harga Tiket</div>
                  <div className="text-2xl font-bold font-nunito text-[#8baa37]">Rp. 150.000,-</div>
                </div>
              </div>
            </div>
            
            <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1a6860] text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#8baa37] transition-colors duration-300 w-full sm:w-auto mt-6">
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
          <Image src="/line-art-jersey.webp" fill alt="" aria-hidden="true" className="object-cover" sizes="100vw" quality={60} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-nunito text-center mb-12 sm:mb-16 tracking-tight text-[#8baa37] px-4">
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
      <footer id="contact" className="bg-[#093833] text-white px-[4%] sm:px-10 py-14 sm:py-16 rounded-[2rem] mx-2 sm:mx-4 mt-3 mb-2 shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* CTA Band */}
          <div className="border-b border-white/15 pb-14 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8baa37]"></div>
                HKN26
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold mt-4 font-nunito leading-[0.92] tracking-tight">
                Ready to run?
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-[#093833] px-7 py-3.5 text-sm font-bold uppercase tracking-wide hover:bg-[#8baa37] hover:text-white transition-colors duration-300 group">
              Register Now
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
          </div>
          
          {/* Columns */}
          <div className="py-10 lg:py-14 grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 lg:gap-10">
            <div className="max-w-[20rem] col-span-2 lg:col-span-1 mb-8 lg:mb-0">
              <div className="flex items-center gap-2">
                <Image src="/logo-hkn-run.webp" width={280} height={112} alt="Logo" className="object-contain h-20 w-auto drop-shadow-lg" />
              </div>
              <p className="text-sm text-white/65 mt-4 leading-relaxed">
                The premium 5K running event in Wonosobo. Celebrate health, community, and pure adrenaline.
              </p>
              <address className="not-italic mt-6 text-sm text-white/80 flex flex-col gap-1">
                <a href="mailto:info@hknrun62.com" className="hover:text-white transition-colors">info@hknrun62.com</a>
                <a href="tel:+628123456789" className="hover:text-white transition-colors">+62 812 345 6789</a>
                <span className="text-white/55 mt-1">Alun Alun Wonosobo, ID</span>
              </address>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">Categories</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">5K Umum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">5K Pelajar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instansi Kesehatan</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">Event Info</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Route Map</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Racepack Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rules & FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">About HKN62</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sponsorships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/15 pt-8 pb-4 text-xs sm:text-sm text-white/60 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6 lg:gap-5">
            <div className="order-3 lg:order-1 mt-4 lg:mt-0">© 2026 HKN62 Fun Run. All rights reserved.</div>
            <div className="flex gap-6 lg:gap-5 order-1 lg:order-2">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">X</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-5 order-2 lg:order-3">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
