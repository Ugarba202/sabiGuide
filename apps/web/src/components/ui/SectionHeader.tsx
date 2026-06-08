"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  align?: "left" | "center";
  dark?: boolean;
  badge?: string;
  children?: ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  highlight,
  align = "center",
  dark = false,
  badge,
}: SectionHeaderProps) {
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto" : ""} max-w-3xl ${align === "center" ? "mx-auto" : ""}`}
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
          dark
            ? "bg-primary/10 text-primary-light border border-primary/20"
            : "bg-primary/10 text-primary border border-primary/20"
        }`}>
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight ${
          dark ? "text-white" : "text-text-primary"
        }`}
      >
        {highlight
          ? titleParts.map((part, i) => (
              <span key={i}>
                {part}
                {i < titleParts.length - 1 && (
                  <span className="gradient-text">{highlight}</span>
                )}
              </span>
            ))
          : title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg md:text-xl leading-relaxed ${
            dark ? "text-text-on-dark-muted" : "text-text-secondary"
          }`}
          style={{ color: dark ? "rgba(248,249,250,0.7)" : undefined }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
