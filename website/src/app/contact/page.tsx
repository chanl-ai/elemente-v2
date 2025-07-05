import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { HeroWrapper, HeroContent } from '@/components/hero-wrapper'
import { 
  ContactOne,
  ContactTwo,
  FaqsFour
} from '@/components/blocks'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch | Elemente',
  description: 'Ready to transform your outreach? Contact Elemente for support, sales inquiries, or to learn how we can help your team.',
  keywords: ['contact elemente', 'sales automation support', 'outreach software help', 'AI outreach demo'],
}

const contactHeroContent: HeroContent = {
  variant: 'contact',
  title: 'Get in Touch',
  subtitle: 'Ready to transform your outreach? Our team is here to help with demos, onboarding, support, or any questions about Elemente.',
  primaryCTA: {
    text: 'Schedule Demo',
    href: '#contact'
  },
  secondaryCTA: {
    text: 'Send Message',
    href: '#form'
  }
}

export default function ContactPage() {
  return (
    <>
      <HeroWrapper content={contactHeroContent} variant="minimal" />
      
      {/* Contact Form */}
      <ContactOne />

      {/* Contact Information */}
      <ContactTwo />

      {/* Support FAQs */}
      <FaqsFour />
      
      <SiteFooter />
    </>
  )
} 