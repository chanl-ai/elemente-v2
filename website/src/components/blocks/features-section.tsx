import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Zap, Bot, Phone, Settings, Shield, BarChart3 } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Built to cover your outreach needs</h2>
                    <p className="mt-4">Complete omni-channel solution for voice, WhatsApp, and email campaigns.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Omni-Channel Sequencer</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">One flow builder for voice, WhatsApp, and email campaigns. Design your perfect outreach sequence with drag-and-drop simplicity.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Bot
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">AI Copy Generator</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Single prompt produces voice scripts, WhatsApp templates, and email content. Let AI craft your perfect message.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Phone
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Autonomous Voice Calls</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">AI voice agent handles calls automatically. When confidence is low, seamlessly transfers to human reps with full context.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Action Runner</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Books calendar slots, pushes CRM notes, and triggers webhooks. Automate your entire sales process from first contact to close.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Shield
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Compliance Guardrails</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Built-in DNC suppression, WhatsApp template approval, and unsubscribe links. Stay compliant effortlessly.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <BarChart3
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Unified Analytics</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Complete funnel view from dial attempts to meetings held. Track performance across all channels in one dashboard.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
) 