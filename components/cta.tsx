import { FadeUp } from '@/components/fade-up'

const CALENDLY_URL = 'https://calendly.com/placeholder'

export function CTA() {
  return (
    <section
      id="contact"
      className="relative bg-[#0a0a0a] py-[9.6rem] lg:py-[12rem]"
      aria-label="Book a call"
    >
      {/* Film grain */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center relative z-[4]">
        {/* Purple accent rule */}
        <FadeUp delay={0}>
          <div
            className="w-12 h-px bg-[#3B0764] mx-auto mb-12"
            aria-hidden="true"
          />
        </FadeUp>

        <FadeUp delay={100}>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#f5f5f0] uppercase tracking-wide leading-none text-balance mb-8">
            Ready to Do the Work?
          </h2>
        </FadeUp>

        <FadeUp delay={200}>
          <p className="font-serif italic text-[#a0a0a0] text-xl md:text-2xl mb-14 max-w-2xl mx-auto">
            One conversation is all it takes to figure out if this is the right fit.
          </p>
        </FadeUp>

        <FadeUp delay={300}>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block font-sans text-sm font-medium tracking-widest uppercase
              bg-transparent border border-[#3D0F52] text-[#f5f5f0]
              px-12 py-4
              transition-colors duration-200
              hover:bg-[#3D0F52] hover:text-[#f5f5f0]
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D0F52]
            "
          >
            Book a Free Call
          </a>
        </FadeUp>
      </div>
    </section>
  )
}
