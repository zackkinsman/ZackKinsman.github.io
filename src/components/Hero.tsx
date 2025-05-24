import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Dynamic background with mouse tracking */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
        }}
      />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <motion.div variants={itemVariants} className="mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-secondary/30 mb-6">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-sm font-medium bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent">
                    Welcome to My Portfolio
                  </span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
                variants={itemVariants}
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent">
                  Zack Kinsman
                </span>
              </motion.h1>
              
              <motion.div 
                className="mb-8"
                variants={itemVariants}
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Full-Stack Developer
                  </span>
                  <span className="text-gray-300"> & </span>
                  <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    Multidisciplinary Professional
                  </span>
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                I build exceptional digital experiences by combining technical expertise with creative problem-solving.
                With a background in both technology and hands-on fields, I bring a{' '}
                <span className="text-secondary font-medium">unique perspective</span> to every project.
              </motion.p>
              
              {/* Enhanced CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.a
                  href="#about"
                  className="group relative px-8 py-4 bg-gradient-to-r from-secondary to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-secondary/25 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More About Me
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.a>
                
                <motion.a
                  href="#experience"
                  className="group relative px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-secondary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <span className="relative z-10">View My Work</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - Enhanced Visual Element */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={floatingVariants}
            >
              <div className="relative">
                {/* Main profile container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  {/* Animated rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-secondary/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-4 rounded-full border border-blue-400/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-8 rounded-full border border-purple-400/15"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Profile image placeholder with gradient */}
                  <div className="absolute inset-12 rounded-full overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 border-4 border-gray-600 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-blue-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-secondary to-blue-400 rounded-full flex items-center justify-center">
                          <span className="text-2xl">👨‍💻</span>
                        </div>
                        <span className="text-gray-400 font-medium">Your Photo</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating tech icons */}
                  {[
                    { icon: '⚛️', position: 'top-0 right-8', delay: 0 },
                    { icon: '🚀', position: 'bottom-8 left-0', delay: 0.5 },
                    { icon: '💻', position: 'top-8 left-0', delay: 1 },
                    { icon: '🎨', position: 'bottom-0 right-8', delay: 1.5 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className={`absolute ${item.position} w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center shadow-lg border border-gray-600`}
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: item.delay,
                      }}
                    >
                      <span className="text-xl">{item.icon}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-blue-500/10 rounded-full blur-3xl -z-10" />
              </div>
            </motion.div>
          </div>
          
          {/* Enhanced scroll indicator */}
          <motion.div 
            className="mt-20 flex justify-center"
            variants={itemVariants}
          >
            <motion.a 
              href="#about" 
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-secondary transition-colors duration-300"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-label="Scroll down"
            >
              <span className="text-sm font-medium group-hover:text-secondary transition-colors duration-300">
                Scroll to explore
              </span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-current rounded-full mt-2"
                  animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
