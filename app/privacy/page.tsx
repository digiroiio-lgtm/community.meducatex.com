import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-slate-700">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-slate-500 text-sm">Last updated: 2025</p>
      <p className="mt-6 leading-relaxed">
        MeducateX is an educational-focused platform. We are committed to protecting your privacy.
        This policy describes how we collect and use information when you interact with our community
        waitlist and communications.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-slate-900">What we collect</h2>
      <p className="mt-3 leading-relaxed">
        When you join the community waitlist, we collect your name, email address, and role. We use
        this information solely to send you community updates and platform announcements.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">How we use it</h2>
      <p className="mt-3 leading-relaxed">
        We use your information to send educational updates and community news. We do not sell or
        share your personal data with third parties for marketing purposes.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Contact</h2>
      <p className="mt-3 leading-relaxed">
        For privacy questions, contact us at{" "}
        <a href="mailto:privacy@meducatex.com" className="text-blue-700 hover:underline">
          privacy@meducatex.com
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
