'use client'

const CALENDLY_URL = 'https://calendly.com/placeholder'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Layout grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16 lg:pb-0 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-0 items-center min-h-screen">

        {/* Left: Text — 60% */}
        <div className="lg:col-span-3 flex flex-col justify-center">
          <h1 className="font-display uppercase text-[#f5f5f0] leading-none tracking-wide">
            <span className="hero-line-1 block text-[14vw] md:text-[11vw] lg:text-[9vw] xl:text-[8.5rem]">
              Build the Body.
            </span>
            <span className="hero-line-2 block text-[14vw] md:text-[11vw] lg:text-[9vw] xl:text-[8.5rem]">
              Close the Deal.
            </span>
            <span className="hero-line-3 block text-[14vw] md:text-[11vw] lg:text-[9vw] xl:text-[8.5rem]">
              Own Your Life.
            </span>
          </h1>

          <p className="hero-subhead mt-8 font-serif italic text-[#a0a0a0] text-xl md:text-2xl leading-relaxed max-w-2xl">
            Coaching for people who are done playing small — in the gym, in business, and everywhere in between.
          </p>

          <div className="hero-cta mt-10">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block font-sans text-sm font-medium tracking-widest uppercase
                border border-[#f5f5f0] text-[#f5f5f0]
                px-10 py-4
                transition-all duration-300
                hover:bg-[#3B0764] hover:border-[#3B0764]
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B0764]
              "
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>

        {/* Right: Image — 40% */}
        <div className="lg:col-span-2 relative h-[50vw] lg:h-screen max-h-[780px] lg:max-h-none overflow-hidden">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0a0a0a]/30 z-10" aria-hidden="true" />
          <img
            src="/images/hero.jpg"
            alt="Rich McCauley — Fitness and Business Coach"
            className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]"
          />
        </div>
      </div>

      {/* Purple accent rule at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#3B0764]"
        aria-hidden="true"
      />
    </section>
  )
}
