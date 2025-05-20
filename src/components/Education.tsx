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
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Education
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.id}
                className={`mb-12 ${index !== education.length - 1 ? 'pb-12 border-b border-gray-700' : ''}`}
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-secondary font-bold text-xl mr-4">
                        {edu.id}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-gray-300">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-400">{edu.period}</p>
                      <p className="text-sm text-gray-400">{edu.location}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="space-y-3">
                      {edu.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="text-secondary mr-3 mt-1">•</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Education;
