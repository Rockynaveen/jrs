'use client'

import React from 'react'
import {
  ShieldCheck,
  Video,
  Users,
  CalendarCheck,
  MessagesSquare,
} from 'lucide-react'

export default function AdmissionsEnvironment() {
  const safetyFeatures = [
    {
      title: 'Regular Hygiene Checks',
      description: 'Hygiene is regularly checked by the administration and principal.',
      icon: ShieldCheck,
    },
    {
      title: 'CCTV Surveillance',
      description: 'CCTV cameras are installed in classrooms for enhanced safety.',
      icon: Video,
    },
    {
      title: 'Student Supervision',
      description: 'Students are always accompanied by teachers or class mentors.',
      icon: Users,
    },
    {
      title: 'Parent-Teacher Meetings',
      description: "PTMs are conducted after each term's assessment.",
      icon: CalendarCheck,
    },
    {
      title: 'Meet Teachers',
      description: 'Parents can meet teachers by prior appointment to discuss their child’s growth and progress.',
      icon: MessagesSquare,
    },
  ]

  return (
    <section className="py-20 sm:py-24 bg-[#031c3f] text-white overflow-hidden relative">
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 mb-3">
            <span>CAMPUS SAFETY & CARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Safe, Supportive <span className="text-[#facc15]">School Environment</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            We ensure a secure, hygienic and caring environment for every child.
          </p>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {safetyFeatures.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
                data-aos="fade-up"
                data-aos-delay={idx * 70}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-amber-400/20 flex items-center justify-center shrink-0 mb-4 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-[#facc15] group-hover:text-amber-200 transition-colors duration-200" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-[15px] leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
