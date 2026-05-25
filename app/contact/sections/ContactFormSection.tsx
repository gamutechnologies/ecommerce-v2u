"use client";

import { motion } from "framer-motion";

import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function ContactFormSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[0%] h-[500px] w-[500px] rounded-full bg-[#0066FF]/10 blur-3xl" />

      <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#7DBBFF]/20 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Main Card */}
        <div className="grid overflow-hidden rounded-[45px] border border-[#7DBBFF]/20 bg-white/50 backdrop-blur-3xl lg:grid-cols-[1fr_480px]">

          {/* LEFT SIDE */}
          <div className="relative overflow-hidden p-10 md:p-16">

            {/* Glow */}
            <div className="absolute left-[-10%] top-[10%] h-[350px] w-[350px] rounded-full bg-[#0066FF]/10 blur-3xl" />

            <div className="relative z-10">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-[#7DBBFF]/20 bg-white/70 px-5 py-2 backdrop-blur-xl"
              >

                <Sparkles size={16} className="text-[#0066FF]" />

                <span className="text-sm font-medium text-[#0066FF]">
                  Contact Form
                </span>

              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-gray-900 md:text-6xl"
              >

                Start Your
                <span className="block bg-gradient-to-r from-[#0066FF] to-[#7DBBFF] bg-clip-text text-transparent">
                  Conversation
                </span>

              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                viewport={{ once: true }}
                className="mt-8 max-w-2xl text-lg leading-8 text-gray-600"
              >
                Need help with products, orders, partnerships, or technical
                support? Send us a message and our premium support team
                will get back to you quickly.
              </motion.p>

              {/* Floating Stats */}
              <div className="mt-14 grid gap-5 sm:grid-cols-3">

                {[
                  {
                    value: "24/7",
                    label: "Support",
                  },
                  {
                    value: "<5m",
                    label: "Response",
                  },
                  {
                    value: "100%",
                    label: "Secure",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group relative overflow-hidden rounded-[28px] border border-[#7DBBFF]/20 bg-white/60 p-5 text-center backdrop-blur-2xl"
                  >

                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/10 blur-3xl" />

                    </div>

                    <div className="relative z-10">

                      <h3 className="text-3xl font-black text-[#0066FF]">
                        {item.value}
                      </h3>

                      <p className="mt-2 text-sm text-gray-600">
                        {item.label}
                      </p>

                    </div>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative border-l border-[#7DBBFF]/10 bg-white/40 p-10 backdrop-blur-3xl md:p-14">

            {/* Glow */}
            <div className="absolute right-[-20%] top-[20%] h-[300px] w-[300px] rounded-full bg-[#0066FF]/10 blur-3xl" />

            <div className="relative z-10">

              <motion.form
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="space-y-6"
              >

                {/* Name */}
                <div>

                  <label className="mb-3 block text-sm font-semibold text-gray-800">
                    Full Name
                  </label>

                  <div className="flex items-center rounded-2xl border border-[#7DBBFF]/20 bg-white/70 px-5 backdrop-blur-xl transition-all duration-300 focus-within:border-[#0066FF]/40">

                    <User size={18} className="text-[#0066FF]" />

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="h-14 w-full bg-transparent px-4 text-sm outline-none placeholder:text-gray-400"
                    />

                  </div>

                </div>

                {/* Email */}
                <div>

                  <label className="mb-3 block text-sm font-semibold text-gray-800">
                    Email Address
                  </label>

                  <div className="flex items-center rounded-2xl border border-[#7DBBFF]/20 bg-white/70 px-5 backdrop-blur-xl transition-all duration-300 focus-within:border-[#0066FF]/40">

                    <Mail size={18} className="text-[#0066FF]" />

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="h-14 w-full bg-transparent px-4 text-sm outline-none placeholder:text-gray-400"
                    />

                  </div>

                </div>

                {/* Phone */}
                <div>

                  <label className="mb-3 block text-sm font-semibold text-gray-800">
                    Phone Number
                  </label>

                  <div className="flex items-center rounded-2xl border border-[#7DBBFF]/20 bg-white/70 px-5 backdrop-blur-xl transition-all duration-300 focus-within:border-[#0066FF]/40">

                    <Phone size={18} className="text-[#0066FF]" />

                    <input
                      type="text"
                      placeholder="+94 77 123 4567"
                      className="h-14 w-full bg-transparent px-4 text-sm outline-none placeholder:text-gray-400"
                    />

                  </div>

                </div>

                {/* Message */}
                <div>

                  <label className="mb-3 block text-sm font-semibold text-gray-800">
                    Your Message
                  </label>

                  <div className="flex rounded-2xl border border-[#7DBBFF]/20 bg-white/70 px-5 py-4 backdrop-blur-xl transition-all duration-300 focus-within:border-[#0066FF]/40">

                    <MessageSquare
                      size={18}
                      className="mt-1 text-[#0066FF]"
                    />

                    <textarea
                      rows={6}
                      placeholder="Tell us how we can help..."
                      className="w-full resize-none bg-transparent px-4 text-sm outline-none placeholder:text-gray-400"
                    />

                  </div>

                </div>

                {/* Button */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0066FF] to-[#7DBBFF] px-8 py-5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(0,102,255,0.25)]"
                >

                  Send Message

                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </motion.button>

              </motion.form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}