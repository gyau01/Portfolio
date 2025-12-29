function Skills() {
  const skillCategories = {
    'Technical Skills': [
      { name: 'Embedded Systems', color: 'bg-purple-600' },
      { name: 'Analog/Digital Processing', color: 'bg-blue-600' },
      { name: 'PCB Design', color: 'bg-yellow-600' },
      { name: 'Control Systems', color: 'bg-pink-600' },
      { name: 'Instrumentation', color: 'bg-green-600' },
    ],
    'Programming Languages': [
      { name: 'C/C++', color: 'bg-purple-600' },
      { name: 'Python', color: 'bg-yellow-600' },
      { name: 'Java', color: 'bg-red-600' },
      { name: 'Assembly', color: 'bg-blue-600' },
      { name: 'MATLAB', color: 'bg-orange-600' },
    ],
    'Tools and Frameworks': [
      { name: 'SolidWorks', color: 'bg-yellow-600' },
      { name: 'Altium', color: 'bg-green-600' },
      { name: 'KiCad', color: 'bg-blue-600' },
      { name: 'LabVIEW', color: 'bg-red-600' },
    ],
  };

  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Skills</h2>

        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`${skill.color} text-white px-4 py-2 rounded text-sm font-mono`}
                  >
                    {skill.name}
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
