import { GitBranch, Globe, Mail, ArrowDown, ExternalLink } from "lucide-react";

const socials = [
  { icon: GitBranch, href: "https://github.com/airawa23", label: "GitHub" },
  { icon: Globe, href: "https://linkedin.com/in/airgata", label: "LinkedIn" },
  // { icon: Mail, href: "mailto:airlanggabayu.t@email.com", label: "Email" },
];

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-violet-700/10 rounded-full blur-[80px]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-400 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Information Systems Student · Data &amp; Technology
        </div> */}

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
          Turning Data into{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Insights
          </span>
          ,{" "}
          <br className="hidden md:block" />
          Ideas into{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>

        {/* Role subtitle */}
        <p className="text-blue-400/80 text-lg md:text-xl font-medium mb-4 tracking-wide">
          Information Systems&nbsp; ·&nbsp; Data Analyst&nbsp; ·&nbsp; UI/UX Designer&nbsp; ·&nbsp; Web &amp; Mobile Developer
        </p>

        {/* Description */}
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          A passionate Information Systems graduate with a strong interest in transforming
          raw data into actionable insights, building intuitive digital experiences, and
          developing impactful web &amp; mobile applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-sm hover:from-blue-400 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            View Projects
            <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <Mail size={15} />
            Contact Me
          </button>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
