"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedSectionHeaderProps {
  title: ReactNode
  subtitle?: string
}

export function AnimatedSectionHeader({ title, subtitle }: AnimatedSectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-12 sm:mb-16 md:mb-24 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
