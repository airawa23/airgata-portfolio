import { GitBranch, ExternalLink } from "lucide-react";

// Category badge colors
const categoryColors = {
  "Data Analytics": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "UI/UX": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Flutter: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Laravel: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Front-End": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Networking: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

const defaultColor = "bg-slate-500/10 text-slate-400 border-slate-500/20";

export default function ProjectCard({ project, onOpenModal }) {
  const catStyle = categoryColors[project.category] || defaultColor;

  return (
    <article
      className="group relative flex flex-col rounded-2xl bg-[#0a1628]/80 border border-white/[0.07] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:shadow-xl hover:shadow-black/40 cursor-pointer"
      onClick={() => onOpenModal(project)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-44 flex-shrink-0">
        {project.thumbnail ? (
          <div className="relative w-full h-full">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/15" />
          </div>
        ) : (
          /* Colored SVG placeholder */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}11 100%)`,
              borderBottom: `1px solid ${project.color}22`,
            }}
          >
            <div
              className="text-5xl font-bold tracking-tight opacity-30 select-none"
              style={{ color: project.color }}
            >
              {project.title.slice(0, 2).toUpperCase()}
            </div>
            {/* Decorative circles */}
            <div
              className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20"
              style={{ background: project.color, filter: "blur(20px)" }}
            />
            <div
              className="absolute bottom-4 left-4 w-10 h-10 rounded-full opacity-15"
              style={{ background: project.color, filter: "blur(10px)" }}
            />
          </div>
        )}

        {/* Category badge overlay */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-medium border ${catStyle} backdrop-blur-sm backdrop-brightness-45`}
        >
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-white font-semibold text-base leading-snug group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {project.shortDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/[0.04] text-slate-400 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/[0.04] text-slate-500 border border-white/[0.06]">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2 mt-auto border-t border-white/[0.05]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(project);
            }}
            className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            View Details →
          </button>
          <div className="flex items-center gap-2 ml-auto">
            {project.detail.githubLink && (
              <a
                href={project.detail.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                <GitBranch size={15} />
              </a>
            )}
            {project.detail.demoLink && (
              <a
                href={project.detail.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
