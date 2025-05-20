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
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg shadow-lg text-left"
            variants={itemVariants}
          >
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I'm a versatile professional with a unique blend of experience spanning technology, 
                construction, and customer service. My journey has taken me from hands-on construction 
                work to software development, giving me a well-rounded perspective on problem-solving 
                and project execution.
              </p>
              
              <p>
                My technical journey began with a curiosity for how things work, which led me to 
                explore programming and technology. I've since developed expertise in full-stack 
                development, AI/ML applications, and cloud technologies, while maintaining my practical 
                skills in construction and facilities management.
              </p>
              
              <p>
                What drives me is the intersection of technology and real-world applications. I enjoy 
                building solutions that make a tangible difference, whether it's through code that 
                streamlines operations or by applying technical knowledge to physical projects.
              </p>
              
              <p>
                When I'm not working, you can find me exploring new technologies, working on personal 
                projects, or enjoying outdoor activities. I believe in continuous learning and pushing 
                the boundaries of what's possible at the intersection of technology and traditional 
                industries.
              </p>
            </div>
            

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;