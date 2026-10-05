"use client";
import React from "react";

export default function CategoryPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-[4%] max-w-7xl mx-auto text-white">
      <div className="bg-[#1a6860]/20 border border-[#8baa37]/30 rounded-3xl p-8 md:p-12 backdrop-blur-md">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8 mb-8">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#8baa37]/20 text-[#8baa37] text-sm font-bold tracking-wider mb-4 border border-[#8baa37]/30">
              5K CATEGORY
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-nunito tracking-tight mb-2">
              Umum | Pelajar | Instansi Kesehatan
            </h1>
            <p className="text-xl text-white/70">HKN26 FUN RUN</p>
          </div>
          
          <div className="text-left md:text-right">
            <div className="flex flex-col items-start md:items-end mb-4">
              <div className="text-4xl md:text-5xl font-black text-[#8baa37]">Rp 150.000,-</div>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-400/30 px-4 py-1.5 text-sm font-bold tracking-wider text-red-400 uppercase">
                Sold Out
              </div>
            </div>
            <span aria-disabled="true" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-8 py-4 text-sm font-bold tracking-wide text-white/50 uppercase cursor-not-allowed select-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="10" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Closed
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Details */}
          <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
            <h3 className="text-lg font-bold mb-4 text-[#8baa37]">Event Details</h3>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/60">Open</span>
                <span className="font-semibold">All Age</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/60">Start Date</span>
                <span className="font-semibold">18 - 10 - 2026</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/60">Flag Off</span>
                <span className="font-semibold">-</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/60">Cut Off Time</span>
                <span className="font-semibold">1 jam 30 menit</span>
              </li>
              <li className="flex justify-between pb-2">
                <span className="text-white/60">Elevation Gain</span>
                <span className="font-semibold">-</span>
              </li>
            </ul>
          </div>

          {/* Facilities */}
          <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
            <h3 className="text-lg font-bold mb-4 text-[#8baa37]">Race Facility</h3>
            <ul className="grid grid-cols-1 gap-3">
              {['RACE JERSEY', 'BIB NUMBER', 'RACEPACK BAG', 'WATER STATION', 'REFRESHMENT', 'MEDIC', 'FINISHER MEDAL'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8baa37]"></div>
                  <span className="font-medium text-sm tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Route */}
          <div className="bg-black/20 rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center text-center min-h-[250px]">
            <h3 className="text-lg font-bold mb-4 text-[#8baa37]">HKN26 ROUTE 5K</h3>
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="text-xl font-medium text-white/50 italic">To be Announced</p>
          </div>
        </div>

      </div>
    </div>
  );
}
