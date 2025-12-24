import { motion } from "framer-motion";
import type{Variants } from "framer-motion";


const Skills = () => {
  const skills = ['JavaScript', 'React', 'Python', 'C#',  'Git', 'Tailwind CSS'];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const skillVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.8,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 1, 1], // Fixed easing
      },
    },
  };

  return (
    <section 
      id="skills" 
      className="bg-cream text-ink py-16 sm:py-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24"
    >
      <div className="text-center text-blush-600 font-md mb-10">
        <motion.h1
          className="bg-cream text-2xl sm:text-xl md:text-6xl lg:text-7xl font-semibold text-blush-600"
          style={{
            fontSize: '38px',
            lineHeight: '1.2',
          }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Skills
        </motion.h1>

        <br />

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={skillVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border-l-4 border-blush-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blush-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center justify-start space-x-4">
                <div className="flex-shrink-0">
                  <div 
                    className="w-10 h-10 bg-gradient-to-br from-blush-500 to-blush-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  >
                    <span className="text-white font-bold text-sm">
                      {skill.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="flex-1 text-left ml-1 sm:ml-2">
                  <h3 className="font-medium text-ink group-hover:text-blush-600 transition-colors duration-300" style={{ fontSize: '24px' }}>
                    {skill}
                  </h3>
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blush-500 to-blush-300 transition-all duration-500 mt-1"></div>
                </div>
              </div>
            </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;