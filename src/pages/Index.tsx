import { useEffect, useRef, useCallback } from "react";
import { Crosshair, Anchor } from "lucide-react";

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  const setupAnimations = useCallback(() => {
    // Reveal-up animations
    const revealElements = document.querySelectorAll(".reveal-up");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    // Character reveal animations
    const headings = document.querySelectorAll(".reveal-text");
    const charObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chars = entry.target.querySelectorAll(".char-reveal");
            chars.forEach((char, i) => {
              setTimeout(() => char.classList.add("visible"), i * 25);
            });
            charObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    headings.forEach((el) => charObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      charObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const cleanup = setupAnimations();
    return cleanup;
  }, [setupAnimations]);

  const splitText = (text: string) => {
    return text.split(" ").map((word, wi) => (
      <span key={wi} className="inline-block whitespace-nowrap">
        {word.split("").map((char, ci) => (
          <span key={ci} className="char-reveal">
            {char}
          </span>
        ))}
        {wi < text.split(" ").length - 1 ? "\u00A0" : ""}
      </span>
    ));
  };

  return (
    <div ref={mainRef} className="relative">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Confidential Header */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference">
        <span className="text-[10px] tracking-[0.25em] font-medium text-dust uppercase border-l border-dust pl-3">
          Confidential // Manual 01
        </span>
      </header>

      {/* Main Content */}
      <main className="max-w-[640px] mx-auto px-6 relative z-10">
        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center pt-32 pb-20">
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] text-bone mb-8 reveal-text">
            {splitText("The $0.50 Fishing Secret That Got Me Banned")}
          </h1>
          <p className="text-xl text-dust mb-12 max-w-md reveal-up font-light">
            Old techniques the industry buried because they work too well.
          </p>
          <div className="reveal-up border-l border-forest pl-4 mb-12">
            <p className="text-xs tracking-widest uppercase text-dust">
              No brands. No gear reviews.
            </p>
            <p className="text-xs tracking-widest uppercase text-bone mt-1">
              Just biology, instinct, and results.
            </p>
          </div>

          {/* Ebook Cover */}
          <div className="reveal-up mb-12 w-full flex justify-start">
            <div className="relative group cursor-crosshair">
              <div className="border border-border p-1 bg-background inline-block">
                <img
                  src="https://lh3.googleusercontent.com/d/1-BApQh1OeWiKuhizOMeBBIIj-R5v43rx"
                  alt="The Forbidden Manual Cover"
                  className="w-full max-w-[280px] md:max-w-[320px] h-auto grayscale contrast-[1.15] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-dust opacity-50" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-dust opacity-50" />
            </div>
          </div>

          <a
            href="https://pay.hotmart.com/I104381009H"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-up w-full py-5 bg-forest text-bone text-sm tracking-[0.2em] uppercase font-bold text-center hover:bg-forest/80 transition-colors duration-300 block"
          >
            Access the Manual
          </a>
        </section>

        {/* THE CONTRAST */}
        <section className="py-24 border-t border-border">
          <div className="reveal-up">
            <p className="text-2xl md:text-3xl leading-relaxed font-serif text-bone">
              They told you better gear catches more fish.{" "}
              <span className="text-dust">That was the lie.</span>
            </p>
            <p className="mt-8 text-lg text-dust leading-relaxed">
              Fish don't care about brands. They respond to chemistry and
              instinct. Old fishermen knew this. The industry made sure you
              wouldn't.
            </p>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-24 border-t border-border">
          <div className="space-y-6 reveal-up">
            {[
              "You keep buying gear.",
              "Results barely change.",
              "New lure every season.",
              "Same empty cooler.",
            ].map((text, i) => (
              <div key={i} className="flex items-start">
                <span className="text-forest mr-4 text-xs mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg text-bone">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 font-bold text-bone text-sm tracking-wide uppercase reveal-up font-sans">
            That's not an accident. That's a business model.
          </p>
        </section>

        {/* THE BIOLOGICAL COMMAND */}
        <section className="py-32">
          <h2 className="font-serif text-3xl mb-8 text-bone reveal-text">
            {splitText("The Biological Command")}
          </h2>
          <div className="pl-4 border-l border-dust reveal-up">
            <p className="text-lg text-dust leading-relaxed">
              Fish don't 'decide' to bite. Certain natural compounds trigger
              automatic responses in their nervous system. When that chemistry
              hits the water, the body reacts before the brain.
            </p>
            <p className="mt-6 text-xl text-bone">
              That's not bait. That's a biological command.
            </p>
          </div>
        </section>

        {/* WHAT THIS MANUAL IS */}
        <section className="py-24 border-t border-border">
          <h2 className="font-serif text-2xl mb-8 text-bone reveal-text">
            {splitText("What This Manual Actually Is")}
          </h2>
          <p className="text-dust text-lg mb-8 reveal-up">
            Old, cheap fishing techniques. Passed down quietly, never published.
            Based on biology, not gear. Tested in real water, not labs.
          </p>
          <p className="text-bone text-sm uppercase tracking-wider reveal-up font-sans">
            Most of this costs cents to use. That's why it disappeared.
          </p>
        </section>

        {/* NOT FOR EVERYONE */}
        <section className="py-24 border-t border-border">
          <h2 className="font-serif text-2xl mb-8 text-bone reveal-text">
            {splitText("This is NOT for everyone")}
          </h2>
          <div className="grid gap-4 reveal-up">
            {[
              "Not for gear collectors.",
              "Not for brand loyalists.",
              "Not for people who want shortcuts.",
              "Not for tournament rule lawyers.",
            ].map((text, i) => (
              <div key={i} className="py-3 border-b border-border text-dust">
                {text}
              </div>
            ))}
          </div>
          <p className="mt-8 text-forest font-medium reveal-up">
            This is for fishermen who care about results.
          </p>
        </section>

        {/* THE SYLLABUS */}
        <section className="py-24">
          <div className="bg-secondary p-8 border border-border reveal-up">
            <h3 className="font-serif text-xl mb-6 text-bone">The Syllabus</h3>
            <ul className="space-y-4 text-dust font-light">
              {[
                "$0.50 baits that outperform store-bought lures.",
                "Natural scent triggers fish can't ignore.",
                "Reading water without electronics.",
                "Old moon and weather rules that still work.",
              ].map((text, i) => (
                <li key={i} className="flex items-start">
                  <Crosshair className="w-4 h-4 mt-1 mr-3 text-forest shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-forest uppercase tracking-widest font-bold font-sans">
                Warning: Some of these techniques are banned in tournaments. Not
                because they're illegal. Because they're unfair.
              </p>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="py-24 border-t border-border">
          <div className="space-y-12">
            {[
              "These methods were never meant for mass distribution.",
              "They survived because they worked.",
              "Most people stopped fishing this way. The fish didn't.",
            ].map((quote, i) => (
              <blockquote
                key={i}
                className="pl-6 border-l-2 border-border reveal-up"
              >
                <p className="text-xl font-serif italic text-dust">
                  "{quote}"
                </p>
              </blockquote>
            ))}
          </div>
        </section>

        {/* THE OFFER */}
        <section id="offer" className="py-32">
          <div className="border border-dust p-1 relative reveal-up">
            <div className="border border-border p-8 md:p-12 bg-background">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-xs tracking-[0.3em] uppercase text-forest font-sans">
                Restricted Access
              </span>

              <h2 className="font-serif text-4xl text-bone text-center mb-4">
                The Manual
              </h2>
              <p className="text-center text-dust mb-12">
                A practical dossier documenting fishing knowledge that almost
                disappeared.
              </p>

              <div className="flex flex-col space-y-2 text-center text-sm mb-12 font-mono text-dust">
                <span>FORMAT: DIGITAL PDF</span>
                <span>DELIVERY: IMMEDIATE</span>
                <span>UPDATES: NONE</span>
                <span>BONUSES: NONE</span>
              </div>

              <div className="text-center mb-12">
                <span className="font-serif text-5xl text-bone">$9</span>
              </div>

              <a
                href="https://pay.hotmart.com/I104381009H"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-6 bg-forest text-bone text-sm tracking-[0.25em] uppercase font-bold hover:bg-forest/80 transition-colors duration-300 block text-center"
              >
                Access the Manual
              </a>

              <p className="text-center text-[10px] uppercase tracking-widest text-dust mt-6 font-sans">
                Read carefully. Use selectively.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 border-t border-border text-center">
          <div className="reveal-up">
            <p className="text-dust text-sm max-w-xs mx-auto mb-8">
              No guarantees. No exaggerated claims. No hype.
            </p>
            <p className="text-bone font-serif text-lg">
              Fish don't care what you paid.
              <br />
              They care what hits the water.
            </p>
            <div className="mt-12 opacity-30">
              <Anchor className="w-6 h-6 mx-auto text-dust" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
