"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MoreHorizontal, Signal, Wifi, BatteryFull, Mic } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Save the Number or Dial the Code",
    desc: "No apps to download, and no heavy data plans required. Simply save the SabiGuide WhatsApp number to your contacts, or dial the USSD code (*384*SABIGUIDE#) on any basic feature phone to start an offline session instantly.",
    chat: [
      { sender: "user", text: "Hi" },
      { sender: "bot", text: "Welcome to SabiGuide! 🎓 Are you here to check WAEC, JAMB, or NELFUND?" }
    ]
  },
  {
    id: "02",
    title: "Speak Your Native Language",
    desc: "Send a text or a voice note exactly how you naturally speak. Whether you type \"How I fit do my JAMB profile?\" in Pidgin, or ask about NELFUND in Hausa, Yoruba, or Igbo, the AI instantly detects your language and replies in the exact same dialect.",
    chat: [
      { sender: "user", text: "How I fit do my JAMB profile?" },
      { sender: "bot", text: "No wahala! Make I show you how to register your JAMB profile step-by-step. First, you get your NIN ready?" }
    ]
  },
  {
    id: "03",
    title: "Follow the Step-by-Step Guidance",
    desc: "SabiGuide does not send you confusing government links or dense PDFs. It breaks massive bureaucratic processes down into simple, single-action text messages. It runs a \"Document Gap Analysis\" to tell you exactly which files you are missing.",
    chat: [
      { sender: "user", text: "I want to apply for NELFUND" },
      { sender: "bot", text: "Great. Let's do a Document Check. Do you have your JAMB Admission Letter and BVN?" },
      { sender: "user", text: "I have BVN but no Admission Letter" },
      { sender: "bot", text: "⚠️ You need the Admission Letter first. You have 14 days until the portal closes." }
    ]
  },
  {
    id: "04",
    title: "Execute Seamless Transactions",
    desc: "When it is time to pay your Post-UTME acceptance fees, or when you need to set up a secure receiving account for your student loan or monthly NYSC allowance, SabiGuide seamlessly guides you to link or open an OPay wallet directly within the chat.",
    chat: [
      { sender: "bot", text: "Your NELFUND loan is approved! To receive the funds safely, link your OPay wallet." },
      { sender: "user", text: "Link my OPay" },
      { sender: "bot", text: "✅ OPay Wallet linked successfully. Funds will drop in 24hrs." }
    ]
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#004D40] mb-6"
          >
            <span className="text-white text-xs font-semibold tracking-wide">Simple Process</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 tracking-tight"
          >
            How SabiGuide Works.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl"
          >
            Whether you have a smartphone or a basic feature phone, securing your academic future takes just 4 steps.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Steps List */}
          <div className="w-full lg:w-[55%] flex flex-col gap-2 pr-0 lg:pr-12">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer transition-all duration-300 rounded-[1.25rem] ${
                    isActive 
                      ? "bg-white shadow-[0_2px_10px_rgb(0,0,0,0.03)] border border-gray-200 p-5 lg:p-6" 
                      : "bg-transparent hover:bg-black/[0.02] p-5 lg:px-6 lg:py-4"
                  }`}
                >
                  <div className="flex items-start gap-5 lg:gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-[15px] transition-colors ${
                        isActive ? "bg-[#004D40] text-white" : "bg-white text-[#111827] shadow-sm border border-gray-100"
                      }`}>
                        {step.id}
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-2 tracking-tight ${isActive ? "text-[#111827]" : "text-[#111827]"}`}>
                        {step.title}
                      </h3>
                      <p className="leading-relaxed text-[14px] text-gray-500">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Carousel Dots */}
            <div className="flex items-center gap-2 px-6 mt-6">
              {steps.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeStep === i ? "w-6 bg-[#004D40]" : "w-1.5 bg-gray-300"
                  }`} 
                />
              ))}
            </div>
          </div>

          {/* Right: Interactive Phone Mockup */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end sticky top-32">
            <motion.div 
              className="relative w-[320px] h-[650px] bg-[#0A0A0A] rounded-[3rem] p-3 shadow-2xl border-4 border-[#1F1F1F]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Dynamic Screen */}
              <div className="w-full h-full bg-[#E5DDD5] rounded-[2.2rem] overflow-hidden relative flex flex-col">
                
                {/* Status Bar */}
                <div className="h-12 bg-[#008069] w-full flex items-center justify-between px-6 z-10 shrink-0">
                  <span className="text-white text-xs font-semibold">9:41</span>
                  <div className="flex items-center gap-1.5 text-white">
                    <Signal size={12} fill="currentColor" />
                    <Wifi size={12} />
                    <BatteryFull size={14} fill="currentColor" />
                  </div>
                </div>

                {/* WhatsApp Header */}
                <div className="h-16 bg-[#008069] w-full flex items-center px-4 gap-3 z-10 shadow-sm shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden p-1 shrink-0">
                     <div className="w-full h-full bg-[#00B074] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">SG</span>
                     </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold leading-tight">SabiGuide</h4>
                    <p className="text-white/80 text-xs">Official Account</p>
                  </div>
                  <MoreHorizontal className="text-white" />
                </div>

                {/* Chat Area Background */}
                <div className="absolute inset-0 bg-[#E5DDD5] opacity-50 pointer-events-none" style={{ backgroundImage: "url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')" }}></div>

                {/* Chat Bubbles Container */}
                <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 relative z-10 pt-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-4"
                    >
                      {steps[activeStep].chat.map((msg, i) => (
                        <div 
                          key={i} 
                          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div 
                            className={`max-w-[85%] rounded-2xl p-3 text-[14px] leading-relaxed shadow-sm relative ${
                              msg.sender === "user" 
                                ? "bg-[#D9FDD3] text-[#111827] rounded-tr-sm" 
                                : "bg-white text-[#111827] rounded-tl-sm"
                            }`}
                          >
                            {msg.text}
                            <span className="text-[10px] text-gray-400 float-right mt-2 ml-3">
                              9:41 AM {msg.sender === "user" && <CheckCircle2 size={12} className="inline ml-1 text-blue-500" />}
                            </span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* WhatsApp Input */}
                <div className="h-16 bg-[#F0F2F5] w-full flex items-center px-2 gap-2 z-10 shrink-0 border-t border-black/5">
                   <div className="flex-1 h-10 bg-white rounded-full px-4 flex items-center">
                     <span className="text-gray-400 text-[15px]">Message</span>
                   </div>
                   <div className="w-10 h-10 bg-[#008069] rounded-full flex items-center justify-center shrink-0">
                      <Mic size={18} className="text-white" />
                   </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black/20 rounded-full z-20"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
