import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-secondary bg-blue-100 rounded-full mb-4">
              Welcome to My Portfolio
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-secondary">Zack Kinsman</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Full-Stack Developer & Multidisciplinary Professional
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I build exceptional digital experiences by combining technical expertise with creative problem-solving.
            With a background in both technology and hands-on fields, I bring a unique perspective to every project.
          </motion.p>
          
          <motion.div 
            className="mt-16 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* Replace with your actual image */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                <span>Your Photo</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            variants={itemVariants}
          >
            <div className="inline-block animate-bounce">
              <a 
                href="#about" 
                className="text-gray-500 hover:text-secondary transition-colors"
                aria-label="Scroll down"
              >
                <svg 
                  className="w-8 h-8" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
