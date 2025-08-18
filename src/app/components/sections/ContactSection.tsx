"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaHandshake,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

// Interface for ContactInfoItem props
interface ContactInfoItemProps {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string;
  colorClass: string;
}

// Enhanced Contact Info Component
const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon: Icon,
  title,
  value,
  href,
  colorClass,
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-4 rounded-xl group transition-all duration-300 hover:bg-gray-50 border border-gray-200 hover:border-[#FFA238]/30"
    whileHover={{ scale: 1.02, y: -1 }}
    whileTap={{ scale: 0.98 }}
  >
    <div
      className={`p-3 rounded-lg mr-4 ${colorClass} transition-all duration-300 group-hover:scale-105`}
    >
      <Icon size={20} />
    </div>
    <div className="flex-grow">
      <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
        {title}
      </p>
      <p className="text-black font-semibold text-base">{value}</p>
    </div>
    <motion.div
      className="text-gray-500 group-hover:text-[#FFA238] transition-all duration-300"
      animate={{ x: [0, 3, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      →
    </motion.div>
  </motion.a>
);

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  // Animation variants for individual items (fixed to use valid 'ease')
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#FFA238]/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(112,56,255,0.1)" }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FFA238]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Professional Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFA238]/10 to-[#FFA238]/5 backdrop-blur-sm px-4 py-2 rounded-full border border-[#FFA238]/20 mb-6 text-[#FFA238]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaHandshake size={16} />
            <span className="text-sm font-medium">Let&apos;s Work Together</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#FFA238] to-[#FFA238]/70 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Ready to grow your business? Let&apos;s discuss your project.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Information */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-[#FFA238]/20 p-2.5 rounded-full mr-3">
                  <HiSparkles className="text-[#FFA238]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-black">
                  Contact Details
                </h3>
              </div>

              <div className="space-y-3">
                <ContactInfoItem
                  icon={FaEnvelope}
                  title="Email"
                  value="tradewinggs@gmail.com"
                  href="mailto:tradewinggs@gmail.com"
                  colorClass="bg-blue-500/20 text-blue-400"
                />

                <ContactInfoItem
                  icon={FaWhatsapp}
                  title="WhatsApp"
                  value="+91 81039 45966"
                  href="https://wa.me/918103945966"
                  colorClass="bg-green-500/20 text-green-400"
                />

                <ContactInfoItem
                  icon={FaPhone}
                  title="Phone"
                  value="+91 7974168197"
                  href="tel:+917974168197"
                  colorClass="bg-[#FFA238]/20 text-[#FFA238]"
                />

                <motion.div
                  className="flex items-center p-4 rounded-xl border border-gray-200 bg-white/95"
                  initial={{ opacity: 0, x: -15 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }
                  }
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="bg-purple-500/20 text-purple-400 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-black font-semibold text-base">
                      Gwalior, Madhya Pradesh
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 md:p-8 shadow-xl"
            variants={itemVariants}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                Send Message
              </h3>
              <p className="text-gray-700">
                Fill out the form and we&apos;ll get back to you soon.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:ring-2 focus:ring-[#FFA238] focus:border-[#FFA238] focus:outline-none transition-all duration-300 peer"
                    placeholder="Your Name"
                    required
                  />
                  <label
                    htmlFor="from_name"
                    className="absolute -top-2.5 left-3 bg-white px-2 text-xs text-gray-600 font-medium peer-focus:text-[#FFA238] transition-colors"
                  >
                    Full Name *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:ring-2 focus:ring-[#FFA238] focus:border-[#FFA238] focus:outline-none transition-all duration-300 peer"
                    placeholder="your@email.com"
                    required
                  />
                  <label
                    htmlFor="from_email"
                    className="absolute -top-2.5 left-3 bg-white px-2 text-xs text-gray-600 font-medium peer-focus:text-[#FFA238] transition-colors"
                  >
                    Email Address *
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:ring-2 focus:ring-[#FFA238] focus:border-[#FFA238] focus:outline-none transition-all duration-300 peer"
                  placeholder="+91 00000 00000"
                  required
                />
                <label
                  htmlFor="phone"
                  className="absolute -top-2.5 left-3 bg-white px-2 text-xs text-gray-600 font-medium peer-focus:text-[#FFA238] transition-colors"
                >
                  Phone Number *
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:ring-2 focus:ring-[#FFA238] focus:border-[#FFA238] focus:outline-none transition-all duration-300 resize-none peer"
                  placeholder="Tell us about your project..."
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute -top-2.5 left-3 bg-white px-2 text-xs text-gray-600 font-medium peer-focus:text-[#FFA238] transition-colors"
                >
                  Project Details *
                </label>
              </div>

              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#FFA238] to-[#FFA238]/80 text-[#241D49] font-semibold py-4 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#FFA238]/20 hover:shadow-xl hover:shadow-[#FFA238]/30 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#241D49] border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.95 }}
                      className="mt-4 text-center bg-green-500/10 text-green-600 rounded-lg p-4 border border-green-500/20"
                    >
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span>✅</span>
                        <span className="font-medium">Message Sent!</span>
                      </div>
                      <p className="text-sm text-green-500">
                        We&apos;ll get back to you within 2-4 hours.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.95 }}
                      className="mt-4 text-center bg-red-500/10 text-red-600 rounded-lg p-4 border border-red-500/20"
                    >
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span>❌</span>
                        <span className="font-medium">Failed to Send</span>
                      </div>
                      <p className="text-sm text-red-500">
                        Please try again or contact us directly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
