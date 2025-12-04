import { Mail, Linkedin, Phone, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tMTQgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMTQgMTRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xNCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0xNCAyOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtLTE0IDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0xNC0yOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMCAxNGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtMjggMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />

      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8" />
        </div>

        <div className="glass p-8 rounded-2xl mb-12 border border-cyan-500/30 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Send className="text-cyan-400" size={24} />
            <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
          </div>
          <p className="text-xl text-slate-300">
            I'm currently seeking opportunities in electrical engineering internships, disciplines in hardware, electronics, and robotics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:g0yau001@louisville.edu"
            className="glass flex flex-col items-center gap-4 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:glow group"
          >
            <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all group-hover:scale-110 duration-300">
              <Mail size={32} className="text-white" />
            </div>
            <span className="text-white font-semibold text-lg">Email</span>
            <span className="text-sm text-slate-300 break-all group-hover:text-cyan-400 transition-colors">
              g0yau001@louisville.edu
            </span>
          </a>

          <a
            href="tel:5025790895"
            className="glass flex flex-col items-center gap-4 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:glow group"
          >
            <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all group-hover:scale-110 duration-300">
              <Phone size={32} className="text-white" />
            </div>
            <span className="text-white font-semibold text-lg">Phone</span>
            <span className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">(502) 579-0895</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gaudingyu-yau-343136300"
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex flex-col items-center gap-4 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:glow group"
          >
            <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all group-hover:scale-110 duration-300">
              <Linkedin size={32} className="text-white" />
            </div>
            <span className="text-white font-semibold text-lg">LinkedIn</span>
            <span className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">Connect with me</span>
          </a>
        </div>

        <div className="glass-dark border-t border-cyan-500/20 pt-8 rounded-2xl p-6 border border-cyan-500/20">
          <p className="text-slate-400">
            © 2025 Michael Yau. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
