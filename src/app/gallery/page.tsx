"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Info, ExternalLink, Copy, Check, Sparkles } from "lucide-react";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// ============================================================================
// TESTING / PREVIEW TOGGLE
// - Ganti nilai ini ke `true` jika ingin langsung melihat tampilan Galeri yang SUDAH RILIS.
// - Saat `false`, halaman ini akan otomatis berganti ke Galeri Rilis tepat pada 18 Oktober 2026 pukul 09:00 WIB.
// - Tips: Anda juga dapat menambahkan '?preview=true' pada URL (contoh: /gallery?preview=true) untuk uji coba langsung tanpa ubah kode!
// ============================================================================
const FORCE_OPEN = false; // <-- UBAH KE true UNTUK CEK UI RILIS SEKARANG

// Target Waktu Rilis: 18 Oktober 2026, 09:00:00 WIB (GMT+7)
const RELEASE_DATE_ISO = "2026-10-18T09:00:00+07:00";
const RELEASE_TIMESTAMP = new Date(RELEASE_DATE_ISO).getTime();

interface GalleryItem {
  id: string;
  title: string;
  photographer?: string;
  url: string;
  tag?: string;
  badgeColor?: string;
}

interface GallerySection {
  number: string;
  title: string;
  items: GalleryItem[];
}

const GALLERY_DATA: GallerySection[] = [
  {
    number: "01",
    title: "RACE PACK",
    items: [
      {
        id: "racepack",
        title: "Dokumentasi Race Pack Collection",
        url: "https://photos.app.goo.gl/WWpmpxTPh7qr9Ett6",
        tag: "Race Pack",
        badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      },
    ],
  },
  {
    number: "02",
    title: "START & FINISH",
    items: [
      {
        id: "flag-off",
        title: "FLAG OFF",
        photographer: "@kicker.photograph",
        url: "https://photos.app.goo.gl/DoS75VEBbzbr6Yuc6",
        tag: "Flag Off",
        badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
      },
      {
        id: "start-line",
        title: "START LINE",
        photographer: "@ridloakbark",
        url: "https://photos.app.goo.gl/rqxAEFQu6VMtP7Qk8",
        tag: "Start Line",
        badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      },
      {
        id: "finish-line",
        title: "FINISH LINE",
        photographer: "@kicker.photograph",
        url: "https://photos.app.goo.gl/bDWBoWF5kJePUeL4A",
        tag: "Finish Line",
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      },
    ],
  },
  {
    number: "03",
    title: "CHECKPOINT & RACE ROUTE",
    items: [
      {
        id: "km-01",
        title: "KM 01 — Kantor Bupati",
        photographer: "@mf_photographyx",
        url: "https://photos.app.goo.gl/BuGE751XzhozsBoR8",
        tag: "KM 01",
        badgeColor: "bg-[#8baa37]/20 text-[#8baa37] border-[#8baa37]/30",
      },
      {
        id: "km-02",
        title: "KM 02 — Taman Plasa",
        photographer: "@ykp_photograph",
        url: "https://photos.app.goo.gl/VsuZ2CuAfrbyndvs9",
        tag: "KM 02",
        badgeColor: "bg-[#8baa37]/20 text-[#8baa37] border-[#8baa37]/30",
      },
      {
        id: "km-2-5",
        title: "KM 2,5 — Sudagaran",
        photographer: "@ceritakanlari",
        url: "https://photos.app.goo.gl/sW3jufgMxWxKSmbC8",
        tag: "KM 2.5",
        badgeColor: "bg-[#8baa37]/20 text-[#8baa37] border-[#8baa37]/30",
      },
      {
        id: "km-3-5",
        title: "KM 3,5 — Honggoderpo",
        photographer: "@konbalbalan",
        url: "https://photos.app.goo.gl/Fu1iSwHyHmAEzDPN8",
        tag: "KM 3.5",
        badgeColor: "bg-[#8baa37]/20 text-[#8baa37] border-[#8baa37]/30",
      },
      {
        id: "km-04-sa",
        title: "KM 04 — Surya Asia",
        photographer: "@ceritakanlari",
        url: "https://photos.app.goo.gl/Nqbgz6wktgF9cb6T8",
        tag: "KM 04",
        badgeColor: "bg-[#8baa37]/20 text-[#8baa37] border-[#8baa37]/30",
      },
      {
        id: "km-04-tp",
        title: "KM 04 — Taman Plasa",
        photographer: "@ykp_photograph",
        url: "https://photos.app.goo.gl/z4kjrQTdFCDy8SyH9",
        tag: "KM 04",
        badgeColor: "bg-[#8baa37]/20 text-[#8baa37] border-[#8baa37]/30",
      },
      {
        id: "km-4-5-bca",
        title: "KM 4,5 — BCA",
        photographer: "@mf_photographyx",
        url: "https://photos.app.goo.gl/UuVGWSYMFmciwAkd7",
        tag: "KM 4.5",
        badgeColor: "bg-[#8baa37]/20 text-[#8baa37] border-[#8baa37]/30",
      },
      {
        id: "km-4-5-alun",
        title: "KM 4,5 — Alun-Alun",
        photographer: "@ridloakbark",
        url: "https://photos.app.goo.gl/XKep9Aeuv7MicwTW7",
        tag: "KM 4.5",
        badgeColor: "bg-[#8baa37]/20 text-[#8baa37] border-[#8baa37]/30",
      },
    ],
  },
  {
    number: "04",
    title: "SPECIAL SELECTION",
    items: [
      {
        id: "best-of",
        title: "THE BEST OF HKN RUN",
        url: "https://photos.app.goo.gl/kSzv2QYU7txPv6fL8",
        tag: "Pilihan Terbaik",
        badgeColor: "bg-amber-400/25 text-amber-300 border-amber-400/50",
      },
    ],
  },
  {
    number: "05",
    title: "MOMENT AFTER RACE",
    items: [
      {
        id: "after-kicker",
        title: "After Race",
        photographer: "@kicker.photograph",
        url: "https://photos.app.goo.gl/C5aZvYvgqBFi1HXa9",
      },
      {
        id: "after-ridlo",
        title: "After Race",
        photographer: "@ridloakbark",
        url: "https://photos.app.goo.gl/zhWD1B5dGTECyXjs5",
      },
      {
        id: "after-ykp",
        title: "After Race",
        photographer: "@ykp_photograph",
        url: "https://photos.app.goo.gl/uaDtzpXHAe8Rqss1A",
      },
      {
        id: "after-mf",
        title: "After Race",
        photographer: "@mf_photographyx",
        url: "https://photos.app.goo.gl/wHLVKaWDktshjc5x5",
      },
      {
        id: "after-konbalbalan",
        title: "After Race",
        photographer: "@konbalbalan",
        url: "https://photos.app.goo.gl/UyyuKHXBzizW6HLd6",
      },
      {
        id: "after-ceritakanlari",
        title: "After Race",
        photographer: "@ceritakanlari",
        url: "https://photos.app.goo.gl/Ch2rkURnZdQZUygM6",
      },
    ],
  },
  {
    number: "06",
    title: "CEREMONY & PODIUM",
    items: [
      {
        id: "ceremony",
        title: "Dokumentasi Sambutan & Podium",
        url: "https://photos.app.goo.gl/VHBKgscPZw3kqwHV7",
        tag: "Ceremony & Podium",
        badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      },
    ],
  },
  {
    number: "07",
    title: "TEAM & OFFICIAL",
    items: [
      {
        id: "team-official",
        title: "Dokumentasi Tim & Official HKN Run 2026",
        url: "https://photos.app.goo.gl/u6WFoNwTpbht97sE6",
        tag: "Tim & Official",
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      },
    ],
  },
];

const emptySubscribe = () => () => {};

export default function GalleryPage() {
  const isClient = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [isUnlocked, setIsUnlocked] = useState(FORCE_OPEN);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const checkStatus = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const isPreview = urlParams.get("preview") === "true";

      const now = Date.now();
      const diff = RELEASE_TIMESTAMP - now;

      if (FORCE_OPEN || isPreview || diff <= 0) {
        setIsUnlocked(true);
      } else {
        setIsUnlocked(false);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-20 px-[4%] max-w-6xl mx-auto text-white">
      {/* Header Badge & Title */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-block bg-[#8baa37] text-black px-6 py-2 skew-x-[-12deg] mb-5 shadow-[4px_4px_0px_#051f1c]">
          <span className="text-xs sm:text-sm italic uppercase font-black tracking-wider skew-x-[12deg] inline-block">
            Official Photo Documentation
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-nunito tracking-tight text-white uppercase italic">
          HKN RUN <span className="text-[#8baa37]">2026</span>
        </h1>
        <p className="mt-2 text-base sm:text-xl font-bold italic tracking-wide text-white/90">
          Take Your Healthy Step!
        </p>
      </div>

      {/* CONDITIONAL RENDER: BEFORE RELEASE COUNTDOWN VS RELEASED GALLERY */}
      {!isClient ? (
        // Hydration placeholder
        <div className="bg-[#051f1c]/80 border border-white/10 rounded-3xl p-12 text-center">
          <div className="w-8 h-8 border-2 border-[#8baa37] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/60 text-sm">Memuat informasi dokumentasi...</p>
        </div>
      ) : !isUnlocked ? (
        // ====================================================================
        // STATE 1: BEFORE RELEASE (COUNTDOWN & WAITING ROOM)
        // ====================================================================
        <div className="space-y-8">
          {/* Main Announcement Card */}
          <div className="bg-[#051f1c]/90 border border-white/15 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8baa37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-black font-nunito text-white uppercase tracking-tight mb-4">
                Dokumentasi Resmi Dibuka 18 Oktober 2026
              </h2>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                Seluruh folder foto resmi HKN Run 2026 akan dibuka secara serentak pada{" "}
                <strong className="text-white">Minggu, 18 Oktober 2026 berkisar di jam 09:00</strong>{" "}
                setelah proses seleksi dan kurasi foto selesai dilakukan oleh tim fotografer kami.
              </p>

              {/* Countdown Digits (Fixed Centered Layout) */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto mb-8">
                {timeLeft.days > 0 && (
                  <div className="min-w-[76px] sm:min-w-[96px] flex-1 max-w-[120px] bg-black/40 border border-white/10 rounded-2xl p-4 text-center">
                    <span className="text-2xl sm:text-4xl font-black font-nunito text-[#8baa37] block">
                      {String(timeLeft.days).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/50 uppercase font-bold tracking-wider mt-1 block">
                      Hari
                    </span>
                  </div>
                )}
                <div className="min-w-[76px] sm:min-w-[96px] flex-1 max-w-[120px] bg-black/40 border border-white/10 rounded-2xl p-4 text-center">
                  <span className="text-2xl sm:text-4xl font-black font-nunito text-[#8baa37] block">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] sm:text-xs text-white/50 uppercase font-bold tracking-wider mt-1 block">
                    Jam
                  </span>
                </div>
                <div className="min-w-[76px] sm:min-w-[96px] flex-1 max-w-[120px] bg-black/40 border border-white/10 rounded-2xl p-4 text-center">
                  <span className="text-2xl sm:text-4xl font-black font-nunito text-white block">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] sm:text-xs text-white/50 uppercase font-bold tracking-wider mt-1 block">
                    Menit
                  </span>
                </div>
                <div className="min-w-[76px] sm:min-w-[96px] flex-1 max-w-[120px] bg-black/40 border border-white/10 rounded-2xl p-4 text-center">
                  <span className="text-2xl sm:text-4xl font-black font-nunito text-white block">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] sm:text-xs text-white/50 uppercase font-bold tracking-wider mt-1 block">
                    Detik
                  </span>
                </div>
              </div>

              {/* Time Window Notice (Using Lucide Info Icon) */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 text-left mb-6 flex items-start gap-3">
                <Info className="w-5 h-5 text-[#8baa37] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  <strong className="text-white block font-semibold mb-1">
                    Jadwal Rilis Tautan Foto:
                  </strong>
                  Tautan Google Photos untuk setiap spot rute (Start, Finish, Checkpoints KM 1 s/d KM 4.5, After Race, dan Podium) akan otomatis aktif dan dapat diakses langsung di halaman ini mulai pukul 09:00 WIB.
                </div>
              </div>

              {/* Return Home Button */}
              <div className="flex flex-wrap items-center justify-center gap-4">
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
                  <span>Lihat Rute Lomba</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Directory Teaser / Fotografer Credits with Instagram Links */}
          <div className="bg-[#051f1c]/60 border border-white/10 rounded-3xl p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold font-nunito uppercase tracking-wider text-[#8baa37] mb-3">
              Official Media & Photography Team
            </h3>
            <p className="text-xs sm:text-sm text-white/60 mb-5 leading-relaxed">
              Momen Anda diabadikan oleh rekan-rekan fotografer resmi HKN Run 2026 di berbagai titik rute:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                "@kicker.photograph",
                "@ridloakbark",
                "@mf_photographyx",
                "@ykp_photograph",
                "@ceritakanlari",
                "@konbalbalan",
              ].map((photog) => {
                const username = photog.replace(/^@/, "");
                return (
                  <a
                    key={photog}
                    href={`https://www.instagram.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 hover:text-white hover:border-[#8baa37] transition-all group"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-[#8baa37] group-hover:scale-110 transition-transform" />
                    <span>{photog}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        // ====================================================================
        // STATE 2: RELEASED GALLERY (AUTO AT 09:00 WIB OR FORCE_OPEN)
        // ====================================================================
        <div className="space-y-10">
          {/* Release Notice Banner */}
          <div className="bg-gradient-to-r from-[#1a6860] to-[#093833] border border-[#8baa37]/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div>
                <h2 className="text-lg sm:text-xl font-black font-nunito uppercase tracking-wide text-white">
                  Semua Album Dokumentasi Resmi Telah Dibuka!
                </h2>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  Klik tombol <strong>Buka Album Foto</strong> untuk membuka album Google Photos dan unduh foto resolusi aslinya.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8baa37]/20 border border-[#8baa37]/40 text-[#8baa37] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#8baa37] animate-pulse" />
                Live Album
              </span>
            </div>
          </div>

          {/* Quick Jump Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
            {GALLERY_DATA.map((section) => (
              <a
                key={section.number}
                href={`#section-${section.number}`}
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#8baa37] hover:text-black border border-white/10 text-xs font-bold text-white/80 transition-all duration-200"
              >
                {section.number} — {section.title}
              </a>
            ))}
          </div>

          {/* 7 Gallery Sections */}
          <div className="space-y-10">
            {GALLERY_DATA.map((section) => (
              <div
                key={section.number}
                id={`section-${section.number}`}
                className="bg-[#051f1c]/70 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl scroll-mt-28"
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 pb-4 border-b border-white/10">
                  <span className="text-xs sm:text-sm font-black font-nunito px-3 py-1 rounded-lg bg-[#8baa37] text-black">
                    {section.number}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black font-nunito tracking-wide text-white uppercase">
                    {section.title}
                  </h3>
                </div>

                {/* Grid of Album Cards (3-column grid, full width if only 1 item) */}
                {(() => {
                  const isSingle = section.items.length === 1;
                  return (
                    <div
                      className={`grid gap-4 sm:gap-5 w-full ${
                        isSingle
                          ? "grid-cols-1"
                          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      }`}
                    >
                      {section.items.map((item) => {
                        const photogUsername = item.photographer?.replace(/^@/, "");

                        return (
                          <div
                            key={item.id}
                            className={`bg-black/30 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-[#8baa37] hover:bg-black/40 transition-all duration-300 flex ${
                              isSingle
                                ? "flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
                                : "flex-col justify-between"
                            } group shadow-sm hover:shadow-md w-full`}
                          >
                            <div className={isSingle ? "max-w-2xl" : ""}>
                              {/* Tag/Badge if exists */}
                              {item.tag && (
                                <span
                                  className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-md border uppercase tracking-wider mb-2.5 ${
                                    item.badgeColor || "bg-white/10 text-white/80 border-white/15"
                                  }`}
                                >
                                  {item.id === "best-of" && (
                                    <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
                                  )}
                                  <span>{item.tag}</span>
                                </span>
                              )}

                              {/* Title */}
                              <h4
                                className={`font-bold font-nunito text-white group-hover:text-[#8baa37] transition-colors leading-snug ${
                                  isSingle ? "text-base sm:text-xl" : "text-base sm:text-lg"
                                }`}
                              >
                                {item.title}
                              </h4>

                              {/* Photographer with Instagram Link */}
                              {item.photographer && photogUsername && (
                                <a
                                  href={`https://www.instagram.com/${photogUsername}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 mt-2.5 text-xs sm:text-sm text-white/70 hover:text-[#8baa37] transition-colors group/ig w-fit"
                                  title={`Buka Instagram @${photogUsername}`}
                                >
                                  <InstagramIcon className="w-3.5 h-3.5 text-[#8baa37] group-hover/ig:scale-110 transition-transform" />
                                  <span className="hover:underline">{item.photographer}</span>
                                </a>
                              )}
                            </div>

                            {/* Action Links */}
                            <div
                              className={`flex items-center gap-2.5 ${
                                isSingle
                                  ? "w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/10 shrink-0"
                                  : "mt-5 pt-4 border-t border-white/10"
                              }`}
                            >
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#8baa37] text-black hover:bg-[#9ec23f] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md group-hover:shadow-[#8baa37]/20 ${
                                  isSingle ? "w-full sm:w-auto min-w-[170px]" : "flex-1"
                                }`}
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>Buka Album</span>
                              </a>

                              <button
                                type="button"
                                onClick={() => handleCopyLink(item.url, item.id)}
                                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/10 transition-colors shrink-0"
                                title="Salin Tautan"
                                aria-label="Salin tautan album"
                              >
                                {copiedId === item.id ? (
                                  <Check className="w-4 h-4 text-[#8baa37]" />
                                ) : (
                                  <Copy className="w-4 h-4 text-white/80" />
                                )}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>
            ))}
          </div>

          {/* Bottom Card */}
          <div className="bg-[#051f1c]/90 border border-white/15 rounded-3xl p-8 text-center backdrop-blur-xl">
            <h3 className="text-xl sm:text-2xl font-black font-nunito uppercase italic text-white">
              HKN RUN 2026
            </h3>
            <p className="text-sm text-[#8baa37] font-bold italic mt-1">
              Take Your Healthy Step!
            </p>
            <p className="text-xs text-white/50 mt-3 max-w-lg mx-auto">
              Bagikan keseruan lari Anda di Instagram dan tag @hknfunrun dengan tagar #HKNRun2026 #TakeYourHealthyStep.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
