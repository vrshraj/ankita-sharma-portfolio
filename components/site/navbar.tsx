'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]


export function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-sage/95 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 sm:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, 'home')}
          className="relative h-16 w-60 sm:h-20 sm:w-72"
        >
          <img
            src="/final-logo.png"
            alt="Ankita Sharma Logo"
            className="h-full w-full object-contain object-left"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className="relative py-1 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                    active === id ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>



        {/* Mobile toggle */}
        <button
          className="text-primary-foreground md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-primary-foreground/15 bg-sage/95 px-5 pb-6 pt-2 backdrop-blur-sm md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active === id
                      ? 'bg-primary-foreground/10 text-primary-foreground'
                      : 'text-primary-foreground/85 hover:bg-primary-foreground/5'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

        </div>
      )}
    </header>
  )
}
