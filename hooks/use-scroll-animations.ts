"use client"

import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function useScrollAnimations() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1])

  return { containerRef, opacity, y, scale, scrollYProgress }
}

export function useParallax(offset = 50) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return { ref, y }
}
