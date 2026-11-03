"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ABOUT } from "@/lib/content";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/MotionPrimitives";

export default function AboutPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="grain-dark relative h-[70vh] min-h-[460px] md:min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={ABOUT.heroImage}
            alt="Indian artisan heritage"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="overlay-navy absolute inset-0" />
        </div>

        <div className="relative z-10 flex flex-col justify-end h-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.3em] uppercase">
                Our Story
              </span>
            </div>
          </Reveal>
          <TextReveal
            text={ABOUT.headline}
            as="h1"
            className="font-serif text-ivory text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight max-w-3xl"
          />
        </div>
      </section>

      {/* ═══ INTRODUCTION ═══ */}
      <section className="relative z-10 py-16 md:py-24 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <p className="font-serif text-navy text-xl md:text-2xl lg:text-[1.75rem] font-light leading-[1.6] italic">
                &ldquo;{ABOUT.intro}&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="gold-line mx-auto mt-10" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ STORY SECTIONS ═══ */}
      {ABOUT.story.map((section, i) => (
        <section
          key={section.title}
          className={`relative z-10 py-20 md:py-32 ${
            i % 2 === 0 ? "bg-ivory" : "bg-ivory-warm"
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Image */}
                <div className={`min-w-0 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 border border-gold/10" />
                </div>
              </div>

              {/* Text */}
              <div className={`min-w-0 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Reveal>
                  <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.25em] uppercase">
                    {`0${i + 1}`}
                  </span>
                </Reveal>
                <TextReveal
                  text={section.title}
                  as="h2"
                  className="font-serif text-navy text-3xl md:text-4xl lg:text-[2.75rem] font-light leading-[1.2] tracking-tight mt-4"
                />
                <Reveal delay={0.2}>
                  <p className="mt-6 max-w-xl text-[#4a4a4a] text-base md:text-[1.05rem] leading-[1.8] font-light">
                    {section.body}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ═══ VALUES ═══ */}
      <section className="grain-dark relative z-10 py-20 md:py-24 bg-navy-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold/30" />
              <span className="text-gold/70 text-[0.7rem] font-sans font-semibold tracking-[0.25em] uppercase">
                What We Stand For
              </span>
              <div className="w-12 h-px bg-gold/30" />
            </div>
            <h2 className="font-serif text-ivory text-3xl md:text-5xl font-light leading-[1.15] tracking-tight">
              Our Values
            </h2>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ABOUT.values.map((value) => (
              <StaggerItem key={value.title} className="h-full">
                <div className="p-8 border border-ivory/5 rounded-sm hover:border-gold/20 transition-all duration-500 h-full">
                  <div className="w-10 h-px bg-gold mb-6" />
                  <h3 className="font-serif text-ivory text-xl font-light mb-4">
                    {value.title}
                  </h3>
                  <p className="text-ivory/55 text-sm leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative z-10 py-20 md:py-28 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 text-center">
          <Reveal>
            <h2 className="font-serif text-navy text-3xl md:text-5xl font-light leading-[1.15] tracking-tight max-w-2xl mx-auto">
              Interested in partnering with us?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-[#4a4a4a] text-base max-w-lg mx-auto font-light leading-relaxed">
              We work with luxury retailers, interior designers, hotels and
              collectors worldwide. Let&apos;s create something beautiful together.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Link href="/contact" className="btn-gold-filled">
                Get in Touch
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/collections" className="btn-gold">
                View Collections
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
