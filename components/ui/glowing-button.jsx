"use client"

import { motion } from "framer-motion"

export default function GlowingButton({ children, type = "button", onClick }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className="relative px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
