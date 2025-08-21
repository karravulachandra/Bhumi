import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, Target, TrendingUp, Users, Calendar } from 'lucide-react';
import { achievements } from '../data/achievements';

const Achievements: React.FC = () => {
  const achievementCategories = [
    {
      title: "Academic Excellence",
      icon: Trophy,
      color: "gold",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Top 5% in Data Structures & Algorithms course",
        "Best Project Award in Software Engineering",
        "Academic Merit Scholarship recipient"
      ]
    },
    {
      title: "Competitions & Hackathons",
      icon: Target,
      color: "blue",
      achievements: [
        "1st Place - University Coding Competition 2023",
        "2nd Place - Regional Hackathon 2023",
        "Finalist - National Programming Contest 2022",
        "Best Innovation Award - Tech Fest 2023"
      ]
    },
    {
      title: "Leadership & Extracurricular",
      icon: Users,
      color: "green",
      achievements: [
        "President - University Coding Club",
        "Organizer - Annual Tech Symposium",
        "Mentor - Junior Programming Workshop",
        "Team Lead - Open Source Project"
      ]
    },
    {
      title: "Research & Publications",
      icon: TrendingUp,
      color: "purple",
      achievements: [
        "Research Paper on AI in Education",
        "Conference Presentation - IEEE Student Branch",
        "Patent Application - Smart Learning System",
        "Journal Publication - Computer Science Review"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      gold: 'from-yellow-400 to-orange-500',
      blue: 'from-blue-400 to-blue-600',
      green: 'from-green-400 to-green-600',
      purple: 'from-purple-400 to-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBgColorClasses = (color: string) => {
    const colors = {
      gold: 'bg-yellow-50 dark:bg-yellow-900/20',
      blue: 'bg-blue-50 dark:bg-blue-900/20',
      green: 'bg-green-50 dark:bg-green-900/20',
      purple: 'bg-purple-50 dark:bg-purple-900/20'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const stats = [
    { label: "Awards Won", value: "15+", icon: Trophy, color: "text-yellow-500" },
    { label: "Competitions", value: "8+", icon: Target, color: "text-blue-500" },
    { label: "Leadership Roles", value: "5+", icon: Users, color: "text-green-500" },
    { label: "Publications", value: "3+", icon: TrendingUp, color: "text-purple-500" }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Celebrating the milestones and accomplishments that mark my journey in technology and innovation
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(stat.color.replace('text-', ''))} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {achievementCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
              className={`${getBgColorClasses(category.color)} rounded-2xl p-8`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(category.color)} rounded-2xl flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.achievements.length} achievements
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {category.achievements.map((achievement, achievementIndex) => (
                  <motion.div
                    key={achievementIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * achievementIndex }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className={`w-3 h-3 bg-gradient-to-r ${getColorClasses(category.color)} rounded-full mt-2 flex-shrink-0`}></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline of Major Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center flex items-center justify-center space-x-2">
            <Calendar className="w-6 h-6 text-blue-500" />
            <span>Achievement Timeline</span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-600 h-full"></div>

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {achievement.description}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{achievement.date}</span>
                        {achievement.category && (
                          <>
                            <span>•</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              achievement.category === 'hackathon' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300' :
                              achievement.category === 'competition' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
                              achievement.category === 'certification' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300' :
                              'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300'
                            }`}>
                              {achievement.category}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                  {/* Empty Space for Alignment */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve More Together?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always looking for new challenges and opportunities to grow. 
              Let's collaborate on innovative projects and create something amazing!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                View My Resume
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
