import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Ready to Transform Your Outreach?</h2>
                    <p className="mt-4">Join thousands of sales teams who&apos;ve already switched to our AI-powered outreach platform.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
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
                            <Link href="/contact">
                                <span>Talk to Sales</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
} 