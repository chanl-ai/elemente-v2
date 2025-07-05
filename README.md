# Elemente v2 - AI-Driven Outreach Platform

> **Transform your sales outreach with AI-powered automation**  
> Complete NextJS marketing website with 79+ Tailark components, flexible HeroWrapper system, and conversion-focused design.

![Elemente v2](https://img.shields.io/badge/Version-2.0-blue)
![NextJS](https://img.shields.io/badge/NextJS-15.3.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Components](https://img.shields.io/badge/Components-79+-green)

## 🚀 Live Demo

**Website**: [https://elemente-v2.vercel.app](https://elemente-v2.vercel.app) *(coming soon)*  
**Repository**: [https://github.com/chanl-ai/elemente-v2](https://github.com/chanl-ai/elemente-v2)

## ✨ Features

### 🎯 **Complete Marketing Website**
- **6 Pages**: Home, Platform, Pricing, About, Contact, Showcase
- **HeroWrapper System**: Flexible hero sections with 3 variants (default, simple, minimal)
- **79+ Tailark Components**: Production-ready UI components
- **Conversion-Focused**: Strategic CTAs and footer conversions
- **Mobile-First**: Responsive design across all devices

### 🛠 **Technical Excellence**
- **NextJS 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with Shadcn UI
- **Motion/Framer** animations
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with lazy loading

### 🎨 **Content Management**
- **Props-Based System**: Easy content updates via TypeScript interfaces
- **Site Configuration**: Centralized content management
- **Brand Consistency**: Unified "Elemente" branding
- **No Double Headers**: Clean navigation architecture

## 🏗 Project Structure

```
elemente-v2/
├── website/                 # Marketing website (NextJS)
│   ├── src/
│   │   ├── app/            # NextJS app router pages
│   │   │   ├── ui/         # Shadcn base components
│   │   │   ├── blocks/     # 79 Tailark components
│   │   │   └── hero-wrapper.tsx  # Flexible hero system
│   │   ├── config/         # Site configuration
│   │   ├── lib/            # Utilities and content
│   │   └── tailark-core/   # Tailark component system
│   └── public/             # Static assets
├── admin/                  # Admin dashboard (NextJS)
├── scripts/                # Build and automation scripts
├── .cursorrules           # Development guidelines
└── package.json           # Monorepo configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/chanl-ai/elemente-v2.git
cd elemente-v2

# Install dependencies
npm install

# Start development server
npm run dev:website
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

### Development Commands

```bash
# Website development
npm run dev:website      # Start website dev server
npm run build:website    # Build website
npm run start:website    # Start website production

# Admin development  
npm run dev:admin        # Start admin dev server
npm run build:admin      # Build admin
npm run start:admin      # Start admin production

# Utilities
npm run kill            # Kill all dev servers
npm run type-check      # TypeScript type checking
```

## 🎨 HeroWrapper System

The `HeroWrapper` component provides a flexible, prop-based hero section system:

### Variants
- **`default`** - Full homepage style with animations and hero image
- **`simple`** - Clean layout for feature pages
- **`minimal`** - Text-focused for utility pages

### Usage Example

```typescript
import { HeroWrapper, HeroContent } from '@/components/hero-wrapper'

const heroContent: HeroContent = {
  variant: 'platform',
  title: 'AI-Powered Outreach Platform',
  subtitle: 'Discover the complete toolkit for modern sales teams...',
  primaryCTA: { text: 'Start Free Trial', href: '/pricing' },
  secondaryCTA: { text: 'View Features', href: '#features' },
  image: { src: '/dashboard.png', alt: 'Platform dashboard' }
}

export default function PlatformPage() {
  return <HeroWrapper content={heroContent} variant="simple" />
}
```

## 📄 Pages Overview

| Page | Purpose | Hero Variant | Key Sections |
|------|---------|--------------|--------------|
| **Home** | Main landing | `default` | Hero + Features + Stats + Testimonials + Pricing |
| **Platform** | Feature showcase | `simple` | Features + Integrations + Use Cases |
| **Pricing** | Plans & pricing | `minimal` | Plans + FAQs + Comparison |
| **About** | Company story | `simple` | Team + Stats + Mission |
| **Contact** | Contact forms | `minimal` | Form + Info + Support |
| **Showcase** | Success stories | `simple` | Case Studies + Testimonials |

## 🎯 Brand Guidelines

### Primary Message
**"Elemente - AI-Driven Outreach That Converts"**

### Target Audiences
- Sales teams and professionals
- Marketing teams and agencies  
- Small to medium businesses
- Enterprise sales organizations

### Value Propositions
- **AI Personalization**: Smart, personalized messaging
- **Multi-Channel**: Email, LinkedIn, phone integration
- **Automation**: Smart follow-ups and sequences
- **Analytics**: Performance tracking and insights

### Pricing Tiers
- **Starter**: $49/month - Small teams
- **Professional**: $149/month - Growing businesses  
- **Enterprise**: Custom pricing - Large organizations

## 🧩 Component Library

### Tailark Blocks (79 Components)
- **9 Hero Sections** - Various layouts and styles
- **12 Features** - Grid, card, and showcase layouts
- **6 Testimonials** - Customer feedback displays
- **5 Pricing** - Plans and comparison tables
- **8 Integrations** - Partner and tool showcases
- **7 Content** - Rich content sections
- **4 Stats** - Metrics and achievements
- **4 FAQs** - Question and answer sections
- **3 CTAs** - Call-to-action sections
- **2 Teams** - Team member showcases
- **2 Contact** - Forms and information
- **Plus**: Authentication, footers, logos, and more

### Usage

```typescript
import { 
  HeroSectionOne, 
  FeaturesTwo, 
  TestimonialsThree 
} from '@/components/blocks'

// All components include content props for customization
<FeaturesTwo 
  title="Platform Features"
  features={customFeatures}
  variant="grid"
/>
```

## 🎨 Customization

### Content Updates
Update page-specific content in each page file:

```typescript
// website/src/app/platform/page.tsx
const platformHeroContent: HeroContent = {
  title: "Your Custom Title",
  subtitle: "Your custom description...",
  // ... other props
}
```

### Global Configuration
Update site-wide settings in:

```typescript
// website/src/config/site.config.ts
export const siteConfig = {
  name: "Elemente",
  tagline: "AI-Driven Outreach That Converts",
  // ... global settings
}
```

### Styling
- Tailwind CSS classes for styling
- CSS variables for theming
- Dark mode support included
- Responsive design patterns

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy website
vercel --prod --cwd website

# Deploy admin  
vercel --prod --cwd admin
```

### Other Platforms
The project supports deployment to:
- Netlify
- AWS Amplify  
- Digital Ocean
- Any Node.js hosting

### Environment Variables
```bash
# website/.env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📚 Development Guidelines

Follow the guidelines in `.cursorrules` for:
- TypeScript best practices
- Component architecture patterns
- Styling conventions
- Performance optimization
- SEO implementation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [elemente-v2.vercel.app](https://elemente-v2.vercel.app)
- **Repository**: [github.com/chanl-ai/elemente-v2](https://github.com/chanl-ai/elemente-v2)
- **Tailark Components**: [tailark.com](https://tailark.com)
- **Shadcn UI**: [ui.shadcn.com](https://ui.shadcn.com)

## 📧 Support

For questions or support:
- Create an [issue](https://github.com/chanl-ai/elemente-v2/issues)
- Contact: [hello@chanl.ai](mailto:hello@chanl.ai)

---

<div align="center">
  <strong>Built with ❤️ by <a href="https://chanl.ai">Chanl AI</a></strong>
</div> 