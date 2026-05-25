import HeroSection from "@/app/home/HeroSection";
import BrandShowcaseSection from "@/app/home/BrandShowcaseSection";
import FeaturedCategoriesSection from "@/app/home/FeaturedCategoriesSection";
import FeaturedProductsSection from "@/app/home/FeaturedProductsSection";
import PromoBannerSection from "@/app/home/PromoBannerSection";
import TrendingProductsSection from "@/app/home/TrendingProductsSection";
import WhyChooseUsSection from "@/app/home/WhyChooseUsSection";
import TestimonialsSection from "@/app/home/TestimonialsSection";
import NewsletterSection from "@/app/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandShowcaseSection />
      <FeaturedCategoriesSection />
      <FeaturedProductsSection />
      <PromoBannerSection />
      <TrendingProductsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}