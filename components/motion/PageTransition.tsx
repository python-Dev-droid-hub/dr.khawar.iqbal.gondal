"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOutSoft } from "@/lib/motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: easeOutSoft }}
    >
      {children}
    </motion.div>
  );
}
