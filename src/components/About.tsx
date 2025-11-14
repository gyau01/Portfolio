import { GraduationCap, Award } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-slate-700" size={28} />
              <h3 className="text-2xl font-semibold text-slate-900">Education</h3>
            </div>
            <p className="text-lg font-medium text-slate-900 mb-2">
              University of Louisville
            </p>
            <p className="text-slate-700 mb-2">
              J.B. Speed School of Engineering
            </p>
            <p className="text-slate-600 mb-4">
              Bachelor of Science in Electrical and Computer Science Engineering
            </p>
            <p className="text-slate-600 mb-2">
              Minor in Entrepreneurship
            </p>
            <div className="flex justify-between items-center pt-4 border-t border-slate-200">
              <span className="text-slate-700 font-medium">GPA: 3.5/4.0</span>
              <span className="text-slate-600">Expected May 2027</span>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-slate-700" size={28} />
              <h3 className="text-2xl font-semibold text-slate-900">Awards</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-slate-700 mt-1">•</span>
                <span className="text-slate-700">
                  Brown Forman Engineering Scholar
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-700 mt-1">•</span>
                <span className="text-slate-700">
                  Forcht Center Entrepreneurship Pitch Competition – 1st Place
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-700 mt-1">•</span>
                <span className="text-slate-700">
                  ASEE Robotics Competition – 6th Place National
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-700 mt-1">•</span>
                <span className="text-slate-700">
                  Dean's List Fall 23, 24, and Spring 25
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 overflow-hidden">
            <img
              src="/bfea-23-3240-edit_53076391397_o Small.jpeg"
              alt="Award ceremony photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-8 bg-slate-50 p-8 rounded-lg border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Immersive Robotics AR-VR',
              'Network Analysis',
              'Embedded Systems',
              'Electromagnetic',
              'Electronics',
              'Signals'
            ].map((course) => (
              <span
                key={course}
                className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
