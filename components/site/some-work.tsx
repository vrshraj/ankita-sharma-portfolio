'use client'

import { useState } from 'react'
import { Reveal } from './reveal'
import { WaveDivider } from './wave-divider'

const works = [
  {
    id: 1,
    video: '/videos/video1.mp4',
    script: `Hook- Avocado toast, avocado smoothies, avocado everything. Everyone's eating avocados, but almost nobody knows why they're actually so good for your health. Let me explain.

Body- Avocados are one of the most nutrient-dense foods you can eat. They're rich in monounsaturated fats, the same healthy fats found in olive oil, which support heart health, help lower bad cholesterol, and reduce inflammation.

They're also packed with magnesium and potassium, two essential minerals that help regulate blood pressure, support muscle function, and improve sleep quality. Most people don't get enough of these nutrients.

One avocado also provides a significant amount of fibre, helping improve digestion, keep you full for longer, and maintain steady blood sugar levels.

On top of that, avocados are loaded with Vitamins K, B-complex, C, and E, which support your bones, immune system, skin, and overall health.

Very few single foods can support your heart, gut, brain, skin, and hair all at once.

The only thing to remember is that avocados are calorie-dense. One whole avocado contains around 230–250 calories, so enjoy it as your healthy fat source instead of adding it to an already heavy meal.

CTA- Comment "FRUIT" if you want the best ways to eat avocado every day without spending money on overpriced café versions.`,
  },
  {
    id: 2,
    video: '/videos/video2.mp4',
    script: `Hook- Diabetics are always told to avoid rice because it spikes blood sugar. But what if I told you there's a simple way to cook rice that can help reduce its impact on blood sugar?

Body- The problem with regular rice is its starch, which is quickly broken down into glucose and can cause a rapid rise in blood sugar. But with a few simple changes, you can reduce that effect.

First, rinse the rice 3–4 times until the water runs clear. This helps remove excess surface starch.

Next, cook it using a 4:1 water-to-rice ratio, then drain the extra water after it's cooked. This removes even more starch.

The most important step is to cool the cooked rice in the refrigerator overnight. As the rice cools, some of its starch converts into resistant starch, which is digested more slowly by the body.

When you reheat the rice the next day, most of that resistant starch remains. This can lead to a slower rise in blood sugar, fewer calories being absorbed, and a lower glycemic impact compared to freshly cooked rice.

This method isn't just helpful for people with diabetes—it can also benefit anyone trying to manage blood sugar or reduce calorie intake.

CTA- Comment "RICE" and I'll send you the complete science behind this method and how it changes the nutritional profile of rice.`,
  },
  {
    id: 3,
    video: '/videos/video3.mp4',
    script: `Hook- You've probably seen the headline: "A man died after drinking a protein shake." And now people think whey protein damages your kidneys. But here's what you actually need to know.

Body- Whey protein is simply a protein extracted from milk. It's the liquid that separates during the process of making paneer or hung curd. Manufacturers remove the fat and sugar, dry it into a powder, and that's what ends up in your protein tub.

Now let's clear up some common myths.

Myth 1: Whey protein damages your kidneys.
The truth is, this is only a concern for people who already have pre-existing kidney disease. For healthy individuals, current research does not show that a high-protein intake harms kidney function.

Myth 2: Drinking protein will make you bulky.
Protein alone doesn't build bulky muscles. Muscle growth happens only when you combine adequate protein with progressive strength training. Simply drinking a protein shake without exercising won't make you bulky.

Whether you're a student, a vegetarian, a woman, or someone over 60, if you're not meeting your daily protein needs through food, whey protein is one of the most researched, safe, and effective supplements available.

CTA- Comment "PROTEIN" and I'll send you the exact amount of protein you should eat every day based on your body weight, along with the easiest way to reach your target.`,
  },
  {
    id: 4,
    video: '/videos/video4.mp4',
    script: `Hook- After delivery, a woman's body can take up to two years to fully recover. But many people expect her to be "back to normal" within just a few weeks. Here's what's actually happening inside her body.

Body- Pregnancy causes massive changes in a woman's body, and recovery doesn't happen overnight.

First, hormones. During pregnancy, estrogen and progesterone reach the highest levels they'll ever be. After childbirth, these hormone levels drop rapidly, which can affect mood, energy, memory, and emotional well-being.

Second, physical recovery. The uterus takes around six weeks to return to its normal size. If the delivery was by C-section, it's not just childbirth—it's major abdominal surgery, and internal healing can take at least three months.

This is why many new mothers feel physically exhausted, emotionally overwhelmed, or forget small things. It's not because they're careless—their body and brain are still recovering.

During this time, a husband's patience, support, and presence aren't just helpful—they're an essential part of her recovery.

CTA- Comment "WOMAN" and I'll send you a complete guide on how to support your wife's recovery during the first two years after childbirth, including what to do, what to avoid saying, and what she truly needs from you.`,
  }
]

export function SomeWork() {
  const [flippedId, setFlippedId] = useState<number | null>(null)

  return (
    <section id="work" className="relative bg-beige py-20 sm:py-28">
      {/* wave from sage services into this section */}
      <WaveDivider
        fill="var(--sage)"
        stroke="var(--peach)"
        strokeWidth={10}
        className="absolute inset-x-0 top-0 z-20 -translate-y-px"
        flip
      />
      <div className="mx-auto max-w-6xl px-6 relative z-30">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-sage-dark">
            Portfolio
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-3 text-center font-serif text-4xl font-bold text-charcoal sm:text-5xl">
            Some of My Work
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((work, index) => (
            <Reveal key={work.id} delay={index}>
              <div 
                className="group relative aspect-[9/16] w-full [perspective:1000px] cursor-pointer"
                onClick={() => setFlippedId(flippedId === work.id ? null : work.id)}
              >
                <div className={`absolute inset-0 h-full w-full rounded-2xl shadow-xl shadow-charcoal/10 transition-all duration-500 [transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)] ${flippedId === work.id ? '[transform:rotateY(180deg)]' : ''}`}>
                  
                  {/* Front side (Video) */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl overflow-hidden [backface-visibility:hidden]">
                    <video 
                      src={work.video} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-4 inset-x-0 mx-auto w-max rounded-full bg-black/60 px-4 py-1.5 text-xs text-white backdrop-blur-md sm:hidden transition-opacity">
                      Tap for script
                    </div>
                  </div>

                  {/* Back side (Script) */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-card p-6 overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-sage scrollbar-track-transparent">
                      <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                        {work.script}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
