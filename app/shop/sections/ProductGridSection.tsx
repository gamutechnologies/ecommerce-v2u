"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/custom/ProductCard";
import productsData from "@/data/products.json";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ProductGridSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
    >
      {productsData.map((product: any) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </motion.div>
  );
}
