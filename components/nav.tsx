'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id)
          return
        }
      }

      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1f1f1f]' : 'bg-[#0a0a0a]'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            setMenuOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-display text-2xl text-[#f5f5f0] tracking-wide hover:text-accent-violet transition-colors"
          aria-label="RichM Co. — home"
        >
          RichM Co.
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative font-sans text-sm tracking-widest uppercase transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent-violet after:transition-transform after:duration-200 ${
                    isActive
                      ? 'text-accent-violet'
                      : 'text-[#a0a0a0] hover:text-[#f5f5f0] hover:after:scale-x-100 focus-visible:after:scale-x-100'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden relative z-[70] size-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute left-2 right-2 top-1/2 h-px bg-[#f5f5f0] transition-transform duration-300 ${
              menuOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute left-2 right-2 top-1/2 h-px bg-[#f5f5f0] transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`absolute left-2 right-2 top-1/2 h-px bg-[#f5f5f0] transition-transform duration-300 ${
              menuOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-16 left-0 right-0 h-[calc(100dvh-4rem)] z-40 md:hidden bg-[#0a0a0a] transition-transform duration-500 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="grain-overlay" aria-hidden="true" />
        <div className="relative z-[2] h-full px-6 pt-10 pb-10 flex flex-col">
          <ul className="flex flex-col gap-6" role="list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative w-fit font-display text-5xl tracking-wider uppercase transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent-violet after:transition-transform after:duration-200 ${
                      isActive
                        ? 'text-accent-violet'
                        : 'text-[#f5f5f0] hover:after:scale-x-100 focus-visible:after:scale-x-100'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>

          <a
            href="/intakes"
            onClick={() => setMenuOpen(false)}
            className="mt-auto inline-flex w-fit font-display text-4xl uppercase tracking-wider text-[#f5f5f0] underline decoration-accent-violet decoration-1 underline-offset-8 transition-colors hover:text-accent-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-violet"
          >
            Work With Me
          </a>
        </div>
      </div>
    </header>
  )
}
