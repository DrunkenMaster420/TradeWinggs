
"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  // ✅ Stable random floaters stored once in state (fix hydration)
  const [floaters, setFloaters] = useState(
    [] as { left: string; top: string; delay: number; duration: number }[]
  );

  useEffect(() => {
    if (floaters.length === 0) {
      const newFloaters = Array.from({ length: 12 }).map(() => ({
        left: `${20 + Math.random() * 60}%`,
        top: `${20 + Math.random() * 60}%`,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 3,
      }));
      setFloaters(newFloaters);
    }
  }, [floaters]);

  const testimonials = [
    {
      name: "Bhawan Mishra",
      position: "Director, Swastik Financial Services",
      review:
        "Tradewinggs has helped us generate high-quality leads and manage our social media presence with great professionalism. Their strategies are smart, targeted, and deliver consistent results. It’s like having an in-house marketing team that truly cares about our success.",
      rating: 5,
      image: "/testimonials/john.jpg",
    },
    {
      name: "Kavita Jain",
      position: "Owner, Lakshya Auto Sales",
      review:
        "Working with Tradewinggs for our social media marketing has been a game-changer. Our brand visibility has grown tremendously, and we’re connecting with more customers than ever before. The team’s creativity, timely execution, and attention to detail are commendable!",
      rating: 5,
      image: "/testimonials/jane.jpg",
    },
    {
      name: "Gopal Garg",
      position: "CEO, Garg Digital Studio",
      review:
        "We got our website made by Tradewinggs, and honestly, they did an amazing job. The design looks great, is super easy to use, and totally matches our brand. The whole process was smooth, and they delivered exactly what they said.",
      rating: 5,
      image: "/testimonials/michael.jpg",
    },
  ];

  const length = testimonials.length;

  const nextTestimonial = useCallback(
    () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1)),
    [length]
  );

  const prevTestimonial = useCallback(
    () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1)),
    [length]
  );

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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-[#ffa238]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#241d49]/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating dots */}
        {floaters.map((f, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#ffa238]/20 rounded-full"
            style={{ left: f.left, top: f.top }}
            animate={{ y: [0, -25, 0], x: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: f.duration, repeat: Infinity, delay: f.delay }}
          />
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#232a2f] mb-6">
            What Our {" "}
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
          <motion.div
            className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl text-[#241d49]/20 z-0"
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaQuoteLeft />
          </motion.div>

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
                <div className="flex justify-center mb-8">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <FaStar key={i} className="text-[#ffa238] text-3xl mx-1 drop-shadow-sm" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl italic mb-10 text-[#232a2f] leading-relaxed font-light tracking-wide">
                  &quot;{testimonials[current].review}&quot;
                </p>

                <div className="flex flex-col items-center space-y-2">
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
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-6 md:-left-20 transform -translate-y-1/2 bg-[#ffffff] text-[#232a2f] p-5 rounded-full shadow-xl hover:bg-[#ffa238] hover:text-[#ffffff] transition-all duration-300 z-20 border border-[#4e5458]/20 hover:border-[#ffa238]"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowLeft size={24} />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-6 md:-right-20 transform -translate-y-1/2 bg-[#ffffff] text-[#232a2f] p-5 rounded-full shadow-xl hover:bg-[#ffa238] hover:text-[#ffffff] transition-all duration-300 z-20 border border-[#4e5458]/20 hover:border-[#ffa238]"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowRight size={24} />
          </motion.button>

          {/* Dots */}
          <div className="flex justify-center space-x-4 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-4 h-4 rounded-full transition ${current === index ? "bg-[#ffa238]" : "bg-gray-300 hover:bg-[#ffa238]/50"
                  }`}
              />
            ))}
          </div>

          {/* Progress */}
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