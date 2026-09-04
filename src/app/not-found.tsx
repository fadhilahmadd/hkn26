"use client";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 px-[4%] text-center">
      <div className="relative">
        <h1 className="text-[clamp(8rem,25vw,18rem)] leading-none font-black font-nunito tracking-tighter text-[#8baa37]/20 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-black font-nunito tracking-tight mb-4 text-white uppercase drop-shadow-lg">
            Off The <span className="text-[#8baa37]">Route!</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-md mx-auto mb-10">
            Looks like you took a wrong turn at the water station. This page is out of bounds for the 5K.
          </p>
          
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-[#8baa37] px-8 py-4 text-sm font-bold tracking-wide text-[#093833] uppercase transition-all duration-300 hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(139,170,55,0.3)] hover:shadow-[0_0_30px_rgba(139,170,55,0.6)]">
            Run Back Home
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
