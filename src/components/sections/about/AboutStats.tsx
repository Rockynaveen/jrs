'use client'

import React, { useState, useEffect, useRef } from 'react'
import { GraduationCap, ShieldCheck, Users, Sparkles } from 'lucide-react'

interface StatItem {
  icon: React.ReactNode
  value: number
  prefix?: string
  suffix?: string
  label: string
  duration?: number
  badgeBg: string
  badgeBorder: string
  shadow: string
}

function CountUpNumber({
  value,
  prefix = '',
  suffix = '',
  start = false,
  duration = 2000,
}: {
  value: number
  prefix?: string
  suffix?: string
  start: boolean
  duration?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) {
      setCount(0)
      return
    }

    let startTime: number | null = null
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentVal = Math.min(value, Math.round(easedProgress * value))
      setCount(currentVal)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [start, value, duration])

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export default function AboutStats() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '40px' }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const stats: StatItem[] = [
    {
      icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
      value: 2021,
      prefix: '',
      suffix: '',
      duration: 1800,
      label: 'Year of Establishment',
      badgeBg: 'bg-amber-400/15',
      badgeBorder: 'border-amber-400/30',
      shadow: 'shadow-[0_0_12px_rgba(251,191,36,0.2)]',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      value: 3630478,
      prefix: '',
      suffix: '',
      duration: 2000,
      label: 'CBSE Affiliation No.',
      badgeBg: 'bg-emerald-400/15',
      badgeBorder: 'border-emerald-400/30',
      shadow: 'shadow-[0_0_12px_rgba(52,211,153,0.2)]',
    },
    {
      icon: <Users className="w-5 h-5 text-sky-400" />,
      value: 25,
      prefix: '1:',
      suffix: '',
      duration: 1600,
      label: 'Teacher-Student Ratio',
      badgeBg: 'bg-sky-400/15',
      badgeBorder: 'border-sky-400/30',
      shadow: 'shadow-[0_0_12px_rgba(56,189,248,0.2)]',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      value: 5,
      prefix: '',
      suffix: '',
      duration: 1400,
      label: 'Core Pillars',
      badgeBg: 'bg-purple-400/15',
      badgeBorder: 'border-purple-400/30',
      shadow: 'shadow-[0_0_12px_rgba(192,132,252,0.2)]',
    },
  ]

  return (
    <div
      ref={containerRef}
      className="w-full max-w-5xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div
        className="rounded-2xl md:rounded-full py-3.5 sm:py-4 px-4 sm:px-6 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.42)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          boxShadow:
            '0 8px 24px 0 rgba(0, 0, 0, 0.25), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 items-center">
          {stats.map((item, index) => {
            // Mobile (2 cols): 2x2 with cross dividers
            // Desktop (4 cols >= 768px): 1x4 with 3 vertical dividers
            const isFirstRowMobile = index < 2
            const isLeftColMobile = index % 2 === 0
            const isLastDesktop = index === stats.length - 1

            const borderClasses = [
              isLeftColMobile ? 'border-r border-white/15' : '',
              isFirstRowMobile
                ? 'border-b md:border-b-0 border-white/15 pb-3 md:pb-0'
                : 'pt-3 md:pt-0',
              !isLastDesktop ? 'md:border-r md:border-white/15' : 'md:border-r-0',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <div
                key={index}
                className={`flex items-center gap-3 sm:gap-3.5 px-3 sm:px-4 md:px-5 py-1 ${borderClasses}`}
              >
                {/* Circular Icon Badge */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border ${item.badgeBg} ${item.badgeBorder} ${item.shadow}`}
                >
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-white font-extrabold text-[16px] sm:text-[18px] md:text-[19px] leading-tight tracking-tight drop-shadow-sm tabular-nums">
                    <CountUpNumber
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      duration={item.duration}
                      start={isVisible}
                    />
                  </span>
                  <span className="text-white/70 text-[11px] sm:text-[12px] font-medium leading-tight whitespace-nowrap truncate mt-0.5">
                    {item.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
