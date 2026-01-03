import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 'macropad',
      title: '3 by 3 MacroPad - Personal Project',
      date: 'Summer 2025',
      description: 'Developed a customized 3 by 3 macro pad ultized CAD, QMK, laser cutting, soldering, welding, and 3D printing.',
      logo: '/macpad.jpg',
    },
    {
      id: 'entrepreneurship',
      title: 'Entrepreneurship Pitch Competition',
      date: 'December 2024',
      description: 'Won 1st place at Forcht Center Entrepreneurship Pitch Competition for innovative engineering solution.',
      logo: '/forcht-center.jpg',
    },
    {
      id: 'asee-beaver-bot',
      title: 'ASEE Model Design Competition: Beaver Bot',
      date: 'June 2024',
      description: 'Designed an autonomous robot in Arduino to collect and transport targets.',
      logo: '/asee_logo.svg',
    },
    {
      id: 'nasa-rocketry',
      title: 'NASA USLI Rocketry Competition',
      date: '2023 - 2024',
      description: 'Modeled in SolidWorks CAD and utilized MATLAB scripts.',
      logo: '/image copy copy copy.png',
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
              className="flex-shrink-0 w-80 bg-slate-900 rounded-lg overflow-hidden border border-slate-800 hover:border-blue-500 transition-colors"
            >
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-4">
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      console.error('Failed to load image:', project.logo);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="text-6xl text-slate-700">⚡</div>';
                      }
                    }}
                  />
                ) : (
                  <div className="text-6xl text-slate-700">⚡</div>
                )}
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm mb-2 italic">{project.date}</p>
                <h3 className="text-lg font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <Link
                  to={`/project/${project.id}`}
                  className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
