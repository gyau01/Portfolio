function Skills() {
  const skills = {
    'Technical Skills': [
      'Embedded Systems',
      'Analog/Digital Processing',
      'Circuit Analysis',
      'PCB Design',
      'Control Systems',
      'Instrumentation',
    ],
    'Programming Languages': [
      'C/C++',
      'Python',
      'Java',
      'Assembly',
      'MATLAB',
    ],
    'Tools and Software': [
      'SolidWorks (CAD/FEA)',
      'Altium',
      'KiCad',
      'LabVIEW',
      'LT Spice',
      'UniFlash',
      'Oscilloscope',
    ],
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Skills</h2>

        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category}:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {items.map((skill) => (
                  <div key={skill} className="text-slate-300">
                    {skill}
                  </div>
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
