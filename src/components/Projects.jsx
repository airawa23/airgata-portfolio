import { useState } from "react";
import { projects, filterCategories } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Selected Projects
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            A collection of projects spanning data analytics, networking, UI/UX design, mobile,
            and full-stack web development.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                  : "bg-white/[0.03] text-slate-400 border border-white/[0.07] hover:bg-white/[0.07] hover:text-white hover:border-white/[0.14]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-500 text-sm">
            No projects in this category yet.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={setSelectedProject}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
