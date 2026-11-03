"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/content";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isHome = pathname === "/";
  const navBg = scrolled || !isHome;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navBg
            ? "bg-ivory/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span
                  className={`font-serif text-2xl md:text-[1.7rem] font-semibold tracking-wide transition-colors duration-500 ${
                    navBg ? "text-navy" : "text-ivory"
                  }`}
                >
                  NEELAYA
                </span>
                <span
                  className={`block text-[0.6rem] font-sans tracking-[0.35em] uppercase transition-colors duration-500 ${
                    navBg ? "text-gold" : "text-gold-light"
                  }`}
                >
                  Exports
                </span>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[0.8rem] font-sans font-medium tracking-[0.1em] uppercase transition-colors duration-300 group ${
                    navBg
                      ? pathname === link.href
                        ? "text-gold"
                        : "text-navy hover:text-gold"
                      : pathname === link.href
                      ? "text-gold-light"
                      : "text-ivory/80 hover:text-ivory"
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-300 ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
              <Link
                href="/contact"
                className={`ml-4 inline-flex items-center gap-2 px-6 py-2.5 text-[0.7rem] font-sans font-semibold tracking-[0.15em] uppercase border transition-all duration-400 ${
                  navBg
                    ? "border-gold text-gold hover:bg-gold hover:text-navy-dark"
                    : "border-gold-light/50 text-gold-light hover:border-gold-light hover:bg-gold-light/10"
                }`}
              >
                Enquire
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative z-50 p-2 transition-colors duration-300 ${
                isOpen
                  ? "text-ivory"
                  : navBg
                  ? "text-navy"
                  : "text-ivory"
              }`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className="fixed inset-0 z-40 bg-navy-dark"
          >
            <div className="flex min-h-screen max-h-screen flex-col items-center justify-center gap-2 overflow-y-auto px-8 py-28">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-center font-serif text-4xl md:text-5xl py-3 transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-gold"
                        : "text-ivory/70 hover:text-ivory"
                    }`}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                <div className="gold-line mx-auto mb-8" />
                <p className="text-ivory/40 text-sm text-center font-sans tracking-wide">
                  {BRAND.email}
                </p>
                <p className="text-ivory/30 text-xs text-center font-sans tracking-wide mt-2">
                  {BRAND.phone}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
