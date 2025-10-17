"use client"

import { motion } from "framer-motion"

export default function GlowingCard({ children, color = "purple" }) {
  const glowColors = {
    purple: "rgba(192, 132, 252, 0.5)",
    pink: "rgba(244, 114, 182, 0.5)",
    blue: "rgba(96, 165, 250, 0.5)",
  }

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden glass"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        className="absolute -inset-0.5 rounded-xl z-[-1]"
        style={{
          background: `linear-gradient(90deg, ${glowColors[color]}, transparent, ${glowColors[color]})`,
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
      />
      {children}
    </motion.div>
  )
}
