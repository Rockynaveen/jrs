'use client'

import React from 'react'
import {
  GraduationCap,
  Sparkles,
  Award,
  ShieldCheck,
  Building2,
} from 'lucide-react'

const features = [
  {
    title: 'CBSE Curriculum',
    subtitle: 'Strong academic foundation',
    icon: GraduationCap,
    bgColor: 'bg-[#e31e24]',
    hoverBorder: 'hover:border-red-200',
    iconShadow: 'shadow-red-500/25',
  },
  {
    title: 'Holistic Development',
    subtitle: 'Academic, co-curricular & life skills',
    icon: Sparkles,
    bgColor: 'bg-emerald-600',
    hoverBorder: 'hover:border-emerald-200',
    iconShadow: 'shadow-emerald-500/25',
  },
  {
    title: 'Experienced Faculty',
    subtitle: 'Dedicated & qualified teachers',
    icon: Award,
    bgColor: 'bg-amber-500',
    hoverBorder: 'hover:border-amber-200',
    iconShadow: 'shadow-amber-500/25',
  },
  {
    title: 'Safe & Inclusive',
    subtitle: 'Nurturing and secure environment',
    icon: ShieldCheck,
    bgColor: 'bg-blue-600',
    hoverBorder: 'hover:border-blue-200',
    iconShadow: 'shadow-blue-500/25',
  },
  {
    title: 'Modern Infrastructure',
    subtitle: 'World-class learning environment',
    icon: Building2,
    bgColor: 'bg-indigo-600',
    hoverBorder: 'hover:border-indigo-200',
    iconShadow: 'shadow-indigo-500/25',
  },
]

export default function FeatureCards() {
  return (
    <section className="relative z-20 bg-transparent py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 items-stretch">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                className={`bg-white rounded-2xl p-5 sm:p-6 text-center border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 ${item.hoverBorder} flex flex-col items-center justify-start h-full group sm:last:col-span-2 md:last:col-span-1 lg:last:col-span-1 sm:last:max-w-md sm:last:mx-auto md:last:max-w-none md:last:mx-0 w-full`}
              >
                {/* Circular Badge Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.iconShadow} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-[15px] sm:text-base font-bold text-slate-900 mb-2 leading-snug min-h-[44px] flex items-center justify-center text-center">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed max-w-[210px] mt-auto">
                  {item.subtitle}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

