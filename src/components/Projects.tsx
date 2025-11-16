import { Trophy, Rocket } from 'lucide-react';

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
      logo: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Ccircle cx=%22100%22 cy=%22100%22 r=%2295%22 fill=%22%230b3d91%22 stroke=%22%23ffffff%22 stroke-width=%222%22/%3E%3Ctext x=%22100%22 y=%22115%22 font-size=%2270%22 font-weight=%22bold%22 fill=%22%23ffffff%22 text-anchor=%22middle%22 font-family=%22sans-serif%22%3ENASA%3C/text%3E%3C/svg%3E',
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
              className="group relative overflow-hidden bg-white p-8 rounded-lg border border-slate-200 hover:border-slate-400 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={project.logo}
                    alt={`Logo`}
                    className="w-14 h-14 rounded-lg object-contain bg-white p-1 border border-slate-200 flex-shrink-0"
                  />
                  <div className="flex items-center gap-2 text-slate-600 px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-medium h-fit">
                    <span>{project.period}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-700 mb-6 font-medium text-sm">
                  {project.subtitle}
                </p>

                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-slate-700 mt-1.5 font-bold text-sm">•</span>
                      <span className="text-slate-700 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 via-slate-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
