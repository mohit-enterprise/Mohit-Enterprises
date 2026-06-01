"use client";

import Image from "next/image";
import { Phone, ArrowRight, Smartphone, ShoppingBag } from "lucide-react";

const shops = [
  {
    id: "mohit-mobile",
    name: "Mohit Mobile",
    tagline: "Digital Services & Mobile Accessories",
    phone: "9973482789",
    image: "/images/mohit-mobile-counter.jpeg",
    icon: Smartphone,
    color: "#3b82f6",
    services: ["Mobile Accessories", "Ticket Booking", "Online Services", "Xerox & Print"],
    href: "#mohit-mobile",
  },
  {
    id: "mohit-general",
    name: "Mohit General Store",
    tagline: "Cosmetics, Gifts & Household Products",
    phone: "8292730936",
    image: "/images/mohit-general-inside.jpeg",
    icon: ShoppingBag,
    color: "#f59e0b",
    services: ["Cosmetics & Beauty", "Gift Items", "Trolley Bags", "Decoration Items"],
    href: "#mohit-general",
  },
];

export default function BusinessCardsSection() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-pad" style={{ background: "#040f2a" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4"
            style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", color: "#fbbf24" }}>
            OUR BUSINESSES
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Two Shops, <span className="gold-text">One Trust</span>
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-white/60 max-w-xl mx-auto">
            Serving the community of Thawe with quality products and reliable services since our founding.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                boxShadow: "0 4px 40px rgba(0,0,0,0.3)",
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={shop.image}
                  alt={shop.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 40%, rgba(4,15,42,0.95) 100%)`,
                  }}
                />
                {/* Icon badge */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                  style={{ background: `${shop.color}20`, border: `1px solid ${shop.color}40` }}
                >
                  <shop.icon size={22} style={{ color: shop.color }} />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-white mb-1">{shop.name}</h3>
                <p className="text-white/50 text-sm mb-5">{shop.tagline}</p>

                {/* Services list */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {shop.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2 text-xs text-white/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: shop.color }} />
                      {service}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:+91${shop.phone}`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-white/15 text-white/70 hover:border-yellow-400/40 hover:text-yellow-400 transition-all"
                  >
                    <Phone size={14} />
                    {shop.phone}
                  </a>
                  <button
                    onClick={() => scrollTo(shop.href)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:gap-3"
                    style={{
                      background: `linear-gradient(135deg, ${shop.color}20, ${shop.color}10)`,
                      border: `1px solid ${shop.color}30`,
                      color: shop.color,
                    }}
                  >
                    View Details
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
