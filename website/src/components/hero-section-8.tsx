'use client'
import React from 'react'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { ArrowRight, Menu, Rocket, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const menuItems = [
    { name: 'Features', href: '/platform' },
    { name: 'Solution', href: '/platform' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
]

export default function HeroSection8() {
    const [menuState, setMenuState] = React.useState(false)

    return (
        <>
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                <Link
                                    href="/"
                                    aria-label="home"
                                    className="flex items-center space-x-2">
                                    <Logo />
                                </Link>

                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>

                            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
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

                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm">
                                        <Link href="/login">
                                            <span>Login</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="sm">
                                        <Link href="/signup">
                                            <span>Sign Up</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="overflow-hidden">
                <section>
                    <div className="relative pt-24">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="max-w-3xl text-center sm:mx-auto lg:mr-auto lg:mt-0 lg:w-4/5">
                                <Link
                                    href="/platform"
                                    className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3">
                                    <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">New</span>
                                    <span className="text-sm">AI-Powered Outreach Platform</span>
                                    <span className="bg-(--color-border) block h-4 w-px"></span>
                                    <ArrowRight className="size-4" />
                                </Link>

                                <h1 className="mt-8 text-balance text-4xl font-semibold md:text-5xl xl:text-6xl xl:[line-height:1.125]">
                                    AI-Driven Outreach That Actually Converts
                                </h1>
                                <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
                                    Combine voice calls, WhatsApp messages, and emails in intelligent, sequenced campaigns that adapt to your prospects&apos; behavior and maximize conversions.
                                </p>
                                <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">
                                    Multi-channel AI outreach that adapts to your prospects for maximum conversion.
                                </p>

                                <div className="mt-8">
                                    <Button
                                        size="lg"
                                        asChild>
                                        <Link href="/signup">
                                            <Rocket className="relative size-4" />
                                            <span className="text-nowrap">Start Free Trial</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-16">
                            <div
                                aria-hidden
                                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                            />
                            <div className="relative mx-auto max-w-6xl overflow-hidden px-4">
                                <div className="z-2 border-border/25 relative rounded-2xl border bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 aspect-video flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🤖</div>
                                        <h3 className="text-2xl font-semibold mb-2">Elemente Dashboard</h3>
                                        <p className="text-muted-foreground">Campaign management, analytics, and AI insights</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background relative z-10 pb-16">
                    <div className="m-auto max-w-5xl px-6">
                        <h2 className="text-center text-lg font-medium">Trusted by growing sales teams.</h2>
                        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                            <div className="h-5 w-fit text-muted-foreground font-semibold">Acme Corp</div>
                            <div className="h-4 w-fit text-muted-foreground font-semibold">TechStart</div>
                            <div className="h-4 w-fit text-muted-foreground font-semibold">GlobalSales</div>
                            <div className="h-5 w-fit text-muted-foreground font-semibold">ScaleUp</div>
                            <div className="h-4 w-fit text-muted-foreground font-semibold">OutreachPro</div>
                            <div className="h-7 w-fit text-muted-foreground font-semibold">ConvertLab</div>
                            <div className="h-5 w-fit text-muted-foreground font-semibold">LeadGen</div>
                            <div className="h-6 w-fit text-muted-foreground font-semibold">SalesForce</div>
                            <div className="h-4 w-fit text-muted-foreground font-semibold">ProspectAI</div>
                            <div className="h-5 w-fit text-muted-foreground font-semibold">Revenue+</div>
                            <div className="h-5 w-fit text-muted-foreground font-semibold">GrowthLab</div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
} 