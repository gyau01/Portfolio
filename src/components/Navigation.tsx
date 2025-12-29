function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-white font-bold text-xl border border-white px-3 py-1"
        >
          K
        </button>

        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-white hover:text-pink-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-white hover:text-pink-500 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-white hover:text-pink-500 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-pink-500 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
