"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { BRAND, NAV_LINKS, COLLECTIONS } from "@/lib/content";
import { InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-ivory relative overflow-hidden">
      {/* Decorative gold line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Main Footer */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/">
              <span className="font-serif text-3xl font-semibold tracking-wide text-ivory">
                NEELAYA
              </span>
              <span className="block text-[0.6rem] font-sans tracking-[0.35em] uppercase text-gold mt-0.5">
                Exports
              </span>
            </Link>
            <p className="mt-6 text-ivory/60 text-sm leading-relaxed max-w-sm font-light">
              {BRAND.description.substring(0, 200)}...
            </p>
            <div className="flex items-center gap-5 mt-8">
              {[
                { icon: InstagramIcon, href: BRAND.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/60 hover:text-ivory text-sm transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="lg:col-span-3">
            <h4 className="text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-6">
              Collections
            </h4>
            <ul className="space-y-3">
              {COLLECTIONS.map((col) => (
                <li key={col.id}>
                  <Link
                    href={`/collections#${col.id}`}
                    className="text-ivory/60 hover:text-ivory text-sm transition-colors duration-300 font-light"
                  >
                    {col.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold/60 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-ivory/60 hover:text-ivory text-sm transition-colors duration-300 font-light"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold/60 mt-0.5 shrink-0" />
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                  className="text-ivory/60 hover:text-ivory text-sm transition-colors duration-300 font-light"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold/60 mt-0.5 shrink-0" />
                <span className="text-ivory/60 text-sm font-light leading-relaxed">
                  {BRAND.address}
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 text-gold text-[0.7rem] font-semibold tracking-[0.15em] uppercase hover:text-gold-light transition-colors duration-300"
            >
              Send an Enquiry
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/55 text-xs font-light tracking-wide">
            © {currentYear} Neelaya Exports. All rights reserved.
          </p>
          <p className="text-ivory/50 text-xs font-light tracking-wide">
            Handcrafted in India with ♡
          </p>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute bottom-8 left-1/2 z-0 -translate-x-1/2 pointer-events-none select-none">
        <span className="font-serif text-[8vw] md:text-[6vw] font-bold text-ivory/[0.02] whitespace-nowrap">
          NEELAYA
        </span>
      </div>
    </footer>
  );
}
