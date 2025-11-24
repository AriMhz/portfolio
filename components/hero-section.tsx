"use client"

import { useRef } from "react"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import { Code2, Zap, Server } from "lucide-react"
import DarkVeil from "./dark-veil"
import TextType from "./text-type"
import { FloatingElement } from "./floating-element"
import ggImage from "@/app/assets/GG.png"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-32"
    >
      <DarkVeil />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 z-10 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-8 sm:space-y-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.div custom={0} variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                  Available for work
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                  <span className="block text-foreground">Hi, I'm</span>
                  <TextType
                    text="Arishan"
                    className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                    speed={100}
                    delay={500}
                  />
                </h1>
              </motion.div>

              <motion.div custom={1} variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground">
                  <span className="text-foreground">Full-Stack Developer</span> & UI Designer
                </h2>
              </motion.div>

              <motion.p
                custom={2}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                Crafting exceptional digital experiences with modern technologies.
                Specializing in building scalable applications with <span className="text-primary font-medium">Next.js</span>,
                <span className="text-secondary font-medium"> React</span>, and
                <span className="text-accent font-medium"> Node.js</span>.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              custom={3}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold overflow-hidden text-center min-w-[160px]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shadow-glow" />
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-4 rounded-full border border-primary/20 bg-primary/5 text-foreground font-semibold hover:bg-primary/10 transition-all hover:border-primary/50 text-center min-w-[160px] backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Work
              </motion.a>
            </motion.div>


          </motion.div>

          {/* Right side - Enhanced Visual */}
          <motion.div
            className="relative h-[500px] hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-[100px] opacity-50"></div>

            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main Profile Card */}
              <FloatingElement delay={0}>
                <div className="relative w-80 h-96 glass rounded-3xl p-4 border border-white/10 overflow-hidden group shadow-premium">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative h-full w-full rounded-2xl overflow-hidden bg-black/40">
                    <Image
                      src={ggImage}
                      alt="Arishan Maharjan"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                  </div>
                </div>
              </FloatingElement>

              {/* Floating Tech Badges with Icons */}
              <FloatingElement delay={1} className="absolute top-20 right-10">
                <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 shadow-premium hover:shadow-glow transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-foreground">React</span>
                </div>
              </FloatingElement>

              <FloatingElement delay={2} className="absolute bottom-32 -left-4">
                <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 shadow-premium hover:shadow-glow transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Next.js</span>
                </div>
              </FloatingElement>

              <FloatingElement delay={1.5} className="absolute top-1/2 -right-8">
                <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 shadow-premium hover:shadow-glow transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Server className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Node.js</span>
                </div>
              </FloatingElement>

              {/* Code snippet decoration */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-40 glass rounded-xl p-4 opacity-60 rotate-6 border border-white/5">
                <div className="space-y-2">
                  <div className="h-2 w-20 bg-primary/30 rounded"></div>
                  <div className="h-2 w-32 bg-secondary/20 rounded"></div>
                  <div className="h-2 w-24 bg-accent/20 rounded"></div>
                  <div className="h-2 w-28 bg-primary/20 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2 group">
          <p className="text-xs text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">Scroll</p>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 group-hover:border-primary transition-colors rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full group-hover:h-3 transition-all"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
