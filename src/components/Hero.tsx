import { Mail, Linkedin, ChevronDown } from 'lucide-react';

function Hero() {
  const scrollToSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative px-4 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-15"
        preserveAspectRatio="none"
        viewBox="0 0 1200 400"
      >
        <defs>
          <pattern id="pcbPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="3" fill="#64748b" opacity="0.5" />
            <circle cx="120" cy="10" r="3" fill="#64748b" opacity="0.5" />
            <circle cx="10" cy="120" r="3" fill="#64748b" opacity="0.5" />
            <circle cx="120" cy="120" r="3" fill="#64748b" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="1200" height="400" fill="url(#pcbPattern)" />
        <g stroke="#64748b" strokeWidth="2" fill="none" opacity="0.4">
          <path d="M 0 60 L 80 60 L 80 120 L 140 120 L 140 200 L 200 200" />
          <path d="M 200 200 L 200 80 L 260 80 L 260 160" />
          <path d="M 260 160 L 320 160 L 320 240 L 380 240" />
          <path d="M 380 240 L 380 100 L 440 100 L 440 180 L 500 180" />
          <path d="M 500 180 L 500 280 L 560 280 L 560 140 L 620 140" />
          <path d="M 620 140 L 620 260 L 680 260 L 680 120" />
          <path d="M 680 120 L 740 120 L 740 200 L 800 200 L 800 80" />
          <path d="M 800 80 L 860 80 L 860 240 L 920 240 L 920 160" />
          <path d="M 920 160 L 980 160 L 980 280 L 1040 280 L 1040 100" />
          <path d="M 1040 100 L 1100 100 L 1100 220 L 1200 220" />
          <path d="M 0 320 L 60 320 L 60 180 L 120 180 L 120 340" />
          <path d="M 120 340 L 180 340 L 180 200 L 240 200 L 240 360" />
        </g>
        <g fill="#64748b" opacity="0.5">
          <circle cx="80" cy="60" r="3.5" />
          <circle cx="80" cy="120" r="3.5" />
          <circle cx="140" cy="120" r="3.5" />
          <circle cx="140" cy="200" r="3.5" />
          <circle cx="200" cy="200" r="3.5" />
          <circle cx="200" cy="80" r="3.5" />
          <circle cx="260" cy="80" r="3.5" />
          <circle cx="260" cy="160" r="3.5" />
          <circle cx="320" cy="160" r="3.5" />
          <circle cx="320" cy="240" r="3.5" />
          <circle cx="380" cy="240" r="3.5" />
          <circle cx="380" cy="100" r="3.5" />
          <circle cx="440" cy="100" r="3.5" />
          <circle cx="440" cy="180" r="3.5" />
          <circle cx="500" cy="180" r="3.5" />
          <circle cx="500" cy="280" r="3.5" />
          <circle cx="560" cy="280" r="3.5" />
          <circle cx="560" cy="140" r="3.5" />
          <circle cx="620" cy="140" r="3.5" />
          <circle cx="620" cy="260" r="3.5" />
          <circle cx="680" cy="260" r="3.5" />
          <circle cx="680" cy="120" r="3.5" />
          <circle cx="740" cy="120" r="3.5" />
          <circle cx="740" cy="200" r="3.5" />
          <circle cx="800" cy="200" r="3.5" />
          <circle cx="800" cy="80" r="3.5" />
          <circle cx="860" cy="80" r="3.5" />
          <circle cx="860" cy="240" r="3.5" />
          <circle cx="920" cy="240" r="3.5" />
          <circle cx="920" cy="160" r="3.5" />
          <circle cx="980" cy="160" r="3.5" />
          <circle cx="980" cy="280" r="3.5" />
          <circle cx="1040" cy="280" r="3.5" />
          <circle cx="1040" cy="100" r="3.5" />
          <circle cx="1100" cy="100" r="3.5" />
          <circle cx="1100" cy="220" r="3.5" />
          <circle cx="60" cy="320" r="3.5" />
          <circle cx="60" cy="180" r="3.5" />
          <circle cx="120" cy="180" r="3.5" />
          <circle cx="120" cy="340" r="3.5" />
          <circle cx="180" cy="340" r="3.5" />
          <circle cx="180" cy="200" r="3.5" />
          <circle cx="240" cy="200" r="3.5" />
          <circle cx="240" cy="360" r="3.5" />
        </g>
        <g fill="#94a3b8" opacity="0.3">
          <circle cx="50" cy="200" r="2" />
          <circle cx="110" cy="250" r="2" />
          <circle cx="170" cy="100" r="2" />
          <circle cx="300" cy="300" r="2" />
          <circle cx="450" cy="80" r="2" />
          <circle cx="590" cy="220" r="2" />
          <circle cx="700" cy="180" r="2" />
          <circle cx="850" cy="320" r="2" />
          <circle cx="1050" cy="160" r="2" />
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
            Electronics
          </span>
          <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">
            Robotics
          </span>
          <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">
           Embedded Systems  
          </span>
          <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">
           Network Analysis 
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
