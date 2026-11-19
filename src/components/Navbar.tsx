"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND_CONFIG } from "@/lib/config";
import { Menu, X, ArrowUpRight } from "@/components/Icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About Atelier" },
  { href: "/contact", label: "Contact & Concierge" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-2xl" : "bg-gradient-to-b from-[#09090b]/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Monogram & Logo */}
        <Link
          href="/"
          className="group flex flex-col items-start focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880] rounded"
          aria-label={`${BRAND_CONFIG.name} Home`}
        >
          <span className="font-serif tracking-[0.25em] text-lg sm:text-xl font-light text-[#faf7f2] group-hover:text-[#dfcaa9] transition-colors">
            {BRAND_CONFIG.name}
          </span>
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#99948c] font-sans">
            Atelier · Genève
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] transition-all relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880] ${
                  isActive
                    ? "text-[#faf7f2] font-medium"
                    : "text-[#99948c] hover:text-[#f4efe6]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c5a880] transition-all" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] px-4 py-2 border border-[#c5a880]/40 text-[#dfcaa9] hover:text-[#faf7f2] hover:border-[#c5a880] hover:bg-[#c5a880]/10 transition-all rounded-none active:scale-[0.98]"
          >
            <span>Private Appointment</span>
            <ArrowUpRight size={14} className="opacity-70" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#faf7f2] hover:text-[#c5a880] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Apple-style translucent sheet) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#09090b]/95 backdrop-blur-2xl border-t border-[#222227] px-8 py-10 flex flex-col justify-between animate-fadeIn">
          <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-serif tracking-[0.15em] py-2 border-b border-[#222227] flex items-center justify-between ${
                    isActive ? "text-[#c5a880]" : "text-[#faf7f2] hover:text-[#dfcaa9]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-[#222227] flex flex-col gap-4">
            <Link
              href="/contact"
              className="w-full text-center py-3.5 bg-[#c5a880] text-[#09090b] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#dfcaa9] transition-colors"
            >
              Request Private Commission
            </Link>
            <p className="text-[11px] text-center text-[#99948c] tracking-widest uppercase">
              {BRAND_CONFIG.concierge.hours}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
