"use client";

import { MapPin, Phone, Clock, MessageCircle, Mail, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Mohit Mobile", href: "#mohit-mobile" },
    { label: "General Store", href: "#mohit-general" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "#020818" }}>
      {/* Top border gradient */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #f59e0b, transparent)" }} />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }} />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400/60 shadow-lg shadow-yellow-400/20">
                <Image
                  src="/images/WhatsApp Image 2026-06-01 at 10.52.51 AM.jpeg"
                  alt="MEG Logo"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <div className="text-lg font-bold gold-text">Mohit Enterprise</div>
                <div className="text-xs text-yellow-400/70 tracking-widest">GROUP</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Your trusted business partner in Thawe, Gopalganj. We are committed to
              providing quality products and services with a smile.
            </p>
            <div className="flex items-center gap-2 text-yellow-400/80 font-semibold italic text-sm">
              "Trust • Service • Quality"
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-400 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center gap-2 text-white/60 hover:text-yellow-400 text-sm transition-colors group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-yellow-400/50" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Shops */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-400 rounded-full" />
              Our Shops
            </h3>
            <div className="space-y-4">
              <div className="glass-card p-4 rounded-xl">
                <div className="text-yellow-400 font-semibold text-sm mb-1">Mohit Mobile</div>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Phone size={12} />
                  <a href="tel:+919973482789" className="hover:text-yellow-400 transition-colors">
                    +91 99734 82789
                  </a>
                </div>
                <div className="text-white/50 text-xs mt-1">Mobile • Online Services • Tickets</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-yellow-400 font-semibold text-sm mb-1">Mohit General Store</div>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Phone size={12} />
                  <a href="tel:+918292730936" className="hover:text-yellow-400 transition-colors">
                    +91 82927 30936
                  </a>
                </div>
                <div className="text-white/50 text-xs mt-1">Cosmetics • Gifts • Household</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-400 rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                <span className="text-white/60">
                  Sukulwa Market, In Front of Thawe Railway Station,
                  Thawe, Gopalganj, Bihar - 841440
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-yellow-400 shrink-0" />
                <div>
                  <a href="tel:+919973482789" className="text-white/60 hover:text-yellow-400 transition-colors block">
                    +91 99734 82789
                  </a>
                  <a href="tel:+918292730936" className="text-white/60 hover:text-yellow-400 transition-colors block">
                    +91 82927 30936
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-yellow-400 shrink-0" />
                <span className="text-white/60">Mon–Sun: 7:00 AM – 8:00 PM</span>
              </li>
              <li>
                <a
                  href="https://wa.me/919973482789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm hover:bg-green-500/30 transition-colors"
                >
                  <MessageCircle size={14} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {year} Mohit Enterprise Group. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Thawe, Gopalganj, Bihar, India
          </p>
        </div>
      </div>
    </footer>
  );
}
