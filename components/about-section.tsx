"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const ctx = gsap.context(() => {
        // Timeline animation
        gsap.fromTo(
          ".timeline-item",
          { opacity: 0, x: -100, rotationY: 90 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
          },
        )
      })

      return () => ctx.revert()
    }
  }, [isInView])

  const timeline = [
    { year: "2021", event: "Started BTech in Computer Science at SBSSU", type: "education" },
    { year: "2023", event: "Secured 3rd in NCC Inter-Group Sport Shooting Competition", type: "achievement" },
    { year: "2025", event: "AI Engineer Intern at Octro Inc.", type: "experience" },
    { year: "2025", event: "AI/ML Intern at TOD-SMA (Remote, US)", type: "experience" },
    { year: "2025", event: "Graduating with BTech in Computer Science (CGPA: 7.5)", type: "education" },
  ]

  return (
    <section ref={sectionRef} className="fade-in-section py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div ref={timelineRef} className="space-y-8">
            <h3 className="text-3xl font-semibold mb-8 text-white">My Journey</h3>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    item.type === "education"
                      ? "bg-blue-500"
                      : item.type === "experience"
                        ? "bg-green-500"
                        : "bg-purple-500"
                  }`}
                />
                <div>
                  <div className="text-sm text-gray-400">{item.year}</div>
                  <div className="text-white font-medium">{item.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
