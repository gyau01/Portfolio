import { Mail, Linkedin, Phone } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-black text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Get in touch</h2>

        <div className="flex justify-center gap-12 flex-wrap">
          <a
            href="mailto:g0yau001@louisville.edu"
            className="flex flex-col items-center gap-3 text-white hover:text-blue-500 transition-colors group"
          >
            <Mail size={32} />
            <span className="text-sm">Email</span>
          </a>

          <a
            href="tel:+15025790895"
            className="flex flex-col items-center gap-3 text-white hover:text-blue-500 transition-colors group"
          >
            <Phone size={32} />
            <span className="text-sm">(502) 579-0895</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gaudingyu-yau"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 text-white hover:text-blue-500 transition-colors group"
          >
            <Linkedin size={32} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
