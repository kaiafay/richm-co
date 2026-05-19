'use client'

import { useEffect, useRef, useState } from 'react'

const milestones = [
  {
    title: "Associate's Degree, Human Movement & Exercise Science",
    description: "Foundation in how the body actually works.",
  },
  {
    title: "20 Years in the Fitness Industry",
    description: "Trained bodies at every level, from first-timers to competitive athletes.",
  },
  {
    title: "Entered Corporate Sales",
    description: "Took the same discipline from the gym floor into sales floors.",
  },
  {
    title: "10+ Years in Sales Leadership",
    description: "Built teams, hit numbers, figured out what actually moves people.",
  },
  {
    title: "Sales Transformation Analyst, Royal Caribbean",
    description: "Currently leading enterprise-level sales strategy for one of the world's largest cruise lines.",
  },
  {
    title: "Created Sales Mentorship Program",
    description: "Developed training content and upskill workshops for frontline reps through upper leadership.",
  },
]

function MilestoneItem({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative flex items-start gap-6 pb-14 last:pb-0"
    >
      {/* Dot column — fixed w-8 so line center (15px) aligns with dot center (16px) */}
      <div className="w-8 flex-shrink-0 flex justify-center mt-1.5">
        <div
          className={`
            w-4 h-4 rounded-full border-2 transition-all duration-500
            ${active
              ? 'bg-[#3D0F52] border-[#3D0F52]'
              : 'bg-transparent border-[#3a3a3a]'
            }
          `}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div
        className={`transition-all duration-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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
  )
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const containerHeight = rect.height
      // progress 0 = container top at viewport bottom; progress 1 = container bottom at viewport top
      const scrolled = viewportHeight - rect.top
      const total = containerHeight + viewportHeight
      const progress = Math.max(0, Math.min(1, scrolled / total))
      setLineProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="experience"
      className="relative bg-[#0a0a0a] py-[7.2rem] lg:py-[9.6rem]"
      aria-label="Experience timeline"
    >
      {/* Film grain */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-[4]">
        {/* Section header */}
        <div className="mb-20 relative overflow-hidden">
          {/* Ghost watermark — "YEARS" behind headline */}
          <span
            className="absolute top-0 -left-2 font-display uppercase text-[#f5f5f0] opacity-[0.05] text-[28vw] lg:text-[20rem] leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            YEARS
          </span>

          <h2 className="relative font-display text-6xl md:text-8xl lg:text-9xl text-[#f5f5f0] uppercase tracking-wide leading-none">
            20 Years.
          </h2>
          <h2 className="relative font-display text-6xl md:text-8xl lg:text-9xl text-[#f5f5f0] uppercase tracking-wide leading-none">
            One Focus.
          </h2>
          {/* Purple accent rule */}
          <div className="w-16 h-px bg-[#3B0764] mt-8 mb-5" aria-hidden="true" />
          <p className="font-serif italic text-[#a0a0a0] text-xl md:text-2xl">
            The background behind the method.
          </p>
        </div>

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
            style={{ left: '15px', top: '14px', height: 'calc(100% - 14px)' }}
            aria-hidden="true"
          >
            <div
              className="w-full bg-[#3D0F52]/50"
              style={{ height: `${lineProgress * 100}%` }}
            />
          </div>

          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <MilestoneItem key={index} milestone={milestone} index={index} />
          ))}
        </div>
      </div>

    </section>
  )
}
