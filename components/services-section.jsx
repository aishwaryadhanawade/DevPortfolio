"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Globe, Database, Cpu } from "lucide-react"
import GlowingCard from "./ui/glowing-card"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      color: "purple",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      color: "pink",
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "User-centered design that creates engaging digital experiences.",
      color: "blue",
    },
    {
      icon: <Globe size={40} />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence.",
      color: "purple",
    },
    {
      icon: <Database size={40} />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and database management.",
      color: "pink",
    },
    {
      icon: <Cpu size={40} />,
      title: "AI Integration",
      description: "Implementing artificial intelligence to enhance your products.",
      color: "blue",
    },
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowingCard color={service.color}>
                <div className="p-6">
                  <div className={`mb-4 text-${service.color}-400`}>{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
