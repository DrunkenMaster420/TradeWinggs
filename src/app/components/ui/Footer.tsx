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
  FaWhatsapp,
  FaHeart,
  FaArrowUp,
  FaGlobe,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Generate random particles only on client after mount
  const [particles, setParticles] = React.useState<
    Array<{
      left: string;
      top: string;
      duration: number;
      delay: number;
    }>
  >([]);

  React.useEffect(() => {
    const arr = Array.from({ length: 12 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(arr);
  }, []);

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
  };

  const socialLinks = [
    {
      icon: <FaFacebook size={14} />,
      href: "#",
      label: "Facebook",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: <FaInstagram size={14} />,
      href: "#",
      label: "Instagram",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <FaLinkedin size={14} />,
      href: "#",
      label: "LinkedIn",
      gradient: "from-blue-700 to-blue-800",
    },
    {
      icon: <FaYoutube size={14} />,
      href: "#",
      label: "YouTube",
      gradient: "from-red-600 to-red-700",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#232a2f] via-[#1d2429] to-[#232a2f]">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ffa238]/8 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#ffa238]/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-gradient-to-tr from-[#241d49]/8 to-transparent rounded-full blur-3xl"></div>

      {/* Animated particles - reduced */}
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

      {/* Top Border with Gradient */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#ffa238] to-transparent"></div>

      <div className="max-w-6xl mx-auto px-3 py-6 relative z-10">
        {/* First Row: All main columns in one row (even on mobile) */}
        <div className="grid grid-cols-6 gap-3 sm:gap-4 lg:gap-6 mb-6">
          {/* Company Info - 2 columns */}
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
                  src="/assets/logo.jpg"
                  alt="TradeWings Logo"
                  width={32}
                  height={32}
                  className="rounded-lg shadow-lg ring-1 ring-[#ffa238]/50"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#ffa238]/15 to-transparent"></div>
              </div>
              <div>
                <h3 className="font-bold text-sm bg-gradient-to-r from-[#ffa238] to-[#ffa238]/70 bg-clip-text text-transparent">
                  TradeWings
                </h3>
                <p className="text-[#ffffff]/70 text-xs">Digital Excellence</p>
              </div>
            </motion.div>

            <div className="bg-gradient-to-br from-[#232a2f]/40 to-[#1d2429]/20 backdrop-blur-sm border border-[#4e5458]/20 rounded-lg p-2 mb-3">
              <p className="text-[#ffffff]/90 leading-relaxed text-xs">
                Your Brand Partner in Digital World.
              </p>
            </div>

            {/* Contact Info - Compact */}
            <div className="space-y-1">
              {[
                {
                  icon: <MdPhone className="text-[#ffa238]" size={10} />,
                  text: "+91 7974168197",
                  href: "tel:+917974168197",
                },
                {
                  icon: <FaMapMarkerAlt className="text-blue-400" size={10} />,
                  text: "Gwalior, MP",
                  href: "#",
                },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center justify-center sm:justify-start gap-1 text-[#ffffff]/80 hover:text-[#ffa238] transition-all duration-300 group bg-[#232a2f]/20 hover:bg-[#1d2429]/30 rounded-md p-1 border border-[#4e5458]/20 hover:border-[#ffa238]/40"
                  whileHover={{ x: 1, scale: 1.01 }}
                >
                  <div className="p-1 rounded-sm bg-[#1d2429]/40 group-hover:bg-[#4e5458]/40 transition-colors">
                    {contact.icon}
                  </div>
                  <p className="font-medium text-xs">{contact.text}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections - Each take 1 column */}
          {Object.entries(footerLinks).map(([section, links], sectionIndex) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: sectionIndex * 0.05 }}
              viewport={{ once: true }}
              className="col-span-2 sm:col-span-1 text-center sm:text-left relative"
            >
              <div className="absolute top-0 left-1/2 sm:left-0 w-4 h-0.5 bg-gradient-to-r from-[#ffa238] to-transparent mb-2 transform -translate-x-1/2 sm:translate-x-0"></div>
              <h3 className="font-bold text-sm text-[#ffffff] mb-3 capitalize pt-1">
                {section}
              </h3>
              <ul className="space-y-1">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a
                      href={link.href}
                      className="text-[#ffffff]/60 hover:text-[#ffa238] transition-all duration-300 flex items-center justify-center sm:justify-start group relative py-0.5 text-xs"
                    >
                      <span className="w-0 group-hover:w-1 h-0.5 bg-gradient-to-r from-[#ffa238] to-[#ffa238]/70 transition-all duration-300 mr-0 group-hover:mr-1 rounded-full"></span>
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#ffa238]/40 transition-all duration-300"></span>
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Second Row: Connect with us section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-[#232a2f]/50 to-[#1d2429]/30 backdrop-blur-sm border border-[#4e5458]/20 rounded-xl p-4">
            <h3 className="font-bold text-sm text-[#ffffff] mb-3 text-center">
              Connect With Us
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1 p-2 rounded-lg bg-gradient-to-r ${social.gradient} text-white font-medium transition-all duration-300 group shadow-md hover:shadow-lg`}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={social.label}
                >
                  <span className="group-hover:scale-105 transition-transform">
                    {social.icon}
                  </span>
                  <span className="text-xs hidden sm:block">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Map - Centered */}
            <motion.a
              href="https://maps.app.goo.gl/c5gz8qjSyupazodD6?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group rounded-lg overflow-hidden shadow-md ring-1 ring-[#4e5458]/40 max-w-xs mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/GoogleMaps.png"
                alt="Office Location Map"
                width={300}
                height={60}
                style={{ objectFit: "cover", width: "100%", height: "100px" }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
                  <span className="text-white font-semibold flex items-center gap-1 text-xs">
                    <FaMapMarkerAlt className="text-[#ffa238]" size={8} />
                    View Location
                    <FaGlobe className="text-blue-400" size={8} />
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
