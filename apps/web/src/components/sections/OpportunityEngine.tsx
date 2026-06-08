"use client";

import { motion } from "framer-motion";
import { GraduationCap, Clock, Wallet, Briefcase } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";
import SectionHeader from "../ui/SectionHeader";

const stats = [
  {
    icon: <GraduationCap size={28} />,
    value: 12,
    suffix: "+",
    label: "Scholarships Found",
    description: "Matched to your profile",
    color: "#00B074",
  },
  {
    icon: <Clock size={28} />,
    value: 4,
    label: "Active Deadlines",
    description: "In the next 30 days",
    color: "#EF4444",
  },
  {
    icon: <Wallet size={28} />,
    value: 7,
    label: "Funding Opportunities",
    description: "Available right now",
    color: "#FFB800",
  },
  {
    icon: <Briefcase size={28} />,
    value: 3,
    label: "Internship Matches",
    description: "Based on your course",
    color: "#3B82F6",
  },
];

export default function OpportunityEngine() {
  return (
    <section
      id="opportunities"
      className="py-20 md:py-28 section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #0D233A 0%, #091A2C 60%, #081420 100%)",
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(0,176,116,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          badge="Opportunity Engine"
          title="Your opportunities, discovered."
          highlight="discovered"
          subtitle="Our AI scans thousands of scholarships, bursaries, internships, and funding opportunities — and matches them to your exact profile."
          dark
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-3xl p-6 lg:p-8 text-center group cursor-default transition-all duration-300 hover:border-primary/30"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                >
                  {stat.icon}
                </div>

                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix || ""} />
                </div>

                <div className="text-base font-semibold text-white/90 mb-1">{stat.label}</div>
                <div className="text-sm text-white/50">{stat.description}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 glass rounded-3xl p-6 lg:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Opportunity Dashboard</h3>
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">Live</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {["Scholarships", "NELFUND", "Bursaries", "Internships", "Competitions"].map((cat, i) => (
              <div key={cat} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <div className="text-sm text-white/60 mb-1">{cat}</div>
                <div className="text-2xl font-bold text-white">{[12, 3, 5, 3, 2][i]}</div>
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                    style={{ width: `${[85, 40, 60, 45, 30][i]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
