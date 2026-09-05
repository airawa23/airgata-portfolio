import { experiences } from "../data/projectsData";

const typeColors = {
  Organization: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Academic Project": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Community: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Activities &amp; Involvement
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/[0.07] hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => {
              const typeStyle =
                typeColors[exp.type] ||
                "bg-slate-500/10 text-slate-400 border-slate-500/20";
              const experienceImages = exp.images || (exp.image ? [exp.image] : []);
              return (
                <div key={exp.id} className="relative md:pl-20 group">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[26px] top-6 hidden md:flex items-center justify-center w-4 h-4 rounded-full border-2 border-[#050d1a] transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: exp.color }}
                  />

                  {/* Card */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-sm hover:border-white/[0.12] hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span
                            className={`px-2.5 py-0.5 rounded-md text-xs font-medium border ${typeStyle}`}
                          >
                            {exp.type}
                          </span>
                          <span className="text-xs text-slate-500">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-white font-semibold text-base">
                          {exp.role}
                        </h3>
                        <p
                          className="text-sm font-medium"
                          style={{ color: exp.color }}
                        >
                          {exp.organization}
                        </p>
                        {exp.organizationFull !== exp.organization && (
                          <p className="text-xs text-slate-500 mt-0.5">
                            {exp.organizationFull}
                          </p>
                        )}
                      </div>
                    </div>

                    {experienceImages.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 max-w-3xl mb-5">
                        {experienceImages.map((image, imageIndex) => (
                          <img
                            key={`${exp.id}-${imageIndex}`}
                            src={image}
                            alt={`${exp.organization} activity ${imageIndex + 1}`}
                            className="w-full aspect-[4/3] object-cover rounded-xl border border-white/[0.07]"
                          />
                        ))}
                      </div>
                    )}

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
