import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';  
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen relative bg-cream text-ink overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />

      {/* Contact + Footer section */}
      <div className="mt-16 flex flex-col gap-18">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
