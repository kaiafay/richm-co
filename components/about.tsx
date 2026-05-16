export function About() {
  return (
    <section
      id="about"
      className="bg-[#f5f5f0] py-24 lg:py-32"
      aria-label="About Rich McCauley"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Image */}
          <div className="relative">
            <div
              className="aspect-[3/4] overflow-hidden bg-[#d4d4d0]"
              aria-hidden="false"
            >
              <img
                src="/images/about.jpg"
                alt="Rich McCauley, founder of RichM Co."
                className="w-full h-full object-cover object-top grayscale-[15%]"
              />
            </div>
          </div>

          {/* Right: Copy */}
          <div className="flex flex-col justify-center lg:pt-8">
            {/* Purple accent rule */}
            <div className="w-12 h-px bg-[#3B0764] mb-8" aria-hidden="true" />

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#0a0a0a] uppercase tracking-wide leading-none mb-10">
              The Method Comes From the Man
            </h2>

            <div className="space-y-6 font-sans text-base md:text-lg text-[#2a2a2a] leading-relaxed">
              <p>
                Rich McCauley has spent 20 years in fitness and over a decade in corporate sales — not as separate careers, but as one continuous study in what makes people change.
              </p>
              <p>
                He holds an Associate&apos;s in Human Movement and Exercise Science and currently works as a Sales Transformation Analyst at Royal Caribbean, where he builds training programs and mentorship pipelines for sales teams at every level.
              </p>
              <p>
                The through line across all of it: most people already know what they need to do. Rich helps them actually do it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
