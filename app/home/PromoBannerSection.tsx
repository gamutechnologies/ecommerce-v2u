"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PromoBannerSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[-20%] h-125 w-125 rounded-full bg-[#0066FF]/15 blur-3xl" />
      <div className="absolute bottom-[-30%] right-[-10%] h-125 w-125 rounded-full bg-[#7DBBFF]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[48px] border border-[#7DBBFF]/20 bg-linear-to-br from-[#0066FF] via-[#2B7FFF] to-[#7DBBFF] px-10 py-16 md:px-16 lg:px-20"
        >
          {/* Animated Glow */}
          <div className="absolute left-0 top-0 h-full w-full opacity-40">
            <motion.div
              animate={{
                x: [0, 80, 0],
                y: [0, -40, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
              className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-white/20 blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -60, 0],
                y: [0, 50, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "easeInOut",
              }}
              className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-[#D9EEFF]/20 blur-3xl"
            />
          </div>
          {/* Shine */}
          <div className="absolute left-[-120%] top-0 h-full w-[120%] rotate-12 bg-white/20 blur-3xl transition-all duration-1000 group-hover:left-[120%]" />
          {/* Content */}
          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              {/* Badge */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="mb-8 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-xl"
              >
                <Sparkles size={16} className="text-white" />
                <span className="text-sm font-medium text-white">
                  Limited Time Offer
                </span>
              </motion.div>
              {/* Heading */}
              <h2 className="max-w-xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
                Upgrade Your
                <span className="block text-[#D9EEFF]">
                  Tech Experience
                </span>
              </h2>
              {/* Description */}
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
                Discover premium electronics, immersive audio systems,
                gaming devices, and futuristic accessories with exclusive
                limited-time offers.
              </p>
              {/* Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                {/* Primary */}
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0066FF] shadow-[0_0_40px_rgba(255,255,255,0.25)]"
                >
                  Shop Deals
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
                {/* Secondary */}
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
                >
                  Explore Collection
                </motion.button>
              </div>
              {/* Stats */}
              <div className="mt-14 flex flex-wrap gap-6">
                {[
                  {
                    value: "50%",
                    label: "Exclusive Discounts",
                  },
                  {
                    value: "24H",
                    label: "Flash Deals",
                  },
                  {
                    value: "100+",
                    label: "Premium Products",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="rounded-[28px] border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-2xl"
                  >
                    <h3 className="text-3xl font-black text-white">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-sm text-white/70">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Right */}
            <div className="relative flex justify-center">
              {/* Floating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear",
                }}
                className="absolute h-105 w-105 rounded-full border border-white/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 24,
                  ease: "linear",
                }}
                className="absolute h-130 w-130 rounded-full border border-white/5"
              />
              {/* Product Image */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src="/images/banners/promo-headphones.png"
                  alt="Promo Product"
                  width={650}
                  height={650}
                  className="object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.25)]"
                />
              </motion.div>
              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute bottom-10 left-0 rounded-[30px] border border-white/20 bg-white/10 p-5 backdrop-blur-2xl"
              >
                <p className="text-sm font-medium text-white/70">
                  Starting From
                </p>
                <h4 className="mt-2 text-3xl font-black text-white">
                  $299
                </h4>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}