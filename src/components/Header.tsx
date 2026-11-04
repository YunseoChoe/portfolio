import Link from "next/link";
import { profile } from "@/data/portfolio";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-semibold">
          {profile.name}
          <span className="ml-2 text-sm font-normal text-muted">{profile.role}</span>
        </Link>
        <nav className="flex gap-4 text-sm sm:gap-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-muted transition-colors hover:text-accent">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
