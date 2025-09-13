import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';  

function App() {
  return (
    <div className="flex flex-col min-h-screen relative bg-cream text-ink overflow-x-hidden">
      <Navbar />
      <main className="flex-grow relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
