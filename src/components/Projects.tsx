const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my skills and projects using react and typescript.",
      link: "https://github.com/punamth/Portfolio.git"
    },
    {
      title: "Business Management System for SMEs (Small and Medium-sized Enterprises)",
      description: "A business dashboard and invoicing tool built with PHP.",
      link: "https://github.com/punamth/businessManagerDashboard.git"
    },
    {
      title: "Weather-App",
      description: "A weather web app built with Vite, React, and TypeScript.It integrates the Visual Crossing Weather API to provide current conditions and a 24-hour forecast for any location.",
      link: "https://github.com/punamth/Weather-App.git"
    }
  ];

  return (
    <section
      className="py-5 bg-light"
      id="projects"
      style={{ marginTop: '70px', marginBottom: '70px' }}
    >
      <div className="container-lg text-center">
        <h2 className="mb-5 display-6 fw-bold">Projects</h2>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projectList.map((project, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 shadow-sm border-0 rounded-4"
                style={{ minHeight: '350px' }}
              >
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title fs-4">{project.title}</h5>
                  <p className="card-text fs-6">{project.description}</p>
                  {project.link ? (
                    <a
                      href={project.link}
                      className="btn btn-primary mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  ) : (
                    <span className="text-muted mt-auto">Coming Soon</span>
                  )}
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
