export const siteConfig = {
  // Brand Identity
  brand: {
    name: "Elemente",
    tagline: "AI-Driven Outreach That Converts",
    description: "Transform your sales outreach with AI-powered automation and multi-channel campaigns that actually convert.",
    logo: "/logo.svg",
    logoLight: "/logo-light.svg",
    logoDark: "/logo-dark.svg",
    favicon: "/favicon.ico",
  },

  // Contact Information
  contact: {
    email: "support@elemente.com",
    phone: "+1 (555) 123-4567",
    address: "123 AI Street, San Francisco, CA 94105",
    supportEmail: "support@elemente.com",
    salesEmail: "sales@elemente.com",
  },

  // Social Links
  social: {
    twitter: "https://twitter.com/elemente",
    linkedin: "https://linkedin.com/company/elemente",
    github: "https://github.com/elemente",
    youtube: "https://youtube.com/c/elemente",
  },

  // Company Statistics
  stats: {
    customers: "500+",
    messagesSent: "10M+",
    revenueGenerated: "$50M+",
    uptime: "99.9%",
    responseRateIncrease: "3.5x",
    leadIncrease: "67%",
    timesSaved: "250+",
    satisfaction: "94%",
  },

  // Pricing Plans
  pricing: {
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: 49,
        priceAnnual: 39,
        description: "Perfect for small teams getting started",
        features: [
          "Up to 1,000 contacts",
          "Email outreach",
          "Basic automation",
          "Email support",
          "Basic analytics",
        ],
        limitations: [
          "No LinkedIn outreach",
          "No phone automation",
          "Basic templates only",
        ],
        cta: "Start Free Trial",
        popular: false,
      },
      {
        id: "professional",
        name: "Professional", 
        price: 149,
        priceAnnual: 119,
        description: "For growing sales teams that need more power",
        features: [
          "Up to 5,000 contacts",
          "Multi-channel outreach (Email, LinkedIn, Phone)",
          "Advanced automation & sequences",
          "Phone & email support",
          "Advanced analytics & A/B testing",
          "CRM integrations",
          "Custom templates",
        ],
        limitations: [],
        cta: "Start Free Trial",
        popular: true,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: null,
        priceAnnual: null,
        description: "For large organizations with custom needs",
        features: [
          "Unlimited contacts",
          "All Professional features",
          "Custom integrations",
          "Dedicated success manager", 
          "Custom training & onboarding",
          "Priority support",
          "Advanced security & compliance",
          "Custom reporting",
        ],
        limitations: [],
        cta: "Contact Sales",
        popular: false,
      },
    ],
  },

  // Customer Logos
  customers: [
    {
      name: "TechCorp",
      logo: "/customers/techcorp.svg",
      logoDark: "/customers/techcorp-dark.svg",
    },
    {
      name: "StartupXYZ",
      logo: "/customers/startupxyz.svg", 
      logoDark: "/customers/startupxyz-dark.svg",
    },
    {
      name: "GrowthCo",
      logo: "/customers/growthco.svg",
      logoDark: "/customers/growthco-dark.svg",
    },
    {
      name: "SalesForce Inc",
      logo: "/customers/salesforce.svg",
      logoDark: "/customers/salesforce-dark.svg",
    },
    {
      name: "InnovateNow",
      logo: "/customers/innovatenow.svg",
      logoDark: "/customers/innovatenow-dark.svg",
    },
    {
      name: "MarketLeader",
      logo: "/customers/marketleader.svg",
      logoDark: "/customers/marketleader-dark.svg",
    },
    {
      name: "ScaleUp",
      logo: "/customers/scaleup.svg",
      logoDark: "/customers/scaleup-dark.svg",
    },
    {
      name: "DataDriven",
      logo: "/customers/datadriven.svg",
      logoDark: "/customers/datadriven-dark.svg",
    },
  ],

  // Integrations
  integrations: {
    crm: [
      { name: "Salesforce", logo: "/integrations/salesforce.svg" },
      { name: "HubSpot", logo: "/integrations/hubspot.svg" },
      { name: "Pipedrive", logo: "/integrations/pipedrive.svg" },
      { name: "Zoho CRM", logo: "/integrations/zoho.svg" },
    ],
    email: [
      { name: "Gmail", logo: "/integrations/gmail.svg" },
      { name: "Outlook", logo: "/integrations/outlook.svg" },
      { name: "Exchange", logo: "/integrations/exchange.svg" },
      { name: "Apple Mail", logo: "/integrations/apple-mail.svg" },
    ],
    social: [
      { name: "LinkedIn Sales Navigator", logo: "/integrations/linkedin.svg" },
      { name: "Twitter", logo: "/integrations/twitter.svg" },
      { name: "Facebook", logo: "/integrations/facebook.svg" },
    ],
    calendar: [
      { name: "Calendly", logo: "/integrations/calendly.svg" },
      { name: "Google Calendar", logo: "/integrations/google-calendar.svg" },
      { name: "Outlook Calendar", logo: "/integrations/outlook-calendar.svg" },
    ],
  },

  // Team Members
  team: [
    {
      name: "John Smith",
      role: "CEO & Co-Founder",
      bio: "Former VP of Sales at TechCorp with 15 years in B2B sales. Led teams that generated over $100M in revenue.",
      image: "/team/john-smith.jpg",
      social: {
        linkedin: "https://linkedin.com/in/johnsmith",
        twitter: "https://twitter.com/johnsmith",
      },
    },
    {
      name: "Sarah Johnson", 
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer with AI/ML expertise. Built scalable systems serving millions of users.",
      image: "/team/sarah-johnson.jpg",
      social: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        github: "https://github.com/sarahjohnson",
      },
    },
    {
      name: "Mike Chen",
      role: "Head of Product",
      bio: "Former product manager at Salesforce. Expert in sales workflow optimization and user experience.",
      image: "/team/mike-chen.jpg", 
      social: {
        linkedin: "https://linkedin.com/in/mikechen",
        twitter: "https://twitter.com/mikechen",
      },
    },
    {
      name: "Lisa Rodriguez",
      role: "VP of Sales",
      bio: "20+ years in enterprise sales. Built and scaled sales teams from startup to IPO.",
      image: "/team/lisa-rodriguez.jpg",
      social: {
        linkedin: "https://linkedin.com/in/lisarodriguez",
      },
    },
  ],

  // Testimonials (categorized for reuse)
  testimonials: {
    homepage: [
      {
        content: "Elemente transformed our outreach. We're booking 40% more demos with half the effort.",
        author: "Sarah Johnson",
        role: "Sales Director",
        company: "TechCorp",
        image: "/testimonials/sarah-johnson.jpg",
        companyLogo: "/customers/techcorp.svg",
      },
      {
        content: "The AI personalization is incredible. Our email open rates jumped from 15% to 58%.",
        author: "Mike Chen",
        role: "Founder",
        company: "StartupXYZ", 
        image: "/testimonials/mike-chen.jpg",
        companyLogo: "/customers/startupxyz.svg",
      },
      {
        content: "Best investment we made. The automation saves us 20 hours per week.",
        author: "Lisa Rodriguez",
        role: "VP Sales",
        company: "GrowthCo",
        image: "/testimonials/lisa-rodriguez.jpg",
        companyLogo: "/customers/growthco.svg",
      },
    ],
    features: [
      {
        content: "The multi-channel automation is a game changer. We can now coordinate email, LinkedIn, and phone outreach seamlessly.",
        author: "David Park",
        role: "Sales Manager",
        company: "InnovateNow",
        image: "/testimonials/david-park.jpg",
        companyLogo: "/customers/innovatenow.svg",
      },
      {
        content: "The analytics dashboard gives us insights we never had before. We can optimize our campaigns in real-time.",
        author: "Emily Watson",
        role: "Marketing Director", 
        company: "MarketLeader",
        image: "/testimonials/emily-watson.jpg",
        companyLogo: "/customers/marketleader.svg",
      },
    ],
    showcase: [
      {
        content: "Elemente helped us scale from 10 to 100 deals per month. The ROI was immediate and substantial.",
        author: "Tom Anderson",
        role: "CEO",
        company: "ScaleUp", 
        image: "/testimonials/tom-anderson.jpg",
        companyLogo: "/customers/scaleup.svg",
        metrics: {
          before: "10 deals/month",
          after: "100 deals/month", 
          improvement: "10x increase",
        },
      },
      {
        content: "The AI-powered personalization increased our response rates from 2% to 8%. That's a game-changing improvement.",
        author: "Jennifer Lee",
        role: "Sales Operations",
        company: "DataDriven",
        image: "/testimonials/jennifer-lee.jpg", 
        companyLogo: "/customers/datadriven.svg",
        metrics: {
          before: "2% response rate",
          after: "8% response rate",
          improvement: "4x improvement",
        },
      },
    ],
  },

  // FAQ Categories
  faqs: {
    pricing: [
      {
        question: "Can I change plans anytime?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
      },
      {
        question: "What happens to my data if I cancel?",
        answer: "Your data is available for 30 days after cancellation for export. After that, it's permanently deleted for security.",
      },
      {
        question: "Do you offer discounts for annual billing?", 
        answer: "Yes, save 20% with annual billing on all plans. The discount is applied automatically at checkout.",
      },
      {
        question: "Is there a free trial?",
        answer: "Yes, all plans come with a 14-day free trial. No credit card required to start.",
      },
    ],
    support: [
      {
        question: "How quickly can I get started?",
        answer: "Most teams are up and running within 24 hours. Our onboarding team will help you set up your first campaign.",
      },
      {
        question: "Do you offer training?",
        answer: "Yes, we provide comprehensive onboarding, live training sessions, and a knowledge base with tutorials.",
      },
      {
        question: "What kind of support do you provide?",
        answer: "We offer email, chat, and phone support. Enterprise customers get a dedicated success manager.",
      },
      {
        question: "Do you integrate with our existing CRM?",
        answer: "Yes, we integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, and many others.",
      },
    ],
    general: [
      {
        question: "Is my data secure?",
        answer: "Yes, we use enterprise-grade security with SOC 2 Type II compliance and encrypt all data in transit and at rest.",
      },
      {
        question: "Can I import my existing contacts?",
        answer: "Yes, you can easily import contacts from CSV files, your CRM, or other sales tools.",
      },
      {
        question: "How does the AI personalization work?",
        answer: "Our AI analyzes prospect data and company information to generate personalized messages that feel human-written.",
      },
    ],
  },

  // SEO Configuration
  seo: {
    defaultTitle: "Elemente - AI-Driven Outreach That Converts",
    defaultDescription: "Transform your sales outreach with AI-powered automation. Send personalized messages across email, LinkedIn, and phone that actually convert prospects into customers.",
    defaultKeywords: ["AI outreach", "sales automation", "email marketing", "LinkedIn outreach", "sales prospecting", "lead generation"],
    defaultImage: "/og-image.jpg",
    twitterHandle: "@elemente",
  },

  // Feature Definitions (for reuse across pages)
  features: {
    core: [
      {
        id: "ai-personalization",
        title: "AI-Powered Personalization", 
        description: "Generate personalized messages that feel human-written using advanced AI models trained on high-converting sales copy.",
        icon: "brain",
        image: "/features/ai-personalization.jpg",
      },
      {
        id: "multi-channel",
        title: "Multi-Channel Outreach",
        description: "Reach prospects via email, LinkedIn, phone, and SMS from one unified platform with coordinated messaging.",
        icon: "channels",
        image: "/features/multi-channel.jpg",
      },
      {
        id: "smart-automation", 
        title: "Smart Automation",
        description: "Set up sequences that adapt based on prospect behavior and engagement with intelligent follow-up timing.",
        icon: "automation",
        image: "/features/smart-automation.jpg",
      },
      {
        id: "analytics",
        title: "Performance Analytics",
        description: "Track opens, clicks, replies, and conversions with detailed reporting and A/B testing capabilities.",
        icon: "analytics", 
        image: "/features/analytics.jpg",
      },
    ],
    detailed: [
      {
        id: "ai-message-generation",
        title: "AI Message Generation",
        description: "Create personalized outreach messages using advanced AI models trained on high-converting sales copy. Our AI analyzes prospect data, company information, and industry trends to craft messages that resonate.",
        benefits: ["Higher response rates", "Consistent messaging", "Saves hours of writing time"],
        image: "/features/ai-generation.jpg",
      },
      {
        id: "multi-channel-campaigns",
        title: "Multi-Channel Campaigns", 
        description: "Coordinate outreach across email, LinkedIn, phone, and SMS with unified reporting. Create sequences that intelligently move prospects between channels based on engagement.",
        benefits: ["Reach prospects everywhere", "Coordinated messaging", "Unified analytics"],
        image: "/features/multi-channel-campaigns.jpg",
      },
      {
        id: "behavioral-automation",
        title: "Behavioral Automation",
        description: "Set up behavioral triggers and dynamic sequences that adapt to prospect engagement. Automatically follow up, pause campaigns, or escalate to sales reps based on prospect actions.",
        benefits: ["Intelligent follow-ups", "Reduced manual work", "Higher conversion rates"],
        image: "/features/behavioral-automation.jpg",
      },
      {
        id: "advanced-analytics",
        title: "Advanced Analytics",
        description: "Track performance with detailed metrics, A/B testing, and ROI analysis. Get insights into what's working and optimize your campaigns for maximum effectiveness.", 
        benefits: ["Data-driven decisions", "Campaign optimization", "ROI tracking"],
        image: "/features/advanced-analytics.jpg",
      },
    ],
  },
}

// Type definitions for better TypeScript support
export type SiteConfig = typeof siteConfig
export type PricingPlan = typeof siteConfig.pricing.plans[0]
export type Testimonial = typeof siteConfig.testimonials.homepage[0]
export type TeamMember = typeof siteConfig.team[0]
export type FAQ = typeof siteConfig.faqs.pricing[0]
export type Feature = typeof siteConfig.features.core[0] 