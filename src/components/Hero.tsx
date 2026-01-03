function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/profile_pic.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-slate-700"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              // Try different extensions if the first one fails
              if (target.src.includes('.jpg')) {
                target.src = '/profile_pic.png';
              } else if (target.src.includes('.png')) {
                target.src = '/profile_pic.jpeg';
              }
            }}
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-500">
          Gau Ding Yu (Michael) Yau
        </h1>

        <p className="text-lg md:text-xl text-white mb-8">
          Electrical Engineering Junior @ University of Louisville | Actively Seeking EE Internships | Circuit Design/Simulation, Power Systems, Coding, & Electronics Skills | Eager to Innovate.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://drive.google.com/file/d/1dqpMYr-x9hKR61s9oYgE5eO5FTICOESA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="https://drive.google.com/file/d/1h66P-13J4S-2xR1gpIaTlMF1xdbtWDQg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Portfolio
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
