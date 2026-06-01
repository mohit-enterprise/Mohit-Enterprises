"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div
      className="loader-overlay"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        transition: "opacity 0.4s ease",
        pointerEvents: progress >= 100 ? "none" : "all",
      }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div
          className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-400/60 shadow-2xl"
          style={{ boxShadow: "0 0 40px rgba(251,191,36,0.3)" }}
        >
          <Image
            src="/images/WhatsApp Image 2026-06-01 at 10.52.51 AM.jpeg"
            alt="MEG Logo"
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold gold-text mb-2">Mohit Enterprise Group</h1>
          <p className="text-white/50 text-sm tracking-widest">TRUST • SERVICE • QUALITY</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-200"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
            }}
          />
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background: "#f59e0b",
                animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
