"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { MdPhone } from "react-icons/md";

/* ─────────────────────────  RUNTIME VALUES  ───────────────────────── */
const PHONE = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "";
const MAP_URL = process.env.NEXT_PUBLIC_GOOGLE_MAPS_LINK ?? "";

/* ───────────────────────────── COMPONENT ──────────────────────────── */
const Footer = () => {
  /* client-side particles */
  const [particles, setParticles] = React.useState<
    { left: string; top: string; duration: number; delay: number }[]
  >([]);

  React.useEffect(() => {
    setParticles(
      Array.from({ length: 12 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  /* nav + social definitions */
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Products", href: "#products" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Digital Marketing", href: "#services" },
      { name: "Web Development", href: "#services" },
      { name: "SEO Services", href: "#services" },
    ],
    support: [
      { name: "Help Center", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "FAQ", href: "#contact" },
    ],
  } as const;

  const socialLinks = [
    {
      icon: <FaFacebook size={14} />,
      href: "https://www.facebook.com/share/1AwXnMd7D1/",
      label: "Facebook",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: <FaInstagram size={14} />,
      href: "https://www.instagram.com/trade_winggs/",
      label: "Instagram",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <FaLinkedin size={14} />,
      href: "https://www.linkedin.com/company/tradewinggs/",
      label: "LinkedIn",
      gradient: "from-blue-700 to-blue-800",
    },
    {
      icon: <FaYoutube size={14} />,
      href: "https://youtube.com/@tradewinggs?si=9vcMbjUTIfzBFsGo",
      label: "YouTube",
      gradient: "from-red-600 to-red-700",
    },
  ] as const;

  /* dynamic contact array (empty values filtered out) */
  const contacts = [
    PHONE && {
      icon: <MdPhone className="text-[#ffa238]" size={10} />,
      text: PHONE,
      href: `tel:${PHONE.replace(/\s+/g, "")}`,
    },
    MAP_URL && {
      icon: <FaMapMarkerAlt className="text-blue-400" size={10} />,
      text: "Gwalior, MP",
      href: MAP_URL,
    },
  ].filter(Boolean) as { icon: React.JSX.Element; text: string; href: string }[];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#232a2f] via-[#1d2429] to-[#232a2f]">
      {/* decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ffa238]/8 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#ffa238]/15 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-gradient-to-tr from-[#241d49]/8 to-transparent rounded-full blur-3xl" />

      {/* particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ffa238]/25 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [0, -12, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* top gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#ffa238] to-transparent" />

      <div className="max-w-6xl mx-auto px-3 py-6 relative z-10">
        {/* primary columns */}
        <div className="grid grid-cols-6 gap-3 lg:gap-6 mb-6">
          {/* company / contact */}
          <motion.div
            className="col-span-6 sm:col-span-2 text-center sm:text-left"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center sm:justify-start space-x-2 mb-3"
              whileHover={{ scale: 1.01 }}
            >
              <div className="relative">
                <Image
                  src="/assets/logo.webp"
                  alt="Tradewinggs Logo"
                  width={32}
                  height={32}
                  className="rounded-lg shadow-lg ring-1 ring-[#ffa238]/50"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#ffa238]/15 to-transparent" />
              </div>
              <div>
                <h3 className="font-bold text-sm bg-gradient-to-r from-[#ffa238] to-[#ffa238]/70 bg-clip-text text-transparent">
                  Tradewinggs
                </h3>
                <p className="text-white/70 text-xs">Digital Excellence</p>
              </div>
            </motion.div>

            <div className="bg-gradient-to-br from-[#232a2f]/40 to-[#1d2429]/20 backdrop-blur-sm border border-[#4e5458]/20 rounded-lg p-2 mb-3">
              <p className="text-white/90 text-xs leading-relaxed">
                Your Brand Partner in Digital World.
              </p>
            </div>

            {/* dynamic contacts */}
            <div className="space-y-1">
              {contacts.map(({ icon, text, href }) => (
                <motion.a
                  key={text}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-1 text-white/80 hover:text-[#ffa238] transition-all duration-300 group bg-[#232a2f]/20 hover:bg-[#1d2429]/30 rounded-md p-1 border border-[#4e5458]/20 hover:border-[#ffa238]/40"
                  whileHover={{ x: 1, scale: 1.01 }}
                >
                  <span className="p-1 rounded-sm bg-[#1d2429]/40 group-hover:bg-[#4e5458]/40 transition-colors">
                    {icon}
                  </span>
                  <span className="text-xs font-medium break-all">{text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* nav link columns */}
          {Object.entries(footerLinks).map(([section, links], idx) => (
            <motion.div
              key={section}
              className="col-span-2 sm:col-span-1 text-center sm:text-left relative"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-1/2 sm:left-0 w-4 h-0.5 bg-gradient-to-r from-[#ffa238] to-transparent transform -translate-x-1/2 sm:translate-x-0" />
              <h3 className="pt-1 mb-3 text-sm font-bold text-white capitalize">
                {section}
              </h3>
              <ul className="space-y-1">
                {links.map((l) => (
                  <motion.li
                    key={l.name}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a
                      href={l.href}
                      className="flex items-center justify-center sm:justify-start text-white/60 hover:text-[#ffa238] text-xs transition-all duration-300 group relative py-0.5"
                    >
                      <span className="w-0 group-hover:w-1 h-0.5 bg-gradient-to-r from-[#ffa238] to-[#ffa238]/70 transition-all duration-300 mr-0 group-hover:mr-1 rounded-full" />
                      <span className="relative">
                        {l.name}
                        <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#ffa238]/40 transition-all duration-300" />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* socials & map */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#232a2f]/50 to-[#1d2429]/30 backdrop-blur-sm border border-[#4e5458]/20 rounded-xl p-4">
            <h3 className="mb-3 text-center text-sm font-bold text-white">
              Connect With Us
            </h3>

            {/* social buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              {socialLinks.map(({ icon, href, label, gradient }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex items-center justify-center gap-1 p-2 rounded-lg bg-gradient-to-r ${gradient} text-white text-xs font-medium shadow-md hover:shadow-lg transition-all duration-300 group`}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="group-hover:scale-105 transition-transform">
                    {icon}
                  </span>
                  <span className="hidden sm:block">{label}</span>
                </motion.a>
              ))}
            </div>

            {/* map card */}
            {MAP_URL && (
              <motion.a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group rounded-lg overflow-hidden shadow-md ring-1 ring-[#4e5458]/40 max-w-xs mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/GoogleMaps.webp"
                  alt="Office Location Map"
                  width={300}
                  height={60}
                  className="object-cover w-full h-[100px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-1 text-xs font-semibold text-white bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
                    <FaMapMarkerAlt className="text-[#ffa238]" size={8} />
                    View Location
                    <FaGlobe className="text-blue-400" size={8} />
                  </span>
                </div>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
