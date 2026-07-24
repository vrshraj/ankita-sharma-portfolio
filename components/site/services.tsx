'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Reveal } from './reveal'
import { WaveDivider } from './wave-divider'

const services = [
  {
    title: 'Content Strategy',
    image: '/images/service-strategy-v4.png',
    points: [
      'Monthly Content Planning',
      'Content Calendars',
      'Audience Research',
      'Competitor Analysis',
      'Brand Content Strategy',
    ],
  },
  {
    title: 'Content Creation',
    image: '/images/service-creation-v5.png',
    points: [
      'Instagram Reel Scripts',
      'Carousel Content',
      'Captions',
      'Hook Writing',
      'Content Research',
      'Content Ideas',
      'Story Content',
    ],
  },
  {
    title: 'Social Media Management',
    image: '/images/service-management-v4.png',
    points: [
      'Instagram Management',
      'Content Scheduling',
      'Profile Optimization',
      'Community Engagement',
      'Performance Tracking',
    ],
  },
  {
    title: 'Copywriting',
    image: '/images/service-copywriting.png',
    points: [
      'Social Media Copy',
      'Promotional Content',
      'Educational Content',
      'CTA Writing',
      'Brand Messaging',
    ],
  },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Services() {
  return (
    <section id="services" className="relative bg-sage pt-20 pb-32 sm:pt-28 sm:pb-40">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/75">
            What I Offer
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-3 text-center font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
            My Services
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-lg shadow-charcoal/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-xl font-bold text-charcoal">{service.title}</h3>
                  <ul className="mt-5 flex-1 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-peach/40">
                          <Check className="h-3 w-3 text-sage-dark" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
      
    </section>
  )
}
