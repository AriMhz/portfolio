"use client"

import { motion } from "framer-motion"
import { User, Rocket, Briefcase } from "lucide-react"
import { AnimatedSectionHeader } from "./animated-section-header"
import { FloatingElement } from "./floating-element"
import Image from "next/image"
import SplitText from "./split-text"
import CodeEditor from "./code-editor"

export default function AboutSection() {
    return (
        <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <AnimatedSectionHeader
                    title="About Me"
                    subtitle="Passionate about creating digital experiences that live on the web"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-16 sm:mt-24">
                    {/* Left side - Dynamic Visuals */}
                    <div className="relative h-[500px] w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>

                        {/* Main Card */}
                        <FloatingElement delay={0} className="relative z-10">
                            <div className="relative w-full max-w-[350px]">
                                <CodeEditor />
                            </div>
                        </FloatingElement>

                        {/* Floating Elements */}
                        <FloatingElement delay={1} className="absolute top-10 right-0 sm:-right-8 z-20">
                            <motion.div
                                className="glass px-5 py-3 rounded-2xl border border-white/10 shadow-premium hover:shadow-glow transition-all duration-300 cursor-default group"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Rocket className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Experience</p>
                                        <p className="text-sm font-bold text-foreground">2+ Years</p>
                                    </div>
                                </div>
                            </motion.div>
                        </FloatingElement>

                        <FloatingElement delay={1.5} className="absolute bottom-20 left-0 sm:-left-8 z-20">
                            <motion.div
                                className="glass px-5 py-3 rounded-2xl border border-white/10 shadow-premium hover:shadow-glow transition-all duration-300 cursor-default group"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Briefcase className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
                                        <p className="text-sm font-bold text-foreground">10+ Done</p>
                                    </div>
                                </div>
                            </motion.div>
                        </FloatingElement>

                        {/* Decorative Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                    </div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-8 relative"
                    >
                        <div className="space-y-4">
                            <SplitText
                                text="Who I Am"
                                className="text-3xl sm:text-4xl font-bold text-foreground"
                                delay={25}
                                duration={0.5}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 20 }}
                                to={{ opacity: 1, y: 0 }}
                                textAlign="left"
                            />
                            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                I'm <span className="text-foreground font-semibold">Arishan Maharjan</span>, a dedicated Frontend & Full-Stack Developer based in <span className="text-foreground font-medium">Nepal</span>.
                                I specialize in building exceptional digital experiences that are fast, accessible, and visually stunning.
                            </p>
                            <p>
                                My journey in web development is driven by a passion for creating <span className="text-primary">user-centric interfaces</span> and robust backend systems.
                                I thrive on solving complex problems and turning ideas into reality using modern technologies like
                                <span className="text-secondary"> Next.js</span>, <span className="text-accent">React</span>, and <span className="text-foreground font-medium">TypeScript</span>.
                            </p>
                            <p>
                                When I'm not coding, I'm likely exploring the latest tech trends, contributing to open-source projects, or enjoying the beautiful landscapes of Nepal.
                            </p>
                        </div>

                        <div className="pt-6 flex flex-wrap gap-4">
                            {["Frontend Development", "UI/UX Design", "Full Stack", "Performance"].map((tag, i) => (
                                <motion.span
                                    key={tag}
                                    className="px-4 py-2 rounded-full glass border border-white/5 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-premium transition-all cursor-default"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
