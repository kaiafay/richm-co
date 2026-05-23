'use client'

const CALENDLY_URL = 'https://calendly.com/placeholder'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] bg-[#0a0a0a] flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Film grain */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Mobile background image */}
      <div className="absolute inset-0 lg:hidden" aria-hidden="true">
        <img
          src="/images/hero.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] grayscale-[20%] brightness-[0.68] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a0a0a_0%,rgb(10_10_10_/_0.58)_18%,rgb(10_10_10_/_0.34)_48%,#0a0a0a_100%),linear-gradient(90deg,#0a0a0a_0%,rgb(10_10_10_/_0.56)_34%,rgb(10_10_10_/_0.18)_68%,#0a0a0a_100%)]" />
      </div>

      {/* Layout grid */}
      <div className="h-full max-w-[1200px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 items-stretch">

        {/* Left: Text — 60% */}
        <div className="lg:col-span-3 flex flex-col justify-center relative pt-28 pb-16 md:pt-32 lg:pt-16 lg:pb-12">

          {/* Ghost watermark — "RICHM" behind headline */}
          <span
            className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-4 font-display uppercase text-[#f5f5f0] opacity-[0.05] text-[22vw] xl:text-[18rem] leading-none select-none pointer-events-none whitespace-nowrap z-0"
            aria-hidden="true"
          >
            RICHM
          </span>

          <h1 className="relative z-10 font-display uppercase text-[#f5f5f0] leading-none tracking-wide">
            <span className="hero-line-1 block text-[14vw] md:text-[11vw] lg:text-[8vw] xl:text-[7.5rem]">
              Build the Body.
            </span>
            <span className="hero-line-2 block text-[14vw] md:text-[11vw] lg:text-[8vw] xl:text-[7.5rem]">
              Close the Deal.
            </span>
            <span className="hero-line-3 block text-[14vw] md:text-[11vw] lg:text-[8vw] xl:text-[7.5rem]">
              Own Your Life.
            </span>
          </h1>

          <p className="hero-subhead relative z-10 mt-6 lg:mt-8 font-serif italic text-[#a0a0a0] text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
            Coaching for people who are done playing small — in the gym, in business, and everywhere in between.
          </p>

          <div className="hero-cta relative z-10 mt-6 lg:mt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block font-sans text-sm font-medium tracking-widest uppercase
                bg-transparent border border-accent-violet text-[#f5f5f0]
                px-12 py-4
                shadow-[0_0_24px_rgb(139_92_246_/_0.12)]
                transition-colors duration-200
                hover:bg-accent-purple-hover hover:border-accent-violet hover:text-[#f5f5f0]
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet
              "
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>

        {/* Right: Image — 40% */}
        <div className="hidden lg:col-span-2 lg:flex flex-col h-[38vh] sm:h-[42vh] lg:h-full min-h-0 pb-8 lg:pt-[calc(4rem+2.5rem)] lg:pb-10">
          <div className="hero-image-bleed relative w-full flex-1 min-h-0 lg:w-[calc(100%+4rem)] lg:-mr-16">
            <img
              src="/images/hero.webp"
              alt="Rich McCauley — Fitness and Business Coach"
              className="absolute inset-0 w-full h-full object-cover object-[58%_center] grayscale-[20%] brightness-[0.90] contrast-[1.08]"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,#0a0a0a_0%,rgb(10_10_10_/_0.56)_10%,rgb(10_10_10_/_0.12)_28%,transparent_48%),linear-gradient(0deg,#0a0a0a_0%,rgb(10_10_10_/_0.55)_10%,transparent_28%),linear-gradient(180deg,#0a0a0a_0%,rgb(10_10_10_/_0.24)_8%,transparent_22%)]"
              aria-hidden="true"
            />
            <div className="grain-overlay-image" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
