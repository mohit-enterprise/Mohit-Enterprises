"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-main-shop.jpeg",
    title: "Welcome to Mohit Enterprise Group",
    subtitle: "Your Trusted Business Partner in Thawe",
    highlight: "Trust • Service • Quality",
  },
  {
    image: "/images/hero-mohit-mobile.jpeg",
    title: "Mohit Mobile",
    subtitle: "Mobile Accessories, Online Services & Ticket Booking",
    highlight: "All Digital Services Under One Roof",
  },
  {
    image: "/images/hero-mohit-general-store.jpeg",
    title: "Mohit General Store",
    subtitle: "Cosmetics, Gifts, Decoration & Household Products",
    highlight: "Everything You Need, Every Day",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(2,8,24,0.5) 0%, rgba(2,8,24,0.4) 40%, rgba(2,8,24,0.85) 100%)",
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold tracking-widest"
          style={{
            background: "rgba(251,191,36,0.1)",
            border: "1px solid rgba(251,191,36,0.3)",
            color: "#fbbf24",
          }}
        >
          ★ {slides[current].highlight}
        </div>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight max-w-4xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          key={`title-${current}`}
        >
          {slides[current].title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl"
          key={`sub-${current}`}
        >
          {slides[current].subtitle}
        </p>

        {/* Address */}
        <div className="flex items-center gap-2 text-white/60 text-sm mb-10">
          <MapPin size={14} className="text-yellow-400" />
          Sukulwa Market, In Front of Thawe Railway Station, Gopalganj, Bihar
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="tel:+919973482789"
            className="btn-gold text-base px-8 py-4"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href="https://wa.me/919973482789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-base px-8 py-4"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a
            href="https://maps.app.goo.gl/zvqsBxsyPQPFSLBV9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white/80 border border-white/20 hover:border-white/40 hover:text-white transition-all"
          >
            <MapPin size={18} />
            Get Directions
          </a>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {/* Prev */}
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-yellow-400/50 text-white/60 hover:text-yellow-400 transition-all"
          style={{ background: "rgba(2,8,24,0.6)" }}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                background: i === current ? "#f59e0b" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-yellow-400/50 text-white/60 hover:text-yellow-400 transition-all"
          style={{ background: "rgba(2,8,24,0.6)" }}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-6 z-20 flex flex-col items-center gap-2">
        <div className="text-white/30 text-xs tracking-widest rotate-90 mb-2">SCROLL</div>
        <div className="w-px h-16 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div
            className="absolute top-0 w-full"
            style={{
              background: "linear-gradient(to bottom, #f59e0b, transparent)",
              height: "50%",
              animation: "scrollIndicator 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollIndicator {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
