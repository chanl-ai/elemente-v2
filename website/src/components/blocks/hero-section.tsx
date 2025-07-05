import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <>
            <div
                aria-hidden
                className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block">
                <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>

            <section className="overflow-hidden bg-white dark:bg-transparent">
                <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
                    <div className="relative z-10 mx-auto max-w-3xl text-center">
                        <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                            AI-Powered Outreach That Actually Converts
                        </h1>
                        <p className="mx-auto my-8 max-w-2xl text-xl">
                            Launch voice calls, WhatsApp messages, and emails in one sequenced campaign. 
                            Book meetings automatically or hand prospects to human reps with full context.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg">
                                <Link href="/signup">
                                    <span>Start Free Trial</span>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline">
                                <Link href="/demo">
                                    <span>Watch Demo</span>
                                </Link>
                            </Button>
                        </div>
                        
                        <div className="mt-8 text-sm text-muted-foreground">
                            <p>Join 1,000+ sales teams already using Elemente Outreach</p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto -mt-16 max-w-7xl">
                    <div className="perspective-distant -mr-16 pl-16 lg:-mr-56 lg:pl-56">
                        <div className="[transform:rotateX(20deg);]">
                            <div className="lg:h-176 relative skew-x-[.36rad]">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-b from-background to-background z-1 absolute -inset-16 via-transparent sm:-inset-32"
                                />
                                <div
                                    aria-hidden
                                    className="bg-linear-to-r from-background to-background z-1 absolute -inset-16 bg-white/50 via-transparent sm:-inset-32 dark:bg-transparent"
                                />

                                <div
                                    aria-hidden
                                    className="absolute -inset-16 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [--color-border:var(--color-zinc-400)] sm:-inset-32 dark:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]"
                                />
                                <div
                                    aria-hidden
                                    className="from-background z-11 absolute inset-0 bg-gradient-to-l"
                                />
                                <div
                                    aria-hidden
                                    className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                                />

                                <Image
                                    className="rounded-(--radius) z-1 relative border dark:hidden"
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                                    alt="Elemente Outreach Dashboard"
                                    width={1200}
                                    height={800}
                                />
                                <Image
                                    className="rounded-(--radius) z-1 relative hidden border dark:block"
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                                    alt="Elemente Outreach Dashboard"
                                    width={1200}
                                    height={800}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 