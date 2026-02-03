import quizImg from '../assets/quiz_app.png';
import learnlyImg from '../assets/learnly.png';
import weatherImg from '../assets/Weather-app.png';
import videoImg from '../assets/Video_conferencing_app.png';

const Projects = () => {
  const projectList = [
    {
      title: "🧠Quiz App",
      link: "https://punamth.github.io/Quiz-App/",
      github:"https://github.com/punamth/Quiz-App",
      tech: ["React", "TypeScript", "Redux"],
      image: quizImg
    },
    {
      title: "Video_Conferencing_Web_App",
      link:"https://video-conferencing-web-app-ue43.onrender.com",
      tech: ["MongoDB" , "Express" , "React", "Node.js"],
      github:"https://github.com/punamth/Video-Conferencing_Web_App",
      image: videoImg
    },
    {
      title: "⛅Weather-App",
      link: "https://weatherapp-1v708oap7-punamths-projects.vercel.app/",
      tech: ["React", "TypeScript", "API"],
      github:"https://github.com/punamth/Weather-App",
      image: weatherImg
    },

    {
      title: "📖Learning Management System",
      tech: ["React" , "Typescript" , "ASP.NET Core"],
      github:"https://github.com/punamth/LMS_backend",
      image: learnlyImg
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0B1323] text-[#D9A441] py-28 sm:py-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24"
    >
      <div className="container text-center max-w-6xl">
        {/* Projects Title */}
        <h2 className="text-5xl md:text-3xl lg:text-5xl text-center mb-6 pb-2 leading-[1.2]
               text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 max-w-6xl mx-auto">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-[#162653] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-600 relative overflow-hidden flex flex-col">
                {/* Subtle gradient overlay */}
                 <div className="absolute inset-0 pointer-events-none"></div>

                {/* Project Image */}
                <div className="relative z-10 overflow-hidden aspect-[16/8]">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
                                  opacity-0 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Project Content */}
                <div className="pt-2 px-4 pb-4 sm:pt-3 sm:px-8 sm:pb-6 flex flex-col flex-1">
                  {/* Project Header */}
                  <div className="relative z-10 mb-2 text-center">
                    <h3 className="text-xl sm:text-xl font-bold text-white mb-3 leading-tight break-words">
                      {project.title}
                    </h3>
                   <div className="flex flex-wrap gap-1 justify-center">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 text-sm sm:text-md font-md text-[#162653]
                                    rounded-lg bg-white border border-white/40
                                    backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>               
                  </div>

                  {/* Project Link/Button */}
                  <div className="relative z-10 flex items-center justify-center gap-6 mt-3">
                    {/* Live Project */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#D9A441] font-medium transition group"
                      >
                        <span className="mr-2">Live Project</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
                      </a>
                    )}

                    {/* GitHub Link */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white hover:text-gray-300 transition"
                        aria-label="GitHub Repository"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.42-4.04-1.42-.54-1.36-1.32-1.72-1.32-1.72-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.06 1.82 2.78 1.3 3.46 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.46-1.34-5.46-5.94 0-1.32.46-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.24a11.4 11.4 0 016 0c2.28-1.56 3.28-1.24 3.28-1.24.66 1.64.24 2.86.12 3.16.78.84 1.24 1.92 1.24 3.24 0 4.62-2.8 5.64-5.48 5.94.44.38.82 1.1.82 2.22v3.3c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;