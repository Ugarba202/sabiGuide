"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-r from-[#0C3D2B] to-[#004D40] shadow-xl flex flex-col md:flex-row min-h-[350px] md:min-h-[400px]"
        >
          {/* Subtle Background Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}
          />

          {/* Left Side: Students Image with Seamless Fade */}
          <div 
            className="absolute inset-y-0 left-0 w-full md:w-[55%] h-full z-0"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
              maskImage: 'linear-gradient(to right, black 60%, transparent 100%)'
            }}
          >
            <Image 
              src="/images/cta-students-v2.png"
              alt="Students using SabiGuide"
              fill
              className="object-cover object-center md:object-[center_20%]"
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
            />
          </div>

          {/* Right Side: Text & CTA */}
          <div className="relative z-10 w-full md:w-[50%] md:ml-auto py-16 px-6 md:py-24 md:pr-16 order-1 md:order-2 text-left flex flex-col justify-center bg-gradient-to-t from-[#0C3D2B]/90 to-transparent md:bg-none mt-40 md:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
              <span className="text-[#C4F08C]">Your</span> Future Shouldn't Depend on Guesswork.
            </h2>
            
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto md:mx-0">
              Let <span className="font-bold">SabiGuide</span> guide you to your next academic win.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
              <a 
                href="https://wa.me/2349000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#004D40] font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle size={20} className="text-[#00B074]" />
                Start on WhatsApp
              </a>

              <a 
                href="#features" 
                className="inline-flex items-center gap-2 text-white font-semibold text-base hover:text-[#C4F08C] transition-colors duration-300"
              >
                Explore Features <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
