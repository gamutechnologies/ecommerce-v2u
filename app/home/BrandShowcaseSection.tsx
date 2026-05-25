"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Apple",
    logo: "/images/brands/apple.svg",
    description: "Premium Apple ecosystem and flagship innovation.",
  },
  {
    name: "Samsung",
    logo: "/images/brands/samsung.svg",
    description: "Next-generation displays, phones, and smart devices.",
  },
  {
    name: "Sony",
    logo: "/images/brands/sony.svg",
    description: "Immersive entertainment and premium audio technology.",
  },
  {
    name: "Asus",
    logo: "/images/brands/asus.svg",
    description: "High-performance laptops and creator workstations.",
  },
  {
    name: "MSI",
    logo: "/images/brands/msi.svg",
    description: "Elite gaming hardware built for maximum performance.",
  },
  {
    name: "JBL",
    logo: "/images/brands/jbl.svg",
    description: "Powerful sound systems and premium wireless audio.",
  },
  {
    name: "Logitech",
    logo: "/images/brands/logitech.svg",
    description: "Advanced gaming gear and productivity accessories.",
  },
  {
    name: "Razer",
    logo: "/images/brands/razer.svg",
    description: "Cutting-edge gaming peripherals and RGB ecosystems.",
  },
];

export default function BrandShowcaseSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#0066FF]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#7DBBFF]/15 blur-3xl" />
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
            Trusted Global Brands
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">
            Powered By
            <span className="bg-linear-to-r from-[#0066FF] to-[#7DBBFF] bg-clip-text text-transparent">
              {" "}Industry Leaders
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Explore premium electronics and accessories from the world’s
            leading technology brands.
          </p>
        </motion.div>
        {/* Brand Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-[#7DBBFF]/20 bg-white/50 p-10 backdrop-blur-3xl"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/15 blur-3xl" />
              </div>
              {/* Shine Effect */}
              <div className="absolute left-[-120%] top-0 h-full w-[120%] rotate-12 bg-white/30 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex h-24 w-full items-center justify-center"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={140}
                    height={60}
                    className="object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </motion.div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {brand.name}
                </h3>
                <p className="mt-2 text-center text-sm leading-7 text-gray-600">
                  {brand.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}