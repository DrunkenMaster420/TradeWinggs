"use client";
import React, { useState, useCallback } from "react";
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

interface Slide {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const Home: React.FC = () => {
  const [showProducts, setShowProducts] = useState<boolean>(false);
  const [showBlog, setShowBlog] = useState<boolean>(false);

  const slides: Slide[] = [
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

  const handleShowProducts = useCallback(() => {
    setShowProducts(true);
  }, []);

  const handleShowBlog = useCallback(() => {
    setShowBlog(true);
  }, []);

  return (
    <main className="overflow-x-hidden" role="main">
      <h3>Website is on Hold</h3>
      <img src="/assets/meme.jpg" alt="" />
      {/* <Navbar
        onProductsClick={handleShowProducts}
        onBlogClick={handleShowBlog}
      />
      <HeroCarousel slides={slides} />
      <AboutSection />
      <ServicesSection />
      {showProducts && (
        <section id="products" aria-label="Products Section">
          <ProductsSection />
        </section>
      )}
      <TestimonialsSection />
      {showBlog && (
        <section id="blog" aria-label="Blog Section">
          <BlogSection />
        </section>
      )}
      <ContactSection />
      <Footer />
      <WhatsAppButton /> */}
    </main>
  );
};

export default Home;