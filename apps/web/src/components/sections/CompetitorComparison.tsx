"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

const features = [
  "Accessibility Mode",
  "Language Support",
  "Proactive Alerts",
  "Financial Integration",
  "Cost to Student"
];

const competitors = [
  {
    name: "SabiGuide",
    isPrimary: true,
    data: [
      "WhatsApp / USSD",
      "English, Pidgin, Hausa, Yoruba, Igbo",
      "Yes (Automated Deadlines)",
      "Yes (Native OPay Routing)",
      "Free (Zero-rated potential)"
    ],
    status: [true, true, true, true, true]
  },
  {
    name: "Cybercafe Operators",
    isPrimary: false,
    data: [
      "Physical Location",
      "Local dialects",
      "No",
      "Cash Payments",
      "High service charges"
    ],
    status: [false, true, false, false, false]
  },
  {
    name: "Generic AI (ChatGPT)",
    isPrimary: false,
    data: [
      "Web / High Data App",
      "Mostly English",
      "No",
      "None",
      "Requires data/subscription"
    ],
    status: [false, false, false, false, false]
  },
  {
    name: "Govt. Web Portals",
    isPrimary: false,
    data: [
      "Web / Desktop Heavy",
      "Strictly Formal English",
      "No",
      "Disjointed Card Gateways",
      "Free, but requires data"
    ],
    status: [false, false, false, false, false]
  }
];

export default function CompetitorComparison() {
  return (
    <section className="py-24 bg-bg-main relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight"
          >
            Why We Are Different
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            Built for the reality of the Nigerian student, removing hardware, language, and financial barriers.
          </motion.p>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="min-w-[800px] w-full bg-bg-card rounded-3xl border border-border-light shadow-lg overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-5 bg-bg-main border-b border-border-light">
              <div className="p-6 flex items-center font-bold text-text-secondary text-sm uppercase tracking-wider">
                Features
              </div>
              {competitors.map((comp, i) => (
                <div 
                  key={comp.name} 
                  className={`p-6 text-center border-l border-border-light/50 ${
                    comp.isPrimary ? "bg-primary/5 relative" : ""
                  }`}
                >
                  {comp.isPrimary && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  )}
                  <h3 className={`font-bold text-lg ${comp.isPrimary ? "text-primary" : "text-text-primary"}`}>
                    {comp.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Data Rows */}
            {features.map((feature, rowIndex) => (
              <div 
                key={feature} 
                className={`grid grid-cols-5 border-b border-border-light/50 hover:bg-bg-main/50 transition-colors ${
                  rowIndex === features.length - 1 ? "border-b-0" : ""
                }`}
              >
                <div className="p-6 flex items-center font-semibold text-text-primary">
                  {feature}
                </div>
                {competitors.map((comp, colIndex) => (
                  <div 
                    key={`${comp.name}-${feature}`} 
                    className={`p-6 border-l border-border-light/50 flex flex-col items-center justify-center text-center gap-3 ${
                      comp.isPrimary ? "bg-primary/5 font-medium text-primary" : "text-text-secondary"
                    }`}
                  >
                    {comp.status[rowIndex] ? (
                      <CheckCircle2 className={comp.isPrimary ? "text-primary" : "text-green-500"} size={20} />
                    ) : comp.data[rowIndex] === "Local dialects" || comp.data[rowIndex] === "Free, but requires data" ? (
                      <MinusCircle className="text-amber-500" size={20} />
                    ) : (
                      <XCircle className="text-red-400" size={20} />
                    )}
                    <span className="text-sm">{comp.data[rowIndex]}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
