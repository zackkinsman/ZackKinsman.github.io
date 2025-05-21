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
      transition: { 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      },
    },
  };
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-white"
            variants={itemVariants}
          >
            Work Experience
          </motion.h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[15px] md:left-[24px] top-2 bottom-0 w-1 bg-gray-600 hidden sm:block"></div>
            
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id}
                className="relative mb-12"
                variants={itemVariants}
              >
                <div className="flex">
                  {/* Timeline marker */}
                  <div className="hidden sm:flex sm:items-center sm:justify-center min-w-[30px] md:min-w-[50px] h-[30px] md:h-[50px] rounded-full bg-gray-800 border-2 border-secondary z-10 mr-6">
                    <span className="text-secondary font-bold md:text-lg">{exp.id}</span>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] border-l-4 border-secondary">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                          <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
                        </div>
                        <div className="md:text-right mt-2 md:mt-0">
                          <p className="text-sm text-gray-400">{exp.period}</p>
                          <p className="text-sm text-gray-400">{exp.location}</p>
                        </div>
                      </div>
                      
                      <ul className="mt-4 space-y-3">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start group">
                            <span className="text-secondary mr-3 flex-shrink-0 group-hover:text-white transition-colors">•</span>
                            <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
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
