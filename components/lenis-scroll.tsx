"use client"

import type React from "react"
import { useEffect } from "react"

export default function LenisScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Import Lenis dynamically to avoid SSR issues
    let lenis: any = null

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.5,
        infinite: false,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    })

    return () => {
      if (lenis) {
        lenis.destroy()
      }
    }
  }, [])

  return <>{children}</>
}
