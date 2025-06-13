import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my skills and projects using react and typescript.",
      link: "https://github.com/punamth/Portfolio.git",
      tech: "React • TypeScript"
    },
    {
      title: "Business Management System for SMEs (Small and Medium-sized Enterprises)",
      description: "A business dashboard built with PHP that serves small and medium-sized businesses in daily operational activities along with sales tracking.",
      link: "https://github.com/punamth/businessManagerDashboard.git",
      tech: "PHP • MySQL"
    },
    {
      title: "Weather-App",
      description: "A weather web app built with Vite, React, and TypeScript. It integrates the Visual Crossing Weather API to provide current conditions and a 24-hour forecast for any location.",
      link: "https://github.com/punamth/Weather-App.git",
      tech: "React • TypeScript • API"
    }
  ];

  // Animation variants for staggered left-to-right effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      x: -80,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="bg-gray-200 text-black py-20 min-h-screen flex items-center justify-center px-6 lg:px-25"
    >
      <div className="container text-center max-w-6xl">
        {/* Projects Title */}
        <motion.h1
          className="text-9xl font-extrabold text-pink-600"
          style={{ fontSize: '32px', marginLeft: '-1rem' }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Projects
        </motion.h1>

        <br />

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={projectVariants}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8 border border-gray-100 hover:border-pink-200 relative overflow-hidden h-full flex flex-col">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Header */}
                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <div className="text-sm font-medium text-pink-600 tracking-wide uppercase">
                    {project.tech}
                  </div>
                  <div className="w-12 h-0.5 bg-pink-500 mt-3 group-hover:w-20 transition-all duration-500"></div>
                </div>

                {/* Project Description */}
                <div className="relative z-10 flex-1 mb-8">
                  <p className="text-gray-600 leading-relaxed text-base">
                    {project.description}
                  </p>
                </div>

                {/* Project Link/Button */}
                <div className="relative z-10 mt-auto">
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors duration-200 group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                    >
                      <span className="mr-2">View Project</span>
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  ) : (
                    <div className="text-gray-400 font-medium">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;