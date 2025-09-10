"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/ui/Navbar";
import HeroCarousel from "./components/sections/HeroCarousel";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProductsSection from "./components/sections/ProductsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import BlogSection from "./components/sections/BlogSection";
import Footer from "./components/ui/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const slides = [
    {
      title: "Grow Your Brand with Us",
      description:
        "Welcome to Tradewinggs – your partner in digital marketing and product trading. Let's take your business to new heights!",
      ctaText: "Get Started",
      ctaLink: "#contact",
      image: "/assets/slide1.webp",
    },
    {
      title: "Expert Digital Marketing",
      description:
        "SEO, Social Media, Paid Ads, Branding, Website & App Development, Graphic Design and more.",
      ctaText: "Explore Services",
      ctaLink: "#services",
      image: "/assets/slide2.webp",
    },
    {
      title: "Product Trading & Catalogs",
      description:
        "High quality product categories and downloadable catalogs tailored for your business needs.",
      ctaText: "View Products",
      ctaLink: "#products",
      image: "/images/slide3.webp",
    },
  ];

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-darkblue flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="overflow-x-hidden">
      {/* <h1>Website is on Hold for now, Try Harder</h1>
      <img src="/assets/meme.jpg" alt="" /> */}
      <Navbar />
      <HeroCarousel slides={slides} />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
