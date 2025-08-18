"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Acme Corp",
      review:
        "Tradewinggs transformed our online presence completely. Their creative approach and results-driven strategies helped us achieve 300% growth in leads. The team is professional, responsive, and truly understands digital marketing. Highly recommend!",
      rating: 5,
      image: "/testimonials/john.jpg",
      company: "Acme Corporation",
      industry: "Technology",
    },
    {
      name: "Jane Smith",
      position: "Marketing Head, Beta Inc.",
      review:
        "Outstanding professional team with exceptional communication skills. They delivered our website and comprehensive digital marketing campaign on time and exceeded all our expectations. The ROI has been incredible.",
      rating: 5,
      image: "/testimonials/jane.jpg",
      company: "Beta Industries",
      industry: "Manufacturing",
    },
    {
      name: "Michael Lee",
      position: "Founder, StartUpX",
      review:
        "Excellent services and amazing ROI from day one. The team at Tradewinggs understood our vision perfectly and brought it to life with innovative digital solutions. Our brand visibility has increased tremendously.",
      rating: 5,
      image: "/testimonials/michael.jpg",
      company: "StartUpX",
      industry: "E-commerce",
    },
    {
      name: "Sarah Wilson",
      position: "Director, TechFlow",
      review:
        "Working with Tradewinggs has been a game-changer for our business. Their innovative strategies and attention to detail helped us reach new heights. The team's dedication and expertise shine through in every project.",
      rating: 5,
      image: "/testimonials/sarah.jpg",
      company: "TechFlow Solutions",
      industry: "Software",
    },
    {
      name: "David Chen",
      position: "Founder, GrowthLabs",
      review:
        "Exceptional service quality and outstanding results! Tradewinggs not only met our expectations but exceeded them in every way. Their data-driven approach has significantly boosted our online presence.",
      rating: 5,
      image: "/testimonials/david.jpg",
      company: "GrowthLabs",
      industry: "Marketing",
    },
  ];

  const length = testimonials.length;

  // ✅ Fixed: Wrapped in useCallback for stable reference
  const nextTestimonial = useCallback(
    () => setCurrent(current === length - 1 ? 0 : current + 1),
    [current, length]
  );

  const prevTestimonial = () =>
    setCurrent(current === 0 ? length - 1 : current - 1);

  // ✅ Fixed: Auto-advance testimonials with proper dependencies
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#ffffff] relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-[#ffa238]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#241d49]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#ffa238]/20 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffa238]/10 to-[#ffa238]/5 px-4 py-2 rounded-full border border-[#ffa238]/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaStar className="text-[#ffa238]" size={16} />
            <span className="text-sm font-medium text-[#ffa238]">
              Client Reviews
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-[#232a2f] mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#ffa238] to-[#ffa238]/70 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-[#4e5458] max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients
            have to say about our services and results.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Quote Icon */}
          <motion.div
            className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl text-[#241d49]/20 z-0"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaQuoteLeft />
          </motion.div>

          {/* Enhanced Testimonial Content */}
          <div className="relative min-h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-center bg-[#ffffff]/95 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-[#4e5458]/20 max-w-5xl mx-auto relative z-10 group"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ffa238]/20 via-transparent to-[#241d49]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>

                {/* Enhanced Star Rating */}
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <FaStar className="text-[#ffa238] text-3xl mx-1 drop-shadow-sm" />
                    </motion.div>
                  ))}
                </div>

                {/* Review Text with Better Typography */}
                <motion.p
                  className="text-xl md:text-2xl italic mb-10 text-[#232a2f] leading-relaxed font-light tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  &quot;{testimonials[current].review}&quot;
                </motion.p>

                {/* Enhanced Client Info */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {/* Decorative Line */}
                  <div className="w-20 h-1 bg-gradient-to-r from-[#ffa238] to-[#241d49] mx-auto mb-6 rounded-full"></div>

                  <div className="flex flex-col items-center space-y-2">
                    {/* Profile Avatar Placeholder */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ffa238] to-[#241d49] rounded-full flex items-center justify-center text-[#ffffff] font-bold text-xl mb-2">
                      {testimonials[current].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <h4 className="font-bold text-2xl text-[#232a2f]">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-[#ffa238] font-semibold text-lg">
                      {testimonials[current].position}
                    </p>
                    <p className="text-[#4e5458] font-medium">
                      {testimonials[current].company}
                    </p>
                    <div className="text-xs text-[#4e5458] bg-[#4e5458]/10 px-3 py-1 rounded-full">
                      {testimonials[current].industry}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-6 md:-left-20 transform -translate-y-1/2 bg-[#ffffff] text-[#232a2f] p-5 rounded-full shadow-xl hover:bg-[#ffa238] hover:text-[#ffffff] transition-all duration-300 z-20 group border border-[#4e5458]/20 hover:border-[#ffa238]"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowLeft
              size={24}
              className="transition-transform group-hover:-translate-x-1"
            />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-6 md:-right-20 transform -translate-y-1/2 bg-[#ffffff] text-[#232a2f] p-5 rounded-full shadow-xl hover:bg-[#ffa238] hover:text-[#ffffff] transition-all duration-300 z-20 group border border-[#4e5458]/20 hover:border-[#ffa238]"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowRight
              size={24}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.button>

          {/* Enhanced Pagination Dots */}
          <div className="flex justify-center space-x-4 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                className={`relative overflow-hidden transition-all duration-300 ${current === index
                    ? "w-12 h-4 bg-[#ffa238] rounded-full"
                    : "w-4 h-4 bg-[#4e5458]/30 hover:bg-[#ffa238]/50 rounded-full"
                  }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {current === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#ffa238] to-[#241d49] rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-[#4e5458]/20 rounded-full h-1">
              <motion.div
                className="bg-gradient-to-r from-[#ffa238] to-[#241d49] h-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((current + 1) / length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="text-center mt-2 text-sm text-[#4e5458]">
              {current + 1} of {length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
