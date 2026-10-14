"use client";

import React from "react";
import Link from "next/link";

export default function ResultPage() {

  const categories = [
    { key: "umum", label: "5K UMUM", desc: "Kategori Terbuka (Pria & Wanita)" },
    { key: "pelajar", label: "5K PELAJAR", desc: "Kategori Siswa Aktif 10-17 Tahun" },
    { key: "kesehatan", label: "5K INSTANSI KESEHATAN", desc: "Kategori Pegawai / Nakes Faskes" },
  ];

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-20 px-[4%] max-w-5xl mx-auto text-white">
      {/* Top Badge */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block bg-[#8baa37] text-black px-6 py-2 skew-x-[-12deg] mb-5 shadow-[4px_4px_0px_#051f1c]">
          <span className="text-xs sm:text-sm italic uppercase font-black tracking-wider skew-x-[12deg] inline-block">
            Official Race Results
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-nunito tracking-tight text-white uppercase italic">
          RACE RESULTS <span className="text-[#8baa37]">HKN62</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-white/70 max-w-xl mx-auto">
          Catatan waktu resmi serta sertifikat elektronik (e-Certificate) finisher HKN62 Fun Run 2026.
        </p>
      </div>

      {/* Main Coming Soon Card */}
      <div className="bg-[#051f1c]/90 border border-white/15 rounded-3xl p-8 sm:p-14 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden mb-12">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8baa37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Animated Coming Soon Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#8baa37]/20 border border-[#8baa37]/40 text-[#8baa37] text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8baa37] animate-ping" />
            <span>Coming Soon</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black font-nunito text-white uppercase tracking-tight mb-4">
            Hasil Lomba Akan Diumumkan Pada Hari Perlombaan
          </h2>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8">
            Sistem pencatat waktu (Timing System) akan aktif saat perlombaan berlangsung pada <strong className="text-white">Minggu, 18 Oktober 2026</strong> di Alun-Alun Wonosobo. Seluruh hasil catatan waktu, peringkat podium juara, dan unduhan e-Certificate akan dipublikasikan di halaman ini.
          </p>

          {/* Event Schedule Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
            <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
              <span className="text-[11px] text-white/50 uppercase font-bold block">Tanggal</span>
              <span className="text-sm sm:text-base font-black font-nunito text-white mt-1 block">
                18 Oktober 2026
              </span>
            </div>
            <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
              <span className="text-[11px] text-white/50 uppercase font-bold block">Flag Off</span>
              <span className="text-sm sm:text-base font-black font-nunito text-[#8baa37] mt-1 block">
                06:00 WIB
              </span>
            </div>
            <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
              <span className="text-[11px] text-white/50 uppercase font-bold block">Lokasi Event</span>
              <span className="text-sm sm:text-base font-black font-nunito text-white mt-1 block">
                Alun-Alun Wonosobo
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#051f1c] hover:bg-[#8baa37] hover:text-black font-black font-nunito text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Kembali ke Beranda</span>
            </Link>

            <Link
              href="/#category"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/15 transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                <line x1="8" y1="2" x2="8" y2="18"></line>
                <line x1="16" y1="6" x2="16" y2="22"></line>
              </svg>
              <span>Lihat Rute 5K</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
