import quizImg from '../assets/quiz_app.png';
import learnlyImg from '../assets/learnly.png';
import weatherImg from '../assets/Weather-app.png';
import videoImg from '../assets/video_conferencing_app.png';

const Projects = () => {
  const projectList = [
    {
      title: "🧠Quiz App",
      link: "https://punamth.github.io/Quiz-App/",
      tech: ["React", "TypeScript", "Redux"],
      image: quizImg
    },
    {
      title: "Video_Conferencing_Web_App",
      link:"https://video-conferencing-web-app-ue43.onrender.com",
      tech: ["MongoDB" , "Express" , "React", "Node.js"],
      image: videoImg
    },
    {
      title: "⛅Weather-App",
      link: "https://weatherapp-1v708oap7-punamths-projects.vercel.app/",
      tech: ["React", "TypeScript", "API"],
      image: weatherImg
    },

    {
      title: "📖Learning Management System",
      link:"https://github.com/punamth/Learning-Management-System",
      tech: ["React" , "Typescript" , "ASP.NET Core"],
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
                  <div className="relative z-10">
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