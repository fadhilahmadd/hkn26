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
            <a href="https://www.instagram.com/hknfunrun" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
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
        {/* Columns */}
        <div className="pb-10 lg:pb-14 grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 lg:gap-10">
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
              <a href="mailto:info@hknfunrun.com" className="hover:text-white transition-colors">info@hknfunrun.com</a>
              <div className="flex flex-col gap-1 mt-1 text-white/70">
                <a href="https://wa.me/6285331407300" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Harsono: 0853-3140-7300</a>
                <a href="https://wa.me/6281325072799" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Faiz: 0813-2507-2799</a>
              </div>
              <span className="text-white/55 mt-2">Alun Alun Wonosobo, ID</span>
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
              <li><Link href="/result" className="hover:text-white transition-colors">Result</Link></li>
              <li><Link href="/rules" className="hover:text-white transition-colors">Rules & Regulations</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/15 pt-8 pb-4 text-xs sm:text-sm text-white/60 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6 lg:gap-5">
          <div className="order-3 lg:order-1 mt-4 lg:mt-0">© 2026 HKN62 Fun Run. All rights reserved.</div>
          <div className="flex gap-6 lg:gap-5 order-1 lg:order-2">
            <a href="https://www.instagram.com/hknfunrun" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
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
