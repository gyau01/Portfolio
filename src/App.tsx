import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Experience />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
