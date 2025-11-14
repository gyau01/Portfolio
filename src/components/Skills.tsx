import { Code, Cpu, Wrench } from 'lucide-react';

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
    <section id="skills" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-6 text-slate-700">
                {category.icon}
                <h3 className="text-2xl font-semibold text-slate-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-sm border border-slate-200"
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
