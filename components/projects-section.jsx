"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import GlowingCard from "./ui/glowing-card"

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured e-commerce platform with payment integration and inventory management.",
      image: "/placeholder.svg?height=600&width=800",
      color: "purple",
    },
    {
      title: "Health & Fitness App",
      category: "Mobile Development",
      description: "A cross-platform mobile app for tracking fitness goals and health metrics.",
      image: "/placeholder.svg?height=600&width=800",
      color: "pink",
    },
    {
      title: "Financial Dashboard",
      category: "UI/UX Design",
      description: "An intuitive dashboard for visualizing complex financial data and analytics.",
      image: "/placeholder.svg?height=600&width=800",
      color: "blue",
    },
    {
      title: "AI Content Generator",
      category: "AI Integration",
      description: "An AI-powered tool that generates high-quality content for marketing teams.",
      image: "/placeholder.svg?height=600&width=800",
      color: "purple",
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex flex-col space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer p-4 rounded-lg transition-all ${
                  activeIndex === index ? "glass" : "hover:bg-white/5"
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ x: activeIndex === index ? 0 : 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.category}</p>
              </motion.div>
            ))}
          </div>

          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <GlowingCard color={projects[activeIndex].color}>
                  <div className="aspect-video relative overflow-hidden rounded-t-xl">
                    <Image
                      src={projects[activeIndex].image || "/placeholder.svg"}
                      alt={projects[activeIndex].title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{projects[activeIndex].title}</h3>
                    <p className="text-gray-300">{projects[activeIndex].description}</p>
                    <motion.button
                      className="mt-4 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Case Study
                    </motion.button>
                  </div>
                </GlowingCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
