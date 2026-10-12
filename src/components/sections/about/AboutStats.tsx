'use client'

import React from 'react'
import { GraduationCap, Users, Star } from 'lucide-react'

export default function AboutStats() {
  const stats = [
    {
      icon: <GraduationCap className="w-8 h-8 text-[#0a1931]" />,
      value: '2021',
      label: 'Year of Establishment',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#2563eb]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      ),
      value: '3630478',
      label: 'CBSE Affiliation No.',
    },
    {
      icon: <Users className="w-8 h-8 text-[#e31e24]" />,
      value: '1:25',
      label: 'Teacher-Student Ratio',
    },
    {
      icon: <Star className="w-8 h-8 text-[#eab308] fill-[#eab308]" />,
      value: '5',
      label: 'Core Pillars',
    },
  ]

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-12">
      <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-100 py-6 sm:py-8 px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${
                index > 1 ? 'pt-6 md:pt-0' : index === 1 ? 'max-md:pt-0' : ''
              }`}
            >
              {/* Icon Container */}
              <div className="mb-2 sm:mb-2.5 flex items-center justify-center">
                {item.icon}
              </div>

              {/* Number Value */}
              <span className="text-2xl sm:text-3xl font-extrabold text-[#031c3f] tracking-tight">
                {item.value}
              </span>

              {/* Label */}
              <span className="text-[14px] text-slate-700 font-medium mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
