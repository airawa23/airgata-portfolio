import { BarChart3, Palette, Code2, Database } from "lucide-react";
import { skillGroups } from "../data/projectsData";

const iconMap = {
  BarChart3,
  Palette,
  Code2,
  Database,
};

const colorStyles = {
  blue: {
    badge: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40",
    icon: "text-blue-400",
    header: "text-blue-400",
    border: "border-blue-500/20",
  },
  purple: {
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-500/40",
    icon: "text-violet-400",
    header: "text-violet-400",
    border: "border-violet-500/20",
  },
  indigo: {
    badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/20 hover:border-indigo-500/40",
    icon: "text-indigo-400",
    header: "text-indigo-400",
    border: "border-indigo-500/20",
  },
  cyan: {
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40",
    icon: "text-cyan-400",
    header: "text-cyan-400",
    border: "border-cyan-500/20",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tools &amp; Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon];
            const style = colorStyles[group.color];
            return (
              <div
                key={group.id}
                className={`p-6 rounded-2xl bg-white/[0.02] border ${style.border} backdrop-blur-sm`}
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg bg-white/[0.04] ${style.icon}`}>
                    {Icon && <Icon size={18} />}
                  </div>
                  <h3 className={`font-semibold text-sm ${style.header}`}>
                    {group.label}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 cursor-default ${style.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
