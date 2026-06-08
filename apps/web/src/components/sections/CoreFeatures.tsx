"use client";

import { motion } from "framer-motion";
import { Mic, FileCheck, BellRing, Wallet, Phone } from "lucide-react";

const features = [
  {
    title: "Multilingual Voice & Text AI",
    desc: "Communicate naturally using English, Pidgin, Hausa, Yoruba, or Igbo. Whether you type a quick message or drop a voice note, the AI responds in your exact dialect, breaking down complex bureaucratic jargon into everyday language you can actually understand.",
    icon: <Mic size={20} className="text-[#004D40]" />,
    highlight: false,
  },
  {
    title: "Smart Document Gap Analysis",
    desc: "Stop guessing what files you need and getting rejected by portals. Tell SabiGuide what documents you currently have, and it will cross-reference them with official requirements—telling you exactly what is missing and how to get it before you even start an application.",
    icon: <FileCheck size={20} className="text-[#004D40]" />,
    highlight: false,
  },
  {
    title: "Proactive Deadline Alerts",
    desc: "Never miss a life-changing opportunity because you forgot to check a website. SabiGuide tracks your specific university screening dates, NELFUND loan windows, and scholarship timelines, pushing automated alerts to your WhatsApp 14 days, 7 days, and 48 hours before portals close.",
    icon: <BellRing size={20} className="text-white" />,
    highlight: true, // This one gets the special styling from the reference image
    badge: "NEW",
  },
  {
    title: "Seamless Financial Routing",
    desc: "Clear your Post-UTME acceptance fees, secure your NELFUND student loan disbursements, and receive your NYSC monthly allowance effortlessly. SabiGuide integrates directly with the OPay ecosystem, allowing you to seamlessly link or open a secure wallet without ever leaving the chat.",
    icon: <Wallet size={20} className="text-[#004D40]" />,
    highlight: false,
  },
  {
    title: "Offline USSD Accessibility",
    desc: "No smartphone? No internet data? No problem. SabiGuide bridges the digital divide. By dialing a simple shortcode, students in remote areas can still check admission statuses, query critical deadlines, and receive step-by-step SMS guidance on basic feature phones.",
    icon: <Phone size={20} className="text-[#004D40]" />,
    highlight: false,
  }
];

export default function CoreFeatures() {
  return (
    <section id="features" className="py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header Section */}
        <div className="mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#004D40] mb-6"
          >
            <span className="text-white text-xs font-semibold tracking-wide">Why SabiGuide?</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 tracking-tight leading-tight"
          >
            Core Features: The Power Behind SabiGuide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            Bridging the gap between students and complex government portals with unbreakable AI infrastructure.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <FeatureCard feature={features[0]} delay={0.1} />
            <FeatureCard feature={features[3]} delay={0.2} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <FeatureCard feature={features[1]} delay={0.3} />
            <FeatureCard feature={features[4]} delay={0.4} />
          </div>

          {/* Column 3 (Highlighted Card) */}
          <div className="flex flex-col gap-6">
            <FeatureCard feature={features[2]} delay={0.5} />
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, delay }: { feature: any, delay: number }) {
  if (feature.highlight) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-[#F8FAFC] rounded-2xl p-6 lg:p-7 border border-gray-100 h-full hover:shadow-md transition-shadow duration-300"
      >
        <div className="w-10 h-10 bg-[#004D40] rounded-full flex items-center justify-center mb-4 shadow-sm">
          {feature.icon}
        </div>
        
        {feature.badge && (
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#004D40] mb-4">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" className="text-yellow-400 fill-current">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
            </svg>
            <span className="text-[9px] font-bold text-white tracking-widest">{feature.badge}</span>
          </div>
        )}
        
        <h3 className="text-lg font-bold text-[#111827] mb-3 tracking-tight">{feature.title}</h3>
        <p className="text-[13px] text-gray-500 leading-[1.8] font-normal">
          {feature.desc}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-2xl p-6 lg:p-7 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300 h-full"
    >
      <div className="mb-4 text-[#004D40]">
        {feature.icon}
      </div>
      <h3 className="text-[17px] font-bold text-[#111827] mb-3 tracking-tight">{feature.title}</h3>
      <p className="text-[13px] text-gray-500 leading-[1.8] font-normal">
        {feature.desc}
      </p>
    </motion.div>
  );
}
