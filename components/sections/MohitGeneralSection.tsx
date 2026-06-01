"use client";

import Image from "next/image";
import { ShoppingBag, Gift, Sparkles, Home, Luggage, Flower, Star, Phone } from "lucide-react";

const products = [
  { icon: Sparkles, label: "Cosmetics", color: "#ec4899" },
  { icon: Flower, label: "Beauty Products", color: "#8b5cf6" },
  { icon: Gift, label: "Gift Items", color: "#f59e0b" },
  { icon: Star, label: "Decoration Items", color: "#06b6d4" },
  { icon: Luggage, label: "Trolley Bags", color: "#10b981" },
  { icon: ShoppingBag, label: "School Bags", color: "#3b82f6" },
  { icon: Home, label: "Household Products", color: "#f97316" },
  { icon: ShoppingBag, label: "Daily Use Products", color: "#ef4444" },
];

const gallery = [
  "/images/mohit-general-inside.jpeg",
  "/images/mohit-general-cosmetic.jpeg",
  "/images/mohit-general-gifts.jpeg",
  "/images/mohit-general-products.jpeg",
  "/images/mohit-general-trolley.jpeg",
  "/images/mohit-general-chcolates.jpeg",
];

export default function MohitGeneralSection() {
  return (
    <section id="mohit-general" className="section-pad" style={{ background: "#040f2a" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4"
            style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", color: "#fbbf24" }}>
            OUR SHOP 2
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="gold-text">Mohit General Store</span>
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-white/60 max-w-xl mx-auto">
            From cosmetics and beauty products to gifts, decoration, and household essentials —
            everything you need for everyday life.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <a
              href="tel:+918292730936"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-yellow-400 border border-yellow-400/30 hover:bg-yellow-400/10 transition-all"
            >
              <Phone size={14} />
              +91 82927 30936
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
          {/* Left - Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Everything You Need, Every Day</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Mohit General Store is a beautifully curated retail shop offering a wide range of
              products for all ages. Whether you&apos;re looking for a thoughtful gift, beauty essentials,
              elegant decoration pieces, or simply stocking up on daily household items — you&apos;ll find
              it all here.
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              We take pride in offering quality products at competitive prices. Our store is
              carefully organized to make your shopping experience pleasant and convenient.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { n: "100+", l: "Products" },
                { n: "Top", l: "Brands" },
                { n: "Best", l: "Prices" },
              ].map((s) => (
                <div key={s.l} className="glass-card p-4 rounded-2xl text-center">
                  <div className="text-xl font-bold text-yellow-400">{s.n}</div>
                  <div className="text-white/50 text-xs">{s.l}</div>
                </div>
              ))}
            </div>

            <a href="tel:+918292730936" className="btn-gold">
              <Phone size={16} />
              Call General Store
            </a>
          </div>

          {/* Right - Main Image */}
          <div className="relative">
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(251,191,36,0.15)" }}>
              <Image
                src="/images/mohit-general-inside.jpeg"
                alt="Mohit General Store"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 w-36 h-36 rounded-2xl overflow-hidden border-4 shadow-2xl"
              style={{ borderColor: "#040f2a", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
              <Image
                src="/images/mohit-genral-view.jpeg"
                alt="Mohit General Store View"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <h3 className="text-xl font-bold text-white text-center mb-7">Our Products</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {products.map((prod) => (
              <div
                key={prod.label}
                className="glass-card p-5 rounded-2xl flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${prod.color}15` }}
                >
                  <prod.icon size={24} style={{ color: prod.color }} />
                </div>
                <span className="text-white/80 text-sm font-medium">{prod.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo gallery */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white text-center mb-7">Shop Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={img}
                  alt={`General Store ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
