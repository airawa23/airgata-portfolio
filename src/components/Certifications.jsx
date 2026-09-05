import { Award, ExternalLink } from "lucide-react";
import devNetBadge from "../assets/images/certificates/DEVASC_Learning_Badge.png";

const certifications = [
  {
    id: 1,
    title: "DevNet Associate",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description:
      "Completed 25+ hands-on labs covering Python, Linux, APIs, network fundamentals, application deployment, security, infrastructure automation, and Cisco platforms.",
    image: devNetBadge,
    link: "https://www.credly.com/badges/48683523-af5f-473a-9178-8cbc8f184ba8",
    accent: "blue",
  },
  {
    id: 2,
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding x Microsoft Elevate Training Center",
    year: "2026",
    description:
      "Learned to use Microsoft Fabric for end-to-end data science workflows, including data exploration, preprocessing, notebook-based modeling, MLflow experiment tracking, and batch prediction.",
    image: "../src/assets/images/certificates/dicoding_fabric.png",
    link: "",
    accent: "violet",
  },
  {
    id: 3,
    title: "Karirnex Bootcamp Data Analyst",
    issuer: "Karirnex by PT Ebiz Karisma Internasional",
    year: "2026",
    description:
      "Bootcamp Data Analyst Using Excel, SQL (Google BigQuery), Python (Google Collab), and Google Looker Studio",
    image: "../src/assets/images/certificates/KarirNex_Data-Analyst.png",
    link: "",
    accent: "cyan",
  },
  {
    id: 4,
    title: "Build Real World AI Applications with Gemini and Imagen Skill Badge",
    issuer: "Google Cloud",
    year: "2025",
    description:
      "Complete the introductory Build Real World AI Applications with Gemini and Imagen skill badge to demonstrate skills in the following: image recognition, natural language processing, image generation using Google's powerful Gemini and Imagen models, deploying applications on the Vertex AI platform.",
    image: "../src/assets/images/certificates/vertex_google.png",
    link: "https://www.credly.com/badges/f8190bbc-ea2b-4fa6-b2c3-31fc8c90641d/linked_in_profile",
    accent: "emerald",
  },
//   {
//     id: 5,
//     title: "Business Analysis Certificate",
//     issuer: "Professional Certificate",
//     year: "2024",
//     description:
//       "Strengthened the ability to translate business needs into clear requirements, process improvements, and practical solutions.",
//     image: "",
//     link: "",
//     accent: "amber",
//   },
//   {
//     id: 6,
//     title: "Project Management Certificate",
//     issuer: "Professional Certificate",
//     year: "2024",
//     description:
//       "Learned the fundamentals of planning, coordinating, and delivering projects through structured and collaborative workflows.",
//     image: "",
//     link: "",
//     accent: "rose",
//   },
];

const accentStyles = {
  blue: "from-blue-500/25 via-blue-500/5 to-transparent text-blue-300 border-blue-500/20",
  violet:
    "from-violet-500/25 via-violet-500/5 to-transparent text-violet-300 border-violet-500/20",
  cyan: "from-cyan-500/25 via-cyan-500/5 to-transparent text-cyan-300 border-cyan-500/20",
  emerald:
    "from-emerald-500/25 via-emerald-500/5 to-transparent text-emerald-300 border-emerald-500/20",
  amber:
    "from-amber-500/25 via-amber-500/5 to-transparent text-amber-300 border-amber-500/20",
  rose: "from-rose-500/25 via-rose-500/5 to-transparent text-rose-300 border-rose-500/20",
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Certifications
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Learning &amp; Credentials
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            A selection of certifications and learning milestones that support
            my work across data, design, and technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((certificate) => {
            const accent = accentStyles[certificate.accent];
            return (
              <article
                key={certificate.id}
                className="group overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:shadow-xl hover:shadow-black/20"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden border-b border-white/[0.07] bg-gradient-to-br ${accent}`}
                >
                  {certificate.image ? (
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 "
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                      <div className="rounded-2xl border border-current/30 bg-black/10 p-4">
                        <Award size={30} strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
                        Certificate preview
                      </span>
                    </div>
                  )}
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${certificate.title} credential`}
                      className="absolute inset-0 flex items-center justify-center bg-[#050d1a]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <span className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm">
                        View credential <ExternalLink size={15} />
                      </span>
                    </a>
                  )}
                </div>

                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-blue-300">
                      {certificate.issuer}
                    </span>
                    <span className="text-xs text-slate-500">
                      {certificate.year}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {certificate.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {certificate.description}
                  </p>
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 transition-colors hover:text-blue-200"
                    >
                      View credential <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
