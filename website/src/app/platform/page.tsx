import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { HeroWrapper, HeroContent } from '@/components/hero-wrapper'
import { 
  FeaturesTwelve,
  IntegrationsSix,
  ContentThree,
  TestimonialsFive
} from '@/components/blocks'

export const metadata: Metadata = {
  title: 'Platform - AI Outreach Features | Elemente',
  description: 'Explore Elemente\'s complete AI outreach platform. Multi-channel campaigns, smart automation, and advanced analytics for modern sales teams.',
  keywords: ['AI outreach platform', 'sales automation features', 'multi-channel campaigns', 'sales analytics'],
}

const platformHeroContent: HeroContent = {
  variant: 'platform',
  title: 'AI-Powered Outreach Platform',
  subtitle: 'Discover the complete toolkit for modern sales teams. Multi-channel campaigns, smart automation, and advanced analytics that actually drive results.',
  primaryCTA: {
    text: 'Start Free Trial',
    href: '/pricing'
  },
  secondaryCTA: {
    text: 'View Features',
    href: '#features'
  },
  image: {
    src: '/charts.png',
    alt: 'Platform dashboard showing analytics and automation features'
  }
}

export default function PlatformPage() {
  return (
    <>
      <HeroWrapper content={platformHeroContent} variant="simple" />

      {/* Interactive Features */}
      <FeaturesTwelve />

      {/* Integrations */}
      <IntegrationsSix />

      {/* Use Cases */}
      <ContentThree />

      {/* Feature Testimonials */}
      <TestimonialsFive />
      
      <SiteFooter />
    </>
  )
} 