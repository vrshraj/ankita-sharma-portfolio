'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { Reveal } from './reveal'

const testimonials = [
  {
    name: 'Priya Menon',
    company: 'Founder, Bloom Skincare',
    image: '/images/client-1.png',
    quote:
      'Working with Ankita transformed our Instagram. Within three months our engagement doubled and we started getting DMs from real customers every single day. She just gets our brand voice.',
  },
  {
    name: 'Rahul Verma',
    company: 'CEO, Verma Consulting',
    image: '/images/client-2.png',
    quote:
      'Ankita rebuilt my LinkedIn presence from the ground up. I went from invisible to receiving inbound leads weekly. Her strategy is thoughtful, consistent, and genuinely results-driven.',
  },
  {
    name: 'Sara Kapoor',
    company: 'Owner, The Daily Roast',
    image: '/images/client-3.png',
    quote:
      'I finally have my time back. Ankita handles everything &mdash; planning, content, replies &mdash; and it all feels authentically us. Our cafe has never looked better online. Highly recommend!',
  },
  {
    name: 'Aditya Rao',
    company: 'Co-founder, FitLoop',
    image: '/images/client-2.png',
    quote:
      'The reels Ankita creates for us consistently outperform anything we made ourselves. She understands trends without ever losing sight of our positioning. A true partner.',
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

  const maxIndex = Math.max(0, testimonials.length - perView)

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
            Kind Words
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-3 text-center font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
            Client Success Stories
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
            {testimonials.map((t) => (
              <article
                key={t.name}
                style={{ width: cardWidth || undefined }}
                className="flex shrink-0 flex-col rounded-3xl bg-card p-7 shadow-lg shadow-charcoal/10"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-serif text-base font-bold text-charcoal">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-peach text-peach" />
                  ))}
                </div>
                <p
                  className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                />
              </article>
            ))}
          </motion.div>
        </div>

        {/* Arrows */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous testimonials"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-all hover:bg-primary-foreground/15 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="Next testimonials"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-all hover:bg-primary-foreground/15 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
