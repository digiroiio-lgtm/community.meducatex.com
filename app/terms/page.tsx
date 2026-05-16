import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-slate-700">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Use</h1>
      <p className="mt-4 text-slate-500 text-sm">Last updated: 2025</p>
      <p className="mt-6 leading-relaxed">
        By accessing community.meducatex.com, you agree to these terms. This site is operated by
        MeducateX for educational and community-building purposes.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-slate-900">Educational use only</h2>
      <p className="mt-3 leading-relaxed">
        MeducateX is an educational-focused platform. Content on this site is for educational
        purposes and does not constitute medical advice, medical diagnosis, or clinical
        decision-making guidance.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Community waitlist</h2>
      <p className="mt-3 leading-relaxed">
        Joining the community waitlist is voluntary and constitutes no financial obligation. This is
        a community warm-up channel and not a direct securities solicitation of any kind.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Contact</h2>
      <p className="mt-3 leading-relaxed">
        For questions about these terms, contact us at{" "}
        <a href="mailto:legal@meducatex.com" className="text-blue-700 hover:underline">
          legal@meducatex.com
        </a>
        .
      </p>
      <p className="mt-10 text-xs text-slate-400">
        MeducateX is an educational-focused platform and does not provide medical diagnosis or
        clinical decision-making services.
      </p>
      <Link href="/" className="mt-8 inline-block text-sm text-blue-700 hover:underline">
        ← Back to home
      </Link>
    </main>
  );
}
