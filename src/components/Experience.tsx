import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

function Experience() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
              className="flex-shrink-0 w-80 bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-pink-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {exp.role}
              </h3>
              <p className="text-pink-500 font-medium mb-1 italic">
                {exp.company}
              </p>
              <p className="text-slate-400 text-sm mb-4 italic">
                {exp.period}
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
