"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (!isHome) {
    return (
      <div className="bg-[#0a0a0a]">
        <footer className="bg-[#093833] text-white/80 py-8 px-[4%] mt-auto z-10 relative rounded-[2rem] mx-2 sm:mx-4 mb-2 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6 lg:gap-5 text-sm">
          <div className="order-3 lg:order-1 mt-4 lg:mt-0">© 2026 HKN62 Fun Run. All rights reserved.</div>
          <div className="flex gap-6 lg:gap-5 order-1 lg:order-2">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-5 order-2 lg:order-3">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="bg-white pt-4 pb-4 overflow-hidden relative z-20">
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
          <Link href="/category" className="inline-flex items-center gap-2 rounded-full bg-white text-[#093833] px-7 py-3.5 text-sm font-bold uppercase tracking-wide hover:bg-[#8baa37] hover:text-white transition-colors duration-300 group">
            Register Now
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
        
        {/* Columns */}
        <div className="py-10 lg:py-14 grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 lg:gap-10">
          <div className="max-w-[20rem] col-span-2 lg:col-span-1 mb-8 lg:mb-0">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image src="/logo-hkn-run.webp" width={280} height={112} alt="Logo" className="object-contain h-20 w-auto drop-shadow-lg" />
              </Link>
            </div>
            <p className="text-sm text-white/65 mt-4 leading-relaxed">
              The premium 5K running event in Wonosobo. Celebrate health, community, and pure fun.
            </p>
            <address className="not-italic mt-6 text-sm text-white/80 flex flex-col gap-1">
              <a href="mailto:info@hknrun62.com" className="hover:text-white transition-colors">info@hknrun62.com</a>
              {/* <a href="tel:+628123456789" className="hover:text-white transition-colors">+62 812 345 6789</a> */}
              <span className="text-white/55 mt-1">Alun Alun Wonosobo, ID</span>
            </address>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">Categories</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/category" className="hover:text-white transition-colors">5K Umum</Link></li>
              <li><Link href="/category" className="hover:text-white transition-colors">5K Pelajar</Link></li>
              <li><Link href="/category" className="hover:text-white transition-colors">Instansi Kesehatan</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">Event Info</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/rules" className="hover:text-white transition-colors">Rules & Regulations</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/15 pt-8 pb-4 text-xs sm:text-sm text-white/60 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6 lg:gap-5">
          <div className="order-3 lg:order-1 mt-4 lg:mt-0">© 2026 HKN62 Fun Run. All rights reserved.</div>
          <div className="flex gap-6 lg:gap-5 order-1 lg:order-2">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-5 order-2 lg:order-3">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
