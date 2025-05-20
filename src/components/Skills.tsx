import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages & Frameworks',
      skills: [
        'Python',
        'JavaScript',
        'HTML/CSS',
        'SQL / T-SQL',
        'Flask',
        'React',
        'Node.js'
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        'Git / GitHub',
        'DBeaver, pgAdmin, SSMS',
        'Azure, Google Cloud Platform, Render, Railway',
        'OpenAI API',
        'Microsoft Office Suite',
        'Google Workspace'
      ],
    },
    {
      title: 'Databases',
      skills: [
        'PostgreSQL',
        'SQLite',
        'MariaDB'
      ],
    },
    {
      title: 'AI/ML',
      skills: [
        'Machine Learning, Neural Networks, NLP',
        'PyTorch',
        'AI chatbot and conversational interface development',
        'API integration for AI tools'
      ],
    },
    {
      title: 'Construction & Trade Skills',
      skills: [
        'Power tools operation',
        'Hand tools expertise',
        'Heavy equipment operation',
        'Residential and commercial construction',
        'Blueprint reading',
        'HVAC and facility maintenance'
      ],
    },
    {
      title: 'Professional Skills',
      skills: [
        'Agile project management',
        'Team leadership',
        'Problem solving',
        'Customer service excellence',
        'Project coordination',
        'Multidisciplinary collaboration'
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          ref={ref}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex}
                    className="flex items-start text-gray-300"
                    variants={itemVariants}
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
