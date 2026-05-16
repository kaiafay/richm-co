import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Timeline } from '@/components/timeline'
import { About } from '@/components/about'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Timeline />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
