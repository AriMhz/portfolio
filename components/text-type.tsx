"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface TextTypeProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export default function TextType({ text, className = "", speed = 100, delay = 0 }: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)

  // Intersection Observer to detect when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            // Reset when scrolling out of view
            setIsVisible(false)
            setDisplayedText("")
            setHasAnimated(false)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Typing animation effect
  useEffect(() => {
    if (!isVisible || hasAnimated) return

    let index = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
          setHasAnimated(true)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, speed, delay, isVisible, hasAnimated])

  return (
    <span ref={containerRef} className={className}>
      {displayedText}
      {displayedText.length < text.length && (
        <motion.span
          className="inline-block w-0.5 h-6 bg-primary ml-1 align-text-top"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
        />
      )}
    </span>
  )
}
