import { Briefcase, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  logo: string;
}

function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: 'GE Aerospace',
      role: 'Systems & Defense Engineering Co-op',
      location: 'Dayton, OH',
      period: 'September 2025 – Present',
      logo: '/image copy.png',
      highlights: [
        'Conduct system diagnostics on commercial aircraft power generation systems via ATP, ESS, CT, & vibration tests',
        'Design circuitry and produce PCB units in Altium for the jet generator firing and blanking signal test stands',
        'Resolve persistent GVR data discrepancies via circuit analysis and LT Spice simulation, improving data accuracy',
        'Program embedded firmware on UniFlash for GVR/ICB combat generation systems, optimizing signal responses'
      ]
    },
    {
      company: 'FirstBuild, GE Appliances',
      role: 'Student Intern',
      location: 'Louisville, KY',
      period: 'August 2024 – August 2025',
      logo: 'image copy copy.png',
      highlights: [
        'Collaborated with cross-functional teams to prototype next-gen smart appliance innovations',
        'Operated and programmed shop floor machinery to produce components for appliance manufacturing',
        'Managed Makerspace to instruct 50+ visitors on safely using laser cutter, power tools, 3D, and resin printers weekly'
      ]
    },
    {
      company: 'University of Louisville',
      role: 'Undergraduate Research Assistant',
      location: 'Louisville, KY',
      period: 'May 2024 – July 2024',
      logo: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Ccircle cx=%22100%22 cy=%22100%22 r=%2295%22 fill=%22%23c41c3b%22 stroke=%22%23ffffff%22 stroke-width=%222%22/%3E%3Ctext x=%22100%22 y=%22120%22 font-size=%22100%22 font-weight=%22bold%22 fill=%22%23ffffff%22 text-anchor=%22middle%22 font-family=%22serif%22%3EUL%3C/text%3E%3C/svg%3E',
      highlights: [
        'Simulated PI control loops in Workbench software to analyze DC motor dynamics; increased efficiency by 80%',
        'Integrated dynamometer hardware with LabVIEW data acquisition for real-time performance verification',
        'Presented published results at the UofL Summer Undergraduate Engineering Research Banquet'
      ]
    },
    {
      company: 'University of Louisville',
      role: 'Cybersecurity Lab Teaching Assistant',
      location: 'Louisville, KY',
      period: 'August 2023 – July 2024',
      logo: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Ccircle cx=%22100%22 cy=%22100%22 r=%2295%22 fill=%22%23c41c3b%22 stroke=%22%23ffffff%22 stroke-width=%222%22/%3E%3Ctext x=%22100%22 y=%22120%22 font-size=%22100%22 font-weight=%22bold%22 fill=%22%23ffffff%22 text-anchor=%22middle%22 font-family=%22serif%22%3EUL%3C/text%3E%3C/svg%3E',
      highlights: [
        'Provided technical guidance in logic design and digital systems, improving lab pass rate by 30%',
        'Analyzed virtual reality (VR) equipment & racing simulators for video game design research on Unity'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tMTQgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMTQgMTRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xNCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0xNCAyOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtLTE0IDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xNC0yOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMCAxNGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMjggMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 inline-flex items-center gap-3">
            <Sparkles className="text-cyan-400" size={32} />
            Professional Experience
            <Sparkles className="text-cyan-400" size={32} />
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative overflow-hidden glass rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 hover:glow"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="flex-1 flex gap-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-500/50 shadow-lg shadow-cyan-500/20">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain bg-white p-2"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50" />
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center gap-2 text-lg font-semibold text-slate-300 mb-1">
                          <Briefcase size={18} className="text-cyan-500" />
                          <span>{exp.company}</span>
                        </div>
                        <p className="text-slate-400 text-sm">{exp.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 mt-4 md:mt-0 px-4 py-2 glass-dark rounded-xl text-sm font-medium border border-cyan-500/20">
                    <Calendar size={16} className="text-cyan-500" />
                    <span className="whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>

                <div className="ml-4 border-l-2 border-cyan-500/30 pl-6 space-y-3 mt-6">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <ArrowRight size={16} className="text-cyan-500 flex-shrink-0 mt-1 group-hover/item:translate-x-1 transition-transform" />
                      <span className="text-slate-300 text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-12 group relative overflow-hidden glass p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 hover:glow">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50" />
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Leadership & Involvement
              </h3>
            </div>

            <div className="ml-4 border-l-2 border-cyan-500/30 pl-6">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-lg shadow-cyan-500/50" />
                Engineering Academy Leader
              </h4>
              <p className="text-slate-300 text-sm font-medium mb-1">
                Brown Forman/GE Appliances Programs | Louisville, KY
              </p>
              <p className="text-slate-400 text-xs mb-4">July 2024</p>

              <div className="space-y-2">
                <div className="flex items-start gap-3 group/item">
                  <ArrowRight size={14} className="text-blue-500 flex-shrink-0 mt-1 group-hover/item:translate-x-1 transition-transform" />
                  <span className="text-slate-300 text-sm">
                    Organized a rigorous two-week summer program, preparing 48 students for college calculus & engaging in industry tours
                  </span>
                </div>
                <div className="flex items-start gap-3 group/item">
                  <ArrowRight size={14} className="text-blue-500 flex-shrink-0 mt-1 group-hover/item:translate-x-1 transition-transform" />
                  <span className="text-slate-300 text-sm">
                    Advised first-year students in group and one-to-eight settings to create an academic schedule and provide involvement resources
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </section>
  );
}

export default Experience;
