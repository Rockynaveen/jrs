'use client'

import React from 'react'
import {
  Palette,
  Music,
  Sparkles,
  Shield,
  Heart,
  Wind,
  Trophy,
  Lightbulb,
  Compass,
  Users,
} from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

export default function AboutBeyond() {
  const activities = [
    {
      title: 'Art & Painting',
      category: 'Creative Expression',
      icon: Palette,
      src: '/images/primary-school-study.jpg',
      accent: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Music',
      category: 'Vocal & Instruments',
      icon: Music,
      src: '/images/music.jpg',
      accent: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Dance',
      category: 'Rhythm & Grace',
      icon: Sparkles,
      src: '/images/dance.jpg',
      accent: 'from-purple-500 to-fuchsia-600',
    },
    {
      title: 'Karate',
      category: 'Discipline & Defense',
      icon: Shield,
      src: '/images/about karate.webp',
      accent: 'from-red-600 to-rose-700',
    },
    {
      title: 'Yoga',
      category: 'Mind & Wellness',
      icon: Heart,
      src: '/images/yoga.jpg',
      accent: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Skating',
      category: 'Balance & Speed',
      icon: Wind,
      src: '/images/skating.jpg',
      accent: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Games & Sports',
      category: 'Fitness & Teamwork',
      icon: Trophy,
      src: '/images/sports.jpg',
      accent: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Project Work',
      category: 'Research & Labs',
      icon: Lightbulb,
      src: '/images/science-lab.jpg',
      accent: 'from-violet-500 to-purple-600',
    },
    {
      title: 'Excursions & Trips',
      category: 'Experiential Tours',
      icon: Compass,
      src: '/images/transport.jpg',
      accent: 'from-teal-500 to-emerald-600',
    },
    {
      title: 'Clubs & Activities',
      category: 'Leadership & Social',
      icon: Users,
      src: '/images/library.jpg',
      accent: 'from-sky-500 to-blue-600',
    },
  ]

  return (
    <section id="beyond-classroom" className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Description */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#e31e24]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
              CO-CURRICULAR EXCELLENCE
            </span>
            <span className="w-8 h-[2px] bg-[#e31e24]" />
          </div>

          <h2
            style={{ lineHeight: '52px' }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#031c3f] tracking-tight leading-[52px] sm:leading-[52px] lg:leading-[52px]"
          >
            Education Beyond The <span className="text-[#e31e24]" style={{ lineHeight: '52px' }}>Classroom</span>
          </h2>
          <p
            style={{ lineHeight: '24px' }}
            className="text-slate-600 text-sm sm:text-base mt-3 leading-[24px] max-w-2xl mx-auto"
          >
            We empower students to explore their passions, build physical stamina, and cultivate artistic talents through a diverse suite of holistic activities designed for all-round growth.
          </p>
        </div>

        {/* 10 Activities in Harmonious 5-Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {activities.map((act, index) => {
            const Icon = act.icon
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] bg-slate-900 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-200/80 cursor-default"
              >
                {/* Full-bleed Activity Photo with Zoom Animation */}
                <SchoolImage
                  src={act.src}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  fallbackText={act.src}
                  fallbackBg="from-slate-800 to-slate-900"
                />

                {/* Dark Gradient Overlay: Black from below, reducing bottom to top, 0 opacity at top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 via-50% to-transparent pointer-events-none transition-opacity duration-300" />

                {/* Top Subtle Pill with Icon */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:bg-white group-hover:text-[#e31e24] transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 z-10 flex flex-col justify-end">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-300/90 group-hover:text-amber-300 transition-colors">
                    {act.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug mt-0.5 group-hover:text-white transition-colors">
                    {act.title}
                  </h3>

                  {/* Expanding Accent Underline on Hover */}
                  <div
                    className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${act.accent} rounded-full mt-2 transition-all duration-300`}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
