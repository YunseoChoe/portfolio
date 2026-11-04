import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = { title: "Projects | 최윤서" };

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-muted">문제를 정의하고, 대안을 비교하고, 결과를 수치로 검증한 프로젝트들입니다.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
