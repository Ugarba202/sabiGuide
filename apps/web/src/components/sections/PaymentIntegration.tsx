"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Wallet, ArrowDownCircle, HandCoins } from "lucide-react";

const integrations = [
  {
    title: "NELFUND Disbursements",
    desc: "Automated prompts to link an OPay wallet as the official receiving account for student loans.",
    icon: <ArrowDownCircle className="text-white" size={20} />,
    color: "from-[#00B074] to-[#009960]"
  },
  {
    title: "NYSC Allowances",
    desc: "Systematically instructs graduating corps members to route monthly government allowances directly into OPay.",
    icon: <HandCoins className="text-white" size={20} />,
    color: "from-[#FFB800] to-[#E6A600]"
  },
  {
    title: "Instant Fee Payments",
    desc: "Pay JAMB, Post-UTME screening, and acceptance fees securely with zero failed transactions.",
    icon: <Wallet className="text-white" size={20} />,
    color: "from-blue-500 to-blue-600"
  }
];

export default function PaymentIntegration() {
  return (
    <section className="py-24 bg-bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <ShieldCheck size={14} className="text-primary" />
              <span className="text-primary text-sm font-bold tracking-wide uppercase">Financial Inclusion</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              Powered natively by <span className="text-primary">OPay</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
              SabiGuide intercepts students exactly at the moment they need a financial vehicle and routes them into the digital banking ecosystem—securely and instantly.
            </p>

            <div className="space-y-6">
              {integrations.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual/Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-[#112a46] rounded-[2rem] p-6 border border-white/10 shadow-2xl relative">
              {/* OPay Logo Mock */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">O</div>
                  <span className="font-bold text-xl tracking-tight">OPay</span>
                </div>
                <div className="text-xs font-bold px-3 py-1 bg-primary/20 text-primary rounded-full">Linked</div>
              </div>

              {/* Balance Card */}
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-6 mb-6 shadow-glow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="text-white/80 text-sm font-medium mb-1">Total Balance</div>
                <div className="text-3xl font-bold text-white mb-4">₦180,450.00</div>
                <div className="flex items-center gap-2 text-xs text-white/90 bg-black/20 w-max px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <CheckCircle2 size={14} /> NELFUND verified account
                </div>
              </div>

              {/* Recent Transactions */}
              <div>
                <div className="text-sm font-bold text-white/60 mb-4">Recent Inflows</div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <ArrowDownCircle size={18} />
                      </div>
                      <div>
                        <div className="font-bold text-sm">NELFUND Loan</div>
                        <div className="text-xs text-white/50">Today, 10:45 AM</div>
                      </div>
                    </div>
                    <div className="font-bold text-primary">+₦150,000</div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <ArrowDownCircle size={18} />
                      </div>
                      <div>
                        <div className="font-bold text-sm">NYSC Allowance</div>
                        <div className="text-xs text-white/50">Yesterday, 2:15 PM</div>
                      </div>
                    </div>
                    <div className="font-bold text-primary">+₦33,000</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-bg-card p-4 rounded-2xl shadow-xl border border-border-light dark:border-white/10 flex items-center gap-3 animate-float-delayed">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary">Wallet Created!</div>
                  <div className="text-xs text-text-muted">Bounty: ₦200 earned</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
