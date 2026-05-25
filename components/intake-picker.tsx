"use client";

import { useEffect, useRef, useState } from "react";

const intakeOptions = [
  {
    label: "Fitness Coaching",
    href: "/intakes/fitness",
    accent: "border-[#7f68d8] hover:bg-[#7f68d8]",
  },
  {
    label: "Sales Consulting",
    href: "/intakes/sales-consulting",
    accent: "border-[#4f7f9d] hover:bg-[#4f7f9d]",
  },
  {
    label: "Leadership Mentoring",
    href: "/intakes/leadership-mentoring",
    accent: "border-[#b28a3c] hover:bg-[#b28a3c]",
  },
];

export function IntakePicker() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const contactFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePageShow(event: PageTransitionEvent) {
      if (!event.persisted) return;

      setContactOpen(false);
      setContactStatus("idle");
    }

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  useEffect(() => {
    const prefetchLinks = intakeOptions.map((option) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = option.href;
      link.as = "document";
      document.head.appendChild(link);
      return link;
    });

    return () => {
      prefetchLinks.forEach((link) => link.remove());
    };
  }, []);

  function scrollToContactForm() {
    window.setTimeout(() => {
      contactFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  }

  function handleContactOpen() {
    setContactOpen(true);
    scrollToContactForm();
  }

  async function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setContactStatus("submitting");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        setContactStatus("error");
        return;
      }

      form.reset();
      setContactStatus("success");
    } catch {
      setContactStatus("error");
    }
  }

  return (
    <div className="max-w-[760px] mx-auto">
      <div className="grid grid-cols-1 gap-4 mt-14">
        {intakeOptions.map((option) => (
          <a
            key={option.href}
            href={option.href}
            className={`group flex items-center justify-between gap-6 border ${option.accent} px-6 py-5 touch-manipulation transition-[background-color,border-color,transform] duration-200 active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet [-webkit-tap-highlight-color:transparent]`}
          >
            <span className="font-display text-[2rem] sm:text-[2.75rem] uppercase tracking-wide leading-none text-[#f5f5f0]">
              {option.label}
            </span>
            <span
              className="hidden sm:block text-3xl leading-none text-[#a0a0a0] transition-[color,transform] group-hover:translate-x-1 group-hover:text-[#f5f5f0] group-active:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={handleContactOpen}
          className="inline-block touch-manipulation font-serif italic text-lg text-[#a0a0a0] underline decoration-[#3a3a3a] underline-offset-4 transition-[color,transform] hover:text-[#f5f5f0] active:scale-[0.97] active:text-[#f5f5f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-violet [-webkit-tap-highlight-color:transparent]"
          aria-expanded={contactOpen}
          aria-controls="general-contact-form"
        >
          Not sure where to start?
        </button>
      </div>

      <div
        id="general-contact-form"
        ref={contactFormRef}
        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
          contactOpen
            ? "grid-rows-[1fr] opacity-100 mt-8"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <form
            action="https://formspree.io/f/mbdwenqg"
            method="POST"
            onSubmit={handleContactSubmit}
            className="border border-[#1f1f1f] bg-[#101010] p-6 sm:p-8 text-left"
          >
            <input
              type="hidden"
              name="Service Interest"
              value="General Inquiry"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="generalName"
                  className="font-sans text-xs font-medium tracking-[0.14em] uppercase text-[#a0a0a0]"
                >
                  Name
                </label>
                <input
                  id="generalName"
                  name="Name"
                  type="text"
                  className="w-full border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 font-sans text-sm text-[#f5f5f0] outline-none transition-colors focus:border-accent-violet"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="generalEmail"
                  className="font-sans text-xs font-medium tracking-[0.14em] uppercase text-[#a0a0a0]"
                >
                  Email
                </label>
                <input
                  id="generalEmail"
                  name="Email"
                  type="email"
                  required
                  className="w-full border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 font-sans text-sm text-[#f5f5f0] outline-none transition-colors focus:border-accent-violet"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label
                htmlFor="generalMessage"
                className="font-sans text-xs font-medium tracking-[0.14em] uppercase text-[#a0a0a0]"
              >
                What&apos;s going on?
              </label>
              <textarea
                id="generalMessage"
                name="Message"
                rows={4}
                required
                className="w-full resize-none border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 font-sans text-sm text-[#f5f5f0] outline-none transition-colors focus:border-accent-violet"
              />
            </div>

            <button
              type="submit"
              disabled={contactStatus === "submitting"}
              className="mt-5 w-full touch-manipulation border border-accent-violet bg-transparent px-6 py-4 font-sans text-xs font-medium tracking-[0.18em] uppercase text-[#f5f5f0] transition-[background-color,transform] hover:bg-accent-purple-hover active:scale-[0.985] active:bg-accent-purple-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet disabled:pointer-events-none disabled:opacity-60 [-webkit-tap-highlight-color:transparent]"
            >
              {contactStatus === "submitting" ? "Sending..." : "Send"}
            </button>

            {contactStatus === "success" ? (
              <p className="mt-4 text-center font-sans text-sm leading-relaxed text-[#a0a0a0]">
                Thanks for reaching out. I&apos;ll be in touch soon!
              </p>
            ) : null}

            {contactStatus === "error" ? (
              <p className="mt-4 text-center font-sans text-sm text-[#c89999]">
                Something didn&apos;t go through. Please try again in a moment.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
