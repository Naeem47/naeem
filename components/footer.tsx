import { navLinks, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-line py-14">
      <div className="shell grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="nav-mark">{profile.shortName}</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-ink-mute">
            {profile.title} in {profile.location}. Interested in cooperation?
          </p>
          <a href="#contact" className="btn-primary mt-6">
            Let&apos;s talk
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-ink-mute sm:grid-cols-3 lg:col-span-7">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
          <a href={profile.resumeUrl} className="hover:text-ink">
            Resume
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            {profile.email}
          </a>
        </div>
        <p className="text-xs text-ink-mute lg:col-span-12">
          © {new Date().getFullYear()} {profile.firstLine}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
