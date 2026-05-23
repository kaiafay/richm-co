import { FadeUp } from '@/components/fade-up'

const services = [
  {
    number: '01',
    title: 'Personal Training',
    description:
      "Results-driven programming built around your body, your schedule, and where you actually want to go. No cookie-cutter plans.",
  },
  {
    number: '02',
    title: 'Sales Consulting',
    description:
      "Sharpen your process, tighten your close rate, sell with more confidence. Built for reps, managers, and executives who want to stop leaving money on the table.",
  },
  {
    number: '03',
    title: 'Life Coaching',
    description:
      "Clarity, accountability, and a plan. For people who are capable of more and know it.",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0a0a0a] py-[7.2rem] lg:py-[9.6rem]"
      aria-label="Services"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-[2]">
        {/* Section label */}
        <FadeUp delay={0}>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#6b6b6b] mb-16">
            What We Do
          </p>
        </FadeUp>

        {/* Service columns — no dividers, generous padding provides separation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <FadeUp
              key={service.number}
              delay={(index + 1) * 100}
              className={`relative pt-4 pb-10 px-10 lg:px-12 overflow-visible ${index !== 0 ? 'mt-12 md:mt-0' : ''}`}
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
  )
}
