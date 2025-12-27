function About() {
  const education = [
    {
      degree: 'B.S. in Electrical and Computer Science Engineering',
      school: 'University of Louisville',
      period: 'Fall 2020 - May 2027',
      details: [
        'J.B. Speed School of Engineering',
        'Minor in Entrepreneurship',
        'GPA: 3.5/4.0',
      ],
      coursework: [
        'Immersive Robotics AR-VR',
        'Network Analysis',
        'Embedded Systems',
        'Electromagnetic',
        'Electronics',
        'Signals',
      ],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <div key={index} className="mb-12 pb-12 border-b border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-2">
              {edu.degree}
            </h3>
            <p className="text-cyan-400 font-medium mb-1 italic">
              {edu.school}
            </p>
            <p className="text-slate-400 text-sm mb-4 italic">
              {edu.period}
            </p>
            <div className="space-y-1 mb-4">
              {edu.details.map((detail, idx) => (
                <p key={idx} className="text-slate-300">
                  {detail}
                </p>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-slate-400 text-sm mb-2">Relevant coursework:</p>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-slate-300 text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
