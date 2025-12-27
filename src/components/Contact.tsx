import { Mail, Linkedin, Github } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Get in touch</h2>

        <div className="flex justify-center gap-8 flex-wrap">
          <a
            href="mailto:g0yau001@louisville.edu"
            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gaudingyu-yau-343136300"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/michaelyau"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
