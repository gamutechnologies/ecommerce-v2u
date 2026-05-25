"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingCart, Star, Check, Zap } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ColorOption {
  label: string;       // e.g. "Orange Titanium"
  swatch: string;      // CSS color value e.g. "#F97316"
  image: string;       // product image path for this color
}

export interface StorageOption {
  label: string;       // e.g. "256 GB"
  priceSuffix?: string; // e.g. "+$100"
}

export interface ProductCardProps {
  brand: string;
  name: string;
  originalPrice: string;
  salePrice: string;
  salePriceLabel?: string;
  badge?: string;
  rating?: number;
  reviewCount?: number;
  colorOptions: ColorOption[];
  storageOptions?: StorageOption[];
  onAddToCart?: (color: ColorOption, storage?: StorageOption) => void;
  onWishlist?: (name: string) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProductCard({
  brand,
  name,
  originalPrice,
  salePrice,
  salePriceLabel = "Cash Discount Price",
  badge,
  rating = 5,
  reviewCount = 128,
  colorOptions,
  storageOptions,
  onAddToCart,
  onWishlist,
}: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);
  const [selectedStorage, setSelectedStorage] = useState<StorageOption | undefined>(
    storageOptions?.[0]
  );
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    onAddToCart?.(selectedColor, selectedStorage);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleWishlist = () => {
    setIsWishlisted((p) => !p);
    onWishlist?.(name);
  };

  return (
    // h-full + flex-col = card stretches to match tallest sibling in the grid row
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      whileHover={{ y: -5 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-[#7DBBFF]/20 bg-white/70 p-5 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,102,255,0.07)]"
    >

      {/* ── Background hover glow ───────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-1/4 h-48 w-48 -translate-x-1/2 rounded-full bg-[#0066FF]/8 blur-3xl" />
      </div>
      {/* Shine sweep */}
      <div className="pointer-events-none absolute left-full top-0 h-full w-1/2 rotate-12 bg-white/30 blur-xl transition-all duration-700 group-hover:left-[140%]" />

      {/* ── Row 1: Badge + Wishlist ─────────────────────────────────────────── */}
      <div className="relative z-10 flex items-center justify-between">
        {badge ? (
          <span className="flex items-center gap-1 rounded-full bg-linear-to-r from-[#0066FF] to-[#7DBBFF] px-3 py-1 text-[11px] font-bold text-white shadow-[0_0_14px_rgba(0,102,255,0.3)]">
            <Zap size={10} className="fill-white" />
            {badge}
          </span>
        ) : (
          <div />
        )}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.88 }}
          onClick={handleWishlist}
          aria-label="Wishlist"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#7DBBFF]/20 bg-white/80 transition-colors duration-200 hover:border-pink-200 hover:bg-pink-50"
        >
          <motion.div
            animate={isWishlisted ? { scale: [1, 1.45, 1] } : { scale: 1 }}
            transition={{ duration: 0.28 }}
          >
            <Heart
              size={15}
              className={isWishlisted ? "fill-pink-500 text-pink-500" : "text-gray-400"}
            />
          </motion.div>
        </motion.button>
      </div>

      {/* ── Row 2: Product image ────────────────────────────────────────────── */}
      {/* Fixed height so all cards align regardless of image size */}
      <div className="relative z-10 mt-3 flex h-44 shrink-0 items-center justify-center">
        <div className="absolute h-28 w-28 rounded-full bg-[#0066FF]/8 blur-2xl" />
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedColor.label}
            initial={{ opacity: 0, scale: 0.82, y: 10, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1,    y: 0,  rotateY: 0   }}
            exit={  { opacity: 0, scale: 0.82, y: -8,  rotateY: 10  }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative z-10"
          >
            <Image
              src={selectedColor.image}
              alt={`${name} – ${selectedColor.label}`}
              width={160}
              height={160}
              className="object-contain drop-shadow-[0_16px_24px_rgba(0,102,255,0.16)]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Row 3: Brand + Name + Rating ───────────────────────────────────── */}
      <div className="relative z-10 mt-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0066FF]/70">
          {brand}
        </p>
        <h3 className="mt-0.5 truncate text-[17px] font-black tracking-tight text-gray-900">
          {name}
        </h3>
        <div className="mt-1.5 flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={
                  i < Math.floor(rating)
                    ? "fill-[#0066FF] text-[#0066FF]"
                    : "fill-gray-200 text-gray-200"
                }
              />
            ))}
          </div>
          <span className="text-[11px] text-gray-400">({reviewCount})</span>
        </div>
      </div>

      {/* ── Row 4: Price ───────────────────────────────────────────────────── */}
      <div className="relative z-10 mt-3 rounded-2xl border border-[#7DBBFF]/15 bg-white/60 px-4 py-3">
        <p className="text-[11px] text-gray-400 line-through">{originalPrice}</p>
        <div className="flex items-baseline justify-between">
          <h4 className="text-[20px] font-black tracking-tight text-gray-900">
            {salePrice}
          </h4>
          <span className="text-[11px] font-semibold text-[#0066FF]">
            {salePriceLabel}
          </span>
        </div>
      </div>

      {/* ── Row 5: Storage options ──────────────────────────────────────────── */}
      {storageOptions && storageOptions.length > 0 ? (
        <div className="relative z-10 mt-4 min-h-18.5">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
            Storage
          </p>
          <div className="flex flex-wrap gap-1.5">
            {storageOptions.map((opt) => {
              const isActive = selectedStorage?.label === opt.label;
              return (
                <motion.button
                  key={opt.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedStorage(opt)}
                  className={`rounded-xl px-3 py-1.5 text-[11px] font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-linear-to-r from-[#0066FF] to-[#7DBBFF] text-white shadow-[0_0_12px_rgba(0,102,255,0.28)]"
                      : "border border-[#7DBBFF]/25 bg-white/70 text-gray-600 hover:border-[#0066FF]/35 hover:text-[#0066FF]"
                  }`}
                >
                  {opt.label}
                  {opt.priceSuffix && (
                    <span className={`ml-1 text-[10px] ${isActive ? "text-white/70" : "text-gray-400"}`}>
                      {opt.priceSuffix}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      ) : (
        // Reserve the same space even when there are no storage options
        <div className="min-h-18.5" />
      )}

      {/* ── Row 6: Color swatches ───────────────────────────────────────────── */}
      {colorOptions.length > 1 ? (
        <div className="relative z-10 mt-3 min-h-13">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
            Color
            <span className="ml-1.5 font-normal normal-case tracking-normal text-gray-500">
              — {selectedColor.label}
            </span>
          </p>
          <div className="flex items-center gap-2">
            {colorOptions.map((color) => {
              const isActive = selectedColor.label === color.label;
              return (
                <motion.button
                  key={color.label}
                  whileHover={{ scale: 1.18 }}
                  whileTap={{ scale: 0.88 }}
                  onClick={() => selectedColor.label !== color.label && setSelectedColor(color)}
                  aria-label={color.label}
                  title={color.label}
                  className="relative flex h-7 w-7 items-center justify-center rounded-full"
                  style={{
                    boxShadow: isActive
                      ? `0 0 0 2px white, 0 0 0 3.5px ${color.swatch}`
                      : "none",
                  }}
                >
                  <span
                    className="h-5 w-5 rounded-full border border-black/10 shadow-sm"
                    style={{ backgroundColor: color.swatch }}
                  />
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.16 }}
                        className="absolute flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white/85"
                      >
                        <Check size={8} strokeWidth={3.5} className="text-gray-800" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>
      ) : (
        // Reserve space so single-color products align with multi-color siblings
        <div className="min-h-13" />
      )}

      {/* ── Row 7: Add to Cart — mt-auto pins this to the card bottom ──────── */}
      <div className="relative z-10 mt-auto pt-4">
        <motion.button
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleAddToCart}
          className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition-all duration-300 ${
            addedToCart
              ? "bg-green-500 text-white shadow-[0_0_18px_rgba(34,197,94,0.35)]"
              : "bg-linear-to-r from-[#0066FF] to-[#7DBBFF] text-white shadow-[0_0_22px_rgba(0,102,255,0.28)]"
          }`}
        >
          <AnimatePresence mode="wait">
            {addedToCart ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex items-center gap-2"
              >
                <Check size={15} strokeWidth={2.5} />
                Added to Cart
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex items-center gap-2"
              >
                <ShoppingCart size={15} />
                Add to Cart
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

    </motion.div>
  );
}