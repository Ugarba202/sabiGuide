"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mic, Send } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "🇬🇧",
    conversation: [
      { from: "user", text: "I need scholarship options for engineering" },
      { from: "bot", text: "I found 5 engineering scholarships for you! The NNPC/SNEPCo scholarship closes in 12 days. Want me to walk you through the application?" },
    ],
  },
  {
    code: "ha",
    name: "Hausa",
    flag: "🇳🇬",
    conversation: [
      { from: "user", text: "Ina son sanin lokacin da JAMB registration zai fara" },
      { from: "bot", text: "JAMB registration zai fara ranar 15 ga watan Janairu. Na iya taimaka maka da tsarin yin rajista. Kana son ci gaba?" },
    ],
  },
  {
    code: "yo",
    name: "Yoruba",
    flag: "🇳🇬",
    conversation: [
      { from: "user", text: "Mo fẹ mọ nipa NELFUND ati bii mo ṣe le ṣe apply" },
      { from: "bot", text: "NELFUND ti ṣí portal fun student loan. O ní qualify ti o ba jẹ student ni federal university. Mo le fi ọ han step by step?" },
    ],
  },
  {
    code: "ig",
    name: "Igbo",
    flag: "🇳🇬",
    conversation: [
      { from: "user", text: "Achọrọ m ịmata maka scholarship nke medicine" },
      { from: "bot", text: "E nwere scholarship 3 maka medicine nke dị ugbu a. Nke kachasị mkpa bụ NNPC scholarship nke ga-emechi n'ụbọchị 14. Ị chọrọ ka m nyere gị aka?" },
    ],
  },
];

export default function WhatsAppExperience() {
  const [activeLang, setActiveLang] = useState(0);
  const lang = languages[activeLang];

  return (
    <section className="py-20 md:py-28 bg-bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="WhatsApp + Voice AI"
          title="Speak your language. We understand."
          highlight="your language"
          subtitle="SabiGuide works in English, Hausa, Yoruba, and Igbo — including voice notes. No typing needed."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-[280px] sm:w-[300px]">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="phone-notch" />

                  {/* WhatsApp Header */}
                  <div className="wa-header">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-xs font-bold">SG</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-semibold">SabiGuide</div>
                      <div className="text-green-200 text-xs">{lang.name} mode</div>
                    </div>
                    <div className="text-white/60 text-xs px-2 py-0.5 rounded bg-white/10">
                      {lang.flag} {lang.name}
                    </div>
                  </div>

                  {/* Chat */}
                  <div className="wa-bg p-3 space-y-3" style={{ minHeight: "320px" }}>
                    {lang.conversation.map((msg, i) => (
                      <motion.div
                        key={`${lang.code}-${i}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.3, duration: 0.4 }}
                      >
                        <div className={msg.from === "user" ? "wa-bubble-sent" : "wa-bubble-received"}>
                          {msg.text}
                          <div className="wa-time">
                            {msg.from === "user" ? "10:30 AM ✓✓" : "10:31 AM"}
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Voice Note */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="wa-bubble-sent">
                        <div className="flex items-center gap-2">
                          <Mic size={14} className="text-primary" />
                          <div className="flex-1">
                            <div className="flex items-center gap-1">
                              {[8, 14, 6, 12, 16, 5, 10, 15, 7, 13, 9, 16, 6, 11, 14, 8, 12, 5, 15, 10].map((h, j) => (
                                <div
                                  key={j}
                                  className="w-0.5 bg-primary/60 rounded-full"
                                  style={{ height: `${h}px` }}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">0:08</span>
                        </div>
                        <div className="wa-time">10:32 AM ✓✓</div>
                      </div>
                    </motion.div>

                    {/* Transcription */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="wa-bubble-received">
                        <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                          <Mic size={10} />
                          Voice transcribed
                        </div>
                        <div className="text-sm">I understand your question. Here are 3 scholarship options...</div>
                        <div className="wa-time">10:32 AM</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Input Bar */}
                  <div className="bg-gray-100 px-3 py-2 flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-full px-4 py-2 text-xs text-gray-400">
                      Type a message...
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Send size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Language Tabs + Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Language Tabs */}
            <div className="flex flex-wrap gap-3">
              {languages.map((l, i) => (
                <button
                  key={l.code}
                  onClick={() => setActiveLang(i)}
                  className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                    activeLang === i
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-bg-card text-text-secondary border border-border-light hover:border-primary/30"
                  }`}
                >
                  {l.flag} {l.name}
                </button>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                {
                  title: "Voice Note Processing",
                  desc: "Send voice notes in any Nigerian language. Our AI transcribes and responds instantly.",
                  icon: "🎤",
                },
                {
                  title: "Context-Aware Responses",
                  desc: "SabiGuide remembers your academic profile and gives contextual advice every time.",
                  icon: "🧠",
                },
                {
                  title: "Real-Time Updates",
                  desc: "Get instant notifications about deadlines, admission lists, and scholarship windows.",
                  icon: "⚡",
                },
                {
                  title: "No App Download",
                  desc: "Everything works inside WhatsApp. No extra app needed — just start chatting.",
                  icon: "💬",
                },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 bg-bg-card rounded-2xl p-4 border border-border-light dark:border-white/5"
                >
                  <span className="text-2xl">{f.icon}</span>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm">{f.title}</h4>
                    <p className="text-sm text-text-muted mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
