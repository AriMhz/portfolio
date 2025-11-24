"use client"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "../components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import GalaxyBackground from "@/components/galaxy-background"

// Dynamic import for Lenis smooth scrolling
const LenisScroll = dynamic(() => import("@/components/lenis-scroll"), { ssr: false })

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <GalaxyBackground />
      </div>
    </>
  )
}
