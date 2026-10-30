'use client'

import React from 'react'
import {
  Trophy,
  Music,
  Flame,
  FlaskConical,
  Wind,
} from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

const activities = [
  {
    title: 'Sports',
    icon: Trophy,
    image: '/images/beyond/sports.jpg',
    imagePosition: 'object-[center_65%]',
    haloBg: 'bg-rose-500/25 border-rose-400/40 shadow-[0_0_20px_rgba(244,63,94,0.45)]',
    circleBg: 'bg-gradient-to-br from-rose-400 to-rose-600 shadow-[0_2px_8px_rgba(244,63,94,0.5)]',
    dashBg: 'bg-rose-500',
  },
  {
    title: 'Music',
    icon: Music,
    image: '/images/beyond/music.jpg',
    imagePosition: 'object-[center_20%]',
    haloBg: 'bg-sky-500/25 border-sky-400/40 shadow-[0_0_20px_rgba(14,165,233,0.45)]',
    circleBg: 'bg-gradient-to-br from-sky-400 to-sky-600 shadow-[0_2px_8px_rgba(14,165,233,0.5)]',
    dashBg: 'bg-sky-500',
  },
  {
    title: 'Dance',
    icon: Flame,
    image: '/images/beyond/dance.jpg',
    imagePosition: 'object-[center_55%]',
    haloBg: 'bg-pink-500/25 border-pink-400/40 shadow-[0_0_20px_rgba(236,72,153,0.45)]',
    circleBg: 'bg-gradient-to-br from-pink-400 to-pink-600 shadow-[0_2px_8px_rgba(236,72,153,0.5)]',
    dashBg: 'bg-pink-500',
  },
  {
    title: 'Science & Activities',
    icon: FlaskConical,
    image: '/images/beyond/science.jpg',
    imagePosition: 'object-[center_35%]',
    haloBg: 'bg-blue-500/25 border-blue-400/40 shadow-[0_0_20px_rgba(59,130,246,0.45)]',
    circleBg: 'bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.5)]',
    dashBg: 'bg-blue-500',
  },
  {
    title: 'Skating',
    icon: Wind,
    image: '/images/beyond/skating.jpg',
    imagePosition: 'object-[center_45%]',
    haloBg: 'bg-emerald-500/25 border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.45)]',
    circleBg: 'bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-[0_2px_8px_rgba(16,185,129,0.5)]',
    dashBg: 'bg-emerald-500',
  },
]

export default function BeyondClassroom() {
  return (
    <section id="beyond" className="py-12 sm:py-14 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
          {/* Eyebrow: — BEYOND CLASSROOM — */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#031c3f]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]">
              BEYOND CLASSROOM
            </span>
            <span className="w-8 h-[2px] bg-[#031c3f]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-tight">
            A Platform for <span className="text-[#e31e24]">Every Talent</span>
          </h2>
        </div>

        {/* 5 Cards Grid matching the exact design in the image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-5 xl:gap-6 items-stretch w-full">
          {activities.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className="group relative rounded-[24px] sm:rounded-[26px] overflow-hidden bg-slate-900 h-[330px] sm:h-[350px] lg:h-[370px] xl:h-[385px] flex flex-col justify-end transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
              >
                {/* Background Activity Photo */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <SchoolImage
                    src={item.image}
                    alt={item.title.replace('\n', ' ')}
                    className={`w-full h-full object-cover ${item.imagePosition || 'object-center'} group-hover:scale-108 transition-transform duration-700 ease-out`}
                    fallbackText={item.title.replace('\n', ' ')}
                    fallbackBg="from-[#031c3f] to-[#0a2559]"
                  />
                  {/* Dark gradient for glass contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 via-40% to-transparent pointer-events-none" />
                </div>

                {/* Translucent Glassmorphism Overlay Box - exact match to screenshot */}
                <div className="relative z-10 mx-3 sm:mx-3.5 mb-3 sm:mb-3.5">
                  <div
                    style={{
                      backgroundColor: 'rgba(12, 22, 38, 0.78)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.16)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.40), inset 0 1px 0 rgba(255, 255, 255, 0.18)',
                    }}
                    className="relative rounded-[20px] sm:rounded-[22px] pt-4.5 sm:pt-5 pb-3 sm:pb-3.5 px-2.5 sm:px-3 flex flex-col items-center text-center transition-all duration-300 group-hover:bg-[rgba(12,22,38,0.88)] group-hover:border-white/30 w-full"
                  >
                    {/* Centered Circular Colored Icon Badge overlapping top edge */}
                    <div className="absolute -top-5 sm:-top-5.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                      {/* Outer Translucent Glowing Ring */}
                      <div
                        className={`w-11 h-11 sm:w-11.5 sm:h-11.5 rounded-full border flex items-center justify-center backdrop-blur-md transition-transform duration-300 group-hover:scale-110 ${item.haloBg}`}
                      >
                        {/* Inner Solid Gradient Circle */}
                        <div
                          className={`w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full flex items-center justify-center ${item.circleBg}`}
                        >
                          <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" strokeWidth={2.4} />
                        </div>
                      </div>
                    </div>

                    {/* Card Heading - single line right below icon */}
                    <div className="w-full flex items-center justify-center px-0.5 mt-2 sm:mt-2.5">
                      <h3
                        className="text-white font-bold text-xs sm:text-[13px] xl:text-[14px] text-center leading-[20px] tracking-tight drop-shadow-sm whitespace-nowrap"
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Colored Underline matching icon color */}
                    <div
                      className={`w-8 sm:w-9 h-[3px] rounded-full mt-2 transition-all duration-300 group-hover:w-12 ${item.dashBg}`}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
