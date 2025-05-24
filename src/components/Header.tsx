import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', gradient: 'from-blue-400 to-purple-500' },
    { name: 'About', href: '#about', gradient: 'from-purple-400 to-pink-500' },
    { name: 'Skills', href: '#skills', gradient: 'from-green-400 to-blue-500' },
    { name: 'Experience', href: '#experience', gradient: 'from-orange-400 to-red-500' },
    { name: 'Education', href: '#education', gradient: 'from-cyan-400 to-blue-500' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-700/50 py-3' 
          : 'bg-gradient-to-r from-transparent via-gray-900/20 to-transparent backdrop-blur-sm py-6'
      }`}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#home" 
            className="group text-3xl font-bold text-white relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent">
              Zack
            </span>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Kinsman
            </span>
            {/* Hover underline effect */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-blue-400 group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative group px-4 py-2 text-gray-300 hover:text-white font-medium transition-all duration-300 rounded-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -2 }}
              >
                {/* Hover background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300`} />
                
                {/* Active indicator */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${link.gradient} group-hover:w-3/4 transition-all duration-300`} />
                
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            ))}
            
            {/* Social Icons with enhanced styling */}
            <div className="flex space-x-3 ml-8 pl-6 border-l border-gray-700">
              <motion.a 
                href="https://github.com/zackkinsman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 text-gray-400 hover:text-white transition-all duration-300 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ y: -2, scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300" />
                <FontAwesomeIcon icon={faGithub} size="lg" className="relative z-10" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/zack-kinsman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 text-gray-400 hover:text-white transition-all duration-300 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ y: -2, scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300" />
                <FontAwesomeIcon icon={faLinkedin} size="lg" className="relative z-10" />
              </motion.a>
            </div>
          </nav>

          {/* Enhanced Mobile menu button */}
          <motion.button 
            className="md:hidden relative p-3 text-gray-300 hover:text-white focus:outline-none rounded-lg group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300" />
            <FontAwesomeIcon 
              icon={isMenuOpen ? faTimes : faBars} 
              size="lg" 
              className="relative z-10 transition-transform duration-300" 
            />
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden mt-6 relative"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Mobile menu background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-lg rounded-xl border border-gray-700/50" />
              
              <div className="relative z-10 p-6">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="group relative px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-15 rounded-lg transition-all duration-300`} />
                      <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-4 bg-gradient-to-r ${link.gradient} group-hover:w-1 transition-all duration-300 rounded-r`} />
                      <span className="relative z-10">{link.name}</span>
                    </motion.a>
                  ))}
                  
                  {/* Mobile Social Icons */}
                  <motion.div 
                    className="flex space-x-4 pt-6 mt-4 border-t border-gray-700/50 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    <motion.a 
                      href="https://github.com/zackkinsman" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative p-4 text-gray-400 hover:text-white transition-all duration-300 rounded-lg"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300" />
                      <FontAwesomeIcon icon={faGithub} size="lg" className="relative z-10" />
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/in/zack-kinsman/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative p-4 text-gray-400 hover:text-white transition-all duration-300 rounded-lg"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300" />
                      <FontAwesomeIcon icon={faLinkedin} size="lg" className="relative z-10" />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
