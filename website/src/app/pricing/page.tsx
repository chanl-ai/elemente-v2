import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { HeroWrapper, HeroContent } from '@/components/hero-wrapper'
import { 
  PricingFour,
  FaqsTwo,
  FeaturesEight,
  CallToActionOne
} from '@/components/blocks'

export const metadata: Metadata = {
  title: 'Pricing - Simple & Transparent Plans | Elemente',
  description: 'Choose the perfect Elemente plan for your team. Start free, upgrade as you grow. No hidden fees, no long-term contracts.',
  keywords: ['AI outreach pricing', 'sales automation cost', 'outreach software plans', 'sales tool pricing'],
}

const pricingHeroContent: HeroContent = {
  variant: 'pricing',
  title: 'Simple, Transparent Pricing',
  subtitle: 'Choose the perfect plan for your team. Start free, upgrade as you grow. No hidden fees, no long-term contracts required.',
  primaryCTA: {
    text: 'Start Free Trial',
    href: '/pricing#plans'
  },
  secondaryCTA: {
    text: 'Compare Plans',
    href: '#comparison'
  }
}

export default function PricingPage() {
  return (
    <>
      <HeroWrapper content={pricingHeroContent} variant="minimal" />

      {/* Detailed Pricing Plans */}
      <PricingFour />

      {/* Pricing FAQs */}
      <FaqsTwo />

      {/* Feature Comparison */}
      <FeaturesEight />

      {/* Get Started CTA */}
      <CallToActionOne />
      
      <SiteFooter />
    </>
  )
} 