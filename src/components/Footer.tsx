import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center mb-12">
          <motion.h3 
            className="text-3xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400">Zack</span>Kinsman
          </motion.h3>
          
          <motion.div
            className="flex items-center space-x-6 my-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="https://github.com/zackkinsman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all transform hover:scale-110 duration-300 text-2xl"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              href="https://www.linkedin.com/in/zack-kinsman/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110 duration-300 text-2xl"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </motion.div>
          
          <motion.p
            className="text-gray-400 font-light text-center max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full-Stack Developer & Multidisciplinary Professional
          </motion.p>
        </div>
        
        {/* Middle Section - Border */}
        <motion.div 
          className="w-24 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        ></motion.div>
        
        {/* Bottom Section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Zack Kinsman. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 mb-4">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <a 
            href="#home" 
            className="inline-block text-gray-500 hover:text-secondary text-xs transition-colors mt-2 border-b border-gray-800 hover:border-secondary"
          >
            Back to Top
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
