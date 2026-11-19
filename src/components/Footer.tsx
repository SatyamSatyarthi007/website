import React from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/lib/config";
import { ArrowUpRight, ShieldCheck, Mail, MapPin } from "@/components/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070709] border-t border-[#1a1a1f] text-[#99948c] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#18181d]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif tracking-[0.25em] text-2xl text-[#faf7f2] font-light">
                {BRAND_CONFIG.name}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.35em] text-[#99948c] mt-1">
                {BRAND_CONFIG.tagline}
              </span>
            </Link>
            <p className="text-xs leading-relaxed max-w-sm text-[#8a867e] font-sans">
              Dedicated to the preservation of hand craftsmanship. Each ring, bespoke timepiece, and leather strap is engineered as a singular numbered creation in our Geneva and Paris ateliers.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#c5a880]/80 tracking-wider uppercase">
              <ShieldCheck size={14} />
              <span>Independent Haute Horlogerie & Joaillerie</span>
            </div>
          </div>

          {/* Collections Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#faf7f2] font-medium">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/collections?cat=rings"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  High Jewellery Rings
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?cat=watches"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Bespoke Watches
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?cat=straps"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Bespoke Leather Straps
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="hover:text-[#c5a880] transition-colors flex items-center gap-1 text-[#dfcaa9]"
                >
                  <span>View Full Gallery</span>
                  <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Atelier & Maison */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#faf7f2] font-medium">
              The Maison
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#c5a880] transition-colors">
                  Our Atelier Philosophy
                </Link>
              </li>
              <li>
                <Link href="/about#craftsmanship" className="hover:text-[#c5a880] transition-colors">
                  Artisanal Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c5a880] transition-colors">
                  Private Appointments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c5a880] transition-colors">
                  Concierge Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge & Locations */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#faf7f2] font-medium">
              Atelier Salons
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#faf7f2]">Genève · Flagship</p>
                  <p className="text-[#7d7a74] text-[11px]">14 Rue du Rhône</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#faf7f2]">Paris · Private Salon</p>
                  <p className="text-[#7d7a74] text-[11px]">28 Place Vendôme</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[#dfcaa9]">
                <Mail size={13} className="shrink-0" />
                <a
                  href={`mailto:${BRAND_CONFIG.concierge.email}`}
                  className="hover:underline tracking-wide"
                >
                  {BRAND_CONFIG.concierge.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Notice Banner: Configurable & Ethical Architecture */}
        <div className="py-6 border-b border-[#15151a] text-[11px] text-[#78756e] leading-relaxed flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>
            <span className="text-[#c5a880] uppercase tracking-wider font-medium mr-1.5">
              Production Architecture:
            </span>
            All prices are indicative bespoke estimates. Purchases utilize external checkout links (e.g. Stripe / Shopify / Atelier Wire Concierge) configured in <code className="text-[#dfcaa9] bg-[#121215] px-1 py-0.5 rounded">src/data/catalog.ts</code>.
          </p>
          <div className="flex gap-4 shrink-0 text-xs text-[#99948c]">
            <a
              href={BRAND_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#faf7f2] transition-colors"
            >
              Instagram
            </a>
            <span className="text-[#2b2b30]">·</span>
            <a
              href={BRAND_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#faf7f2] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#696660]">
          <p>
            © {BRAND_CONFIG.year} {BRAND_CONFIG.fullName}. All rights reserved. Registered Geneva & Paris.
          </p>
          <p className="tracking-widest uppercase text-[10px]">
            Craftsmanship Over Speed · Integrity Over Mass Production
          </p>
        </div>
      </div>
    </footer>
  );
};
