"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";

const promotions = [
  {
    id: 1,
    title: "PS5 Slim Offer",
    subtitle: "Eid Offer for PS5 Slim",
    image: "/images/banners/promo-1.png",
  },
  {
    id: 2,
    title: "20% OFF!!",
    subtitle: "Razer products on sale",
    image: "/images/banners/promo-2.png",
  },
  {
    id: 3,
    title: "Luxury Smartphones",
    subtitle: "Future In Your Hands",
    image: "/images/banners/promo-3.png",
  },
  {
    id: 4,
    title: "Smart Workspaces",
    subtitle: "Minimal Productivity",
    image: "/images/banners/promo-4.png",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % promotions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visiblePromos = [
    promotions[activeIndex % promotions.length],
    promotions[(activeIndex + 1) % promotions.length],
    promotions[(activeIndex + 2) % promotions.length],
  ];
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-40">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#F8FBFF]" />
      <div className="absolute left-[-10%] top-[10%] h-100 w-100 rounded-full bg-[#0066FF]/15 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-5%] h-87.5 w-87.5 rounded-full bg-[#7DBBFF]/20 blur-3xl" />
      {/* Grid */}
      <div className="grid h-200 grid-cols-[1.6fr_1fr] gap-5">
        {/* Large Left Card */}
        <motion.div
          layout
          className="group relative overflow-hidden rounded-2xl"
        >
          <Image
            src={visiblePromos[0].image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-8 left-8 z-10">
            <p className="text-sm text-white/70">{visiblePromos[0].subtitle}</p>

            <h2 className="mt-2 text-4xl font-black text-white">
              {visiblePromos[0].title}
            </h2>
          </div>
        </motion.div>

        {/* Right Small Cards */}
        <div className="flex flex-col gap-5">
          {visiblePromos.slice(1).map((promo) => (
            <motion.div
              key={promo.id}
              layout
              className="group relative flex-1 overflow-hidden rounded-2xl"
            >
              <Image
                src={promo.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-xs text-white/70">{promo.subtitle}</p>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  {promo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
