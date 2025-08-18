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

/* ────────────────────  ENV-DRIVEN CONTACT DETAILS  ──────────────────── */
const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? "";
const PHONE = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "";
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const LOCATION = process.env.NEXT_PUBLIC_COMPANY_ADDRESS ?? "";

/* EmailJS (public) keys – must exist in Netlify env settings */
const EMAILJS_SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUB_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

/* ─────────────────────  TYPED CHILD COMPONENT  ─────────────────────── */
interface ContactInfoItemProps {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string;
  colorClass: string;
}

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
    <div className={`p-3 rounded-lg mr-4 ${colorClass} group-hover:scale-105 transition-all`}>
      <Icon size={20} />
    </div>
    <div className="flex-grow">
      <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
        {title}
      </p>
      <p className="text-black font-semibold text-base break-all">{value}</p>
    </div>
    <motion.span
      className="text-gray-500 group-hover:text-[#FFA238] transition-colors"
      animate={{ x: [0, 3, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      →
    </motion.span>
  </motion.a>
);

/* ──────────────────────────  MAIN SECTION  ─────────────────────────── */
const ContactSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  /* ─────────────  FORM SUBMIT HANDLER (typed)  ───────────── */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        e.currentTarget,
        EMAILJS_PUB_KEY
      );
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  /* Animation variants */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" as const },
    },
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* decorative backgrounds & particles (unchanged for brevity) */}

      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFA238]/10 to-[#FFA238]/5 backdrop-blur-sm px-4 py-2 rounded-full border border-[#FFA238]/20 mb-6 text-[#FFA238]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaHandshake size={16} />
            <span className="text-sm font-medium">Let&apos;s Work Together</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#FFA238] to-[#FFA238]/70 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to grow your business? Let&apos;s discuss your project.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-[#FFA238]/20 p-2.5 rounded-full mr-3">
                  <HiSparkles className="text-[#FFA238]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-black">Contact Details</h3>
              </div>

              <div className="space-y-3">
                {EMAIL && (
                  <ContactInfoItem
                    icon={FaEnvelope}
                    title="Email"
                    value={EMAIL}
                    href={`mailto:${EMAIL}`}
                    colorClass="bg-blue-500/20 text-blue-400"
                  />
                )}

                {WHATSAPP && (
                  <ContactInfoItem
                    icon={FaWhatsapp}
                    title="WhatsApp"
                    value={WHATSAPP}
                    href={`https://wa.me/${WHATSAPP.replace(/\\D/g, "")}`}
                    colorClass="bg-green-500/20 text-green-400"
                  />
                )}

                {PHONE && (
                  <ContactInfoItem
                    icon={FaPhone}
                    title="Phone"
                    value={PHONE}
                    href={`tel:${PHONE.replace(/\\s+/g, "")}`}
                    colorClass="bg-[#FFA238]/20 text-[#FFA238]"
                  />
                )}

                {LOCATION && (
                  <motion.div
                    className="flex items-center p-4 rounded-xl border border-gray-200 bg-white/95"
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <div className="bg-purple-500/20 text-purple-400 p-3 rounded-lg mr-4">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-black font-semibold text-base break-all">
                        {LOCATION}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 md:p-8 shadow-xl"
            variants={itemVariants}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">Send Message</h3>
              <p className="text-gray-700">Fill out the form and we&apos;ll get back to you soon.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* name + email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField id="from_name" label="Full Name *" type="text" placeholder="Your Name" />
                <InputField id="from_email" label="Email Address *" type="email" placeholder="you@example.com" />
              </div>

              {/* phone */}
              <InputField id="phone" type="tel" label="Phone Number *" placeholder="+91 00000 00000" />

              {/* message */}
              <TextareaField id="message" label="Project Details *" placeholder="Tell us about your project..." />

              {/* submit */}
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
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </span>
                </motion.button>

                {/* status messages */}
                <StatusMessage status={status} />
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────  SMALL REUSABLE INPUT COMPONENTS  ───────────── */
interface FieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
}

const InputField = ({ id, label, type = "text", placeholder }: FieldProps) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      required
      className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:ring-2 focus:ring-[#FFA238] focus:border-[#FFA238] outline-none transition-all peer"
    />
    <label
      htmlFor={id}
      className="absolute -top-2.5 left-3 bg-white px-2 text-xs text-gray-600 font-medium peer-focus:text-[#FFA238] transition-colors"
    >
      {label}
    </label>
  </div>
);

const TextareaField = ({ id, label, placeholder }: FieldProps) => (
  <div className="relative">
    <textarea
      id={id}
      name={id}
      rows={4}
      placeholder={placeholder}
      required
      className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:ring-2 focus:ring-[#FFA238] focus:border-[#FFA238] outline-none transition-all resize-none peer"
    />
    <label
      htmlFor={id}
      className="absolute -top-2.5 left-3 bg-white px-2 text-xs text-gray-600 font-medium peer-focus:text-[#FFA238] transition-colors"
    >
      {label}
    </label>
  </div>
);

/* ─────────────  STATUS MESSAGE SUB-COMPONENT  ───────────── */
interface StatusProps {
  status: "idle" | "success" | "error";
}

const StatusMessage = ({ status }: StatusProps) => (
  <AnimatePresence>
    {status === "success" && (
      <motion.div
        key="success"
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -15, scale: 0.95 }}
        className="mt-4 text-center bg-green-500/10 text-green-600 rounded-lg p-4 border border-green-500/20"
      >
        <p className="font-medium flex items-center justify-center gap-2">
          ✅ Message Sent!
        </p>
        <p className="text-sm">We&apos;ll get back to you within 2-4&nbsp;hours.</p>
      </motion.div>
    )}

    {status === "error" && (
      <motion.div
        key="error"
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -15, scale: 0.95 }}
        className="mt-4 text-center bg-red-500/10 text-red-600 rounded-lg p-4 border border-red-500/20"
      >
        <p className="font-medium flex items-center justify-center gap-2">
          ❌ Failed to Send
        </p>
        <p className="text-sm">Please try again or contact us directly.</p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ContactSection;
