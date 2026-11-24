"use client";

import React, { useEffect, useState } from "react";
import { Heart } from "@/components/Icons";
import {
  readCreationIds,
  SAVED_CREATIONS_KEY,
  writeCreationIds,
} from "@/lib/saved-creations";

export const SaveCreationButton: React.FC<{ productId: string; compact?: boolean }> = ({
  productId,
  compact = false,
}) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const sync = () => setSaved(readCreationIds(SAVED_CREATIONS_KEY).includes(productId));
    sync();
    window.addEventListener("vauclaire-storage-change", sync);
    return () => window.removeEventListener("vauclaire-storage-change", sync);
  }, [productId]);

  const toggle = () => {
    const ids = readCreationIds(SAVED_CREATIONS_KEY);
    const next = ids.includes(productId) ? ids.filter((id) => id !== productId) : [productId, ...ids];
    writeCreationIds(SAVED_CREATIONS_KEY, next);
    setSaved(next.includes(productId));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={saved ? "Remove from saved creations" : "Save creation"}
      aria-pressed={saved}
      className={`inline-flex items-center justify-center gap-2 border border-[#c5a880]/30 text-[#dfcaa9] hover:border-[#c5a880] ${
        compact ? "p-2" : "px-3 py-2 text-[10px] uppercase tracking-[0.18em]"
      }`}
    >
      <Heart size={compact ? 16 : 14} fill={saved ? "currentColor" : "none"} />
      {!compact && (saved ? "Saved" : "Save")}
    </button>
  );
};
