'use client'

import React from 'react'
import Link from 'next/link'
import {
  Sparkles,
  Calendar,
  ArrowRight,
  TreePine,
  Cpu,
  BookOpen,
  Trophy,
} from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

export default function AboutVideo() {
  const campusFeatures = [
    {
      title: 'Pollution-free green campus in Narapally, Hyderabad',
      shortTitle: 'Green Eco-Friendly Campus',
      tag: 'Eco-Friendly Campus',
      description:
        'Nestled in a peaceful, serene landscape away from urban pollution, promoting fresh air and holistic student wellness.',
      image: '/images/campus-building.jpg',
      icon: TreePine,
      badgeColor: 'text-emerald-400',
    },
    {
      title: 'Interactive smart classrooms & modern robotics labs',
      shortTitle: 'Smart Classrooms & STEM',
      tag: 'Smart Classrooms & STEM',
      description:
        'Equipped with digital touchscreens, audiovisual technology, and hands-on robotics labs for experiential STEM discovery.',
      image: '/images/smart-classroom.jpg',
      icon: Cpu,
      badgeColor: 'text-blue-400',
    },
    {
      title: 'Comprehensive CBSE curriculum blended with Indian ethos',
      shortTitle: 'CBSE & Indian Ethos',
      tag: 'CBSE & Cultural Ethos',
      description:
        'Rigorous academic standards deeply integrated with traditional Indian values, cultural ethics, and moral character.',
      image: '/images/primary-school-study.jpg',
      icon: BookOpen,
      badgeColor: 'text-amber-400',
    },
    {
      title: 'Expansive arenas for sports, martial arts & skating',
      shortTitle: 'Sports & Martial Arts',
      tag: 'Sports, Karate & Skating',
      description:
        'Extensive outdoor athletic grounds, professional karate dojo training, and specialized roller skating arenas.',
      image: '/images/sports.jpg',
      icon: Trophy,
      badgeColor: 'text-rose-400',
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

        {/* 4 Feature Cards Grid with Suitable Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {campusFeatures.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(149,157,165,0.35)] flex flex-col overflow-hidden group h-full"
            >
              {/* Photo Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100 flex-shrink-0">
                <SchoolImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  fallbackText={item.shortTitle}
                  fallbackBg="from-[#031c3f] to-[#0a2559]"
                />
                {/* Dark gradient overlay for tag contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Glassmorphism Tag */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                  <div
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.42)',
                      backdropFilter: 'blur(16px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                      border: '1px solid rgba(255, 255, 255, 0.22)',
                      boxShadow: '0 8px 24px 0 rgba(0, 0, 0, 0.25), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
                    }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-bold text-white tracking-wide"
                  >
                    <item.icon className={`w-3.5 h-3.5 ${item.badgeColor} shrink-0`} />
                    <span>{item.tag}</span>
                  </div>
                </div>
              </div>

              {/* Content Area with Perfect Alignment */}
              <div className="p-5 sm:p-5.5 flex flex-col flex-1 justify-between">
                <div>
                  {/* Uniform Title Row */}
                  <div className="min-h-[48px] sm:min-h-[52px] flex items-start mb-2">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-[#031c3f] group-hover:text-[#e31e24] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  {/* Uniform Description Row */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
