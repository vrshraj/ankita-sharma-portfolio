'use client'

import Image from 'next/image'
import { Reveal } from './reveal'
import { WaveDivider } from './wave-divider'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* wave from sage testimonials into the banner */}
      <WaveDivider
        fill="var(--sage)"
        stroke="var(--peach)"
        strokeWidth={10}
        className="absolute inset-x-0 top-0 z-20 -translate-y-px"
        flip
      />

      <Image
        src="/images/cta-banner.png"
        alt=""
        fill
        className="-z-10 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-charcoal/55" />

      <div className="mx-auto max-w-3xl px-6 py-32 text-center sm:py-40">
        <Reveal>
          <h2 className="text-balance font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl">
            Ready to elevate your social media presence?
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <button
            onClick={() => scrollTo('services')}
            className="mt-8 rounded-full bg-peach px-8 py-3.5 text-sm font-semibold text-charcoal shadow-lg shadow-charcoal/20 transition-transform duration-200 hover:-translate-y-0.5"
          >
            Explore My Services
          </button>
        </Reveal>
      </div>

      {/* wave into the beige contact section */}
      <WaveDivider 
        fill="var(--beige)" 
        stroke="var(--peach)"
        strokeWidth={10}
        className="absolute inset-x-0 bottom-0 z-20" 
      />
    </section>
  )
}
