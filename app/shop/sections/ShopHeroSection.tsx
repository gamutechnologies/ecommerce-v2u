"use client";

import { motion } from "framer-motion";

export default function ShopHeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">

      <div className="absolute left-[-10%] top-[-20%] h-[400px] w-[400px] rounded-full bg-[#0066FF]/10 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#7DBBFF]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black md:text-7xl"
        >
          Shop <span className="text-[#0066FF]">Premium Tech</span>
        </motion.h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Explore cutting-edge gadgets, electronics, gaming gear, and smart devices.
        </p>

      </div>

    </section>
  );
}