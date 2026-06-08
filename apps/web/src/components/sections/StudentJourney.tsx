"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Building2, Wallet, Briefcase, Award } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const gates = [
  {
    number: 1,
    title: "WAEC & NECO",
    description: "Result analysis, subject recommendations, and exam preparation guidance.",
    icon: <BookOpen size={28} />,
    color: "#00B074",
  },
  {
    number: 2,
    title: "JAMB & Admission",
    description: "Score analysis, university matching, and application tracking.",
    icon: <GraduationCap size={28} />,
    color: "#3B82F6",
  },
  {
    number: 3,
    title: "University Entry",
    description: "Course selection, clearance steps, and registration guidance.",
    icon: <Building2 size={28} />,
    color: "#8B5CF6",
  },
  {
    number: 4,
    title: "NELFUND & Scholarships",
    description: "Funding discovery, application support, and deadline tracking.",
    icon: <Wallet size={28} />,
    color: "#FFB800",
  },
  {
    number: 5,
    title: "Career Preparation",
    description: "SIWES guidance, internship matching, and skill recommendations.",
    icon: <Briefcase size={28} />,
    color: "#EF4444",
  },
  {
    number: 6,
    title: "NYSC & Beyond",
    description: "Registration guide, PPA matching, and career transition support.",
    icon: <Award size={28} />,
    color: "#06B6D4",
  },
];

export default function StudentJourney() {
  return (
    <section id="features" className="py-20 md:py-28 bg-bg-main section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="The Journey"
          title="One Student. Six Academic Gates."
          highlight="Six Academic Gates"
          subtitle="SabiGuide walks with you through every critical milestone of your Nigerian education journey."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line — Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {gates.map((gate, i) => (
              <motion.div
                key={gate.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-bg-card rounded-3xl p-6 shadow-sm hover:shadow-lg border border-border-light dark:border-white/5 transition-all duration-300 group cursor-default h-full"
                >
                  {/* Gate Number */}
                  <div
                    className="absolute -top-3 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                    style={{ backgroundColor: gate.color }}
                  >
                    {gate.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${gate.color}15`, color: gate.color }}
                  >
                    {gate.icon}
                  </div>

                  <h3 className="font-bold text-base text-text-primary mb-2">{gate.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{gate.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
