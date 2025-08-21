import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Globe, Smartphone } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'web', name: 'Web Apps', icon: Globe },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'fullstack', name: 'Full Stack', icon: Code }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => {
        // Map techStack to categories for filtering
        if (selectedCategory === 'web') return project.techStack.some(tech => ['React', 'HTML', 'CSS', 'JavaScript'].includes(tech));
        if (selectedCategory === 'mobile') return project.techStack.some(tech => ['React Native', 'Flutter', 'Android'].includes(tech));
        if (selectedCategory === 'fullstack') return project.techStack.some(tech => ['Node.js', 'MongoDB', 'Express'].includes(tech));
        return true;
      });

  const getProjectCategory = (project: typeof projects[0]) => {
    if (project.techStack.some(tech => ['React', 'HTML', 'CSS', 'JavaScript'].includes(tech))) return 'web';
    if (project.techStack.some(tech => ['React Native', 'Flutter', 'Android'].includes(tech))) return 'mobile';
    if (project.techStack.some(tech => ['Node.js', 'MongoDB', 'Express'].includes(tech))) return 'fullstack';
    return 'other';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return Globe;
      case 'mobile': return Smartphone;
      case 'fullstack': return Code;
      default: return Code;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my academic journey
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  {React.createElement(getCategoryIcon(getProjectCategory(project)), { 
                    className: "w-10 h-10 text-white" 
                  })}
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    getProjectCategory(project) === 'web' ? 'bg-blue-100 text-blue-800' :
                    getProjectCategory(project) === 'mobile' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {getProjectCategory(project)}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  {React.createElement(getCategoryIcon(getProjectCategory(selectedProject)), { 
                    className: "w-12 h-12 text-white" 
                  })}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    getProjectCategory(selectedProject) === 'web' ? 'bg-blue-100 text-blue-800' :
                    getProjectCategory(selectedProject) === 'mobile' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {getProjectCategory(selectedProject)}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 dark:text-gray-300">Full-featured application</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 dark:text-gray-300">Modern user interface</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 dark:text-gray-300">Responsive design</span>
                    </li>
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg text-center font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Live</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
