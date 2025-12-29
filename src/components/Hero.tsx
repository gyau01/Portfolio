function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/image copy copy copy copy.png"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-slate-700"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-pink-500">
          Gau Ding Yu (Michael) Yau
        </h1>

        <p className="text-lg md:text-xl text-cyan-400 mb-2">
          I enjoy problem solving by combining my hardware and software skills.
        </p>
        <p className="text-lg md:text-xl text-white">
          Explore my portfolio!
        </p>
      </div>
    </section>
  );
}

export default Hero;
