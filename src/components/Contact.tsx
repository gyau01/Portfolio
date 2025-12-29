import { Mail, Linkedin, Github, Youtube } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-black text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Get in touch</h2>

        <div className="flex justify-center gap-12 flex-wrap">
          <a
            href="mailto:g0yau001@louisville.edu"
            className="flex flex-col items-center gap-3 text-white hover:text-pink-500 transition-colors group"
          >
            <Mail size={32} />
            <span className="text-sm">Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gaudingyu-yau-343136300"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 text-white hover:text-pink-500 transition-colors group"
          >
            <Linkedin size={32} />
            <span className="text-sm">LinkedIn</span>
          </a>

          <a
            href="https://github.com/michaelyau"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 text-white hover:text-pink-500 transition-colors group"
          >
            <Github size={32} />
            <span className="text-sm">GitHub</span>
          </a>

          <a
            href="#"
            className="flex flex-col items-center gap-3 text-white hover:text-pink-500 transition-colors group"
          >
            <Youtube size={32} />
            <span className="text-sm">YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
