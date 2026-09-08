import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { profile, socials } from "@/lib/data";

const icons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="shell">
        <FadeIn>
          <p className="eyebrow">Interested in cooperation?</p>
          <h2 className="caption mt-5 max-w-5xl text-balance">
            Let&apos;s move the world together
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="lede">
              Got something difficult — realtime, video, store releases? Become a
              client, or just say hello.
            </p>
            <p className="mt-8 text-sm text-ink-mute">
              <a className="text-ink hover:text-accent" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <br />
              <a className="hover:text-ink" href={`tel:${profile.phone}`}>
                {profile.phoneDisplay}
              </a>
              <br />
              {profile.location}
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((social) => {
                const Icon = icons[social.name];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.placeholder ? undefined : "_blank"}
                    rel={social.placeholder ? undefined : "noreferrer"}
                    className="text-ink-mute hover:text-ink"
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
