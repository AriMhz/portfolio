"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SplitTextProps {
    text: string
    className?: string
    delay?: number
    duration?: number
    ease?: string
    splitType?: "chars" | "words" | "lines"
    from?: {
        opacity?: number
        y?: number
        x?: number
        scale?: number
        rotation?: number
    }
    to?: {
        opacity?: number
        y?: number
        x?: number
        scale?: number
        rotation?: number
    }
    threshold?: number
    rootMargin?: string
    textAlign?: "left" | "center" | "right"
    onLetterAnimationComplete?: () => void
}

export default function SplitText({
    text,
    className = "",
    delay = 0,
    duration = 0.6,
    ease = "power3.out",
    splitType = "chars",
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = "-100px",
    textAlign = "left",
    onLetterAnimationComplete,
}: SplitTextProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const elements = container.querySelectorAll(`.split-${splitType}`)

        // Set initial state
        gsap.set(elements, from)

        // Create animation with ScrollTrigger - replays on scroll
        const animation = gsap.to(elements, {
            ...to,
            duration,
            ease,
            stagger: delay / 1000,
            scrollTrigger: {
                trigger: container,
                start: `top 85%`,
                toggleActions: "play reverse play reverse",
                fastScrollEnd: true,
            },
            onComplete: () => {
                if (onLetterAnimationComplete) {
                    onLetterAnimationComplete()
                }
            },
        })

        return () => {
            animation.kill()
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [text, delay, duration, ease, splitType, from, to, threshold, rootMargin, onLetterAnimationComplete])

    const splitText = () => {
        if (splitType === "chars") {
            return text.split("").map((char, index) => (
                <span
                    key={index}
                    className="split-chars inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))
        } else if (splitType === "words") {
            return text.split(" ").map((word, index) => (
                <span key={index} className="split-words inline-block mr-2">
                    {word}
                </span>
            ))
        } else {
            // lines
            return text.split("\n").map((line, index) => (
                <span key={index} className="split-lines block">
                    {line}
                </span>
            ))
        }
    }

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ textAlign }}
        >
            {splitText()}
        </div>
    )
}
