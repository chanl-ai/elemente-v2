"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Chart configuration types
export type ChartConfig = {
  [key: string]: {
    label: string
    color: string
  }
}

// Simple chart component stubs for components that require charts
const Chart = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full h-64 bg-muted rounded-lg flex items-center justify-center", className)}
    {...props}
  >
    <div className="text-muted-foreground">Chart Component</div>
  </div>
))
Chart.displayName = "Chart"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    config?: ChartConfig
  }
>(({ className, children, config, ...props }, ref) => {
  // Config is passed for compatibility but not used in simple stub
  void config;
  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </div>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    active?: boolean
    cursor?: boolean | object
    content?: React.ReactNode
  }
>(({ className, active, cursor, content, ...props }, ref) => {
  // Handle the content prop properly
  void active; void cursor;
  return (
    <div
      ref={ref}
      className={cn("rounded-md border bg-popover p-2 text-sm shadow-md", className)}
      {...props}
    >
      {content}
    </div>
  )
})
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm", className)}
    {...props}
  />
))
ChartTooltipContent.displayName = "ChartTooltipContent"

export { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } 