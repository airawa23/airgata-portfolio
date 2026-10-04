import { BarChart3, Palette, Code2, Footprints } from "lucide-react";
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

const featuredExperiences = [
  {
    title: "Data Analysis Bootcamp — KarirNex",
    role: "Participant",
    period: "July 2026",
    summary:
      "Cleaned 10,000+ transaction records and used Excel lookups and Pivot Tables to summarize sales and customer trends.",
  },
  {
    title: "NusaData Explorer — Digital Equity Dashboard",
    role: "Dashboard Engineer",
    period: "July 2025 – February 2026",
    summary:
      "Combined 5+ BPS datasets in Looker Studio and built interactive maps, trend analysis, and provincial rankings.",
  },
  {
    title: "Student Grade Data ETL & Visualization",
    role: "Final Course Project",
    period: "October – December 2024",
    summary:
      "Built an ETL pipeline for 20,000+ student records and a Power BI dashboard for grade and graduation-rate analysis.",
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

          <div>
            <p className="text-slate-400 text-base leading-relaxed text-justify">
              Information Systems graduate at ITS with hands-on experience in {" "}
              <span className="text-blue-400 font-medium">
                data analytics, ETL, and dashboard development
              </span>{". "}
              Bridging data, technology, and business to transform raw data into clear information and
              actionable insights.
            </p>

            <div className="mt-8">
              <h3 className="mb-5 flex items-center gap-3 text-xl font-semibold text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
                  <Footprints size={19} className="text-blue-300" />
                </span>
                Experience
              </h3>
              <div className="relative space-y-6 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-white/[0.12]">
                {featuredExperiences.map((experience) => (
                  <article key={experience.title} className="relative pl-7">
                    <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-[#050d1a] bg-blue-400" />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                      <h4 className="text-sm font-semibold text-white">
                        {experience.title}
                      </h4>
                      <span className="shrink-0 text-xs text-slate-500">
                        {experience.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-blue-300">
                      {experience.role}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {experience.summary}
                    </p>
                  </article>
                ))}
              </div>
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
