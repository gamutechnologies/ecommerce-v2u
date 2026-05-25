"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, Sparkles, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/custom/ProductCard";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ColorOption {
  label: string;
  swatch: string;
  image: string;
}

interface StorageOption {
  label: string;
  priceSuffix?: string;
}

interface Product {
  id: string;
  brand: string;
  name: string;
  originalPrice: string;
  salePrice: string;
  salePriceLabel?: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  category: string;
  featured: boolean; // ← set to false to hide from this section
  colorOptions: ColorOption[];
  storageOptions?: StorageOption[];
}

// ─── Product Data ─────────────────────────────────────────────────────────────
// To remove a product from this section, set featured: false

const ALL_PRODUCTS: Product[] = [
  // ── Phones ──────────────────────────────────────────────────────────────────
  {
    id: "iphone-17-pro-max",
    brand: "Apple",
    name: "iPhone 17 Pro Max",
    originalPrice: "RS 481,010",
    salePrice: "RS 467,000",
    salePriceLabel: "Cash Discount Price",
    badge: "New",
    rating: 5,
    reviewCount: 214,
    category: "Phones",
    featured: true,
    colorOptions: [
      { label: "Cosmic Orange", swatch: "#F97316", image: "/images/product/iphone17promax-orange.webp" },
      { label: "Deep Blue",  swatch: "#1C1C1E", image: "/images/product/iphone17promax-blue.webp" },
      { label: "Silver",swatch: "#C4B49E", image: "/images/product/iphone17promax-silver.webp"},
    ],
    storageOptions: [
      { label: "256 GB" },
      { label: "512 GB", priceSuffix: "+$100" },
      { label: "1 TB",   priceSuffix: "+$200" },
      { label: "2 TB",   priceSuffix: "+$300" },
    ],
  },
  {
    id: "samsung-galaxy-s25-ultra",
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    originalPrice: "$1,499",
    salePrice: "$1,299",
    salePriceLabel: "Launch Offer",
    badge: "Hot",
    rating: 5,
    reviewCount: 189,
    category: "Phones",
    featured: true,
    colorOptions: [
      { label: "Titanium Black",  swatch: "#2C2C2E", image: "/images/product/galaxy-black.png"  },
      { label: "Titanium Silver", swatch: "#A8A8A8", image: "/images/product/galaxy-silver.png" },
      { label: "Titanium Blue",   swatch: "#3A5A8C", image: "/images/product/galaxy-blue.png"   },
    ],
    storageOptions: [
      { label: "256 GB" },
      { label: "512 GB", priceSuffix: "+$100" },
      { label: "1 TB",   priceSuffix: "+$200" },
    ],
  },
  // ── Laptops ─────────────────────────────────────────────────────────────────
  {
    id: "macbook-pro-m4",
    brand: "Apple",
    name: "MacBook Pro M4",
    originalPrice: "$2,799",
    salePrice: "$2,499",
    salePriceLabel: "Limited Time Deal",
    badge: "New",
    rating: 5,
    reviewCount: 87,
    category: "Laptops",
    featured: true,
    colorOptions: [
      { label: "Space Black", swatch: "#1C1C1E", image: "/images/product/macbook-black.png"  },
      { label: "Silver",      swatch: "#A8A8A8", image: "/images/product/macbook-silver.png" },
    ],
    storageOptions: [
      { label: "512 GB" },
      { label: "1 TB",  priceSuffix: "+$200" },
      { label: "2 TB",  priceSuffix: "+$400" },
    ],
  },
  {
    id: "asus-rog-zephyrus-g16",
    brand: "Asus",
    name: "ROG Zephyrus G16",
    originalPrice: "$2,299",
    salePrice: "$1,999",
    salePriceLabel: "Gamer Deal",
    badge: "Hot",
    rating: 5,
    reviewCount: 63,
    category: "Laptops",
    featured: true,
    colorOptions: [
      { label: "Eclipse Gray",  swatch: "#3A3A3C", image: "/images/product/rog-gray.png"  },
      { label: "Platinum White",swatch: "#F0EFEB", image: "/images/product/rog-white.png" },
    ],
    storageOptions: [
      { label: "1 TB" },
      { label: "2 TB", priceSuffix: "+$300" },
    ],
  },
  // ── Audio ────────────────────────────────────────────────────────────────────
  {
    id: "sony-wh-1000xm6",
    brand: "Sony",
    name: "WH-1000XM6",
    originalPrice: "$549",
    salePrice: "$449",
    salePriceLabel: "Member Price",
    badge: "Sale",
    rating: 5,
    reviewCount: 312,
    category: "Audio",
    featured: true,
    colorOptions: [
      { label: "Midnight Black",   swatch: "#1A1A1A", image: "/images/product/headphones-black.png"  },
      { label: "Platinum Silver",  swatch: "#C0C0C0", image: "/images/product/headphones-silver.png" },
      { label: "Midnight Blue",    swatch: "#1B2A4A", image: "/images/product/headphones-blue.png"   },
    ],
  },
  {
    id: "jbl-pulse-ultra",
    brand: "JBL",
    name: "Pulse Ultra Speaker",
    originalPrice: "$449",
    salePrice: "$399",
    salePriceLabel: "Weekend Deal",
    badge: "Sale",
    rating: 4,
    reviewCount: 156,
    category: "Audio",
    featured: false, // ← hidden from Featured section
    colorOptions: [
      { label: "Jet Black", swatch: "#1A1A1A", image: "/images/product/jbl-black.png" },
      { label: "Cobalt",    swatch: "#0047AB", image: "/images/product/jbl-blue.png"  },
    ],
  },
  // ── Gaming ───────────────────────────────────────────────────────────────────
  {
    id: "logitech-gpro-x",
    brand: "Logitech",
    name: "G Pro X Superlight",
    originalPrice: "$299",
    salePrice: "$249",
    salePriceLabel: "Pro Discount",
    badge: "New",
    rating: 5,
    reviewCount: 445,
    category: "Gaming",
    featured: true,
    colorOptions: [
      { label: "Carbon Black", swatch: "#1A1A1A", image: "/images/product/gpro-black.png" },
      { label: "Ghost White",  swatch: "#F5F5F0", image: "/images/product/gpro-white.png" },
    ],
  },
  {
    id: "samsung-odyssey-oled",
    brand: "Samsung",
    name: "Odyssey OLED G9",
    originalPrice: "$1,499",
    salePrice: "$1,299",
    salePriceLabel: "Display Deal",
    rating: 5,
    reviewCount: 72,
    category: "Gaming",
    featured: true,
    colorOptions: [
      { label: "Matte Black", swatch: "#1A1A1A", image: "/images/product/odyssey-black.png" },
    ],
  },
  // ── Wearables ────────────────────────────────────────────────────────────────
  {
    id: "apple-watch-ultra-2",
    brand: "Apple",
    name: "Watch Ultra 2",
    originalPrice: "$999",
    salePrice: "$899",
    salePriceLabel: "Trade-in Offer",
    badge: "Hot",
    rating: 5,
    reviewCount: 203,
    category: "Wearables",
    featured: true,
    colorOptions: [
      { label: "Titanium",      swatch: "#8A8A8A", image: "/images/product/watch-titanium.png" },
      { label: "Black",         swatch: "#1C1C1E", image: "/images/product/watch-black.png"    },
      { label: "Natural",       swatch: "#C4B49E", image: "/images/product/watch-natural.png"  },
    ],
  },
];

// ─── Category Tabs Config ─────────────────────────────────────────────────────

const CATEGORIES = ["All", "Phones", "Laptops", "Audio", "Gaming", "Wearables"];

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  exit:   { opacity: 0, y: -16, scale: 0.96, transition: { duration: 0.25 } },
};


// ─── Section ──────────────────────────────────────────────────────────────────

export default function FeaturedProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter: only featured=true, then filter by category tab
  const visibleProducts = useMemo(() => {
    const featured = ALL_PRODUCTS.filter((p) => p.featured);
    if (activeCategory === "All") return featured;
    return featured.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Count badges per tab (only from featured products)
  const countFor = (cat: string) => {
    const featured = ALL_PRODUCTS.filter((p) => p.featured);
    if (cat === "All") return featured.length;
    return featured.filter((p) => p.category === cat).length;
  };

  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* ── Background ─────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10 bg-[#F0F6FF]" />
      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-linear(circle, #0066FF18 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute left-[-8%] top-[5%] h-96 w-96 rounded-full bg-[#0066FF]/10 blur-3xl" />
      <div className="absolute bottom-[-5%] right-[-8%] h-96 w-96 rounded-full bg-[#7DBBFF]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ── Section Header ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7DBBFF]/30 bg-white/70 px-5 py-2 backdrop-blur-xl">
              <Sparkles size={14} className="text-[#0066FF]" />
              <span className="text-sm font-semibold text-[#0066FF]">
                Featured Collection
              </span>
            </div>

            {/* Heading — split-line style */}
            <h2 className="mt-5 text-5xl font-black leading-none tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Hand-Picked
              <span className="block bg-linear-to-r from-[#0066FF] to-[#7DBBFF] bg-clip-text text-transparent">
                For You
              </span>
            </h2>

            {/* Accent line */}
            <div className="mt-5 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-linear-to-r from-[#0066FF] to-[#7DBBFF]" />
              <p className="text-sm text-gray-500">
                {countFor("All")} premium products — curated collection
              </p>
            </div>
          </div>

          {/* Right — View All */}
          <Link href="/shop">
            <motion.span
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 rounded-full border border-[#7DBBFF]/25 bg-white/70 px-7 py-4 text-sm font-semibold text-gray-800 backdrop-blur-xl transition-all duration-300 hover:border-[#0066FF]/30 hover:bg-[#0066FF]/8 hover:text-[#0066FF]"
            >
              View All Products
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.span>
          </Link>
        </motion.div>

        {/* ── Category Tabs ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
        >
          {CATEGORIES.map((cat) => {
            const count = countFor(cat);
            if (count === 0) return null; // hide tabs with no products
            const isActive = activeCategory === cat;

            return (
              <motion.button
                key={cat}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCategory(cat)}
                className={`relative flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-250 ${
                  isActive
                    ? "bg-linear-to-r from-[#0066FF] to-[#7DBBFF] text-white shadow-[0_0_20px_rgba(0,102,255,0.28)]"
                    : "border border-[#7DBBFF]/25 bg-white/70 text-gray-600 backdrop-blur-xl hover:border-[#0066FF]/30 hover:text-[#0066FF]"
                }`}
              >
                {cat}
                {/* Count bubble */}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[11px] font-bold leading-none ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#0066FF]/10 text-[#0066FF]"
                  }`}
                >
                  {count}
                </span>
              </motion.button>
            );
          })}

          {/* Divider + sort hint */}
          <div className="ml-auto hidden shrink-0 items-center gap-2 rounded-full border border-[#7DBBFF]/20 bg-white/60 px-4 py-2.5 backdrop-blur-xl lg:flex">
            <SlidersHorizontal size={14} className="text-[#0066FF]" />
            <span className="text-xs font-medium text-gray-500">
              {visibleProducts.length} products
            </span>
          </div>
        </motion.div>

        {/* ── Product Grid with animated filter ────────────────────────────── */}
        <div className="relative mt-10 min-h-75">
          <AnimatePresence mode="wait">
            {visibleProducts.length > 0 ? (
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
              >
                {visibleProducts.map((product) => (
                  <motion.div key={product.id} variants={cardVariants}>
                    <ProductCard
                      brand={product.brand}
                      name={product.name}
                      originalPrice={product.originalPrice}
                      salePrice={product.salePrice}
                      salePriceLabel={product.salePriceLabel}
                      badge={product.badge}
                      rating={product.rating}
                      reviewCount={product.reviewCount}
                      colorOptions={product.colorOptions}
                      storageOptions={product.storageOptions}
                      onAddToCart={(color, storage) => {
                        console.log(
                          `[Cart] ${product.name} — ${color.label}${storage ? ` / ${storage.label}` : ""}`
                        );
                      }}
                      onWishlist={(name) => {
                        console.log(`[Wishlist] ${name}`);
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* ── Empty state ──────────────────────────────────────────────── */
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center gap-4 rounded-[38px] border border-dashed border-[#7DBBFF]/30 bg-white/40 py-24 backdrop-blur-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-linear-to-br from-[#0066FF] to-[#7DBBFF] text-white shadow-[0_0_30px_rgba(0,102,255,0.2)]">
                  <Sparkles size={28} />
                </div>
                <p className="text-lg font-bold text-gray-700">
                  No featured products in this category
                </p>
                <p className="text-sm text-gray-400">
                  Set{" "}
                  <code className="rounded bg-gray-100 px-2 py-0.5 text-xs text-[#0066FF]">
                    featured: true
                  </code>{" "}
                  on a product to show it here
                </p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveCategory("All")}
                  className="mt-2 rounded-full bg-linear-to-r from-[#0066FF] to-[#7DBBFF] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,102,255,0.25)]"
                >
                  View All Products
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Bottom CTA strip ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[32px] border border-[#7DBBFF]/20 bg-white/50 px-10 py-8 backdrop-blur-2xl sm:flex-row"
        >
          <div>
            <p className="text-lg font-bold text-gray-900">
              Didn't find what you're looking for?
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Browse our complete catalog with 10,000+ products across every category.
            </p>
          </div>
          <Link href="/shop">
            <motion.span
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-linear-to-r from-[#0066FF] to-[#7DBBFF] px-8 py-4 text-sm font-bold text-white shadow-[0_0_28px_rgba(0,102,255,0.28)]"
            >
              Explore Full Shop
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}