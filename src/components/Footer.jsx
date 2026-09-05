import { GitBranch, Globe, Mail, Heart } from "lucide-react";

const socials = [
  { icon: GitBranch, href: "https://github.com/airawa23", label: "GitHub" },
  { icon: Globe, href: "https://linkedin.com/in/airgata", label: "LinkedIn" },
  // { icon: Mail, href: "mailto:airlanggabayu.t@email.com", label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-white font-bold text-lg mb-1">
              <span className="text-blue-400">{"<"}</span>
              Airlangga Bayu Taqwa
              <span className="text-blue-400">{" />"}</span>
            </div>
            <p className="text-slate-500 text-sm">
              Information Systems · Data &amp; Technology
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Airgata. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <Heart size={10} className="text-red-500/60" /> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
