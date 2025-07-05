import { siteConfig } from '@/config/site.config'

// Page-specific content types
export interface PageContent {
  hero?: {
    title: string
    subtitle?: string
    ctaText?: string
    ctaUrl?: string
    secondaryCtaText?: string
    secondaryCtaUrl?: string
    backgroundImage?: string
  }
  features?: Array<{
    id: string
    title: string
    description: string
    icon?: string
    image?: string
    benefits?: string[]
  }>
  testimonials?: Array<{
    content: string
    author: string
    role: string
    company: string
    image?: string
    companyLogo?: string
    metrics?: {
      before: string
      after: string
      improvement: string
    }
  }>
  faqs?: Array<{
    question: string
    answer: string
  }>
  content?: {
    title?: string
    subtitle?: string
    content?: string
    sections?: Array<{
      title: string
      description: string
      image?: string
    }>
  }
  cta?: {
    title: string
    subtitle?: string
    ctaText: string
    ctaUrl: string
    image?: string
  }
}

// Homepage content
export const homepageContent: PageContent = {
  hero: {
    title: "Transform Your Outreach with AI-Powered Automation",
    subtitle: "Send personalized messages that convert. Automate follow-ups across email, LinkedIn, and phone calls. Turn cold prospects into warm leads with Elemente's intelligent outreach platform.",
    ctaText: "Start Free Trial",
    ctaUrl: "/pricing",
    secondaryCtaText: "Watch Demo",
    secondaryCtaUrl: "/demo",
    backgroundImage: "/hero/dashboard-mockup.jpg",
  },
  features: siteConfig.features.core,
  testimonials: siteConfig.testimonials.homepage,
}

// Platform page content
export const platformContent: PageContent = {
  hero: {
    title: "The Complete AI Outreach Platform",
    subtitle: "Everything you need to create, automate, and optimize your outreach campaigns in one powerful platform.",
    ctaText: "Explore Features",
    ctaUrl: "#features",
    backgroundImage: "/hero/platform-overview.jpg",
  },
  features: siteConfig.features.detailed,
  testimonials: siteConfig.testimonials.features,
  content: {
    title: "Built for Every Sales Scenario",
    sections: [
      {
        title: "Cold Outreach",
        description: "Generate personalized cold emails that get responses. Our AI analyzes prospect data to create compelling messages that feel human-written.",
        image: "/use-cases/cold-outreach.jpg",
      },
      {
        title: "Lead Nurturing", 
        description: "Automated sequences to move prospects through your pipeline. Set up behavioral triggers that respond to prospect engagement in real-time.",
        image: "/use-cases/lead-nurturing.jpg",
      },
      {
        title: "Event Follow-up",
        description: "Capitalize on trade shows and webinars with timely follow-ups. Coordinate multi-channel campaigns that keep you top-of-mind.",
        image: "/use-cases/event-followup.jpg",
      },
    ],
  },
}

// Pricing page content
export const pricingContent: PageContent = {
  hero: {
    title: "Plans That Scale with Your Growth",
    subtitle: "Start free, upgrade as you grow. No hidden fees, no long-term contracts.",
    ctaText: "Start Free Trial",
    ctaUrl: "/signup",
    backgroundImage: "/hero/pricing-overview.jpg",
  },
  faqs: siteConfig.faqs.pricing,
  cta: {
    title: "Ready to Transform Your Outreach?",
    subtitle: "Join thousands of sales teams using Elemente to close more deals.",
    ctaText: "Start Free Trial",
    ctaUrl: "/signup",
    image: "/cta/success-illustration.jpg",
  },
}

// About page content
export const aboutContent: PageContent = {
  hero: {
    title: "Building the Future of Sales Outreach",
    subtitle: "Founded in 2022 by sales professionals who were tired of manual, ineffective outreach. We're on a mission to help every sales team achieve their potential.",
    backgroundImage: "/hero/company-story.jpg",
  },
  content: {
    title: "Our Mission & Values",
    content: "To democratize effective sales outreach through AI-powered automation",
    sections: [
      {
        title: "Customer Success",
        description: "Everything we do is focused on helping our customers achieve their sales goals and grow their businesses.",
      },
      {
        title: "Innovation",
        description: "We're constantly pushing the boundaries of what's possible with AI and automation in sales.",
      },
      {
        title: "Transparency", 
        description: "We believe in honest communication, clear pricing, and building trust through transparency.",
      },
      {
        title: "Teamwork",
        description: "We work together as one team, supporting each other and our customers to achieve shared success.",
      },
    ],
  },
}

// Contact page content
export const contactContent: PageContent = {
  hero: {
    title: "Get in Touch",
    subtitle: "Ready to transform your outreach? Let's talk about how Elemente can help your team.",
  },
  faqs: siteConfig.faqs.support,
}

// Showcase page content
export const showcaseContent: PageContent = {
  hero: {
    title: "Success Stories from Real Customers",
    subtitle: "See how sales teams across industries are using Elemente to drive results.",
    backgroundImage: "/hero/success-stories.jpg",
  },
  testimonials: siteConfig.testimonials.showcase,
  content: {
    title: "Case Studies",
    sections: [
      {
        title: "TechCorp: 300% Increase in Demo Bookings",
        description: "Learn how TechCorp used AI-powered personalization to transform their cold outreach and book 40% more demos with half the effort.",
        image: "/case-studies/techcorp.jpg",
      },
      {
        title: "StartupXYZ: $2M Pipeline Generated",
        description: "Discover how StartupXYZ leveraged automated LinkedIn outreach to generate $2M in pipeline and scale their sales team.",
        image: "/case-studies/startupxyz.jpg",
      },
      {
        title: "GrowthCo: 45% Shorter Sales Cycle",
        description: "See how GrowthCo reduced their sales cycle by 45% using smart follow-up sequences and behavioral automation.",
        image: "/case-studies/growthco.jpg",
      },
    ],
  },
}

// Utility functions for content management
export const getGlobalContent = () => siteConfig

export const getPageContent = (page: string): PageContent | null => {
  switch (page) {
    case 'homepage':
    case 'home':
    case '/':
      return homepageContent
    case 'platform':
    case '/platform':
      return platformContent
    case 'pricing':
    case '/pricing':
      return pricingContent
    case 'about':
    case '/about':
      return aboutContent
    case 'contact':
    case '/contact':
      return contactContent
    case 'showcase':
    case '/showcase':
      return showcaseContent
    default:
      return null
  }
}

// Helper to merge global and page content
export const getMergedContent = (page: string) => {
  const globalContent = getGlobalContent()
  const pageContent = getPageContent(page)
  
  return {
    global: globalContent,
    page: pageContent,
    // Quick access helpers
    brand: globalContent.brand,
    contact: globalContent.contact,
    pricing: globalContent.pricing,
    customers: globalContent.customers,
    integrations: globalContent.integrations,
    team: globalContent.team,
    stats: globalContent.stats,
    seo: globalContent.seo,
  }
}

// Block-specific content getters
export const getHeroContent = (page: string) => {
  const content = getPageContent(page)
  return content?.hero || null
}

export const getFeaturesContent = (page: string) => {
  const content = getPageContent(page)
  return content?.features || []
}

export const getTestimonialsContent = (page: string) => {
  const content = getPageContent(page)
  return content?.testimonials || []
}

export const getFaqsContent = (page: string) => {
  const content = getPageContent(page)
  return content?.faqs || []
}

export const getCtaContent = (page: string) => {
  const content = getPageContent(page)
  return content?.cta || null
}

// SEO content generator
export const generateSeoData = (page: string, customTitle?: string, customDescription?: string) => {
  const globalContent = getGlobalContent()
  const pageContent = getPageContent(page)
  
  const title = customTitle || pageContent?.hero?.title || globalContent.seo.defaultTitle
  const description = customDescription || pageContent?.hero?.subtitle || globalContent.seo.defaultDescription
  
  return {
    title: `${title} | ${globalContent.brand.name}`,
    description,
    keywords: globalContent.seo.defaultKeywords,
    image: globalContent.seo.defaultImage,
    twitterHandle: globalContent.seo.twitterHandle,
  }
} 