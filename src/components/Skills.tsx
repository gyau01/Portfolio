function Skills() {
  const skillCategories = {
    'Technical Skills': [
      'Analog/Digital Processing',
      'CAD/PCB Design',
      'Control Systems',
      'Embedded Systems',
      'Electronics',
      'Signals and Systems',
      'Power Systems',
    ],
    'Programming Languages': [
      'Python',
      'Java',
      'Assembly',
      'MATLAB',
      'C/C++',
      'GCode',
      'Git',
    ],
    'Tools and Frameworks': [
      'SolidWorks',
      'OnShape',
      'Altium',
      'KiCad',
      'Arduino',
      'Workbench',
      'SPICE',
      'NI Multisim',
    ],
  };

  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Skills</h2>

        <div className="space-y-10">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="text-center">
              <h3 className="text-3xl font-bold text-blue-500 mb-6">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 bg-slate-800 border border-slate-700 text-white text-base font-medium rounded-lg hover:border-blue-500 hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
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
