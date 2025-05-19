const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Git'];

  return (
    <section id="skills" className="py-5 bg-light" style={{ minHeight: '80vh' }}>
      <div className="container-lg text-center">
      <h2 className="mb-5 display-8 fw-bold">Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="d-flex align-items-center bg-white rounded shadow-sm px-3 py-3 justify-content-start" style={{ minHeight: '70px' }}>
                <span
                  className="me-3"
                  style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#60A5FA',
                    borderRadius: '50%',
                  }}
                ></span>
                <span className="fs-5 fw-semibold text-dark">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
