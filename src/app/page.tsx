"use client";

import dynamic from "next/dynamic";
import AdditionalSections from "./components/AdditionalSections";

const HeroScene = dynamic(
  () => import("@/app/components/HeroScene.client"),
  {
    ssr: false,
    loading: () => <div className="relative h-screen w-full bg-[#051f1c]" />,
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
