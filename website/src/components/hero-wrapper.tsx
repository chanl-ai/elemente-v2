'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/tailark-core/motion-primitives/text-effect'
import { AnimatedGroup } from '@/tailark-core/motion-primitives/animated-group'
import { cn } from '@/lib/utils'

// Header Configuration
const menuItems = [
    { name: 'Platform', href: '/platform' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Showcase', href: '/showcase' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

// Hero Header Component
const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
                                    E
                                </div>
                                <span className="font-bold text-lg">Elemente</span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="/login">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="/pricing">
                                        <span>Start Free Trial</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="/pricing">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

// Hero Content Types
export interface HeroContent {
    variant: 'home' | 'platform' | 'pricing' | 'about' | 'contact' | 'showcase'
    badge?: {
        text: string
        href?: string
    }
    title: string
    subtitle: string
    primaryCTA: {
        text: string
        href: string
    }
    secondaryCTA?: {
        text: string
        href: string
    }
    image?: {
        src: string
        alt: string
    }
    features?: string[]
}

// Animation variants
const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

// Hero Variants
const HeroVariantOne = ({ content }: { content: HeroContent }) => (
    <main className="overflow-hidden">
        <div
            aria-hidden
            className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
            <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
            <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
            <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
            <div className="relative pt-24 md:pt-36">
                <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                        {content.badge && (
                            <AnimatedGroup variants={transitionVariants}>
                                <Link
                                    href={content.badge.href || '#'}
                                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                    <span className="text-foreground text-sm">{content.badge.text}</span>
                                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
                                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedGroup>
                        )}

                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                            {content.title}
                        </TextEffect>
                        <TextEffect
                            per="line"
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.5}
                            as="p"
                            className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                            {content.subtitle}
                        </TextEffect>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="mt-12 flex items-center justify-center gap-4">
                            <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-xl px-5 text-base">
                                    <Link href={content.primaryCTA.href}>
                                        <span className="text-nowrap">{content.primaryCTA.text}</span>
                                    </Link>
                                </Button>
                            </div>

                            {content.secondaryCTA && (
                                <Button
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-10.5 rounded-xl px-5">
                                    <Link href={content.secondaryCTA.href}>
                                        <span className="text-nowrap">{content.secondaryCTA.text}</span>
                                    </Link>
                                </Button>
                            )}
                        </AnimatedGroup>
                    </div>
                </div>

                {content.image && (
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}>
                        <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                            <div
                                aria-hidden
                                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                            />
                            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <Image
                                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                    src={content.image.src}
                                    alt={content.image.alt}
                                    width="2700"
                                    height="1440"
                                />
                                <Image
                                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                    src={content.image.src.replace('.png', '-light.png')}
                                    alt={content.image.alt}
                                    width="2700"
                                    height="1440"
                                />
                            </div>
                        </div>
                    </AnimatedGroup>
                )}
            </div>
        </section>
    </main>
)

const HeroVariantTwo = ({ content }: { content: HeroContent }) => (
    <main className="overflow-hidden">
        <section>
            <div className="relative pt-24">
                <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                <div className="mx-auto max-w-5xl px-6">
                    <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16">
                            {content.title}
                        </TextEffect>
                        <TextEffect
                            per="line"
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.5}
                            as="p"
                            className="mt-8 max-w-2xl text-pretty text-lg">
                            {content.subtitle}
                        </TextEffect>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="mt-12 flex items-center gap-2">
                            <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-xl px-5 text-base">
                                    <Link href={content.primaryCTA.href}>
                                        <span className="text-nowrap">{content.primaryCTA.text}</span>
                                    </Link>
                                </Button>
                            </div>

                            {content.secondaryCTA && (
                                <Button
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-10.5 rounded-xl px-5">
                                    <Link href={content.secondaryCTA.href}>
                                        <span className="text-nowrap">{content.secondaryCTA.text}</span>
                                    </Link>
                                </Button>
                            )}
                        </AnimatedGroup>
                    </div>
                </div>

                {content.image && (
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}>
                        <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                            <div
                                aria-hidden
                                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                            />
                            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <Image
                                    className="bg-background aspect-15/8 relative rounded-2xl"
                                    src={content.image.src}
                                    alt={content.image.alt}
                                    width="2700"
                                    height="1440"
                                />
                            </div>
                        </div>
                    </AnimatedGroup>
                )}
            </div>
        </section>
    </main>
)

const HeroVariantThree = ({ content }: { content: HeroContent }) => (
    <main className="overflow-hidden">
        <section>
            <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h1"
                        className="text-balance text-5xl font-medium md:text-6xl">
                        {content.title}
                    </TextEffect>
                    <TextEffect
                        per="line"
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.5}
                        as="p"
                        className="mx-auto mt-6 max-w-2xl text-pretty text-lg">
                        {content.subtitle}
                    </TextEffect>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="mt-12 flex items-center justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href={content.primaryCTA.href}>
                                <span className="text-nowrap">{content.primaryCTA.text}</span>
                            </Link>
                        </Button>

                        {content.secondaryCTA && (
                            <Button
                                asChild
                                size="lg"
                                variant="outline">
                                <Link href={content.secondaryCTA.href}>
                                    <span className="text-nowrap">{content.secondaryCTA.text}</span>
                                </Link>
                            </Button>
                        )}
                    </AnimatedGroup>
                </div>
            </div>
        </section>
    </main>
)

// Main Hero Wrapper Component
export interface HeroWrapperProps {
    content: HeroContent
    variant?: 'default' | 'simple' | 'minimal'
}

export const HeroWrapper = ({ content, variant = 'default' }: HeroWrapperProps) => {
    const renderHeroVariant = () => {
        switch (variant) {
            case 'simple':
                return <HeroVariantTwo content={content} />
            case 'minimal':
                return <HeroVariantThree content={content} />
            default:
                return <HeroVariantOne content={content} />
        }
    }

    return (
        <>
            <HeroHeader />
            {renderHeroVariant()}
        </>
    )
}

export default HeroWrapper 