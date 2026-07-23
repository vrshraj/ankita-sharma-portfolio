'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Reveal } from './reveal'
import { WaveDivider } from './wave-divider'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function About() {
  return (
    <section id="about" className="relative bg-beige py-20 sm:py-28">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Portrait */}
        <Reveal>
          <div className="group relative mx-auto max-w-md overflow-hidden rounded-3xl shadow-xl shadow-charcoal/10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/about-img.png"
                alt="Ankita Sharma"
                width={640}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>
            <span className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-40 w-40 rounded-3xl bg-peach" />
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-sage-dark">
              About Me
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-4xl font-bold text-charcoal sm:text-5xl">
              Hi, I&apos;m Ankita!
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              I&apos;m a passionate social media manager helping businesses and
              personal brands grow through strategic content, meaningful audience
              engagement, and creative storytelling. From planning your content
              calendar to crafting scroll-stopping visuals, I take social media
              off your plate so you can focus on doing what you love.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              I believe every brand has a story worth telling &mdash; and I&apos;m
              here to tell yours with intention, consistency, and heart.
            </p>
          </Reveal>

        </div>
      </div>
      
      <WaveDivider
        fill="var(--sage)"
        stroke="var(--peach)"
        strokeWidth={10}
        className="absolute inset-x-0 bottom-0"
      />
    </section>
  )
}
