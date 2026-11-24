"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/data/catalog";
import { ZoomIn, ExternalLink } from "@/components/Icons";
import { SaveCreationButton } from "@/components/SaveCreationButton";

interface ProductCardProps {
  product: Product;
  onInspect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onInspect }) => {
  return (
    <article
      id={product.id}
      className="group bg-[#101013] border border-[#1e1e24] hover:border-[#c5a880]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Product Image Stage */}
      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-[#070709] cursor-pointer"
        onClick={() => onInspect(product)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Edition Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] bg-[#09090b]/85 backdrop-blur-md text-[#dfcaa9] border border-white/10">
            {product.editionBadge}
          </span>
        </div>

        {/* Hover Inspect Trigger */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#09090b]/90 text-[#faf7f2] text-[10px] uppercase tracking-[0.22em] border border-[#c5a880]/30 shadow-xl">
            <ZoomIn size={13} />
            Inspect Dossier
          </span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          {/* Category Tag */}
          <span className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-sans">
            {product.categoryLabel}
          </span>

          {/* Product Name */}
          <h3
            onClick={() => onInspect(product)}
            className="font-serif text-lg text-[#faf7f2] group-hover:text-[#dfcaa9] transition-colors cursor-pointer leading-snug"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#99948c] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Materials Bullet Points */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.materials.map((item, idx) => (
              <span
                key={idx}
                className="text-[10px] text-[#827e77] bg-[#16161b] px-2 py-0.5 border border-[#22222a]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Action Section */}
        <div className="pt-4 border-t border-[#1b1b22] space-y-3">
          <div>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-[#737069]">
              Indicative Estimate
            </span>
            <span className="text-sm font-medium text-[#f4efe6] tracking-wide">
              {product.indicativePrice}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={() => onInspect(product)}
              className="w-full py-2.5 px-3 border border-[#2c2c36] text-[#dfcaa9] text-[10px] uppercase tracking-[0.2em] hover:border-[#c5a880] hover:text-[#faf7f2] transition-colors text-center"
            >
              Inspect
            </button>
            <a
              href={product.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-[#c5a880] text-[#09090b] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#dfcaa9] transition-colors text-center inline-flex items-center justify-center gap-1 active:scale-[0.98]"
            >
              <span>Buy Now</span>
              <ExternalLink size={11} />
            </a>
          </div>
          <SaveCreationButton productId={product.id} />
        </div>
      </div>
    </article>
  );
};
