import Link from "next/link";
import type { ReactNode } from "react";
import {
  activities,
  awards,
  certificates,
  competencies,
  education,
  profile,
  projects,
  skills,
} from "@/data/portfolio";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line py-16 sm:scroll-mt-20">
      <h2 className="text-center font-mono text-2xl font-bold tracking-wide sm:text-3xl">
        <span className="text-accent">#</span> {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

const archives = [
  { label: "GitHub", url: profile.github, display: "github.com/YunseoChoe", desc: "프로젝트 소스 코드 저장소" },
  { label: "Tech Blog", url: profile.blog, display: "velog.io/@choeyunseo", desc: "트러블슈팅과 학습 내용을 정리하는 기술 블로그" },
];

export default function Home() {
  const school = education[0];
  const aboutItems = [
    { label: "이름", value: profile.name },
    { label: "직무", value: "Backend Engineer" },
    { label: "이메일", value: profile.email, href: `mailto:${profile.email}` },
    { label: "학력", value: "상명대학교 소프트웨어학과 (졸업)" },
    { label: "학점", value: "4.0 / 4.5" },
    { label: "교육", value: "프로그래머스 백엔드 데브코스 9기" },
  ];

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
        <a href="#about" className="mt-8 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">
          더 알아보기 ↓
        </a>
      </section>

      <Section id="about" title="About me">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutItems.map((item) => (
            <div key={item.label} className="rounded-2xl border border-line bg-surface p-5">
              <dt className="text-sm text-muted">{item.label}</dt>
              <dd className="mt-1 font-semibold break-all">
                {item.href ? <a href={item.href} className="hover:text-accent">{item.value}</a> : item.value}
              </dd>
            </div>
          ))}
        </dl>
        <h3 className="mt-10 text-lg font-bold">Core Competencies</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {competencies.map((c, i) => (
            <li key={c} className="flex gap-3 rounded-xl border border-line bg-surface p-5">
              <span className="font-mono font-bold text-accent">0{i + 1}</span>
              <span className="leading-relaxed">{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.category} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-bold text-accent">{s.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li key={item} className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="archiving" title="Archiving">
        <div className="grid gap-4 md:grid-cols-2">
          {archives.map((a) => (
            <a
              key={a.label}
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
            >
              <p className="text-2xl font-bold group-hover:text-accent">{a.label}</p>
              <p className="mt-1 font-mono text-sm text-accent">{a.display}</p>
              <p className="mt-4 text-muted">{a.desc}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="space-y-6">
          {projects.map((p) => (
            <article key={p.slug} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="text-sm text-muted">
                  {p.period} ({p.team} · {p.org})
                </p>
              </div>
              <p className="mt-1 font-medium">{p.title}</p>
              {p.award && (
                <span className="mt-3 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                  🏆 {p.award}
                </span>
              )}
              <div className="mt-5 grid gap-6 md:grid-cols-[1fr_220px]">
                <ul className="list-disc space-y-1.5 pl-5 leading-relaxed">
                  {p.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold">역할</dt>
                    <dd className="text-muted">{p.role}{p.contribution ? ` (기여도 ${p.contribution})` : ""}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">기술 스택</dt>
                    <dd className="text-muted">{p.stack.map((s) => s.items).join(", ")}</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.sections.length > 0 && (
                  <Link href={`/projects/${p.slug}`} className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white hover:opacity-90">
                    트러블슈팅 · 상세 보기 →
                  </Link>
                )}
                {p.github.map((g) => (
                  <a key={g.url} href={g.url} target="_blank" rel="noreferrer" className="rounded-full border border-line px-4 py-1.5 text-sm font-medium hover:border-accent hover:text-accent">
                    GitHub · {g.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="activity" title="Activity">
        <ol className="space-y-4">
          {[{ ...school, org: "학력" }, ...activities].map((item) => (
            <li key={item.title} className="rounded-2xl border border-line bg-surface p-6 sm:flex sm:gap-8">
              <p className="w-44 shrink-0 font-mono text-sm text-muted">{item.period}</p>
              <div className="mt-2 sm:mt-0">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-accent">{item.org}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                  {item.details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="certificates" title="Awards & Certificates">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="text-lg font-bold">Awards</h3>
            <ul className="mt-4 space-y-4">
              {awards.map((a) => (
                <li key={a.title}>
                  <p className="font-medium">🏆 {a.title}</p>
                  <p className="text-sm text-muted">{a.date} · {a.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="text-lg font-bold">Certificates</h3>
            <ul className="mt-4 space-y-4">
              {certificates.map((c) => (
                <li key={c.name}>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-muted">{c.date} · {c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
