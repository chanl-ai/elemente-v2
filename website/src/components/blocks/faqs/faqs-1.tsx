export default function FAQs1() {
    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="text-center lg:text-left">
                        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p>Get answers to common questions about Elemente&apos;s AI-powered outreach platform.</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        <div className="pb-6">
                            <h3 className="font-medium">How does the AI voice calling work?</h3>
                            <p className="text-muted-foreground mt-4">Our AI creates natural-sounding voice calls that adapt to each prospect&apos;s responses. The system learns from every interaction to improve conversation quality and conversion rates.</p>

                            <ol className="list-outside list-decimal space-y-2 pl-4">
                                <li className="text-muted-foreground mt-4">AI analyzes your prospect&apos;s profile and call history</li>
                                <li className="text-muted-foreground mt-4">Generates personalized conversation scripts in real-time</li>
                                <li className="text-muted-foreground mt-4">Adapts responses based on prospect engagement</li>
                            </ol>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Can I integrate WhatsApp with my existing CRM?</h3>
                            <p className="text-muted-foreground mt-4">Yes! Elemente integrates with all major CRMs including Salesforce, HubSpot, and Pipedrive. Your WhatsApp conversations sync automatically with your existing workflow.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">What kind of results can I expect?</h3>
                            <p className="text-muted-foreground my-4">Our customers typically see significant improvements in their outreach performance:</p>
                            <ul className="list-outside list-disc space-y-2 pl-4">
                                <li className="text-muted-foreground">Average 300% increase in response rates</li>
                                <li className="text-muted-foreground">60% improvement in meeting booking rates</li>
                                <li className="text-muted-foreground">40% reduction in cost per lead</li>
                            </ul>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Do you offer phone support?</h3>
                            <p className="text-muted-foreground mt-4">We provide comprehensive support including live chat, email, and dedicated phone support for Enterprise customers. Our team is available 24/7 to help you succeed.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Is there a free trial available?</h3>
                            <p className="text-muted-foreground mt-4">Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 