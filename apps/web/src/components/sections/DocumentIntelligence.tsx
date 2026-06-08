"use client";

import { motion } from "framer-motion";
import { FileText, Cpu, CheckCircle2 } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const subjects = [
  { name: "Mathematics", grade: "A1", color: "#00B074" },
  { name: "English Language", grade: "B2", color: "#00B074" },
  { name: "Physics", grade: "A1", color: "#00B074" },
  { name: "Chemistry", grade: "B3", color: "#FFB800" },
  { name: "Biology", grade: "A1", color: "#00B074" },
];

const eligibleCourses = [
  { course: "Medicine & Surgery", status: "Eligible", uni: "ABU Zaria", color: "#00B074" },
  { course: "Engineering", status: "Eligible", uni: "BUK Kano", color: "#00B074" },
  { course: "Pharmacy", status: "Eligible", uni: "UNIMAID", color: "#00B074" },
];

export default function DocumentIntelligence() {
  return (
    <section className="py-20 md:py-28 bg-bg-main section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Document Intelligence"
          title="Upload. Analyze. Know your options."
          highlight="Know your options"
          subtitle="Send your WAEC result on WhatsApp and let our AI instantly analyze your eligibility for courses and universities."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Processing Pipeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Step 1: Upload */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-bg-card rounded-3xl p-6 border border-border-light dark:border-white/5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-primary">Step 1: Upload Result</h4>
                  <p className="text-xs text-text-muted">Send your WAEC result photo on WhatsApp</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 border border-dashed border-gray-200 dark:border-white/10 text-center">
                <span className="text-3xl">📄</span>
                <p className="text-sm text-text-muted mt-2">WAEC_Result_2024.jpg</p>
                <div className="mt-2 h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Step 2: AI Processing */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-bg-card rounded-3xl p-6 border border-border-light dark:border-white/5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-primary">Step 2: AI Extraction</h4>
                  <p className="text-xs text-text-muted">Subjects and grades identified</p>
                </div>
              </div>
              <div className="space-y-2">
                {subjects.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-gray-50 dark:bg-white/5"
                  >
                    <span className="text-sm font-medium text-text-primary">{s.name}</span>
                    <span
                      className="text-sm font-bold px-2.5 py-0.5 rounded-lg"
                      style={{ backgroundColor: `${s.color}15`, color: s.color }}
                    >
                      {s.grade}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-bg-card rounded-3xl p-6 lg:p-8 border border-border-light dark:border-white/5 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">Eligibility Analysis</h4>
                  <p className="text-xs text-text-muted">Based on your WAEC result</p>
                </div>
              </div>

              <div className="space-y-4">
                {eligibleCourses.map((course, i) => (
                  <motion.div
                    key={course.course}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + i * 0.15 }}
                    className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-4 border border-primary/10"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-text-primary">{course.course}</h5>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        ✓ {course.status}
                      </span>
                    </div>
                    <p className="text-sm text-text-muted">{course.uni}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border-light">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-muted">Overall Match Score</span>
                  <span className="text-2xl font-extrabold text-primary">94%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
