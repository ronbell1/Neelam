// ─────────────────────────────────────────────────────────
// NEELAYA EXPORTS — Centralised Content & Image Registry
// Edit all site copy, images and data from this single file.
// ─────────────────────────────────────────────────────────

export const BRAND = {
  name: "Neelaya Exports",
  tagline: "From India, to the world.",
  subtitle: "Curated Heritage Handicrafts for Global Luxury Retail",
  description:
    "Neelaya Exports is a premier Indian handicrafts export house, bridging centuries-old artisan traditions with the modern global marketplace. We curate and deliver exquisite handcrafted collections — from hand-painted bags and brass Bidri art to Pattachitra paintings and carved wooden artefacts — to luxury retailers, boutique hotels, interior designers and discerning collectors worldwide.",
  email: "hello@neelayaexports.in",
  phone: "+91 98765 43210",
  address: "42, Artisan Quarter, Jubilee Hills, Hyderabad — 500033, Telangana, India",
  instagram: "https://www.instagram.com/neelayaexports.in/",
  facebook: "#",
  linkedin: "#",
  pinterest: "#",
  catalogueUrl: "/Neelaya_Exports_Catalogue_2025.pdf",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Contact", href: "/contact" },
] as const;

// ─────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────
export const HERO = {
  headline: "From India, to the world.",
  subheadline:
    "Exquisite handcrafted heritage — curated for luxury retail, boutique hospitality and distinguished interiors worldwide.",
  cta: "Explore Collections",
  ctaLink: "/collections",
  secondaryCta: "Wholesale Enquiry",
  secondaryCtaLink: "/wholesale",
  image:
    "/chermiti-mohamed-q9xV_MOqeuY-unsplash.jpg",
  mobileImage:
    "/chermiti-mohamed-q9xV_MOqeuY-unsplash.jpg",
};

// ─────────────────────────────────────────────────────────
// COLLECTIONS
// ─────────────────────────────────────────────────────────
export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  features: string[];
}

export const COLLECTIONS: Collection[] = [
  {
    id: "hand-painted-bags",
    title: "Hand-Painted Bags",
    subtitle: "Wearable Art, Carried Beautifully",
    description:
      "Each bag is a canvas — hand-painted by master artisans using centuries-old techniques. From Madhubani motifs to contemporary abstracts, every piece tells a story.",
    longDescription:
      "Our hand-painted bags collection marries traditional Indian painting techniques with contemporary fashion sensibility. Each bag is individually painted by skilled artisans, ensuring no two pieces are ever alike. Using eco-friendly dyes on premium leather and canvas, these bags transform everyday accessories into wearable art. Perfect for boutique retailers and luxury fashion houses seeking truly unique accessories.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&q=80",
    ],
    features: [
      "Hand-painted by master artisans",
      "Eco-friendly dyes on premium materials",
      "No two pieces are identical",
      "Custom designs available",
    ],
  },
  {
    id: "brass-bidri-metal-art",
    title: "Brass & Bidri Metal Art",
    subtitle: "Centuries of Metalwork Mastery",
    description:
      "From the legendary Bidriware of Bidar to the lustrous brass traditions of Moradabad — each piece is forged, engraved and inlaid by hand.",
    longDescription:
      "The Bidri metalwork tradition, originating in the Deccan, is one of India's most refined art forms. Our collection features authentic Bidriware alongside hand-forged brass pieces from the craft workshops of Moradabad. Each piece undergoes meticulous hand-engraving and silver inlay work, resulting in objects of extraordinary beauty. Ideal for luxury home décor retailers, corporate gifting and museum collections.",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1584811644165-33db3b146db5?w=600&q=80",
      "https://images.unsplash.com/photo-1581783898882-75b09cb2a5a9?w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
      "https://images.unsplash.com/photo-1599707367790-a54bafa67e2b?w=600&q=80",
    ],
    features: [
      "Authentic Bidriware from Bidar",
      "Hand-engraved silver inlay",
      "Forged brass from Moradabad",
      "Museum-quality finishing",
    ],
  },
  {
    id: "home-decor-furnishings",
    title: "Home Décor & Furnishings",
    subtitle: "Where Tradition Adorns Modern Spaces",
    description:
      "Block-printed textiles, hand-embroidered cushions, artisan ceramics and curated décor pieces that transform interiors with Indian soul.",
    longDescription:
      "Our home décor collection brings the warmth of Indian craftsmanship into contemporary living spaces. From Jaipur's celebrated block-printed textiles and Gujarat's intricate mirror work to hand-thrown ceramics and curated accent pieces — each item is designed to complement modern interiors while preserving artisan heritage. Perfect for interior design firms, boutique hotels and lifestyle retailers worldwide.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
    features: [
      "Block-printed Jaipur textiles",
      "Hand-embroidered cushions & throws",
      "Artisan ceramics",
      "Custom colour palettes available",
    ],
  },
  {
    id: "wooden-artifacts",
    title: "Wooden Artifacts",
    subtitle: "Sculpted by Patient Hands",
    description:
      "Carved from sustainably sourced hardwoods — furniture, sculptures, boxes and decorative panels that carry the warmth of Indian woodcraft.",
    longDescription:
      "India's woodcarving traditions span millennia, from the intricate jali screens of Rajasthan to the rosewood sculptures of Karnataka. Our wooden artefacts collection showcases the finest examples of this heritage — hand-carved furniture, decorative panels, jewellery boxes and sculptural pieces crafted from sustainably sourced Sheesham, teak and mango wood. Each piece is finished by hand using traditional methods that ensure longevity and beauty.",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80",
      "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=600&q=80",
    ],
    features: [
      "Sustainably sourced hardwoods",
      "Traditional hand-carving techniques",
      "Natural oil & wax finishes",
      "Custom dimensions available",
    ],
  },
  {
    id: "traditional-paintings",
    title: "Pattachitra, Cheriyal & Madhubani Paintings",
    subtitle: "Living Traditions on Canvas",
    description:
      "Museum-worthy original paintings from India's most celebrated folk and classical painting traditions — each piece a masterwork of patience and devotion.",
    longDescription:
      "This collection presents authentic works from three of India's most revered painting traditions. Pattachitra scrolls from Odisha, with their mythological narratives rendered in natural pigments; Cheriyal scroll paintings from Telangana, vibrant storytelling on canvas; and Madhubani paintings from Bihar, with their distinctive geometric patterns and nature motifs. Each painting is created by recognised master artists using traditional materials and techniques passed down through generations.",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&q=80",
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
    ],
    features: [
      "Original works by master artists",
      "Natural pigments & traditional materials",
      "Certificate of authenticity included",
      "Custom sizes & framing available",
    ],
  },
];

// ─────────────────────────────────────────────────────────
// HOMEPAGE SECTIONS
// ─────────────────────────────────────────────────────────
export const BRAND_INTRO = {
  eyebrow: "The Art of Indian Craft",
  headline: "Where centuries-old mastery meets modern luxury.",
  body: "Neelaya Exports curates India's finest handicrafts for the global stage. We partner with master artisans across the subcontinent — from the Bidri metalworkers of Karnataka to the Madhubani painters of Bihar — ensuring every piece we export carries the authentic soul of Indian heritage, with the quality and finish that international luxury markets demand.",
  image:
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=85",
  secondImage:
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80",
};

export const CRAFTSMANSHIP = {
  eyebrow: "Our Promise",
  headline: "Handcrafted with devotion. Delivered with precision.",
  stats: [
    { number: "200+", label: "Artisan Partners" },
    { number: "15+", label: "Craft Traditions" },
    { number: "30+", label: "Countries Served" },
    { number: "10,000+", label: "Pieces Exported" },
  ],
  body: "Every piece in our collection passes through multiple stages of quality assurance before it reaches you. From raw material sourcing to final finishing, our team works closely with artisan communities to ensure that traditional techniques are preserved while meeting international quality standards.",
  image:
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=85",
};

export const WHOLESALE_BENEFITS = [
  {
    title: "Minimum Order Quantity",
    description:
      "Start with as few as 25 pieces per design. Ideal for boutique retailers and concept stores.",
    icon: "Package",
  },
  {
    title: "Custom Designs",
    description:
      "Our artisans can create bespoke pieces to your specifications — colours, sizes, motifs and materials.",
    icon: "Palette",
  },
  {
    title: "Global Shipping",
    description:
      "Reliable international logistics with careful packaging to ensure your order arrives in pristine condition.",
    icon: "Globe",
  },
  {
    title: "Catalogue & Samples",
    description:
      "Download our full catalogue or request physical samples before committing to a wholesale order.",
    icon: "BookOpen",
  },
];

// ─────────────────────────────────────────────────────────
// ABOUT PAGE
// ─────────────────────────────────────────────────────────
export const ABOUT = {
  heroImage:
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1400&q=90",
  headline: "A bridge between heritage and the world.",
  intro:
    "Neelaya Exports was founded with a singular vision: to bring India's extraordinary handicraft traditions to discerning buyers worldwide, while ensuring the artisans who create these masterpieces receive the recognition and livelihoods they deserve.",
  story: [
    {
      title: "Our Origin",
      body: "Born in the heart of India's artisan belt, Neelaya Exports began as a passion project — a quest to connect the extraordinary skill of Indian craftspeople with a global audience that would truly appreciate their work. What started as a small collection of hand-painted bags has grown into a comprehensive export house representing over fifteen distinct craft traditions.",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&q=80",
    },
    {
      title: "Our Artisans",
      body: "We work directly with over two hundred artisan families across India. From the Bidri metalworkers of Bidar in Karnataka, to the Madhubani painters of Mithila in Bihar, to the woodcarvers of Saharanpur — each community brings generations of inherited skill and cultural knowledge to every piece they create. We believe in fair trade, transparent sourcing and long-term partnerships that uplift entire communities.",
      image:
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=700&q=80",
    },
    {
      title: "Our Craft Philosophy",
      body: "In an age of mass production, we champion the slow, deliberate beauty of handmade objects. Every imperfection is a mark of human touch; every variation tells the story of the artisan's hand. We do not seek to homogenise — we seek to celebrate the unique character that only handcraft can deliver. This is luxury rooted in substance, not just surface.",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700&q=80",
    },
  ],
  values: [
    {
      title: "Authenticity",
      description:
        "Every piece we export is genuinely handcrafted using traditional techniques. We never compromise on authenticity.",
    },
    {
      title: "Sustainability",
      description:
        "We source materials responsibly and champion eco-friendly practices across our supply chain.",
    },
    {
      title: "Fair Partnership",
      description:
        "Artisans are our partners, not suppliers. Fair pricing, advance payments and long-term commitments.",
    },
    {
      title: "Quality Assurance",
      description:
        "Multi-stage quality checks ensure every piece meets international standards before export.",
    },
  ],
};

// ─────────────────────────────────────────────────────────
// WHOLESALE PAGE
// ─────────────────────────────────────────────────────────
export const WHOLESALE = {
  heroImage:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=90",
  headline: "Partner with India's finest artisans.",
  subtitle:
    "Whether you're a boutique retailer, interior design firm, hotel group or corporate gifting company — we make it seamless to bring authentic Indian handicrafts to your market.",
  process: [
    {
      step: "01",
      title: "Browse & Select",
      description:
        "Explore our collections online or download our comprehensive catalogue. Identify the pieces and styles that resonate with your market.",
    },
    {
      step: "02",
      title: "Enquire & Customise",
      description:
        "Reach out with your requirements. Our team will work with you on quantities, customisations, colours and branding.",
    },
    {
      step: "03",
      title: "Sample & Approve",
      description:
        "Request physical samples to evaluate quality first-hand. Once approved, we begin production with your artisan team.",
    },
    {
      step: "04",
      title: "Produce & Ship",
      description:
        "Our artisans craft your order with care. Quality-checked, meticulously packed and shipped to your doorstep worldwide.",
    },
  ],
  moq: "25 pieces per design",
  leadTime: "4–8 weeks depending on complexity",
  shipping: "Global shipping via DHL, FedEx or sea freight",
  payment: "50% advance, 50% before shipping",
};

// ─────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "Neelaya's collection transformed our boutique. The quality of craftsmanship is extraordinary — our customers are genuinely moved by the artistry.",
    author: "Isabelle Laurent",
    role: "Founder, Maison d'Artisan — Paris",
  },
  {
    quote:
      "Working with Neelaya has been seamless. From custom designs to on-time delivery, they understand the demands of international luxury retail.",
    author: "Thomas Whitfield",
    role: "Buyer, The Heritage Collection — London",
  },
  {
    quote:
      "The Bidri metalwork pieces we sourced from Neelaya are museum-quality. Our hotel guests constantly ask about them.",
    author: "Priya Menon",
    role: "Design Director, Taj Interiors Group — Mumbai",
  },
];
