"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowRight, Package, Palette, Globe, BookOpen } from "lucide-react";
import {
  HERO,
  BRAND_INTRO,
  COLLECTIONS,
  CRAFTSMANSHIP,
  WHOLESALE_BENEFITS,
  TESTIMONIALS,
  BRAND,
} from "@/lib/content";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  Counter,
} from "@/components/MotionPrimitives";

const iconMap: Record<string, React.ReactNode> = {
  Package: <Package size={28} />,
  Palette: <Palette size={28} />,
  Globe: <Globe size={28} />,
  BookOpen: <BookOpen size={28} />,
};

// ═══════════════════════════════════════════════════════════
// HERO SECTION
// ═══════════════════════════════════════════════════════════
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="grain-dark relative h-[100svh] min-h-[520px] md:h-screen md:min-h-[700px] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <picture className="absolute inset-0">
          <source media="(max-width: 767px)" srcSet={HERO.mobileImage} />
          <Image
            src={HERO.image}
            alt="Luxury Indian handicrafts"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
        </picture>
        <div className="overlay-navy absolute inset-0" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col justify-end h-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pb-12 md:pb-28"
      >
        {/* Eyebrow */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-gold" />
          <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.3em] uppercase">
            {BRAND.subtitle}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hero-headline font-serif text-ivory text-5xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-light leading-[1.05] tracking-tight max-w-4xl"
        >
          From India,
          <br />
          to the world.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-ivory/70 text-base md:text-lg max-w-xl font-light leading-relaxed"
        >
          {HERO.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link href={HERO.ctaLink} className="btn-gold">
            {HERO.cta}
            <ArrowRight size={16} />
          </Link>
          <Link href={HERO.secondaryCtaLink} className="btn-ivory">
            {HERO.secondaryCta}
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-8 md:right-16 hidden md:flex flex-col items-center gap-3"
        >
          <span className="text-ivory/30 text-[0.65rem] font-sans tracking-[0.2em] uppercase rotate-90 origin-center translate-y-8">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// BRAND INTRODUCTION
// ═══════════════════════════════════════════════════════════
function BrandIntroSection() {
  return (
    <section className="relative z-10 py-20 md:py-36 bg-ivory">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line" />
                <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.25em] uppercase">
                  {BRAND_INTRO.eyebrow}
                </span>
              </div>
            </Reveal>
            <TextReveal
              text={BRAND_INTRO.headline}
              as="h2"
              className="font-serif text-navy text-3xl md:text-4xl lg:text-[2.75rem] font-light leading-[1.2] tracking-tight"
            />
            <Reveal delay={0.3}>
              <p className="mt-8 text-[#4a4a4a] text-base leading-[1.85] font-light">
                {BRAND_INTRO.body}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-gold text-[0.75rem] font-semibold tracking-[0.15em] uppercase hover:text-gold-dark transition-colors duration-300 group"
              >
                Our Story
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </Reveal>
          </div>

          {/* Images — Asymmetric Composition */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative pb-8 md:pb-0">
              <div className="relative aspect-[4/5] max-w-md ml-auto overflow-hidden">
                <Image
                  src={BRAND_INTRO.image}
                  alt="Indian artisan craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 left-0 md:left-8 w-48 md:w-64 aspect-[3/4] shadow-2xl hidden md:block overflow-hidden">
                <Image
                  src={BRAND_INTRO.secondImage}
                  alt="Traditional painting detail"
                  fill
                  className="object-cover"
                  sizes="250px"
                />
                <div className="absolute inset-0 border border-gold/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// FEATURED COLLECTIONS
// ═══════════════════════════════════════════════════════════
function FeaturedCollections() {
  return (
    <section className="grain-dark relative z-10 py-24 md:py-36 bg-navy-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gold/50" />
                <span className="text-gold/80 text-[0.7rem] font-sans font-semibold tracking-[0.25em] uppercase">
                  Our Collections
                </span>
              </div>
            </Reveal>
            <TextReveal
              text="Curated with reverence. Crafted with mastery."
              as="h2"
              className="font-serif text-ivory text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight max-w-2xl"
            />
          </div>
          <Reveal delay={0.3}>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-gold text-[0.75rem] font-semibold tracking-[0.15em] uppercase hover:text-gold-light transition-colors duration-300 group shrink-0"
            >
              View All
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Reveal>
        </div>

        {/* Collections Grid — Editorial Layout */}
        <div className="horizontal-rail -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-3 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-8">
          {COLLECTIONS.slice(0, 3).map((col, i) => (
            <Reveal key={col.id} delay={i * 0.15} className="min-w-[78vw] snap-start md:min-w-0">
              <Link
                href={`/collections#${col.id}`}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="text-gold/70 text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase mb-2 block">
                      {col.subtitle}
                    </span>
                    <h3 className="font-serif text-ivory text-2xl md:text-3xl font-light leading-tight mb-3">
                      {col.title}
                    </h3>
                    <div className="flex items-center gap-2 text-ivory/60 text-[0.7rem] font-sans tracking-[0.1em] uppercase group-hover:text-gold transition-colors duration-500">
                      Explore
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </div>

                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-700" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Second row — 2 items */}
        <div className="horizontal-rail -mx-6 mt-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-3 md:mx-0 md:mt-6 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:mt-8 lg:gap-8">
          {COLLECTIONS.slice(3).map((col, i) => (
            <Reveal key={col.id} delay={i * 0.15} className="min-w-[84vw] snap-start md:min-w-0">
              <Link
                href={`/collections#${col.id}`}
                className="group block"
              >
                <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="text-gold/70 text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase mb-2 block">
                      {col.subtitle}
                    </span>
                    <h3 className="font-serif text-ivory text-2xl md:text-3xl font-light leading-tight mb-3">
                      {col.title}
                    </h3>
                    <div className="flex items-center gap-2 text-ivory/60 text-[0.7rem] font-sans tracking-[0.1em] uppercase group-hover:text-gold transition-colors duration-500">
                      Explore
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-700" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// CRAFTSMANSHIP SECTION
// ═══════════════════════════════════════════════════════════
function CraftsmanshipSection() {
  return (
    <section className="grain-surface relative z-10 py-20 md:py-36 bg-ivory">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <Image
              src={CRAFTSMANSHIP.image}
              alt="Artisan at work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border border-gold/10" />
          </div>

          {/* Text & Stats */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line" />
                <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.25em] uppercase">
                  {CRAFTSMANSHIP.eyebrow}
                </span>
              </div>
            </Reveal>

            <TextReveal
              text={CRAFTSMANSHIP.headline}
              as="h2"
              className="font-serif text-navy text-3xl md:text-4xl lg:text-[2.75rem] font-light leading-[1.2] tracking-tight"
            />

            <Reveal delay={0.3}>
              <p className="mt-8 text-[#4a4a4a] text-base leading-[1.85] font-light">
                {CRAFTSMANSHIP.body}
              </p>
            </Reveal>

            {/* Stats Grid */}
            <StaggerContainer className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-navy/10">
              {CRAFTSMANSHIP.stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <Counter
                    value={stat.number}
                    className="block font-serif text-4xl md:text-5xl text-navy font-light"
                  />
                  <span className="block mt-2 text-[#555] text-[0.75rem] font-sans tracking-[0.1em] uppercase font-medium">
                    {stat.label}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════
function TestimonialsSection() {
  return (
    <section className="relative z-10 py-20 md:py-32 bg-ivory-warm">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold/30" />
            <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.25em] uppercase">
              Trusted Worldwide
            </span>
            <div className="w-12 h-px bg-gold/30" />
          </div>
          <h2 className="font-serif text-navy text-2xl md:text-3xl font-light leading-tight">
            What our partners say
          </h2>
        </Reveal>

        <StaggerContainer className="horizontal-rail -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-3 md:mx-0 md:grid md:grid-cols-3 md:gap-10 md:overflow-visible md:px-0 md:pb-0">
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i} className="h-full min-w-[84vw] snap-start md:min-w-0">
              <div className="relative flex h-full flex-col p-8 md:p-10 bg-ivory rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                {/* Quote mark */}
                <span className="absolute top-4 left-6 font-serif text-6xl text-gold/15 leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-navy/80 text-base leading-[1.8] font-light italic font-serif mt-8">
                  {testimonial.quote}
                </p>
                <div className="mt-auto pt-6 border-t border-navy/5">
                  <p className="text-navy font-semibold text-sm font-sans">
                    {testimonial.author}
                  </p>
                  <p className="text-[#555] text-xs font-sans mt-1 tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// WHOLESALE BENEFITS
// ═══════════════════════════════════════════════════════════
function WholesaleBenefitsSection() {
  return (
    <section className="relative z-10 py-24 md:py-36 bg-navy">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Heading */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gold/50" />
                <span className="text-gold/80 text-[0.7rem] font-sans font-semibold tracking-[0.25em] uppercase">
                  Wholesale
                </span>
              </div>
            </Reveal>
            <TextReveal
              text="Partnering with the world's finest retailers."
              as="h2"
              className="font-serif text-ivory text-3xl md:text-4xl font-light leading-[1.2] tracking-tight"
            />
            <Reveal delay={0.3}>
              <Link
                href="/wholesale"
                className="inline-flex items-center gap-2 mt-8 text-gold text-[0.75rem] font-semibold tracking-[0.15em] uppercase hover:text-gold-light transition-colors duration-300 group"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Reveal>
          </div>

          {/* Right — Benefits */}
          <div className="lg:col-span-8">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {WHOLESALE_BENEFITS.map((benefit) => (
                <StaggerItem key={benefit.title} className="h-full">
                  <div className="h-full p-6 md:p-8 border border-ivory/8 rounded-sm hover:border-gold/20 transition-colors duration-500 group">
                    <div className="text-gold/70 mb-4 group-hover:text-gold transition-colors duration-500">
                      {iconMap[benefit.icon]}
                    </div>
                    <h3 className="font-serif text-ivory text-xl font-light mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-ivory/70 text-sm leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// CTA SECTION
// ═══════════════════════════════════════════════════════════
function CTASection() {
  return (
    <section className="grain-dark relative z-10 py-28 md:py-44 overflow-hidden">
      {/* Background image — absolutely positioned within this relative section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1920&q=85"
          alt="Indian artisan heritage"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="overlay-navy absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gold/40" />
            <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.3em] uppercase">
              Begin Your Journey
            </span>
            <div className="w-16 h-px bg-gold/40" />
          </div>
        </Reveal>

        <TextReveal
          text="Let us curate something extraordinary for you."
          as="h2"
          className="font-serif text-ivory text-3xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight max-w-3xl mx-auto"
        />

        <Reveal delay={0.4}>
          <p className="mt-8 text-ivory/65 text-base md:text-lg max-w-lg mx-auto font-light leading-relaxed">
            Whether you&apos;re a luxury retailer, interior designer or collector —
            we&apos;d love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link href="/contact" className="btn-gold">
              Send an Enquiry
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/wholesale" className="btn-ivory">
              Download Catalogue
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandIntroSection />
      <FeaturedCollections />
      <CraftsmanshipSection />
      <TestimonialsSection />
      <WholesaleBenefitsSection />
      <CTASection />
    </>
  );
}
