import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h1>
                    <p>Pay by contact volume, not by user seats. All plans include our core outreach engine with unlimited team members.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-4">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Starter</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">Free</span>
                            <CardDescription className="text-sm">1,000 contacts/month</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Voice OR WhatsApp OR Email', 'Basic campaign builder', 'Standard support', 'Basic analytics'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="/signup?plan=starter">Start Free</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative">
                        <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Popular</span>

                        <div className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-medium">Growth</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">$149 / mo</span>
                                <CardDescription className="text-sm">10,000 contacts/month</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {['Voice + WhatsApp + Email', 'Advanced campaign builder', 'AI copy generator', 'Priority support', 'Advanced analytics', 'Basic integrations'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    asChild
                                    className="w-full">
                                    <Link href="/signup?plan=growth">Start Growth</Link>
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>

                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Pro</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">$499 / mo</span>
                            <CardDescription className="text-sm">50,000 contacts/month</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Everything in Growth', 'CRM integrations', 'Advanced AI features', 'Custom integrations', 'Dedicated support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="/signup?plan=pro">Start Pro</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Enterprise</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">Custom</span>
                            <CardDescription className="text-sm">Unlimited contacts</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Everything in Pro', 'Custom volume limits', 'SLA guarantees', 'Premium integrations', 'Dedicated account manager'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="/contact?plan=enterprise">Contact Sales</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
} 