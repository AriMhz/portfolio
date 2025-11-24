"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function GalaxyBackground() {
  const containerRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = containerRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrameId: number
    let lastTime = 0
    const fps = 30 // Limit to 30fps for better performance
    const fpsInterval = 1000 / fps

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate)

      const elapsed = currentTime - lastTime
      if (elapsed < fpsInterval) return

      lastTime = currentTime - (elapsed % fpsInterval)
      const time = currentTime * 0.0001

      if (theme === 'light') {
        // Light mode: Soft gradient background
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Layer 1: Soft blue gradient
        const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient1.addColorStop(0, `rgba(238, 242, 255, ${0.8 + Math.sin(time) * 0.1})`)
        gradient1.addColorStop(0.5, `rgba(224, 231, 255, ${0.6 + Math.sin(time + 1) * 0.1})`)
        gradient1.addColorStop(1, `rgba(241, 245, 249, ${0.7 + Math.sin(time + 2) * 0.1})`)
        ctx.fillStyle = gradient1
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Layer 2: Subtle purple accent
        const centerX = canvas.width * (0.5 + Math.sin(time * 0.5) * 0.1)
        const centerY = canvas.height * (0.5 + Math.cos(time * 0.4) * 0.1)
        const gradient2 = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          Math.max(canvas.width, canvas.height) * 0.6,
        )
        gradient2.addColorStop(0, `rgba(199, 210, 254, ${0.3 + Math.sin(time * 0.7) * 0.1})`)
        gradient2.addColorStop(0.5, `rgba(221, 214, 254, ${0.2 + Math.sin(time * 0.6) * 0.08})`)
        gradient2.addColorStop(1, "rgba(255, 255, 255, 0)")
        ctx.fillStyle = gradient2
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Layer 3: Soft cyan accent
        const gradient3 = ctx.createLinearGradient(canvas.width, 0, 0, canvas.height)
        gradient3.addColorStop(0, `rgba(224, 242, 254, ${0.2 + Math.sin(time * 0.8) * 0.05})`)
        gradient3.addColorStop(1, "rgba(255, 255, 255, 0)")
        ctx.fillStyle = gradient3
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      } else {
        // Dark mode: Galaxy effect
        // Base black background
        ctx.fillStyle = "#000000"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Layer 1: Deep blue veil (simplified)
        const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient1.addColorStop(0, `rgba(0, 20, 40, ${0.3 + Math.sin(time) * 0.1})`)
        gradient1.addColorStop(1, `rgba(0, 40, 80, ${0.2 + Math.sin(time + 2) * 0.08})`)
        ctx.fillStyle = gradient1
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Layer 2: Cyan veil (optimized)
        const centerX = canvas.width * (0.5 + Math.sin(time * 0.5) * 0.2)
        const centerY = canvas.height * (0.5 + Math.cos(time * 0.4) * 0.2)
        const gradient2 = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          Math.max(canvas.width, canvas.height) * 0.7,
        )
        gradient2.addColorStop(0, `rgba(0, 212, 255, ${0.15 + Math.sin(time * 0.7) * 0.05})`)
        gradient2.addColorStop(1, "rgba(0, 102, 255, 0.05)")
        ctx.fillStyle = gradient2
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Layer 3: Purple accent (simplified)
        const gradient3 = ctx.createLinearGradient(0, canvas.height, canvas.width, 0)
        gradient3.addColorStop(0, `rgba(99, 102, 241, ${0.1 + Math.sin(time * 0.8) * 0.05})`)
        gradient3.addColorStop(1, "rgba(0, 212, 255, 0.05)")
        ctx.fillStyle = gradient3
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }

    animate(0)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={containerRef} className="absolute inset-0 w-full h-full" style={{ willChange: 'transform' }} />
}
