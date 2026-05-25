"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Daniel Carter",
    role: "Tech Enthusiast",
    message:
      "The shopping experience feels futuristic. Smooth UI, fast navigation, and premium products.",
    rating: 5,
  },
  {
    name: "Sarah Lee",
    role: "Content Creator",
    message:
      "Absolutely love the design. It feels like a luxury tech store with amazing animations.",
    rating: 5,
  },
  {
    name: "Michael Tan",
    role: "Gamer",
    message:
      "Best place to buy gaming gear. The product presentation is next level.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[10%] h-112.5 w-112.5 rounded-full bg-[#0066FF]/10 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] h-112.5 w-112.5 rounded-full bg-[#7DBBFF]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-[#7DBBFF]/20 bg-white/60 px-5 py-2 text-sm font-medium text-[#0066FF] backdrop-blur-xl">
            Testimonials
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">
            What Our
            <span className="bg-linear-to-r from-[#0066FF] to-[#7DBBFF] bg-clip-text text-transparent">
              {" "}Customers Say
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Real feedback from tech lovers who enjoy a premium shopping experience.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[38px] border border-[#7DBBFF]/20 bg-white/50 p-8 backdrop-blur-3xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/15 blur-3xl" />
              </div>
              {/* Shine */}
              <div className="absolute left-[-120%] top-0 h-full w-[120%] rotate-12 bg-white/30 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />
              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#0066FF] text-[#0066FF]"
                    />
                  ))}
                </div>
                {/* Message */}
                <p className="mt-6 text-sm leading-7 text-gray-600">
                  “{t.message}”
                </p>
                {/* User */}
                <div className="mt-8 border-t border-[#7DBBFF]/20 pt-6">
                  <h4 className="text-lg font-bold text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}