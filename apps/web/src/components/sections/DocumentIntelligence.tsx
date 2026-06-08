"use client";

import { motion } from "framer-motion";
import { FileText, Cpu, CheckCircle2 } from "lucide-react";

const subjects = [
  { name: "Mathematics", grade: "A1", color: "text-green-700", bg: "bg-green-50", border: "border-green-100" },
  { name: "English Language", grade: "B2", color: "text-green-700", bg: "bg-green-50", border: "border-green-100" },
  { name: "Physics", grade: "A1", color: "text-green-700", bg: "bg-green-50", border: "border-green-100" },
  { name: "Chemistry", grade: "B3", color: "text-yellow-700", bg: "bg-yellow-50", border: "border-yellow-100" },
  { name: "Biology", grade: "A1", color: "text-green-700", bg: "bg-green-50", border: "border-green-100" },
];

const eligibleCourses = [
  { course: "Medicine & Surgery", status: "Eligible", uni: "ABU Zaria" },
  { course: "Engineering", status: "Eligible", uni: "BUK Kano" },
  { course: "Pharmacy", status: "Eligible", uni: "UNIMAID" },
];

export default function DocumentIntelligence() {
  return (
    <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#004D40] mb-6"
          >
            <span className="text-white text-xs font-semibold tracking-wide">Document Intelligence</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 tracking-tight leading-tight"
          >
            Upload. Analyze. Know your options.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            Send your WAEC result on WhatsApp and let our AI instantly analyze your eligibility for courses and universities. No guessing, just data.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          
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
              whileHover={{ y: -2 }}
              className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.03)] transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[17px] text-[#111827] tracking-tight">Step 1: Upload Result</h4>
                  <p className="text-sm text-gray-500 mt-0.5">Send your WAEC result photo on WhatsApp</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-dashed border-gray-200 text-center">
                <span className="text-4xl block mb-3">📄</span>
                <p className="text-[13px] font-medium text-gray-600">WAEC_Result_2024.jpg</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden w-3/4 mx-auto">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-[#004D40] rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Step 2: AI Processing */}
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.03)] transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[17px] text-[#111827] tracking-tight">Step 2: AI Extraction</h4>
                  <p className="text-sm text-gray-500 mt-0.5">Subjects and grades identified</p>
                </div>
              </div>
              
              <div className="space-y-2.5">
                {subjects.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className={`flex items-center justify-between py-2.5 px-4 rounded-xl border ${s.bg} ${s.border}`}
                  >
                    <span className={`text-[14px] font-medium ${s.color}`}>{s.name}</span>
                    <span className={`text-[13px] font-bold px-2.5 py-1 rounded-md bg-white shadow-sm ${s.color}`}>
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
            className="h-full"
          >
            <div className="bg-[#F8FAFC] rounded-[2rem] p-8 lg:p-10 border border-gray-100 shadow-md h-full flex flex-col">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#004D40] flex items-center justify-center text-white shadow-sm">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#111827] tracking-tight">Eligibility Analysis</h4>
                  <p className="text-[14px] text-gray-500 mt-1">Based on your extracted WAEC result</p>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {eligibleCourses.map((course, i) => (
                  <motion.div
                    key={course.course}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + i * 0.15 }}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-[16px] text-[#111827] tracking-tight">{course.course}</h5>
                      <div className="flex items-center gap-1.5 bg-[#D9FDD3] px-2.5 py-1 rounded-full">
                        <CheckCircle2 size={12} className="text-[#004D40]" />
                        <span className="text-[11px] font-bold text-[#004D40] uppercase tracking-wider">
                          {course.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-[14px] text-gray-500">{course.uni}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-medium text-gray-600">Overall Match Score</span>
                  <span className="text-3xl font-black text-[#004D40]">94%</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
