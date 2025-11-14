import { Mail, Linkedin, Phone } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-slate-300 mb-12">
          I'm currently seeking opportunities in electrical engineering internships, disciplines in hardware, electronics, and robotics.
          <br />
          Let's connect!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:g0yau001@louisville.edu"
            className="flex flex-col items-center gap-3 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Mail size={32} className="text-slate-300" />
            <span className="text-slate-300">Email</span>
            <span className="text-sm text-slate-400 break-all">
              g0yau001@louisville.edu
            </span>
          </a>

          <a
            href="tel:5025790895"
            className="flex flex-col items-center gap-3 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Phone size={32} className="text-slate-300" />
            <span className="text-slate-300">Phone</span>
            <span className="text-sm text-slate-400">(502) 579-0895</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gaudingyu-yau-343136300"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Linkedin size={32} className="text-slate-300" />
            <span className="text-slate-300">LinkedIn</span>
            <span className="text-sm text-slate-400">Connect with me</span>
          </a>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-400">
            © 2024 Gau Ding Yu (Michael) Yau. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
