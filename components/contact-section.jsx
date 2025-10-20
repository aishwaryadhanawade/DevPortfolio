"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import GlowingButton from "./ui/glowing-button"

export default function ContactSection() {
  const formFields = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "subject", label: "Subject", type: "text" },
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      title: "Email Us",
      details: "aishwaryadhanawade612@gmail.com",
    },
    // {
    //   icon: <Phone className="w-6 h-6 text-pink-400" />,
    //   title: "Call Us",
    //   details: "+1 (555) 123-4567",
    // },
    {
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      title: "Visit Us",
      details: "Mumbai, India",
    },
  ]

 const handleSubmit = (e) => {
      e.preventDefault()
      const name = document.getElementById("name")?.value.trim()
      const from = document.getElementById("email")?.value.trim()
      const subject = document.getElementById("subject")?.value.trim()
      const message = document.getElementById("message")?.value.trim()

      if (!name || !from || !subject || !message) {
        alert("Please fill in all fields.")
        return
      }

      const to = "aishwaryadhanawade612@gmail.com"
      const mailSubject = `${subject} — from ${name}`
      const body = `Name: ${name}\nEmail: ${from}\n\n${message}`

      window.location.href = `mailto:${to}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`
      // Example using EmailJS for sending emails
      const serviceID = 'service_nqlei7x';
      const templateID = 'template_rtypaag';
      const userID = 'AXP1tZQ9Prof4uwQT';

      emailjs.send(serviceID, templateID, {
        from_name: name,
        from_email: from,
        subject: subject,
        message: message,
      }, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert("Failed to send message. Please try again later.");
      });
      
    }
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-black to-blue-900/20 z-[-1]" />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-6">
                {formFields.map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder={field.label}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <GlowingButton type="submit" onClick={handleSubmit}>Send Message</GlowingButton>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-gray-300">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* <div className="mt-12">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social[0]}
                    </motion.a>
                  ))}
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
