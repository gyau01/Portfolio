import { Trophy, Rocket, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  period: string;
  highlights: string[];
  logo: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: 'ASEE Model Design Competition: Beaver Bot',
      subtitle: 'Awarded 6th Place in American Society for Engineering Education',
      icon: <Trophy size={24} />,
      period: 'June 2024',
      logo: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Ccircle cx=%22100%22 cy=%22100%22 r=%2295%22 fill=%22%23c41c3b%22 stroke=%22%23ffffff%22 stroke-width=%222%22/%3E%3Ctext x=%22100%22 y=%22120%22 font-size=%2280%22 font-weight=%22bold%22 fill=%22%23ffffff%22 text-anchor=%22middle%22 font-family=%22sans-serif%22%3EASEE%3C/text%3E%3C/svg%3E',
      highlights: [
        'Designed an autonomous robot in Arduino to collect and transport targets, achieving 96% path completion accuracy',
        'Led system integration of motor controls and collector gear modules, optimizing field navigation algorithms',
        'Presented engineering documentation, design rationale, technical troubleshooting, and solutions to ASEE judges'
      ]
    },
    {
      title: 'NASA USLI Rocketry Competition 2023–2024',
      subtitle: 'Louisville River City Rocketry: Payload Member',
      icon: <Rocket size={24} />,
      period: '2023 – 2024',
      logo: 'image copy copy copy.png',
      highlights: [
        'Modeled payload capsule system in SolidWorks CAD for flight durability and mass constraints',
        'Compiled MATLAB data into Excel and automated combustion chamber pressure & temperature analysis scripts'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tMTQgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMTQgMTRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xNCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0xNCAyOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtLTE0IDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xNC0yOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMCAxNGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMjggMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />

      <div className="absolute top-40 left-20 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 inline-flex items-center gap-3">
            <Sparkles className="text-cyan-400" size={32} />
            Projects & Competitions
            <Sparkles className="text-cyan-400" size={32} />
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden glass rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 hover:glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-500/50 shadow-lg shadow-cyan-500/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={project.logo}
                      alt="Logo"
                      className="w-full h-full object-contain bg-white p-2"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 px-4 py-2 glass-dark rounded-xl text-xs font-medium h-fit border border-cyan-500/20">
                    <span>{project.period}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 font-medium text-sm">
                  {project.subtitle}
                </p>

                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <span className="text-cyan-500 mt-1.5 font-bold text-sm group-hover/item:translate-x-1 transition-transform">▸</span>
                      <span className="text-slate-300 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
