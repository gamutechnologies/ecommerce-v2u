"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Bell } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[-20%] h-125 w-125 rounded-full bg-[#0066FF]/10 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] h-125 w-125 rounded-full bg-[#7DBBFF]/20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[48px] border border-[#7DBBFF]/20 bg-white/50 p-10 backdrop-blur-3xl md:p-16"
        >
          {/* Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/15 blur-3xl" />
          </div>
          {/* Shine */}
          <div className="absolute left-[-120%] top-0 h-full w-[120%] rotate-12 bg-white/30 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />
          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-linear-to-br from-[#0066FF] to-[#7DBBFF] text-white shadow-[0_0_30px_rgba(0,102,255,0.25)]">
              <Bell size={32} />
            </div>
            {/* Heading */}
            <h2 className="mt-8 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">
              Join Our
              <span className="bg-linear-to-r from-[#0066FF] to-[#7DBBFF] bg-clip-text text-transparent">
                {" "}Newsletter
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Get exclusive deals, early product drops, and premium tech updates
              directly in your inbox.
            </p>
            {/* Input */}
            <div className="mx-auto mt-10 flex max-w-xl items-center rounded-full border border-[#7DBBFF]/20 bg-white/70 p-2 backdrop-blur-xl">
              <Mail size={18} className="ml-4 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 rounded-full bg-linear-to-r from-[#0066FF] to-[#7DBBFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(0,102,255,0.25)]"
              >
                Subscribe
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </div>
            {/* Small Text */}
            <p className="mt-6 text-xs text-gray-500">
              No spam. Only premium tech updates & deals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}