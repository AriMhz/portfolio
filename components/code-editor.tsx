"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function CodeEditor() {
    const [text, setText] = useState("")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    const fullText = `const developer = {
  name: "Arishan",
  role: "Full Stack Dev",
  location: "Nepal",
  passion: "Building digital experiences",
  skills: ["React", "Next.js", "Node.js"],
  hardWorker: true,
  quickLearner: true,
  hireable: function() {
    return this.hardWorker && this.quickLearner;
  }
};`

    useEffect(() => {
        // Reset text when coming into view
        setText("")

        let currentIndex = 0
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(interval)
            }
        }, 30)

        return () => clearInterval(interval)
    }, [isInView])

    // Simple syntax highlighting helper
    const highlightSyntax = (code: string) => {
        return code.split(/(\s+|[{},:;[\]])/g).map((token, i) => {
            if (token.match(/^".*"$/)) return <span key={i} className="text-green-400">{token}</span>
            if (token === "const" || token === "function" || token === "return" || token === "this") return <span key={i} className="text-purple-400">{token}</span>
            if (token === "true" || token === "false") return <span key={i} className="text-orange-400">{token}</span>
            if (token.match(/^[a-zA-Z0-9_]+:$/)) return <span key={i} className="text-blue-400">{token}</span>
            return <span key={i} className="text-gray-300">{token}</span>
        })
    }

    return (
        <div ref={ref} className="w-full h-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 font-mono text-xs sm:text-sm relative group">
            {/* Window Controls */}
            <div className="h-8 bg-[#252526] flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-xs text-gray-500">about-me.ts</div>
            </div>

            {/* Code Area */}
            <div className="p-4 overflow-hidden h-[calc(100%-2rem)]">
                <div className="flex">
                    {/* Line Numbers */}
                    <div className="flex flex-col text-right pr-4 text-gray-600 select-none border-r border-white/5 mr-4">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <span key={i} className="leading-6">{i + 1}</span>
                        ))}
                    </div>

                    {/* Code Content */}
                    <pre className="font-mono leading-6 whitespace-pre-wrap">
                        <code>
                            {highlightSyntax(text)}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-2 h-4 bg-blue-400 align-middle ml-1"
                            />
                        </code>
                    </pre>
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    )
}
