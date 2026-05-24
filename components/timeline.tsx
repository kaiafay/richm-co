"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const milestones = [
  {
    title: "Associate's Degree, Human Movement & Exercise Science",
    description:
      "The starting point for a career built around how people move, think, perform, and change.",
  },
  {
    title: "20 Years in the Fitness Industry",
    description:
      "Trained clients at every level, from complete beginners to advanced lifters.",
  },
  {
    title: "10+ Years in Sales & Leadership",
    description:
      "I've worked with leaders across multiple lines of business, rebuilt sales processes, and developed training that shaped how teams sell and lead.",
  },
  {
    title: "Sales Transformation Analyst, Royal Caribbean",
    description:
      "Current role focused on sales strategy, training content, and performance support across global consumer-facing teams.",
  },
  {
    title: "Global Sales Mentorship Programs",
    description:
      "Seven years building programs that help emerging leaders grow into the role instead of just carrying the title.",
  },
];

function MilestoneItem({
  milestone,
  index,
  active,
  setItemRef,
}: {
  milestone: (typeof milestones)[number];
  index: number;
  active: boolean;
  setItemRef: (index: number, el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={(el) => setItemRef(index, el)}
      className="relative flex items-start gap-6 pb-14 last:pb-0"
    >
      {/* Dot column — fixed w-8 so line center (15px) aligns with dot center (16px) */}
      <div className="w-8 flex-shrink-0 flex justify-center mt-1.5">
        <div
          className={`
            w-4 h-4 rounded-full border-2 transition-all duration-700
            ${
              active
                ? "bg-accent-purple-hover border-accent-violet shadow-[0_0_18px_rgb(139_92_246_/_0.18)]"
                : "bg-transparent border-[#3a3a3a]"
            }
          `}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div
        className={`transition-all duration-850 ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <h3 className="font-display text-2xl md:text-3xl text-[#f5f5f0] uppercase tracking-wide leading-none mb-2">
          {milestone.title}
        </h3>
        <p className="font-sans text-[#6b6b6b] text-base leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </div>
  );
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxLineProgress, setMaxLineProgress] = useState(0);
  const [dotThresholds, setDotThresholds] = useState<number[]>([]);

  useLayoutEffect(() => {
    const calculateDotThresholds = () => {
      const container = containerRef.current;
      if (!container) return;

      const lineStart = 14;
      const dotTopOffset = 6;
      const lineHeight = Math.max(1, container.offsetHeight - lineStart);
      const thresholds = itemRefs.current.map((item) => {
        if (!item) return 1;
        const dotTop = item.offsetTop + dotTopOffset;
        return Math.max(0, Math.min(1, (dotTop - lineStart) / lineHeight));
      });

      setDotThresholds(thresholds);
    };

    const frame = window.requestAnimationFrame(calculateDotThresholds);
    window.addEventListener("resize", calculateDotThresholds);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", calculateDotThresholds);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const lineStart = 14;
      const lineHeight = Math.max(1, container.offsetHeight - lineStart);
      const triggerY = viewportHeight * 0.85;
      const progress = Math.max(
        0,
        Math.min(1, (triggerY - rect.top - lineStart) / lineHeight),
      );
      setMaxLineProgress((current) => Math.max(current, progress));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      className="relative bg-[#0a0a0a] py-[7.2rem] lg:py-[9.6rem]"
      aria-label="Experience timeline"
    >
      {/* Film grain */}
      <div className="grain-overlay" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[470px] overflow-hidden sm:h-[520px] md:h-[620px] xl:hidden" aria-hidden="true">
        <img
          src="/images/fitness.webp"
          alt=""
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-[50%_34%] grayscale-[15%] brightness-[0.52] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a0a0a_0%,rgb(10_10_10_/_0.32)_16%,rgb(10_10_10_/_0.48)_52%,rgb(10_10_10_/_0.76)_78%,#0a0a0a_100%),linear-gradient(90deg,#0a0a0a_0%,rgb(10_10_10_/_0.42)_22%,rgb(10_10_10_/_0.18)_58%,#0a0a0a_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a] sm:h-52 md:h-60" />
        <div className="grain-overlay-image" aria-hidden="true" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-[4]">
        {/* Section header */}
        <div className="mb-10 relative min-h-[280px] py-10 md:mb-12 md:min-h-[420px] md:py-16 xl:min-h-0 xl:py-0">
          {/* Desktop ghost watermark — "YEARS" behind headline */}
          <span
            className="hidden xl:block absolute top-0 -left-2 z-[1] font-display uppercase text-[#f5f5f0] opacity-[0.05] text-[20rem] leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            YEARS
          </span>

          <div className="relative">
            {/* Tablet ghost watermark — "YEARS" behind headline */}
            <span
              className="hidden md:block xl:hidden absolute top-1/2 -translate-y-1/2 -left-4 z-0 font-display uppercase text-[#f5f5f0] opacity-[0.05] text-[20vw] leading-none select-none pointer-events-none whitespace-nowrap"
              aria-hidden="true"
            >
              YEARS
            </span>

            <h2 className="relative z-10 font-display text-6xl md:text-8xl lg:text-9xl text-[#f5f5f0] uppercase tracking-wide leading-none">
              20 Years.
            </h2>
            <h2 className="relative z-10 font-display text-6xl md:text-8xl lg:text-9xl text-[#f5f5f0] uppercase tracking-wide leading-none">
              One Focus.
            </h2>
          </div>

          {/* Purple accent rule */}
          <div
            className="relative z-10 w-16 h-px bg-accent-violet mt-8 mb-5"
            aria-hidden="true"
          />
          <p className="relative z-10 font-serif italic text-[#a0a0a0] text-xl md:text-2xl">
            The experience that refined my approach.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(380px,520px)] gap-16 xl:gap-20 items-start">
          {/* Timeline list */}
          <div ref={containerRef} className="relative max-w-3xl">
            {/*
              Vertical line — position:absolute, contained in this div.
              left: 15px centers it on the w-8 (32px) dot column (dot center = 16px).
              top: 14px = mt-1.5 (6px) + half of h-4 (8px) = first dot center.
              height: calc(100% - 14px) runs to near the bottom of the last dot.
            */}
            <div
              className="absolute w-px bg-[#1f1f1f] overflow-hidden"
              style={{ left: "15px", top: "14px", height: "calc(100% - 14px)" }}
              aria-hidden="true"
            >
              <div
                className="w-full bg-accent-violet/60 transition-[height] duration-200 ease-out"
                style={{ height: `${maxLineProgress * 100}%` }}
              />
            </div>

            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <MilestoneItem
                key={index}
                milestone={milestone}
                index={index}
                active={
                  maxLineProgress > 0 &&
                  dotThresholds[index] !== undefined &&
                  maxLineProgress >= dotThresholds[index]
                }
                setItemRef={(itemIndex, el) => {
                  itemRefs.current[itemIndex] = el;
                }}
              />
            ))}
          </div>

          <div className="hidden xl:block h-[840px] xl:-mt-8">
            <div className="timeline-image-bleed relative h-full w-full overflow-hidden">
              <img
                src="/images/fitness.webp"
                alt="Rich McCauley in the gym"
                className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-[52%_center] grayscale-[15%] brightness-[0.82] contrast-[1.06]"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(90deg,#0a0a0a_0%,rgb(10_10_10_/_0.42)_9%,rgb(10_10_10_/_0.08)_28%,transparent_48%),linear-gradient(0deg,#0a0a0a_0%,rgb(10_10_10_/_0.48)_12%,transparent_34%),linear-gradient(180deg,#0a0a0a_0%,rgb(10_10_10_/_0.28)_8%,transparent_24%)]"
                aria-hidden="true"
              />
              <div className="grain-overlay-image grain-overlay-fitness" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
