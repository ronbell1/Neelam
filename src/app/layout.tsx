import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Neelaya Exports — Luxury Indian Handicrafts for the World",
  description:
    "Neelaya Exports is a premier Indian handicrafts export house, curating exquisite handcrafted collections — from hand-painted bags and brass Bidri art to Pattachitra paintings and wooden artefacts — for luxury retailers, boutique hotels and collectors worldwide.",
  keywords: [
    "Indian handicrafts",
    "luxury exports",
    "handcrafted bags",
    "Bidri metalwork",
    "Pattachitra paintings",
    "Madhubani art",
    "wholesale handicrafts",
    "Indian artisan",
  ],
  openGraph: {
    title: "Neelaya Exports — Luxury Indian Handicrafts for the World",
    description:
      "Curated heritage handicrafts for global luxury retail. Hand-painted bags, brass art, home décor, wooden artifacts and traditional paintings.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-ivory text-[#1a1a1a] font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
