"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "WAEC", abbr: "WAEC" },
  { name: "JAMB", abbr: "JAMB" },
  { name: "NELFUND", abbr: "NELFUND" },
  { name: "NYSC", abbr: "NYSC" },
  { name: "OPay", abbr: "OPay" },
  { name: "NUC", abbr: "NUC" },
];

function PartnerBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-8 py-3 mx-6">
      <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-primary/20 dark:text-white/15 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="py-12 md:py-16 bg-bg-main overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm font-medium text-text-muted mb-8 tracking-wide uppercase"
      >
        Guiding students through every academic milestone
      </motion.p>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-main to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-main to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
            <PartnerBadge key={`${p.name}-${i}`} name={p.abbr} />
          ))}
        </div>
      </div>
    </section>
  );
}
