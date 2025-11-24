"use client"

import { motion } from "framer-motion"
import { AnimatedSectionHeader } from "./animated-section-header"
import ProjectCard from "./project-card"
import { EcommerceMockup, RestaurantMockup, CooperativeMockup } from "./project-mockups"

export default function ProjectsSection() {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order tracking. Built with Next.js and Tailwind CSS.",
            image: "",
            visual: <EcommerceMockup />,
            tags: ["Next.js", "React", "Tailwind CSS", "Recharts"],
            link: "https://rojal604.github.io/project-5/",
            github: "https://github.com"
        },
        {
            title: "Restaurant Website",
            description: "A modern, responsive website for a fine dining restaurant with menu showcase, table reservation system, and gallery. Built with React and Supabase.",
            image: "",
            visual: <RestaurantMockup />,
            tags: ["React", "Supabase", "Tailwind CSS", "Responsive"],
            link: "https://rojal604.github.io/project-3/",
            github: "https://github.com"
        },
        {
            title: "Cooperative Business Website",
            description: "A professional corporate website for a cooperative business, featuring member portals, financial reports, and news updates. Secure and scalable.",
            image: "",
            visual: <CooperativeMockup />,
            tags: ["Next.js", "TypeScript", "PostgreSQL", "Secure Auth"],
            link: "https://rojal604.github.io/project-4/",
            github: "https://github.com"
        }
    ]

    return (
        <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <AnimatedSectionHeader
                    title="Featured Projects"
                    subtitle="A selection of my recent work showcasing my technical capabilities and design sensibilities"
                />

                <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
                    >
                        <span>View More on GitHub</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
