"use client";

import { Shield, Clock, MapPin, Smile, Star, Zap, Users, Award } from "lucide-react";

const stats = [
  { number: "2", label: "Shops", suffix: "+" },
  { number: "12", label: "Services", suffix: "+" },
  { number: "1000", label: "Customers", suffix: "+" },
  { number: "7", label: "Days Open", suffix: "" },
];

const features = [
  {
    icon: Shield,
    title: "Trusted & Reliable",
    desc: "Years of honest business serving the Thawe community with integrity and transparency.",
    color: "#3b82f6",
  },
  {
    icon: Clock,
    title: "Open Every Day",
    desc: "We are open 7 days a week, from 7 AM to 8 PM — whenever you need us.",
    color: "#10b981",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Located at Sukulwa Market, directly in front of Thawe Railway Station for easy access.",
    color: "#f59e0b",
  },
  {
    icon: Smile,
    title: "Friendly Service",
    desc: "Our team is always ready to assist you with a warm smile and professional service.",
    color: "#ec4899",
  },
  {
    icon: Star,
    title: "Quality Products",
    desc: "We stock only genuine, high-quality products from trusted brands and suppliers.",
    color: "#8b5cf6",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    desc: "Quick turnaround on all services — we value your time as much as you do.",
    color: "#f97316",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "We are part of this community. Your success and satisfaction drive everything we do.",
    color: "#06b6d4",
  },
  {
    icon: Award,
    title: "Best Prices",
    desc: "Competitive pricing on all products and services without compromising on quality.",
    color: "#84cc16",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad" style={{ background: "#040f2a" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4"
            style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", color: "#fbbf24" }}>
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Customers <span className="gold-text">Trust MEG</span>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative glass-card rounded-3xl p-6 text-center overflow-hidden group hover:-translate-y-1 transition-all"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "radial-gradient(circle at center, rgba(251,191,36,0.05), transparent)" }}
              />
              <div className="text-4xl md:text-5xl font-bold gold-text mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="glass-card rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: `${feat.color}15` }}
              >
                <feat.icon size={24} style={{ color: feat.color }} />
              </div>
              <h3 className="text-white font-semibold mb-2">{feat.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
