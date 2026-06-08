"use client";

import { motion } from "framer-motion";
import { Wifi, WifiOff } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const ussdMenu = [
  { key: "1", label: "Check Admission Status" },
  { key: "2", label: "Find Scholarships" },
  { key: "3", label: "NELFUND Application" },
  { key: "4", label: "NYSC Registration" },
  { key: "5", label: "Deadline Reminders" },
];

export default function USSDExperience() {
  return (
    <section
      className="py-20 md:py-28 section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #0D233A 0%, #0A1929 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          badge="USSD Access"
          title="No data? No problem."
          highlight="No problem"
          subtitle="Education guidance should not require internet access. SabiGuide works on every phone — even without data."
          dark
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-5 text-center">
                <WifiOff size={24} className="text-accent mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-white">40%</div>
                <div className="text-sm text-white/50">of Nigerian students lack regular internet</div>
              </div>
              <div className="glass rounded-2xl p-5 text-center">
                <Wifi size={24} className="text-primary mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-white">100%</div>
                <div className="text-sm text-white/50">phone coverage for USSD</div>
              </div>
            </div>

            {/* Quote */}
            <div className="glass rounded-3xl p-6 border-l-4 border-accent">
              <p className="text-lg font-semibold text-white italic leading-relaxed">
                &ldquo;Education guidance should not require internet access.&rdquo;
              </p>
              <p className="text-sm text-white/50 mt-2">— SabiGuide Mission</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {[
                "Works on any phone — smartphone or feature phone",
                "Instant access with no data or app download",
                "Check admission status, scholarships, and deadlines",
                "Available 24/7 across all Nigerian networks",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-white/70"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Feature Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-[240px] sm:w-[260px]">
              <div className="feature-phone">
                {/* Screen */}
                <div className="feature-screen text-sm space-y-3">
                  {/* Header */}
                  <div className="text-center border-b border-green-700/50 pb-2">
                    <div className="text-green-300 text-xs">SabiGuide USSD</div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-green-100 font-bold mt-1"
                    >
                      *384*SABI#
                    </motion.div>
                  </div>

                  {/* Menu */}
                  <div className="space-y-1.5">
                    <div className="text-green-200 text-xs mb-2">Welcome to SabiGuide</div>
                    <div className="text-green-200 text-xs mb-2">Select an option:</div>
                    {ussdMenu.map((item, i) => (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="text-green-100"
                      >
                        <span className="text-green-300">{item.key}.</span> {item.label}
                      </motion.div>
                    ))}
                  </div>

                  {/* Response */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    className="border-t border-green-700/50 pt-2 mt-2"
                  >
                    <div className="text-green-300 text-xs">Reply with number:</div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-green-100">2</span>
                      <span className="w-1.5 h-3 bg-green-300 animate-typing" />
                    </div>
                  </motion.div>
                </div>

                {/* Phone Keypad */}
                <div className="mt-4 grid grid-cols-3 gap-1.5 px-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((key) => (
                    <div
                      key={key}
                      className="w-full aspect-square rounded-lg bg-gray-600/60 flex items-center justify-center text-white text-xs font-bold hover:bg-gray-500/60 transition-colors"
                    >
                      {key}
                    </div>
                  ))}
                </div>

                {/* Call/End buttons */}
                <div className="mt-3 flex gap-2 px-2">
                  <div className="flex-1 py-2.5 rounded-lg bg-green-600 text-white text-xs font-bold text-center">
                    CALL
                  </div>
                  <div className="flex-1 py-2.5 rounded-lg bg-red-600 text-white text-xs font-bold text-center">
                    END
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
