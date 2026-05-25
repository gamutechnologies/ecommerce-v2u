import ShopHeroSection from "@/app/shop/sections/ShopHeroSection";
import SortingBarSection from "@/app/shop/sections/SortingBarSection";
import ProductGridSection from "@/app/shop/sections/ProductGridSection";
import PaginationSection from "@/app/shop/sections/PaginationSection";
import FilterSidebarSection from "./sections/FilterSidebarSection";

export default function ShopPage() {
  return (
    <>
      <ShopHeroSection />
      <SortingBarSection />
      <FilterSidebarSection />
      <ProductGridSection />
      <PaginationSection />
    </>
  );
}