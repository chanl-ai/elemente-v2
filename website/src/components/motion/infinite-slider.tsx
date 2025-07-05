'use client'
import { ReactNode } from 'react'

interface InfiniteSliderProps {
  children: ReactNode
  speed?: number
  speedOnHover?: number
  gap?: number
}

export const InfiniteSlider = ({ children, speed = 40, speedOnHover = 20, gap = 112 }: InfiniteSliderProps) => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex animate-scroll"
        style={{
          gap: `${gap}px`,
          animation: `scroll ${speed}s linear infinite`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationDuration = `${speedOnHover}s`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationDuration = `${speed}s`
        }}
      >
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </div>
    </div>
  )
} 