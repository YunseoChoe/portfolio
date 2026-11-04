import Link from "next/link";
import { profile } from "@/data/portfolio";

export const sections = [
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "archiving", label: "Archiving" },
  { id: "projects", label: "Projects" },
  { id: "activity", label: "Activity" },
  { id: "certificates", label: "Awards & Certs" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:py-0 sm:px-6">
        <Link href="/" className="shrink-0 font-semibold">
          {profile.name}
          <span className="ml-2 text-sm font-normal text-muted">{profile.role}</span>
        </Link>
        <nav className="-mx-1 flex gap-1 overflow-x-auto text-sm whitespace-nowrap">
          {sections.map((s) => (
            <Link key={s.id} href={`/#${s.id}`} className="rounded-md px-2 py-1 text-muted transition-colors hover:text-accent">
              {s.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
