import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG } from "@/lib/config";
import { ArrowRight, ShieldCheck, Sparkles, Clock, Compass } from "@/components/Icons";

export const metadata = {
  title: "About the Atelier · Philosophy & Craftsmanship",
  description:
    "Discover the bespoke craftsmanship, material purity, and individualized approach defining Atelier Vauclaire's rings, watches, and leather straps.",
};

const PROCESS_STEPS = [
  {
    num: "01",
    title: "The Aesthetic Dialogue",
    subtitle: "Gouache Renderings & Dimensioning",
    desc: "Every bespoke project begins with a conversation between client and artisan. We explore gemstone proportions, wrist ergonomics, movement calibres, and leather grain finishes through archival hand-painted gouache sketches.",
  },
  {
    num: "02",
    title: "Ethical & Rare Sourcing",
    subtitle: "Direct Lapidary & Heritage Tanneries",
    desc: "We strictly select natural, unheated colored gemstones, D-Flawless certified diamonds, and vegetable-tanned French Barénia or certified Louisiana alligator leathers. Purity of origin is non-negotiable.",
  },
  {
    num: "03",
    title: "Artisanal Execution",
    subtitle: "Black Polishing, Micro-Setting, Saddle Stitch",
    desc: "In our Geneva and Paris workshops, steel bridges are hand-beveled with boxwood laps, platinum claws are micro-sculpted under optical magnification, and straps are hand-sewn using the traditional double-needle saddler's stitch.",
  },
  {
    num: "04",
    title: "Archival Provenance",
    subtitle: "Numbered Edition & Lifetime Care",
    desc: "Upon completion, every creation receives an inscribed dossier documenting its gemological origin, caliber regulation tolerances, and leather lot, cataloged permanently in the atelier's registry.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 text-[#f4efe6]">
      {/* Editorial Hero Header */}
      <section className="px-6 sm:px-8 max-w-5xl mx-auto text-center space-y-6 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121216] border border-[#c5a880]/30 text-[10px] tracking-[0.25em] uppercase text-[#dfcaa9]">
          <Sparkles size={12} className="text-[#c5a880]" />
          <span>Atelier Philosophy</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#faf7f2] tracking-wide leading-tight">
          Where Slowness is the Ultimate Luxury
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#99948c] font-light leading-relaxed">
          {BRAND_CONFIG.fullName} was founded on a singular premise: to liberate high jewelry and horology from industrial mass-production, returning to intimate, human-scale craftsmanship.
        </p>
      </section>

      {/* Full-width Atelier Craftsmanship Editorial Visual */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-24">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#070709] border border-[#22222a]">
          <Image
            src="/images/brand/atelier-craftsmanship.jpg"
            alt="Atelier Master Craftsman Assembling Horological Calibre"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880]">
                Geneva Workshop
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#faf7f2] font-light mt-1">
                Precision Regulation Under 10x Magnification
              </p>
            </div>
            <p className="text-[11px] text-[#a6a29a] max-w-xs font-mono">
              Individual hand-finishing ensures that no two pieces from our workbench are identical.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values: Material, Individuality, Craft */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4 p-8 bg-[#0e0e11] border border-[#1e1e24]">
            <div className="w-10 h-10 flex items-center justify-center bg-[#15151a] border border-[#c5a880]/30 text-[#c5a880]">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-serif text-xl text-[#faf7f2]">Material Purity</h3>
            <p className="text-xs text-[#99948c] leading-relaxed">
              We never compromise on base elements. From unheated Ceylon corundum and certified natural diamonds to full-grain French calfskin, our materials are selected for their intrinsic, enduring beauty rather than synthetic uniformity.
            </p>
          </div>

          <div className="space-y-4 p-8 bg-[#0e0e11] border border-[#1e1e24]">
            <div className="w-10 h-10 flex items-center justify-center bg-[#15151a] border border-[#c5a880]/30 text-[#c5a880]">
              <Compass size={20} />
            </div>
            <h3 className="font-serif text-xl text-[#faf7f2]">True Bespoke</h3>
            <p className="text-xs text-[#99948c] leading-relaxed">
              &ldquo;Bespoke&rdquo; has been diluted by modern retail. For us, it remains literal: a garment, ring, or timepiece spoken into existence by the client, engineered to their exact anatomy and artistic preferences.
            </p>
          </div>

          <div className="space-y-4 p-8 bg-[#0e0e11] border border-[#1e1e24]">
            <div className="w-10 h-10 flex items-center justify-center bg-[#15151a] border border-[#c5a880]/30 text-[#c5a880]">
              <Clock size={20} />
            </div>
            <h3 className="font-serif text-xl text-[#faf7f2]">Generational Longevity</h3>
            <p className="text-xs text-[#99948c] leading-relaxed">
              Every mechanical movement is designed to be disassembled, cleaned, and recalibrated fifty years from today. Our creations are objects of permanence in a disposable world.
            </p>
          </div>
        </div>
      </section>

      {/* The 4-Stage Bespoke Process */}
      <section id="craftsmanship" className="bg-[#0b0b0e] border-y border-[#1a1a20] py-24 px-6 sm:px-8 mb-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">
              From Concept to Provenance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#faf7f2]">
              The Bespoke Commission Journey
            </h2>
            <p className="text-xs text-[#8c887f]">
              Transparent, collaborative, and unhurried.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-6 bg-[#111114] border border-[#1e1e24] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <span className="font-mono text-2xl text-[#c5a880] font-light">
                    {step.num}
                  </span>
                  <h4 className="font-serif text-lg text-[#faf7f2]">{step.title}</h4>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-[#dfcaa9]">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-[#99948c] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission CTA */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto text-center space-y-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#faf7f2]">
          Discuss a Commission with Our Master Artisan
        </h3>
        <p className="text-xs sm:text-sm text-[#99948c] max-w-xl mx-auto leading-relaxed">
          Whether you desire a custom engagement ring, a bespoke dial complication, or a tailored leather strap for your favorite vintage chronograph, our concierge is at your service.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a880] text-[#09090b] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#dfcaa9] transition-colors"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/collections"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#22222a] text-[#dfcaa9] text-xs uppercase tracking-[0.2em] hover:border-[#c5a880] hover:text-[#faf7f2] transition-colors"
          >
            <span>Explore Current Pieces</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
