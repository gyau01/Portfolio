import { Mail, Linkedin, ChevronDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative px-4 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
        }}
      />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tMTQgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMTQgMTRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xNCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0xNCAyOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtLTE0IDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xNC0yOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMCAxNGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMjggMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-5xl mx-auto text-center z-10 animate-slide-up">
        <div className="mb-6 flex items-center justify-center gap-2">
          <Sparkles className="text-cyan-400 animate-pulse" size={24} />
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Electrical Engineer</span>
          <Sparkles className="text-cyan-400 animate-pulse" size={24} />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400 text-glow">
            Gau Ding Yu
          </span>
          <br />
          <span className="text-4xl md:text-5xl text-slate-300">(Michael) Yau</span>
        </h1>

        <div className="glass-dark rounded-2xl p-8 mb-8 max-w-3xl mx-auto border border-cyan-500/20">
          <p className="text-xl md:text-2xl text-slate-200 mb-2 font-light">
            Electrical & Computer Science Engineering Student
          </p>
          <p className="text-lg md:text-xl text-cyan-400 font-medium">
            University of Louisville | Expected May 2027
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center mb-10 flex-wrap">
          <a
            href="mailto:g0yau001@louisville.edu"
            className="glass-dark px-6 py-3 rounded-xl flex items-center gap-3 text-slate-200 hover:text-cyan-400 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/50 glow-hover group"
          >
            <Mail size={20} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">g0yau001@louisville.edu</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/gaudingyu-yau-343136300"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-dark px-6 py-3 rounded-xl flex items-center gap-3 text-slate-200 hover:text-cyan-400 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/50 glow-hover group"
          >
            <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="flex gap-3 justify-center flex-wrap max-w-3xl mx-auto">
          {['Systems Engineering', 'Electronics', 'Robotics', 'Embedded Systems', 'Network Analysis'].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 glass-dark rounded-full text-sm font-medium text-slate-300 border border-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToSection}
        className="absolute bottom-10 animate-bounce cursor-pointer bg-transparent border-none z-10"
        aria-label="Scroll to content"
      >
        <div className="glass-dark p-3 rounded-full border border-cyan-500/30">
          <ChevronDown size={28} className="text-cyan-400" />
        </div>
      </button>
    </section>
  );
}

export default Hero;
