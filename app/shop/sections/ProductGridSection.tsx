"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";

const products = Array.from({ length: 8 }).map((_, i) => ({
  name: `Product ${i + 1}`,
  price: "$999",
  image: "/images/products/laptop.png",
}));

export default function ProductGridSection() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 lg:grid-cols-[280px_1fr]">

      {/* Sidebar */}
      <div className="hidden lg:block">
        <div className="sticky top-32">
          {/* Filter will be injected later */}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

        {products.map((p, i) => (
          <div
            key={i}
            className="group rounded-3xl border border-[#7DBBFF]/20 bg-white/50 p-6 backdrop-blur-2xl"
          >

            <Image
              src={p.image}
              alt=""
              width={250}
              height={250}
              className="mx-auto transition-transform group-hover:scale-110"
            />

            <h3 className="mt-4 text-lg font-bold">{p.name}</h3>

            <div className="flex items-center gap-1 text-[#0066FF]">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={14} />
              ))}
            </div>

            <p className="mt-2 text-xl font-black text-[#0066FF]">{p.price}</p>

            <div className="mt-4 flex items-center justify-between">
              <Heart className="cursor-pointer" />
              <ShoppingCart className="cursor-pointer" />
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}