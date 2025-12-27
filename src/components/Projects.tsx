function Projects() {
  const projects = [
    {
      title: 'ASEE Model Design Competition: Beaver Bot',
      date: 'June 2024',
      description: 'Designed an autonomous robot in Arduino to collect and transport targets, achieving 96% path completion accuracy.',
    },
    {
      title: 'NASA USLI Rocketry Competition',
      date: '2023 - 2024',
      description: 'Modeled payload capsule system in SolidWorks CAD for flight durability and mass constraints.',
    },
    {
      title: 'Entrepreneurship Pitch Competition',
      date: 'December 2024',
      description: 'Won 1st place at Forcht Center Entrepreneurship Pitch Competition for innovative engineering solution.',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-3 italic">
                {project.date}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
