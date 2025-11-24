"use client"

import { motion } from "framer-motion"
import SkillCard from "./skill-card"
import { AnimatedSectionHeader } from "./animated-section-header"
import SplitText from "./split-text"

export default function SkillsSection() {


  const skills = [
    {
      name: "React & Next.js",
      level: 95,
      category: "Frontend",
      color: "#61DAFB",
      icon: "⚛️"
    },
    {
      name: "CSS3 & Tailwind",
      level: 90,
      category: "Styling",
      color: "#38B2AC",
      icon: "🎨"
    },
    {
      name: "TypeScript",
      level: 92,
      category: "Languages",
      color: "#3178C6",
      icon: "📘"
    },
    {
      name: "Database Management",
      level: 88,
      category: "Backend",
      color: "#336791",
      icon: "🗄️"
    },
    {
      name: "Node.js & APIs",
      level: 85,
      category: "Backend",
      color: "#68A063",
      icon: "🚀"
    },
    {
      name: "UI/UX Design",
      level: 80,
      category: "Design",
      color: "#F24E1E",
      icon: "✨"
    },
    {
      name: "Git & DevOps",
      level: 85,
      category: "Tools",
      color: "#F05032",
      icon: "🛠️"
    },
    {
      name: "Performance",
      level: 90,
      category: "Optimization",
      color: "#FFD700",
      icon: "⚡"
    },
  ]

  return (
    <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <SplitText
            text="Skills & Expertise"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            delay={30}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30, scale: 0.9 }}
            to={{ opacity: 1, y: 0, scale: 1 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            A comprehensive set of technical skills developed through years of hands-on experience
          </motion.p>
        </div>

        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
