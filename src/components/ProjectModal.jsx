import { useEffect, useState } from "react";
import {
  X,
  GitBranch,
  ExternalLink,
  Wrench,
  Target,
  Lightbulb,
  CheckCircle2,
  ListChecks,
} from "lucide-react";

const categoryColors = {
  "Data Analytics": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "UI/UX": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Flutter: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Laravel: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Front-End": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

const Section = ({
  icon: Icon,
  title,
  children,
  iconColor = "text-blue-400",
}) => (
  <div>
    <div className={`flex items-center gap-2 mb-3 ${iconColor}`}>
      <Icon size={16} />
      <h4 className="text-sm font-semibold text-white">{title}</h4>
    </div>
    {children}
  </div>
);

export default function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key !== "Escape") return;
      if (selectedImage) {
        setSelectedImage(null);
      } else {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, selectedImage]);

  if (!project) return null;
  const { detail } = project;
  const catStyle =
    categoryColors[project.category] ||
    "bg-slate-500/10 text-slate-400 border-slate-500/20";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a1628] border border-white/[0.1] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 border-b border-white/[0.06] bg-[#0a1628]/95 backdrop-blur-md">
          <div className="flex-1 min-w-0">
            <span
              className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium border ${catStyle} mb-3`}
            >
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white leading-snug">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              {project.shortDescription}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Problem */}
          {detail.problem && (
            <Section
              icon={Lightbulb}
              title="Problem"
              iconColor="text-amber-400"
            >
              <p className="text-slate-400 text-sm leading-relaxed">
                {detail.problem}
              </p>
            </Section>
          )}

          {/* Objective */}
          {detail.objective && (
            <Section icon={Target} title="Objective" iconColor="text-blue-400">
              <p className="text-slate-400 text-sm leading-relaxed">
                {detail.objective}
              </p>
            </Section>
          )}

          {/* Tools */}
          {detail.tools && detail.tools.length > 0 && (
            <Section
              icon={Wrench}
              title="Tools &amp; Technologies"
              iconColor="text-cyan-400"
            >
              <div className="flex flex-wrap gap-2">
                {detail.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.05] text-slate-300 border border-white/[0.08]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Section>
          )}

          {/* Key Contributions */}
          {detail.keyContributions && detail.keyContributions.length > 0 && (
            <Section
              icon={CheckCircle2}
              title="Key Contributions"
              iconColor="text-violet-400"
            >
              <ul className="space-y-2">
                {detail.keyContributions.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-slate-400 text-sm"
                  >
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-violet-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Progress and results */}
          {(detail.process ||
            detail.results ||
            detail.progressImages?.length > 0 ||
            detail.resultImage) && (
            <div className="p-4 rounded-xl bg-blue-500/[0.06] border border-blue-500/20">
              {detail.process && (
                <Section
                  icon={ListChecks}
                  title="Progress"
                  iconColor="text-indigo-400"
                >
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {detail.process}
                  </p>
                </Section>
              )}
              {detail.progressImages?.length > 0 && (
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ${
                    detail.process ? "mt-4" : ""
                  }`}
                >
                  {detail.progressImages.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${project.title} progress ${index + 1}`}
                      onClick={() => setSelectedImage(image)}
                      className="w-full aspect-video object-cover rounded-lg border border-white/[0.08] cursor-zoom-in hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              )}
              {detail.results && (
                <div
                  className={
                    detail.process || detail.progressImages?.length > 0
                      ? "mt-5"
                      : ""
                  }
                >
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                    Results
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {detail.results}
                  </p>
                  {detail.resultImage && (
                    <img
                      src={detail.resultImage}
                      alt={`${project.title} result`}
                      onClick={() => setSelectedImage(detail.resultImage)}
                      className="mt-3 w-full rounded-lg border border-white/[0.08] cursor-zoom-in hover:opacity-80 transition-opacity"
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer links */}
        {(detail.githubLink || detail.demoLink) && (
          <div className="px-6 pb-6 flex items-center gap-3">
            {detail.githubLink && (
              <a
                href={detail.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-white hover:bg-white/[0.1] text-sm font-medium transition-all"
              >
                <GitBranch size={15} /> View on GitHub
              </a>
            )}
            {detail.demoLink && (
              <a
                href={detail.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-400 hover:to-indigo-500 text-sm font-medium transition-all shadow-lg shadow-blue-500/20"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-5 bg-black/85 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close enlarged image"
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.1] transition-all"
          >
            <X size={22} />
          </button>
          <img
            src={selectedImage}
            alt={`${project.title} enlarged preview`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
