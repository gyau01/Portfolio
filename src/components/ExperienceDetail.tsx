import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

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
    details: 'Part of the Sustaining and Product Support Team. This role involves comprehensive work in power systems analysis, circuit design, and system maintenance for both commercial and military aircraft.',
    powerSystemProjects: [
      { name: 'Backup Converter Troubleshooting', description: 'Performed load and thermal analysis via ATP and ESS to troubleshoot system stability. Validated current transformer inputs and diagnosed CCA architectures, significantly enhancing operational efficiency and manufacturing productivity.' },
      { name: 'RAT ESS Test Stand PWB Design/Simulation', description: 'Designed a low-pass filter PWB using Altium Designer. Conducted comprehensive white noise signal simulations in SPICE to validate signal integrity and ensure compliance with safety tolerance specifications.' },
      { name: 'Circuit Board Programming', description: 'Updated embedded firmware to 20+ GVR and ICB CCAs using TI UniFlash, optimizing signal response times and enhancing overall generator system performance.' },
    ],
    instrumentationProjects: [
      { name: 'GVR Test Data Monitoring', description: 'Resolved systemic testing failures for GVR CCAs by performing a comparative analysis between internal and supplier datasets. Diagnosed voltage discrepancies through schematic correlation and simulation, leading to the successful validation of 130+ assemblies and increasing manufacturing yield by 26%.' },
      { name: 'SCR Hybrid Compliance Upgrade', description: 'Validated SCR compliance with Form, Fit, and Function requirements through optimized test procedures. Performed Hipot testing and Gold Unit correlation to ensure hardware reliability and safety standards were met.' },
    ],
    skills: ['Power System', 'Control System Design', 'Altium Designer', 'Signal Simulations', 'Embedded Programming', 'DATA Acquisition and Analysis', 'System Troubleshooting'],
    skillsImage: '/GE.jpg',
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
    details: 'This role focused on manufacturing processes, assembly, and shop machinery.',
    assemblyProjects: [
        { name: 'Monogram Hoods', description: 'Fabricated premium 36", 48", and 53" ventilation hoods using stainless steel, brass, and titanium. Utilized the Cincinnati Press Brake for precision metal forming and managed the end-to-end assembly and quality-controlled packaging for shipment.' },
        { name: 'Monogram Refrigerator Door', description:'Managed the fabrication and assembly of high-end refrigerator doors. Performed material inspection of stainless steel and brass components, operated industrial presses, and executed precision foam-in-place insulation and structural bonding for final assembly.' },
        { name: 'HVAC System', description: 'Facilitated the transition of innovative HVAC designs into full-scale production in collaboration with design engineers. Led the lean manufacturing and assembly process. Conducted Hipot testing to validate electrical safety and system functionality.' },
    ],
    shopMachineryUsage: [
        { name: 'Makerspace Management', description: 'Managed training and equipment for the water jet, laser cutter, 3D printers, and wood/metal shops; organized shop maintenance and mentored a community of makers' },
        { name: 'Press Machine Operation', description: 'Operated the production of brackets, gaskets, and components for hoods and refrigerators. Aligned machining precision with design specifications to meet stringent quality and production standards.' },
        { name: 'CNC Machine Operation', description: 'Programmed and operated CNC machinery to produce complex, repeatable parts, including MSD water tubing pipes and the NCAA Football Pop-Tart Bowl trophy.' },
        { name: 'Laser Cutter Operation', description: 'Executed high-precision laser cutting and engraving for hoods, and fridge components, significantly improving production efficiency.' },
    ],
    skills: ['Lean Manufacturing', 'Assembly', 'CNC Machining', 'Laser Cutting', '3D Printing', 'Welding', 'Press Brake Operation', 'Quality Control'],
    skillsImage: '/FB.jpg',
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
    details: 'Detailed information about the Undergraduate Research Assistant position at University of Louisville. This role involved research in DC motor dynamics, control systems, and data acquisition.',
    skills: ['DC Motor Control', 'PI Control Loops', 'Workbench Software', 'Data Acquisition', 'Signal Analysis', 'Control System Design'],
    portfolioLink: 'https://drive.google.com/file/d/1kN1lTl3jwXHwq-AwyMxeye45CphM9Ro9/view?usp=sharing',
    projectLink: 'https://drive.google.com/file/d/1FpGiq-qrGuYDq0ui6BVK6xmatl_-oCPN/view?usp=sharing',
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
    details: 'Detailed information about the Cybersecurity Lab Teaching Assistant position at University of Louisville. This role involved teaching logic design, digital systems, and providing technical support.',
    skills: ['Logic Design', 'Digital Systems', 'Unity Simulation', 'VR Systems', 'System Troubleshooting', 'Technical Instruction'],
  },
];

function ExperienceDetail() {
  const { id } = useParams<{ id: string }>();
  const experience = experiences.find(exp => exp.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!experience) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Experience Not Found</h1>
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
          Back to Experience
        </Link>

        <div className="bg-slate-900 rounded-lg p-8 border border-slate-800">
          {experience.logo && (
            <div className="mb-6">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="h-16 object-contain"
              />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {experience.role}
          </h1>
          <p className="text-blue-500 font-medium text-xl mb-2">
            {experience.company}
          </p>
          <p className="text-slate-400 text-lg mb-8 italic">
            {experience.period}
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Key Responsibilities</h2>
            <ul className="text-slate-300 text-base space-y-3">
              {experience.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="flex-1">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Professional Development</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {experience.details}
            </p>
          </div>

          {experience.powerSystemProjects && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Power System Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experience.powerSystemProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800 rounded-lg p-4 border-2 border-slate-600 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-slate-300 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {experience.assemblyProjects && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Assembly Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experience.assemblyProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800 rounded-lg p-4 border-2 border-slate-600 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-slate-300 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {experience.instrumentationProjects && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Instrumentation Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experience.instrumentationProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800 rounded-lg p-4 border-2 border-slate-600 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-slate-300 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {experience.shopMachineryUsage && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Shop Machinery Usage</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experience.shopMachineryUsage.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800 rounded-lg p-4 border-2 border-slate-600 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-slate-300 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {experience.skills && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {experience.skillsImage && (
                <div className="mt-6 flex justify-center">
                  <img
                    src={experience.skillsImage}
                    alt="Skills visualization"
                    className="w-full max-w-md mx-auto rounded-lg border-2 border-slate-700"
                  />
                </div>
              )}
            </div>
          )}

          {(experience.portfolioLink || experience.projectLink) && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Additional Resources</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                {experience.portfolioLink && (
                  <a
                    href={experience.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 hover:scale-105 text-center"
                  >
                    View Portfolio
                  </a>
                )}
                {experience.projectLink && (
                  <a
                    href={experience.projectLink}
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

export default ExperienceDetail;

