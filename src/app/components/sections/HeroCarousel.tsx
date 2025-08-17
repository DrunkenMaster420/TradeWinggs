"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- SVG Icons (to remove external dependencies) ---
const FiArrowRight = (props) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const FiArrowLeft = (props) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

// --- Slide Interface ---
interface Slide {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

// --- Component Props ---
interface CarouselProps {
  slides: Slide[];
  autoplayInterval?: number;
}

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const backgroundVariants = {
  initial: { scale: 1.1, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    scale: 1.1,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const HeroCarousel = ({ slides, autoplayInterval = 8000 }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (autoplayInterval) {
      const slideInterval = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(slideInterval);
    }
  }, [current, autoplayInterval, nextSlide]);

  if (!Array.isArray(slides) || slides.length === 0) {
    console.warn("HeroCarousel: No slides provided.");
    return null;
  }

  const activeSlide = slides[current];

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black"
      id="home"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="w-full h-full object-cover"
            />
            {/* Enhanced Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-start"
              >
                {/* Main Heading */}
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
                >
                  {activeSlide.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed"
                >
                  {activeSlide.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    href={activeSlide.ctaLink}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-orange-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-orange-600 shadow-lg hover:shadow-orange-500/40"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {activeSlide.ctaText}
                      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation & Pagination Container */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-xs md:max-w-sm">
        <div className="flex items-center justify-between bg-black/30 backdrop-blur-lg border border-white/10 rounded-full p-2 shadow-2xl">
          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            className="text-white p-3 rounded-full transition-colors duration-300 hover:bg-white/20 disabled:opacity-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={current === 0}
          >
            <FiArrowLeft size={20} />
          </motion.button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative w-2 h-2 rounded-full transition-colors duration-300"
              >
                <span
                  className={`block w-full h-full rounded-full ${
                    current === index
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            className="text-white p-3 rounded-full transition-colors duration-300 hover:bg-white/20 disabled:opacity-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={current === length - 1}
          >
            <FiArrowRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
