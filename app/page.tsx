"use client"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "../components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import GalaxyBackground from "@/components/galaxy-background"
import LenisScroll from "@/components/lenis-scroll"

export default function Home() {
  return (
    <LenisScroll>
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
    </LenisScroll>
  )
}
