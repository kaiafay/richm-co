const CALENDLY_URL = 'https://calendly.com/placeholder'

export function CTA() {
  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] py-32 lg:py-40"
      aria-label="Book a call"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Purple accent rule */}
        <div
          className="w-12 h-px bg-[#3B0764] mx-auto mb-12"
          aria-hidden="true"
        />

        <h2 className="font-display text-6xl md:text-8xl lg:text-[9rem] xl:text-[10rem] text-[#f5f5f0] uppercase tracking-wide leading-none text-balance mb-8">
          Ready to Do the Work?
        </h2>

        <p className="font-serif italic text-[#a0a0a0] text-xl md:text-2xl mb-14 max-w-2xl mx-auto">
          One conversation is all it takes to figure out if this is the right fit.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block font-sans text-sm font-medium tracking-widest uppercase
            bg-[#3B0764] text-[#f5f5f0]
            px-14 py-5
            transition-all duration-300
            hover:bg-[#4C1D95]
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C1D95]
          "
        >
          Book a Free Call
        </a>
      </div>
    </section>
  )
}
