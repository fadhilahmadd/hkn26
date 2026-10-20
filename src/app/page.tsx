"use client";

import React, { useEffect } from "react";
import HeroScene from "./components/HeroScene.client";
import AdditionalSections from "./components/AdditionalSections";

export default function Home() {
  // Handle in-page anchor navigation (like /#category) when loaded or navigated from another page
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashScroll();
    const timer = setTimeout(handleHashScroll, 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      <HeroScene />
      <AdditionalSections />
    </main>
  );
}
