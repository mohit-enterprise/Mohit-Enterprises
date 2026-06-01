"use client";

import { Shield, Star, Users, Heart, Award, Clock } from "lucide-react";

const values = [
  { icon: Shield, title: "Trust", desc: "Built on years of honest dealing and transparent service to our customers." },
  { icon: Star, title: "Quality", desc: "We stock only the best products and deliver services with the highest standards." },
  { icon: Heart, title: "Service", desc: "Customer satisfaction is our top priority. We go above and beyond every time." },
  { icon: Users, title: "Community", desc: "Proudly serving the Thawe community and surrounding areas for years." },
  { icon: Award, title: "Excellence", desc: "Recognized for our commitment to quality and exceptional customer care." },
  { icon: Clock, title: "Reliability", desc: "Open 7 days a week, 7 AM to 8 PM. Always there when you need us." },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad" style={{ background: "#020818" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4"
            style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", color: "#fbbf24" }}>
            ABOUT US
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="gold-text">Mohit Enterprise Group</span>
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left - Text */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-5">
              A Trusted Name in <span className="gold-text">Thawe</span>
            </h3>
            <p className="text-white/70 leading-relaxed mb-5">
              Mohit Enterprise Group (MEG) is a growing business conglomerate proudly rooted in
              Thawe, Gopalganj, Bihar. Founded by Sheshnath Gupta with a vision to serve
              the community with trust and excellence, MEG has grown to operate two successful
              retail businesses under one roof.
            </p>
            <p className="text-white/70 leading-relaxed mb-5">
              Our first venture, <strong className="text-yellow-400">Mohit Mobile</strong>, caters to all your digital needs —
              from mobile accessories and repairs to online ticket booking and government form filling.
              Our second venture, <strong className="text-yellow-400">Mohit General Store</strong>, is your one-stop shop
              for cosmetics, gift items, decoration pieces, trolley bags, and daily household essentials.
            </p>
            <p className="text-white/70 leading-relaxed">
              Strategically located at Sukulwa Market, directly in front of Thawe Railway Station,
              we are easily accessible to both locals and travelers. Our motto — <em className="text-yellow-400">"Trust • Service • Quality"</em> —
              guides everything we do.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: "2+", label: "Shops" },
                { number: "7", label: "Days Open" },
                { number: "1000+", label: "Happy Customers" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center rounded-2xl">
                  <div className="text-2xl font-bold gold-text">{stat.number}</div>
                  <div className="text-white/50 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((val) => (
              <div
                key={val.title}
                className="glass-card p-5 rounded-2xl group hover:border-yellow-400/20 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(251,191,36,0.1)" }}
                >
                  <val.icon size={20} className="text-yellow-400" />
                </div>
                <h4 className="text-white font-semibold mb-1 text-sm">{val.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
