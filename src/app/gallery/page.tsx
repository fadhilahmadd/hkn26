"use client";
import React from "react";

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-[4%]">
      <div className="text-center">
        <div className="inline-block bg-[#8baa37] text-black px-6 py-2 skew-x-[-12deg] mb-5 shadow-[4px_4px_0px_#051f1c]">
          <span className="text-xs sm:text-xl italic uppercase font-black tracking-wider skew-x-[12deg] inline-block">
            Gallery
          </span>
        </div>
        <p className="text-2xl text-white/70">Coming Soon</p>
      </div>
    </div>
  );
}
