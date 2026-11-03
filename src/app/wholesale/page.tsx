"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Package,
  Clock,
  Truck,
  CreditCard,
  Check,
} from "lucide-react";
import { WHOLESALE, BRAND, COLLECTIONS } from "@/lib/content";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/MotionPrimitives";

const infoIcons = [
  <Package key="p" size={20} />,
  <Clock key="c" size={20} />,
  <Truck key="t" size={20} />,
  <CreditCard key="cr" size={20} />,
];

export default function WholesalePage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    collections: [] as string[],
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.name.trim()) newErrors.name = "Contact name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (formData.collections.length === 0)
      newErrors.collections = "Please select at least one collection";
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

  const toggleCollection = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      collections: prev.collections.includes(id)
        ? prev.collections.filter((c) => c !== id)
        : [...prev.collections, id],
    }));
    if (errors.collections) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.collections;
        return next;
      });
    }
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="grain-dark relative h-[60vh] min-h-[420px] md:min-h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={WHOLESALE.heroImage}
            alt="Wholesale handicrafts"
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
                Wholesale Partnerships
              </span>
            </div>
          </Reveal>
          <TextReveal
            text={WHOLESALE.headline}
            as="h1"
            className="font-serif text-ivory text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight max-w-3xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-8 text-ivory/65 text-base md:text-lg max-w-2xl font-light leading-relaxed">
              {WHOLESALE.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="relative z-10 py-24 md:py-36 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold/30" />
              <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.25em] uppercase">
                How It Works
              </span>
              <div className="w-12 h-px bg-gold/30" />
            </div>
            <h2 className="font-serif text-navy text-3xl md:text-5xl font-light leading-[1.15] tracking-tight">
              Four simple steps
            </h2>
          </Reveal>

          <StaggerContainer className="horizontal-rail -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
            {WHOLESALE.process.map((step) => (
              <StaggerItem key={step.step} className="h-full min-w-[82vw] snap-start sm:min-w-0">
                <div className="relative p-8 bg-ivory-warm rounded-sm group hover:bg-navy-dark transition-colors duration-700 h-full">
                  <span className="font-serif text-5xl text-gold/20 font-light group-hover:text-gold/30 transition-colors duration-700">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-navy text-xl font-light mt-4 mb-3 group-hover:text-ivory transition-colors duration-700">
                    {step.title}
                  </h3>
                  <p className="text-[#555] text-sm leading-relaxed font-light group-hover:text-ivory/60 transition-colors duration-700">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ KEY INFO ═══ */}
      <section className="grain-dark relative z-10 py-16 md:py-20 bg-navy-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {[
              { label: "Minimum Order", value: WHOLESALE.moq },
              { label: "Lead Time", value: WHOLESALE.leadTime },
              { label: "Shipping", value: WHOLESALE.shipping },
              { label: "Payment Terms", value: WHOLESALE.payment },
            ].map((info, i) => (
              <StaggerItem key={info.label} className="">
                <div className="flex items-start gap-4">
                  <div className="text-gold/60 mt-1">{infoIcons[i]}</div>
                  <div>
                    <span className="text-ivory/55 text-[0.7rem] font-sans tracking-[0.15em] uppercase font-medium block mb-1">
                      {info.label}
                    </span>
                    <span className="text-ivory text-sm font-light">
                      {info.value}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ CATALOGUE & SAMPLE REQUEST ═══ */}
      <section className="relative z-10 py-24 md:py-36 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Catalogue Download */}
            <div>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="gold-line" />
                  <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.25em] uppercase">
                    Catalogue
                  </span>
                </div>
              </Reveal>
              <TextReveal
                text="Download our full collection catalogue."
                as="h2"
                className="font-serif text-navy text-3xl md:text-4xl font-light leading-[1.2] tracking-tight"
              />
              <Reveal delay={0.2}>
                <p className="mt-6 text-[#4a4a4a] text-base leading-[1.8] font-light">
                  Our comprehensive catalogue features high-resolution imagery,
                  detailed specifications and pricing guidance for all five
                  collections. Perfect for buyers, designers and decision-makers.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <a
                  href={BRAND.catalogueUrl}
                  download
                  className="btn-gold-filled mt-8 inline-flex"
                >
                  <Download size={16} />
                  Download Catalogue (PDF)
                </a>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-12 relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=85"
                    alt="Neelaya catalogue preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 border border-gold/10" />
                </div>
              </Reveal>
            </div>

            {/* Sample Request Form */}
            <div>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="gold-line" />
                  <span className="text-gold text-[0.7rem] font-sans font-semibold tracking-[0.25em] uppercase">
                    Request Samples
                  </span>
                </div>
              </Reveal>
              <TextReveal
                text="Request physical samples before you order."
                as="h2"
                className="font-serif text-navy text-3xl md:text-4xl font-light leading-[1.2] tracking-tight"
              />

              {formState === "success" ? (
                <Reveal>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-10 p-10 bg-ivory-warm rounded-sm text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <Check size={28} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-navy text-2xl font-light mb-3">
                      Request Received
                    </h3>
                    <p className="text-[#4a4a4a] text-sm font-light leading-relaxed max-w-sm mx-auto">
                      Thank you for your interest. Our team will review your
                      request and get back to you within 2 business days.
                    </p>
                  </motion.div>
                </Reveal>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <Reveal delay={0.1}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          placeholder="Company Name *"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="form-input"
                        />
                        {errors.company && (
                          <p className="text-red-500 text-xs mt-2">
                            {errors.company}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Contact Name *"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="form-input"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-2">
                            {errors.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="form-input"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-2">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="form-input"
                        />
                      </div>
                    </div>
                  </Reveal>

                  {/* Collection Select */}
                  <Reveal delay={0.2}>
                    <div>
                      <label className="text-[0.7rem] font-sans font-semibold tracking-[0.15em] uppercase text-navy/55 mb-3 block">
                        Collections of Interest *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {COLLECTIONS.map((col) => (
                          <button
                            key={col.id}
                            type="button"
                            onClick={() => toggleCollection(col.id)}
                            className={`px-4 py-2 text-xs font-sans tracking-wide border transition-all duration-300 ${
                              formData.collections.includes(col.id)
                                ? "bg-navy text-ivory border-navy"
                                : "bg-transparent text-navy/60 border-navy/15 hover:border-navy/30"
                            }`}
                          >
                            {col.title}
                          </button>
                        ))}
                      </div>
                      {errors.collections && (
                        <p className="text-red-500 text-xs mt-2">
                          {errors.collections}
                        </p>
                      )}
                    </div>
                  </Reveal>

                  <Reveal delay={0.25}>
                    <input
                      type="text"
                      placeholder="Estimated Quantity (e.g. 50–100 pieces)"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                      className="form-input"
                    />
                  </Reveal>

                  <Reveal delay={0.3}>
                    <textarea
                      placeholder="Additional notes or requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="form-input resize-none"
                    />
                  </Reveal>

                  <Reveal delay={0.35}>
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="btn-gold-filled w-full justify-center"
                    >
                      {formState === "submitting" ? (
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          Sending Request...
                        </motion.span>
                      ) : (
                        <>
                          Submit Sample Request
                          <ArrowUpRight size={16} />
                        </>
                      )}
                    </button>
                  </Reveal>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
