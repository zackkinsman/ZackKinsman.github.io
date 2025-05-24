import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.15,
      y: -5,
      transition: { duration: 0.2 },
    },
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        
        {/* Animated background particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary/20 rounded-full"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              left: `${10 + i * 11}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.h3 
              className="text-4xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent">
                Zack
              </span>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Kinsman
              </span>
            </motion.h3>
            
            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-purple-400 mx-auto rounded-full mb-6"></div>
            
            <motion.p
              className="text-gray-300 leading-relaxed max-w-md mx-auto mb-8"
              variants={itemVariants}
            >
              Full-Stack Developer & Multidisciplinary Professional
            </motion.p>
            
            {/* Social Icons */}
            <motion.div 
              className="flex justify-center gap-6 mb-8"
              variants={itemVariants}
            >
              <motion.a 
                href="https://github.com/zackkinsman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg border border-gray-600/40 overflow-hidden"
                variants={socialVariants}
                whileHover="hover"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FontAwesomeIcon 
                  icon={faGithub} 
                  className="text-xl text-gray-300 group-hover:text-white relative z-10 transition-colors duration-300" 
                />
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/zack-kinsman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-14 h-14 bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg border border-blue-600/40 overflow-hidden"
                variants={socialVariants}
                whileHover="hover"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                  className="text-xl text-blue-200 group-hover:text-white relative z-10 transition-colors duration-300" 
                />
              </motion.a>
            </motion.div>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900/60 text-gray-300 hover:text-white border border-gray-600/40 hover:border-secondary/50 rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              <FontAwesomeIcon 
                icon={faArrowUp} 
                className="group-hover:animate-bounce transition-transform duration-300" 
              />
              <span className="font-medium">Back to Top</span>
            </motion.button>
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="w-32 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mb-8"
            variants={itemVariants}
          />

          {/* Copyright & Tech Stack */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              © {currentYear} Zack Kinsman. Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FontAwesomeIcon icon={faHeart} className="text-red-400" />
              </motion.span>
              in Halifax, NS
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
                <motion.span 
                  key={tech}
                  className="px-3 py-1 bg-gray-800/60 text-gray-300 rounded-full border border-gray-600/30 hover:border-secondary/50 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
