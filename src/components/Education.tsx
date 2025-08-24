import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';
import { education } from '../data/education';

const Education: React.FC = () => {
  const certifications = [
    {
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Complete web development course covering HTML, CSS, JavaScript, and modern frameworks."
    },
    {
      name: "Python Programming",
      issuer: "Coursera",
      date: "2022",
      description: "Python programming fundamentals and advanced concepts for data science and web development."
    },
    {
      name: "React.js Development",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Modern React development with hooks, context API, and advanced patterns."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my technical expertise
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Connector */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-transparent"></div>
                  )}

                  <div className="flex space-x-6">
                    {/* Timeline Dot */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {edu.degree}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium">
                          {edu.percentage}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-3">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4" />
                          <span className="text-sm">{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.year}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Academic Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                <Award className="w-6 h-6 text-blue-500" />
                <span>Academic Stats</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">B.Tech Current</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">86.83%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Intermediate (MPC)</span>
                  <span className="font-bold text-green-600 dark:text-green-400">96.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">SSC (10th)</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Certifications</span>
                  <span className="font-bold text-orange-600 dark:text-orange-400">3+</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                <Award className="w-6 h-6 text-green-500" />
                <span>Certifications</span>
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-800 dark:text-white text-sm">
                        {cert.name}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Highlight */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                <Users className="w-6 h-6 text-purple-500" />
                <span>Key Strengths</span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Problem Solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Team Collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Quick Learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Innovation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
