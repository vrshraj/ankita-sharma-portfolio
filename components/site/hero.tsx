'use client'

import { motion } from 'framer-motion'
import { WaveDivider } from './wave-divider'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-sage pb-24 pt-32 sm:pt-36"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-primary-foreground/80"
        >
          Social Media Manager &middot; Content Strategist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance font-serif text-4xl font-bold leading-[1.08] text-charcoal sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Let&apos;s tell <span className="accent-underline">your story</span>
          <br className="hidden sm:block" /> on social media.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-charcoal/85 sm:text-lg"
        >
          Strategic content, genuine engagement, and creative storytelling that
          turns followers into a community and a community into clients.
        </motion.p>


      </div>

      {/* Wave into the beige About section */}
      <WaveDivider
        fill="var(--beige)"
        stroke="var(--peach)"
        strokeWidth={10}
        className="absolute inset-x-0 bottom-0"
      />
    </section>
  )
}
