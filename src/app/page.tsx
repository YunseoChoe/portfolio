import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { awards, certificates, competencies, profile, projects, skills } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <section className="py-16 sm:py-24">
        <p className="font-mono text-sm font-semibold tracking-widest text-accent">BACKEND ENGINEER PORTFOLIO</p>
        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
          더 나은 방법을 끊임없이 탐구하고,
          <br />
          <span className="text-accent">수치로 증명하는</span> 엔지니어
          <br />
          {profile.name}입니다.
        </h1>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a href={`mailto:${profile.email}`} className="rounded-full bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90">
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-line bg-surface px-5 py-2.5 font-medium hover:border-accent hover:text-accent">
            GitHub
          </a>
          <a href={profile.blog} target="_blank" rel="noreferrer" className="rounded-full border border-line bg-surface px-5 py-2.5 font-medium hover:border-accent hover:text-accent">
            Tech Blog
          </a>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-bold">Core Competencies</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {competencies.map((c, i) => (
            <li key={c} className="flex gap-3 rounded-xl border border-line bg-surface p-5">
              <span className="font-mono font-bold text-accent">0{i + 1}</span>
              <span className="leading-relaxed">{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">Projects</h2>
          <Link href="/projects" className="text-sm font-medium text-accent">전체 보기 →</Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-surface">
          {skills.map((s) => (
            <div key={s.category} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
              <span className="w-40 shrink-0 font-semibold">{s.category}</span>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li key={item} className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-5 py-10 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-6">
          <h2 className="text-xl font-bold">Awards</h2>
          <ul className="mt-4 space-y-3">
            {awards.map((a) => (
              <li key={a.title}>
                <p className="font-medium">🏆 {a.title}</p>
                <p className="text-sm text-muted">{a.date} · {a.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6">
          <h2 className="text-xl font-bold">Certificates</h2>
          <ul className="mt-4 space-y-3">
            {certificates.map((c) => (
              <li key={c.name}>
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-muted">{c.date} · {c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="py-6 text-center">
        <Link href="/about" className="text-sm font-medium text-accent">학력 · 활동 자세히 보기 →</Link>
      </div>
    </div>
  );
}
