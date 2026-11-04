import Link from "next/link";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
    >
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
        <span>{project.period}</span>
        <span>·</span>
        <span>{project.org}</span>
      </div>
      <h3 className="mt-2 text-xl font-bold group-hover:text-accent">{project.name}</h3>
      <p className="mt-1 font-medium">{project.title}</p>
      {project.award && (
        <span className="mt-3 w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
          🏆 {project.award}
        </span>
      )}
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
      {project.stats && (
        <dl className="mt-4 grid grid-cols-2 gap-3">
          {project.stats.slice(0, 2).map((s) => (
            <div key={s.label} className="rounded-lg bg-background p-3">
              <dt className="text-xs text-muted">{s.label}</dt>
              <dd className="text-lg font-bold text-accent">{s.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <span className="mt-auto pt-4 text-sm font-medium text-accent">자세히 보기 →</span>
    </Link>
  );
}
