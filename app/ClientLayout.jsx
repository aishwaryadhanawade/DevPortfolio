"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <CustomCursor mousePosition={mousePosition} />
        <div className="fixed inset-0 z-[-1] opacity-[0.03]">
          <motion.div
            className="absolute text-[20vw] font-bold text-white whitespace-nowrap"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 150, ease: "linear" }}
          >
            INNOVATION CREATIVITY TECHNOLOGY DEVELOPMENT DESIGN
          </motion.div>
        </div>
        {children}
      </body>
    </html>
  )
}
