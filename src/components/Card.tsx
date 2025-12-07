"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined";
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  variant = "default",
  hover = true,
}: CardProps) {
  const variants = {
    default: "bg-white/80 backdrop-blur-sm",
    elevated: "bg-white shadow-xl shadow-polana-dark-green/5",
    outlined: "bg-transparent border-2 border-polana-olive",
  };

  const hoverStyles = hover
    ? "hover:shadow-lg hover:shadow-polana-dark-green/10 hover:-translate-y-1"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl p-6 md:p-8 transition-all duration-300 ${variants[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}

