'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import HeroSection from '@/components/hero-section'
import HeroSection2 from '@/components/hero-section-2'
import HeroSection8 from '@/components/hero-section-8'

function HeroSelector() {
    const searchParams = useSearchParams()
    const variant = searchParams.get('hero')
    
    // A/B testing logic
    if (variant === '1') {
        return <HeroSection />
    } else if (variant === '2') {
        return <HeroSection2 />
    }
    
    // Default to hero section 8
    return <HeroSection8 />
}

export default function DynamicHero() {
    return (
        <Suspense fallback={<HeroSection8 />}>
            <HeroSelector />
        </Suspense>
    )
} 