'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaTelegram } from 'react-icons/fa'
import { SiSpring, SiCloudfoundry, SiNextdotjs, SiVite, SiSolana } from 'react-icons/si'
import { PiPianoKeysFill, PiPaintBrushBold } from 'react-icons/pi'

export default function About() {
  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          duration: 0.3
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      }
    },
    glow: {
      initial: { opacity: 0.7 },
      animate: {
        opacity: [0.7, 1, 0.7],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }
      }
    }
  }

  const skills = {
    technical: [
      {
        icon: <SiSpring className="w-6 h-6" />,
        name: "Spring Boot",
        category: "Backend Framework",
        color: "text-green-400"
      },
      {
        icon: <SiCloudfoundry className="w-6 h-6" />,
        name: "Foundry",
        category: "Smart Contract Development",
        color: "text-yellow-400"
      },
      {
        icon: <SiNextdotjs className="w-6 h-6" />,
        name: "Next.js",
        category: "Frontend Framework",
        color: "text-white"
      },
      {
        icon: <SiVite className="w-6 h-6" />,
        name: "Vite",
        category: "Build Tool",
        color: "text-purple-400"
      },
      {
        icon: <SiSolana className="w-6 h-6" />,
        name: "Anchor",
        category: "Solana Development",
        color: "text-blue-400"
      }
    ],
    artistic: [
      {
        icon: <PiPianoKeysFill className="w-8 h-8" />,
        title: "Piano Performance",
        level: "Level 10 Certification",
        description: "Advanced certification in piano performance, specializing in classical music interpretation and composition."
      },
      {
        icon: <PiPaintBrushBold className="w-8 h-8" />,
        title: "Visual Arts",
        level: "Professional Artist",
        description: "Skilled in drawing and sketching, focusing on detailed artistic expression and creative visualization."
      }
    ]
  }

  const projects = [
    {
      id: 1,
      title: "Infa Labs Website",
      role: "Lead Developer",
      tech: "Three.js, React",
      description: "Corporate website with immersive 3D visualizations",
      link: "https://infalabs.io/",
      linkText: "View Project"
    },
    {
      id: 2,
      title: "MemeJump GameFi",
      role: "Full Stack Developer",
      tech: "Web3, Telegram Bot API",
      description: "Play-to-Earn gaming platform integrated with Telegram",
      link: "https://t.me/memejump_bot/memejump?startapp=GZEMUAGT",
      linkText: "Try Game"
    }
  ]

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="min-h-screen py-24 px-4 flex items-center justify-center">
        <motion.div
          variants={animations.container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto w-full"
        >
          {/* Hero Section */}
          <motion.section className="text-center mb-24" variants={animations.item}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Dexter Ellis
            </h1>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-2xl md:text-3xl text-gray-300">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-purple-400">developer</span>
                <span className="text-gray-400">(</span>
                <span className="text-orange-400">&ldquo;blockchain&rdquo;</span>
                <span className="text-gray-400">)</span>{" "}
                <span className="text-blue-400">extends</span>{" "}
                <span className="text-purple-400">artist</span>
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Coder0xH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-800/30 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://t.me/memejump_bot/memejump?startapp=GZEMUAGT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-800/30 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <FaTelegram className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.section>

          {/* Technical Skills Grid */}
          <motion.section className="mb-24" variants={animations.item}>
            <h2 className="text-3xl font-bold text-center mb-12 font-mono">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Technical.expertise()
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.technical.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group relative p-6 rounded-xl border border-gray-700/50 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  variants={animations.glow}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`p-3 rounded-lg group-hover:bg-gray-700/50 ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <div className="text-center">
                      <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                      <p className="text-xs text-gray-400">{skill.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Artistic Skills */}
          <motion.section className="mb-24" variants={animations.item}>
            <h2 className="text-3xl font-bold text-center mb-12 font-mono">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Artistic.talents()
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.artistic.map((skill, index) => (
                <motion.div
                  key={skill.title || index}
                  className="relative p-6 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900/40"
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg group-hover:bg-gray-800/30">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-200 mb-1">
                        {skill.title}
                      </h3>
                      <p className="text-blue-400 mb-3">{skill.level}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Featured Projects */}
          <motion.section variants={animations.item}>
            <h2 className="text-3xl font-bold text-center mb-12 font-mono">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Projects.showcase()
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id || project.title}
                  className="group relative p-6 rounded-xl border border-gray-700/50 bg-gradient-to-br from-slate-900 via-gray-900 to-purple-900/40 overflow-hidden"
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl font-semibold text-gray-200 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 text-sm mb-2">{project.role}</p>
                  <p className="text-purple-400 text-sm mb-3">{project.tech}</p>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>{project.linkText}</span>
                    <span>→</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
