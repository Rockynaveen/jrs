'use client'

import React, { useState, useEffect, useRef } from 'react'
import { GraduationCap, Users, Star } from 'lucide-react'

interface StatItem {
  icon: React.ReactNode
  value: number
  prefix?: string
  suffix?: string
  label: string
  duration?: number
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
      // Ease out cubic formula for smooth count-up from 0 to value
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
      icon: <GraduationCap className="w-8 h-8 text-[#0a1931]" />,
      value: 2021,
      prefix: '',
      suffix: '',
      duration: 2000,
      label: 'Year of Establishment',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#2563eb]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      ),
      value: 3630478,
      prefix: '',
      suffix: '',
      duration: 2200,
      label: 'CBSE Affiliation No.',
    },
    {
      icon: <Users className="w-8 h-8 text-[#e31e24]" />,
      value: 25,
      prefix: '1:',
      suffix: '',
      duration: 1800,
      label: 'Teacher-Student Ratio',
    },
    {
      icon: <Star className="w-8 h-8 text-[#eab308] fill-[#eab308]" />,
      value: 5,
      prefix: '',
      suffix: '',
      duration: 1500,
      label: 'Core Pillars',
    },
  ]

  return (
    <div
      ref={containerRef}
      className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-12"
    >
      <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-100 py-6 sm:py-8 px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${
                index > 1 ? 'pt-6 md:pt-0' : index === 1 ? 'max-md:pt-0' : ''
              }`}
            >
              {/* Icon Container */}
              <div className="mb-2 sm:mb-2.5 flex items-center justify-center">
                {item.icon}
              </div>

              {/* Number Value with smooth count-up animation */}
              <span className="text-2xl sm:text-3xl font-extrabold text-[#031c3f] tracking-tight tabular-nums">
                <CountUpNumber
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  duration={item.duration}
                  start={isVisible}
                />
              </span>

              {/* Label */}
              <span className="text-[14px] text-slate-700 font-medium mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
