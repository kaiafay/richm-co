'use client'

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer
      className="bg-[#0a0a0a] border-t border-[#1f1f1f] py-6"
      aria-label="Site footer"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="inline-block touch-manipulation font-display text-xl text-[#f5f5f0] tracking-wide transition-[color,transform] hover:text-accent-violet active:scale-[0.97] active:text-accent-violet [-webkit-tap-highlight-color:transparent]"
            aria-label="RichM Co. — back to top"
          >
            RichM Co.
          </a>

          {/* Social + copyright */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 touch-manipulation items-center justify-center text-[#6b6b6b] transition-[color,background-color,transform] hover:text-accent-violet active:scale-95 active:bg-white/5 active:text-accent-violet [-webkit-tap-highlight-color:transparent]"
              aria-label="RichM Co. on Instagram"
            >
              <InstagramIcon />
            </a>
            <p className="whitespace-nowrap font-sans text-xs text-[#3a3a3a]">
              &copy; {new Date().getFullYear()} RichM Co.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
