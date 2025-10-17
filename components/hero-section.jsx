"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import GlowingButton from "./ui/glowing-button"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 z-[-1]" />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div className="order-2 md:order-1" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" variants={itemVariants}>
            We Build <span className="gradient-text">Digital</span> Experiences
          </motion.h1>

          <motion.p className="text-lg text-gray-300 mb-8" variants={itemVariants}>
            Transforming ideas into exceptional digital solutions. We create innovative, user-focused applications that
            drive business growth.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <GlowingButton>Get Started</GlowingButton>
            <motion.button
              className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Work
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 glass rounded-2xl overflow-hidden gradient-border">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Digital Experience"
                width={600}
                height={600}
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
