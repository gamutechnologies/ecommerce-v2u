"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Laptops",
    image: "/images/categories/laptops.png",
    description: "Ultra-performance laptops for creators and gamers.",
  },
  {
    title: "Smartphones",
    image: "/images/categories/phones.png",
    description: "Flagship smartphones with futuristic technology.",
  },
  {
    title: "Gaming",
    image: "/images/categories/gaming.png",
    description: "Immersive gaming setups and powerful accessories.",
  },
  {
    title: "Audio",
    image: "/images/categories/audio.png",
    description: "Premium headphones, speakers, and audio devices.",
  },
  {
    title: "Smartwatches",
    image: "/images/categories/smartwatch.png",
    description: "Smart wearable technology for modern lifestyles.",
  },
  {
    title: "Accessories",
    image: "/images/categories/accessories.png",
    description: "Premium accessories for every tech experience.",
  },
];

export default function FeaturedCategoriesSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background */}
      <div className="absolute left-[5%] top-[10%] h-80 w-80 rounded-full bg-[#0066FF]/10 blur-3xl" />
      <div className="absolute bottom-[0%] right-[5%] h-80 w-80 rounded-full bg-[#7DBBFF]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-[#7DBBFF]/20 bg-white/60 px-5 py-2 text-sm font-medium text-[#0066FF] backdrop-blur-xl">
            Explore Categories
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">
            Browse By
            <span className="bg-linear-to-r from-[#0066FF] to-[#7DBBFF] bg-clip-text text-transparent">
              {" "}Tech Category
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Explore premium collections of cutting-edge electronics,
            gaming gear, accessories, and smart devices.
          </p>
        </motion.div>
        {/* Categories Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[38px] border border-[#7DBBFF]/20 bg-white/50 p-8 backdrop-blur-3xl"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/15 blur-3xl" />
              </div>
              {/* Shine Effect */}
              <div className="absolute left-[-120%] top-0 h-full w-[120%] rotate-12 bg-white/30 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />
              {/* Content */}
              <div className="relative z-10">
                {/* Image */}
                <motion.div
                  whileHover={{
                    scale: 1.06,
                    rotate: -2,
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative flex h-65 items-center justify-center"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={340}
                    height={340}
                    className="object-contain drop-shadow-[0_30px_30px_rgba(0,102,255,0.18)] transition-all duration-500 group-hover:scale-110"
                  />
                </motion.div>
                {/* Text */}
                <div className="mt-4">
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                    {category.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {category.description}
                  </p>
                </div>
                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="group/button mt-8 flex items-center gap-3 rounded-full border border-[#7DBBFF]/20 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-800 backdrop-blur-xl transition-all duration-300 hover:border-[#0066FF]/30 hover:bg-[#0066FF]/10 hover:text-[#0066FF]"
                >
                  Explore Category
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}