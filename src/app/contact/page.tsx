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

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col items-center text-center transition-all hover:bg-white/10 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-[#8baa37]/20 flex items-center justify-center mb-6 text-[#8baa37]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-nunito">Harsono</h3>
            <p className="text-white/60 mb-6 uppercase tracking-widest text-xs font-bold">Committee Member</p>
            <a 
              href="https://wa.me/6285331407300" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-[#20b858] transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              Chat 085331407300
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col items-center text-center transition-all hover:bg-white/10 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-[#8baa37]/20 flex items-center justify-center mb-6 text-[#8baa37]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-nunito">Faiz</h3>
            <p className="text-white/60 mb-6 uppercase tracking-widest text-xs font-bold">Committee Member</p>
            <a 
              href="https://wa.me/6281325072799" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-[#20b858] transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              Chat 081325072799
            </a>
          </div>

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
