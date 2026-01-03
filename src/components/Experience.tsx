import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Experience() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: 'ge-aerospace',
      role: 'Systems & Defense Engineer (Intern)',
      company: 'GE Aerospace',
      period: 'Sep 2025 - Dec 2025',
      bullets: [
        'Power Systems: Load Analysis & Power Budgeting',
        'Design: Circuit Design & Simulation (CAD/SPICE)',
        'Maintenance: System Troubleshooting, controls & Fault Isolation',
      ],
      logo: '/image copy.png',
    },
    {
      id: 'firstbuild',
      role: 'Student Technician',
      company: 'FirstBuild, GE Appliances',
      period: 'Aug 2024 - Aug 2025',
      bullets: [
        'Manufacturing: Lean Methodologies (5S/Kaizen), Assembly, and Shop Machinery.',
        'Systems: Technical Support, Sustainability Initiatives, and Process Optimization.',
      ],
      logo: '/image copy copy.png',
    },
    {
      id: 'uofl-research',
      role: 'Undergraduate Research Assistant',
      company: 'University of Louisville',
      period: 'May 2024 - Jul 2024',
      bullets: [
        'Power Systems: DC Motor Dynamics and speed control',
        'Control Systems: PI control loop simulation (Workbench)',
        'Instrumentation: Data acquisition and analysis',
      ],
      logo: '/uofl_logo.jpg',
    },
    {
      id: 'uofl-teaching',
      role: 'Cybersecurity Lab Teaching Assistant',
      company: 'University of Louisville',
      period: 'Aug 2023 - Jul 2024',
      bullets: [
        'Logic Design: Procedure Logic Design and Simulation (Unity)',
        'Digital Systems: Digital Systems set up and troubleshooting (VR/Racing Sims)',
      ],
      logo: '/uofl_logo.jpg',
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
    <section id="experience" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
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
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-blue-500 transition-colors"
            >
              {exp.logo && (
                <div className="mb-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-12 object-contain"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">
                {exp.role}
              </h3>
              <p className="text-blue-500 font-medium mb-1 italic">
                {exp.company}
              </p>
              <p className="text-slate-400 text-sm mb-4 italic">
                {exp.period}
              </p>
              {exp.bullets && (
                <ul className="text-slate-300 text-sm space-y-2 mb-4">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                      <span className="flex-1">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Link
                to={`/experience/${exp.id}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
