"use client";

import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad" style={{ background: "#040f2a" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4"
            style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", color: "#fbbf24" }}>
            CONTACT US
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="gold-text">Touch</span>
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-white/60 max-w-lg mx-auto text-sm">
            We are always happy to hear from you. Visit us, call us, or message us on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - Contact info */}
          <div className="space-y-5">
            {/* Address */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(251,191,36,0.1)" }}>
                  <MapPin size={22} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Our Location</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Sukulwa Market,<br />
                    In Front of Thawe Railway Station,<br />
                    Thawe, Gopalganj,<br />
                    Bihar - 841440
                  </p>
                  <a
                    href="https://maps.app.goo.gl/zvqsBxsyPQPFSLBV9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-yellow-400 text-sm hover:text-yellow-300 transition-colors"
                  >
                    <Navigation size={14} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(251,191,36,0.1)" }}>
                  <Phone size={22} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">Phone Numbers</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="text-yellow-400/70 text-xs mb-1">Mohit Mobile</div>
                      <a href="tel:+919973482789"
                        className="text-white/80 hover:text-yellow-400 transition-colors font-medium">
                        +91 99734 82789
                      </a>
                    </div>
                    <div>
                      <div className="text-yellow-400/70 text-xs mb-1">Mohit General Store</div>
                      <a href="tel:+918292730936"
                        className="text-white/80 hover:text-yellow-400 transition-colors font-medium">
                        +91 82927 30936
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(251,191,36,0.1)" }}>
                  <Clock size={22} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Working Hours</h3>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-white/80 font-medium">Monday – Sunday</div>
                      <div className="text-yellow-400 font-semibold">7:00 AM – 8:00 PM</div>
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", color: "#34d399" }}>
                      Open Today
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919973482789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.05))",
                border: "1px solid rgba(37,211,102,0.3)",
              }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "#25D366" }}>
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Chat on WhatsApp</div>
                <div className="text-white/60 text-sm">Quick responses, anytime</div>
              </div>
            </a>
          </div>

          {/* Right - Map */}
          <div className="rounded-3xl overflow-hidden border border-white/10"
            style={{ minHeight: 400, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3561.063!2d84.397!3d26.727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQzJzM3LjAiTiA4NMKwMjMnNDkuMiJF!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)", minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mohit Enterprise Group Location"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="glass-card rounded-3xl p-8 md:p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Visit or Call Us?
            </h3>
            <p className="text-white/60 mb-7 text-sm">
              We are open every day and always happy to serve you. Come visit us at
              Thawe Railway Station area, or reach out via call or WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919973482789" className="btn-gold">
                <Phone size={16} />
                Call Now
              </a>
              <a
                href="https://wa.me/919973482789"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <a
                href="https://maps.app.goo.gl/zvqsBxsyPQPFSLBV9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
