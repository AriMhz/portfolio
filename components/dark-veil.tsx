"use client"

import { useIsMobile } from "@/hooks/use-media-query"

export default function DarkVeil() {
  const isMobile = useIsMobile()

  return (
    <div className="absolute inset-0 overflow-hidden transition-opacity duration-500 ease-in-out opacity-0 dark:opacity-100 pointer-events-none">
      {/* Base dark veil background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Animated gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-purple-900/20 animate-pulse"></div>

      {/* Floating orbs - reduced on mobile */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
      {!isMobile && (
        <>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </>
      )}

      {/* Mesh grid effect */}
      <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-400" />
      </svg>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black"></div>
    </div>
  )
}
