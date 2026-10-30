'use client'

import React from 'react'
import {
  Trophy,
  Share2,
  Building2,
  Users,
  ShieldCheck,
  Presentation,
  FileCheck2,
  BookOpen,
  Bus,
  Compass,
  Palette,
  Medal,
} from 'lucide-react'

export default function AboutWhyChoose() {
  const topFeatures = [
    {
      title: 'Academic Excellence',
      description: 'CBSE curriculum with a strong academic foundation.',
      badgeBg: 'bg-[#dc2626]',
      icon: <Trophy className="w-5 h-5 text-white" />,
    },
    {
      title: 'Holistic Development',
      description: 'A balance of academics, values, co-curricular activities, life skills, and AI-powered learning to prepare students for the future.',
      badgeBg: 'bg-[#2563eb]',
      icon: <Share2 className="w-5 h-5 text-white" />,
    },
    {
      title: 'Best-in-Class Infrastructure',
      description: 'Modern classrooms, labs, library and activity spaces.',
      badgeBg: 'bg-[#d97706]',
      icon: <Building2 className="w-5 h-5 text-white" />,
    },
    {
      title: 'Personal Attention',
      description: '1:25 teacher–student ratio for focused learning.',
      badgeBg: 'bg-[#7e22ce]',
      icon: <Users className="w-5 h-5 text-white" />,
    },
    {
      title: 'Safe & Secure Learning',
      description: 'A caring and secure environment for every student.',
      badgeBg: 'bg-[#059669]',
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
    },
  ]

  const bottomBadges = [
    {
      icon: <Users className="w-5 h-5 text-[#2563eb]" />,
      title: '1:25 Student-Teacher Ratio',
    },
    {
      icon: <Presentation className="w-5 h-5 text-[#0284c7]" />,
      title: 'Professional Development',
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-[#d97706]" />,
      title: 'Qualitative Assessment',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#7e22ce]" />,
      title: 'Resource & Media Center',
    },
    {
      icon: <Bus className="w-5 h-5 text-[#ea580c]" />,
      title: 'Field Trips & Excursions',
    },
    {
      icon: <Compass className="w-5 h-5 text-[#16a34a]" />,
      title: 'Career Guidance & Counseling',
    },
    {
      icon: <Palette className="w-5 h-5 text-[#6366f1]" />,
      title: 'Visual & Performing Arts',
    },
    {
      icon: <Medal className="w-5 h-5 text-[#f59e0b]" />,
      title: 'Sports Education',
    },
  ]

  return (
    <section id="why-choose" className="py-[50px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#031c3f]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]">
              WHY CHOOSE JRS
            </span>
            <span className="w-8 h-[2px] bg-[#031c3f]" />
          </div>
          <h2
            style={{ lineHeight: '50px' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
          >
            What Makes JRS <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Different?</span>
          </h2>
        </div>

        {/* Top 5 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {topFeatures.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-between"
            >
              <div className="flex flex-col items-center">
                {/* Colored Circular Icon Badge */}
                <div
                  className={`w-12 h-12 rounded-full ${item.badgeBg} flex items-center justify-center shadow-sm mb-4`}
                >
                  {item.icon}
                </div>

                <h3 className="text-sm sm:text-[15px] font-bold text-[#031c3f] leading-snug">
                  {item.title}
                </h3>


                <p className="text-[14px] text-[#111] leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-4.5 mt-6">
          {bottomBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-100 p-4 sm:p-4.5 text-center shadow-[0_1px_6px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-sm hover:bg-slate-50/60 transition-all flex flex-col items-center justify-center min-h-[100px]"
            >
              <div className="mb-2.5">{badge.icon}</div>
              <span className="text-[14px] sm:text-[15px] font-medium text-[#111] leading-snug">
                {badge.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
