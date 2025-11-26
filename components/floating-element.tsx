"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion"

interface FloatingElementProps {
  children: ReactNode
  duration?: number
  delay?: number
  className?: string
}

export function FloatingElement({ children, duration = 3, delay = 0, className = "" }: FloatingElementProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  // Disable animation on mobile or when user prefers reduced motion
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
        x: [-2, 2, -2],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}
