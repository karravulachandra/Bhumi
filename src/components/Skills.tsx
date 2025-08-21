import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const skillCategories = [
    { id: 'programming', icon: Code, title: 'Programming Languages', color: 'blue' },
    { id: 'web', icon: Globe, title: 'Web Technologies', color: 'purple' },
    { id: 'tools', icon: Server, title: 'Tools', color: 'red' },
    { id: 'soft', icon: Palette, title: 'Soft Skills', color: 'pink' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      pink: 'from-pink-500 to-pink-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBgColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/20',
      green: 'bg-green-100 dark:bg-green-900/20',
      purple: 'bg-purple-100 dark:bg-purple-900/20',
      orange: 'bg-orange-100 dark:bg-orange-900/20',
      red: 'bg-red-100 dark:bg-red-900/20',
      pink: 'bg-pink-100 dark:bg-pink-900/20'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technical skills and technologies I've mastered throughout my academic journey
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Skill Categories */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`${getBgColorClasses(category.color)} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(category.color)} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {skills.filter(skill => skill.category === category.id).length} skills
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Skills with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skillCategories.map((category, categoryIndex) => {
              const categorySkills = skills.filter(skill => skill.category === category.id);
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * categoryIndex }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 capitalize">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.proficiency * 20}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency * 20}%` }}
                            transition={{ duration: 1, delay: 0.1 * skillIndex }}
                            viewport={{ once: true }}
                            className={`h-2 bg-gradient-to-r ${getColorClasses(category.color)} rounded-full transition-all duration-300`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Additional Skills & Competencies
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Problem Solving</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Strong analytical and logical thinking abilities
              </p>
            </div>
            
            <div className="text-center p-4">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Team Collaboration</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Excellent communication and teamwork skills
              </p>
            </div>
            
            <div className="text-center p-4">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Continuous Learning</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Always eager to learn new technologies
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
