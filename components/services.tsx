import { FadeUp } from "@/components/fade-up";

const services = [
  {
    number: "01",
    title: "Fitness Coaching",
    description:
      "Custom training programs and nutrition plans tailored to your body, your schedule, and your goals.",
  },
  {
    number: "02",
    title: "Sales Consulting",
    description:
      "I help reps, sales leaders, and business owners tighten their process, raise their standard, and sell with more confidence.",
  },
  {
    number: "03",
    title: "Leadership Mentoring",
    description:
      "As a leader of multiple global mentorship programs, I coach individuals on both sides of the leadership curve — those stepping in for the first time and those who've been leading for years and want to do it better.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0a0a0a] py-[7.2rem] lg:py-[9.6rem]"
      aria-label="Services"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-[2]">
        {/* Section label */}
        <FadeUp delay={0} className="service-reveal">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#6b6b6b] mb-16">
            What I Offer
          </p>
        </FadeUp>

        {/* Service columns — no dividers, generous padding provides separation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <FadeUp
              key={service.number}
              delay={(index + 1) * 100}
              className={`service-reveal relative pt-4 pb-10 px-10 lg:px-12 overflow-visible ${index !== 0 ? "mt-12 md:mt-0" : ""}`}
            >
              {/* Large decorative number — overhangs top of column content */}
              <span
                className="absolute -top-6 left-10 lg:left-12 font-display text-[120px] md:text-[140px] text-[#222222] leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                {service.number}
              </span>

              {/* Content — pushed below the decorative number */}
              <div className="mt-[95px] md:mt-[110px]">
                {/* Purple accent rule */}
                <div
                  className="w-12 h-px bg-accent-violet mb-5"
                  aria-hidden="true"
                />

                {/* Title */}
                <h2 className="font-display text-4xl lg:text-5xl text-[#f5f5f0] uppercase tracking-wide leading-none mb-4">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="font-sans text-base text-[#a0a0a0] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
