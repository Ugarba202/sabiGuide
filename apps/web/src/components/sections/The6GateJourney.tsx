"use client";

import { motion } from "framer-motion";
import { BookOpen, UserCheck, GraduationCap, FileText, Award, Briefcase, Wallet } from "lucide-react";

const gates = [
  {
    id: "01",
    title: "WAEC (O-Levels)",
    icon: <BookOpen className="text-white" size={24} />,
    color: "from-blue-500 to-blue-700",
    description: "AI matches intended university courses with correct WAEC subject combinations. Step-by-step result checking and missing-grade dispute workflows.",
    integration: null
  },
  {
    id: "02",
    title: "JAMB (UTME)",
    icon: <UserCheck className="text-white" size={24} />,
    color: "from-emerald-500 to-emerald-700",
    description: "USSD and WhatsApp walkthroughs for profile creation and NIN linking. Direct CAPS navigation to prevent forfeited admissions.",
    integration: null
  },
  {
    id: "03",
    title: "University Admission",
    icon: <GraduationCap className="text-white" size={24} />,
    color: "from-amber-500 to-orange-600",
    description: "Post-UTME screening deadline alerts tailored to the student's specific institution.",
    integration: {
      type: "FinTech Integration",
      desc: "Guides students to pay acceptance fees and departmental levies securely via OPay."
    }
  },
  {
    id: "04",
    title: "NELFUND Student Loan",
    icon: <FileText className="text-white" size={24} />,
    color: "from-purple-500 to-purple-700",
    description: "Conducts an AI-driven 'Document Gap Analysis' to ensure students have the right files before the portal opens.",
    integration: {
      type: "FinTech Integration",
      desc: "Automates the prompt for the student to link an active OPay wallet as the official receiving account for the loan disbursement."
    }
  },
  {
    id: "05",
    title: "Scholarships",
    icon: <Award className="text-white" size={24} />,
    color: "from-pink-500 to-rose-600",
    description: "Background profile matching against a JSON database of 20+ active national/corporate scholarships. Automated 14-day, 7-day, and 48-hour deadline alerts.",
    integration: null
  },
  {
    id: "06",
    title: "NYSC",
    icon: <Briefcase className="text-white" size={24} />,
    color: "from-green-600 to-emerald-800",
    description: "Mobilization portal guidance and orientation camp preparation checklists.",
    integration: {
      type: "FinTech Integration",
      desc: "Systematically instructs graduating corps members to route their monthly government allowance directly into OPay."
    }
  }
];

export default function The6GateJourney() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="text-blue-600 text-sm font-bold tracking-wide uppercase">The 6-Gate Journey</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            A Multi-Year Academic Compass
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            SabiGuide maintains strict state awareness for every user, navigating them through the six critical gates of their education while seamlessly embedding high-volume financial onboarding.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gates.map((gate, i) => (
            <motion.div
              key={gate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gate.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  {gate.icon}
                </div>
                <div className="text-4xl font-black text-slate-100 select-none transition-colors group-hover:text-blue-50">
                  {gate.id}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">{gate.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {gate.description}
              </p>

              {gate.integration && (
                <div className="mt-auto pt-5 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Wallet size={16} className="text-green-600" />
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">{gate.integration.type}</span>
                  </div>
                  <p className="text-sm text-slate-700 font-medium">{gate.integration.desc}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
