'use client'

import React from 'react'
import {
  Trophy,
  Music,
  Flame,
  Shield,
  FlaskConical,
  Wind,
} from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

const activities = [
  {
    title: 'Sports',
    icon: Trophy,
    color: 'bg-[#15803d]', // Forest Green
    image: '/images/beyond/sports.jpg',
    objectPosition: 'object-[center_65%]',
  },
  {
    title: 'Music',
    icon: Music,
    color: 'bg-[#0284c7]', // Cyan / Ocean Blue
    image: '/images/beyond/music.jpg',
    objectPosition: 'object-[center_20%]',
  },
  {
    title: 'Dance',
    icon: Flame,
    color: 'bg-[#db2777]', // Magenta / Pink
    image: '/images/beyond/dance.jpg',
    objectPosition: 'object-[center_55%]',
  },
  {
    title: 'Karate',
    icon: Shield,
    color: 'bg-[#d97706]', // Amber / Gold
    image: '/images/beyond/karate.jpg',
    objectPosition: 'object-[center_35%]',
  },
  {
    title: 'Science & Activities',
    icon: FlaskConical,
    color: 'bg-[#2563eb]', // Royal Blue
    image: '/images/beyond/science.jpg',
    objectPosition: 'object-[center_35%]',
  },
  {
    title: 'Skating',
    icon: Wind,
    color: 'bg-[#0891b2]', // Cyan / Teal
    image: '/images/beyond/skating.jpg',
    objectPosition: 'object-[center_45%]',
  },
]

export default function BeyondClassroom() {
  return (
    <section id="beyond" className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
          {/* Eyebrow: — BEYOND CLASSROOM — */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#e31e24]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
              BEYOND CLASSROOM
            </span>
            <span className="w-8 h-[2px] bg-[#e31e24]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-tight">
            A Platform for <span className="text-[#e31e24]">Every Talent</span>
          </h2>
        </div>

        {/* 6 Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {activities.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col bg-slate-100 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <SchoolImage
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover ${item.objectPosition} group-hover:scale-105 transition-transform duration-500`}
                    fallbackText={item.image}
                    fallbackBg="from-slate-100 to-slate-200"
                  />
                  {/* Black overlay from below reducing bottom to top, reaching 0 opacity at top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 via-50% to-transparent pointer-events-none transition-opacity duration-300" />
                </div>

                {/* Colored Label Bar */}
                <div
                  className={`${item.color} text-white py-2.5 sm:py-3 px-1.5 sm:px-2.5 flex items-center justify-center gap-1.5 sm:gap-2 font-bold shadow-md transition-all duration-300 min-h-[48px] sm:min-h-[52px]`}
                >
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0" />
                  <span className="leading-tight text-center whitespace-normal sm:whitespace-nowrap text-xs sm:text-[13px] xl:text-sm font-semibold tracking-wide">
                    {item.title}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
