"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, CATEGORIES, Product } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import { ProductLightbox } from "@/components/ProductLightbox";
import { Filter, Sparkles, ShieldCheck } from "@/components/Icons";

function CollectionsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("cat") || "all";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync with URL parameter if present
  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat && ["rings", "watches", "straps", "all"].includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.numericPrice - b.numericPrice;
      if (sortBy === "price-desc") return b.numericPrice - a.numericPrice;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121216] border border-[#c5a880]/30 text-[10px] tracking-[0.25em] uppercase text-[#dfcaa9]">
          <Sparkles size={12} className="text-[#c5a880]" />
          <span>Curated Product Gallery</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#faf7f2] tracking-wide">
          The Collections
        </h1>
        <p className="text-xs sm:text-sm text-[#99948c] font-light leading-relaxed">
          High jewellery rings, hand-regulated bespoke watches, and hand-stitched leather straps. Each piece is crafted in numbered editions or tailored to bespoke measurements.
        </p>
      </div>

      {/* Filter Tabs & Search / Sort Bar */}
      <div className="mb-12 space-y-6">
        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-all duration-200 border ${
                  isActive
                    ? "bg-[#c5a880] text-[#09090b] border-[#c5a880] font-medium shadow-md"
                    : "bg-[#0e0e11] text-[#99948c] border-[#1e1e24] hover:text-[#faf7f2] hover:border-[#c5a880]/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#101013] border border-[#1c1c22]">
          {/* Search Input */}
          <div className="w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by gem, caliber, or leather..."
              className="w-full bg-[#08080a] border border-[#22222a] text-[#f4efe6] px-3.5 py-2 text-xs placeholder:text-[#66635c] focus:outline-none focus:border-[#c5a880]"
            />
          </div>

          {/* Result Count & Sort Selector */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-4 text-xs text-[#8c887f]">
            <span className="font-mono text-[11px]">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "Creation" : "Creations"}
            </span>

            <div className="flex items-center gap-2">
              <Filter size={13} className="text-[#c5a880]" />
              <label htmlFor="sort-select" className="sr-only">
                Sort Creations
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "featured" | "price-asc" | "price-desc")
                }
                className="bg-[#08080a] border border-[#22222a] text-[#f4efe6] px-3 py-1.5 text-xs focus:outline-none focus:border-[#c5a880]"
              >
                <option value="featured">Featured Editions</option>
                <option value="price-asc">Indicative Price: Low to High</option>
                <option value="price-desc">Indicative Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Creations */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onInspect={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border border-dashed border-[#22222a] p-12">
          <p className="font-serif text-lg text-[#faf7f2]">No creations found matching your filter.</p>
          <p className="text-xs text-[#8c887f] mt-2">
            Try adjusting your search keywords or resetting the category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-6 px-5 py-2.5 bg-[#c5a880] text-[#09090b] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#dfcaa9]"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Transparent Checkout Architecture Disclaimer */}
      <div className="mt-20 p-6 bg-[#0e0e12] border border-[#1f1f26] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#8a867e]">
        <div className="flex items-start gap-3">
          <ShieldCheck size={20} className="text-[#c5a880] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-[#dfcaa9] font-medium">Bespoke Acquisition & External Checkout Notice</p>
            <p className="text-[11px] leading-relaxed text-[#7a7770]">
              Each &ldquo;Buy Now&rdquo; button directs to a configurable external payment link (such as Stripe Checkout or a concierge invoice portal). This website operates with full transparency and does not process payments or capture sensitive financial data on-site.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <ProductLightbox
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-32 text-center text-xs tracking-widest uppercase text-[#c5a880]">
          Loading Atelier Collections...
        </div>
      }
    >
      <CollectionsContent />
    </Suspense>
  );
}
