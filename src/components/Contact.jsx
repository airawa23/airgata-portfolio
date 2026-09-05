import { useState } from "react";
import { Mail, GitBranch, Globe, Send, CheckCircle2, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "airlanggabayu.t@email.com",
    href: "mailto:airlanggabayu.t@email.com",
    color: "text-blue-400",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/airgata",
    href: "https://linkedin.com/in/airgata",
    color: "text-indigo-400",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/airawa23",
    href: "https://github.com/airawa23",
    color: "text-slate-300",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Surabaya, Indonesia",
    href: null,
    color: "text-violet-400",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async (no backend)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px]" />
        <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            I&apos;m currently open to internship and full-time opportunities in Data
            Analytics, Business Analysis, UI/UX, and IT. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Contact info */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] ${color} flex-shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-300 hover:text-white transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-300">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/5 border border-blue-500/20">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="text-white font-medium">Available for opportunities</span>
                {" "}— I&apos;m actively looking for internship and graduate roles in Data
                Analytics, Business Analysis, UI/UX, and IT-related fields.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="p-4 rounded-full bg-blue-500/10 text-blue-400">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-white font-semibold text-lg">
                  Message Sent!
                </h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thank you for reaching out. I&apos;ll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hello! I'd like to connect about..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-sm hover:from-blue-400 hover:to-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
