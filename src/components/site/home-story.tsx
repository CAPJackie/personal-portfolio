import { Fragment } from "react";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { cssVars } from "@/lib/trace";

/** A sentence that lights up word by word and grows as the page scrolls. */
export function Statement({ locale }: { locale: Locale }) {
  const words = profile.copy[locale].statement.split(" ");

  return (
    <section className="statement">
      <div className="statement__pin">
        <p style={cssVars({ "--n": words.length })}>
          {words.map((word, index) => {
            const name = word.replace(/[.,]$/, "");
            const layer = profile.chapters.find((chapter) => chapter.name === name)?.layer;

            return (
              <Fragment key={`${word}-${index}`}>
                <span
                  className="statement__word"
                  data-layer={layer}
                  style={cssVars({ "--i": index })}
                >
                  {word}
                </span>{" "}
              </Fragment>
            );
          })}
        </p>
      </div>
    </section>
  );
}

/** Follows one request through the stack, each stop growing to fill the screen. */
export function StackStory({ locale }: { locale: Locale }) {
  const titleId = `stack-title-${locale}`;

  return (
    <section
      className="stack"
      aria-labelledby={titleId}
      style={cssVars({ "--n": profile.chapters.length })}
    >
      <div className="stack__pin">
        <h2 id={titleId} className="stack__title">
          {profile.copy[locale].stackTitle}
        </h2>
        <ol className="stack__list">
          {profile.chapters.map((chapter, index) => (
            <li
              key={chapter.name}
              className="chapter"
              data-layer={chapter.layer}
              style={cssVars({ "--i": index, "--chars": chapter.name.length })}
            >
              <span className="chapter__label">{chapter.label[locale]}</span>
              <strong className="chapter__name">{chapter.name}</strong>
              <span className="chapter__tools">{chapter.tools}</span>
            </li>
          ))}
        </ol>
        <div className="stack__track" aria-hidden>
          <i />
        </div>
      </div>
    </section>
  );
}
