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
      className="bg-[#f5f5f0] py-24 lg:py-32"
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#6b6b6b] mb-16">
          What We Do
        </p>

        {/* Service columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`
                relative py-10 px-8
                ${index !== 0 ? 'md:border-l border-l-[#3B0764]' : ''}
                ${index !== 0 ? 'border-t md:border-t-0 border-t-[#d4d4d0]' : ''}
              `}
            >
              {/* Large muted number */}
              <span
                className="font-display text-8xl md:text-9xl text-[#d4d4d0] leading-none select-none"
                aria-hidden="true"
              >
                {service.number}
              </span>

              {/* Purple accent rule */}
              <div
                className="w-12 h-px bg-[#3B0764] my-5"
                aria-hidden="true"
              />

              {/* Title */}
              <h2 className="font-display text-4xl lg:text-5xl text-[#0a0a0a] uppercase tracking-wide leading-none mb-4">
                {service.title}
              </h2>

              {/* Description */}
              <p className="font-sans text-base text-[#3a3a3a] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
