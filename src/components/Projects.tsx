import quizImg from '../assets/quiz_app.png';
import learnlyImg from '../assets/learnly.png';
import weatherImg from '../assets/Weather-app.png';

const Projects = () => {
  const projectList = [
    {
      title: "🧠Quiz App",
      link: "https://punamth.github.io/Quiz-App/",
      tech: ["React", "TypeScript", "Redux"],
      image: quizImg
    },
    {
      title: "📖Learning Management System",
      link:"https://github.com/punamth/Learning-Management-System",
      tech: ["React" , "Typescript" , "ASP.NET Core"],
      image: learnlyImg
    },
    {
      title: "⛅Weather-App",
      link: "https://github.com/punamth/Weather-App.git",
      tech: ["React", "TypeScript", "API"],
      image: weatherImg
    }
  ];

  return (
    <section
      id="projects"
      className="bg-[#0B1323] text-[#D9A441] py-20 sm:py-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24"
    >
      <div className="container text-center max-w-6xl">
        {/* Projects Title */}
        <h2 className="!text-5xl !md:text-5xl lg:text-6xl text-center mb-6 pb-2 leading-[1.2]
               text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Projects
        </h2>
        <br/>
        <br />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-[#162653] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 relative overflow-hidden h-full flex flex-col">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0"></div>

                {/* Project Image */}
                <div className="relative z-10 overflow-hidden aspect-[14/7]">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  {/* Project Header */}
                  <div className="relative z-10 mb-6 text-center">
                    <h3 className="!text-xl sm:text-3xl font-extrabold text-white mb-3 leading-tight break-words">
                      {project.title}
                    </h3>
                    <br/>
                   <div className="flex flex-wrap gap-3 justify-center">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="!px-3 py-2 text-xs sm:text-sm font-sm text-[#162653]
                                    rounded-lg bg-white border border-white/40
                                    backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>               
                  </div>
                  <br/>

                  {/* Project Link/Button */}
                  <div className="relative z-10 mt-auto">
                    {project.link ? (
                      <a
                        href={project.link}
                        className="inline-flex items-center text-blush-600 hover:text-blush-600 font-medium transition-colors duration-200 group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-2 text-[#D9A441]">View Project</span>
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
                      </a>
                    ) : (
                      <div className="text-gray-400 font-medium">Coming Soon</div>
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