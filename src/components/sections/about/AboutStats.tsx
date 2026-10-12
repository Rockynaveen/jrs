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
      icon: <GraduationCap className="w-5 h-5 text-amber-300 stroke-[2.2]" />,
      value: 2021,
      prefix: '',
      suffix: '',
      duration: 1800,
      label: 'Year of Establishment',
      badgeBg: '',
      badgeBorder: '',
      shadow: '',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-300 stroke-[2.2]" />,
      value: 3630478,
      prefix: '',
      suffix: '',
      duration: 2000,
      label: 'CBSE Affiliation No.',
      badgeBg: '',
      badgeBorder: '',
      shadow: '',
    },
    {
      icon: <Users className="w-5 h-5 text-sky-300 stroke-[2.2]" />,
      value: 25,
      prefix: '1:',
      suffix: '',
      duration: 1600,
      label: 'Teacher-Student Ratio',
      badgeBg: '',
      badgeBorder: '',
      shadow: '',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-300 stroke-[2.2]" />,
      value: 5,
      prefix: '',
      suffix: '',
      duration: 1400,
      label: 'Core Pillars',
      badgeBg: '',
      badgeBorder: '',
      shadow: '',
    },
  ]

  return (
    <div
      ref={containerRef}
      data-aos="fade-up"
      data-aos-delay="200"
      className="hero-stats absolute left-[3%] right-[3%] sm:left-[4%] sm:right-[4%] md:left-[4.7%] md:right-[4.7%] bottom-4 sm:bottom-6 md:bottom-[36px] z-[2] grid grid-cols-2 md:grid-cols-4 items-center overflow-hidden"
      style={{
        padding: '12px 20px',
        borderRadius: '20px',
        background: 'rgba(20, 30, 40, 0.38)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.10)',
        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
      }}
    >
      {stats.map((item, index) => {
        const isLast = index === stats.length - 1
        const isLeftColMobile = index % 2 === 0
        const isFirstRowMobile = index < 2

        return (
          <div
            key={item.label}
            className="hero-stat relative flex items-center gap-3 sm:gap-3.5 md:gap-[13px] min-w-0 px-2 sm:px-3 md:px-[16px] py-1.5 md:py-0.5"
          >
            {/* Circular Icon Background */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 shadow-inner">
              {item.icon}
            </div>

            {/* Statistic Text (Number + Description) */}
            <div className="flex flex-col text-left min-w-0">
              <h3 className="text-white text-[17px] sm:text-[19px] md:text-[21px] font-bold leading-[1.2] m-0 mb-0.5 whitespace-nowrap tracking-tight">
                <CountUpNumber
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  duration={item.duration}
                  start={isVisible}
                />
              </h3>
              <p className="text-white/75 text-[11px] sm:text-[11.5px] md:text-[12px] leading-[1.3] m-0 whitespace-nowrap truncate">
                {item.label}
              </p>
            </div>

            {/* Desktop Divider: Thin, low-opacity white line stopping short of top and bottom */}
            {!isLast && (
              <div
                className="hidden md:block absolute right-0 top-[12%] h-[76%] w-[1px] pointer-events-none"
                style={{ background: 'rgba(255, 255, 255, 0.10)' }}
              />
            )}

            {/* Mobile Divider (Right divider for column 1) */}
            {isLeftColMobile && (
              <div
                className="md:hidden absolute right-0 top-[12%] h-[76%] w-[1px] pointer-events-none"
                style={{ background: 'rgba(255, 255, 255, 0.10)' }}
              />
            )}

            {/* Mobile Divider (Bottom divider for row 1) */}
            {isFirstRowMobile && (
              <div
                className="md:hidden absolute bottom-0 left-[10%] w-[80%] h-[1px] pointer-events-none"
                style={{ background: 'rgba(255, 255, 255, 0.10)' }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
