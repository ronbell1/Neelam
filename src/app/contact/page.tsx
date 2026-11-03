"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Check,
} from "lucide-react";
import { BRAND } from "@/lib/content";
import { InstagramIcon } from "@/components/SocialIcons";
import {
  Reveal,
  TextReveal,
} from "@/components/MotionPrimitives";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="grain-dark relative h-[50vh] min-h-[380px] md:min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=85"
          alt="Contact Neelaya Exports"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="overlay-navy absolute inset-0" />

        <div className="relative z-10 flex flex-col justify-end h-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.3em] uppercase">
                Get in Touch
              </span>
            </div>
          </Reveal>
          <TextReveal
            text="We'd love to hear from you."
            as="h1"
            className="font-serif text-ivory text-4xl md:text-6xl lg:text-7xl font-light leading-[1] tracking-tight max-w-3xl"
          />
        </div>
      </section>

      {/* ═══ MAIN CONTENT ═══ */}
      <section className="py-24 md:py-36 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid min-w-0 grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="font-serif text-navy text-2xl md:text-3xl font-light leading-tight mb-8">
                  Let&apos;s start a conversation.
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[#4a4a4a] text-base leading-[1.8] font-light mb-10">
                  Whether you&apos;re a retailer, designer, hotelier or collector —
                  we&apos;re here to help you bring authentic Indian craftsmanship to
                  your world.
                </p>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={0.15}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-gold" />
                    </div>
                    <div>
                      <span className="text-[0.7rem] font-sans font-semibold tracking-[0.15em] uppercase text-navy/50 block mb-1">
                        Email
                      </span>
                      <a
                        href={`mailto:${BRAND.email}`}
                        className="text-navy text-sm hover:text-gold transition-colors duration-300"
                      >
                        {BRAND.email}
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-gold" />
                    </div>
                    <div>
                      <span className="text-[0.7rem] font-sans font-semibold tracking-[0.15em] uppercase text-navy/50 block mb-1">
                        Phone
                      </span>
                      <a
                        href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                        className="text-navy text-sm hover:text-gold transition-colors duration-300"
                      >
                        {BRAND.phone}
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.25}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div>
                      <span className="text-[0.7rem] font-sans font-semibold tracking-[0.15em] uppercase text-navy/50 block mb-1">
                        Visit Us
                      </span>
                      <p className="text-navy text-sm leading-relaxed">
                        {BRAND.address}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Social Links */}
              <Reveal delay={0.3}>
                <div className="mt-10 pt-10 border-t border-navy/5">
                  <span className="text-[0.7rem] font-sans font-semibold tracking-[0.15em] uppercase text-navy/50 block mb-4">
                    Follow Us
                  </span>
                  <div className="flex items-center gap-4">
                    {[
                      {
                        icon: InstagramIcon,
                        href: BRAND.instagram,
                        label: "Instagram",
                      },
                    ].map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy/50 hover:text-gold hover:bg-gold/10 transition-colors duration-300"
                      >
                        <Icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center min-h-[500px] p-12 bg-ivory-warm rounded-sm text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-8">
                    <Check size={36} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-navy text-3xl font-light mb-4">
                    Message Sent
                  </h3>
                  <p className="text-[#4a4a4a] text-base font-light leading-relaxed max-w-md">
                    Thank you for reaching out. Our team will respond within 24
                    hours. In the meantime, feel free to browse our collections.
                  </p>
                  <a
                    href="/collections"
                    className="mt-8 inline-flex items-center gap-2 text-gold text-[0.75rem] font-semibold tracking-[0.15em] uppercase hover:text-gold-dark transition-colors duration-300"
                  >
                    View Collections
                    <ArrowUpRight size={14} />
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Reveal>
                    <h3 className="font-serif text-navy text-2xl font-light mb-8">
                      Send us a message
                    </h3>
                  </Reveal>

                  <div className="space-y-8">
                    <Reveal delay={0.1}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                          <input
                            type="text"
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                name: e.target.value,
                              })
                            }
                            className="form-input"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="form-input"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </Reveal>

                    <Reveal delay={0.15}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          className="form-input"
                        />
                        <select
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="form-input cursor-pointer appearance-none"
                        >
                          <option value="">Subject</option>
                          <option value="wholesale">Wholesale Enquiry</option>
                          <option value="custom">Custom Order</option>
                          <option value="samples">Sample Request</option>
                          <option value="collaboration">Collaboration</option>
                          <option value="general">General Enquiry</option>
                        </select>
                      </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                      <div>
                        <textarea
                          placeholder="Your Message *"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          rows={6}
                          className="form-input resize-none"
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </Reveal>

                    <Reveal delay={0.25}>
                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="btn-gold-filled"
                      >
                        {formState === "submitting" ? (
                          <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            Sending...
                          </motion.span>
                        ) : (
                          <>
                            Send Message
                            <ArrowUpRight size={16} />
                          </>
                        )}
                      </button>
                    </Reveal>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MAP PLACEHOLDER ═══ */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1920&q=85"
          alt="Neelaya Exports location"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <MapPin size={32} className="text-gold mx-auto mb-4" />
            <p className="text-ivory font-serif text-xl md:text-2xl font-light">
              Hyderabad, India
            </p>
            <p className="text-ivory/55 text-sm font-light mt-2 max-w-sm mx-auto px-4">
              {BRAND.address}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
