import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.name} | 최윤서` : "Project | 최윤서" };
}

export default async function ProjectDetail({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  const meta = [
    { label: "기간", value: `${project.period} (${project.duration})` },
    { label: "역할", value: project.role },
    { label: "팀 구성", value: project.team },
    { label: "기관", value: project.org },
    ...(project.contribution ? [{ label: "기여도", value: project.contribution }] : []),
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link href="/projects" className="text-sm text-muted hover:text-accent">← 프로젝트 목록</Link>

      <header className="mt-6">
        <p className="font-mono text-sm font-semibold text-accent">{project.period}</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{project.name}</h1>
        <p className="mt-2 text-lg text-muted">{project.title}</p>
        {project.award && (
          <span className="mt-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
            🏆 {project.award}
          </span>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.github.map((g) => (
            <a key={g.url} href={g.url} target="_blank" rel="noreferrer" className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium hover:border-accent hover:text-accent">
              GitHub · {g.label}
            </a>
          ))}
        </div>
      </header>

      <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-5">
        {meta.map((m) => (
          <div key={m.label} className="bg-surface p-4 odd:last:col-span-2 sm:odd:last:col-span-1">
            <dt className="text-xs text-muted">{m.label}</dt>
            <dd className="mt-1 text-sm font-medium">{m.value}</dd>
          </div>
        ))}
      </dl>

      {project.stats && (
        <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {project.stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-accent-soft p-5 text-center">
              <dd className="text-2xl font-bold text-accent">{s.value}</dd>
              <dt className="mt-1 text-xs text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      )}

      {(project.overview || project.goal) && (
        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {project.overview && (
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="font-bold">개요</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.overview}</p>
            </div>
          )}
          {project.goal && (
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="font-bold">목표</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.goal}</p>
            </div>
          )}
        </section>
      )}

      <section className="mt-12">
        <h2 className="text-2xl font-bold">기술 스택</h2>
        <div className="mt-4 divide-y divide-line rounded-2xl border border-line bg-surface">
          {project.stack.map((s) => (
            <div key={s.category} className="flex flex-col gap-1 p-4 sm:flex-row sm:gap-6">
              <span className="w-40 shrink-0 font-semibold">{s.category}</span>
              <span className="text-muted">{s.items}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">주요 성과</h2>
        <ul className="mt-4 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 rounded-xl border border-line bg-surface p-4">
              <span className="text-accent">✓</span>
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {project.designPoints && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">핵심 설계 포인트</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.designPoints.map((d) => (
              <li key={d} className="rounded-xl border-l-4 border-accent bg-surface p-4 font-medium">{d}</li>
            ))}
          </ul>
        </section>
      )}

      {project.sections.map((section, i) => (
        <section key={section.title} className="mt-16">
          <p className="font-mono text-sm font-semibold text-accent">TROUBLESHOOTING {String(i + 1).padStart(2, "0")}</p>
          <h2 className="mt-1 text-2xl font-bold">{section.title}</h2>
          {section.subtitle && <p className="mt-1 text-muted">{section.subtitle}</p>}
          <div className="mt-6 space-y-4">
            {section.blocks.map((b) => (
              <div key={b.heading} className="rounded-2xl border border-line bg-surface p-5">
                <h3 className="font-semibold text-accent">{b.heading}</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-relaxed">
                  {b.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          {section.table && (
            <div className="mt-4 overflow-x-auto rounded-2xl border border-line bg-surface">
              <table className="w-full min-w-[520px] text-sm">
                <caption className="border-b border-line p-3 text-left font-medium text-muted">🔍 {section.table.caption}</caption>
                <thead className="bg-background">
                  <tr>
                    {section.table.columns.map((c) => <th key={c} className="p-3 text-left font-semibold">{c}</th>)}
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {section.table.rows.map((row) => (
                    <tr key={row.join()}>
                      {row.map((cell, j) => (
                        <td key={j} className={`p-3 ${j === row.length - 1 ? "font-semibold text-accent" : ""}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}

      {project.retrospective && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold">회고</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {([
              ["좋았던 점", project.retrospective.good],
              ["보완할 점", project.retrospective.improve],
            ] as const).map(([label, list]) => (
              <div key={label} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-lg font-bold">{label}</h3>
                <div className="mt-4 space-y-4">
                  {list.map((r) => (
                    <div key={r.title}>
                      <p className="font-semibold">{r.title}</p>
                      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                        {r.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <nav className="mt-16 flex justify-between gap-4 border-t border-line pt-6 text-sm">
        {prev ? <Link href={`/projects/${prev.slug}`} className="hover:text-accent">← {prev.name}</Link> : <span />}
        {next ? <Link href={`/projects/${next.slug}`} className="hover:text-accent">{next.name} →</Link> : <span />}
      </nav>
    </article>
  );
}
