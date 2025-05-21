import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: string;
  color: string;
}

interface Skill {
  name: string;
  keywords?: string[]; // Optional related keywords/technologies
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [activeCategory, setActiveCategory] = useState<number>(0);

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
  
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages & Frameworks',
      icon: '💻',
      color: 'from-blue-500 to-indigo-600',
      skills: [
        { name: 'Python', keywords: ['Django', 'Flask', 'Data Science'] },
        { name: 'JavaScript', keywords: ['ES6', 'Promises', 'Async/Await'] },
        { name: 'HTML/CSS', keywords: ['Responsive Design', 'Flexbox', 'Grid'] },
        { name: 'SQL / T-SQL', keywords: ['Queries', 'Stored Procedures', 'Views'] },
        { name: 'Flask', keywords: ['RESTful APIs', 'Jinja2', 'Blueprints'] },
        { name: 'React', keywords: ['Hooks', 'Context API', 'JSX'] },
        { name: 'Node.js', keywords: ['Express', 'NPM', 'API Development'] }
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      color: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'Git / GitHub', keywords: ['Version Control', 'CI/CD', 'Collaboration'] },
        { name: 'DBeaver, pgAdmin, SSMS', keywords: ['Database Administration', 'Query Tools'] },
        { name: 'Azure, GCP, Render, Railway', keywords: ['Cloud Platforms', 'Deployment'] },
        { name: 'OpenAI API', keywords: ['GPT', 'AI Integration', 'LLM'] },
        { name: 'Microsoft Office Suite', keywords: ['Excel', 'PowerPoint', 'Word'] },
        { name: 'Google Workspace', keywords: ['Docs', 'Sheets', 'Collaboration'] }
      ],
    },
    {
      title: 'Databases',
      icon: '🗄️',
      color: 'from-yellow-500 to-amber-600',
      skills: [
        { name: 'PostgreSQL', keywords: ['Relational DB', 'ACID', 'Performance Tuning'] },
        { name: 'SQLite', keywords: ['Embedded DB', 'Lightweight', 'Local Storage'] },
        { name: 'MariaDB', keywords: ['MySQL-compatible', 'High Performance', 'Open Source'] }
      ],
    },
    {
      title: 'AI/ML',
      icon: '🤖',
      color: 'from-purple-500 to-violet-600',
      skills: [
        { name: 'Machine Learning', keywords: ['Neural Networks', 'NLP', 'Classification'] },
        { name: 'PyTorch', keywords: ['Deep Learning', 'Computer Vision', 'Transfer Learning'] },
        { name: 'AI Chatbot Development', keywords: ['Conversation Design', 'LLMs'] },
        { name: 'API Integration for AI', keywords: ['OpenAI', 'Hugging Face', 'Google AI'] }
      ],
    },
    {
      title: 'Construction & Trade',
      icon: '🏗️',
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Power Tools Operation', keywords: ['Safety', 'Precision', 'Efficiency'] },
        { name: 'Hand Tools Expertise', keywords: ['Craftsmanship', 'Precision Work'] },
        { name: 'Heavy Equipment Operation', keywords: ['Excavators', 'Loaders', 'Forklifts'] },
        { name: 'Construction', keywords: ['Residential', 'Commercial', 'Project Planning'] },
        { name: 'Blueprint Reading', keywords: ['Technical Drawings', 'Specifications'] },
        { name: 'HVAC and Maintenance', keywords: ['Troubleshooting', 'Repair', 'Installation'] }
      ],
    },
    {
      title: 'Professional Skills',
      icon: '👔',
      color: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'Agile Project Management', keywords: ['Scrum', 'Kanban', 'Sprint Planning'] },
        { name: 'Team Leadership', keywords: ['Mentoring', 'Delegation', 'Motivation'] },
        { name: 'Problem Solving', keywords: ['Critical Thinking', 'Creative Solutions'] },
        { name: 'Customer Service', keywords: ['Communication', 'Conflict Resolution'] },
        { name: 'Project Coordination', keywords: ['Timeline Management', 'Resource Allocation'] },
        { name: 'Cross-team Collaboration', keywords: ['Stakeholder Management', 'Communication'] }
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center mb-8 gap-2"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          ref={ref}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full text-white font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === index 
                  ? `bg-gradient-to-r ${category.color} shadow-lg scale-105` 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              variants={itemVariants}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: activeCategory !== index ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeCategory === categoryIndex ? 1 : 0, 
                y: activeCategory === categoryIndex ? 0 : 20,
                display: activeCategory === categoryIndex ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className={`text-4xl bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}>
                  {category.icon}
                </span>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}>
                  {category.title}
                </h3>
              </div>

              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className={`p-4 rounded-lg bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm border border-gray-700 hover:shadow-lg hover:shadow-${category.color.split('-')[1]}-500/20 transition-all duration-300`}
                    variants={skillVariants}
                    initial="hidden"
                    animate={activeCategory === categoryIndex ? "visible" : "hidden"}
                    whileHover="hover"
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <h4 className="text-lg font-medium text-white mb-2">{skill.name}</h4>
                    {skill.keywords && skill.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {skill.keywords.map((keyword, keywordIndex) => (
                          <span 
                            key={keywordIndex} 
                            className={`inline-block text-xs px-2 py-1 rounded-full bg-gray-700 hover:bg-gradient-to-r hover:${category.color} text-gray-300 hover:text-white transition-all duration-300`}
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
