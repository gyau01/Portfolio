
function Experience() {
  const experiences = [
    {
      role: 'Systems & Defense Engineering Co-op',
      company: 'GE Aerospace',
      period: 'Sep 2025 - Present',
      description: 'Conduct system diagnostics on commercial aircraft power generation systems via ATP, ESS, CT, & vibration tests.',
    },
    {
      role: 'Student Intern',
      company: 'FirstBuild, GE Appliances',
      period: 'Aug 2024 - Aug 2025',
      description: 'Collaborated with cross-functional teams to prototype next-gen smart appliance innovations.',
    },
    {
      role: 'Undergraduate Research Assistant',
      company: 'University of Louisville',
      period: 'May 2024 - Jul 2024',
      description: 'Simulated PI control loops in Workbench software to analyze DC motor dynamics; increased efficiency by 80%.',
    },
    {
      role: 'Cybersecurity Lab Teaching Assistant',
      company: 'University of Louisville',
      period: 'Aug 2023 - Jul 2024',
      description: 'Provided technical guidance in logic design and digital systems, improving lab pass rate by 30%.',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 pb-12 border-b border-slate-800 last:border-b-0">
            <h3 className="text-2xl font-bold text-white mb-2">
              {exp.role}
            </h3>
            <p className="text-cyan-400 font-medium mb-1 italic">
              {exp.company}
            </p>
            <p className="text-slate-400 text-sm mb-4 italic">
              {exp.period}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
