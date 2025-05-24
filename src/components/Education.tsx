import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
    const education = [
    {
      id: 1,
      degree: 'Programming for AI',
      institution: 'Nova Scotia Community College',
      period: '09/2024 – 05/2025',
      location: 'Halifax, NS, Canada',
      icon: '🤖',
      color: 'from-blue-500 to-purple-600',
      description: [
        'Studied AI fundamentals including machine learning, neural networks, and natural language processing',
        'Built and deployed AI models using Python, PyTorch, and OpenAI tools',
        'Integrated APIs and created conversational AI applications for real-world use cases',
        'Completed capstone project leading a 5-person team in developing a chatbot-based sales tool'
      ]
    },
    {
      id: 2,
      degree: 'IT-Programming',
      institution: 'Nova Scotia Community College',
      period: '09/2022 – 05/2024',
      location: 'Halifax, NS, Canada',
      icon: '💻',
      color: 'from-green-500 to-teal-600',
      description: [
        'Gained experience in web development (HTML/CSS, JavaScript, React, Flask) and database management (PostgreSQL, SQLite)',
        'Designed and developed full-stack applications with real-time interaction and cloud deployment',
        'Practiced Agile methodology and version control using Git/GitHub',
        'Created multiple portfolio projects demonstrating user-focused design and data-driven functionality'
      ]
    },
    {
      id: 3,
      degree: 'Carpentry',
      institution: 'Nova Scotia Community College',
      period: '09/2018 – 05/2020',
      location: 'Dartmouth, Canada',
      icon: '🔨',
      color: 'from-orange-500 to-red-600',
      description: [
        'Trained in residential and commercial construction principles, blueprint reading, and materials handling',
        'Gained hands-on experience with framing, finishing, and structural safety standards',
        'Applied building code regulations and project safety practices in workshop and field environments',
        'Developed skills in teamwork, problem solving, and adherence to trade compliance standards'
      ]
    }
  ];
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >          
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 text-white" 
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h2>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:gap-12">
              {education.map((edu) => (
                <motion.div 
                  key={edu.id}
                  className="group"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  {/* Main Card Container */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800/90 to-gray-700/70 backdrop-blur-sm rounded-3xl border border-gray-600/40 shadow-2xl group-hover:shadow-secondary/10 transition-all duration-500">
                    
                    {/* Top gradient accent */}
                    <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
                    
                    <div className="p-8 lg:p-10">
                      {/* Header Section */}
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                        <div className="flex items-center mb-4 lg:mb-0">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-3xl mr-6 shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                            {edu.icon}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            <p className="text-xl text-gray-300 font-medium">{edu.institution}</p>
                          </div>
                        </div>
                        
                        {/* Info badges */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <div className="flex items-center bg-gray-900/60 rounded-full px-4 py-2 border border-gray-600/50">
                            <span className="text-secondary mr-2">📅</span>
                            <p className="text-gray-300 font-medium text-sm">{edu.period}</p>
                          </div>
                          <div className="flex items-center bg-gray-900/60 rounded-full px-4 py-2 border border-gray-600/50">
                            <span className="text-secondary mr-2">📍</span>
                            <p className="text-gray-300 text-sm">{edu.location}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description Grid */}
                      <div className="grid md:grid-cols-2 gap-4">
                        {edu.description.map((item, i) => (
                          <motion.div 
                            key={i} 
                            className="relative p-5 bg-gray-900/50 rounded-xl border border-gray-600/30 hover:border-secondary/50 transition-all duration-300 group/item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {/* Corner accent */}
                            <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl ${edu.color} opacity-20 rounded-bl-xl rounded-tr-xl`}></div>
                            
                            <div className="flex items-start">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`}></div>
                              <span className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                {item}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom decorative element */}
                    <div className="h-1 bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
