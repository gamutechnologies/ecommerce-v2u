"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const footerLinks = {
  Shop: ["Laptops", "Phones", "Gaming", "Accessories"],
  Company: ["About", "Contact", "Careers", "Blog"],
  Support: ["Help Center", "Shipping", "Returns", "Privacy Policy"],
};

const socialIcons = [
  {
    icon: faFacebookF,
    hover: "hover:text-[#1877F2]",
    glow: "hover:shadow-[0_0_25px_rgba(24,119,242,0.35)]",
    border: "hover:border-[#1877F2]/40",
    bg: "hover:bg-[#1877F2]/10",
  },
  {
    icon: faInstagram,
    hover: "hover:text-[#E1306C]",
    glow: "hover:shadow-[0_0_25px_rgba(225,48,108,0.35)]",
    border: "hover:border-[#E1306C]/40",
    bg: "hover:bg-[#E1306C]/10",
  },
  {
    icon: faXTwitter,
    hover: "hover:text-black",
    glow: "hover:shadow-[0_0_25px_rgba(0,0,0,0.25)]",
    border: "hover:border-black/30",
    bg: "hover:bg-black/5",
  },
  {
    icon: faYoutube,
    hover: "hover:text-[#FF0000]",
    glow: "hover:shadow-[0_0_25px_rgba(255,0,0,0.35)]",
    border: "hover:border-[#FF0000]/40",
    bg: "hover:bg-[#FF0000]/10",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-40 overflow-hidden border-t border-[#7DBBFF]/20 bg-white/60 backdrop-blur-3xl">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#0066FF]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#7DBBFF]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Top */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo + Desc */}
          <div className="lg:col-span-2">
            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="mb-5 text-4xl font-extrabold tracking-tight text-[#0066FF]"
            >
              V2U
            </motion.h2>
            <p className="max-w-md text-sm leading-7 text-gray-600">
              Premium futuristic retail tech store experience with cutting-edge
              electronics, gaming devices, accessories, and smart technology.
            </p>
            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">
              {socialIcons.map((item, index) => (
                <motion.a
                  key={index}
                  href="/"
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border border-[#7DBBFF]/20 bg-white/40 text-gray-700 backdrop-blur-xl transition-all duration-300 ${item.hover} ${item.glow} ${item.border} ${item.bg} `}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-lg font-semibold text-gray-900">
                {title}
              </h3>
              <div className="space-y-3">
                {links.map((link) => (
                  <motion.div key={link} whileHover={{ x: 4 }}>
                    <Link
                      href="/"
                      className="group flex w-fit items-center text-sm text-gray-600 transition-colors duration-300 hover:text-[#0066FF]"
                    >
                      <span className="mr-2 h-0.5 w-0 rounded-full bg-[#0066FF] transition-all duration-300 group-hover:w-4" />
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 rounded-[32px] border border-[#7DBBFF]/20 bg-white/40 p-8 backdrop-blur-3xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Stay Updated</h3>
              <p className="mt-2 text-gray-600">
                Get the latest tech drops, offers, and exclusive deals.
              </p>
            </div>
            <div className="flex w-full max-w-xl items-center rounded-full border border-[#7DBBFF]/20 bg-white/70 p-2 backdrop-blur-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-5 text-sm outline-none placeholder:text-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-linear-to-r from-[#0066FF] to-[#7DBBFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(0,102,255,0.25)]"
              >
                Subscribe
                <Send size={16} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#7DBBFF]/20 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© 2026 V2U. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[#0066FF]">
              Terms
            </Link>
            <Link href="/" className="hover:text-[#0066FF]">
              Privacy
            </Link>
            <Link href="/" className="hover:text-[#0066FF]">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
