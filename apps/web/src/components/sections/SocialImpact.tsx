"use client";

import { motion } from "framer-motion";
import { Users, Building2, Briefcase, Wallet } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";

const marketStats = [
  {
    icon: <Users size={32} />,
    value: 11,
    suffix: "M+",
    label: "Total Addressable Market",
    description: "Students in the WAEC cycle annually.",
    color: "#00B074",
  },
  {
    icon: <Wallet size={32} />,
    value: 200,
    suffix: "₦",
    label: "Acquisition Bounty",
    description: "Earned per verified OPay wallet.",
    color: "#3B82F6",
  },
  {
    icon: <Building2 size={32} />,
    value: 2,
    suffix: "M₦",
    label: "Institutional Licensing",
    description: "Annual B2B fee for universities.",
    color: "#FFB800",
  },
  {
    icon: <Briefcase size={32} />,
    value: 20,
    suffix: "+",
    label: "Sponsored Aid Listings",
    description: "Corporate foundations targeting students.",
    color: "#8B5CF6",
  },
];

export default function SocialImpact() {
  return (
    <section className="py-24 bg-bg-card border-y border-border-light relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--primary-light)_0%,_transparent_70%)] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
            B2B2C Business Model
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary leading-tight mb-6">
            Scale and <span className="gradient-text">Revenue</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            SabiGuide operates a B2B2C model, offering the core guidance platform for free to students while monetizing aggregated volume and infrastructure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-bg-main rounded-3xl p-6 lg:p-8 border border-border-light shadow-sm hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                >
                  {stat.icon}
                </div>

                <div className="text-4xl font-extrabold text-text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-lg font-bold text-text-primary mb-2">{stat.label}</div>
                <div className="text-sm text-text-muted mt-auto leading-relaxed">{stat.description}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
