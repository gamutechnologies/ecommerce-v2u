"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/custom/ProductCard";
import productsData from "@/data/products.json";

export default function RelatedProductsSection({
  currentProductId,
}: {
  currentProductId: number;
}) {
  const related = productsData
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 pb-12">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
            Related Products
          </h2>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((product: any, i: number) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
