"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Flame,
  Star,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";

const products = [
  {
    name: "Sony Alpha X",
    image: "/images/trending/camera.png",
    price: "$3,499",
    category: "Camera",
  },
  {
    name: "JBL Pulse Ultra",
    image: "/images/trending/speaker.png",
    price: "$399",
    category: "Audio",
  },
  {
    name: "Meta Vision Pro",
    image: "/images/trending/vr.png",
    price: "$2,999",
    category: "VR",
  },
  {
    name: "iPad Pro M5",
    image: "/images/trending/ipad.png",
    price: "$1,499",
    category: "Tablet",
  },
  {
    name: "Apple Watch X",
    image: "/images/trending/watch.png",
    price: "$799",
    category: "Wearable",
  },
  {
    name: "PS5 Pro Controller",
    image: "/images/trending/controller.png",
    price: "$249",
    category: "Gaming",
  },
];

export default function TrendingProductsSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background Glow */}
      <div className="absolute left-[-5%] top-[10%] h-105 w-105 rounded-full bg-[#0066FF]/10 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-5%] h-105 w-105 rounded-full bg-[#7DBBFF]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7DBBFF]/20 bg-white/60 px-5 py-2 backdrop-blur-xl">
            <Flame size={16} className="text-[#0066FF]" />
            <span className="text-sm font-medium text-[#0066FF]">
              Trending Products
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">
            What’s
            <span className="bg-linear-to-r from-[#0066FF] to-[#7DBBFF] bg-clip-text text-transparent">
              {" "}Trending Now
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Explore the hottest premium gadgets and futuristic technology
            products dominating the market right now.
          </p>
        </motion.div>
        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[38px] border border-[#7DBBFF]/20 bg-white/50 p-7 backdrop-blur-3xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/15 blur-3xl" />
              </div>
              {/* Shine */}
              <div className="absolute left-[-120%] top-0 h-full w-[120%] rotate-12 bg-white/30 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />
              {/* Category */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="rounded-full border border-[#7DBBFF]/20 bg-white/70 px-4 py-2 text-xs font-semibold text-[#0066FF] backdrop-blur-xl">
                  {product.category}
                </span>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7DBBFF]/20 bg-white/70 text-gray-700 backdrop-blur-xl transition-all duration-300 hover:border-[#0066FF]/30 hover:bg-[#0066FF]/10 hover:text-[#0066FF]"
                >
                  <ArrowUpRight size={18} />
                </motion.button>
              </div>
              {/* Image */}
              <motion.div
                whileHover={{
                  scale: 1.06,
                  rotate: -3,
                }}
                transition={{ duration: 0.4 }}
                className="relative z-10 mt-10 flex h-65 items-center justify-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={320}
                  height={320}
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,102,255,0.18)] transition-all duration-500 group-hover:scale-110"
                />
              </motion.div>
              {/* Info */}
              <div className="relative z-10 mt-8">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className="fill-[#0066FF] text-[#0066FF]"
                    />
                  ))}
                </div>
                {/* Title */}
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
                  {product.name}
                </h3>
                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Trending Price
                    </p>
                    <h4 className="mt-1 text-3xl font-black text-[#0066FF]">
                      {product.price}
                    </h4>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/cart flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-[#0066FF] to-[#7DBBFF] text-white shadow-[0_0_30px_rgba(0,102,255,0.3)]"
                  >
                    <ShoppingBag
                      size={20}
                      className="transition-transform duration-300 group-hover/cart:scale-110"
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}