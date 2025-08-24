import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Calendar, Building, Code, Target } from 'lucide-react';
import { internships, Internship } from '../data/internships';

const Internships: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Auto-rotation every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === internships.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === internships.length - 1 ? 0 : prevIndex + 1
    );
    setImageError(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? internships.length - 1 : prevIndex - 1
    );
    setImageError(false);
  };

  const currentInternship = internships[currentIndex];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Image failed to load:', currentInternship.image);
    setImageError(true);
    e.currentTarget.src = `https://via.placeholder.com/600x400/6366f1/ffffff?text=${encodeURIComponent(currentInternship.title)}`;
  };

  return (
    <section id="internships" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Internships & Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey through various internships and hands-on experiences
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="text-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {currentIndex + 1} of {internships.length}
              </span>
              <div className="text-xs text-gray-400 mt-1">Auto-rotates every 4s</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Carousel Content */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-0"
              >
                {/* Left Side - Image Carousel */}
                <div className="relative h-96 lg:h-full bg-gray-100 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    {!imageError ? (
                      <img
                        src={currentInternship.image}
                        alt={`${currentInternship.title} at ${currentInternship.company}`}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                        onError={handleImageError}
                        onLoad={() => setImageError(false)}
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-48 h-48 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            Image not available
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Certificate Badge */}
                  {currentInternship.certificate && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Award size={16} />
                      <span>Certificate</span>
                    </div>
                  )}
                </div>

                {/* Right Side - Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    {/* Title and Company */}
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        {currentInternship.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                        <Building size={20} />
                        <span className="text-lg font-semibold">{currentInternship.company}</span>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <Calendar size={20} />
                      <span>{currentInternship.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {currentInternship.description}
                    </p>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center space-x-2">
                        <Code size={20} />
                        <span>Technologies & Skills</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentInternship.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center space-x-2">
                        <Target size={20} />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-2">
                        {currentInternship.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {internships.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setImageError(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
