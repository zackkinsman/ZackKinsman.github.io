import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const experiences = [
    {
      id: 1,
      role: 'Seasonal Utility Operator',
      company: 'Halifax Regional Municipality',
      period: '07/2024 – 10/2024',
      location: 'Dartmouth, NS, Canada',
      icon: '🏟️',
      color: 'from-green-500 to-emerald-600',
      category: 'Operations',
      responsibilities: [
        'Maintained and prepared baseball fields and recreational grounds, ensuring safe and optimal conditions for community use.',
        'Performed general maintenance tasks, including landscaping, equipment operation, and facility repairs.',
        'Worked independently and collaboratively to meet seasonal deadlines and maintain high-quality public spaces.'
      ]
    },
    {
      id: 2,
      role: 'Web & Software Developer',
      company: 'Freelance Projects',
      period: '04/2023 – 05/2024',
      location: 'HRM, Canada',
      icon: '💻',
      color: 'from-blue-500 to-cyan-600',
      category: 'Development',
      responsibilities: [
        'Created operational tools like HRM Route App for bin route optimization.',
        'Developed static websites and AI chatbot integrations to assist nonprofits and student projects.',
        'Worked with enterprise-grade office suite management tools.'
      ]
    },
    {
      id: 3,
      role: 'Refrigeration Plant Operator',
      company: 'East Hants Sportsplex',
      period: '11/2020 – 09/2022',
      location: 'East Hants, NS, Canada',
      icon: '❄️',
      color: 'from-cyan-500 to-blue-600',
      category: 'Technical',
      responsibilities: [
        'Managed facility maintenance for high-traffic sports venues, ensuring a safe and welcoming environment for guests.',
        'Spearheaded seasonal operations, including snow removal and landscaping, demonstrating reliability under diverse conditions.',
        'Operated Zamboni machines to maintain ice rinks for sports and events, ensuring optimal conditions for users.'
      ]
    },
    {
      id: 4,
      role: 'Carpenter',
      company: 'Centaur Products, Lindsay Construction, Bryan Rockett LTD',
      period: '07/2020 – 03/2021',
      location: 'HRM, Canada',
      icon: '🔨',
      color: 'from-orange-500 to-red-600',
      category: 'Construction',
      responsibilities: [
        'Installed roofing, gym floors, and stadium seating across commercial sites.',
        'Performed residential construction tasks.',
        'Operated tools, followed site safety protocols, and supported project timelines.'
      ]
    },
    {
      id: 5,
      role: 'Bartender & Server',
      company: 'The Keg, Glen Arbour, Waterfront Warehouse, Cunard Centre',
      period: '05/2012 – 02/2024',
      location: 'HRM, Canada',
      icon: '🍸',
      color: 'from-purple-500 to-pink-600',
      category: 'Hospitality',
      responsibilities: [
        'Provided high-volume bar service and dining support.',
        'Specialized in cocktail creation, customer interaction, and solo shift management.',
        'Delivered exceptional customer service in various hospitality settings.'
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
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
            <span className="bg-gradient-to-r from-secondary to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h2>
          
          <div className="max-w-5xl mx-auto relative">
            {/* Enhanced Timeline line with gradient */}
            <div className="absolute left-[28px] md:left-[36px] top-8 bottom-0 w-1 bg-gradient-to-b from-secondary via-cyan-400 to-secondary hidden sm:block opacity-80"></div>
            
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id}
                className="relative mb-16"
                variants={itemVariants}
                whileHover={cardVariants.hover}
              >
                <div className="flex">
                  {/* Enhanced Timeline marker */}
                  <div className="hidden sm:flex relative z-20">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-2xl border-4 border-gray-900 mr-8`}>
                      <span className="text-2xl md:text-3xl">{exp.icon}</span>
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${exp.color} opacity-20 blur-xl`}></div>
                  </div>
                    {/* Enhanced Content Card */}
                  <div className="flex-1">
                    <div className="relative group/card p-8 bg-gradient-to-br from-gray-800/90 to-gray-700/70 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-600/40 hover:shadow-secondary/20 transition-all duration-500 overflow-hidden">
                      
                      {/* Top accent line */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color}`}></div>
                      
                      {/* Category badge - appears on hover */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0">
                        <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${exp.color} text-white rounded-full shadow-lg backdrop-blur-sm`}>
                          {exp.category}
                        </span>
                      </div>
                      
                      <div className="flex flex-col lg:flex-row justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2 hover:text-secondary transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-xl text-gray-300 font-medium mb-2">{exp.company}</p>
                        </div>
                        <div className="lg:text-right mt-4 lg:mt-0 flex flex-col sm:flex-row lg:flex-col gap-2">
                          <div className="flex items-center lg:justify-end bg-gray-900/50 rounded-full px-3 py-1">
                            <span className="text-secondary mr-2">📅</span>
                            <p className="text-sm text-gray-300 font-medium">{exp.period}</p>
                          </div>
                          <div className="flex items-center lg:justify-end bg-gray-900/50 rounded-full px-3 py-1">
                            <span className="text-secondary mr-2">📍</span>
                            <p className="text-sm text-gray-300">{exp.location}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid gap-4">
                        {exp.responsibilities.map((item, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-start p-4 bg-gray-900/40 rounded-xl border border-gray-600/30 hover:border-secondary/50 transition-all duration-300 group"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mr-4 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300`}></div>
                            <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Bottom decorative element */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
