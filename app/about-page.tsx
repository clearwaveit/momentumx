import { CtaBand } from "./site-components";
import { aboutPage } from "./site-data";

const UNSPLASH_REFERRAL = "?utm_source=momentumx&utm_medium=referral";

// Lower-case display copy while keeping acronyms such as "AI" intact.
function toDisplayCase(text: string) {
  return text.toLowerCase().replace(/\bai\b/g, "AI");
}

function unsplash(src: string, width: number) {
  return `${src}?auto=format&fit=crop&w=${width}&q=80`;
}

function Credit({ name, url }: { name: string; url: string }) {
  return (
    <figcaption>
      Photo by{" "}
      <a href={`${url}${UNSPLASH_REFERRAL}`} rel="noreferrer" target="_blank">
        {name}
      </a>{" "}
      on{" "}
      <a href={`https://unsplash.com/${UNSPLASH_REFERRAL}`} rel="noreferrer" target="_blank">
        Unsplash
      </a>
    </figcaption>
  );
}

// About page: typographic and editorial, built around the brand equation
// (Momentum + CWIT = MomentumX) rather than team photos and counters.
export function AboutContent() {
  const { images } = aboutPage;

  return (
    <>
      <section className="aboutIntro">
        <p className="aboutEyebrow">about momentumX</p>
        <h1>{aboutPage.title}</h1>
        <div className="aboutIntroCopy">
          <p>{aboutPage.summary}</p>
          <p>{aboutPage.intro}</p>
        </div>
      </section>

      <section className="aboutEquation" aria-label="How MomentumX came to be">
        {aboutPage.equation.map((row, index) => (
          <div className={index === aboutPage.equation.length - 1 ? "aboutEquationRow isResult" : "aboutEquationRow"} key={row.name}>
            <span className="aboutEquationSign" aria-hidden="true">
              {index === 0 ? "" : index === aboutPage.equation.length - 1 ? "=" : "+"}
            </span>
            <strong>{row.name}</strong>
            <p>{row.line}</p>
          </div>
        ))}
      </section>

      <figure className="aboutWide">
        <img src={unsplash(images.region.src, 2400)} alt={images.region.alt} />
        <Credit name={images.region.name} url={images.region.url} />
      </figure>

      <section className="aboutStatement">
        <h2>{aboutPage.statement}</h2>
        <div className="aboutPillars">
          {aboutPage.stats.map(([value, label]) => (
            <article key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="aboutStrengths">
        <p className="aboutEyebrow">what we bring together</p>
        <ol>
          {aboutPage.strengths.map((strength, index) => (
            <li key={strength.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{toDisplayCase(strength.title)}</h3>
              <p>{strength.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="aboutEvolution">
        <figure className="aboutEvolutionMedia">
          <img src={unsplash(images.pattern.src, 1400)} alt={images.pattern.alt} loading="lazy" />
          <Credit name={images.pattern.name} url={images.pattern.url} />
        </figure>
        <div className="aboutEvolutionCopy">
          <p className="aboutEyebrow">our evolution</p>
          <h2>experience that keeps evolving.</h2>
          <p>
            MomentumX represents the evolution of our experience - applying technology and intelligence to
            increasingly complex business challenges.
          </p>
          <ol className="aboutEvolutionSteps">
            {aboutPage.evolution.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{toDisplayCase(step)}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="aboutDisciplines">
        <p className="aboutEyebrow">the disciplines behind momentumX</p>
        <div>
          {aboutPage.people.map(([discipline, label]) => (
            <article key={discipline}>
              <strong>{toDisplayCase(discipline)}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="aboutHeritage">
        <div>
          <p className="aboutEyebrow">our heritage</p>
          <h2>built on Momentum.</h2>
          <p>
            MomentumX builds on Momentum&apos;s established experience working with leading organisations and
            brands across the Middle East.
          </p>
        </div>
        <ul className="aboutHeritageLogos" aria-label="Brands Momentum has worked with">
          {aboutPage.heritageClients.map((client) => (
            <li key={client.name}>
              <img src={client.logo} alt={client.name} width={600} height={278} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
