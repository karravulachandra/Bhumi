import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sections: [
      {
        title: "Navigation",
        links: [
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Skills", href: "/skills" },
          { name: "Projects", href: "/projects" },
          { name: "Education", href: "/education" },
          { name: "Contact", href: "/contact" }
        ]
      },
      {
        title: "Services",
        links: [
          { name: "Web Development", href: "#" },
          { name: "Mobile Apps", href: "#" },
          { name: "UI/UX Design", href: "#" },
          { name: "Consulting", href: "#" },
          { name: "Training", href: "#" }
        ]
      },
      {
        title: "Resources",
        links: [
          { name: "Blog", href: "#" },
          { name: "Tutorials", href: "#" },
          { name: "Documentation", href: "#" },
          { name: "GitHub", href: "#" },
          { name: "Portfolio", href: "#" }
        ]
      }
    ],
    contact: [
      { icon: Mail, text: "bhumi@example.com", href: "mailto:bhumi@example.com" },
      { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
      { icon: MapPin, text: "India", href: "#" }
    ],
    social: [
      { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/bhumika-kesanapalli/", color: "hover:text-blue-500" },
      { name: "GitHub", icon: Github, href: "https://github.com/yourusername", color: "hover:text-gray-500" },
      { name: "Twitter", icon: Twitter, href: "https://twitter.com/yourhandle", color: "hover:text-sky-500" },
      { name: "Instagram", icon: Instagram, href: "https://instagram.com/yourhandle", color: "hover:text-pink-500" }
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company/Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Bhumi
                </h3>
                <p className="text-gray-300 mt-2">
                  B.Tech CSE Student & Full-Stack Developer
                </p>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Passionate about creating innovative solutions and turning ideas into reality. 
                Always eager to learn and grow in the ever-evolving world of technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {footerLinks.contact.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <contact.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * linkIndex }}
                      viewport={{ once: true }}
                    >
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Media & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Social Media */}
              <div className="flex space-x-4">
                {footerLinks.social.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="flex items-center space-x-4">
                <p className="text-gray-400 text-sm">
                  Stay updated with my latest projects
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 bg-gray-950"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>© {currentYear} Bhumi. All rights reserved.</span>
                <span>•</span>
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in India</span>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button (Fixed) */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
