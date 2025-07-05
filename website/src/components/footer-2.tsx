import { Logo } from '@/components/logo'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const links = [
    {
        group: 'Product',
        items: [
            {
                title: 'Features',
                href: '/platform',
            },
            {
                title: 'Solution',
                href: '/platform',
            },
            {
                title: 'Customers',
                href: '/platform',
            },
            {
                title: 'Pricing',
                href: '/pricing',
            },
            {
                title: 'Help',
                href: '/support',
            },
            {
                title: 'About',
                href: '/about',
            },
        ],
    },
    {
        group: 'Solution',
        items: [
            {
                title: 'Sales Teams',
                href: '/platform',
            },
            {
                title: 'Freelancers',
                href: '/platform',
            },
            {
                title: 'Agencies',
                href: '/platform',
            },
            {
                title: 'Startups',
                href: '/platform',
            },
            {
                title: 'Enterprise',
                href: '/platform',
            },
            {
                title: 'AI Voice',
                href: '/platform',
            },
            {
                title: 'WhatsApp',
                href: '/platform',
            },
        ],
    },
    {
        group: 'Company',
        items: [
            {
                title: 'About',
                href: '/about',
            },
            {
                title: 'Careers',
                href: '/careers',
            },
            {
                title: 'Blog',
                href: '/blog',
            },
            {
                title: 'Press',
                href: '/press',
            },
            {
                title: 'Contact',
                href: '/contact',
            },
            {
                title: 'Help',
                href: '/support',
            },
        ],
    },
    {
        group: 'Legal',
        items: [
            {
                title: 'Terms',
                href: '/terms',
            },
            {
                title: 'Privacy',
                href: '/privacy',
            },
            {
                title: 'Cookies',
                href: '/cookies',
            },
            {
                title: 'Security',
                href: '/security',
            },
        ],
    },
]

export default function Footer2() {
    return (
        <footer className="border-t border-border/20 bg-white pt-20 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                {/* CTA Section */}
                <div className="mb-16 text-center">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                            Ready to transform your outreach?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Join thousands of sales teams who&apos;ve increased their conversion rates by 300% with AI-powered personalization.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                                <Link href="/pricing">
                                    Start Free Trial
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/platform">
                                    See Platform Demo
                                </Link>
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                            No credit card required • 14-day free trial • Cancel anytime
                        </p>
                    </div>
                </div>

                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link
                            href="/"
                            aria-label="go home"
                            className="block size-fit">
                            <Logo />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4 text-sm">
                                <span className="block font-medium">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-muted-foreground hover:text-primary block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} Elemente, All rights reserved</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        <Link
                            href="https://twitter.com/elemente"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X/Twitter"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://linkedin.com/company/elemente"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://facebook.com/elemente"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://instagram.com/elemente"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://youtube.com/@elemente"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
} 