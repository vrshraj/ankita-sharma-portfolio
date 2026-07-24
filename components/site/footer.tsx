'use client'



const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export function Footer() {
  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-sage-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div className="relative flex h-20 w-60 sm:h-24 sm:w-80 flex-col justify-center">
          <img
            src="/final-logo.png"
            alt="Ankita Sharma Logo"
            className="h-full w-full object-contain md:object-left"
          />
        </div>

        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-6 py-5 text-center text-xs text-primary-foreground/70">
          &copy; 2026 Ankita Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
