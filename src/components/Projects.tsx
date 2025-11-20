import { motion } from "framer-motion";
import quizImg from '../assets/quiz_app.png';
import learnlyImg from '../assets/learnly.png';
import weatherImg from '../assets/Weather-app.png';

const Projects = () => {
  const projectList = [
    {
      title: "Quiz App",
      link: "https://punamth.github.io/Quiz-App/",
      tech: "React • TypeScript• Redux",
      image: quizImg
    },
    {
      title: "Learning Managmement System(on-going)",
      link:"https://github.com/punamth/Learning-Management-System",
      tech: "React • Typescript • ASP.NET Core",
      image: learnlyImg
    },
    {
      title: "Weather-App",
      link: "https://github.com/punamth/Weather-App.git",
      tech: "React • TypeScript • API",
      image: weatherImg
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

  // Fixed easing cast here
  const projectVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as any  // <-- cast to any to avoid TS error
      }
    }
  };

  return (
    <section
      id="projects"
      className="bg-cream text-ink py-16 sm:py-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24"
    >
      <div className="container text-center max-w-6xl">
        {/* Projects Title */}
        <motion.h1
         className="text-center text-blush-600 font-md mb-10"
         initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        style={{
          fontSize: '38px',
          lineHeight: '1.2',
        }}>
          Projects
        </motion.h1>

        <br />

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
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
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blush-300 relative overflow-hidden h-full flex flex-col">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blush-500 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Project Image */}
                <div className="relative z-10 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      e.currentTarget.src =
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgNzVIMjI1VjEyNUgxNzVWNzVaIiBmaWxsPSIjRDFEOUU2Ii8+CjxwYXRoIGQ9Ik0xNzUgNzVIMjI1VjEyNUgxNzVWNzVaIiBmaWxsPSIjRDFEOUU2Ii8+CjxyZWN0IHg9IjE4NSIgeT0iODUiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjg3Mzg5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+UHJvamVjdCBJbWFnZTwvdGV4dD4KPC9zdmc+';
                    }}
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  {/* Project Header */}
                  <div className="relative z-10 mb-6">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-blush-600 mb-3 leading-tight break-words">
                      {project.title}
                    </h3>
                    <div className="text-sm font-medium text-muted tracking-wide uppercase">
                      {project.tech}
                    </div>
                    <div className="w-12 h-0.5 bg-blush-500 mt-3 group-hover:w-20 transition-all duration-500"></div>
                  </div>

                  {/* Project Link/Button */}
                  <div className="relative z-10 mt-auto">
                    {project.link ? (
                      <motion.a
                        href={project.link}
                        className="inline-flex items-center text-blush-600 hover:text-blush-600 font-medium transition-colors duration-200 group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                      >
                        <span className="mr-2">View Project</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </motion.a>
                    ) : (
                      <div className="text-gray-400 font-medium">Coming Soon</div>
                    )}
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

export default Projects;
