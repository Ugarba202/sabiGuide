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
    <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#004D40] mb-6"
          >
            <span className="text-white text-xs font-semibold tracking-wide uppercase">USSD Access</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 tracking-tight leading-tight"
          >
            No data? No problem.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            Education guidance should not require internet access. SabiGuide works on every phone — even without data.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
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
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 shadow-sm text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <WifiOff size={22} className="text-orange-600" />
                </div>
                <div className="text-3xl font-extrabold text-[#111827] mb-1">40%</div>
                <div className="text-sm text-gray-500 leading-relaxed">of Nigerian students lack regular internet</div>
              </div>
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 shadow-sm text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#E6F7F1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi size={22} className="text-[#00B074]" />
                </div>
                <div className="text-3xl font-extrabold text-[#111827] mb-1">100%</div>
                <div className="text-sm text-gray-500 leading-relaxed">phone coverage for USSD via our shortcode</div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white rounded-3xl p-6 border-l-4 border-[#004D40] shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
              <p className="text-[17px] font-semibold text-[#111827] italic leading-relaxed">
                "Education guidance should not be a luxury reserved for those with smartphones and data plans."
              </p>
              <p className="text-[13px] font-bold text-gray-400 mt-3 uppercase tracking-wider">— SabiGuide Mission</p>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-2">
              {[
                "Works on any phone — smartphone or basic feature phone",
                "Instant access with zero data or app downloads required",
                "Check admission status, scholarships, and active deadlines",
                "Available 24/7 across all major Nigerian telecommunication networks",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#E6F7F1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B074]" />
                  </div>
                  <span className="text-[15px] text-gray-600 leading-relaxed">{text}</span>
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
            <div className="w-[260px] sm:w-[280px] drop-shadow-2xl">
              <div className="bg-[#1A1A1A] rounded-[2.5rem] p-3 shadow-[inset_0_4px_12px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.2)] border-2 border-[#2A2A2A] relative">
                
                {/* Speaker Grill */}
                <div className="w-12 h-1 bg-[#333] rounded-full mx-auto mb-3 mt-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" />

                {/* Screen */}
                <div className="bg-[#1C2C1D] w-full aspect-[3/4] rounded-[1.5rem] p-4 font-mono overflow-hidden shadow-[inset_0_4px_12px_rgba(0,0,0,0.4)] border border-[#0A0A0A] relative">
                  {/* Subtle Screen Scanline Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none opacity-50" />

                  <div className="text-[11px] leading-[1.6] space-y-3 relative z-10">
                    {/* Header */}
                    <div className="text-center border-b border-[#355E3B]/50 pb-2">
                      <div className="text-[#8FBC8F]">SabiGuide USSD</div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-[#98FB98] font-bold mt-1 tracking-widest text-sm"
                      >
                        *384*SABI#
                      </motion.div>
                    </div>

                    {/* Menu */}
                    <div className="space-y-1.5">
                      <div className="text-[#8FBC8F] mb-2">Welcome to SabiGuide</div>
                      <div className="text-[#8FBC8F] mb-2">Select an option:</div>
                      {ussdMenu.map((item, i) => (
                         <motion.div
                          key={item.key}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="text-[#98FB98]"
                        >
                          <span className="text-white">{item.key}.</span> {item.label}
                        </motion.div>
                      ))}
                    </div>

                    {/* Response */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 }}
                      className="border-t border-[#355E3B]/50 pt-2 mt-2"
                    >
                      <div className="text-[#8FBC8F]">Reply with number:</div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-[#98FB98]">2</span>
                        <motion.span 
                          animate={{ opacity: [1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="w-1.5 h-3 bg-white block" 
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Branding/Divider */}
                <div className="w-full flex justify-center py-3">
                   <div className="text-[9px] font-bold tracking-widest text-gray-500">SABIGUIDE</div>
                </div>

                {/* Phone Keypad */}
                <div className="grid grid-cols-3 gap-1.5 px-1 pb-1">
                  {[
                    { key: "1", sub: "" }, { key: "2", sub: "ABC" }, { key: "3", sub: "DEF" },
                    { key: "4", sub: "GHI" }, { key: "5", sub: "JKL" }, { key: "6", sub: "MNO" },
                    { key: "7", sub: "PQRS" }, { key: "8", sub: "TUV" }, { key: "9", sub: "WXYZ" },
                    { key: "*", sub: "" }, { key: "0", sub: "+" }, { key: "#", sub: "" }
                  ].map((btn) => (
                    <div
                      key={btn.key}
                      className="w-full aspect-[4/3] rounded-xl bg-gradient-to-b from-[#333] to-[#222] shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col items-center justify-center text-white cursor-pointer active:scale-95 active:shadow-none transition-all border border-[#111]"
                    >
                      <span className="text-sm font-bold">{btn.key}</span>
                      {btn.sub && <span className="text-[7px] text-gray-400 font-medium">{btn.sub}</span>}
                    </div>
                  ))}
                </div>

                {/* Call/End buttons */}
                <div className="mt-2 flex gap-2 px-1 pb-2">
                  <div className="flex-1 py-3 rounded-xl bg-gradient-to-b from-green-600 to-green-800 shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-green-900 flex items-center justify-center cursor-pointer active:scale-95 transition-all">
                     <span className="text-[10px] font-bold text-white tracking-wider">CALL</span>
                  </div>
                  <div className="flex-1 py-3 rounded-xl bg-gradient-to-b from-red-600 to-red-800 shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-red-900 flex items-center justify-center cursor-pointer active:scale-95 transition-all">
                     <span className="text-[10px] font-bold text-white tracking-wider">END</span>
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
