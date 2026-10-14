"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { RoutePoint, ROUTE_5K_META } from "../data/routeData";
import ElevationProfile from "./ElevationProfile";

// Dynamic import for Leaflet map to ensure strictly client-side execution
const RouteMap = dynamic(() => import("./RouteMap.client"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[360px] sm:h-[480px] lg:h-[580px] rounded-2xl md:rounded-3xl bg-[#051f1c] border border-white/10 flex items-center justify-center text-white/50 text-xs tracking-widest uppercase font-bold animate-pulse">
      Memuat Peta Rute 5K...
    </div>
  ),
});

export type CategoryKey = "umum" | "pelajar" | "kesehatan";

interface CategoryInfo {
  key: CategoryKey;
  label: string;
  sublabel: string;
  audience: string;
  price: string;
  isSoldOut: boolean;
  facilities: string[];
}

const CATEGORIES: CategoryInfo[] = [
  {
    key: "umum",
    label: "5K UMUM",
    sublabel: "Kategori Terbuka",
    audience: "Pria & Wanita WNI/WNA, Usia 17 tahun ke atas",
    price: "Rp 150.000,-",
    isSoldOut: true,
    facilities: [
      "RACE JERSEY EXCLUSIVE",
      "BIB NUMBER DENGAN TIMING CHIP",
      "MEDALI FINISHER UNTUK SELURUH FINISHER",
      "RACEPACK BAG RESMI HKN62",
      "WATER STATION (KM 2.5 & FINISH)",
      "REFRESHMENT & BUAH SETELAH FINISH",
      "TIM MEDIS & AMBULANS SIAGA",
      "ASURANSI KESELAMATAN PESERTA",
      "DOKUMENTASI FOTO PERLOMBAAN",
      "DOORPRIZE & HIBURAN UTAMA",
    ],
  },
  {
    key: "pelajar",
    label: "5K PELAJAR",
    sublabel: "Kategori Khusus Siswa",
    audience: "Pelajar Aktif rentang usia 10-17 tahun (Wajib Kartu Pelajar)",
    price: "Rp 150.000,-",
    isSoldOut: true,
    facilities: [
      "RACE JERSEY EXCLUSIVE",
      "BIB NUMBER DENGAN TIMING CHIP",
      "MEDALI FINISHER UNTUK SELURUH FINISHER",
      "RACEPACK BAG RESMI HKN62",
      "WATER STATION (KM 2.5 & FINISH)",
      "REFRESHMENT & BUAH SETELAH FINISH",
      "TIM MEDIS & AMBULANS SIAGA",
      "ASURANSI KESELAMATAN PESERTA",
      "DOKUMENTASI FOTO PERLOMBAAN",
      "DOORPRIZE & HIBURAN UTAMA",
    ],
  },
  {
    key: "kesehatan",
    label: "5K INSTANSI KESEHATAN",
    sublabel: "Kategori Faskes / Nakes",
    audience: "Karyawan / Pegawai / Nakes Fasilitas Pelayanan Kesehatan",
    price: "Rp 150.000,-",
    isSoldOut: true,
    facilities: [
      "RACE JERSEY EXCLUSIVE",
      "BIB NUMBER DENGAN TIMING CHIP",
      "MEDALI FINISHER UNTUK SELURUH FINISHER",
      "RACEPACK BAG RESMI HKN62",
      "WATER STATION (KM 2.5 & FINISH)",
      "REFRESHMENT & BUAH SETELAH FINISH",
      "TIM MEDIS & AMBULANS SIAGA",
      "ASURANSI KESELAMATAN PESERTA",
      "DOKUMENTASI FOTO PERLOMBAAN",
      "DOORPRIZE & HIBURAN UTAMA",
    ],
  },
];

export default function CategoryRouteSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("umum");
  const [activePoint, setActivePoint] = useState<RoutePoint | null>(null);

  const currentCategory = CATEGORIES.find((c) => c.key === selectedCategory) || CATEGORIES[0];

  const specs = [
    {
      label: "Jarak Tempuh",
      value: ROUTE_5K_META.distance,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      label: "Flag Off",
      value: "06:00 WIB",
      subValue: "Minggu, 18 Okt 2026",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </svg>
      ),
    },
    {
      label: "Cut Off Time (COT)",
      value: ROUTE_5K_META.cutOffTime,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 14 10"></polyline>
        </svg>
      ),
    },
    {
      label: "Elevation Gain",
      value: ROUTE_5K_META.elevationGain,
      subValue: `Loss: ${ROUTE_5K_META.elevationLoss}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
    },
    {
      label: "Rentang Elevasi",
      value: `${ROUTE_5K_META.minElevation} - ${ROUTE_5K_META.maxElevation}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3v18"></path>
          <path d="M16 3v18"></path>
          <path d="M3 8h18"></path>
          <path d="M3 16h18"></path>
        </svg>
      ),
    },
    {
      label: "Start & Finish",
      value: ROUTE_5K_META.startLocation,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
  ];

  return (
    <section id="category" className="relative py-12 md:py-20 overflow-hidden text-white">
      {/* Section Header with UGM Trail Run Style Skewed Pill */}
      <div className="relative z-10 max-w-5xl mx-auto mb-12 text-center px-4">
        <div className="inline-block bg-[#8baa37] text-black px-6 py-2 skew-x-[-12deg] mb-6 shadow-[4px_4px_0px_#051f1c]">
          <p className="text-xs sm:text-sm md:text-base italic uppercase font-black tracking-wider skew-x-[12deg]">
            Race Categories & Route
          </p>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-nunito text-white uppercase italic tracking-tighter drop-shadow-2xl">
          CHOOSE YOUR <span className="text-[#8baa37]">CATEGORY</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
          Jelajahi keindahan rute 5K di sekeliling Kota Wonosobo dengan udara pegunungan yang sejuk.
          Unduh rute resmi GPX dan persiapkan performa terbaik Anda.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Category Tabs (UGM Trail Run Style) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          {CATEGORIES.map((cat) => {
            const isSelected = cat.key === selectedCategory;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`relative px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-nunito font-black uppercase tracking-tight text-sm sm:text-base transition-all duration-300 transform cursor-pointer ${
                  isSelected
                    ? "bg-[#8baa37] text-black shadow-[0_0_25px_rgba(139,170,55,0.45)] scale-105 border-2 border-[#8baa37]"
                    : "bg-[#051f1c]/80 text-white/80 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span className="block">{cat.label}</span>
                <span className={`block text-[10px] sm:text-xs font-semibold ${isSelected ? "text-black/80" : "text-white/50"}`}>
                  {cat.sublabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Header Card: Price, Target Audience, and Download GPX CTA */}
        <div className="bg-[#051f1c]/90 border border-white/15 rounded-3xl p-6 sm:p-10 mb-8 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#8baa37]/20 border border-[#8baa37]/30 text-[#8baa37] text-xs font-bold uppercase tracking-wider mb-3">
                {currentCategory.label} • 5 KILOMETERS
              </div>
              <h3 className="text-2xl sm:text-4xl font-black font-nunito text-white tracking-tight">
                {currentCategory.sublabel}
              </h3>
              <p className="text-sm sm:text-base text-white/70 mt-1">
                {currentCategory.audience}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-col items-start lg:items-end">
                <div className="text-3xl sm:text-4xl font-black text-[#8baa37] font-nunito">
                  {currentCategory.price}
                </div>
                <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-red-500/10 border border-red-500/30 px-3 py-1 text-xs font-bold text-red-400 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  Sold Out / Closed
                </div>
              </div>

              {/* Download GPX Button (Prominent UGM UX) */}
              <a
                href={ROUTE_5K_META.gpxFile}
                download="RUTE-5K-HKN-FUN-RUN-2026.gpx"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-[#051f1c] hover:bg-[#8baa37] hover:text-black font-black font-nunito text-sm uppercase tracking-wider shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Unduh File GPX</span>
              </a>
            </div>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="bg-black/30 border border-white/5 rounded-2xl p-4 flex flex-col justify-between hover:border-[#8baa37]/40 transition-colors"
              >
                <div className="text-[#8baa37] mb-2">{item.icon}</div>
                <div>
                  <div className="text-[11px] text-white/50 uppercase font-semibold">
                    {item.label}
                  </div>
                  <div className="text-sm sm:text-base font-bold font-nunito text-white mt-0.5">
                    {item.value}
                  </div>
                  {item.subValue && (
                    <div className="text-[10px] text-white/40 mt-0.5">{item.subValue}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Map & Elevation Profile Container */}
        <div className="space-y-6 mb-12">
          {/* Leaflet Map with OpenStreetMap */}
          <RouteMap activePoint={activePoint} />

          {/* Synchronized Elevation Profile Chart */}
          <ElevationProfile
            activeHoverPoint={activePoint}
            onHoverPoint={(pt) => setActivePoint(pt)}
          />
        </div>

        {/* Race Facilities & Benefits (UGM Trail Run Style) */}
        <div className="bg-[#051f1c]/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <h3 className="text-2xl font-black font-nunito uppercase tracking-tight text-white">
                Fasilitas & <span className="text-[#8baa37]">Benefit Peserta</span>
              </h3>
              <p className="text-sm text-white/60">
                Setiap peserta resmi {currentCategory.label} berhak mendapatkan paket lomba berikut:
              </p>
            </div>
            <div className="text-xs bg-[#8baa37]/20 border border-[#8baa37]/30 text-[#8baa37] px-4 py-2 rounded-full font-bold uppercase">
              Semua Kategori 5K
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-black/20 border border-white/5 rounded-xl p-3.5 hover:border-[#8baa37]/30 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#8baa37]/20 text-[#8baa37] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">
                  {facility}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
