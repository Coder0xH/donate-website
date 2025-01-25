'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaBookReader, FaChalkboardTeacher } from 'react-icons/fa';
import { IconType } from 'react-icons';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

interface ProjectStat {
  id: string;
  value: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  stats: ProjectStat[];
}

const ProjectCard = ({ title, description, icon: Icon, stats }: Omit<Project, 'id'>) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -5 }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
    <div className="relative bg-black/90 backdrop-blur-xl rounded-xl p-8">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-teal-400/20 rounded-xl">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">{title}</h3>
      </div>
      <p className="text-zinc-400 mb-6">{description}</p>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.id} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-teal-400/50 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
            <div className="relative bg-zinc-900/80 p-4 rounded-lg">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: "school-construction",
      title: "西藏小学建设",
      description: "为西藏偏远地区建设现代化小学，提供优质教育资源。通过区块链技术，每一笔建设资金都可追踪、可验证。",
      icon: FaSchool,
      stats: [
        { id: 'donated', value: '￥210万', label: '已募集' },
        { id: 'progress', value: '75%', label: '完成度' },
        { id: 'students', value: '200+', label: '受益学生' }
      ]
    },
    {
      id: "equipment-setup",
      title: "教学设备配置",
      description: "配备现代化教学设备和丰富的图书资源，让每个孩子都能享受到优质的教育资源。",
      icon: FaBookReader,
      stats: [
        { id: 'devices', value: '100+', label: '设备数量' },
        { id: 'books', value: '1000+', label: '图书数量' },
        { id: 'coverage', value: '3所', label: '覆盖学校' }
      ]
    },
    {
      id: "teacher-training",
      title: "教师培训计划",
      description: "为当地教师提供专业培训和发展机会，提升教育质量，培养更多优秀教师。",
      icon: FaChalkboardTeacher,
      stats: [
        { id: 'teachers', value: '50+', label: '培训教师' },
        { id: 'courses', value: '12门', label: '课程数量' },
        { id: 'hours', value: '360h', label: '培训时长' }
      ]
    }
  ];

  const buildingSteps = [
    { id: 'planning', status: "完成", text: "选址和规划设计" },
    { id: 'infrastructure', status: "完成", text: "基础设施建设" },
    { id: 'main-building', status: "完成", text: "教学楼主体工程" },
    { id: 'interior', status: "进行中", text: "内部装修和设备安装" }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-teal-400/10 to-transparent" />
          <div className="absolute h-full w-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="inline-block mb-4">
              <motion.span 
                className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-400/10 border border-blue-500/20 text-blue-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                项目展示
              </motion.span>
            </motion.div>
            <motion.h1 
              className="text-6xl md:text-8xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                链上公益
              </span>
              <br />
              <span className="inline-block mt-2 text-zinc-300">
                项目追踪
              </span>
            </motion.h1>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </motion.div>

          <motion.div 
            className="mt-24"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-12 text-center">建设进度</h2>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black/90 backdrop-blur-xl rounded-xl p-8">
                <div className="space-y-8">
                  {buildingSteps.map((step, index) => (
                    <motion.div 
                      key={step.id}
                      className="relative"
                      variants={fadeInUp}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          step.status === "完成" 
                            ? "bg-gradient-to-r from-blue-500 to-teal-400" 
                            : "bg-zinc-800"
                        }`}>
                          {step.status === "完成" ? (
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-zinc-600 animate-pulse" />
                          )}
                        </div>
                        <span className={`text-lg ${
                          step.status === "完成" 
                            ? "text-white" 
                            : "text-zinc-400"
                        }`}>
                          {step.text}
                        </span>
                      </div>
                      {index < buildingSteps.length - 1 && (
                        <div className="absolute left-5 top-10 w-0.5 h-12 bg-gradient-to-b from-blue-500/50 to-teal-400/50" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="relative group aspect-w-16 aspect-h-9 overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative w-full h-full bg-black/90 backdrop-blur-xl rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-teal-400/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
