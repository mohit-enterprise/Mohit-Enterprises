"use client";

import Image from "next/image";
import { Crown, Star, Briefcase } from "lucide-react";

const teamMembers = [
  {
    name: "Anant Kumar",
    role: "Team Member",
    image: "/images/team-anant-kumar.jpeg",
    description: "Dedicated team member ensuring smooth operations at Mohit Mobile with expertise in digital services.",
  },
  {
    name: "Prince Kumar",
    role: "Team Member",
    image: "/images/team-prince-kumar.jpeg",
    description: "Committed to delivering excellent customer service and supporting daily business activities.",
  },
  {
    name: "Mohit Kumar",
    role: "Team Member",
    image: "/images/team-mohit-kumar.jpeg",
    description: "A key pillar of the team, contributing to the growth and success of Mohit Enterprise Group.",
  },
];

export default function OwnerTeamSection() {
  return (
    <section className="section-pad" style={{ background: "#040f2a" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4"
            style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", color: "#fbbf24" }}>
            OUR PEOPLE
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The <span className="gold-text">Faces Behind MEG</span>
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-white/60 max-w-lg mx-auto text-sm">
            Meet the dedicated people who make Mohit Enterprise Group the trusted name it is today.
          </p>
        </div>

        {/* Founder Card */}
        <div
          className="relative overflow-hidden rounded-3xl mb-12 p-1"
          style={{ background: "linear-gradient(135deg, #f59e0b40, #fbbf2420, #f59e0b40)" }}
        >
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{ background: "linear-gradient(135deg, #040f2a, #071540)" }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Photo */}
              <div className="relative shrink-0">
                <div
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden"
                  style={{ boxShadow: "0 0 60px rgba(251,191,36,0.3)" }}
                >
                  <Image
                    src="/images/owner-sheshnath-gupta.jpeg"
                    alt="Sheshnath Gupta - Founder & Owner"
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                </div>
                {/* Crown badge */}
                <div
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl"
                  style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)" }}
                >
                  <Crown size={22} style={{ color: "#020818" }} />
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-left">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ background: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.3)", color: "#fbbf24" }}
                >
                  <Star size={10} fill="#fbbf24" />
                  FOUNDER & OWNER
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Sheshnath Gupta
                </h3>
                <div className="gold-text text-lg font-semibold mb-4">
                  Mohit Enterprise Group
                </div>
                <p className="text-white/70 leading-relaxed max-w-xl">
                  Sheshnath Gupta is the visionary founder and owner of Mohit Enterprise Group.
                  With deep roots in the Thawe community and an unwavering commitment to honest
                  business, he built MEG from the ground up with the simple philosophy:
                  <em className="text-yellow-400"> "Serve people with trust, quality, and a smile."</em>
                </p>
                <p className="text-white/60 leading-relaxed mt-3 max-w-xl">
                  Under his leadership, MEG has grown to two successful retail ventures, employing
                  local talent and serving thousands of satisfied customers across Thawe, Gopalganj,
                  and surrounding areas.
                </p>

                <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
                  {["Entrepreneurship", "Community Service", "Customer Focus", "Leadership"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
            <Briefcase size={22} className="text-yellow-400" />
            Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,15,42,0.9), transparent)" }} />
                </div>
                {/* Info */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                  <div className="text-yellow-400 text-sm font-medium mb-3">{member.role}</div>
                  <p className="text-white/60 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
