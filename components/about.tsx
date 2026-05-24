import { FadeUp } from "@/components/fade-up";

export function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0a0a0a] py-[7.2rem] lg:py-[9.6rem]"
      aria-label="About Rich McCauley"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-[2]">
        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] lg:grid-cols-2 gap-16 md:gap-12 lg:gap-24 items-start">
          {/* Left: Image */}
          <FadeUp delay={0}>
            <div className="relative md:max-w-[360px] lg:max-w-none">
              <img
                src="/images/about.webp"
                alt=""
                className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] object-cover object-top grayscale-[15%] brightness-[0.55] blur-2xl opacity-30"
                aria-hidden="true"
              />
              <div
                className="aspect-[3/4] md:max-h-[540px] lg:max-h-none overflow-hidden bg-[#1a1a1a] relative shadow-[0_0_48px_rgb(0_0_0_/_0.55)]"
                aria-hidden="false"
              >
                <img
                  src="/images/about.webp"
                  alt="Rich McCauley, founder of RichM Co."
                  className="w-full h-full object-cover object-top grayscale-[15%] brightness-[0.82]"
                />
                <div className="grain-overlay-image" aria-hidden="true" />
              </div>
            </div>
          </FadeUp>

          {/* Right: Copy */}
          <div className="flex flex-col justify-center lg:pt-6">
            {/* Purple accent rule */}
            <div
              className="w-12 h-px bg-accent-violet mb-8"
              aria-hidden="true"
            />

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#f5f5f0] uppercase tracking-wide leading-none mb-10">
              The Man Behind the Method
            </h2>

            <div className="space-y-6 font-sans text-base md:text-lg text-[#a0a0a0] leading-relaxed">
              <p>
                I&apos;ve spent 20 years in fitness and more than a decade in
                sales, training, coaching, and consulting. To me, those were
                never separate lanes. They were one long study in how people
                think, perform, and change.
              </p>
              <p>
                My background combines formal education in human movement with
                real-world work in sales transformation, training, and
                leadership development.
              </p>
              <p>
                Twenty years in, the best part is still watching someone&apos;s
                confidence catch up to their potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
