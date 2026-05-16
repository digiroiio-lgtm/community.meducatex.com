"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

const whyPoints = [
  {
    icon: "🎓",
    title: "Structured Learning Pathways",
    body: "Access curated surgical education materials built around real OR experiences and contextual decision-making, not static textbooks.",
  },
  {
    icon: "🤝",
    title: "Institutional Collaboration",
    body: "Connect with peers, educators, and program directors working toward shared standards in surgical education across specialties.",
  },
  {
    icon: "🧠",
    title: "Tacit Knowledge, Preserved",
    body: "The judgment that lives inside operating rooms deserves to be captured and transferred. MeducateX is building the infrastructure to do that.",
  },
  {
    icon: "📡",
    title: "Early Community Access",
    body: "Be among the first surgeons and educators shaping how the platform evolves. Your input directly influences educational design.",
  },
];

const surgeons = [
  {
    initials: "D.R.",
    specialty: "General Surgery",
    institution: "Academic Medical Center",
    quote:
      "Future surgical education must go beyond static observation. We need infrastructure that preserves real decision-making in context.",
  },
  {
    initials: "S.M.",
    specialty: "Surgical Education",
    institution: "Regional Teaching Hospital",
    quote:
      "Context-rich learning should scale with institutional quality. MeducateX is thinking about this the right way.",
  },
  {
    initials: "A.T.",
    specialty: "Clinical Learning Operations",
    institution: "University Training Program",
    quote:
      "Knowledge transfer is where long-term surgical progress begins. This platform is addressing the real gap.",
  },
];

const socialProof = [
  { stat: "300+", label: "Surgeons on the waitlist" },
  { stat: "40+", label: "Institutions following the journey" },
  { stat: "7", label: "Specialties represented" },
];

function PageSection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-12 ${className}`}>
      {children}
    </section>
  );
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string | null)?.trim() ?? "";
    setSubmittedName(name);
    // TODO: Wire to an email / CRM API (e.g. Resend, ConvertKit) before launch.
    // For now, the form confirms locally and shows the success state.
    setSubmitted(true);
  };

  return (
    <main className="bg-white text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <nav className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
          <span className="text-sm font-semibold tracking-widest text-blue-800">MEDUCATEX</span>
          <div className="hidden gap-7 text-sm font-medium text-slate-500 md:flex">
            <a href="#mission" className="transition hover:text-slate-900">Mission</a>
            <a href="#why" className="transition hover:text-slate-900">Why Join</a>
            <a href="#community" className="transition hover:text-slate-900">Community</a>
            <a href="#waitlist" className="transition hover:text-slate-900">Waitlist</a>
          </div>
          <a
            href="#waitlist"
            className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      <section
        id="main-content"
        className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-blue-50/60 to-white"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-20 text-center sm:px-10 sm:pt-28 lg:px-12">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-700">
              EDUCATIONAL-FIRST SURGICAL INTELLIGENCE
            </span>
            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Surgical education,
              <br className="hidden sm:block" /> built for what&apos;s next.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
              MeducateX is building educational infrastructure for the next generation of surgical
              intelligence—preserving the tacit knowledge inside operating rooms and making it
              accessible at scale.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#waitlist"
                className="rounded-full bg-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                Join the Community Waitlist
              </a>
              <a
                href="#mission"
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
              >
                Learn the Mission
              </a>
            </div>
          </motion.div>

          <div
            className="mt-16 flex flex-wrap justify-center gap-10"
          >
            {socialProof.map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-blue-700">{stat}</p>
                <p className="mt-0.5 text-xs font-medium text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageSection id="mission" className="py-20 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-widest text-blue-700">THE MISSION</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The knowledge gap inside modern surgery
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Textbooks and slide decks rarely capture the contextual judgment that develops inside
              real operating rooms. As surgical complexity grows, institutions struggle to transfer
              tacit knowledge across generations of surgeons. MeducateX exists to change that.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {[
            { label: "The challenge", heading: "Fragmented institutional learning", body: "Critical surgical knowledge is distributed across people and moments that are rarely captured or preserved at scale." },
            { label: "The gap", heading: "Static resources, dynamic decisions", body: "OR decision-making is fluid and context-heavy. Current educational tools were built for a different era." },
            { label: "The opportunity", heading: "Infrastructure for transfer", body: "A structured layer for video, context, and collaboration can bridge the gap between expertise and the next generation." },
          ].map(({ label, heading, body }, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold tracking-widest text-blue-600">{label.toUpperCase()}</p>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <section id="why" className="border-y border-slate-100 bg-slate-50 py-20 sm:py-28">
        <PageSection>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold tracking-widest text-blue-700">WHY SURGEONS JOIN</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Built for the people shaping surgical progress
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyPoints.map(({ icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <span className="text-2xl" role="img" aria-hidden="true">{icon}</span>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      </section>

      <PageSection id="community" className="py-20 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-widest text-blue-700">THE COMMUNITY</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The people behind surgical progress
            </h2>
            <p className="mt-4 text-slate-500">
              Early community members represent surgeons, educators, and institutional leaders across
              multiple specialties. Identities are illustrative placeholders.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {surgeons.map(({ initials, specialty, institution, quote }, i) => (
            <Reveal key={initials} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-slate-200 text-sm font-semibold text-blue-800">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{specialty}</p>
                    <p className="text-xs text-slate-400">{institution}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">&ldquo;{quote}&rdquo;</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <section className="border-y border-slate-100 bg-gradient-to-r from-blue-700 to-blue-900 py-16">
        <PageSection>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-12 text-center">
              {socialProof.map(({ stat, label }) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-white">{stat}</p>
                  <p className="mt-1 text-sm font-medium text-blue-200">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </PageSection>
      </section>

      {/* Founder Note */}
      <PageSection className="py-20 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-blue-700">A NOTE FROM THE FOUNDER</p>
            <blockquote className="mt-6 border-l-2 border-blue-200 pl-6">
              <p className="text-lg leading-relaxed text-slate-700">
                &ldquo;We kept hearing the same thing from surgeons across institutions: the most
                important lessons inside surgery are often the hardest to preserve.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                MeducateX began with a simple question: what if surgical learning could retain not
                only procedures, but judgment, context, and experience itself?&rdquo;
              </p>
              <footer className="mt-5 text-sm font-medium text-slate-500">— The MeducateX Team</footer>
            </blockquote>
          </div>
        </Reveal>
      </PageSection>

      <PageSection className="py-20 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-widest text-blue-700">WHERE WE&apos;RE HEADED</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A movement forming quietly inside surgery
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              MeducateX isn&apos;t building another platform. It&apos;s building infrastructure—the kind that
              becomes essential, the kind that makes future surgeons wonder how the generation before
              them learned without it.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            { heading: "Educational video shadowing", body: "Structured surgical video learning that places context, not just observation, at the center." },
            { heading: "Institutional collaboration", body: "Tools for programs, residency directors, and hospitals to share and co-develop educational curricula." },
            { heading: "Global knowledge transfer", body: "A foundation that scales surgical education quality across geographies and resource settings." },
          ].map(({ heading, body }, i) => (
            <Reveal key={heading} delay={i * 0.1}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-3 h-1 w-10 rounded-full bg-blue-600" />
                <h3 className="text-base font-semibold text-slate-900">{heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      {/* Why Now */}
      <section className="border-y border-slate-100 bg-slate-50 py-20 sm:py-28">
        <PageSection>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold tracking-widest text-blue-700">WHY NOW</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                The window for this infrastructure is open
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                Several converging forces have created a rare moment in surgical education—one that
                rewards those who move with clarity and purpose.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📈",
                heading: "Rising surgical complexity",
                body: "Procedures grow more nuanced each decade. The gap between trainee exposure and real-world complexity widens with each cohort.",
              },
              {
                icon: "🤖",
                heading: "AI is redefining education expectations",
                body: "A generation entering surgery expects intelligent, adaptive, and context-aware learning tools—not static slide decks.",
              },
              {
                icon: "🔥",
                heading: "Institutional burnout at scale",
                body: "Overburdened teaching hospitals can no longer rely on apprenticeship alone. Scalable knowledge infrastructure is no longer optional.",
              },
              {
                icon: "🌍",
                heading: "Global surgical inequality",
                body: "High-quality surgical training is geographically concentrated. The tools to redistribute it, equitably, now exist.",
              },
              {
                icon: "⏳",
                heading: "Younger surgeons demanding change",
                body: "The next generation is vocal about the limits of legacy training. They are ready to adopt platforms that respect their time and intelligence.",
              },
              {
                icon: "🏗️",
                heading: "Infrastructure moment",
                body: "The foundational layer for surgical knowledge transfer does not yet exist at scale. First-mover infrastructure compounds.",
              },
            ].map(({ icon, heading, body }, i) => (
              <Reveal key={heading} delay={i * 0.08}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="text-2xl" role="img" aria-hidden="true">{icon}</span>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{heading}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      </section>

      <section id="waitlist" className="border-t border-slate-100 bg-slate-50 py-20 sm:py-28">
        <PageSection>
          <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <div>
                <p className="text-xs font-semibold tracking-widest text-blue-700">COMMUNITY WAITLIST</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Join the early community
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-500">
                  Receive founder updates, surgical education insights, and early access to platform
                  announcements. This is a community warm-up channel, not a direct securities solicitation.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  {["Behind-the-scenes founder updates", "Surgical education research digests", "Early feature previews", "Priority community access"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-700">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">✓</div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    You&apos;re on the list{submittedName ? `, ${submittedName}` : ""}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Thank you for joining the MeducateX early community. Watch your inbox for founder updates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="grid gap-4">
                    <label htmlFor="name" className="grid gap-1.5 text-sm font-medium text-slate-700">
                      Full name
                      <input id="name" name="name" type="text" required placeholder="Your name" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                    </label>
                    <label htmlFor="email" className="grid gap-1.5 text-sm font-medium text-slate-700">
                      Email address
                      <input id="email" name="email" type="email" required placeholder="you@example.com" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                    </label>
                    <label htmlFor="role" className="grid gap-1.5 text-sm font-medium text-slate-700">
                      Your role
                      <select id="role" name="role" required defaultValue="" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                        <option value="" disabled>Select a role…</option>
                        <option>Surgeon</option>
                        <option>Surgical Educator</option>
                        <option>Resident / Fellow</option>
                        <option>Healthcare Institution</option>
                        <option>Investor</option>
                        <option>Supporter</option>
                      </select>
                    </label>
                  </div>
                  <button type="submit" className="mt-5 w-full rounded-full bg-blue-700 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800">
                    Request Early Access
                  </button>
                  <p className="mt-3 text-center text-xs text-slate-400">No spam. Unsubscribe any time.</p>
                </form>
              )}
            </Reveal>
          </div>
        </PageSection>
      </section>

      <section className="bg-blue-700 py-16">
        <PageSection>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Something important in healthcare is quietly forming.
              </h2>
              <p className="mt-3 text-blue-200">
                Be among the first to know as MeducateX builds toward the future of surgical education.
              </p>
              <a href="#waitlist" className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50">
                Join the Waitlist Today
              </a>
            </div>
          </Reveal>
        </PageSection>
      </section>

      <footer className="border-t border-slate-100 bg-white py-10">
        <PageSection>
          <div className="flex flex-col justify-between gap-6 text-sm text-slate-400 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold tracking-widest text-slate-800">MEDUCATEX</p>
              <p className="mt-1">Educational-first surgical intelligence</p>
              <p className="mt-3 max-w-sm text-xs text-slate-400">
                MeducateX is an educational-focused platform and does not provide medical diagnosis or clinical decision-making services.
              </p>
            </div>
            <div className="flex flex-wrap gap-5">
              <a href="/privacy" className="transition hover:text-slate-700">Privacy</a>
              <a href="/terms" className="transition hover:text-slate-700">Terms</a>
              <a href="https://linkedin.com" className="transition hover:text-slate-700">LinkedIn</a>
              <a href="https://x.com" className="transition hover:text-slate-700">X</a>
            </div>
          </div>
          <p className="mt-8 text-xs text-slate-300">© {new Date().getFullYear()} MeducateX. All rights reserved.</p>
        </PageSection>
      </footer>
    </main>
  );
}
