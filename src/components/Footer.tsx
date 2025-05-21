import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-blue-400">Zack</span>Kinsman
            </h3>
            <p className="text-gray-400">Full-Stack Developer & Multidisciplinary Professional</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            <a 
              href="https://github.com/zackkinsman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-xl"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              href="https://www.linkedin.com/in/zack-kinsman/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              href="mailto:zackkinsman@gmail.com" 
              className="text-gray-400 hover:text-red-400 transition-colors text-xl"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Zack Kinsman. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            Designed & Developed by Zack Kinsman
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a 
              href="#home" 
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Back to Top
            </a>
            <span className="text-gray-600">•</span>
            <a 
              href="#contact" 
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
