"use client";

import React from "react";
import Image from "next/image";

interface Sponsor {
  name: string;
  src: string;
}

const PLATINUM_SPONSORS: Sponsor[] = [
  { name: "Bank Jateng", src: "/sponsor/platinum/bank-jateng.jpeg" },
  { name: "RS PKU Muhammadiyah Wonosobo", src: "/sponsor/platinum/rs-pku-muhammadiyah-wonosobo.png" },
];

const GOLD_SPONSORS: Sponsor[] = [
  { name: "Kalbe Farma", src: "/sponsor/gold/Kalbe_Farma.png" },
  { name: "Pratapa Nirmala", src: "/sponsor/gold/Pratapa-Nirmala.png" },
  { name: "Grab", src: "/sponsor/gold/grab.png" },
  { name: "Smartfren", src: "/sponsor/gold/smartfren.jpg" },
  { name: "Sanbe Farma", src: "/sponsor/gold/sanbe.jpg" },
  { name: "PT Prima Medika Raya", src: "/sponsor/gold/pt-prima-medika-raya.jpg" },
  { name: "Rank Sports Wonosobo", src: "/sponsor/gold/rank-sports-wonosobo.jpg" },
  { name: "Dr. Laundry", src: "/sponsor/gold/dr-laundry.jpg" },
  { name: "Dr. Shoes", src: "/sponsor/gold/dr-shoes.jpg" },
];

const SILVER_HEALTH_GOV_SPONSORS: Sponsor[] = [
  { name: "Dinas Kesehatan Kabupaten Wonosobo", src: "/sponsor/silver/pemerintahan/Dinas-Kesehatan-Kabupaten-Wonosobo-02.jpg" },
  { name: "RSUD K.R.T. Setjonegoro Wonosobo", src: "/sponsor/silver/pemerintahan/krt-setjonegoro-wonosobo.png" },
  { name: "PMI Kabupaten Wonosobo", src: "/sponsor/silver/pemerintahan/pmi-kab-wsb.jpeg" },
  { name: "RS AIS Wonosobo", src: "/sponsor/silver/pemerintahan/rs-aiss-wonosobo.jpeg" },
  { name: "RSI Wonosobo", src: "/sponsor/silver/pemerintahan/rsi-wonosobo.png" },
  { name: "RSIA Adina Wonosobo", src: "/sponsor/silver/pemerintahan/rsia-adina-wonosobo.png" },
];

const SILVER_PARTNER_SPONSORS: Sponsor[] = [
  { name: "Isoplus", src: "/sponsor/silver/umum/isoplus.jpg" },
  { name: "Madu TJ", src: "/sponsor/silver/umum/madu-tj.png" },
  { name: "BPJS", src: "/sponsor/silver/umum/logo-bpjs.png" },
  { name: "Bernofarm", src: "/sponsor/silver/umum/BERNOFARM.png" },
  { name: "Glomeda", src: "/sponsor/silver/umum/GLOMEDA.png" },
  { name: "Amarox", src: "/sponsor/silver/umum/amarox.jpg" },
  { name: "AMH", src: "/sponsor/silver/umum/amh.jpeg" },
  { name: "Lapi Laboratories", src: "/sponsor/silver/umum/lapi.png" },
  { name: "PT Perkebunan Tambi", src: "/sponsor/silver/umum/tambi.jpg" },
  { name: "Perumda Air Minum Tirta Aji", src: "/sponsor/silver/umum/tirta-aji.png" },
  { name: "PT BPR Bank Wonosobo", src: "/sponsor/silver/umum/pt-bpr-bank-wsb.jpeg" },
  { name: "Hotel Surya Asia", src: "/sponsor/silver/umum/hotel-surya-asia.jpg" },
  { name: "Carica Gemilang", src: "/sponsor/silver/umum/carica-gemilang.jpg" },
  { name: "Baboon Snack", src: "/sponsor/silver/umum/baboon-snack.jpg" },
  { name: "Sunat Jagoan", src: "/sponsor/silver/umum/sunat-jagoan.jpg" },
  { name: "Andson Sarana Bagus", src: "/sponsor/silver/umum/andson-sarana-bagus.webp" },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="px-[4%] sm:px-10 py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-block bg-[#8baa37] text-black px-5 py-1.5 skew-x-[-12deg] mb-4 shadow-[4px_4px_0px_#051f1c]">
            <span className="text-xs sm:text-sm italic uppercase font-black tracking-wider skew-x-[12deg] inline-block">
              Official Partners & Sponsors
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-nunito tracking-tight text-[#051f1c] uppercase italic">
            SPONSOR & <span className="text-[#8baa37]">DUKUNGAN</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#555f6d] leading-relaxed max-w-2xl mx-auto">
            Apresiasi dan terima kasih mendalam kepada seluruh mitra sponsor dan instansi pendukung yang berkontribusi dalam menyukseskan gelaran akbar HKN62 Fun Run Wonosobo 2026.
          </p>
        </div>

        {/* 1. PLATINUM TIER */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px bg-gradient-to-r from-transparent via-[#051f1c]/20 to-[#051f1c]/40 flex-1 max-w-xs" />
              <span className="w-2 h-2 rounded-full bg-slate-600 animate-pulse" />
            <span className="h-px bg-gradient-to-l from-transparent via-[#051f1c]/20 to-[#051f1c]/40 flex-1 max-w-xs" />
          </div>

          <div className="flex justify-center gap-3 sm:gap-5">
            {PLATINUM_SPONSORS.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-full max-w-md sm:max-w-lg bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-slate-400 transition-all duration-300 flex items-center justify-center group"
              >
                <div className="relative w-full h-28 sm:h-36">
                  <Image
                    src={sponsor.src}
                    alt={sponsor.name}
                    fill
                    loading="lazy"
                    quality={75}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 460px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. GOLD TIER */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px bg-gradient-to-r from-transparent via-amber-200 to-amber-400 flex-1 max-w-xs" />
              <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="h-px bg-gradient-to-l from-transparent via-amber-200 to-amber-400 flex-1 max-w-xs" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 max-w-6xl mx-auto">
            {GOLD_SPONSORS.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-1rem)] lg:w-48 bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/70 shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-300 flex items-center justify-center group min-h-[95px] sm:min-h-[110px]"
                title={sponsor.name}
              >
                <div className="relative w-full h-14 sm:h-16">
                  <Image
                    src={sponsor.src}
                    alt={sponsor.name}
                    fill
                    loading="lazy"
                    quality={75}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SILVER TIER */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-zinc-400 flex-1 max-w-xs" />
              <span className="w-2 h-2 rounded-full bg-zinc-400" />
            <span className="h-px bg-gradient-to-l from-transparent via-zinc-200 to-zinc-400 flex-1 max-w-xs" />
          </div>

          {/* Subcategory A: Instansi & Faskes - start and justify center */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-5xl mx-auto">
              {SILVER_HEALTH_GOV_SPONSORS.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-36 lg:w-40 bg-white rounded-xl p-3 border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-[#8baa37] transition-all duration-300 flex items-center justify-center group min-h-[80px] sm:min-h-[90px]"
                  title={sponsor.name}
                >
                  <div className="relative w-full h-11 sm:h-12">
                    <Image
                      src={sponsor.src}
                      alt={sponsor.name}
                      fill
                      loading="lazy"
                      quality={75}
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 110px, (max-width: 1024px) 140px, 160px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subcategory B: Mitra & Sponsor Umum */}
          <div>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-6xl mx-auto">
              {SILVER_PARTNER_SPONSORS.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="w-[calc(50%-0.5rem)] sm:w-[calc(25%-0.75rem)] md:w-32 lg:w-36 bg-white rounded-xl p-3 border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-[#8baa37] transition-all duration-300 flex items-center justify-center group min-h-[75px] sm:min-h-[85px]"
                  title={sponsor.name}
                >
                  <div className="relative w-full h-10 sm:h-11">
                    <Image
                      src={sponsor.src}
                      alt={sponsor.name}
                      fill
                      loading="lazy"
                      quality={75}
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100px, (max-width: 1024px) 130px, 145px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
