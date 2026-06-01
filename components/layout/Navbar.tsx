"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mohit Mobile", href: "#mohit-mobile" },
  { label: "General Store", href: "#mohit-general" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Update active section based on scroll
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(135deg, rgba(2,8,24,0.95), rgba(4,15,42,0.95))"
          : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400/60 group-hover:border-yellow-400 transition-colors shadow-lg shadow-yellow-400/20">
              <Image
                src="/images/logo.jpeg"
                alt="MEG Logo"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold leading-tight gold-text">
                Mohit Enterprise
              </div>
              <div className="text-xs text-yellow-400/70 tracking-widest font-medium">
                GROUP
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-yellow-400 bg-yellow-400/10"
                    : "text-white/80 hover:text-yellow-400 hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919973482789"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/40 text-yellow-400 text-sm font-medium hover:bg-yellow-400/10 transition-all"
            >
              <Phone size={14} />
              Call Now
            </a>
            <a
              href="https://wa.me/919973482789"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm py-2 px-5"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg border border-white/20 text-white hover:border-yellow-400/50 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden backdrop-blur-xl border-t border-white/10"
          style={{ background: "rgba(2,8,24,0.97)" }}
        >
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.href.replace("#", "")
                    ? "text-yellow-400 bg-yellow-400/10"
                    : "text-white/80 hover:text-yellow-400 hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-3 pt-4">
              <a
                href="tel:+919973482789"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-yellow-400/40 text-yellow-400 text-sm font-medium"
              >
                <Phone size={14} /> Call
              </a>
              <a
                href="https://wa.me/919973482789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-yellow-400 text-navy-950 text-sm font-semibold"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
