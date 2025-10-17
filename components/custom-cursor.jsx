"use client"

import { motion } from "framer-motion"

export default function CustomCursor({ mousePosition }) {
  return (
    <>
      <motion.div
        className="custom-cursor cursor-dot rounded-full"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
      />

      <motion.div
        className="custom-cursor cursor-outline rounded-full"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: [1, 1.05, 1],
        }}
        transition={{
          x: { type: "spring", damping: 30, stiffness: 200 },
          y: { type: "spring", damping: 30, stiffness: 200 },
          scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
        }}
      />

      <motion.div
        className="custom-cursor cursor-glow"
        animate={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
          opacity: [0.6, 0.4, 0.6],
        }}
        transition={{
          x: { type: "spring", damping: 40, stiffness: 100 },
          y: { type: "spring", damping: 40, stiffness: 100 },
          opacity: { duration: 2, repeat: Number.POSITIVE_INFINITY },
        }}
      />
    </>
  )
}
