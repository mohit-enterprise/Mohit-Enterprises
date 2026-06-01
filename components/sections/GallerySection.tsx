"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "/images/galery-1.jpeg", alt: "MEG Gallery 1" },
  { src: "/images/galery-2.jpeg", alt: "MEG Gallery 2" },
  { src: "/images/galery-3.jpeg", alt: "MEG Gallery 3" },
  { src: "/images/galery-5.jpeg", alt: "MEG Gallery 4" },
  { src: "/images/mohit-mobile-counter.jpeg", alt: "Mohit Mobile Counter" },
  { src: "/images/mohit-mobile-accessories.jpeg", alt: "Mobile Accessories" },
  { src: "/images/mohit-general-cosmetic.jpeg", alt: "General Store Cosmetics" },
  { src: "/images/mohit-general-gifts.jpeg", alt: "Gift Items" },
  { src: "/images/mohit-general-products.jpeg", alt: "General Products" },
  { src: "/images/mohit-general-products2.jpeg", alt: "More Products" },
  { src: "/images/mohit-mobile-xerox.jpeg", alt: "Xerox Service" },
  { src: "/images/mohit-general-trolley.jpeg", alt: "Trolley Bags" },
  { src: "/images/mohit-mobile-side_view.jpeg", alt: "Mobile Shop" },
  { src: "/images/mohit-general-side-view.jpeg", alt: "General Store Side View" },
  { src: "/images/mohit-general-products3.jpeg", alt: "Products" },
  { src: "/images/mohit-general-products4.jpeg", alt: "More Products" },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="section-pad" style={{ background: "#020818" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4"
            style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", color: "#fbbf24" }}>
            GALLERY
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            A Glimpse Into <span className="gold-text">Our World</span>
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-white/60 max-w-lg mx-auto text-sm">
            Explore our shops, products, and services through this visual showcase.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="masonry-grid">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="masonry-item relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-yellow-400/20 transition-all"
              onClick={() => setLightbox(img)}
            >
              <div className="relative w-full" style={{ paddingBottom: i % 3 === 0 ? "120%" : "75%" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(2,8,24,0.5)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(251,191,36,0.9)" }}>
                  <ZoomIn size={20} style={{ color: "#020818" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-yellow-400 transition-colors"
            style={{ background: "rgba(255,255,255,0.1)" }}
            onClick={() => setLightbox(null)}
          >
            <X size={22} />
          </button>
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-auto max-h-[90vh] rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
