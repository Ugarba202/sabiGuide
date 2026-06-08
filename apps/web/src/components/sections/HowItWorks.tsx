"use client";

import { motion } from "framer-motion";
import { MapPin, Compass, Bell } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Tell us where you are",
    description: "Share your current academic stage — WAEC results, JAMB score, or university level. SabiGuide understands your position instantly.",
    icon: <MapPin size={32} />,
    color: "#00B074",
    visual: (
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 bg-primary/5 dark:bg-primary/10 rounded-2xl px-4 py-3 border border-primary/10">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm font-medium text-text-primary">I just wrote JAMB — 245 score</span>
        </div>
        <div className="flex items-center gap-3 bg-white/50 dark:bg-white/5 rounded-2xl px-4 py-3 border border-border-light">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-sm font-medium text-text-primary">My WAEC result is ready</span>
        </div>
        <div className="flex items-center gap-3 bg-white/50 dark:bg-white/5 rounded-2xl px-4 py-3 border border-border-light">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-sm font-medium text-text-primary">I&apos;m in 200 level, looking for scholarships</span>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Get personalized guidance",
    description: "Our AI analyzes your profile, matches you with opportunities, and creates a personalized action plan — all on WhatsApp.",
    icon: <Compass size={32} />,
    color: "#3B82F6",
    visual: (
      <div className="mt-6 bg-white dark:bg-white/5 rounded-2xl p-4 border border-border-light space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Your Match Report</span>
          <span className="text-xs text-primary font-bold">98% Complete</span>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-[98%] bg-gradient-to-r from-primary to-primary-light rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl px-3 py-2 text-center">
            <div className="text-lg font-bold text-primary">5</div>
            <div className="text-xs text-text-muted">Universities</div>
          </div>
          <div className="bg-accent/5 dark:bg-accent/10 rounded-xl px-3 py-2 text-center">
            <div className="text-lg font-bold text-accent">3</div>
            <div className="text-xs text-text-muted">Scholarships</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Never miss opportunities",
    description: "Get timely reminders about deadlines, new scholarships, NELFUND windows, and every academic opportunity that matters to you.",
    icon: <Bell size={32} />,
    color: "#FFB800",
    visual: (
      <div className="mt-6 space-y-2.5">
        {[
          { text: "NELFUND portal opens in 3 days", urgent: true, time: "Just now" },
          { text: "ABU admission list released", urgent: false, time: "2h ago" },
          { text: "New scholarship: ₦500K grant", urgent: false, time: "1d ago" },
        ].map((notif, i) => (
          <div key={i} className="flex items-start gap-3 bg-white dark:bg-white/5 rounded-2xl px-4 py-3 border border-border-light">
            <div className={`mt-0.5 w-2.5 h-2.5 rounded-full flex-shrink-0 ${notif.urgent ? "bg-red-500 animate-pulse-soft" : "bg-primary"}`} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary">{notif.text}</p>
              <p className="text-xs text-text-muted mt-0.5">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 section-padding"
      style={{ background: "var(--bg-white)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="How It Works"
          title="Three steps to your future."
          highlight="your future"
          subtitle="Getting started takes less than 2 minutes on WhatsApp. No app download needed."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-bg-card rounded-3xl p-6 lg:p-8 border border-border-light dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
              >
                {/* Step Number + Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-5xl font-extrabold opacity-10"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}12`, color: step.color }}
                  >
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>

                {/* Visual */}
                {step.visual}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
