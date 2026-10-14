"use client";

import React from "react";
import Link from "next/link";
import { ROUTE_5K_META } from "../data/routeData";

export default function CategoryPreviewPage() {
  const categories = [
    {
      title: "5K UMUM",
      badge: "Kategori Terbuka",
      desc: "Peserta Warga Negara Indonesia (WNI) dan Warga Negara Asing (WNA) usia 17 tahun ke atas.",
      price: "Rp 150.000,-",
    },
    {
      title: "5K PELAJAR",
      badge: "Kategori Khusus",
      desc: "Khusus pelajar aktif usia 10-17 tahun (Wajib melampirkan kartu pelajar yang valid).",
      price: "Rp 150.000,-",
    },
    {
      title: "5K INSTANSI KESEHATAN",
      badge: "Kategori Faskes / Nakes",
      desc: "Khusus pegawai & tenaga medis pada Fasilitas Pelayanan Kesehatan (SIP / ID Card).",
      price: "Rp 150.000,-",
    },
  ];

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-20 px-[4%] max-w-6xl mx-auto text-white">
      {/* Header & Badges */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-block bg-[#8baa37] text-black px-5 py-1.5 skew-x-[-12deg] mb-4 shadow-[4px_4px_0px_#051f1c]">
          <span className="text-xs sm:text-sm italic uppercase font-black tracking-wider skew-x-[12deg] inline-block">
            Category & Route Overview
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black font-nunito tracking-tight text-white uppercase italic">
          HKN62 <span className="text-[#8baa37]">5K Categories</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-white/70">
          18 OKTOBER 2026 &bull; ALUN-ALUN WONOSOBO &bull; 5.2 KM
        </p>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-[#051f1c]/80 border border-white/10 hover:border-[#8baa37]/50 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-md shadow-xl transition-all duration-300"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#8baa37]/20 text-[#8baa37] text-xs font-bold uppercase tracking-wider mb-3">
                {cat.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-nunito text-white tracking-tight">
                {cat.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                {cat.desc}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xl font-black text-[#8baa37] font-nunito">
                  {cat.price}
                </div>
                <div className="text-[10px] text-red-400 font-bold uppercase tracking-wider mt-0.5">
                  Sold Out / Closed
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white/50 text-xs font-bold uppercase tracking-wide">
                Ditutup
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Route Quick Summary & Action Card */}
      <div className="bg-[#1a6860]/20 border border-[#8baa37]/30 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/10 pb-8 mb-8">
          <div>
            <span className="text-xs uppercase font-bold text-[#8baa37] tracking-wider">
              Spesifikasi Rute Resmi
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-nunito text-white mt-1">
              RUTE 5K - ALUN-ALUN WONOSOBO
            </h3>
            <p className="text-sm text-white/70 mt-1 max-w-xl">
              Rute beraspal mengitari pusat Wonosobo dengan kontur elevasi yang ramah pelari pemula hingga atlet.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Primary CTA: Jump to interactive map on homepage */}
            <Link
              href="/#category"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#8baa37] text-black font-black font-nunito text-sm uppercase tracking-wider shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                <line x1="8" y1="2" x2="8" y2="18"></line>
                <line x1="16" y1="6" x2="16" y2="22"></line>
              </svg>
              <span>Buka Peta & Elevasi Interaktif</span>
            </Link>
          </div>
        </div>

        {/* Specs Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-black/30 border border-white/5 rounded-2xl p-4">
            <div className="text-[11px] text-white/50 uppercase font-bold">Total Jarak</div>
            <div className="text-xl sm:text-2xl font-black font-nunito text-white mt-1">
              {ROUTE_5K_META.distance}
            </div>
            <div className="text-[10px] text-white/40 mt-0.5">5.200 meter</div>
          </div>

          <div className="bg-black/30 border border-white/5 rounded-2xl p-4">
            <div className="text-[11px] text-white/50 uppercase font-bold">Elevation Gain</div>
            <div className="text-xl sm:text-2xl font-black font-nunito text-[#8baa37] mt-1">
              {ROUTE_5K_META.elevationGain}
            </div>
            <div className="text-[10px] text-white/40 mt-0.5">Loss: {ROUTE_5K_META.elevationLoss}</div>
          </div>

          <div className="bg-black/30 border border-white/5 rounded-2xl p-4">
            <div className="text-[11px] text-white/50 uppercase font-bold">Cut Off Time</div>
            <div className="text-xl sm:text-2xl font-black font-nunito text-white mt-1">
              {ROUTE_5K_META.cutOffTime}
            </div>
            <div className="text-[10px] text-white/40 mt-0.5">Mulai: 06:00 WIB</div>
          </div>

          <div className="bg-black/30 border border-white/5 rounded-2xl p-4">
            <div className="text-[11px] text-white/50 uppercase font-bold">Start & Finish</div>
            <div className="text-lg sm:text-xl font-bold font-nunito text-white mt-1">
              Alun-Alun
            </div>
            <div className="text-[10px] text-white/40 mt-0.5">Wonosobo, Jawa Tengah</div>
          </div>
        </div>
      </div>
    </div>
  );
}
