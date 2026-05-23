'use client'

import { useEffect, useRef, useState } from 'react'

const CALENDLY_URL = 'https://calendly.com/placeholder'

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const [buttonAnimated, setButtonAnimated] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setButtonAnimated(true)
          observer.unobserve(section)
        }
      },
      { threshold: 0.7 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-[#0a0a0a] py-[9.6rem] lg:py-[12rem]"
      aria-label="Book a call"
    >
      {/* Film grain */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center relative z-[4]">
        {/* Purple accent rule */}
        <div
          className="w-12 h-px bg-accent-violet mx-auto mb-12"
          aria-hidden="true"
        />

        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#f5f5f0] uppercase tracking-wide leading-none text-balance mb-8">
          Ready to Do the Work?
        </h2>

        <p className="font-serif italic text-[#a0a0a0] text-xl md:text-2xl mb-14 max-w-2xl mx-auto">
          One conversation is all it takes to figure out if this is the right fit.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`
              inline-block font-sans text-sm font-medium tracking-widest uppercase
              bg-transparent border border-accent-violet text-[#f5f5f0]
              px-12 py-4
              shadow-[0_0_24px_rgb(139_92_246_/_0.12)]
              transition-colors duration-200
              hover:bg-accent-purple-hover hover:border-accent-violet hover:text-[#f5f5f0]
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet
              ${buttonAnimated ? 'cta-button-attention' : ''}
            `}
        >
          Book a Free Call
        </a>
      </div>
    </section>
  )
}
