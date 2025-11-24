"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function Footer() {
    return (
        <footer className="relative py-8 overflow-hidden">
            {/* Background Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
                <motion.div
                    className="flex items-center gap-2 text-sm sm:text-base font-medium text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                >
                    <span>Powered by</span>

                    <motion.a
                        href="https://www.facebook.com/nepaetechno"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 hover:border-primary/50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Animated Glow Background */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-xy"></div>

                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />

                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-bold tracking-wide group-hover:tracking-wider transition-all duration-300">
                            NEPA E-Techno Center
                        </span>
                    </motion.a>
                </motion.div>

                <motion.p
                    className="text-xs text-muted-foreground/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    © {new Date().getFullYear()} All rights reserved.
                </motion.p>
            </div>
        </footer>
    )
}
