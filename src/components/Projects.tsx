import { Trophy, Rocket } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  period: string;
  highlights: string[];
}

function Projects() {
  const projects: Project[] = [
    {
      title: 'ASEE Model Design Competition: Beaver Bot',
      subtitle: 'Awarded 6th Place in American Society for Engineering Education',
      icon: <Trophy size={24} />,
      period: 'June 2024',
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
      highlights: [
        'Modeled payload capsule system in SolidWorks CAD for flight durability and mass constraints',
        'Compiled MATLAB data into Excel and automated combustion chamber pressure & temperature analysis scripts'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Projects & Competitions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4 text-slate-700">
                {project.icon}
                <span className="text-sm font-medium text-slate-600">
                  {project.period}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-700 mb-6 font-medium">
                {project.subtitle}
              </p>

              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-slate-700 mt-1.5 font-bold">•</span>
                    <span className="text-slate-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
