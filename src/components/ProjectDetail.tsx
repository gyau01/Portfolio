import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const projects = [
  {
    id: 'macropad',
    title: '3 by 3 MacroPad - Personal Project',
    date: 'Summer 2025',
    description: 'Developed a customized 3 by 3 macro pad ultized CAD, QMK, laser cutting, soldering, welding, and 3D printing.',
    logo: '/macpad.jpg',
    details: 'A comprehensive project involving the design and fabrication of a custom mechanical keyboard macro pad controlled by a Atmega32u4 microcontroller. This project combined multiple engineering disciplines including CAD/PCB design, firmware programming, and manufacturing processes.',
    bullets: [
      'CAD Design: Created detailed 3D models and technical drawings',
      'PCB Design: Designed a custom PCB for the macro pad',
      'Firmware: Programmed QMK firmware for custom key mappings',
      'Manufacturing: Utilized laser cutting, 3D printing, soldering, and welding',
    ],
    skills: ['CAD Design (OnShape)', 'KiCAD', 'QMK Programming', 'Laser Cutting', '3D Printing', 'Soldering', 'Welding', 'Microcontroller'],
    portfolioLink: 'https://drive.google.com/file/d/1kN1lTl3jwXHwq-AwyMxeye45CphM9Ro9/view?usp=sharing',
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship Pitch Competition',
    date: 'December 2024',
    description: 'Won 1st place at Forcht Center Entrepreneurship Pitch Competition for innovative engineering solution.',
    logo: '/forcht-center.jpg',
    details: 'Selected as the First Place winner among 100+ applicants for a five-minute video presentation on business strategy and personal brand design. Recognized for innovative communication and strategic thinking. Award included a $500 student account credit, a $2,500 Innovation MBA scholarship (pending admission), a STEM Entrepreneurship minor recommendation, and a consulting session with the Forcht Center for Entrepreneurship.',
    bullets: [
      'Business Planning: Developed comprehensive business plan and pitch',
      'Engineering Innovation: Designed technical solution to address market needs',
      'Presentation: Delivered compelling pitch to judges and investors',
    ],
    skills: ['Business Planning', 'Technical Design', 'Public Speaking', 'Innovation'],
  },
  {
    id: 'asee-beaver-bot',
    title: 'ASEE Model Design Competition: Beaver Bot',
    date: 'June 2024',
    description: 'Designed an autonomous robot in Arduino to collect and transport targets.',
    logo: '/asee_logo.svg',
    details: 'Participated in the ASEE Model Design Competition, creating an autonomous robot capable of collecting and transporting targets with high accuracy using Arduino-based control systems.',
    bullets: [
      'Autonomous Navigation: Implemented path planning and obstacle avoidance',
      'Target Collection: Designed mechanical systems for target acquisition',
      'Control Systems: Programmed Arduino-based control algorithms',
    ],
    skills: ['CAD Design (SolidWorks)', 'Arduino', 'Electronics', 'Circuit Design', 'Robotics', 'Control Systems', 'Motor Driver Control', 'Team Collaboration', 'Presentation'],
    portfolioLink: 'https://drive.google.com/file/d/1kN1lTl3jwXHwq-AwyMxeye45CphM9Ro9/view?usp=sharing',
    projectLink: 'https://drive.google.com/file/d/1c69I_QknwQa9OhF9ULb608r46LOqbHtJ/view?usp=sharing',
  },
  {
    id: 'nasa-rocketry',
    title: 'NASA USLI Rocketry Competition',
    date: '2023 - 2024',
    description: 'Modeled in SolidWorks CAD and utilized MATLAB scripts.',
    logo: '/image copy copy copy.png',
    details: 'Participated in the NASA USLI (University Student Launch Initiative) Rocketry Competition, contributing to the design and analysis of rocket systems using advanced CAD and simulation tools. Developed and implemented a MATLAB-based computational model for optimizing CO₂ cold gas engine nozzle geometry using the Rao Parabolic Bell Approximation. The tool automates nozzle dimension recalculations under varying thermodynamic conditions, enhancing design efficiency for payload landing systems.',
    bullets: [
      'CAD Modeling: Created detailed SolidWorks models of rocket components',
      'Simulation: Utilized MATLAB for trajectory and performance analysis',
      'Team Collaboration: Worked with multidisciplinary team on complex project',
    ],
    skills: ['SolidWorks', 'MATLAB', 'Excel', 'Aerospace Engineering', 'Team Collaboration'],
    projectLink: 'https://drive.google.com/file/d/1W_wwFCKFbLZllGvwFtWAZzNsAIkgT03Z/view?usp=sharing',
  },
];

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(proj => proj.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-500 hover:text-blue-400">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4 bg-black text-white pt-32">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <div className="bg-slate-900 rounded-lg p-8 border border-slate-800">
          {project.logo && (
            <div className="mb-6">
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="h-16 object-contain"
              />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-slate-400 text-lg mb-8 italic">
            {project.date}
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            <ul className="text-slate-300 text-base space-y-3">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="flex-1">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {project.details}
            </p>
          </div>

          {project.skills && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(project.portfolioLink || project.projectLink) && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Additional Resources</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                {project.portfolioLink && (
                  <a
                    href={project.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 hover:scale-105 text-center"
                  >
                    View Portfolio
                  </a>
                )}
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 text-center"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;

