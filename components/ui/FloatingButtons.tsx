"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    // Show buttons after 2s
    const timer = setTimeout(() => setShowButtons(true), 2000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButtons) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp button */}
      <a
        href="https://wa.me/919973482789"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-gold"
        style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)" }}
        title="WhatsApp Us"
      >
        <MessageCircle size={26} className="text-white" />
      </a>

      {/* Call button */}
      <a
        href="tel:+919973482789"
        className="group w-14 h-14 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
          boxShadow: "0 4px 20px rgba(251, 191, 36, 0.4)",
        }}
        title="Call Us"
      >
        <Phone size={22} className="text-navy-950 font-bold" style={{ color: "#020818" }} />
      </a>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-yellow-400/50"
          style={{ background: "rgba(4,15,42,0.9)" }}
          title="Back to top"
        >
          <ArrowUp size={18} className="text-yellow-400" />
        </button>
      )}
    </div>
  );
}
