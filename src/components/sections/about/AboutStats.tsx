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
      icon: <GraduationCap className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-amber-300 stroke-[2]" />,
      value: 2021,
      prefix: '',
      suffix: '',
      duration: 1800,
      label: 'Year of Establishment',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-emerald-300 stroke-[2]" />,
      value: 3630478,
      prefix: '',
      suffix: '',
      duration: 2000,
      label: 'CBSE Affiliation No.',
    },
    {
      icon: <Users className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-sky-300 stroke-[2]" />,
      value: 25,
      prefix: '1:',
      suffix: '',
      duration: 1600,
      label: 'Teacher-Student Ratio',
    },
    {
      icon: <Sparkles className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-purple-300 stroke-[2]" />,
      value: 5,
      prefix: '',
      suffix: '',
      duration: 1400,
      label: 'Core Pillars',
    },
  ]

  return (
    <div
      ref={containerRef}
      data-aos="fade-up"
      data-aos-delay="200"
      className="hero-stats absolute inset-x-0 bottom-3 sm:bottom-5 md:bottom-[26px] lg:bottom-[32px] z-[2] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex sm:grid grid-cols-4 gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 overflow-x-auto pb-1 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {stats.map((item) => (
        <div
          key={item.label}
          style={{ borderRadius: '12px' }}
          className="group relative overflow-hidden rounded-[12px] h-[76px] sm:h-[82px] md:h-[88px] min-w-[210px] sm:min-w-0 w-full shrink-0 p-2.5 sm:p-3 md:p-3.5 bg-transparent hover:bg-white/[0.06] backdrop-blur-md border border-white/20 hover:border-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-start px-3.5 sm:px-4 md:px-5 gap-3 sm:gap-3.5 md:gap-4"
        >
          {/* Subtle top ambient light highlight */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

          {/* Clean Icon without background */}
          <div className="flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>

          {/* Statistic Text (Number + Description) */}
          <div className="flex flex-col text-left min-w-0">
            <h3 className="text-white text-base sm:text-lg md:text-[20px] lg:text-[22px] font-extrabold leading-tight m-0 mb-0.5 whitespace-nowrap tracking-tight font-['Manrope',sans-serif]">
              <CountUpNumber
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                duration={item.duration}
                start={isVisible}
              />
            </h3>
            <p className="text-white/80 text-[10.5px] sm:text-[11.5px] md:text-[12px] font-medium leading-tight m-0 whitespace-nowrap truncate font-['Inter',sans-serif]">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
