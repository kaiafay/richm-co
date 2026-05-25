import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { IntakePicker } from "@/components/intake-picker";

export const metadata: Metadata = {
  title: "Inquiries | RichM Co.",
  description:
    "Choose the right RichM Co. inquiry for fitness coaching, sales consulting, or leadership mentoring.",
};

export default function IntakesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0]">
      <section
        className="relative overflow-hidden pt-24 pb-20 md:pt-28 md:pb-28"
        aria-label="Choose your intake form"
      >
        <div className="grain-overlay" aria-hidden="true" />

        <div
          className="pointer-events-none absolute inset-x-0 -top-56 h-[34rem] bg-[radial-gradient(circle_at_50%_0%,rgb(139_92_246_/_0.16),transparent_34rem)]"
          aria-hidden="true"
        />

        <div className="intake-page-enter relative z-[2] max-w-[1200px] mx-auto px-6 lg:px-12">
          <header className="flex items-center justify-between gap-6 mb-20">
            <Link
              href="/"
              className="inline-block touch-manipulation font-display text-2xl tracking-wide text-[#f5f5f0] transition-[color,transform] hover:text-accent-violet active:scale-[0.97] active:text-accent-violet [-webkit-tap-highlight-color:transparent]"
              aria-label="RichM Co. home"
            >
              RichM Co.
            </Link>

            <Link
              href="/"
              className="inline-block touch-manipulation font-sans text-xs tracking-[0.22em] uppercase text-[#a0a0a0] transition-[color,transform] hover:text-accent-violet active:scale-[0.97] active:text-accent-violet [-webkit-tap-highlight-color:transparent]"
            >
              Back
            </Link>
          </header>

          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#6b6b6b] mb-8">
              Inquiries
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#f5f5f0] uppercase tracking-wide leading-none mb-8 text-balance">
              What Are You Interested In?
            </h1>

            <div
              className="w-16 h-px bg-accent-violet mx-auto mb-6"
              aria-hidden="true"
            />

            <p className="font-serif italic text-xl md:text-2xl text-[#a0a0a0] leading-relaxed max-w-2xl mx-auto">
              Choose the service that best fits where you want support.
            </p>
          </div>

          <IntakePicker />
        </div>
      </section>

      <Footer />
    </main>
  );
}
