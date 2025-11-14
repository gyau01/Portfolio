import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: 'GE Aerospace',
      role: 'Systems & Defense Engineering Co-op',
      location: 'Dayton, OH',
      period: 'September 2025 – Present',
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
      highlights: [
        'Provided technical guidance in logic design and digital systems, improving lab pass rate by 30%',
        'Analyzed virtual reality (VR) equipment & racing simulators for video game design research on Unity'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-lg text-slate-700 mb-2">
                    <Briefcase size={18} />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-slate-600">{exp.location}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-600 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span className="whitespace-nowrap">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-slate-700 mt-1.5 font-bold">•</span>
                    <span className="text-slate-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg border border-slate-200">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">
            Leadership & Involvement
          </h3>

          <div className="border-l-4 border-slate-300 pl-6">
            <h4 className="text-xl font-semibold text-slate-900 mb-2">
              Engineering Academy Leader
            </h4>
            <p className="text-slate-700 mb-2">
              Brown Forman/GE Appliances Programs | Louisville, KY
            </p>
            <p className="text-slate-600 mb-4">July 2024</p>

            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-slate-700 mt-1.5 font-bold">•</span>
                <span className="text-slate-700">
                  Organized a rigorous two-week summer program, preparing 48 students for college calculus & engaging in industry tours
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-700 mt-1.5 font-bold">•</span>
                <span className="text-slate-700">
                  Advised first-year students in group and one-to-eight settings to create an academic schedule and provide involvement resources
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
