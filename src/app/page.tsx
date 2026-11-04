const skills = ["Kotlin", "Spring Boot", "JPA", "MySQL", "AWS", "Docker"];

const projects = [
  {
    name: "Baton",
    summary: "프로젝트 한 줄 소개를 작성하세요.",
    stack: ["Kotlin", "Spring Boot"],
    highlights: ["관리자 분쟁 분석 AI 에이전트 설계 및 구현", "Swagger 기반 API 문서화 및 배포"],
    github: "https://github.com/YunseoChoe",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-20 space-y-20">
      <section className="space-y-4">
        <p className="text-sm font-mono text-zinc-500">Backend Developer</p>
        <h1 className="text-4xl font-bold">안녕하세요, 최윤서입니다.</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          자기소개를 2~3줄로 작성하세요.
        </p>
        <div className="flex gap-4 text-sm">
          <a className="underline" href="https://github.com/YunseoChoe">GitHub</a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <li key={s} className="rounded-full border px-3 py-1 text-sm">{s}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        {projects.map((p) => (
          <article key={p.name} className="rounded-xl border p-6 space-y-3">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{p.summary}</p>
            <p className="text-sm font-mono text-zinc-500">{p.stack.join(" · ")}</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {p.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <a className="text-sm underline" href={p.github}>GitHub →</a>
          </article>
        ))}
      </section>
    </main>
  );
}
