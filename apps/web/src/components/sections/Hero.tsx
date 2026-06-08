"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0A0A0A] overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Typography & CTAs */}
          <div className="w-full lg:w-[55%]">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] border border-white/10 text-white/80 text-xs font-semibold mb-8 uppercase tracking-widest"
            >
              <ShieldCheck size={14} className="text-[#00B074]" />
              OPay Innovation Challenge
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-medium text-white leading-[1.05] tracking-tight mb-8"
            >
              Navigate your <br />
              education without <br />
              <span className="text-[#00B074]">friction.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-white/50 mb-10 max-w-lg leading-relaxed font-light"
            >
              The intelligent infrastructure for Nigerian students. Access WAEC, JAMB, NELFUND, and NYSC services directly through WhatsApp and USSD. Zero apps required.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#00B074] hover:bg-[#009960] text-white font-medium rounded-lg transition-colors"
              >
                Try on WhatsApp
                <ArrowRight size={18} />
              </a>
              <button className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#111111] hover:bg-[#1A1A1A] text-white font-medium rounded-lg border border-white/10 transition-colors">
                <Smartphone size={18} />
                USSD *384*SABIGUIDE#
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex items-center gap-4 text-sm text-white/40 font-medium"
            >
              <span>Trusted by 11M+ Students</span>
              <div className="w-1 h-1 rounded-full bg-white/20"></div>
              <span>Powered by OPay</span>
            </motion.div>
          </div>

          {/* Right Column: Photographic Hero Image */}
          <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[480px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
            >
               <Image 
                 src="/images/hero-student.png" 
                 alt="Nigerian student smiling while using SabiGuide on his smartphone" 
                 fill 
                 className="object-cover"
                 priority
               />
               {/* Inner border to give it a clean edge against the dark background */}
               <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
