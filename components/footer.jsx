"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  const footerLinks = [
    // {
    //   title: "Company",
    //   links: [
    //     { name: "About", href: "#" },
    //     { name: "Careers", href: "#" },
    //     { name: "Blog", href: "#" },
    //     { name: "Press", href: "#" },
    //   ],
    // },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#" },
        { name: "Mobile Development", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Digital Marketing", href: "#" },
      ],
    },
    // {
    //   title: "Resources",
    //   links: [
    //     { name: "Documentation", href: "#" },
    //     { name: "Tutorials", href: "#" },
    //     { name: "Case Studies", href: "#" },
    //     { name: "FAQs", href: "#" },
    //   ],
    // },
    // {
    //   title: "Legal",
    //   links: [
    //     { name: "Privacy Policy", href: "#" },
    //     { name: "Terms of Service", href: "#" },
    //     { name: "Cookie Policy", href: "#" },
    //     { name: "GDPR", href: "#" },
    //   ],
    // },
  ]

  return (
    <footer className="pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-bold gradient-text">
                &lt;DEV.Manus/&gt;
              </Link>
              <p className="mt-4 text-gray-300 max-w-md">
                We create innovative digital solutions that help businesses grow and succeed in the digital age.
              </p>
            </motion.div>
            {/* <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  {social[0]}
                </a>
              ))}
            </motion.div> */}
          </div>

          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * columnIndex }}
            >
              <h4 className="text-lg font-bold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pt-8 mt-8 border-t border-white/10 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} DEV.Manus. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
