import { GraduationCap, Award, Zap, Sparkles } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tMTQgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMTQgMTRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xNCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0xNCAyOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtLTE0IDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xNC0yOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMCAxNGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMjggMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />

      <div className="absolute top-40 right-20 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 inline-flex items-center gap-3">
            <Sparkles className="text-cyan-400" size={32} />
            About Me
            <Sparkles className="text-cyan-400" size={32} />
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="mb-12 group relative overflow-hidden">
          <div className="glass p-10 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 hover:glow">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 animate-float">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50">
                  <Zap className="text-white" size={32} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-slate-200 leading-relaxed text-lg">
                  Highly motivated Junior pursuing an Electrical Engineering degree at the University of Louisville with passion and an unwavering thirst for knowledge. Actively enhancing electrical, coding, circuit design, and electronics skills to apply to real-world situations. Continuously seeking opportunities for internships and research that will expand my skill set. I thrive on challenges and am eager to discover innovative solutions that enable me to make a meaningful contribution to the industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:glow group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <p className="text-lg font-medium text-cyan-400 mb-2">
              University of Louisville
            </p>
            <p className="text-slate-300 mb-2">
              J.B. Speed School of Engineering
            </p>
            <p className="text-slate-400 mb-4 text-sm">
              Bachelor of Science in Electrical and Computer Science Engineering
            </p>
            <p className="text-slate-400 mb-4 text-sm">
              Minor in Entrepreneurship
            </p>
            <div className="flex justify-between items-center pt-4 border-t border-cyan-500/20">
              <span className="text-cyan-400 font-bold">GPA: 3.5/4.0</span>
              <span className="text-slate-400 text-sm"> Expected May 2027</span>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:glow group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Awards</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span className="text-slate-300 text-sm">
                  Brown Forman Engineering Scholar
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span className="text-slate-300 text-sm">
                  Forcht Center Entrepreneurship Pitch Competition – 1st Place
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span className="text-slate-300 text-sm">
                  ASEE Robotics Competition – 6th Place National
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span className="text-slate-300 text-sm">
                  Dean's List Fall 23, 24, and Spring 25
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-cyan-500/30 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:glow group">
            <div className="relative overflow-hidden h-full">
              <img
                src="/bfea-23-3240-edit_53076391397_o Small.jpeg"
                alt="Award ceremony photo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-8 glass p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Immersive Robotics AR-VR',
              'Network Analysis',
              'Embedded Systems',
              'Electromagnetic',
              'Electronics',
              'Signals',
              'Linear Algebra',
              'Calculus I - III',
              'DE',
            ].map((course) => (
              <span
                key={course}
                className="px-4 py-2 glass-dark border border-cyan-500/20 rounded-xl text-slate-300 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
