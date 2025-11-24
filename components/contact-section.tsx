"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react"
import ContactForm from "./contact-form"
import { AnimatedSectionHeader } from "./animated-section-header"

export default function ContactSection() {
  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: "9762274710",
      href: "tel:9762274710",
      color: "#10b981"
    },
    {
      icon: Mail,
      label: "Email",
      value: "arimhz2004@gmail.com",
      href: "mailto:arimhz2004@gmail.com",
      color: "#6366f1"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nepal",
      href: "#",
      color: "#0ea5e9"
    },
  ]

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <AnimatedSectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind? Let's create something amazing together. Feel free to reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-16 sm:mt-24">
          {/* Contact details */}
          <motion.div
            className="space-y-8 sm:space-y-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Let's Talk</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                I'm currently available for freelance projects and open to full-time opportunities.
                If you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((detail, i) => {
                const IconComponent = detail.icon
                return (
                  <motion.a
                    key={detail.label}
                    href={detail.href}
                    className="glass p-5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group block shadow-premium hover:shadow-glow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                        style={{
                          backgroundColor: `${detail.color}20`,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent
                          className="w-5 h-5 transition-transform"
                          style={{ color: detail.color }}
                        />
                      </motion.div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{detail.label}</p>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social links */}
            <motion.div
              className="pt-4 space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Follow me on</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 glass rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden transition-all hover:border-primary/50 shadow-premium hover:shadow-glow"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Github className="w-7 h-7 text-foreground group-hover:text-primary transition-colors relative z-10" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 glass rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden transition-all hover:border-secondary/50 shadow-premium hover:shadow-glow"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Linkedin className="w-7 h-7 text-foreground group-hover:text-secondary transition-colors relative z-10" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl blur-xl -z-10"></div>
            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 shadow-premium">
              <ContactForm isInView={true} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
