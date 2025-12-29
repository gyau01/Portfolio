import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    {
      title: 'Embedded Systems Project',
      date: '2023',
      description: 'Developed embedded control system for real-time signal processing and data acquisition.',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-slate-900 rounded-lg overflow-hidden border border-slate-800 hover:border-pink-500 transition-colors"
            >
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-6xl text-slate-700">⚡</div>
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm mb-2 italic">{project.date}</p>
                <h3 className="text-lg font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
