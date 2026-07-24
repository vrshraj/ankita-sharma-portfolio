'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { Reveal } from './reveal'

const clients = [
  {
    name: 'Assure Health',
    industry: 'Health & Wellness',
    role: 'Content Strategist & Script Writer',
    responsibilities: [
      'Developed engaging Instagram content ideas.',
      'Wrote educational and awareness-based Reel scripts.',
      'Planned content around health topics to increase audience engagement.',
      'Researched trending healthcare topics and audience interests.',
    ],
  },
  {
    name: 'Bidhun',
    industry: 'Health & Wellness',
    role: 'Content Strategist & Script Writer',
    responsibilities: [
      'Created educational content ideas for Instagram.',
      'Wrote informative Reel scripts focused on health awareness.',
      "Planned content that aligned with the brand's communication goals.",
      'Researched relevant health trends and audience preferences.',
    ],
  },
  {
    name: 'Dr. Mayank',
    industry: 'Hair Care',
    role: 'Content Strategist',
    responsibilities: [
      'Generated creative content ideas for Instagram.',
      'Planned educational hair care content.',
      'Researched trending hair care topics and audience pain points.',
      'Assisted in building a consistent content strategy.',
    ],
  },
  {
    name: 'Ambitio',
    industry: 'Study Abroad & Immigration',
    role: 'Content Strategist & Script Writer',
    responsibilities: [
      'Created content ideas for UK study, scholarships, visas, and immigration.',
      'Wrote engaging Instagram Reel scripts.',
      'Simplified complex information into easy-to-understand content.',
      'Planned educational content to improve audience engagement.',
    ],
  },
  {
    name: 'Business & Entrepreneurship',
    industry: 'Various',
    role: 'Content Research & Strategy',
    responsibilities: [
      'Researched trending business and startup topics.',
      'Developed educational content ideas.',
      'Wrote scripts around business concepts and emerging opportunities.',
      'Created content designed to educate and engage aspiring entrepreneurs.',
    ],
  },
]



export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(1)
  const trackRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(0)

  const gap = 28

  const measure = useCallback(() => {
    const width = window.innerWidth
    const pv = width >= 1024 ? 3 : width >= 640 ? 2 : 1
    setPerView(pv)
    const container = trackRef.current?.parentElement
    if (container) {
      const w = (container.clientWidth - gap * (pv - 1)) / pv
      setCardWidth(w)
    }
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  const maxIndex = Math.max(0, clients.length - perView)

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex)
  }, [index, maxIndex])

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1))

  return (
    <section id="testimonials" className="bg-sage py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/75">
            Clients &amp; Industries
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-3 text-center font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
            Recent Projects
          </h2>
        </Reveal>

        <div className="mt-14 overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex"
            style={{ gap }}
            animate={{ x: -(index * (cardWidth + gap)) }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {clients.map((c) => (
              <article
                key={c.name}
                style={{ width: cardWidth || undefined }}
                className="flex shrink-0 flex-col rounded-3xl bg-card p-7 shadow-lg shadow-charcoal/10"
              >
                <div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal">{c.name}</h3>
                  <p className="mt-1 text-sm font-semibold tracking-wide uppercase text-sage-dark">
                    {c.industry}
                  </p>
                  <p className="mt-4 font-medium text-charcoal">{c.role}</p>
                </div>
                <div className="mt-4 grow">
                  <ul className="ml-5 list-disc space-y-2 text-sm text-pretty text-muted-foreground marker:text-peach">
                    {c.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        {/* Arrows */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous clients"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-all hover:bg-primary-foreground/15 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="Next clients"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-all hover:bg-primary-foreground/15 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>


      </div>
    </section>
  )
}

