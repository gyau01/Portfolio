import { Code, Cpu, Wrench, Sparkles } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Software',
      icon: <Code size={24} />,
      skills: [
        'SolidWorks (CAD/FEA)',
        'KiCad',
        'Altium',
        'Windchill',
        'C/C++',
        'Java',
        'Python',
        'Assembly',
        'MATLAB',
        'LabVIEW',
        'Unity'
      ]
    },
    {
      title: 'Hardware & Electronics',
      icon: <Cpu size={24} />,
      skills: [
        'Arduino',
        'Raspberry Pi',
        'PCB Design',
        'Oscilloscope',
        'Embedded Systems',
        'Circuit Analysis',
        'UniFlash',
        'LT Spice'
      ]
    },
    {
      title: 'Manufacturing & Tools',
      icon: <Wrench size={24} />,
      skills: [
        'CNC Mill',
        'CNC Router',
        'Laser Cutter',
        'Press Machine',
        'Engineering Drawings',
        '3D Printing',
        'Wood Power Tools'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tMTQgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMTQgMTRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xNCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0xNCAyOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtLTE0IDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xNC0yOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMCAxNGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMjggMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />

      <div className="absolute top-40 right-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-40 left-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 inline-flex items-center gap-3">
            <Sparkles className="text-cyan-400" size={32} />
            Skills & Expertise
            <Sparkles className="text-cyan-400" size={32} />
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 hover:glow group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all group-hover:scale-110 duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 glass-dark text-slate-300 rounded-lg text-sm border border-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
