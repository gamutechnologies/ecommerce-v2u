"use client";

import { motion } from "framer-motion";

import {
  Users,
  ShoppingBag,
  Globe2,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Happy Customers",
    description:
      "Trusted by thousands of tech enthusiasts and professionals worldwide.",
  },
  {
    icon: ShoppingBag,
    value: "10K+",
    label: "Products Delivered",
    description:
      "Premium electronics and gadgets delivered securely every month.",
  },
  {
    icon: Globe2,
    value: "25+",
    label: "Global Brands",
    description:
      "Partnered with internationally recognized technology companies.",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Customer Rating",
    description:
      "Consistently delivering premium experiences and customer satisfaction.",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[0%] h-[450px] w-[450px] rounded-full bg-[#0066FF]/10 blur-3xl" />

      <div className="absolute bottom-[-20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-[#7DBBFF]/20 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

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
            Our Achievements
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-gray-900 md:text-6xl">

            Powering A
            <span className="bg-gradient-to-r from-[#0066FF] to-[#7DBBFF] bg-clip-text text-transparent">
              {" "}Global Tech Community
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Built on innovation, trusted by customers, and driven by
            premium technology experiences.
          </p>

        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
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
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[38px] border border-[#7DBBFF]/20 bg-white/50 p-8 backdrop-blur-3xl"
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                  <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/15 blur-3xl" />

                </div>

                {/* Shine */}
                <div className="absolute left-[-120%] top-0 h-full w-[120%] rotate-12 bg-white/30 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />

                {/* Content */}
                <div className="relative z-10">

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-20 w-20 items-center justify-center rounded-[26px] bg-gradient-to-br from-[#0066FF] to-[#7DBBFF] text-white shadow-[0_0_30px_rgba(0,102,255,0.25)]"
                  >

                    <Icon size={34} />

                  </motion.div>

                  {/* Number */}
                  <h3 className="mt-8 text-5xl font-black tracking-tight text-[#0066FF]">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <h4 className="mt-4 text-2xl font-bold text-gray-900">
                    {stat.label}
                  </h4>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-8 text-gray-600">
                    {stat.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}