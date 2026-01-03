function Solutions() {
  return (
    <section className="min-h-screen py-20 px-4 bg-black text-white pt-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Solutions
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-slate-300 text-center mb-12">
            Welcome to the Solutions page. This is where you can find innovative solutions and approaches to complex problems.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-blue-500 transition-colors">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Engineering Solutions</h2>
              <p className="text-slate-300">
                Combining hardware and software expertise to create innovative engineering solutions.
              </p>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-blue-500 transition-colors">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Problem Solving</h2>
              <p className="text-slate-300">
                Systematic approach to identifying and solving complex technical challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;

