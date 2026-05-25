"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const products = [
  "/images/home/hero-laptop.webp",
  "/images/home/hero-phone.webp",
  "/images/home/hero-headphones.webp",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-40">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#F8FBFF]" />
      <div className="absolute left-[-10%] top-[10%] h-100 w-100 rounded-full bg-[#0066FF]/15 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-5%] h-87.5 w-87.5 rounded-full bg-[#7DBBFF]/20 blur-3xl" />
      {/* Grid */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex w-fit items-center gap-2 rounded-full border border-[#7DBBFF]/20 bg-white/60 px-5 py-2 backdrop-blur-xl"
          >
            <Star size={16} className="fill-[#0066FF] text-[#0066FF]" />
            <span className="text-sm font-medium text-gray-700">
              Premium Retail Tech Store
            </span>
          </motion.div>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight text-gray-900 md:text-7xl"
          >
            Experience The Future Of
            <span className="bg-linear-to-r from-[#0066FF] to-[#7DBBFF] bg-clip-text text-transparent">
              {" "}Tech Shopping
            </span>
          </motion.h1>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-600"
          >
            Discover premium electronics, gaming setups, smart devices,
            accessories, and futuristic gadgets with an immersive shopping
            experience.
          </motion.p>
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {/* Primary */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-3 rounded-full bg-linear-to-r from-[#0066FF] to-[#7DBBFF] px-8 py-4 text-sm font-semibold text-white shadow-[0_0_35px_rgba(0,102,255,0.35)]"
            >
              Shop Now
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
            {/* Secondary */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full border border-[#7DBBFF]/20 bg-white/70 px-8 py-4 text-sm font-semibold text-gray-800 backdrop-blur-xl"
            >
              Explore Products
            </motion.button>
          </motion.div>
          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap gap-6"
          >
            {[
              { value: "10K+", label: "Products" },
              { value: "5K+", label: "Customers" },
              { value: "250+", label: "Brands" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="rounded-[28px] border border-[#7DBBFF]/20 bg-white/50 px-6 py-5 backdrop-blur-2xl"
              >
                <h3 className="text-2xl font-bold text-[#0066FF]">
                  {item.value}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Right Content */}
        <div className="relative">
          {/* Floating Glass Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-10 z-20 rounded-[32px] border border-white/30 bg-white/40 p-5 backdrop-blur-2xl"
          >
            <p className="text-sm font-medium text-gray-700">
              Latest Tech Collection
            </p>

            <h4 className="mt-2 text-xl font-bold text-gray-900">
              Ultra Premium Devices
            </h4>
          </motion.div>
          {/* Main Product Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden rounded-[42px] border border-white/20 bg-white/50 p-10 backdrop-blur-3xl"
          >
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-87.5 w-87.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/15 blur-3xl" />
            {/* Slider */}
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>

                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="relative flex justify-center"
                  >

                    <Image
                      src={product}
                      alt="Product"
                      width={650}
                      height={650}
                      className="relative z-10 object-contain drop-shadow-[0_35px_35px_rgba(0,102,255,0.2)]"
                    />

                  </motion.div>

                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          {/* Floating Review Card */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-0 z-20 rounded-[30px] border border-white/20 bg-white/50 p-5 backdrop-blur-2xl"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="fill-[#0066FF] text-[#0066FF]"
                />
              ))}
            </div>
            <h4 className="mt-3 text-lg font-bold text-gray-900">
              4.9 Customer Rating
            </h4>
            <p className="mt-1 text-sm text-gray-600">
              Trusted by thousands of tech lovers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}