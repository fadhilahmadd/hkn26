"use client";

import dynamic from "next/dynamic";
import AdditionalSections from "./components/AdditionalSections";

const HeroScene = dynamic(
  () => import("@/app/components/HeroScene.client"),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-[#051f1c] to-[#093833] text-white">
        <div className="relative flex flex-col items-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 relative animate-pulse drop-shadow-[0_0_30px_rgba(139,170,55,0.4)]">
            <img src="/logo-hkn-run.webp" alt="Loading Logo" className="object-contain w-full h-full" />
          </div>
          <div className="mt-8 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-[#8baa37] rounded-full animate-[loading_1.5s_ease-in-out_infinite]" style={{ transformOrigin: 'left' }}></div>
          </div>
          <style>{`
            @keyframes loading {
              0% { transform: scaleX(0); }
              50% { transform: scaleX(1); transform-origin: left; }
              50.1% { transform: scaleX(1); transform-origin: right; }
              100% { transform: scaleX(0); transform-origin: right; }
            }
          `}</style>
        </div>
      </div>
    ),
  },
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroScene />
      <AdditionalSections />
    </main>
  );
}
