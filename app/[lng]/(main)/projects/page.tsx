'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaBookReader, FaChalkboardTeacher } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useTranslation } from '@/app/i18n/client';

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

interface ProjectCardProps extends Omit<Project, 'id'> {
  lng: string;
}

const ProjectCard = ({ title, description, icon: Icon, stats }: ProjectCardProps) => (
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
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div key={stat.id} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-teal-400/50 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
            <div className="relative bg-zinc-900/80 p-3 rounded-lg">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);



export default  function ProjectsPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = React.use(params);
  const { t } = useTranslation(lng, 'common');

  const projects: Project[] = [
    {
      id: "school-construction",
      title: t('projects.schoolConstruction.title'),
      description: t('projects.schoolConstruction.description'),
      icon: FaSchool,
      stats: [
        { 
          id: 'donated', 
          value: t('projects.schoolConstruction.stats.donated.value'), 
          label: t('projects.schoolConstruction.stats.donated.label')
        },
        { 
          id: 'progress', 
          value: t('projects.schoolConstruction.stats.progress.value'), 
          label: t('projects.schoolConstruction.stats.progress.label')
        },
        { 
          id: 'students', 
          value: t('projects.schoolConstruction.stats.students.value'), 
          label: t('projects.schoolConstruction.stats.students.label')
        }
      ]
    },
    {
      id: "equipment-setup",
      title: t('projects.equipmentSetup.title'),
      description: t('projects.equipmentSetup.description'),
      icon: FaBookReader,
      stats: [
        { 
          id: 'devices', 
          value: t('projects.equipmentSetup.stats.devices.value'), 
          label: t('projects.equipmentSetup.stats.devices.label')
        },
        { 
          id: 'books', 
          value: t('projects.equipmentSetup.stats.books.value'), 
          label: t('projects.equipmentSetup.stats.books.label')
        },
        { 
          id: 'coverage', 
          value: t('projects.equipmentSetup.stats.coverage.value'), 
          label: t('projects.equipmentSetup.stats.coverage.label')
        }
      ]
    },
    {
      id: "teacher-training",
      title: t('projects.teacherTraining.title'),
      description: t('projects.teacherTraining.description'),
      icon: FaChalkboardTeacher,
      stats: [
        { 
          id: 'teachers', 
          value: t('projects.teacherTraining.stats.teachers.value'), 
          label: t('projects.teacherTraining.stats.teachers.label')
        },
        { 
          id: 'courses', 
          value: t('projects.teacherTraining.stats.courses.value'), 
          label: t('projects.teacherTraining.stats.courses.label')
        },
        { 
          id: 'hours', 
          value: t('projects.teacherTraining.stats.hours.value'), 
          label: t('projects.teacherTraining.stats.hours.label')
        }
      ]
    }
  ];

  const buildingSteps = [
    { 
      id: 'planning', 
      status: t('projects.buildingProgress.steps.planning.status'), 
      text: t('projects.buildingProgress.steps.planning.text')
    },
    { 
      id: 'infrastructure', 
      status: t('projects.buildingProgress.steps.infrastructure.status'), 
      text: t('projects.buildingProgress.steps.infrastructure.text')
    },
    { 
      id: 'main-building', 
      status: t('projects.buildingProgress.steps.mainBuilding.status'), 
      text: t('projects.buildingProgress.steps.mainBuilding.text')
    },
    { 
      id: 'interior', 
      status: t('projects.buildingProgress.steps.interior.status'), 
      text: t('projects.buildingProgress.steps.interior.text')
    }
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
                {t('projects.pageTitle')}
              </motion.span>
            </motion.div>
            <motion.h1 
              className="text-6xl md:text-8xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                {t('projects.title.main')}
              </span>
              <br />
              <span className="inline-block mt-2 text-zinc-300">
                {t('projects.title.sub')}
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
              <ProjectCard key={project.id} {...project} lng={lng} />
            ))}
          </motion.div>

          <motion.div 
            className="mt-24"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-12 text-center">
              {t('projects.buildingProgress.title')}
            </h2>
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
                          step.status === t('status.completed')
                            ? "bg-gradient-to-r from-blue-500 to-teal-400" 
                            : "bg-zinc-800"
                        }`}>
                          {step.status === t('status.completed') ? (
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-zinc-600 animate-pulse" />
                          )}
                        </div>
                        <span className={`text-lg ${
                          step.status === t('status.completed')
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
