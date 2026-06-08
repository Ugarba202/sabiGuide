"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const comparisonData = [
  {
    feature: "Personalized to your profile",
    traditional: false,
    blogs: false,
    school: false,
    whatsapp: false,
    sabiguide: true,
  },
  {
    feature: "Real-time deadline tracking",
    traditional: false,
    blogs: false,
    school: false,
    whatsapp: false,
    sabiguide: true,
  },
  {
    feature: "Scholarship matching",
    traditional: false,
    blogs: false,
    school: false,
    whatsapp: false,
    sabiguide: true,
  },
  {
    feature: "Document analysis (WAEC)",
    traditional: false,
    blogs: false,
    school: false,
    whatsapp: false,
    sabiguide: true,
  },
  {
    feature: "Works on WhatsApp",
    traditional: false,
    blogs: false,
    school: false,
    whatsapp: true,
    sabiguide: true,
  },
  {
    feature: "Voice note support",
    traditional: false,
    blogs: false,
    school: false,
    whatsapp: false,
    sabiguide: true,
  },
  {
    feature: "USSD access (no data)",
    traditional: false,
    blogs: false,
    school: false,
    whatsapp: false,
    sabiguide: true,
  },
  {
    feature: "AI-powered guidance",
    traditional: false,
    blogs: false,
    school: false,
    whatsapp: false,
    sabiguide: true,
  },
];

const columns = [
  { key: "traditional", label: "Google Search" },
  { key: "blogs", label: "Blogs" },
  { key: "school", label: "School Websites" },
  { key: "whatsapp", label: "WhatsApp Groups" },
  { key: "sabiguide", label: "SabiGuide" },
];

export default function WhySabiGuide() {
  return (
    <section id="about" className="py-20 md:py-28 bg-bg-main section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Why SabiGuide"
          title="Built different. Built for you."
          highlight="Built for you"
          subtitle="Traditional methods leave Nigerian students guessing. SabiGuide provides personalized, proactive, and accessible guidance."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-bg-card rounded-3xl border border-border-light dark:border-white/5 overflow-hidden shadow-md"
        >
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-text-muted">Feature</th>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className={`text-center py-4 px-4 text-sm font-semibold ${
                        col.key === "sabiguide"
                          ? "text-primary bg-primary/5"
                          : "text-text-muted"
                      }`}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border-light last:border-0 ${
                      i % 2 === 0 ? "" : "bg-gray-50/50 dark:bg-white/[0.02]"
                    }`}
                  >
                    <td className="py-3.5 px-6 text-sm font-medium text-text-primary">{row.feature}</td>
                    {columns.map((col) => {
                      const val = row[col.key as keyof typeof row];
                      return (
                        <td key={col.key} className={`text-center py-3.5 px-4 ${col.key === "sabiguide" ? "bg-primary/5" : ""}`}>
                          {val ? (
                            <Check size={18} className="text-primary mx-auto" />
                          ) : (
                            <X size={18} className="text-gray-300 dark:text-gray-600 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden p-4 space-y-3">
            {comparisonData.map((row) => (
              <div key={row.feature} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4">
                <h4 className="text-sm font-semibold text-text-primary mb-3">{row.feature}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {columns.map((col) => {
                    const val = row[col.key as keyof typeof row];
                    return (
                      <div key={col.key} className="flex items-center gap-2">
                        {val ? (
                          <Check size={14} className="text-primary" />
                        ) : (
                          <X size={14} className="text-gray-300" />
                        )}
                        <span className={`text-xs ${col.key === "sabiguide" ? "font-bold text-primary" : "text-text-muted"}`}>
                          {col.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
