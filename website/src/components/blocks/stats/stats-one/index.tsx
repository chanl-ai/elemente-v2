export default function StatsOne() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Elemente in numbers</h2>
                    <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+1200</div>
                        <p>Response Rate Improvement</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">22 Million</div>
                        <p>Messages Delivered</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+500</div>
                        <p>Active Customers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
