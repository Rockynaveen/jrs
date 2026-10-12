'use client'

import React, { useState, useEffect, useRef } from 'react'
import { GraduationCap, Users, Award, Trophy } from 'lucide-react'

interface StatItem {
  value: number
  suffix?: string
  prefix?: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const stats: StatItem[] = [
  {
    value: 2021,
    suffix: '',
    label: 'Year of Establishment',
    icon: GraduationCap,
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Happy Students',
    icon: Users,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Experienced Faculty',
    icon: Award,
  },
  {
    value: 100,
    suffix: '+',
    label: 'Co-curricular Activities',
    icon: Trophy,
  },
]

function CountUpNumber({
  value,
  suffix = '',
  prefix = '',
  start = false,
  duration = 2000,
}: {
  value: number
  suffix?: string
  prefix?: string
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
      const currentVal = Math.floor(easedProgress * value)
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

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 overflow-hidden text-white"
    >
      {/* Background Image with Project Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/campus-building.jpg"
          alt="JRS International School Campus"
          className="w-full h-full object-cover object-center"
        />
        {/* Semi-transparent dark navy overlay matching project palette */}
        <div className="absolute inset-0 bg-[#031127]/75 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Glassmorphism Cards in Container with generous gap */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className="flex flex-col items-center justify-center text-center px-4 py-8 sm:px-5 sm:py-9 lg:py-10 rounded-xl sm:rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md border border-white/20 hover:border-white/35 transition-all duration-300 shadow-xl group"
              >
                {/* Icon above count */}
                <div className="text-[#facc15] group-hover:scale-110 transition-transform duration-300 mb-2.5">
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>

                {/* Count Number in center */}
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight tabular-nums leading-none">
                  <CountUpNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    start={isVisible}
                    duration={2000}
                  />
                </div>

                {/* Label below count */}
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-2 leading-tight">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}






