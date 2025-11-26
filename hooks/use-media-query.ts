"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const media = window.matchMedia(query)

        // Set initial value
        setMatches(media.matches)

        // Create event listener
        const listener = (e: MediaQueryListEvent) => setMatches(e.matches)

        // Add listener (use deprecated addListener for older browsers)
        if (media.addEventListener) {
            media.addEventListener("change", listener)
        } else {
            media.addListener(listener)
        }

        // Cleanup
        return () => {
            if (media.removeEventListener) {
                media.removeEventListener("change", listener)
            } else {
                media.removeListener(listener)
            }
        }
    }, [query])

    // Return false during SSR to match server-rendered HTML
    return mounted ? matches : false
}

export function useIsMobile(): boolean {
    return useMediaQuery("(max-width: 768px)")
}

export function useIsTablet(): boolean {
    return useMediaQuery("(min-width: 769px) and (max-width: 1024px)")
}

export function useIsDesktop(): boolean {
    return useMediaQuery("(min-width: 1025px)")
}
