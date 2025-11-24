"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface ContactFormProps {
  isInView: boolean
}

export default function ContactForm({ isInView }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setLoading(false)

      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  const inputFields = [
    { label: "Your Name", name: "name", type: "text", required: true },
    { label: "Your Email", name: "email", type: "email", required: true },
    { label: "Subject", name: "subject", type: "text", required: true },
  ]

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass p-6 sm:p-8 rounded-2xl border border-primary/20 space-y-4 sm:space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      {submitted ? (
        <motion.div
          className="text-center py-8 sm:py-12 space-y-3 sm:space-y-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-4xl sm:text-5xl">✓</div>
          <h3 className="text-lg sm:text-xl font-bold text-secondary">Thank you!</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Your message has been sent successfully. I'll get back to you soon!
          </p>
        </motion.div>
      ) : (
        <>
          {inputFields.map((field, i) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                required={field.required}
                className="w-full bg-card border border-primary/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary/50 transition-colors text-sm sm:text-base"
                placeholder={`Enter your ${field.label.toLowerCase()}`}
              />
            </motion.div>
          ))}

          {/* Message field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.54 }}
          >
            <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-card border border-primary/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary/50 transition-colors resize-none text-sm sm:text-base"
              rows={5}
              placeholder="Tell me about your project..."
            />
          </motion.div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-3 sm:py-4 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.62 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </>
      )}
    </motion.form>
  )
}
