"use client";

import { ReactNode, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";

// ─── Scroll Reveal Wrapper ──────────────────────────────
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  duration?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  duration = 0.8,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.15 });
  const reduceMotion = useReducedMotion();
  const revealOffset = direction === "down" ? -12 : direction === "none" ? 0 : 12;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: reduceMotion ? 0 : revealOffset }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: reduceMotion ? 0 : revealOffset }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ overflow: "clip" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger Container ──────────────────────────────────
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.12,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.1 });
  const reduceMotion = useReducedMotion();
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };
  const variants = reduceMotion
    ? { hidden: {}, visible: {} }
    : containerVariants;

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger Item ────────────────────────────────────────
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Image Reveal ────────────────────────────────────────
interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({
  children,
  className = "",
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={
        isInView
          ? { clipPath: "inset(0 0% 0 0)" }
          : { clipPath: "inset(0 100% 0 0)" }
      }
      transition={{
        duration: 1.2,
        delay,
        ease: [0.77, 0, 0.175, 1],
      }}
      style={{ position: "relative" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Parallax Wrapper ────────────────────────────────────
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({
  children,
  className = "",
  speed = 20,
}: ParallaxProps) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed}%`, `-${speed}%`]);

  return (
    <motion.div
      ref={ref}
      style={{ y: reduceMotion ? 0 : y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Text Reveal (Line by Line) ──────────────────────────
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "h2",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const reduceMotion = useReducedMotion();

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
            paddingBottom: "0.12em",
          }}
        >
          <motion.span
            initial={{ y: reduceMotion ? "0%" : "100%" }}
            animate={isInView ? { y: "0%" } : { y: reduceMotion ? "0%" : "100%" }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.04,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}

// ─── Counter ─────────────────────────────────────────────
interface CounterProps {
  value: string;
  className?: string;
}

export function Counter({ value, className = "" }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: reduceMotion ? 1 : 0.5 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {value}
    </motion.span>
  );
}
