"use client";

import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

export default function SortingBarSection() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <SlidersHorizontal size={18} />
        Sort by:
        <select className="rounded-full border border-gray-200 bg-white px-4 py-2 outline-none">
          <option>Popularity</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      <div className="text-sm text-gray-500">
        Showing 1–12 of 120 products
      </div>

    </div>
  );
}