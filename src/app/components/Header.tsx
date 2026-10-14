"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Category", href: "/#category" },
    { name: "Rules & Regulations", href: "/rules" },
    { name: "Gallery", href: "/gallery" },
    { name: "Result", href: "/result" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsMobileMenuOpen(false);

    if (href === "/#category") {
      if (pathname === "/") {
        e.preventDefault();
        const el = document.getElementById("category");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", "/#category");
        }
      }
    }
  };

  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/#category") return pathname === "/category";
    return pathname === href;
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-[100] flex w-full items-center justify-between px-[4%] py-4 md:py-6 bg-gradient-to-b from-[#051f1c]/80 to-transparent">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo-hkn-run.webp"
              width={240}
              height={96}
              alt="HKN62 Logo"
              className="object-contain h-16 sm:h-28 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 80vw, 60vw"
              priority
            />
          </Link>
        </div>

        {/* Middle: Desktop Nav */}
        <nav
          className="glass hidden lg:flex items-center gap-1 rounded-full p-1.5 shadow-xl border border-white/10"
          aria-label="Main"
        >
          {navItems.map((item) => {
            const isActive = isItemActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-[#1a6860] shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Register + Mobile Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          <span
            aria-disabled="true"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-5 py-2.5 md:px-8 md:py-3.5 text-xs md:text-sm font-bold tracking-wide text-white/50 uppercase cursor-not-allowed select-none"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="10" rx="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Closed
          </span>

          <button
            className="lg:hidden p-2 text-white hover:text-[#8baa37] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-[#051f1c]/95 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col items-center justify-center ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-6 right-[4%] p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close Menu"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-6 w-full px-6">
          {navItems.map((item) => {
            const isActive = isItemActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xl md:text-2xl font-black font-nunito tracking-wide transition-all duration-300 ${
                  isActive ? "text-[#8baa37]" : "text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="w-20 h-px bg-white/20 my-4"></div>
          <span
            aria-disabled="true"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/15 w-full max-w-xs text-center px-6 py-3 text-base md:text-lg font-bold tracking-wide text-white/50 uppercase cursor-not-allowed select-none"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="10" rx="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Closed
          </span>
        </nav>
      </div>
    </>
  );
}