import { ChevronDown } from 'lucide-react';

function Hero() {
  const scrollToSection = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white relative px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Gau Ding Yu (Michael) Yau
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          I enjoy problem solving by combining hardware and software skills in electrical engineering.
          <br />
          <span className="text-cyan-400 font-medium">Explore my portfolio!</span>
        </p>
      </div>

      <button
        onClick={scrollToSection}
        className="absolute bottom-10 animate-bounce cursor-pointer bg-transparent border-none"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} className="text-cyan-400" />
      </button>
    </section>
  );
}

export default Hero;
