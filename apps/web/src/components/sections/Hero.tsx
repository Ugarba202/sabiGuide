"use client";

import { motion } from "framer-motion";
import { MessageCircle, Play, Sparkles, Smartphone, Users, ChevronRight, ShieldCheck, FileText } from "lucide-react";

const trustIndicators = [
  { icon: <Sparkles size={16} />, label: "Gemini AI Engine" },
  { icon: <Smartphone size={16} />, label: "Zero App Download" },
  { icon: <Users size={16} />, label: "11M+ TAM" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-darker"
    >
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--primary-dark)_0%,_transparent_40%)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--secondary-light)_0%,_transparent_40%)] opacity-50"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-16 md:pt-32 md:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Sponsor Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-md"
            >
              <ShieldCheck size={14} className="text-primary" />
              <span className="text-primary text-xs font-bold tracking-wide uppercase">OPay Innovation Challenge</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
              Democratizing <br />
              <span className="gradient-text">Higher Education</span> <br />
              Via WhatsApp.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-lg">
              SabiGuide is an Agentic AI assistant mapping the multi-year journey for 11 million Nigerian students—from WAEC to NYSC—integrating secure financial onboarding directly through OPay.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="https://wa.me/2349000000000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold text-base rounded-2xl transition-all duration-300 shadow-glow"
              >
                <MessageCircle size={20} />
                Try SabiGuide AI
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-base rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 group"
              >
                <span>USSD *384*SABIGUIDE#</span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap gap-6">
              {trustIndicators.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 text-white/60"
                >
                  <span className="text-primary">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            {/* OPay / NELFUND Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute -right-6 top-1/4 z-30 animate-float"
            >
              <div className="glass-light rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <FileText className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-xs text-text-muted font-medium">NELFUND Loan</div>
                  <div className="text-sm font-bold text-text-primary">Docs Verified ✅</div>
                </div>
              </div>
            </motion.div>

            {/* Phone Frame */}
            <div className="relative w-[280px] sm:w-[320px] z-20">
              <div className="phone-frame border border-white/10">
                <div className="phone-screen relative">
                  {/* Phone Notch */}
                  <div className="phone-notch absolute top-0 left-1/2 -translate-x-1/2" />

                  {/* WhatsApp Header */}
                  <div className="wa-header pt-8 bg-[#075E54]">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <span className="text-[#075E54] text-xs font-bold">SG</span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">SabiGuide</div>
                      <div className="text-white/80 text-xs">bot • always online</div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="wa-bg p-4 space-y-4" style={{ minHeight: "420px" }}>
                    {/* Bot greeting */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
                      <div className="wa-bubble-received">
                        How far! I be SabiGuide, your academic plug. You want check WAEC result, JAMB CAPS, or NELFUND?
                        <div className="wa-time">10:00 AM</div>
                      </div>
                    </motion.div>

                    {/* Student message */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }}>
                      <div className="wa-bubble-sent">
                        I want apply for NELFUND loan but I no know if my docs complete.
                        <div className="wa-time">10:02 AM ✓✓</div>
                      </div>
                    </motion.div>

                    {/* Bot response */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5 }}>
                      <div className="wa-bubble-received">
                        <div className="font-semibold text-[#075E54] mb-1">Document Gap Analysis</div>
                        <p className="mb-2">No wahala. Snap and send me your JAMB Admission letter and NIN.</p>
                        <div className="p-2 bg-primary/10 rounded border border-primary/20 mb-1">
                          <p className="text-xs font-medium text-primary mb-1">OPay Integration</p>
                          <p className="text-xs text-text-primary">We will also link your OPay wallet as the official receiving account for the disbursement.</p>
                        </div>
                        <div className="wa-time">10:03 AM</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Accent Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[80px] rounded-full z-0 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
