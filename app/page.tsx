"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const metrics = [
  { label: "Institutional Learning Systems", value: "Fragmented", note: "Placeholder signal" },
  { label: "Surgical Complexity", value: "Increasing", note: "Placeholder signal" },
  { label: "Knowledge Transfer Gap", value: "Widening", note: "Placeholder signal" },
];

const visionPoints = [
  "Educational video shadowing infrastructure",
  "Structured learning experiences for surgical teams",
  "Institutional collaboration across specialties",
  "Surgical context awareness in training environments",
  "Future-focused healthcare education systems",
];

const people = [
  { role: "Surgeon", specialty: "General Surgery", quote: "Future surgical education must go beyond static observation." },
  { role: "Educator", specialty: "Academic Skills Lab", quote: "Context-rich learning should scale with institutional quality." },
  { role: "Institutional Collaborator", specialty: "Clinical Learning Operations", quote: "Knowledge transfer is where long-term surgical progress begins." },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-6xl px-6 py-18 sm:px-10 lg:px-12"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="cinematic-grid relative overflow-hidden text-foreground">
      <div className="glow-ring -left-32 top-20 h-72 w-72 bg-blue-300/45" />
      <div className="glow-ring right-0 top-[18rem] h-80 w-80 bg-sky-400/35 [animation-delay:1.6s]" />

      <section className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-between px-6 py-10 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between">
          <p className="text-sm font-medium tracking-[0.28em] text-blue-100/80">MEDUCATEX</p>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#vision" className="transition hover:text-white">Vision</a>
            <a href="#community" className="transition hover:text-white">Community</a>
            <a href="#early-access" className="transition hover:text-white">Early Access</a>
          </div>
        </header>

        <motion.div
          className="max-w-4xl py-20 sm:py-24"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <p className="mb-4 text-xs tracking-[0.24em] text-blue-100/75 uppercase">Educational-First Surgical Intelligence</p>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            From Operating Rooms to the Future of Surgical Learning
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            MEDUCATEX is building educational infrastructure for the next generation of surgical intelligence,
            institutional learning, and operating room knowledge transfer.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#early-access"
              className="rounded-full border border-blue-200/40 bg-blue-300/14 px-6 py-3 text-sm font-medium text-blue-50 transition hover:bg-blue-200/20"
            >
              Join the Early Community
            </a>
            <a
              href="#journey"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-white/40 hover:bg-white/5"
            >
              Follow the Journey
            </a>
          </div>
        </motion.div>
      </section>

      <Section id="problem" title="The Knowledge Gap Inside Modern Surgery">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-card/75 p-6 backdrop-blur-sm">
            <p className="leading-relaxed text-slate-300">
              Textbooks and static resources rarely capture the tacit, context-heavy judgment that develops in real operating rooms.
              Institutions face persistent challenges in preserving and transferring this experience at scale for future surgeons.
            </p>
          </div>
          <div className="grid gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-border-subtle bg-card/60 p-5">
                <p className="text-xs tracking-[0.2em] text-muted uppercase">{metric.label}</p>
                <p className="mt-2 text-xl font-medium text-white">{metric.value}</p>
                <p className="text-sm text-slate-400">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="vision" title="Building Infrastructure for Surgical Intelligence">
        <div className="grid gap-4 md:grid-cols-2">
          {visionPoints.map((point) => (
            <div key={point} className="rounded-2xl border border-border-subtle bg-card/65 p-5 transition hover:-translate-y-0.5 hover:border-blue-200/35">
              <p className="text-sm leading-relaxed text-slate-200">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="community" title="The People Behind Surgical Progress">
        <div className="grid gap-5 md:grid-cols-3">
          {people.map((person) => (
            <div key={person.role} className="rounded-2xl border border-border-subtle bg-card/70 p-6">
              <div className="h-24 w-24 rounded-full border border-blue-200/25 bg-gradient-to-br from-blue-200/20 to-slate-500/10" />
              <p className="mt-4 text-sm tracking-[0.16em] text-blue-100/80 uppercase">{person.role}</p>
              <p className="mt-1 text-base text-white">{person.specialty}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">&ldquo;{person.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="journey" title="Why MEDUCATEX Exists">
        <div className="rounded-2xl border border-border-subtle bg-card/75 p-6 sm:p-8">
          <p className="max-w-4xl leading-relaxed text-slate-300">
            MEDUCATEX began with a simple observation: critical surgical learning is often distributed across people,
            institutions, and moments that are difficult to preserve. As healthcare systems grow more complex, educational
            continuity becomes foundational. We are building toward a calm, collaborative layer for operating room intelligence,
            helping future surgical education become more connected, context-aware, and globally transferable.
          </p>
        </div>
      </Section>

      <Section id="early-access" title="Become an Early Supporter">
        <div className="grid gap-7 lg:grid-cols-[1.15fr_1fr]">
          <div className="rounded-2xl border border-border-subtle bg-card/70 p-6">
            <p className="leading-relaxed text-slate-300">
              Join the early community for behind-the-scenes updates, founder notes, surgical education insights,
              and priority access to future announcements around the MEDUCATEX journey.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              This is a community warm-up channel and not a direct securities solicitation.
            </p>
          </div>
          <form className="rounded-2xl border border-border-subtle bg-card/80 p-6">
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm text-slate-300">
                Name
                <input className="rounded-xl border border-white/15 bg-slate-950/45 px-4 py-3 text-white outline-none transition focus:border-blue-200/55" type="text" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Email
                <input className="rounded-xl border border-white/15 bg-slate-950/45 px-4 py-3 text-white outline-none transition focus:border-blue-200/55" type="email" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Role
                <select className="rounded-xl border border-white/15 bg-slate-950/45 px-4 py-3 text-white outline-none transition focus:border-blue-200/55" defaultValue="Supporter">
                  <option>Investor</option>
                  <option>Surgeon</option>
                  <option>Healthcare Professional</option>
                  <option>Institution</option>
                  <option>Supporter</option>
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full border border-blue-200/40 bg-blue-300/14 px-6 py-3 text-sm font-medium text-blue-50 transition hover:bg-blue-200/20"
            >
              Request Early Access
            </button>
          </form>
        </div>
      </Section>

      <footer className="mx-auto w-full max-w-6xl border-t border-white/10 px-6 py-10 sm:px-10 lg:px-12">
        <div className="flex flex-col justify-between gap-6 text-sm text-slate-400 md:flex-row md:items-end">
          <div>
            <p className="text-base font-semibold tracking-[0.2em] text-slate-200">MEDUCATEX</p>
            <p className="mt-1">Educational-first surgical intelligence</p>
            <p className="mt-3 max-w-xl text-xs text-slate-500">
              MEDUCATEX is an educational-focused platform and does not provide medical diagnosis or clinical decision-making services.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
            <a href="#" className="transition hover:text-white">LinkedIn</a>
            <a href="#" className="transition hover:text-white">X</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
