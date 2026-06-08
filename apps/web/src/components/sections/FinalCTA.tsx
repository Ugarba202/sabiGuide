"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-section-cta" />

      {/* Decorative Elements */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(255,184,0,0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(0,176,116,0.4) 0%, transparent 70%)",
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Your Future Shouldn&apos;t Depend on{" "}
            <span className="gradient-text-warm">Guesswork.</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Know your next step with SabiGuide. From WAEC to NYSC, we guide every milestone of your academic journey.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/2349000000000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-secondary font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <MessageCircle size={22} className="text-primary" />
              Start Your Journey
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#features"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-lg rounded-2xl border border-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </motion.a>
          </div>

          {/* Trust Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm text-white/40"
          >
            Free to use • No app download • Works on WhatsApp & USSD
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
