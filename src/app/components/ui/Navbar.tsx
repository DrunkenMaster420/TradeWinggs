"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavbarProps {
  onProductsClick?: () => void;
  onBlogClick?: () => void;
}

type NavItem = "Home" | "About" | "Services" | "Products" | "Testimonials" | "Blog" | "Contact";

const navItems: readonly NavItem[] = [
  "Home",
  "About",
  "Services",
  "Products",
  "Testimonials",
  "Blog",
  "Contact",
] as const;

const Navbar: React.FC<NavbarProps> = ({ onProductsClick, onBlogClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* ────────────────────────── SCROLL LISTENER ────────────────────────── */
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ──────────── CLOSE MOBILE MENU WHEN CLICKING OUTSIDE ──────────────── */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleNavClick = useCallback((item: NavItem): void => {
    if (item === "Products" && onProductsClick) {
      onProductsClick();
    } else if (item === "Blog" && onBlogClick) {
      onBlogClick();
    }
    setIsMenuOpen(false);
  }, [onProductsClick, onBlogClick]);

  const toggleMenu = useCallback((): void => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback((): void => {
    setIsMenuOpen(false);
  }, []);

  /* ────────────────────────────── RENDER ─────────────────────────────── */
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#232a2f]/95 backdrop-blur-xl shadow-2xl border-b border-[#ffa238]/20"
          : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 py-2" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-3 group relative z-50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            aria-label="Tradewinggs home"
          >
            <div className="relative">
              <Image
                src="/assets/logo.webp"
                alt="Tradewinggs Logo"
                width={35}
                height={35}
                className="rounded-lg ring-2 ring-[#ffa238]/50 group-hover:ring-[#ffa238] transition-all duration-300 shadow-lg object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-lg bg-[#ffa238]/20 scale-0 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-[#ffa238] bg-clip-text text-transparent">
              Tradewinggs
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-6 text-white font-medium" role="menubar">
            {navItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                role="menuitem"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavClick(item)}
                  className="relative group text-base py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-[#ffa238]/10 hover:text-[#ffa238] focus:outline-none focus:ring-2 focus:ring-[#ffa238]/50"
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-[#ffa238] transition-all duration-300 group-hover:w-6" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="text-white p-3 rounded-lg hover:bg-[#ffa238]/10 focus:outline-none focus:ring-2 focus:ring-[#ffa238]/50 relative z-50"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
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
                    <FaTimes size={22} aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars size={22} aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="menu"
              ref={menuRef}
              id="mobile-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mx-4 bg-[#232a2f]/98 backdrop-blur-xl border border-[#ffa238]/30 rounded-b-2xl shadow-2xl z-45 lg:hidden overflow-hidden"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <ul className="flex flex-col items-center p-6 space-y-4">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-full"
                    role="menuitem"
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => handleNavClick(item)}
                      className="block w-full text-lg py-3 px-6 text-white text-center rounded-xl transition-colors duration-300 hover:bg-[#ffa238]/10 hover:text-[#ffa238] focus:outline-none focus:ring-2 focus:ring-[#ffa238]/50"
                      aria-label={`Navigate to ${item} section`}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;