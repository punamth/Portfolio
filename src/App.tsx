import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div>
    {/* Navbar full width */}
    <Navbar />

    <main>
      {/* Home: Full width with padding */}
      <section className="py-5 bg-light" style={{ paddingTop: '70px' }}>
      <div className="container">
        <Home />
      </div>
    </section>

      {/* About Section with white background */}
      <section className="py-5 bg-white">
        <div className="container">
          <About />
        </div>
      </section>

      {/* Skills Section with light background */}
      <section className="py-5 bg-light">
        <div className="container">
          <Skills />
        </div>
      </section>

      {/* Projects Section with white background */}
      <section className="py-5 bg-white">
        <div className="container">
          <Projects />
        </div>
      </section>

      {/* Contact Section with light background */}
      <section className="py-5 bg-light">
        <div className="container">
          <Contact />
        </div>
      </section>
    </main>

    {/* Footer full width */}
    <Footer />
  </div>
);

export default App;
