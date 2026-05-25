"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationSection() {
  return (
    <div className="flex items-center justify-center gap-3 py-16">

      <button className="rounded-full border p-2">
        <ChevronLeft />
      </button>

      {[1,2,3,4,5].map((n) => (
        <button
          key={n}
          className="rounded-full border px-4 py-2 hover:bg-[#0066FF] hover:text-white"
        >
          {n}
        </button>
      ))}

      <button className="rounded-full border p-2">
        <ChevronRight />
      </button>

    </div>
  );
}