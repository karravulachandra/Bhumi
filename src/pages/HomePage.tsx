import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Code, GraduationCap, Trophy, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <motion.div 
                className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(147, 51, 234, 0.8)",
                    "0 0 20px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-4xl font-bold text-white relative z-10">B</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-50 animate-pulse" />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Bhumi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              B.Tech 3rd Year CSE Student passionate about creating innovative solutions 
              and exploring the endless possibilities of technology
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/about"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center space-x-2"
              >
                <span>Learn More About Me</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
              >
                View My Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {/* About Card */}
            <Link to="/about">
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20 dark:border-gray-700/30"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">About Me</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Learn about my journey, interests, and what drives my passion for technology.
                </p>
                <div className="flex items-center text-blue-500 font-medium">
                  <span className="text-sm">Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            </Link>

            {/* Skills Card */}
            <Link to="/skills">
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20 dark:border-gray-700/30"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Skills</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Discover my technical skills and the technologies I work with.
                </p>
                <div className="flex items-center text-green-500 font-medium">
                  <span className="text-sm">View Skills</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            </Link>

            {/* Projects Card */}
            <Link to="/projects">
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20 dark:border-gray-700/30"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-4">
                  <ExternalLink className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Projects</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Explore my portfolio of web applications and development projects.
                </p>
                <div className="flex items-center text-purple-500 font-medium">
                  <span className="text-sm">See Projects</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            </Link>

            {/* Education Card */}
            <Link to="/education">
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20 dark:border-gray-700/30"
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  My academic journey and educational background in Computer Science.
                </p>
                <div className="flex items-center text-orange-500 font-medium">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-white/20 dark:border-gray-700/30"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
              Quick Overview
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Technical Skills</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">6+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-500 mb-2">3rd</div>
                <div className="text-gray-600 dark:text-gray-300">Year B.Tech CSE</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Let's Connect and Create Something Amazing Together!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm always excited to collaborate on interesting projects and explore new opportunities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </Link>
              <Link
                to="/achievements"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center space-x-2"
              >
                <Trophy className="w-5 h-5" />
                <span>View Achievements</span>
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
