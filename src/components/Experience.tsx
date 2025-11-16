import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

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
      logo: '/image.png',
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
      logo: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect x=%2220%22 y=%2260%22 width=%2260%22 height=%2280%22 fill=%22%23ff7a00%22 rx=%225%22/%3E%3Crect x=%22120%22 y=%2260%22 width=%2260%22 height=%2220%22 fill=%22%23ff7a00%22 rx=%225%22/%3E%3Crect x=%22120%22 y=%22100%22 width=%2260%22 height=%2220%22 fill=%22%23ff7a00%22 rx=%225%22/%3E%3C/svg%3E',
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
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Professional Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-lg border border-slate-200 hover:border-slate-400 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="flex-1 flex gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-16 h-16 rounded-lg object-contain bg-white p-2 border border-slate-200"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
                        <h3 className="text-2xl font-bold text-slate-900">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-1">
                          <Briefcase size={18} className="text-cyan-600" />
                          <span>{exp.company}</span>
                        </div>
                        <p className="text-slate-600 text-sm">{exp.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 mt-4 md:mt-0 px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium">
                    <Calendar size={16} className="text-slate-700" />
                    <span className="whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>

                <div className="ml-4 border-l-2 border-slate-200 pl-6 space-y-3 mt-6">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ArrowRight size={16} className="text-cyan-500 flex-shrink-0 mt-1" />
                      <span className="text-slate-700 text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-12 group relative overflow-hidden bg-white p-8 rounded-lg border border-slate-200 hover:border-slate-400 transition-all duration-300 hover:shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
              <h3 className="text-2xl font-bold text-slate-900">
                Leadership & Involvement
              </h3>
            </div>

            <div className="ml-4 border-l-2 border-slate-200 pl-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                Engineering Academy Leader
              </h4>
              <p className="text-slate-600 text-sm font-medium mb-1">
                Brown Forman/GE Appliances Programs | Louisville, KY
              </p>
              <p className="text-slate-500 text-xs mb-4">July 2024</p>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <ArrowRight size={14} className="text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 text-sm">
                    Organized a rigorous two-week summer program, preparing 48 students for college calculus & engaging in industry tours
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight size={14} className="text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 text-sm">
                    Advised first-year students in group and one-to-eight settings to create an academic schedule and provide involvement resources
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </section>
  );
}

export default Experience;
