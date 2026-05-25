"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Eye,
  Rocket,
  Cpu,
  Globe,
} from "lucide-react";

const visions = [
  {
    icon: Eye,
    title: "Future Vision",
    description:
      "Creating a next-generation retail ecosystem powered by innovation and premium technology.",
  },
  {
    icon: Rocket,
    title: "Growth Driven",
    description:
      "Expanding modern ecommerce experiences with cutting-edge digital solutions.",
  },
  {
    icon: Cpu,
    title: "Innovation First",
    description:
      "Continuously evolving with futuristic products, smart systems, and immersive experiences.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Building a trusted platform connecting customers with world-class technology brands.",
  },
];

export default function VisionSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[0%] h-[450px] w-[450px] rounded-full bg-[#0066FF]/10 blur-3xl" />

      <div className="absolute bottom-[-20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-[#7DBBFF]/20 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7DBBFF]/20 bg-white/60 px-5 py-2 backdrop-blur-xl">

            <span className="text-sm font-medium text-[#0066FF]">
              Our Vision
            </span>

          </div>

          {/* Heading */}
          <h2 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-gray-900 md:text-6xl">

            Building The
            <span className="block bg-gradient-to-r from-[#0066FF] to-[#7DBBFF] bg-clip-text text-transparent">
              Future Of Retail Technology
            </span>

          </h2>

          {/* Description */}
          <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">

            <p>
              Our mission is to redefine how people discover, explore,
              and experience premium technology through immersive ecommerce,
              futuristic design, and trusted innovation.
            </p>

            <p>
              We envision a digital retail platform where technology,
              luxury, and seamless experiences merge into one modern ecosystem.
            </p>

          </div>

          {/* Vision Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2">

            {visions.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-[#7DBBFF]/20 bg-white/50 p-5 backdrop-blur-2xl"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/10 blur-3xl" />

                  </div>

                  {/* Shine */}
                  <div className="absolute left-[-120%] top-0 h-full w-[120%] rotate-12 bg-white/30 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />

                  <div className="relative z-10">

                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#7DBBFF] text-white shadow-[0_0_20px_rgba(0,102,255,0.2)]">

                      <Icon size={26} />

                    </div>

                    {/* Text */}
                    <h3 className="mt-5 text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="absolute h-[520px] w-[520px] rounded-full border border-[#0066FF]/10"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
            className="absolute h-[650px] w-[650px] rounded-full border border-[#7DBBFF]/10"
          />

          {/* Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-[#0066FF]/15 blur-3xl" />

          {/* Floating Image */}
          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >

            <Image
              src="/images/about/vision-image.png"
              alt="Vision"
              width={760}
              height={760}
              className="object-contain drop-shadow-[0_40px_40px_rgba(0,102,255,0.2)]"
            />

          </motion.div>

          {/* Floating Glass Card */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-0 rounded-[30px] border border-white/20 bg-white/10 p-6 backdrop-blur-2xl"
          >

            <p className="text-sm font-medium text-gray-700">
              Innovation Focused
            </p>

            <h4 className="mt-2 text-3xl font-black text-[#0066FF]">
              Future Ready
            </h4>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}