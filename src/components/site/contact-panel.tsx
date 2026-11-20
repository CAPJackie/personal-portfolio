import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

/**
 * A plain mailto link does nothing for visitors without a mail app, so the
 * address is always visible and can be copied or opened in Gmail.
 */
export function ContactPanel({ id, locale }: { id: string; locale: Locale }) {
  const t = getDictionary(locale).contact;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;

  return (
    <div id={id} popover="auto" className="contact-panel">
      <div className="contact-panel__head">
        <p className="contact-panel__title">{t.title}</p>
        <button
          type="button"
          className="site-control"
          popoverTarget={id}
          popoverTargetAction="hide"
          aria-label={t.close}
        >
          <span aria-hidden>×</span>
        </button>
      </div>
      <p className="contact-panel__email" data-copy-source>
        {profile.email}
      </p>
      <div className="contact-panel__actions">
        <button
          type="button"
          className={cn(buttonVariants(), "contact-copy")}
          data-copy={profile.email}
          aria-live="polite"
        >
          <span className="contact-copy__idle">{t.copy}</span>
          <span className="contact-copy__done">{t.copied}</span>
        </button>
        <a
          className={buttonVariants({ variant: "outline" })}
          href={gmailUrl}
          rel="noreferrer"
          target="_blank"
        >
          {t.gmail}
        </a>
      </div>
      <ul className="contact-panel__links">
        <li>
          <a href={`mailto:${profile.email}`}>{t.mailApp}</a>
        </li>
        {profile.links.map((link) => (
          <li key={link.href}>
            <a href={link.href} rel="noreferrer" target="_blank">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
