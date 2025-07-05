import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { HeroWrapper, HeroContent } from '@/components/hero-wrapper'
import { 
  LogoCloudOne, 
  FeaturesFour,
  StatsTwo,
  TestimonialsThree,
  PricingOne
} from '@/components/blocks'

export const metadata: Metadata = {
  title: 'Elemente - AI-Driven Outreach That Converts',
  description: 'Transform your sales outreach with AI-powered automation. Send personalized messages across email, LinkedIn, and phone that actually convert prospects into customers.',
  keywords: ['AI outreach', 'sales automation', 'email marketing', 'LinkedIn outreach', 'sales prospecting', 'lead generation'],
}

const homeHeroContent: HeroContent = {
  variant: 'home',
  badge: {
    text: 'Introducing Support for AI Models',
    href: '#features'
  },
  title: 'Transform Your Outreach with AI-Powered Automation',
  subtitle: 'Send personalized messages that convert. Automate follow-ups across email, LinkedIn, and phone calls. Turn cold prospects into warm leads with Elemente\'s intelligent outreach platform.',
  primaryCTA: {
    text: 'Start Free Trial',
    href: '/pricing'
  },
  secondaryCTA: {
    text: 'Watch Demo',
    href: '/demo'
  },
  image: {
    src: '/mail2.png',
    alt: 'Elemente dashboard showing AI-powered outreach campaigns'
  }
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroWrapper content={homeHeroContent} variant="default" />

      {/* Customer Logos */}
      <LogoCloudOne />

      {/* Key Features */}
      <FeaturesFour />

      {/* Performance Stats */}
      <StatsTwo />

      {/* Customer Testimonials */}
      <TestimonialsThree />

      {/* Pricing Preview */}
      <PricingOne />
      
      <SiteFooter />
    </>
  )
}
