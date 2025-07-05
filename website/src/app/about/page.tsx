import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { HeroWrapper, HeroContent } from '@/components/hero-wrapper'
import { 
  TeamOne,
  StatsFour,
  ContentFive
} from '@/components/blocks'

export const metadata: Metadata = {
  title: 'About Us - Building the Future of Sales Outreach | Elemente',
  description: 'Learn about Elemente\'s mission to democratize effective sales outreach through AI-powered automation. Meet our team and see our impact.',
  keywords: ['about elemente', 'sales automation company', 'AI outreach team', 'sales technology mission'],
}

const aboutHeroContent: HeroContent = {
  variant: 'about',
  title: 'Building the Future of Sales Outreach',
  subtitle: 'We believe every business deserves access to intelligent, personalized outreach tools. Our mission is to democratize AI-powered sales automation for teams of all sizes.',
  primaryCTA: {
    text: 'Meet Our Team',
    href: '#team'
  },
  secondaryCTA: {
    text: 'Our Story',
    href: '#story'
  }
}

export default function AboutPage() {
  return (
    <>
      <HeroWrapper content={aboutHeroContent} variant="simple" />

      {/* Team Section */}
      <TeamOne />

      {/* Company Stats */}
      <StatsFour />

      {/* Mission & Values */}
      <ContentFive />
      
      <SiteFooter />
    </>
  )
} 