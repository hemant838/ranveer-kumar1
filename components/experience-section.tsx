"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, TrendingUp } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Octro Inc.",
      role: "Artificial Intelligence Intern",
      duration: "Jul 2025 - Present · 6 mos",
      location: "Noida, Uttar Pradesh, India · On-site",
      description:
        "Worked on LLM-powered features, RAG pipelines and production AI components for game analytics and automation.",
      achievements: [
        "Built LLM-based analytics and RAG retrieval components",
        "Automated game testing flows using Python and vision models",
        "Integrated OCR and object-detection for in-game telemetry",
      ],
      tech: ["Python", "LLMs", "LangChain", "RAG", "YOLO", "OCR"],
      color: "from-purple-500 to-pink-500",
    },
    {
      company: "SMA (The Program Lifecycle Company)",
      role: "Artificial Intelligence Intern",
      duration: "Apr 2025 - Jul 2025 · 4 mos",
      location: "California, United States · Remote",
      description:
        "Developed autonomous AI agents and production-ready RAG systems; implemented automated support/response pipelines using LLMs and messaging integrations.",
      achievements: [
        "Implemented agent-based automation for customer workflows",
        "Built RAG-backed support assistant reducing manual handling",
        "Worked on prompt engineering and end-to-end agent orchestration",
      ],
      tech: ["Python", "AI Agents", "LangChain", "RAG", "LLMs"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      company: "Damsonic",
      role: "AI Intern",
      duration: "Jan 2025 - Jun 2025 · 6 mos",
      location: "Begusarai, Bihar, India · Remote",
      description:
        "Worked on applied ML and data science tasks including feature engineering, model training and evaluation for production use-cases.",
      achievements: [
        "Delivered improvements to model accuracy through feature engineering",
        "Built evaluation pipelines and reproducible training scripts",
      ],
      tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow"],
      color: "from-green-500 to-emerald-500",
    },
    {
      company: "Sabudh Foundation",
      role: "Data Science Intern",
      duration: "Jul 2024 - Dec 2024 · 6 mos",
      location: "Punjab, India · Remote",
      description:
        "Worked on data pipelines, feature engineering and ML models for social-impact datasets; responsible for end-to-end data processing and visualization.",
      achievements: [
        "Built feature engineering pipelines for large datasets",
        "Produced visualizations and insights used by stakeholders",
      ],
      tech: [
        "Feature Engineering",
        "Machine Learning",
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
      ],
      color: "from-amber-500 to-yellow-500",
    },
    {
      company: "Alphanumeric Ideas",
      role: "Web Development Intern",
      duration: "Jun 2023 - Aug 2023 · 3 mos",
      location: "Mohali district, India · On-site",
      description: "Worked on frontend and small backend tasks; improved UI and implemented algorithmic features.",
      achievements: ["Delivered frontend components and assisted with backend integration"],
      tech: ["HTML", "CSS", "JavaScript", "Algorithms", "Communication"],
      color: "from-gray-500 to-slate-500",
    },
  ]

  const leadership = [
    {
      role: "NCC B Certificate Holder",
      organization: "National Cadet Corps",
      duration: "2021 - Present",
      description: "NCC 'B' grade certificate holder with excellence in physical training and discipline",
    },
    {
      role: "Codeforces Pupil",
      organization: "Codeforces",
      duration: "Ongoing",
      description: "Achieved maximum rating of 1374 (Pupil) on Codeforces competitive programming platform",
    },
  ]

  return (
    <section className="fade-in-section py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-white">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative interactive"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white mb-2">{exp.role}</h4>
                        <h5 className="text-xl text-blue-400 mb-2">{exp.company}</h5>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                      </div>
                      <div className="flex flex-col lg:items-end lg:text-right">
                        <div className="flex items-center lg:justify-end text-gray-400 mb-2">
                          <Calendar size={16} className="mr-2 flex-shrink-0" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center lg:justify-end text-gray-400">
                          <MapPin size={16} className="mr-2 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h6 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <TrendingUp size={18} className="mr-2 text-green-400" />
                        Key Achievements
                      </h6>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                          >
                            <span className="text-green-400 mr-2 mt-1">•</span>
                            {achievement}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-sm bg-white/10 rounded-full text-white"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-white">Leadership & Responsibilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((role, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 interactive"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <h4 className="text-xl font-bold text-white mb-2">{role.role}</h4>
                <h5 className="text-purple-400 mb-2">{role.organization}</h5>
                <p className="text-gray-400 text-sm mb-3">{role.duration}</p>
                <p className="text-gray-300">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
