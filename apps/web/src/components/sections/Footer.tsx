"use client";

import { motion } from "framer-motion";
import Logo from "../ui/Logo";
import { Globe, Link2, Share2, Mail } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Features: [
    { label: "WhatsApp Bot", href: "#features" },
    { label: "USSD Access", href: "#" },
    { label: "Document AI", href: "#" },
    { label: "Opportunity Engine", href: "#opportunities" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  Connect: [
    { label: "WhatsApp", href: "https://wa.me/2349000000000" },
    { label: "Twitter/X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

const socialIcons = [
  { icon: <Globe size={18} />, href: "#", label: "Twitter" },
  { icon: <Link2 size={18} />, href: "#", label: "LinkedIn" },
  { icon: <Share2 size={18} />, href: "#", label: "Instagram" },
  { icon: <Mail size={18} />, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      className="section-padding pt-16 pb-8"
      style={{ background: "var(--secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Logo dark size={32} />
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Know Your Next Step. AI-powered student navigation from WAEC to NYSC.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialIcons.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} SabiGuide. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
