'use client'

import React from 'react'
import Link from 'next/link'
import {
  Calendar,
  ArrowRight,
  Leaf,
  Cpu,
  BookOpen,
  Trophy,
} from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

export default function AboutVideo() {
  const campusFeatures = [
    {
      title: 'Eco-Friendly\nCampus',
      image: '/images/campus-building.jpg',
      icon: Leaf,
      imagePosition: 'object-center',
      haloBg: 'bg-emerald-500/25 border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.4)]',
      circleBg: 'bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-[0_2px_8px_rgba(16,185,129,0.5)]',
      dashBg: 'bg-emerald-500',
    },
    {
      title: 'Smart Classrooms &\nSTEM Labs',
      image: '/images/smart-classroom.jpg',
      icon: Cpu,
      imagePosition: 'object-center',
      haloBg: 'bg-blue-500/25 border-blue-400/40 shadow-[0_0_20px_rgba(59,130,246,0.4)]',
      circleBg: 'bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.5)]',
      dashBg: 'bg-blue-500',
    },
    {
      title: 'CBSE & Cultural\nEthos',
      image: '/images/about us why.png',
      icon: BookOpen,
      imagePosition: 'object-center',
      haloBg: 'bg-amber-500/25 border-amber-400/40 shadow-[0_0_20px_rgba(245,158,11,0.4)]',
      circleBg: 'bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_2px_8px_rgba(245,158,11,0.5)]',
      dashBg: 'bg-amber-500',
    },
    {
      title: 'Sports, Karate &\nSkating',
      image: '/images/sports1.jpeg',
      icon: Trophy,
      imagePosition: 'object-center',
      haloBg: 'bg-rose-500/25 border-rose-400/40 shadow-[0_0_20px_rgba(244,63,94,0.4)]',
      circleBg: 'bg-gradient-to-br from-rose-400 to-rose-600 shadow-[0_2px_8px_rgba(244,63,94,0.5)]',
      dashBg: 'bg-rose-500',
    },
  ]

  return (
    <section
      id="campus-spirit"
      className="relative py-[50px] bg-white text-slate-800 overflow-hidden scroll-mt-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
          {/* Eyebrow: — CAMPUS TOUR & LIFE AT JRS — */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#e31e24]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
              CAMPUS TOUR & LIFE AT JRS
            </span>
            <span className="w-8 h-[2px] bg-[#e31e24]" />
          </div>

          <h2
            style={{ lineHeight: '50px' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
          >
            Experience the Spirit of <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>JRS International School</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-2xl mx-auto">
            Explore our state-of-the-art campus, modern facilities, and vibrant learning spaces where every student discovers their unique passions and potential.
          </p>
        </div>

        {/* 4 Feature Cards Grid: 4 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-5 xl:gap-6 items-stretch">
          {campusFeatures.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className="group relative rounded-[22px] sm:rounded-[24px] overflow-hidden bg-slate-900 h-[310px] sm:h-[330px] lg:h-[350px] xl:h-[360px] flex flex-col justify-end transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
              >
                {/* Background Campus Photo with custom imagePosition */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <SchoolImage
                    src={item.image}
                    alt={item.title.replace('\n', ' ')}
                    className={`w-full h-full object-cover ${item.imagePosition || 'object-center'} group-hover:scale-106 transition-transform duration-700 ease-out`}
                    fallbackText={item.title.replace('\n', ' ')}
                    fallbackBg="from-[#031c3f] to-[#0a2559]"
                  />
                  {/* Subtle dark navy gradient at bottom for translucency */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03142e]/65 via-[#03142e]/20 to-transparent pointer-events-none" />
                </div>

                {/* Wide Translucent Glassmorphism Overlay with equal margins to prevent edge clipping */}
                <div className="relative z-10 mx-3 sm:mx-3.5 mb-3 sm:mb-3.5">
                  <div
                    style={{
                      backgroundColor: 'rgba(15, 28, 48, 0.28)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.20)',
                    }}
                    className="relative rounded-[16px] sm:rounded-[18px] pt-6 sm:pt-7 pb-3 sm:pb-3.5 px-2.5 sm:px-3 flex flex-col items-center text-center min-h-[96px] sm:min-h-[105px] justify-between transition-all duration-300 group-hover:bg-[rgba(15,28,48,0.38)] group-hover:border-white/28 w-full"
                  >
                    {/* Centered Circular Colored Icon Badge overlapping top edge */}
                    <div className="absolute -top-5 sm:-top-5.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                      {/* Outer Translucent Glowing Ring */}
                      <div
                        className={`w-11 h-11 sm:w-11.5 sm:h-11.5 rounded-full border flex items-center justify-center backdrop-blur-md transition-transform duration-300 group-hover:scale-108 ${item.haloBg}`}
                      >
                        {/* Inner Solid Gradient Circle */}
                        <div
                          className={`w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full flex items-center justify-center ${item.circleBg}`}
                        >
                          <Icon className="w-[17px] h-[17px] sm:w-[18px] sm:h-[18px] text-white" strokeWidth={2.3} />
                        </div>
                      </div>
                    </div>

                    {/* Card Heading: Balanced Font Size & Two-Line Wrapping */}
                    <div className="w-full flex-1 flex items-center justify-center px-1">
                      <h3
                        style={{ fontSize: '14px', lineHeight: '24px' }}
                        className="text-white font-bold text-[14px] text-center leading-[24px] tracking-tight drop-shadow-sm whitespace-pre-line"
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

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-8 sm:pt-10" data-aos="fade-up">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/25 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Campus Visit</span>
          </Link>

          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-[#031c3f] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Admissions 2026-27</span>
            <ArrowRight className="w-4 h-4 text-[#e31e24]" />
          </Link>
        </div>
      </div>
    </section>
  )
}
