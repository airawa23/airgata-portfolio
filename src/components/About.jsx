import { BarChart3, Palette, Code2, Briefcase } from "lucide-react";
import profileImage4 from "../assets/ise.JPG";
import { Network } from "lucide-react";

const interests = [
  {
    icon: Network,
    title: "Networking",
    description:
      "Exploring network configuration, connectivity, and troubleshooting using Cisco technologies.",
    color: "emerald",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transforming raw data into actionable business insights through analysis and visualization.",
    color: "blue",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive, user-centered interfaces with a focus on usability and visual clarity.",
    color: "violet",
  },
  {
    icon: Code2,
    title: "Web & Mobile Dev",
    description:
      "Building full-stack web and mobile applications using modern frameworks and tools.",
    color: "cyan",
  },
];

const colorMap = {
  blue: "from-blue-500/10 to-blue-600/5 border-blue-500/20 text-blue-400",
  indigo:
    "from-indigo-500/10 to-indigo-600/5 border-indigo-500/20 text-indigo-400",
  violet:
    "from-violet-500/10 to-violet-600/5 border-violet-500/20 text-violet-400",
  cyan: "from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 text-cyan-400",
  emerald:
    "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 text-emerald-400",
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Background &amp; Focus
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex justify-center">
            <img
              src={profileImage4}
              alt="Your Name"
              className="w-full max-w-sm h-130 rounded-2xl object-cover border border-white/[0.07] shadow-lg shadow-white/20"
            />
          </div>

          {/* About text */}
          <div className="space-y-5">
            <p className="text-slate-300 text-base leading-relaxed text-justify">
              I&apos;m an{" "}
              <span className="text-white font-medium">
                Information Systems
              </span>{" "}
              Graduate at Institut Teknologi Sepuluh Nopember (ITS), passionate
              about bridging{" "}
              <span className="text-blue-400 font-medium">
                data, networking, and technology
              </span>
              .
            </p>
            <p className="text-slate-400 text-base leading-relaxed text-justify">
              My academic journey has equipped me with a solid foundation in
              network configuration, systems analysis, database management,
              software engineering, and data analytics, allowing me to approach
              technical problems from different perspectives.
            </p>
            <p className="text-slate-400 text-base leading-relaxed text-justify">
              I&apos;m particularly drawn to roles where I can leverage data to
              drive decisions, design better user experiences, or build scalable
              digital solutions. I thrive in collaborative environments and
              enjoy contributing across disciplines.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { value: "5+", label: "Projects Completed" },
                { value: "4", label: "Skill Domains" },
                { value: "3+", label: "Organizations" },
                { value: "2024", label: "Active Since" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className="text-2xl font-bold text-white mb-1">
                    {value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interest cards: full width on the second row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:col-span-2 gap-4">
            {interests.map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className={`p-5 rounded-xl bg-gradient-to-br ${colorMap[color]} border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`mb-3 ${colorMap[color].split(" ").pop()}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">
                  {title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
