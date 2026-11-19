import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG } from "@/lib/config";
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, Clock } from "@/components/Icons";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================
          HERO SECTION: Cinematic Photography & Singular Focus
         ========================================================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 sm:px-8">
        {/* Cinematic Backdrop Image with Vignette & Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brand/hero-montage.jpg"
            alt="Atelier Vauclaire Haute Horlogerie & High Jewellery"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.72] contrast-[1.08] scale-100 animate-fadeIn"
          />
          {/* Multi-layered editorial chiaroscuro masks */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-[#09090b]/70" />
          <div className="absolute inset-0 bg-radial-vignette opacity-60" />
        </div>

        {/* Hero Copy & Singular Primary CTA */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 pt-12">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#09090b]/75 backdrop-blur-md border border-[#c5a880]/30 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#dfcaa9]">
            <Sparkles size={13} className="text-[#c5a880]" />
            <span>Geneva · Paris · New York</span>
          </div>

          {/* Editorial Display Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.01em] text-[#faf7f2] leading-[1.06]">
            Singular Form. <br />
            <span className="italic font-light text-[#dfcaa9]">Enduring</span> Provenance.
          </h1>

          {/* Concise Brand Statement */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#d8d3c9] font-light leading-relaxed tracking-wide">
            Sculpted high jewellery rings, hand-regulated haute horlogerie, and saddle-stitched leather straps. Each creation is brought to life one by one in numbered atelier editions.
          </p>

          {/* Primary CTA (As required by brief: "Explore the Collection") */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/collections"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c5a880] text-[#09090b] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#dfcaa9] transition-all duration-300 shadow-xl active:scale-[0.98]"
            >
              <span>Explore the Collection</span>
              <ArrowRight size={15} />
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 border border-[#c5a880]/40 text-[#dfcaa9] text-xs uppercase tracking-[0.22em] hover:border-[#c5a880] hover:text-[#faf7f2] hover:bg-[#c5a880]/10 transition-all duration-300 active:scale-[0.98]"
            >
              <span>The Atelier Story</span>
            </Link>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 inset-x-0 flex justify-center text-[10px] tracking-[0.3em] uppercase text-[#8c887f]">
          <span className="animate-pulse">Scroll to discover</span>
        </div>
      </section>

      {/* =========================================================
          THE THREE PILLARS (RINGS, WATCHES, STRAPS)
         ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-sans">
            Three Disciplines of Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf7f2] tracking-wide">
            The Three Product Lines
          </h2>
          <p className="text-xs sm:text-sm text-[#99948c] leading-relaxed">
            From lapidary gemstone sculpting and micromechanical watchmaking to heritage French leathercraft, our creations embody uncompromising material purity.
          </p>
        </div>

        {/* Three Editorial Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Line 1: High Jewellery Rings */}
          <div className="group relative bg-[#0e0e11] border border-[#1e1e24] p-6 sm:p-8 flex flex-col justify-between hover:border-[#c5a880]/40 transition-all duration-500">
            <div className="space-y-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#070709]">
                <Image
                  src="/images/products/rings/solitaire-diamant.jpg"
                  alt="High Jewellery Rings"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a880]">
                High Jewellery
              </span>
              <h3 className="font-serif text-2xl text-[#faf7f2] group-hover:text-[#dfcaa9] transition-colors">
                Bespoke Rings
              </h3>
              <p className="text-xs text-[#99948c] leading-relaxed">
                Singular D-Flawless diamonds, royal Ceylon sapphires, and certified Muzo emeralds hand-set into 950 platinum and fairmined gold.
              </p>
            </div>
            <div className="pt-8 mt-6 border-t border-[#1a1a20]">
              <Link
                href="/collections?cat=rings"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#dfcaa9] hover:text-[#faf7f2] transition-colors group-hover:translate-x-1 duration-300"
              >
                <span>Discover Rings</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Line 2: Bespoke Watches */}
          <div className="group relative bg-[#0e0e11] border border-[#1e1e24] p-6 sm:p-8 flex flex-col justify-between hover:border-[#c5a880]/40 transition-all duration-500">
            <div className="space-y-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#070709]">
                <Image
                  src="/images/products/watches/tourbillon-squelette.jpg"
                  alt="Bespoke Watches"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a880]">
                Haute Horlogerie
              </span>
              <h3 className="font-serif text-2xl text-[#faf7f2] group-hover:text-[#dfcaa9] transition-colors">
                Bespoke Watches
              </h3>
              <p className="text-xs text-[#99948c] leading-relaxed">
                Openworked 60-second flying tourbillons, Grand Feu vitreous enamel dials, and meteorite moonphases hand-regulated in Geneva.
              </p>
            </div>
            <div className="pt-8 mt-6 border-t border-[#1a1a20]">
              <Link
                href="/collections?cat=watches"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#dfcaa9] hover:text-[#faf7f2] transition-colors group-hover:translate-x-1 duration-300"
              >
                <span>Discover Watches</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Line 3: Bespoke Leather Straps */}
          <div className="group relative bg-[#0e0e11] border border-[#1e1e24] p-6 sm:p-8 flex flex-col justify-between hover:border-[#c5a880]/40 transition-all duration-500">
            <div className="space-y-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#070709]">
                <Image
                  src="/images/products/straps/barenia-cognac-saddle.jpg"
                  alt="Bespoke Leather Watch Straps"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a880]">
                Artisanal Leathercraft
              </span>
              <h3 className="font-serif text-2xl text-[#faf7f2] group-hover:text-[#dfcaa9] transition-colors">
                Leather Straps
              </h3>
              <p className="text-xs text-[#99948c] leading-relaxed">
                French Barénia calfskin, certified Louisiana alligator belly, and Tuscan nubuck crafted with traditional double-needle saddle stitching.
              </p>
            </div>
            <div className="pt-8 mt-6 border-t border-[#1a1a20]">
              <Link
                href="/collections?cat=straps"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#dfcaa9] hover:text-[#faf7f2] transition-colors group-hover:translate-x-1 duration-300"
              >
                <span>Discover Straps</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDITORIAL PROCESS & PHILOSOPHY SPOTLIGHT
         ========================================================= */}
      <section className="bg-[#0c0c0f] border-y border-[#1a1a20] py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Atelier Artisan Visual */}
          <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-[#070709] border border-[#24242d]">
            <Image
              src="/images/brand/atelier-craftsmanship.jpg"
              alt="Artisan Watchmaker and High Jeweller at Work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10 text-xs text-[#dfcaa9] flex items-center justify-between">
              <span>Geneva Work-Bench · Calibre V-01 Regulation</span>
              <span className="text-[10px] text-[#99948c] tracking-widest uppercase">Poli Noir</span>
            </div>
          </div>

          {/* Narrative Copy */}
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-sans">
              The Bespoke Dialogue
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#faf7f2] tracking-wide leading-tight">
              Crafted not for the masses, but for the one.
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#a8a49c] font-light leading-relaxed">
              <p>
                At {BRAND_CONFIG.fullName}, we believe true luxury begins where mechanization ends. A bespoke commission is an intimate journey of co-creation between client and master craftsperson.
              </p>
              <p>
                Whether selecting an unheated royal sapphire from Sri Lanka, fine-tuning the hand-beveled anglage of a skeletonized bridge, or tailoring the exact millimeter curvature of a Barénia leather strap, every decision honors personal individuality.
              </p>
            </div>

            {/* Quality Pillars */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#1c1c22]">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#dfcaa9] text-xs font-medium">
                  <ShieldCheck size={16} className="text-[#c5a880]" />
                  <span>Conflict-Free Sourcing</span>
                </div>
                <p className="text-[11px] text-[#827e77] leading-relaxed">
                  Every gemstone and precious metal is sourced strictly via RJC-certified channels.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#dfcaa9] text-xs font-medium">
                  <Clock size={16} className="text-[#c5a880]" />
                  <span>Generational Life</span>
                </div>
                <p className="text-[11px] text-[#827e77] leading-relaxed">
                  Engineered with serviceable architecture intended for multi-generational heirloom provenance.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#faf7f2] hover:text-[#c5a880] transition-colors"
              >
                <span>Read Full Atelier Story</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRIVATE CONSULTATION & INVITATION BANNER
         ========================================================= */}
      <section className="py-24 px-6 sm:px-8 text-center bg-[#09090b]">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-sans">
            By Private Appointment Only
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#faf7f2]">
            Begin Your Bespoke Commission
          </h2>
          <p className="text-xs sm:text-sm text-[#99948c] max-w-xl mx-auto leading-relaxed">
            We welcome collectors and connoisseurs to our salons in Geneva and Paris, or via private digital concierge consultation worldwide.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a880] text-[#09090b] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#dfcaa9] transition-colors shadow-lg active:scale-[0.98]"
            >
              Request Consultation
            </Link>
            <Link
              href="/collections"
              className="w-full sm:w-auto px-7 py-3.5 border border-[#22222a] text-[#dfcaa9] text-xs uppercase tracking-[0.2em] hover:border-[#c5a880] hover:text-[#faf7f2] transition-colors active:scale-[0.98]"
            >
              View Available Creations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
