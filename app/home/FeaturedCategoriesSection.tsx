"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const categories = [
  {
    title: "Laptops",
    image: "/images/categories/laptops.webp",
  },
  {
    title: "Smartphones",
    image: "/images/categories/phones.webp",
  },
  {
    title: "Gaming",
    image: "/images/categories/gaming.webp",
  },
  {
    title: "Audio",
    image: "/images/categories/audio.webp",
  },
  {
    title: "Smartwatches",
    image: "/images/categories/smartwatch.webp",
  },
  {
    title: "Accessories",
    image: "/images/categories/accessories.webp",
  },{
    title: "Laptops",
    image: "/images/categories/laptops.webp",
  }
];

export default function FeaturedCategoriesSection() {
  const useCarousel = categories.length > 6;

  return (
    <section className="relative overflow-hidden px-6 py-16">
      {/* Background Glow */}
      <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-[#0066FF]/10 blur-3xl" />
      <div className="absolute right-[10%] top-[30%] h-72 w-72 rounded-full bg-[#7DBBFF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="rounded-full border border-[#0066FF]/10 bg-[#0066FF]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
              Categories
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
              Shop By{" "}
              <span className="bg-linear-to-r from-[#0066FF] to-[#7DBBFF] bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
          </div>

          {/* Navigation */}
          {useCarousel && (
            <div className="flex items-center gap-3">
              <button className="category-prev flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/80 backdrop-blur-xl transition-all hover:border-[#0066FF]/20 hover:bg-[#0066FF]/5">
                <ArrowLeft size={18} />
              </button>

              <button className="category-next flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/80 backdrop-blur-xl transition-all hover:border-[#0066FF]/20 hover:bg-[#0066FF]/5">
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </motion.div>

        {/* GRID MODE */}
        {!useCarousel && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/40 bg-white/60 p-5 backdrop-blur-2xl"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-linear-to-b from-[#0066FF]/10 to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Image */}
                  <div className="relative flex h-28 items-center justify-center">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={130}
                      height={130}
                      className="object-contain transition-all duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Text */}
                  <div className="mt-3 text-center">
                    <h3 className="text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#0066FF]">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CAROUSEL MODE */}
        {useCarousel && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={18}
            slidesPerView={2}
            navigation={{
              prevEl: ".category-prev",
              nextEl: ".category-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/40 bg-white/60 p-5 backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-linear-to-b from-[#0066FF]/10 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    <div className="relative flex h-28 items-center justify-center">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={130}
                        height={130}
                        className="object-contain transition-all duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="mt-3 text-center">
                      <h3 className="text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#0066FF]">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}