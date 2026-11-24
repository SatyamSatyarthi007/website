"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import { ProductLightbox } from "@/components/ProductLightbox";
import { SaveCreationButton } from "@/components/SaveCreationButton";
import { Heart, Share, Sparkles } from "@/components/Icons";
import {
  readCreationIds,
  RECENTLY_VIEWED_KEY,
  SAVED_CREATIONS_KEY,
} from "@/lib/saved-creations";

function WishlistContent() {
  const searchParams = useSearchParams();
  const sharedIds = searchParams.get("items")?.split(",").filter(Boolean) ?? [];
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [recentIds, setRecentIds] = useState<string[]>([]);
  const [shared, setShared] = useState(sharedIds.length > 0);

  useEffect(() => {
    const sync = () => {
      setSavedIds(readCreationIds(SAVED_CREATIONS_KEY));
      setRecentIds(readCreationIds(RECENTLY_VIEWED_KEY));
    };
    sync();
    window.addEventListener("vauclaire-storage-change", sync);
    return () => window.removeEventListener("vauclaire-storage-change", sync);
  }, []);

  const ids = shared ? sharedIds : savedIds;
  const creations = useMemo(() => ids.map((id) => PRODUCTS.find((product) => product.id === id)).filter(Boolean), [ids]);
  const recentCreations = recentIds
    .map((id) => PRODUCTS.find((product) => product.id === id))
    .filter(Boolean)
    .filter((product) => !savedIds.includes(product!.id));

  const shareWishlist = async () => {
    const url = `${window.location.origin}/wishlist?items=${savedIds.join(",")}`;
    await navigator.clipboard.writeText(url);
    setShared(true);
  };

  const selectedProduct = PRODUCTS.find((product) => product.id === selectedId) ?? null;

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121216] border border-[#c5a880]/30 text-[10px] tracking-[0.25em] uppercase text-[#dfcaa9]">
          <Heart size={12} />
          <span>{shared ? "Shared Selection" : "Private Selection"}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#faf7f2]">Saved Creations</h1>
        <p className="text-xs sm:text-sm text-[#99948c]">
          Keep a private edit of pieces to revisit or share with your concierge.
        </p>
        {!shared && savedIds.length > 0 && (
          <button type="button" onClick={shareWishlist} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c5a880] text-[#09090b] text-xs uppercase tracking-[0.2em]">
            <Share size={14} /> Copy Share Link
          </button>
        )}
      </div>

      {creations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creations.map((product) => product && (
            <ProductCard key={product.id} product={product} onInspect={(item) => setSelectedId(item.id)} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-[#22222a]">
          <p className="font-serif text-xl text-[#faf7f2]">No saved creations yet.</p>
          <p className="text-xs text-[#8c887f] mt-2">Explore the collections and save pieces for later.</p>
        </div>
      )}

      {!shared && recentCreations.length > 0 && (
        <section className="mt-20">
          <div className="flex items-center gap-2 mb-6 text-[#dfcaa9] text-xs uppercase tracking-[0.2em]">
            <Sparkles size={14} /> Recently Viewed
          </div>
          <div className="flex flex-wrap gap-3">
            {recentCreations.map((product) => product && (
              <div key={product.id} className="flex items-center gap-2 border border-[#22222a] px-3 py-2 text-xs text-[#d8d3c9]">
                <button type="button" onClick={() => setSelectedId(product.id)} className="hover:text-[#c5a880]">{product.name}</button>
                <SaveCreationButton productId={product.id} compact />
              </div>
            ))}
          </div>
        </section>
      )}

      <ProductLightbox product={selectedProduct} onClose={() => setSelectedId(null)} />
    </div>
  );
}

export default function WishlistPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-32 text-center text-xs tracking-widest uppercase text-[#c5a880]">
          Loading Saved Creations...
        </div>
      }
    >
      <WishlistContent />
    </Suspense>
  );
}
