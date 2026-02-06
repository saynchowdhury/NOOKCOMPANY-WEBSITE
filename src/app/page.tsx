"use client";

import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import ProblemsScroll from "@/components/sections/problems-scroll";
import BlogPreview from "@/components/sections/blog-preview";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEFFFC]">
      <Navigation />
      <HeroSection />
      <ProblemsScroll />
      <BlogPreview />
      <Footer />
    </div>
  );
}
