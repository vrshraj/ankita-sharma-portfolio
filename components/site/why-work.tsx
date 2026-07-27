'use client'

import { Reveal } from './reveal'
import { WaveDivider } from './wave-divider'

const pillars = [
  {
    tag: 'Save time, stay sane.',
    text: 'Social media is a full-time job. Let an expert handle it while you focus on being the boss you are.',
  },
  {
    tag: 'Build your brand.',
    text: 'It can be intimidating knowing what to post and say on social media. Learn to present yourself and your concepts with confidence.',
  },
  {
    tag: 'Tell your story.',
    text: "I want to help you meet your maximum potential, whether it's helping you building brand loyalty or expanding your business offerings.",
  },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function WhyWork() {
  return (
    <section className="relative overflow-hidden bg-beige">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-[url('/about-img.png')] bg-cover bg-center bg-no-repeat opacity-20 grayscale"
      />

      {/* wave from beige SomeWork into this section */}
      <WaveDivider 
        fill="var(--beige)" 
        stroke="var(--peach)"
        strokeWidth={10}
        className="absolute inset-x-0 top-0 -translate-y-px z-10" 
        flip 
      />

      <div className="relative z-20 mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2 className="text-balance text-center font-serif text-5xl font-bold text-charcoal sm:text-6xl">
            I am here to help.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-12">
          {pillars.map(({ tag, text }, i) => (
            <Reveal key={tag} delay={i}>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-[100%] border border-sage-dark px-6 py-1.5">
                  <h3 className="font-serif text-lg text-charcoal">{tag}</h3>
                </div>
                <p className="mt-5 text-sm text-pretty leading-relaxed text-charcoal/90">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3}>
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-full bg-charcoal px-10 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-charcoal/20 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Are You Ready For It?
            </button>
          </div>
        </Reveal>
      </div>
      
      {/* bottom wave into next section (sage) */}
      <WaveDivider 
        fill="var(--sage)" 
        stroke="var(--peach)"
        strokeWidth={10}
        className="absolute inset-x-0 bottom-0 translate-y-px z-10" 
      />
    </section>
  )
}
