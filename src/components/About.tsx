import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.h2 
            className="text-5xl font-bold mb-16 text-white"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          
          <div className="grid gap-8 lg:gap-12">
            {/* Main Content Card */}
            <motion.div 
              className="relative group overflow-hidden bg-gradient-to-br from-gray-800/90 to-gray-700/70 backdrop-blur-sm rounded-3xl border border-gray-600/40 shadow-2xl hover:shadow-secondary/10 transition-all duration-500"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Top gradient accent */}
              <div className="h-2 bg-gradient-to-r from-secondary via-purple-400 to-cyan-400"></div>
              
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                  {/* Profile Section */}
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <div className="mb-8">
                      <div className="w-32 h-32 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-r from-secondary to-purple-400 flex items-center justify-center text-4xl shadow-2xl mb-6">
                        👨‍💻
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Zack Kinsman</h3>
                      <p className="text-lg text-gray-300 font-medium">Full-Stack Developer & AI Enthusiast</p>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-600/30">
                        <div className="text-2xl font-bold text-secondary">5+</div>
                        <div className="text-sm text-gray-300">Years Experience</div>
                      </div>
                      <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-600/30">
                        <div className="text-2xl font-bold text-secondary">3</div>
                        <div className="text-sm text-gray-300">Certifications</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:col-span-2 text-left">
                    <div className="space-y-6">
                      <motion.div 
                        className="p-6 bg-gray-900/40 rounded-2xl border-l-4 border-secondary/50 hover:border-secondary transition-colors duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                          <span className="text-secondary mr-3">🚀</span>
                          My Journey
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          I'm a versatile professional with a unique blend of experience spanning technology, 
                          construction, and customer service. My journey has taken me from hands-on construction 
                          work to software development, giving me a well-rounded perspective on problem-solving 
                          and project execution.
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        className="p-6 bg-gray-900/40 rounded-2xl border-l-4 border-purple-400/50 hover:border-purple-400 transition-colors duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                          <span className="text-purple-400 mr-3">💻</span>
                          Technical Evolution
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          My technical journey began with a curiosity for how things work, which led me to 
                          explore programming and technology. I've since developed expertise in full-stack 
                          development, AI/ML applications, and cloud technologies, while maintaining my practical 
                          skills in construction and facilities management.
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        className="p-6 bg-gray-900/40 rounded-2xl border-l-4 border-cyan-400/50 hover:border-cyan-400 transition-colors duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                          <span className="text-cyan-400 mr-3">⚡</span>
                          What Drives Me
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          What drives me is the intersection of technology and real-world applications. I enjoy 
                          building solutions that make a tangible difference, whether it's through code that 
                          streamlines operations or by applying technical knowledge to physical projects.
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        className="p-6 bg-gray-900/40 rounded-2xl border-l-4 border-green-400/50 hover:border-green-400 transition-colors duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                          <span className="text-green-400 mr-3">🌟</span>
                          Beyond Code
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          When I'm not working, you can find me exploring new technologies, working on personal 
                          projects, or bouldering. I believe in continuous learning and pushing 
                          the boundaries of what's possible at the intersection of technology and traditional 
                          industries.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom decorative element */}
              <div className="h-1 bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;