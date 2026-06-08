"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col items-center">
        
        {/* Top Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 border border-gray-100 rounded-full px-5 py-1.5 mb-8"
        >
          <p className="text-[13px] font-medium text-gray-500 tracking-wide">
            Trusted by students and partners across Nigeria
          </p>
        </motion.div>

        {/* Logos Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full"
        >
          {/* WAEC Logo */}
          <div className="relative h-10 w-32 flex items-center justify-center">
            <Image 
              src="/logos/waec.png" 
              alt="WAEC Logo" 
              fill
              className="object-contain"
            />
          </div>

          {/* JAMB Logo */}
          <div className="relative h-10 w-32 flex items-center justify-center">
            <Image 
              src="/logos/jamb.png" 
              alt="JAMB Logo" 
              fill
              className="object-contain"
            />
          </div>

          {/* NELFUND Logo */}
          <div className="relative h-10 w-32 flex items-center justify-center">
            <Image 
              src="/logos/nelfund.png" 
              alt="NELFUND Logo" 
              fill
              className="object-contain"
            />
          </div>

          {/* NYSC Logo */}
          <div className="relative h-10 w-32 flex items-center justify-center">
            <Image 
              src="/logos/nysc.png" 
              alt="NYSC Logo" 
              fill
              className="object-contain"
            />
          </div>

          {/* OPay Logo */}
          <div className="relative h-10 w-32 flex items-center justify-center">
            <Image 
              src="/logos/opay.png" 
              alt="OPay Logo" 
              fill
              className="object-contain"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
