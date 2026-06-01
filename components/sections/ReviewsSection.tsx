"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Thawe, Gopalganj",
    rating: 5,
    text: "Mohit Mobile is the best shop in Thawe! Got my train ticket booked in minutes and they also have great mobile accessories. Very helpful staff.",
  },
  {
    name: "Priya Devi",
    location: "Gopalganj, Bihar",
    rating: 5,
    text: "I always buy my beauty products and gifts from Mohit General Store. Great variety, genuine products, and the prices are very fair. Highly recommended!",
  },
  {
    name: "Suresh Yadav",
    location: "Thawe, Bihar",
    rating: 5,
    text: "Excellent service! Got my xerox, printout and online form filled here. Fast work and very affordable. The owner is very polite and helpful.",
  },
  {
    name: "Anjali Singh",
    location: "Hathua, Gopalganj",
    rating: 5,
    text: "The general store has the best collection of decoration items and gift sets. I bought decorations for my house here and everyone loved them!",
  },
  {
    name: "Manoj Tiwari",
    location: "Thawe",
    rating: 5,
    text: "Very reliable shop for mobile recharge and bill payment. Always quick service. Sheshnath ji and his team are very professional and trustworthy.",
  },
  {
    name: "Sunita Sharma",
    location: "Gopalganj",
    rating: 5,
    text: "Bought a trolley bag and some cosmetics from Mohit General Store. Superb quality, great price. Will definitely come back for more shopping!",
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, reviews.length - perPage);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, maxIndex)), [maxIndex]);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = reviews.slice(current, current + perPage);

  return (
    <section className="section-pad" style={{ background: "#020818" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4"
            style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", color: "#fbbf24" }}>
            TESTIMONIALS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our <span className="gold-text">Customers Say</span>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[260px]">
            {visible.map((review, i) => (
              <div
                key={`${current}-${i}`}
                className="glass-card rounded-3xl p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all"
              >
                {/* Quote icon */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{ background: "rgba(251,191,36,0.1)" }}>
                    <Quote size={18} className="text-yellow-400" />
                  </div>
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400" fill="#fbbf24" />
                    ))}
                  </div>
                </div>

                {/* Text */}
                <p className="text-white/70 text-sm leading-relaxed italic flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)", color: "#020818" }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <div className="text-white/40 text-xs">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-yellow-400/50 text-white/60 hover:text-yellow-400 disabled:opacity-30 transition-all"
              style={{ background: "rgba(4,15,42,0.8)" }}
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === current ? 20 : 8,
                    height: 8,
                    background: i === current ? "#f59e0b" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-yellow-400/50 text-white/60 hover:text-yellow-400 disabled:opacity-30 transition-all"
              style={{ background: "rgba(4,15,42,0.8)" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
