import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Calendar, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Bhumika Kesanapalli' },
    { icon: MapPin, label: 'Location', value: 'Ongole,India' },
    { icon: Mail, label: 'Email', value: 'bhumikakesanapalli8@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 93814 81330' },
    { icon: Calendar, label: 'Birth Date', value: '15 March 2003' },
    { icon: GraduationCap, label: 'Degree', value: 'B.Tech IT' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/bhumi.jpg"
                    alt="Bhumi - Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't load
                      e.currentTarget.src = 'https://via.placeholder.com/320x320/6366f1/ffffff?text=Bhumi';
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">3rd</span>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="font-medium text-gray-800 dark:text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Who I Am
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I am a passionate and dedicated B.Tech 3rd Year Computer Science Engineering student 
                  with a strong foundation in programming, problem-solving, and software development. 
                  My journey in technology began with curiosity and has evolved into a deep passion 
                  for creating innovative solutions.
                </p>
                
                <p>
                  Throughout my academic journey, I've developed expertise in various programming 
                  languages, web technologies, and software development methodologies. I believe in 
                  continuous learning and staying updated with the latest industry trends and 
                  technologies.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, participating in 
                  hackathons, or contributing to open-source projects. I'm always excited to take on 
                  new challenges and collaborate with like-minded individuals.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center"
                >
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300">Problem Solver</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Analytical thinking</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center"
                >
                  <h4 className="font-semibold text-green-800 dark:text-green-300">Team Player</h4>
                  <p className="text-sm text-green-600 dark:text-green-400">Collaborative approach</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center"
                >
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300">Quick Learner</h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Adaptable mindset</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center"
                >
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300">Innovative</h4>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Creative solutions</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
