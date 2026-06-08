"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Is SabiGuide really free for students?",
    answer: "Yes, absolutely. SabiGuide is 100% free for students to use. Our platform is sustained through ecosystem partnerships with digital finance providers like OPay and institutional licensing with universities, ensuring the financial burden never falls on the student."
  },
  {
    question: "Do I need a smartphone or active data subscription to use it?",
    answer: "Not at all. While our richest experience is on WhatsApp, we built SabiGuide to bridge the digital divide. If you do not have internet access or a smartphone, simply dial *384*SABIGUIDE# on any basic feature phone to check deadlines, admission statuses, and receive step-by-step SMS guidance."
  },
  {
    question: "What languages does the AI understand?",
    answer: "SabiGuide is built for the Nigerian reality. You can type or send voice notes in English, Nigerian Pidgin, Hausa, Yoruba, or Igbo. The AI automatically detects your language and responds in the exact same dialect."
  },
  {
    question: "How do you keep student data and payments secure?",
    answer: "Security is our baseline. SabiGuide does not store sensitive banking credentials or BVNs. Whenever you need to pay a Post-UTME fee or receive a NELFUND disbursement, our system seamlessly hands you over to OPay’s highly encrypted, fully compliant financial infrastructure to process the transaction."
  },
  {
    question: "Government portals change all the time. How do you ensure the AI gives accurate advice?",
    answer: "SabiGuide does not rely on random AI generation. Our backend uses an architecture called Retrieval-Augmented Generation (RAG). When you ask a question, the AI pulls the answer strictly from our continuously updated, manually verified database of current JAMB, WAEC, and NELFUND protocols."
  },
  {
    question: "Can I use SabiGuide to apply for scholarships?",
    answer: "Yes! When you interact with SabiGuide, it builds a background profile of your academic status. It then continuously matches you against a database of local, state, and corporate scholarships (like MTN Foundation or PTDF) and sends you proactive alerts 14 days, 7 days, and 48 hours before the deadlines close."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Heading & CTA */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#004D40] mb-6"
            >
              <span className="text-white text-xs font-semibold tracking-wide uppercase">FAQ</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 tracking-tight leading-tight"
            >
              Got Questions?<br />We've Got Answers.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg mb-8 leading-relaxed max-w-sm"
            >
              From securing admission to managing financial aid, we make navigating student life simple.
            </motion.p>

            <motion.a 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="mailto:support@sabiguide.com"
              className="inline-flex items-center gap-2 text-[#004D40] font-bold hover:text-[#00B074] transition-colors duration-300"
            >
              Contact Support <ArrowRight size={18} />
            </motion.a>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-2/3 flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-[#004D40] shadow-md" : "border-gray-200 hover:border-gray-300 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  >
                    <span className={`font-bold text-[16px] pr-8 ${isOpen ? "text-[#004D40]" : "text-[#111827]"}`}>
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 text-gray-400">
                      {isOpen ? <Minus size={20} className="text-[#004D40]" /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-500 leading-[1.8] text-[15px]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
