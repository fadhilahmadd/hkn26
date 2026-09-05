"use client";

import dynamic from "next/dynamic";
import AdditionalSections from "./components/AdditionalSections";

const HeroScene = dynamic(
  () => import("@/app/components/HeroScene.client"),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 z-[-1] bg-[#051f1c]"></div>,
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
