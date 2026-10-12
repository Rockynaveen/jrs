'use client'

import React from 'react'
import {
  Users,
  FileText,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  CreditCard,
  ChevronRight,
} from 'lucide-react'

export default function AdmissionsJourney() {
  const steps = [
    {
      step: 1,
      title: 'Meet Admission Officer',
      description: 'Get guidance and know more about the school.',
      icon: Users,
    },
    {
      step: 2,
      title: 'Obtain Application Form',
      description: 'Collect and fill the application form.',
      icon: FileText,
    },
    {
      step: 3,
      title: 'Registration',
      description: 'Submit the completed form and required documents.',
      icon: ClipboardCheck,
    },
    {
      step: 4,
      title: 'Admission / Competency Test',
      description: "Assess the student's academic readiness (online/test).",
      icon: GraduationCap,
    },
    {
      step: 5,
      title: 'Personal Interaction',
      description: 'An informal interaction with the pupil and both parents.',
      icon: HeartHandshake,
    },
    {
      step: 6,
      title: 'Fee Payment',
      description: 'Complete the admission process by paying the fees.',
      icon: CreditCard,
    },
  ]

  return (
    <section className="py-20 sm:py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#dc2626] block mb-2">
            ADMISSION PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031c3f] tracking-tight">
            Your <span className="text-[#dc2626]">Admission Journey</span>
          </h2>
          <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            A simple and transparent process to welcome your child to JRS.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="relative flex flex-col items-center group"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                {/* Step Number Circle */}
                <div className="w-10 h-10 rounded-full bg-[#031c3f] text-white font-bold text-sm flex items-center justify-center shadow-md mb-4 group-hover:scale-110 group-hover:bg-[#dc2626] transition-all duration-200 z-10">
                  {item.step}
                </div>

                {/* Step Card */}
                <div className="w-full bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col items-center text-center h-full group-hover:-translate-y-1 relative">
                  {/* Subtle top indicator curve */}
                  <div className="w-8 h-1 rounded-full bg-slate-200 group-hover:bg-[#dc2626] mb-4 transition-colors duration-200" />

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-red-50 flex items-center justify-center mb-3 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-[#031c3f] group-hover:text-[#dc2626] transition-colors duration-200" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-900 text-sm sm:text-[15px] leading-snug min-h-[40px] flex items-center justify-center">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Connecting arrow indicator for large screens (between steps 1 to 5) */}
                {index < 5 && (
                  <div className="hidden lg:block absolute -right-3 top-5 text-slate-300 z-0 pointer-events-none">
                    <ChevronRight className="w-5 h-5 text-slate-300 stroke-[2]" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
