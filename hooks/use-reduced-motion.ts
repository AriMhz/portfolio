"use client"

import { useMediaQuery } from "./use-media-query"

export function useReducedMotion(): boolean {
    return useMediaQuery("(prefers-reduced-motion: reduce)")
}

export function usePrefersReducedMotion(): boolean {
    const prefersReducedMotion = useReducedMotion()
    const isMobile = useMediaQuery("(max-width: 768px)")

    // Reduce motion if user prefers it OR if on mobile device
    return prefersReducedMotion || isMobile
}
