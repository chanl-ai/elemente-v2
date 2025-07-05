# 🎯 **Elemente Content Map**

## **📋 Overview**
Comprehensive content strategy for Elemente AI-driven outreach platform, mapping all pages, sections, content, and Tailark blocks to create a complete marketing website.

---

## **🏠 Homepage** 
**URL**: `/`
**Goal**: Convert visitors to trial/demo requests
**Target**: Sales teams, marketing professionals, small businesses

### **Sections (6 total)**

#### **1. Hero Section**
- **Block**: `HeroSectionOne`
- **Props**: 
  - `title`: "Transform Your Outreach with AI-Powered Automation"
  - `subtitle`: "Send personalized messages that convert. Automate follow-ups across email, LinkedIn, and phone calls. Turn cold prospects into warm leads with Elemente's intelligent outreach platform."
  - `ctaText`: "Start Free Trial"
  - `ctaUrl`: "/pricing"
  - `secondaryCtaText`: "Watch Demo"
  - `secondaryCtaUrl`: "/demo"
- **Image**: Hero dashboard mockup showing email sequences, analytics dashboard
- **Source**: Props from page component

#### **2. Customer Logos**
- **Block**: `LogoCloudOne`
- **Props**:
  - `title`: "Trusted by 500+ Sales Teams Worldwide"
  - `logos`: Array of customer logos
- **Images**: Customer logos (TechCorp, SalesForce, StartupXYZ, etc.)
- **Source**: Site config (global)

#### **3. Key Features**
- **Block**: `FeaturesFour`
- **Props**:
  - `title`: "Everything You Need to Scale Your Outreach"
  - `subtitle`: "From AI-powered personalization to multi-channel campaigns, Elemente has the tools modern sales teams need to succeed."
  - `features`: Array of 4 key features
- **Content**:
  - **AI Personalization**: "Generate personalized messages that feel human-written using advanced AI models"
  - **Multi-Channel Outreach**: "Reach prospects via email, LinkedIn, phone, and SMS from one unified platform"
  - **Smart Automation**: "Set up sequences that adapt based on prospect behavior and engagement"
  - **Performance Analytics**: "Track opens, clicks, replies, and conversions with detailed reporting"
- **Images**: Feature icons, dashboard screenshots
- **Source**: Props from page component

#### **4. Performance Stats**
- **Block**: `StatsTwo`
- **Props**:
  - `title`: "Results That Speak for Themselves"
  - `stats`: Array of performance metrics
- **Content**:
  - **"3.5x"**: "Higher response rates than traditional outreach"
  - **"67%"**: "Increase in qualified leads generated"
  - **"250+"**: "Hours saved per month per sales rep"
  - **"94%"**: "Customer satisfaction rating"
- **Images**: Chart/graph visualization
- **Source**: Site config (global - these are key company metrics)

#### **5. Customer Testimonials**
- **Block**: `TestimonialsThree`
- **Props**:
  - `title`: "Loved by Sales Teams Everywhere"
  - `testimonials`: Array of customer testimonials
- **Content**:
  - **Sarah Johnson, Sales Director at TechCorp**: "Elemente transformed our outreach. We're booking 40% more demos with half the effort."
  - **Mike Chen, Founder of StartupXYZ**: "The AI personalization is incredible. Our email open rates jumped from 15% to 58%."
  - **Lisa Rodriguez, VP Sales at GrowthCo**: "Best investment we made. The automation saves us 20 hours per week."
- **Images**: Customer headshots, company logos
- **Source**: Props from page component

#### **6. Pricing Preview**
- **Block**: `PricingOne`
- **Props**:
  - `title`: "Simple, Transparent Pricing"
  - `plans`: Array of pricing tiers
- **Content**:
  - **Starter**: "$49/month - Up to 1,000 contacts"
  - **Professional**: "$149/month - Up to 5,000 contacts"
  - **Enterprise**: "Custom pricing - Unlimited contacts"
- **Images**: Pricing tier icons
- **Source**: Site config (global - pricing is consistent across site)

---

## **🛠️ Platform Page**
**URL**: `/platform`
**Goal**: Detailed feature explanation and product demo
**Target**: Technical decision makers, power users

### **Sections (5 total)**

#### **1. Platform Hero**
- **Block**: `HeroSectionTwo`
- **Props**:
  - `title`: "The Complete AI Outreach Platform"
  - `subtitle`: "Everything you need to create, automate, and optimize your outreach campaigns in one powerful platform."
  - `ctaText`: "Explore Features"
  - `ctaUrl`: "#features"
- **Image**: Platform overview screenshot
- **Source**: Props from page component

#### **2. Interactive Features**
- **Block**: `FeaturesTwelve`
- **Props**:
  - `title`: "Powerful Features for Modern Sales Teams"
  - `features`: Interactive accordion with detailed features
- **Content**:
  - **AI Message Generation**: "Create personalized outreach messages using advanced AI models trained on high-converting sales copy"
  - **Multi-Channel Campaigns**: "Coordinate outreach across email, LinkedIn, phone, and SMS with unified reporting"
  - **Smart Automation**: "Set up behavioral triggers and dynamic sequences that adapt to prospect engagement"
  - **Advanced Analytics**: "Track performance with detailed metrics, A/B testing, and ROI analysis"
- **Images**: Feature screenshots, workflow diagrams
- **Source**: Props from page component

#### **3. Integrations**
- **Block**: `IntegrationsSix`
- **Props**:
  - `title`: "Seamless Integration with Your Existing Stack"
  - `integrations`: Array of supported platforms
- **Content**:
  - **CRM**: Salesforce, HubSpot, Pipedrive
  - **Email**: Gmail, Outlook, Exchange
  - **Social**: LinkedIn Sales Navigator, Twitter
  - **Calendar**: Calendly, Google Calendar, Outlook
- **Images**: Integration logos, connection diagrams
- **Source**: Site config (global - integrations are consistent)

#### **4. Use Cases**
- **Block**: `ContentThree`
- **Props**:
  - `title`: "Built for Every Sales Scenario"
  - `useCases`: Array of different use cases
- **Content**:
  - **Cold Outreach**: "Generate personalized cold emails that get responses"
  - **Lead Nurturing**: "Automated sequences to move prospects through your pipeline"
  - **Event Follow-up**: "Capitalize on trade shows and webinars with timely follow-ups"
- **Images**: Use case illustrations, workflow diagrams
- **Source**: Props from page component

#### **5. Feature Testimonials**
- **Block**: `TestimonialsFive`
- **Props**:
  - `title`: "What Our Users Love Most"
  - `testimonials`: Feature-specific testimonials
- **Content**: Feature-specific customer feedback
- **Images**: Customer photos, feature screenshots
- **Source**: Props from page component

---

## **💰 Pricing Page**
**URL**: `/pricing`
**Goal**: Convert visitors to paid plans
**Target**: Budget decision makers, sales managers

### **Sections (5 total)**

#### **1. Pricing Hero**
- **Block**: `HeroSectionThree`
- **Props**:
  - `title`: "Plans That Scale with Your Growth"
  - `subtitle`: "Start free, upgrade as you grow. No hidden fees, no long-term contracts."
  - `ctaText`: "Start Free Trial"
- **Image**: Pricing overview graphic
- **Source**: Props from page component

#### **2. Detailed Pricing Plans**
- **Block**: `PricingFour`
- **Props**:
  - `title`: "Choose Your Plan"
  - `plans`: Detailed pricing tiers with features
- **Content**:
  - **Starter ($49/month)**:
    - 1,000 contacts
    - Email outreach
    - Basic automation
    - Email support
  - **Professional ($149/month)**:
    - 5,000 contacts
    - Multi-channel outreach
    - Advanced automation
    - Phone support
    - A/B testing
  - **Enterprise (Custom)**:
    - Unlimited contacts
    - Custom integrations
    - Dedicated success manager
    - Custom training
- **Images**: Plan comparison chart
- **Source**: Site config (global - pricing is consistent)

#### **3. Pricing FAQs**
- **Block**: `FaqsTwo`
- **Props**:
  - `title`: "Frequently Asked Questions"
  - `faqs`: Array of pricing-related questions
- **Content**:
  - **"Can I change plans anytime?"**: "Yes, upgrade or downgrade at any time..."
  - **"What happens to my data if I cancel?"**: "Your data is available for 30 days after cancellation..."
  - **"Do you offer discounts for annual billing?"**: "Yes, save 20% with annual billing..."
- **Images**: FAQ icons
- **Source**: Props from page component

#### **4. Feature Comparison**
- **Block**: `FeaturesEight`
- **Props**:
  - `title`: "Compare Plans Feature by Feature"
  - `features`: Detailed feature comparison matrix
- **Content**: Feature availability by plan
- **Images**: Feature comparison table
- **Source**: Props from page component

#### **5. Get Started CTA**
- **Block**: `CallToActionOne`
- **Props**:
  - `title`: "Ready to Transform Your Outreach?"
  - `subtitle`: "Join thousands of sales teams using Elemente to close more deals."
  - `ctaText`: "Start Free Trial"
  - `ctaUrl`: "/signup"
- **Image**: Success illustration
- **Source**: Props from page component

---

## **👥 About Page**
**URL**: `/about`
**Goal**: Build trust and credibility
**Target**: Enterprise buyers, skeptical prospects

### **Sections (4 total)**

#### **1. Company Story**
- **Block**: `HeroSectionFive`
- **Props**:
  - `title`: "Building the Future of Sales Outreach"
  - `subtitle`: "Founded in 2022 by sales professionals who were tired of manual, ineffective outreach. We're on a mission to help every sales team achieve their potential."
- **Image**: Company founding story illustration
- **Source**: Props from page component

#### **2. Team Section**
- **Block**: `TeamOne`
- **Props**:
  - `title`: "Meet the Team"
  - `team`: Array of team members
- **Content**:
  - **John Smith, CEO**: "Former VP of Sales at TechCorp, 15 years in B2B sales"
  - **Sarah Johnson, CTO**: "Ex-Google engineer, AI/ML expertise"
  - **Mike Chen, Head of Product**: "Former product manager at Salesforce"
- **Images**: Team member photos
- **Source**: Props from page component

#### **3. Company Stats**
- **Block**: `StatsFour`
- **Props**:
  - `title`: "Our Impact"
  - `stats`: Company milestone metrics
- **Content**:
  - **"500+"**: "Happy customers worldwide"
  - **"10M+"**: "Messages sent through our platform"
  - **"$50M+"**: "Revenue generated for our clients"
  - **"99.9%"**: "Platform uptime"
- **Images**: Achievement icons
- **Source**: Site config (global - company metrics)

#### **4. Mission & Values**
- **Block**: `ContentFive`
- **Props**:
  - `title`: "Our Mission & Values"
  - `content`: Company mission statement and values
- **Content**:
  - **Mission**: "To democratize effective sales outreach through AI-powered automation"
  - **Values**: Customer success, innovation, transparency, teamwork
- **Images**: Mission/values illustrations
- **Source**: Props from page component

---

## **📞 Contact Page**
**URL**: `/contact`
**Goal**: Generate leads and provide support
**Target**: Prospects, existing customers

### **Sections (3 total)**

#### **1. Contact Form**
- **Block**: `ContactOne`
- **Props**:
  - `title`: "Get in Touch"
  - `subtitle`: "Ready to transform your outreach? Let's talk about how Elemente can help your team."
- **Form Fields**: Name, email, company, message, inquiry type
- **Source**: Props from page component

#### **2. Contact Information**
- **Block**: `ContactTwo`
- **Props**:
  - `title`: "Other Ways to Reach Us"
  - `contact`: Contact details
- **Content**:
  - **Email**: support@elemente.com
  - **Phone**: +1 (555) 123-4567
  - **Address**: 123 AI Street, San Francisco, CA 94105
- **Images**: Contact icons, office photo
- **Source**: Site config (global - contact info is consistent)

#### **3. Support FAQs**
- **Block**: `FaqsFour`
- **Props**:
  - `title`: "Common Questions"
  - `faqs`: Support-related questions
- **Content**:
  - **"How quickly can I get started?"**: "Most teams are up and running within 24 hours..."
  - **"Do you offer training?"**: "Yes, we provide comprehensive onboarding..."
  - **"What kind of support do you provide?"**: "We offer email, chat, and phone support..."
- **Images**: Support icons
- **Source**: Props from page component

---

## **🎯 Showcase Page**
**URL**: `/showcase`
**Goal**: Demonstrate success stories and social proof
**Target**: Prospects researching effectiveness

### **Sections (4 total)**

#### **1. Success Stories Hero**
- **Block**: `HeroSectionSix`
- **Props**:
  - `title`: "Success Stories from Real Customers"
  - `subtitle`: "See how sales teams across industries are using Elemente to drive results."
- **Image**: Success story collage
- **Source**: Props from page component

#### **2. Detailed Case Studies**
- **Block**: `ContentSix`
- **Props**:
  - `title`: "Case Studies"
  - `caseStudies`: Array of detailed customer stories
- **Content**:
  - **TechCorp**: "Increased demo bookings by 300% with AI-powered personalization"
  - **StartupXYZ**: "Generated $2M in pipeline with automated LinkedIn outreach"
  - **GrowthCo**: "Reduced sales cycle by 45% with smart follow-up sequences"
- **Images**: Customer logos, before/after charts
- **Source**: Props from page component

#### **3. Customer Testimonials**
- **Block**: `TestimonialsSix`
- **Props**:
  - `title`: "In Their Own Words"
  - `testimonials`: Extended customer testimonials
- **Content**: Detailed customer feedback with results
- **Images**: Customer videos, photos
- **Source**: Props from page component

#### **4. Results Metrics**
- **Block**: `StatsThree`
- **Props**:
  - `title`: "Proven Results"
  - `stats`: Customer success metrics
- **Content**:
  - **"Average 3.5x"**: "Increase in response rates"
  - **"250+ hours"**: "Saved per month per sales rep"
  - **"67% increase"**: "In qualified leads generated"
- **Images**: Results charts
- **Source**: Site config (global - success metrics)

---

## **🔧 Component Configuration Strategy**

### **Global Props (Site Config)**
Components that should get data from site configuration:
- `LogoCloudOne` - Customer logos
- `StatsTwo/Three/Four` - Company/success metrics
- `PricingOne/Four` - Pricing information
- `ContactTwo` - Contact information
- `IntegrationsSix` - Supported integrations

### **Page-Specific Props**
Components that should get data from page-level props:
- All `HeroSection` variants - Page-specific hero content
- `Features` variants - Feature explanations
- `Testimonials` variants - Customer feedback
- `Content` variants - Page-specific content
- `FAQ` variants - Page-specific questions
- `Team` variants - Team information
- `CallToAction` variants - Page-specific CTAs

### **Reusable Content Blocks**
Create shared content that can be reused across pages:
- Customer testimonials (categorized by feature/use case)
- Feature descriptions (detailed vs. summary versions)
- Company stats (different metrics for different contexts)
- FAQ items (organized by category)

---

## **📸 Image Requirements**

### **High Priority Images**
1. **Hero Dashboard Mockup** - Homepage hero section
2. **Customer Logos** - 8-10 recognizable B2B company logos
3. **Platform Screenshots** - Feature demonstrations
4. **Team Photos** - Founders and key team members
5. **Success Story Graphics** - Before/after charts, ROI metrics

### **Medium Priority Images**
1. **Feature Icons** - Custom icons for each major feature
2. **Integration Logos** - CRM, email, social platform logos
3. **Use Case Illustrations** - Workflow diagrams
4. **Office Photos** - Company culture images
5. **Customer Headshots** - Testimonial photos

### **Placeholder Strategy**
For development, use:
- **Unsplash** for hero images and backgrounds
- **Heroicons** for feature icons
- **UI Avatars** for team/customer photos
- **Chart.js** for metrics visualizations
- **Branded mockups** from Figma community

---

## **🎯 Next Steps**

1. **Create site configuration file** with global content
2. **Set up reusable content system** for blocks
3. **Implement page-specific prop passing** to components
4. **Source/create placeholder images** for all sections
5. **Test responsive design** across all pages
6. **Optimize for performance** and SEO

---

*Content map created: 2024-01-XX*
*Last updated: 2024-01-XX*
*Status: Ready for implementation* 