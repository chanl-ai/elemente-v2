import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { 
  // Hero Sections (showing 3 different styles)
  HeroSectionOne,
  
  // Features (showing 3 different layouts)
  FeaturesOne,
  FeaturesThree,
  FeaturesFive,
  
  // Content sections
  ContentOne,
  ContentTwo,
  
  // Testimonials 
  TestimonialsOne,
  TestimonialsTwo,
  
  // Stats
  StatsOne,
  StatsTwo,
  
  // Integrations
  IntegrationsOne,
  IntegrationsTwo,
  
  // Pricing
  PricingOne,
  PricingTwo,
  
  // Call to Action
  CallToActionOne,
  CallToActionTwo,
  
  // Team
  TeamOne,
  
  // FAQs
  FaqsOne,
  
  // Logo Cloud
  LogoCloudOne,
  
  // Contact
  ContactOne,
  
  // Auth components
  LoginOne,
  SignUpOne,
  
  // Utilities
  getTotalBlockCount,
  blockCategories,
  HeroSectionSix,
  ContentSix,
  TestimonialsSix,
  StatsThree
} from '@/components/blocks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Success Stories & Case Studies | Elemente',
  description: 'See real results from Elemente customers. Discover how sales teams across industries use AI-powered outreach to drive growth.',
  keywords: ['sales automation case studies', 'AI outreach success stories', 'customer testimonials', 'sales results'],
}

export default function ShowcasePage() {
  const totalBlocks = getTotalBlockCount()
  const categoryCount = Object.keys(blockCategories).length

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <main className="pt-20">
        {/* Showcase Header */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
              🎨 Tailark Component Showcase
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
              Explore our complete library of <strong>{totalBlocks} components</strong> across <strong>{categoryCount} categories</strong> - 
              all production-ready and adapted for Elemente&apos;s AI-powered outreach platform.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm border rounded-lg px-4 py-2">
                <span className="text-sm font-medium">{totalBlocks} Components</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border rounded-lg px-4 py-2">
                <span className="text-sm font-medium">{categoryCount} Categories</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border rounded-lg px-4 py-2">
                <span className="text-sm font-medium">100% Production Ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* Component Categories Showcase */}
        
        {/* Hero Sections */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">🦸 Hero Sections (9 variants available)</h2>
            <div className="border rounded-lg overflow-hidden mb-8">
              <HeroSectionOne />
            </div>
            <p className="text-muted-foreground mb-12">
              <code>import {`{ HeroSectionOne }`} from &apos;@/components/blocks&apos;</code> - 
              Choose from 9 different hero layouts, each with unique styling and animations.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-8 bg-zinc-50 dark:bg-slate-900/20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">⚡ Features (12 variants available)</h2>
            
            {/* Features Grid Layout */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Grid Layout - FeaturesOne</h3>
              <div className="border rounded-lg overflow-hidden">
                <FeaturesOne />
              </div>
            </div>

            {/* Features Card Layout */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Card Layout - FeaturesThree</h3>
              <div className="border rounded-lg overflow-hidden">
                <FeaturesThree />
              </div>
            </div>

            {/* Features Simple Layout */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Simple Layout - FeaturesFive</h3>
              <div className="border rounded-lg overflow-hidden">
                <FeaturesFive />
              </div>
            </div>

            <p className="text-muted-foreground">
              <code>import {`{ FeaturesOne, FeaturesThree, FeaturesFive }`} from &apos;@/components/blocks&apos;</code> - 
              12 different feature layouts from simple grids to complex showcases.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">📝 Content (7 variants available)</h2>
            <div className="grid gap-8">
              <div className="border rounded-lg overflow-hidden">
                <ContentOne />
              </div>
              <div className="border rounded-lg overflow-hidden">
                <ContentTwo />
              </div>
            </div>
            <p className="text-muted-foreground mt-8">
              <code>import {`{ ContentOne, ContentTwo }`} from &apos;@/components/blocks&apos;</code> - 
              Rich content sections perfect for about pages and marketing content.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8 bg-zinc-50 dark:bg-slate-900/20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">⭐ Testimonials (6 variants available)</h2>
            <div className="space-y-8">
              <div className="border rounded-lg overflow-hidden">
                <TestimonialsOne />
              </div>
              <div className="border rounded-lg overflow-hidden">
                <TestimonialsTwo />
              </div>
            </div>
            <p className="text-muted-foreground mt-8">
              <code>import {`{ TestimonialsOne, TestimonialsTwo }`} from &apos;@/components/blocks&apos;</code> - 
              Customer feedback and social proof in beautiful layouts.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">📊 Stats (4 variants available)</h2>
            <div className="space-y-8">
              <div className="border rounded-lg overflow-hidden">
                <StatsOne />
              </div>
              <div className="border rounded-lg overflow-hidden">
                <StatsTwo />
              </div>
            </div>
            <p className="text-muted-foreground mt-8">
              <code>import {`{ StatsOne, StatsTwo }`} from &apos;@/components/blocks&apos;</code> - 
              Showcase your metrics and achievements with impact.
            </p>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-8 bg-zinc-50 dark:bg-slate-900/20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">🔗 Integrations (8 variants available)</h2>
            <div className="space-y-8">
              <div className="border rounded-lg overflow-hidden">
                <IntegrationsOne />
              </div>
              <div className="border rounded-lg overflow-hidden">
                <IntegrationsTwo />
              </div>
            </div>
            <p className="text-muted-foreground mt-8">
              <code>import {`{ IntegrationsOne, IntegrationsTwo }`} from &apos;@/components/blocks&apos;</code> - 
              Showcase your partner ecosystem and integrations.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">💰 Pricing (5 variants available)</h2>
            <div className="space-y-12">
              <div className="border rounded-lg overflow-hidden">
                <PricingOne />
              </div>
              <div className="border rounded-lg overflow-hidden">
                <PricingTwo />
              </div>
            </div>
            <p className="text-muted-foreground mt-8">
              <code>import {`{ PricingOne, PricingTwo }`} from &apos;@/components/blocks&apos;</code> - 
              Beautiful pricing tables with feature comparisons.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="py-8 bg-zinc-50 dark:bg-slate-900/20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">👥 Team (2 variants available)</h2>
            <div className="border rounded-lg overflow-hidden">
              <TeamOne />
            </div>
            <p className="text-muted-foreground mt-8">
              <code>import {`{ TeamOne }`} from &apos;@/components/blocks&apos;</code> - 
              Showcase your team with professional layouts.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">❓ FAQs (4 variants available)</h2>
            <div className="border rounded-lg overflow-hidden">
              <FaqsOne />
            </div>
            <p className="text-muted-foreground mt-8">
              <code>import {`{ FaqsOne }`} from &apos;@/components/blocks&apos;</code> - 
              Answer common questions with clean, organized layouts.
            </p>
          </div>
        </section>

        {/* Logo Cloud */}
        <section className="py-8 bg-zinc-50 dark:bg-slate-900/20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">🏢 Logo Cloud (3 variants available)</h2>
            <div className="border rounded-lg overflow-hidden">
              <LogoCloudOne />
            </div>
            <p className="text-muted-foreground mt-8">
              <code>import {`{ LogoCloudOne }`} from &apos;@/components/blocks&apos;</code> - 
              Display customer and partner logos with style.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">📞 Contact (2 variants available)</h2>
            <div className="border rounded-lg overflow-hidden">
              <ContactOne />
            </div>
            <p className="text-muted-foreground mt-8">
              <code>import {`{ ContactOne }`} from &apos;@/components/blocks&apos;</code> - 
              Professional contact forms for lead generation.
            </p>
          </div>
        </section>

        {/* Auth Components */}
        <section className="py-8 bg-zinc-50 dark:bg-slate-900/20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">🔐 Authentication (Login: 3, Sign Up: 3, Forgot Password: 2)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border rounded-lg overflow-hidden">
                <LoginOne />
              </div>
              <div className="border rounded-lg overflow-hidden">
                <SignUpOne />
              </div>
            </div>
            <p className="text-muted-foreground mt-8">
              <code>import {`{ LoginOne, SignUpOne }`} from &apos;@/components/blocks&apos;</code> - 
              Complete authentication flow components.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">🎯 Call to Action (3 variants available)</h2>
            <div className="space-y-8">
              <div className="border rounded-lg overflow-hidden">
                <CallToActionOne />
              </div>
              <div className="border rounded-lg overflow-hidden">
                <CallToActionTwo />
              </div>
            </div>
            <p className="text-muted-foreground mt-8">
              <code>import {`{ CallToActionOne, CallToActionTwo }`} from &apos;@/components/blocks&apos;</code> - 
              Drive conversions with compelling call-to-action sections.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">🚀 Ready to Build?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              You now have <strong>{totalBlocks} production-ready components</strong> at your fingertips. 
              Mix, match, and customize to build beautiful pages in minutes.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border rounded-lg p-6 max-w-2xl mx-auto">
              <code className="text-sm">
                import {`{ HeroSectionOne, FeaturesThree, TestimonialsTwo, PricingOne, CallToActionTwo }`} from &apos;@/components/blocks&apos;
              </code>
            </div>
          </div>
        </section>

        {/* Success Stories Hero */}
        <HeroSectionSix />

        {/* Detailed Case Studies */}
        <ContentSix />

        {/* Customer Testimonials */}
        <TestimonialsSix />

        {/* Results Metrics */}
        <StatsThree />
      </main>
      
      <SiteFooter />
    </div>
  )
} 