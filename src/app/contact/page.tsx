import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | HKN62 FUN RUN 2026",
  description: "Get in touch with the HKN62 Fun Run 2026 committee.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-[4%] sm:px-10 relative z-10 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-black font-nunito text-white mb-6 tracking-tight uppercase">
            Contact <span className="text-[#8baa37]">Us</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about the event, registration, or sponsorship? Reach out to our committee members directly.
          </p>
        </div>

        {/* Social Media */}
        <div className="bg-[#093833] rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Background Wayang pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none object-cover">
            <Image src="/line-art-jersey.webp" fill alt="" aria-hidden="true" className="object-cover" sizes="100vw" quality={60} priority />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8baa37]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <svg className="w-12 h-12 text-white mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-nunito">Follow Us on Instagram</h3>
            <p className="text-white/80 mb-8 max-w-md mx-auto">Get the latest updates, event teasers, and sneak peeks behind the scenes!</p>
            <a 
              href="https://www.instagram.com/hknfunrun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#093833] px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#8baa37] hover:text-white transition-colors shadow-xl"
            >
              @hknfunrun
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
