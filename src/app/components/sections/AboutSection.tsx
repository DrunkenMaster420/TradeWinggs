"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

// --- SVG Icon Components ---
// Replacing react-icons with inline SVGs to remove external dependencies.

const FiUsers = ({ size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const FiBriefcase = ({ size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const FiTrendingUp = ({ size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const FiCheckCircle = ({ size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const FiBarChart2 = ({ size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const FiTarget = ({ size = 28, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const FiEye = ({ size = 28, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

// Interface for FeatureCard props
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

// A reusable component for the feature cards to keep the main component clean.
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(255, 162, 56, 0.25)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-[#ffffff]/90 backdrop-blur-lg p-8 rounded-3xl border border-[#4e5458]/20 group cursor-pointer shadow-lg hover:border-[#ffa238]/30 transition-all duration-300"
    >
      <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-[#ffa238]/20 to-[#ffa238]/5 rounded-2xl border border-[#4e5458]/20 text-[#ffa238] group-hover:text-[#ffffff] group-hover:bg-[#ffa238] transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#232a2f] mb-3 group-hover:text-[#ffa238] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#4e5458] leading-relaxed">{description}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Updated data based on the provided text
  const whyChooseUs = [
    {
      title: "Expert Team",
      description:
        "A passionate team with 5+ years of experience combining creativity, strategy, and technology.",
      icon: <FiUsers />,
    },
    {
      title: "Comprehensive Solutions",
      description:
        "From social media and SEO to branding and mobile app creation, we cover all your digital needs.",
      icon: <FiBriefcase />,
    },
    {
      title: "Result-Oriented Strategies",
      description:
        "Every campaign is tailored to your brand's needs, ensuring maximum engagement and conversions.",
      icon: <FiTrendingUp />,
    },
    {
      title: "Proven Track Record",
      description:
        "Our success stories speak for themselves, with over 200+ satisfied clients and thriving brands.",
      icon: <FiCheckCircle />,
    },
    {
      title: "Transparent Process",
      description:
        "We keep you informed at every step with clear reports and data-driven insights for measurable results.",
      icon: <FiBarChart2 />,
    },
  ];



  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#ffffff] text-[#232a2f] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ffa238]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse animation-delay-4000"
          style={{ backgroundColor: "rgba(36, 29, 73, 0.1)" }}
        ></div>
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          style={{
            maskImage:
              "linear-gradient(to bottom, white 50%, transparent 100%)",
          }}
        ></div>
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Section Badge */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffa238]/10 to-[#ffa238]/5 px-4 py-2 rounded-full border border-[#ffa238]/20 mb-6">
            <span className="text-sm font-medium text-[#ffa238]">About Us</span>
          </div>
        </motion.div>

        {/* Main Header */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#232a2f] to-[#4e5458] mb-6 leading-tight">
            Your Brand Partner in the Digital World
          </h2>
          <p className="text-lg md:text-xl text-[#4e5458] max-w-3xl mx-auto leading-relaxed">
            At Tradewinggs, we don&apos;t just market brands — we help them make an
            impact. We combine innovative ideas, data-driven strategies, and
            eye-catching content to ensure your brand stands out.
          </p>
        </motion.div>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-24 items-center">
          <motion.div variants={itemVariants}>
            <div className="bg-[#ffffff]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#4e5458]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#ffa238]/10 p-3 rounded-full">
                  <FiTarget className="text-[#ffa238]" />
                </div>
                <h3 className="text-3xl font-bold text-[#232a2f]">
                  Our Mission
                </h3>
              </div>
              <p className="text-[#4e5458] leading-relaxed">
                To empower brands by creating innovative, result-driven digital
                marketing strategies that inspire, engage, and convert. We aim
                to bridge the gap between businesses and their audiences by
                blending creativity, technology, and data.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="bg-[#ffffff]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#4e5458]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#241d49]/10 p-3 rounded-full">
                  <FiEye className="text-[#241d49]" />
                </div>
                <h3 className="text-3xl font-bold text-[#232a2f]">
                  Our Vision
                </h3>
              </div>
              <p className="text-[#4e5458] leading-relaxed">
                To become a leading name in digital marketing, recognized for
                transforming ideas into impactful online experiences. We strive
                to be the go-to creative partner for brands that want to grow,
                connect, and lead in the digital world.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-[#232a2f]">
            Why Choose Us?
          </h3>
          <p className="text-lg text-[#4e5458] max-w-2xl mx-auto">
            We deliver excellence through a combination of expertise,
            creativity, and commitment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
