import type { Metadata } from "next";
import { activities, awards, certificates, education, profile } from "@/data/portfolio";

export const metadata: Metadata = { title: "About | 최윤서" };

function Timeline({ items }: { items: { period: string; title: string; org?: string; details: string[] }[] }) {
  return (
    <ol className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item.title} className="rounded-2xl border border-line bg-surface p-6 sm:flex sm:gap-8">
          <p className="w-44 shrink-0 font-mono text-sm text-muted">{item.period}</p>
          <div className="mt-2 sm:mt-0">
            <h3 className="text-lg font-bold">{item.title}</h3>
            {item.org && <p className="text-sm text-accent">{item.org}</p>}
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
              {item.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-2 text-muted">{profile.tagline}</p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Education</h2>
        <Timeline items={education} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Activity</h2>
        <Timeline items={activities} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Awards</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {awards.map((a) => (
            <li key={a.title} className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-sm text-muted">{a.date}</p>
              <p className="mt-1 font-semibold">🏆 {a.title}</p>
              <p className="mt-1 text-sm text-accent">{a.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Certificates</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-surface">
          <table className="w-full min-w-[480px] text-sm">
            <thead className="bg-background">
              <tr>
                <th className="p-3 text-left font-semibold">자격증</th>
                <th className="p-3 text-left font-semibold">주관</th>
                <th className="p-3 text-left font-semibold">취득일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {certificates.map((c) => (
                <tr key={c.name}>
                  <td className="p-3 font-medium">{c.name}</td>
                  <td className="p-3 text-muted">{c.issuer}</td>
                  <td className="p-3 text-muted">{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
