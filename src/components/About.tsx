const About = () => {
  return (
    <section id="about" className="py-5 bg-light d-flex align-items-center" style={{ minHeight: '80vh' }}>
      <div className="container text-center">
        <h2 className="mb-4 display-5 fw-bold">About Me</h2>
        <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
          I'm a <strong>self-taught developer</strong> with a passion for building beautiful and functional web applications.
          I enjoy learning new technologies and solving real-world problems. My journey in web development started with curiosity
          and has evolved into a professional career where I create <strong>engaging and user-friendly interfaces</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;
