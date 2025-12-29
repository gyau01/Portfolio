function Footer() {
  return (
    <footer className="py-8 px-4 bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="text-white font-bold text-xl border border-white px-3 py-1">
            K
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-6 text-sm">
          <button
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-pink-500 transition-colors"
          >
            Home
          </button>
          <span className="text-slate-600">|</span>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-pink-500 transition-colors"
          >
            Projects
          </button>
          <span className="text-slate-600">|</span>
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-pink-500 transition-colors"
          >
            Experience
          </button>
          <span className="text-slate-600">|</span>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-pink-500 transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="text-center text-slate-500 text-xs">
          <p>© 2025 Gau Ding Yu (Michael) Yau</p>
          <p className="mt-1">This website was entirely built from scratch using JavaScript, HTML, and CSS by Michael Yau</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
