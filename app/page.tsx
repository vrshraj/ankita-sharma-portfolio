import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Services } from '@/components/site/services'
import { WhyWork } from '@/components/site/why-work'
import { Testimonials } from '@/components/site/testimonials'
import { CtaBanner } from '@/components/site/cta-banner'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'
import { SomeWork } from '@/components/site/some-work'
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SomeWork />
        <WhyWork />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
