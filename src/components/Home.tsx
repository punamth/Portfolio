import profileImage from '../assets/Punam.jpg';

const Home = () => {
  return (
    <section className="py-5 bg-white" id="home">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          {/* Left: Text */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold mb-3">
              Hello, I'm <span className="text-primary">Punam Thokar</span>
            </h1>
            <p className="lead mb-4">
              I'm a passionate Frontend Developer who builds interactive and responsive websites using modern web technologies.
            </p>
            <a href="#projects" className="btn btn-primary btn-lg">View My Work</a>
          </div>

          {/* Right: Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={profileImage}
              alt="Punam Thokar"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
