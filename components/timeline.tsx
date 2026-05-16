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
      {/* Dot */}
      <div className="relative flex-shrink-0 mt-1.5">
        <div
          className={`
            w-4 h-4 rounded-full border-2 transition-all duration-500
            ${active
              ? 'bg-[#3B0764] border-[#3B0764]'
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
  const lineRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const line = lineRef.current
    if (!container || !line) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate line height
          const totalHeight = container.scrollHeight
          setLineHeight(totalHeight)
          observer.unobserve(container)
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] py-24 lg:py-32"
      aria-label="Experience timeline"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-[#f5f5f0] uppercase tracking-wide leading-none">
            20 Years.
          </h2>
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-[#f5f5f0] uppercase tracking-wide leading-none">
            One Focus.
          </h2>
          {/* Purple accent rule */}
          <div className="w-16 h-px bg-[#3B0764] mt-8 mb-5" aria-hidden="true" />
          <p className="font-serif italic text-[#a0a0a0] text-xl md:text-2xl">
            The background behind the method.
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-3xl">
          {/* Animated vertical line */}
          <div
            className="absolute left-[7px] top-0 w-px bg-[#1f1f1f] overflow-hidden"
            style={{ height: '100%' }}
            aria-hidden="true"
          >
            <div
              ref={lineRef}
              className="w-full bg-[#3a3a3a] transition-all duration-[1600ms] ease-out"
              style={{ height: lineHeight > 0 ? '100%' : '0%' }}
            />
          </div>

          {/* Milestones */}
          <div className="pl-8">
            {milestones.map((milestone, index) => (
              <MilestoneItem key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
