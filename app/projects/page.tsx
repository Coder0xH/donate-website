'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaBookReader, FaChalkboardTeacher } from 'react-icons/fa';

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
  icon: any;
  stats: ProjectStat[];
}

const ProjectCard = ({ title, description, icon: Icon, stats, id }: Project) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-dark-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div key={stat.id} className="bg-gray-50 dark:bg-dark-200 p-3 rounded-xl">
          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: "school-construction",
      title: "西藏小学建设",
      description: "为西藏偏远地区建设现代化小学，提供优质教育资源",
      icon: FaSchool,
      stats: [
        { id: 'donated', value: '￥210万', label: '已募集' },
        { id: 'students', value: '200+', label: '受益学生' },
        { id: 'projects', value: '3', label: '进行中项目' }
      ]
    },
    {
      id: "equipment-setup",
      title: "教学设备配置",
      description: "配备现代化教学设备和丰富的图书资源",
      icon: FaBookReader,
      stats: [
        { id: 'donated', value: '￥210万', label: '已募集' },
        { id: 'students', value: '200+', label: '受益学生' },
        { id: 'projects', value: '3', label: '进行中项目' }
      ]
    },
    {
      id: "teacher-training",
      title: "教师培训计划",
      description: "为当地教师提供专业培训和发展机会",
      icon: FaChalkboardTeacher,
      stats: [
        { id: 'donated', value: '￥210万', label: '已募集' },
        { id: 'students', value: '200+', label: '受益学生' },
        { id: 'projects', value: '3', label: '进行中项目' }
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
    <div className="min-h-screen bg-white dark:bg-dark pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-primary-400/5 dark:from-primary-600/10 dark:to-primary-400/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30 dark:opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            项目展示
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            variants={fadeInUp}
          >
            通过区块链技术的透明化管理，每一笔捐赠都被妥善利用
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          className="mt-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">建设进度</h2>
          <div className="bg-white dark:bg-dark-100 rounded-2xl p-8 shadow-lg">
            <div className="space-y-8">
              {buildingSteps.map((step) => (
                <motion.div 
                  key={step.id}
                  className="flex items-center space-x-4"
                  variants={fadeInUp}
                >
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    step.status === "完成" ? "bg-primary-500" : "bg-gray-300 dark:bg-gray-700"
                  }`}>
                    {step.status === "完成" ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600" />
                    )}
                  </div>
                  <span className={`text-lg ${
                    step.status === "完成" 
                      ? "text-gray-900 dark:text-white" 
                      : "text-gray-500 dark:text-gray-400"
                  }`}>
                    {step.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-dark-200 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* 这里添加实际的项目照片 */}
              <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-primary-600/20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
