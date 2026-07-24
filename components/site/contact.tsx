'use client'

import Image from 'next/image'

import { Reveal } from './reveal'
import { WaveDivider } from './wave-divider'



export function Contact() {
  return (
    <section id="contact" className="relative bg-beige py-20 sm:py-28">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        {/* Left: text */}
        <div>
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-sage-dark">
              Get In Touch
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-4xl font-bold text-charcoal sm:text-5xl">
              Let&apos;s Connect.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Tell me a little about your brand and where you&apos;d like to go.
              I&apos;ll get back to you within 48 hours to start the conversation.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8">
              <p className="text-lg text-charcoal">
                Contact me on this email:{' '}
                <a
                  href="mailto:ankitasharma9909v@gmail.com"
                  className="font-semibold text-sage-dark hover:underline"
                >
                  ankitasharma9909v@gmail.com
                </a>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right: image */}
        <Reveal delay={2}>
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl shadow-xl shadow-charcoal/10">
            <Image
              src="/about-img.png"
              alt="Ankita Sharma working at her desk"
              width={520}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <WaveDivider
        fill="var(--sage-dark)"
        stroke="var(--peach)"
        strokeWidth={10}
        className="absolute inset-x-0 bottom-0"
      />
    </section>
  )
}
