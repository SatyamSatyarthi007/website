"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/catalog";
import { X, ZoomIn, ExternalLink, Mail, ShieldCheck, Check } from "@/components/Icons";

interface ProductLightboxProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductLightbox: React.FC<ProductLightboxProps> = ({ product, onClose }) => {
  const [zoomed, setZoomed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Close on ESC key & lock body scroll
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + `/collections#${product.id}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#0d0d10] border border-[#2a2a32] shadow-2xl flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#141418]/80 text-[#f4efe6] hover:text-[#c5a880] hover:bg-[#1a1a20] rounded-full border border-white/10 transition-all focus:outline-none focus:ring-1 focus:ring-[#c5a880]"
        >
          <X size={20} />
        </button>

        {/* Left Column: Image with Interactive Zoom */}
        <div className="lg:w-1/2 relative bg-[#070709] min-h-[340px] sm:min-h-[460px] flex items-center justify-center overflow-hidden group">
          <div
            className={`relative w-full h-full min-h-[340px] sm:min-h-[460px] cursor-zoom-in transition-transform duration-500 ease-out ${
              zoomed ? "scale-150 cursor-zoom-out" : "scale-100"
            }`}
            onClick={() => setZoomed(!zoomed)}
            title={zoomed ? "Click to reset view" : "Click to zoom into macro craftsmanship"}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Zoom hint overlay */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-[#dfcaa9] pointer-events-none">
            <ZoomIn size={14} />
            <span>{zoomed ? "Click to reset view" : "Click image to inspect macro details"}</span>
          </div>
        </div>

        {/* Right Column: Horological & Gemological Dossier */}
        <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Category & Edition Badge */}
            <div className="flex items-center justify-between gap-2 border-b border-[#1c1c22] pb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-sans">
                {product.categoryLabel}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 bg-[#1a1a20] text-[#dfcaa9] border border-[#c5a880]/20">
                {product.editionBadge}
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3
                id="lightbox-title"
                className="font-serif text-2xl sm:text-3xl font-light text-[#faf7f2] tracking-wide"
              >
                {product.name}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#a8a49c]">
                {product.fullDescription}
              </p>
            </div>

            {/* Price block */}
            <div className="p-4 bg-[#121216] border-l-2 border-[#c5a880]">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#8c887f]">
                Investment Estimate
              </span>
              <span className="font-serif text-xl sm:text-2xl text-[#f4efe6]">
                {product.indicativePrice}
              </span>
              <span className="block text-[10px] text-[#78756e] mt-1">
                *Final valuation is confirmed following client material selection & sizing.
              </span>
            </div>

            {/* Technical Specifications */}
            <div className="space-y-3">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#dfcaa9] font-medium">
                Atelier Dossier & Specifications
              </h4>
              <div className="space-y-2 text-xs">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between py-1.5 border-b border-[#18181f] text-[11px]"
                  >
                    <span className="text-[#8c887f] font-sans">{spec.label}</span>
                    <span className="text-[#e2ded6] text-right font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-8 mt-6 border-t border-[#1a1a22] space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Buy Now / Acquire Button */}
              <a
                href={product.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#c5a880] text-[#09090b] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#dfcaa9] transition-colors focus:ring-1 focus:ring-white active:scale-[0.98]"
              >
                <span>Acquire Piece</span>
                <ExternalLink size={14} />
              </a>

              {/* Bespoke Inquiry CTA */}
              <Link
                href={`/contact?subject=Inquiry regarding ${encodeURIComponent(
                  product.name
                )}&category=${product.category}`}
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 border border-[#2e2e38] text-[#dfcaa9] text-xs uppercase tracking-[0.2em] hover:border-[#c5a880] hover:text-[#faf7f2] transition-colors active:scale-[0.98]"
              >
                <Mail size={14} />
                <span>Inquire With Concierge</span>
              </Link>
            </div>

            {/* Transparency Note */}
            <div className="flex items-center justify-between text-[10px] text-[#6b6760] pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={12} className="text-[#c5a880]" />
                Numbered Atelier Provenance Guarantee
              </span>
              <button
                type="button"
                onClick={handleCopyLink}
                className="hover:text-[#dfcaa9] transition-colors flex items-center gap-1 underline underline-offset-2"
              >
                {copiedLink ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <span>Share Dossier</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
