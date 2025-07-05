import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
    return (
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
                            <Link
                                href="/platform"
                                className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                <span className="text-foreground text-sm">Introducing AI-Powered Outreach</span>
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

                            <h1 className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold">
                                AI-Driven Outreach That Converts
                            </h1>
                            <p className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                Combine voice calls, WhatsApp messages, and emails in intelligent, sequenced campaigns that adapt to your prospects&apos; behavior and maximize conversions.
                            </p>

                            <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-xl px-5 text-base">
                                        <Link href="/signup">
                                            <span className="text-nowrap">Start Free Trial</span>
                                        </Link>
                                    </Button>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-10.5 rounded-xl px-5">
                                    <Link href="/demo">
                                        <span className="text-nowrap">Request a Demo</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                        <div
                            aria-hidden
                            className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                        />
                        <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                            <div className="bg-background aspect-15/8 relative rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🤖</div>
                                    <h3 className="text-xl font-semibold mb-2">Elemente Dashboard</h3>
                                    <p className="text-muted-foreground">Campaign management, analytics, and AI insights</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-background pb-16 pt-16 md:pb-32">
                <div className="group relative m-auto max-w-5xl px-6">
                    <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                        <Link
                            href="/platform"
                            className="block text-sm duration-150 hover:opacity-75">
                            <span>Meet Our Customers</span>
                            <ChevronRight className="ml-1 inline-block size-3" />
                        </Link>
                    </div>
                    <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                        <div className="flex">
                            <div className="mx-auto h-5 w-fit text-muted-foreground font-semibold">Acme Corp</div>
                        </div>
                        <div className="flex">
                            <div className="mx-auto h-4 w-fit text-muted-foreground font-semibold">TechStart</div>
                        </div>
                        <div className="flex">
                            <div className="mx-auto h-4 w-fit text-muted-foreground font-semibold">GlobalSales</div>
                        </div>
                        <div className="flex">
                            <div className="mx-auto h-5 w-fit text-muted-foreground font-semibold">ScaleUp</div>
                        </div>
                        <div className="flex">
                            <div className="mx-auto h-5 w-fit text-muted-foreground font-semibold">SalesForce</div>
                        </div>
                        <div className="flex">
                            <div className="mx-auto h-4 w-fit text-muted-foreground font-semibold">OutreachPro</div>
                        </div>
                        <div className="flex">
                            <div className="mx-auto h-7 w-fit text-muted-foreground font-semibold">ConvertLab</div>
                        </div>
                        <div className="flex">
                            <div className="mx-auto h-6 w-fit text-muted-foreground font-semibold">LeadGen</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
} 