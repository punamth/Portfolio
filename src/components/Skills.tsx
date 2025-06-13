import { motion } from "framer-motion";

const Skills = () => {
  const skills = ['PHP', 'Python', 'JavaScript', 'React', 'TypeScript', 'Git'];

  // Animation variants for staggered left-to-right effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="skills" 
      className="bg-gray-200 text-black py-20 min-h-screen flex items-center justify-center px-6 lg:px-25"
    >
      <div className="container text-center max-w-4xl">
        {/* Skills Title */}
        <motion.h1
          className="text-9xl font-extrabold text-pink-600"
          style={{ fontSize: '32px', marginLeft: '-1rem' }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Skills
        </motion.h1>

        <br />

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
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
                transition: { duration: 0.2 }
              }}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-pink-500 relative overflow-hidden">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Skill icon */}
                <div className="relative z-10 flex items-center justify-start space-x-4">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    >
                      <span className="text-white font-bold text-sm">
                        {skill.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Skill name */}
                  <div className="flex-1 text-left ml-2">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                      {skill}
                    </h3>
                    <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-pink-500 to-pink-300 transition-all duration-500 mt-1"></div>
                  </div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute bottom-3 right-4 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;