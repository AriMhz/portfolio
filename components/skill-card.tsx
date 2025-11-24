"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Palette, FileCode, Film, Server, Sparkles, Wrench, Zap, Database } from "lucide-react"

interface SkillCardProps {
  skill: {
    name: string
    level: number
    category: string
    color: string
    icon: string
  }
  index: number
}

// Map icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  "⚛️": <Code2 className="w-full h-full" />,
  "🎨": <Palette className="w-full h-full" />,
  "📘": <FileCode className="w-full h-full" />,
  "🎬": <Film className="w-full h-full" />,
  "🚀": <Server className="w-full h-full" />,
  "✨": <Sparkles className="w-full h-full" />,
  "🛠️": <Wrench className="w-full h-full" />,
  "⚡": <Zap className="w-full h-full" />,
  "🗄️": <Database className="w-full h-full" />,
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const currentLevel = skill.level
  const IconComponent = iconMap[skill.icon] || <Code2 className="w-full h-full" />

  return (
    <motion.div
      className="group relative p-6 rounded-2xl glass border border-white/5 overflow-hidden transition-colors duration-500 hover:border-primary/20 shadow-premium hover:shadow-glow cursor-default"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover="hover"
      style={{ willChange: "transform, opacity" }}
    >
      <motion.div
        variants={{
          hover: { y: -8, scale: 1.02 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute inset-0 z-0"
      />

      {/* Hover Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`
        }}
      ></div>

      {/* Background Icon */}
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
        <div
          className="text-6xl transition-all duration-500"
          style={{ color: skill.color }}
        >
          {IconComponent}
        </div>
      </div>

      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        <div className="mb-4">
          <motion.div
            className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-3 transition-colors duration-500"
            variants={{
              hover: {
                scale: 1.1,
                rotate: 5,
                borderColor: `${skill.color}40`,
                backgroundColor: `${skill.color}15`
              }
            }}
            style={{
              borderColor: 'rgba(255,255,255,0.1)',
              backgroundColor: 'rgba(255,255,255,0.05)'
            }}
          >
            <div style={{ color: skill.color }} className="w-7 h-7">
              {IconComponent}
            </div>
          </motion.div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {skill.name}
          </h3>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
            {skill.category}
          </p>
        </div>

        <div className="mt-auto pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-muted-foreground">Proficiency</span>
            <motion.span
              className="text-xs font-bold"
              style={{ color: skill.color }}
              variants={{
                hover: { scale: 1.1 }
              }}
            >
              {currentLevel}%
            </motion.span>
          </div>
          <div className="h-2 w-full bg-muted/30 dark:bg-white/5 rounded-full overflow-hidden border border-border/20">
            <motion.div
              className="h-full rounded-full relative"
              style={{
                background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}dd 100%)`
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + index * 0.05 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${skill.color}40 50%, transparent 100%)`,
                  animation: 'shimmer 2s infinite linear'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
