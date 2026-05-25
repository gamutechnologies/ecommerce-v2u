import AboutHeroSection from "@/app/about/sections/AboutHeroSection";
import CompanyStorySection from "@/app/about/sections/CompanyStorySection";
import StatsSection from "@/app/about/sections/StatsSection";
import VisionSection from "@/app/about/sections/VisionSection";
import WhyChooseUsSection from "@/app/about/sections/WhyChooseUsSection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <CompanyStorySection />
      <StatsSection />
      <VisionSection />
      <WhyChooseUsSection />
    </>
  );
}