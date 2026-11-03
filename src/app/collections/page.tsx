"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { COLLECTIONS } from "@/lib/content";
import {
  Reveal,
  TextReveal,
} from "@/components/MotionPrimitives";

export default function CollectionsPage() {
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState(COLLECTIONS[0]?.id ?? "");

  useEffect(() => {
    const scrollToHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (!hash) return;

      window.setTimeout(() => {
        const el = document.getElementById(hash);
        if (!el) return;
        setActiveSection(hash);
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(() => setActiveSection(hash), 500);
      }, 0);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  useEffect(() => {
    const sections = COLLECTIONS.map((collection) =>
      document.getElementById(collection.id)
    ).filter((section): section is HTMLElement => section !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        const current = sections
          .filter((section) => section.getBoundingClientRect().top <= 160)
          .at(-1);
        if (current) setActiveSection(current.id);
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    const observerDelay = window.location.hash ? 700 : 0;
    const timeoutId = window.setTimeout(() => {
      sections.forEach((section) => observer.observe(section));
    }, observerDelay);

    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="grain-dark relative h-[60vh] min-h-[420px] md:min-h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&q=85"
            alt="Curated collections"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="overlay-navy absolute inset-0" />
        </div>

        <div className="relative z-10 flex flex-col justify-end h-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.3em] uppercase">
                Our Collections
              </span>
            </div>
          </Reveal>
          <TextReveal
            text="Five traditions. One vision of excellence."
            as="h1"
            className="font-serif text-ivory text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight max-w-4xl"
          />
        </div>
      </section>

      {/* ═══ COLLECTION NAV ═══ */}
      <section className="sticky top-20 md:top-24 z-30 bg-ivory/95 backdrop-blur-md border-b border-navy/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-6 md:gap-10 py-4 min-w-max">
            {COLLECTIONS.map((col) => (
              <a
                key={col.id}
                href={`#${col.id}`}
                aria-current={activeSection === col.id ? "location" : undefined}
                className={`relative text-[0.7rem] font-sans font-medium tracking-[0.1em] uppercase transition-colors duration-300 whitespace-nowrap shrink-0 after:absolute after:-bottom-4 after:left-0 after:h-px after:bg-gold after:transition-all ${
                  activeSection === col.id
                    ? "text-gold after:w-full"
                    : "text-navy/50 hover:text-gold after:w-0"
                }`}
              >
                {col.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COLLECTION SECTIONS ═══ */}
      {COLLECTIONS.map((collection, i) => (
        <section
          key={collection.id}
          id={collection.id}
          className={`relative z-10 py-20 md:py-32 scroll-mt-36 ${
            i % 2 === 0 ? "bg-ivory" : "bg-ivory-warm"
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
            {/* Main Layout */}
            <div className="horizontal-rail -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-3 lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-20 lg:overflow-visible lg:px-0 lg:pb-0">
              {/* Hero Image */}
              <div className={`min-w-[82vw] snap-start lg:min-w-0 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    priority={i === 0}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 border border-gold/10" />
                </div>
              </div>

              {/* Text Content */}
              <div className={`min-w-[82vw] snap-start lg:min-w-0 ${i % 2 === 1 ? "lg:order-1" : ""} lg:sticky lg:top-40`}>
                <Reveal>
                  <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.25em] uppercase">
                    {collection.subtitle}
                  </span>
                </Reveal>
                <TextReveal
                  text={collection.title}
                  as="h2"
                  className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight mt-4"
                />
                <Reveal delay={0.2}>
                  <p className="mt-8 text-[#6b6b6b] text-base leading-[1.9] font-light">
                    {collection.longDescription}
                  </p>
                </Reveal>

                {/* Features */}
                <Reveal delay={0.3}>
                  <ul className="mt-8 space-y-3">
                    {collection.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-navy/70 text-sm font-light"
                      >
                        <Check
                          size={16}
                          className="text-gold mt-0.5 shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                {/* CTA */}
                <Reveal delay={0.4}>
                  <div className="flex flex-wrap gap-4 mt-10">
                    <Link href="/wholesale" className="btn-gold-filled">
                      Enquire for Wholesale
                      <ArrowUpRight size={16} />
                    </Link>
                    <button
                      onClick={() =>
                        setActiveCollection(
                          activeCollection === collection.id
                            ? null
                            : collection.id
                        )
                      }
                      className="btn-gold"
                    >
                      {activeCollection === collection.id
                        ? "Close Gallery"
                        : "View Gallery"}
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Gallery */}
            <AnimatePresence>
              {activeCollection === collection.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-16 border-t border-navy/5">
                    {collection.gallery.map((img, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: j * 0.1, duration: 0.5 }}
                        className="relative aspect-square overflow-hidden group"
                      >
                        <Image
                          src={img}
                          alt={`${collection.title} gallery ${j + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      ))}

      {/* ═══ CTA ═══ */}
      <section className="grain-dark relative z-10 py-24 md:py-32 bg-navy-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-gold/30" />
              <span className="text-gold/70 text-[0.7rem] font-sans font-semibold tracking-[0.3em] uppercase">
                Ready to Order?
              </span>
              <div className="w-16 h-px bg-gold/30" />
            </div>
          </Reveal>
          <TextReveal
            text="Bring these collections to your market."
            as="h2"
            className="font-serif text-ivory text-3xl md:text-5xl font-light leading-[1.15] tracking-tight max-w-2xl mx-auto"
          />
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Link href="/wholesale" className="btn-gold">
                Wholesale Enquiry
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="btn-ivory">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
