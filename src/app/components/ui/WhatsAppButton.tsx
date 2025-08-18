"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

  // If the env-var is missing, render nothing (avoids blank “tel:” link)
  if (!phone) return null;

  const waLink = `https://wa.me/${phone.replace(/\D/g, "")}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 group overflow-hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulsing ring */}
      <motion.div
        className="absolute inset-0 bg-green-400 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Icon */}
      <motion.div
        className="relative z-10"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaWhatsapp size={32} />
      </motion.div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-darkblue text-white px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us!
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-l-4 border-l-darkblue border-y-4 border-y-transparent" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
