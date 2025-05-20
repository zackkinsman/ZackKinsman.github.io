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
            className="text-4xl font-bold text-center mb-16 text-white relative"
            variants={itemVariants}
          >
            Work Experience
            <div className="absolute w-24 h-1 bg-secondary rounded bottom-0 left-1/2 transform -translate-x-1/2 -bottom-4"></div>
          </motion.h2>
          
          <div className="relative max-w-7xl mx-auto">
            {/* Timeline line */}
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className={`relative mb-16 ${index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-16' : 'md:mr-auto md:ml-[50%] md:pl-16'}`}
                variants={itemVariants}
              >
                <div className="md:flex md:flex-row-reverse md:justify-start relative">
                  {/* Content */}
                  <div className="w-full">
                    <div className={`p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} justify-between items-start mb-4`}>
                        <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                          <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
                          <div className="space-y-1">
                            <p className="text-sm text-gray-400">{exp.period}</p>
                            <p className="text-sm text-gray-400">{exp.location}</p>
                          </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-secondary border-2 border-secondary">
                          <span className="font-bold text-lg">{exp.id}</span>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className={`flex items-start ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                            <span className="text-gray-300 flex-grow">{item}</span>
                            <span className={`text-secondary ${index % 2 === 0 ? 'ml-2' : 'mr-2'}`}>•</span>
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
