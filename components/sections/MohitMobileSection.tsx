"use client";

import Image from "next/image";
import {
  Smartphone, Printer, Ticket, Wifi, Battery, Headphones,
  FileText, CreditCard, Monitor, Phone,
} from "lucide-react";

const services = [
  { icon: Smartphone, label: "Mobile Accessories", color: "#3b82f6" },
  { icon: Battery, label: "Chargers & Cables", color: "#10b981" },
  { icon: Headphones, label: "Earphones", color: "#8b5cf6" },
  { icon: Monitor, label: "Tempered Glass", color: "#f59e0b" },
  { icon: Printer, label: "Xerox & Printout", color: "#ef4444" },
  { icon: FileText, label: "Scanning & Lamination", color: "#06b6d4" },
  { icon: FileText, label: "Online Form Filling", color: "#f97316" },
  { icon: Ticket, label: "Train Ticket Booking", color: "#3b82f6" },
  { icon: Ticket, label: "Flight Ticket Booking", color: "#8b5cf6" },
  { icon: Ticket, label: "Bus Ticket Booking", color: "#10b981" },
  { icon: CreditCard, label: "Mobile Recharge", color: "#f59e0b" },
  { icon: Wifi, label: "Bill Payment", color: "#ef4444" },
];

const gallery = [
  "/images/mohit-mobile-counter.jpeg",
  "/images/mohit-mobile-accessories.jpeg",
  "/images/mohit-mobile-inside.jpeg",
  "/images/mohit-mobile-xerox.jpeg",
  "/images/mohit-mobile-ticket.jpeg",
  "/images/mohit-mobile-system.jpeg",
];

export default function MohitMobileSection() {
  return (
    <section id="mohit-mobile" className="section-pad" style={{ background: "#020818" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4"
            style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa" }}>
            OUR SHOP 1
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="gold-text">Mohit Mobile</span>
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-white/60 max-w-xl mx-auto">
            Your digital service hub for mobile accessories, online services, ticket booking,
            printing and much more. All under one roof.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <a
              href="tel:+919973482789"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-yellow-400 border border-yellow-400/30 hover:bg-yellow-400/10 transition-all"
            >
              <Phone size={14} />
              +91 99734 82789
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
          {/* Left - Main Image */}
          <div className="relative">
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(59,130,246,0.2)" }}>
              <Image
                src="/images/mohit-mobile-counter.jpeg"
                alt="Mohit Mobile"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Side view image */}
            <div className="absolute -bottom-6 -right-4 w-36 h-36 rounded-2xl overflow-hidden border-4 shadow-2xl"
              style={{ borderColor: "#040f2a", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
              <Image
                src="/images/mohit-mobile-side_view.jpeg"
                alt="Mohit Mobile Side View"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
          </div>

          {/* Right - Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">All Digital Services in One Place</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Mohit Mobile is your go-to destination for everything digital in Thawe. Whether
              you need a mobile cover, need to book a train ticket, or want to get your documents
              printed — we&apos;ve got you covered. We provide fast, reliable, and affordable services
              with a friendly smile.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { n: "12+", l: "Services" },
                { n: "Fast", l: "Turnaround" },
                { n: "7 Days", l: "Open" },
              ].map((s) => (
                <div key={s.l} className="glass-card p-4 rounded-2xl text-center">
                  <div className="text-xl font-bold text-blue-400">{s.n}</div>
                  <div className="text-white/50 text-xs">{s.l}</div>
                </div>
              ))}
            </div>

            <a
              href="tel:+919973482789"
              className="btn-gold"
            >
              <Phone size={16} />
              Call Mohit Mobile
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <h3 className="text-xl font-bold text-white text-center mb-7">Our Services</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {services.map((svc) => (
              <div
                key={svc.label}
                className="glass-card p-4 rounded-2xl flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${svc.color}15` }}
                >
                  <svc.icon size={20} style={{ color: svc.color }} />
                </div>
                <span className="text-white/80 text-xs font-medium leading-tight">{svc.label}</span>
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
                  alt={`Mohit Mobile ${i + 1}`}
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
