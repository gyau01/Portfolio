import { Mail, Linkedin, ChevronDown } from 'lucide-react';

function Hero() {
  const scrollToSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative px-4">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Gau Ding Yu (Michael) Yau
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-4">
          Electrical & Computer Science Engineering Student
        </p>
        <p className="text-lg md:text-xl text-slate-400 mb-8">
          University of Louisville | Expected May 2027
        </p>

        <div className="flex gap-6 justify-center items-center mb-12">
          <a
            href="mailto:g0yau001@louisville.edu"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <Mail size={20} />
            <span>g0yau001@louisville.edu</span>
          </a>
          <a
            href="https://www.linkedin.com/in/gaudingyu-yau-343136300"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">
            Systems Engineering
          </span>
          <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">
            Embedded Systems
          </span>
          <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">
            Robotics
          </span>
        </div>
      </div>

      <button
        onClick={scrollToSection}
        className="absolute bottom-8 animate-bounce cursor-pointer bg-transparent border-none"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} className="text-slate-400" />
      </button>
    </section>
  );
}

export default Hero;
