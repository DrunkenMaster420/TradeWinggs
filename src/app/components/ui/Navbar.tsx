"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent body scroll when menu is open
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Products",
    "Testimonials",
    "Blog",
    "Contact",
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#232a2f]/95 backdrop-blur-xl shadow-2xl border-b border-[#ffa238]/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between h-14">
          <motion.a
            href="#home"
            className="flex items-center space-x-3 group relative z-50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <Image
                src="/assets/logo.jpg"
                alt="Tradewinggs Logo"
                width={35}
                height={35}
                className="rounded-lg ring-2 ring-[#ffa238]/50 group-hover:ring-[#ffa238] transition-all duration-300 shadow-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 rounded-lg bg-[#ffa238]/20 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            <span className="text-[#ffffff] text-xl font-bold bg-gradient-to-r from-[#ffffff] to-[#ffa238] bg-clip-text text-transparent">
              TradeWings
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-6 text-[#ffffff] font-medium">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative hover:text-[#ffa238] transition-colors duration-300 group text-base py-2 px-3 rounded-lg hover:bg-[#ffa238]/10"
                >
                  {item}
                  <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-[#ffa238] transition-all duration-300 group-hover:w-6"></span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#ffffff] focus:outline-none p-3 rounded-lg hover:bg-[#ffa238]/10 relative z-50"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-[#232a2f]/98 backdrop-blur-xl border border-[#ffa238]/30 rounded-b-2xl shadow-2xl overflow-hidden z-45 lg:hidden mx-4"
            >
              <div className="p-6">
                <ul className="flex flex-col items-center space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-[#ffffff] hover:text-[#ffa238] transition-colors duration-300 text-lg py-3 px-6 block text-center rounded-xl hover:bg-[#ffa238]/10 border border-transparent hover:border-[#ffa238]/30"
                      >
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
