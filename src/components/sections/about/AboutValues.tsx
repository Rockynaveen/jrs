'use client'

import React from 'react'
import {
  Sprout,
  Flag,
  ShieldCheck,
  Handshake,
  Users,
  Heart,
  Target,
  Users2,
  HeartHandshake,
} from 'lucide-react'

export default function AboutValues() {
  const values = [
    {
      title: 'Hygiene',
      description: 'Clean and healthy environment',
      icon: <Sprout className="w-6 h-6 text-[#0d9488]" />,
    },
    {
      title: 'Perseverance',
      description: 'Never give up',
      icon: <Flag className="w-6 h-6 text-[#dc2626] fill-[#dc2626]/20" />,
    },
    {
      title: 'Integrity',
      description: 'Do what is right',
      icon: <ShieldCheck className="w-6 h-6 text-[#2563eb]" />,
    },
    {
      title: 'Honesty',
      description: 'Be true and fair',
      icon: <Handshake className="w-6 h-6 text-[#d97706]" />,
    },
    {
      title: 'Respect',
      description: 'Value everyone',
      icon: <Users className="w-6 h-6 text-[#7e22ce]" />,
    },
    {
      title: 'Trust',
      description: 'Build strong relationships',
      icon: <Heart className="w-6 h-6 text-[#e11d48] fill-[#e11d48]" />,
    },
    {
      title: 'Determination',
      description: 'Stay focused',
      icon: <Target className="w-6 h-6 text-[#ea580c]" />,
    },
    {
      title: 'Teamwork',
      description: 'Achieve together',
      icon: <Users2 className="w-6 h-6 text-[#0284c7]" />,
    },
    {
      title: 'Compassion',
      description: 'Care for others',
      icon: <HeartHandshake className="w-6 h-6 text-[#16a34a]" />,
    },
  ]

  return (
    <section id="values" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-10">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#e31e24]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
              OUR VALUES & ATTRIBUTES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-tight">
            Building Character for a <span className="text-[#e31e24]">Better Tomorrow</span>
          </h2>
        </div>

        {/* 9 Values Grid (Scrollable or multi-column, 9 columns on wide screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-3.5">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 p-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center min-h-[148px]"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center mb-2.5">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-[11px] text-slate-700 leading-tight mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
