"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "AI Voice Support Agent",
      description: "AI-powered calling agent that automates customer support, enabling voice calls and appointment scheduling for education, healthcare, and enterprise services",
      tech: ["MCP", "LLMs", "Twilio", "SQL", "LangChain", "FastAPI", "RAG"],
      features: [
        "Automated customer support via AI-powered calling",
        "Voice-based appointment scheduling",
        "LLM integration for natural conversations",
        "Support for education, healthcare, and enterprise domains",
        "API communication and backend workflow design",
        "Production-ready AI-driven solutions"
      ],
      github: "https://github.com/veer-debug",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Match My Mansion",
      description: "AI-powered real estate analytics platform that predicts property prices and provides personalized investment recommendations using machine learning",
      tech: ["Python", "Flask", "HTML", "Tailwind CSS", "Random Forest", "Selenium", "Beautiful Soup", "MySQL"],
      features: [
        "Property price prediction using ML algorithms",
        "End-to-end ML pipeline integration",
        "Automated data extraction using Selenium and BeautifulSoup",
        "Web app development with Flask",
        "Personalized investment recommendations",
        "Real-world decision-making support"
      ],
      github: "https://github.com/veer-debug/MatchMyMansion.git",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Automated Attendance System",
      description: "AI-powered system for automated attendance tracking using computer vision and facial recognition technology",
      tech: ["Python", "OpenCV", "YOLO", "Deep Learning", "Flask"],
      features: [
        "Real-time facial recognition for attendance",
        "YOLO-based object detection",
        "Computer vision pipeline",
        "Automated attendance logging",
        "RESTful API for attendance data",
        "Support for multiple users and sessions"
      ],
      github: "https://github.com/veer-debug/Automated-Attendance-System.git",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: "RAG-Based Q&A System",
      description: "Retrieval-Augmented Generation system for intelligent question-answering using LangChain and advanced prompt engineering",
      tech: ["LangChain", "RAG", "LLMs", "Python", "Vector DB", "Prompt Engineering"],
      features: [
        "Document retrieval and augmentation",
        "LLM-powered Q&A",
        "Multi-document support",
        "Semantic search capabilities",
        "Context-aware responses",
        "Production deployment ready"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "ML Model Optimization Pipeline",
      description: "End-to-end machine learning pipeline for model development, optimization, and deployment with advanced feature engineering",
      tech: ["Scikit-Learn", "LightGBM", "XGBoost", "Python", "Pandas", "NumPy", "MLflow"],
      features: [
        "Feature engineering and data preprocessing",
        "Hyperparameter tuning optimization",
        "Model validation and cross-validation",
        "Performance metrics and visualization",
        "Model versioning and tracking",
        "Deployment to production environments"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "Computer Vision Project",
      description: "Object detection and image analysis system using YOLO, OpenCV, and advanced computer vision techniques",
      tech: ["YOLO", "OpenCV", "Python", "NumPy", "Deep Learning"],
      features: [
        "Real-time object detection",
        "Image processing and analysis",
        "Multi-class detection support",
        "Performance optimization",
        "Custom model training",
        "Visualization and reporting"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section id="projects" className="fade-in-section py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer interactive"
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, rotateY: 5 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-white/10 rounded-full text-white">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full border border-white/20"
                initial={{ scale: 0.5, rotateY: 90 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0.5, rotateY: -90 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find((p) => p.id === selectedProject)!
                  return (
                    <>
                      <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 mb-6">{project.description}</p>

                      <h4 className="text-xl font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {project.features.map((feature, index) => (
                          <li key={index} className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Github size={20} />
                          <span>View Code</span>
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:from-blue-600 hover:to-purple-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <ExternalLink size={20} />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
