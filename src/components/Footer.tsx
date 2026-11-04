import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>{profile.tagline}</p>
        <div className="flex gap-4">
          <a href={`mailto:${profile.email}`} className="hover:text-accent">Email</a>
          <a href={profile.github} className="hover:text-accent" target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.blog} className="hover:text-accent" target="_blank" rel="noreferrer">Blog</a>
        </div>
      </div>
    </footer>
  );
}
