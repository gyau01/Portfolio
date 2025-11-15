import { Mail, Linkedin, ChevronDown } from 'lucide-react';

function Hero() {
  const scrollToSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative px-4 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1e293b" stopOpacity="0.1" />
          </linearGradient>
          <pattern id="circuitPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="0" cy="0" r="4" fill="#94a3b8" opacity="0.4" />
            <circle cx="200" cy="0" r="4" fill="#94a3b8" opacity="0.4" />
            <circle cx="0" cy="200" r="4" fill="#94a3b8" opacity="0.4" />
            <circle cx="200" cy="200" r="4" fill="#94a3b8" opacity="0.4" />
            <path d="M 0 0 L 100 0 L 100 100 L 200 100" stroke="#64748b" strokeWidth="1.5" fill="none" opacity="0.3" />
            <path d="M 200 0 L 150 0 L 150 150 L 0 150" stroke="#64748b" strokeWidth="1.5" fill="none" opacity="0.3" />
            <path d="M 0 200 L 100 200 L 100 100 L 200 100" stroke="#64748b" strokeWidth="1.5" fill="none" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="1000" height="1000" fill="url(#circuitPattern)" />
        <g opacity="0.2">
          <path d="M 50 100 L 150 100 L 150 200 L 300 200" stroke="#94a3b8" strokeWidth="2" fill="none" />
          <path d="M 600 50 L 650 50 L 650 150 L 750 150" stroke="#94a3b8" strokeWidth="2" fill="none" />
          <path d="M 100 500 L 200 500 L 200 600 L 350 600" stroke="#94a3b8" strokeWidth="2" fill="none" />
          <path d="M 700 400 L 800 400 L 800 550 L 900 550" stroke="#94a3b8" strokeWidth="2" fill="none" />
          <path d="M 200 750 L 300 750 L 300 850 L 450 850" stroke="#94a3b8" strokeWidth="2" fill="none" />
          <circle cx="150" cy="100" r="5" fill="#94a3b8" opacity="0.6" />
          <circle cx="150" cy="200" r="5" fill="#94a3b8" opacity="0.6" />
          <circle cx="650" cy="50" r="5" fill="#94a3b8" opacity="0.6" />
          <circle cx="650" cy="150" r="5" fill="#94a3b8" opacity="0.6" />
          <circle cx="200" cy="500" r="5" fill="#94a3b8" opacity="0.6" />
          <circle cx="200" cy="600" r="5" fill="#94a3b8" opacity="0.6" />
        </g>
      </svg>
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
