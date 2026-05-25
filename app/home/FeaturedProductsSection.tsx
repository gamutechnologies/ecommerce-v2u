"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Star,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    name: "MacBook Pro M4",
    image: "/images/products/laptop.png",
    category: "Laptop",
    price: "$2,499",
    rating: 5,
  },
  {
    name: "iPhone 17 Pro",
    image: "/images/products/iphone.png",
    category: "Smartphone",
    price: "$1,699",
    rating: 5,
  },
  {
    name: "Sony WH-1000XM6",
    image: "/images/products/headphones.png",
    category: "Audio",
    price: "$499",
    rating: 5,
  },
  {
    name: "Logitech G Pro X",
    image: "/images/products/keyboard.png",
    category: "Gaming",
    price: "$249",
    rating: 5,
  },
  {
    name: "Samsung Odyssey OLED",
    image: "/images/products/monitor.png",
    category: "Monitor",
    price: "$1,299",
    rating: 5,
  },
  {
    name: "Razer Viper V3",
    image: "/images/products/mouse.png",
    category: "Accessories",
    price: "$159",
    rating: 5,
  },
];

export default function FeaturedProductsSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background Glow */}
      <div className="absolute left-[-5%] top-[10%] h-96 w-96 rounded-full bg-[#0066FF]/10 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-5%] h-96 w-96 rounded-full bg-[#7DBBFF]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center justify-between gap-6 lg:flex-row"
        >
          <div>
            <span className="rounded-full border border-[#7DBBFF]/20 bg-white/60 px-5 py-2 text-sm font-medium text-[#0066FF] backdrop-blur-xl">
              Featured Products
            </span>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">
              Trending
              <span className="bg-linear-to-r from-[#0066FF] to-[#7DBBFF] bg-clip-text text-transparent">
                {" "}Tech Collection
              </span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-3 rounded-full border border-[#7DBBFF]/20 bg-white/70 px-7 py-4 text-sm font-semibold text-gray-800 backdrop-blur-xl transition-all duration-300 hover:border-[#0066FF]/30 hover:bg-[#0066FF]/10 hover:text-[#0066FF]"
          >
            View All Products
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>
        </motion.div>
        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
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
              className="group relative overflow-hidden rounded-[38px] border border-[#7DBBFF]/20 bg-white/50 p-7 backdrop-blur-3xl"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/15 blur-3xl" />
              </div>
              {/* Shine */}
              <div className="absolute left-[-120%] top-0 h-full w-[120%] rotate-12 bg-white/30 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />
              {/* Top Actions */}
              <div className="relative z-10 flex items-start justify-between">
                <span className="rounded-full border border-[#7DBBFF]/20 bg-white/70 px-4 py-2 text-xs font-semibold text-[#0066FF] backdrop-blur-xl">
                  {product.category}
                </span>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7DBBFF]/20 bg-white/70 text-gray-700 backdrop-blur-xl transition-all duration-300 hover:border-pink-300 hover:bg-pink-50 hover:text-pink-500"
                >
                  <Heart size={18} />
                </motion.button>
              </div>
              {/* Product Image */}
              <motion.div
                whileHover={{
                  scale: 1.06,
                  rotate: -2,
                }}
                transition={{ duration: 0.4 }}
                className="relative z-10 mt-8 flex h-65 items-center justify-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={320}
                  height={320}
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,102,255,0.18)] transition-all duration-500 group-hover:scale-110"
                />
              </motion.div>
              {/* Product Info */}
              <div className="relative z-10 mt-8">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#0066FF] text-[#0066FF]"
                    />
                  ))}
                </div>
                {/* Title */}
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
                  {product.name}
                </h3>
                {/* Price */}
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Starting From
                    </p>
                    <h4 className="mt-1 text-3xl font-black text-[#0066FF]">
                      {product.price}
                    </h4>
                  </div>
                  {/* Add Cart */}
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/cart flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-[#0066FF] to-[#7DBBFF] text-white shadow-[0_0_30px_rgba(0,102,255,0.3)]"
                  >
                    <ShoppingCart
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