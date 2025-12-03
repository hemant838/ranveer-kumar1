"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const ctx = gsap.context(() => {
        // Skills animation
        gsap.fromTo(
          ".skill-bubble",
          { scale: 0, rotation: 180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
        )
      })

      return () => ctx.revert()
    }
  }, [isInView])

  const skills = [
    "Python",
    "JavaScript",
    "C/C++",
    "SQL",
    "Linux",
    "VS Code",
    "Jupyter",
    "Colab",
    "RAG",
    "LangChain",
    "LangGraph",
    "AI Agents",
    "Computer Vision",
    "YOLO",
    "Scikit-Learn",
    "PySpark",
    "NumPy",
    "Pandas",
    "FastAPI",
    "Flask",
    "Streamlit",
    "Authentication",
    "JWT",
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Machine Learning",
    "Deep Learning",
    "API Development",
    "Data Visualization",
    "Data Processing",
    "Docker",
    "Celery",
    "MLflow",
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
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="skill-bubble p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 text-center interactive"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-white font-medium">{skill}</div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { label: "Projects", value: "6+" },
            { label: "Experience", value: "1 Year" },
            { label: "Technologies", value: "15+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
