'use client'

import React from 'react'
import {
  FileText,
  UserCheck,
  FileEdit,
  MessagesSquare,
  CreditCard,
  GraduationCap,
} from 'lucide-react'

export default function AdmissionsProcess() {
  const steps = [
    {
      step: '01',
      title: 'Meet the Admission Officer',
      description:
        'Visit the school campus and meet our admission officer for guidance.',
      bgGradient: 'from-[#031c3f] to-[#081730]',
      badgeBg: 'bg-[#031c3f]',
      icon: (
        <svg
          className="w-14 h-14 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Two people sitting at table */}
          <circle cx="6" cy="6" r="2.5" />
          <path d="M2 15v-1a4 4 0 0 1 4-4h2" />
          <circle cx="18" cy="6" r="2.5" />
          <path d="M22 15v-1a4 4 0 0 0-4-4h-2" />
          <rect x="8" y="11" width="8" height="5" rx="1" />
          <line x1="9" y1="16" x2="9" y2="21" />
          <line x1="15" y1="16" x2="15" y2="21" />
          <line x1="4" y1="18" x2="4" y2="21" />
          <line x1="20" y1="18" x2="20" y2="21" />
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Procure the Application Form',
      description:
        'Collect the application form from the school or download it as provided.',
      bgGradient: 'from-[#dc2626] to-[#b91c1c]',
      badgeBg: 'bg-[#dc2626]',
      icon: <FileText className="w-14 h-14 text-white stroke-[2]" />,
    },
    {
      step: '03',
      title: 'Register with Us',
      description:
        'Submit the completed application form with the required details.',
      bgGradient: 'from-[#031c3f] to-[#081730]',
      badgeBg: 'bg-[#031c3f]',
      icon: <UserCheck className="w-14 h-14 text-white stroke-[2]" />,
    },
    {
      step: '04',
      title: 'Appear for the Admission Test',
      description:
        'The student needs to appear for the admission test as per the grade.',
      bgGradient: 'from-[#dc2626] to-[#b91c1c]',
      badgeBg: 'bg-[#dc2626]',
      icon: <FileEdit className="w-14 h-14 text-white stroke-[2]" />,
    },
    {
      step: '05',
      title: 'Appear for the Personal Interview',
      description:
        'The student and parents may be called for a personal interview.',
      bgGradient: 'from-[#031c3f] to-[#081730]',
      badgeBg: 'bg-[#031c3f]',
      icon: <MessagesSquare className="w-14 h-14 text-white stroke-[2]" />,
    },
    {
      step: '06',
      title: 'Pay Fee',
      description:
        'Upon selection, complete the fee payment to confirm admission.',
      bgGradient: 'from-[#dc2626] to-[#b91c1c]',
      badgeBg: 'bg-[#dc2626]',
      icon: <CreditCard className="w-14 h-14 text-white stroke-[2]" />,
    },
  ]

  return (
    <section id="admission-process" className="py-10 bg-white relative overflow-hidden">
      {/* Subtle Graduation Cap Watermark in Top Right */}
      <div className="absolute top-4 right-6 pointer-events-none opacity-[0.06] select-none hidden md:block">
        <GraduationCap className="w-72 h-72 text-slate-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#dc2626]">
            STEPS OF
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#031c3f] mt-2 tracking-tight">
            ADMISSION <span className="text-[#dc2626]">PROCESS</span>
          </h2>
          <p className="text-slate-700 text-[14px] font-normal mt-3">
            Follow these simple steps to complete the admission process at JRS.
          </p>
        </div>

        {/* Desktop / Large Screen 6-Step Visual Flow */}
        <div className="hidden lg:grid grid-cols-6 gap-3 xl:gap-5 relative">
          {/* Wavy Dashed Connecting Lines Between Steps using Brand Colors */}
          {/* Arrow 1 -> 2 (Arcs High) */}
          <div className="absolute top-5 left-[12%] w-[12%] h-12 pointer-events-none z-0">
            <svg viewBox="0 0 100 40" className="w-full h-full fill-none overflow-visible">
              <path
                d="M 5 28 Q 50 -10 95 18"
                stroke="#dc2626"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <polygon points="98,18 90,13 94,22" fill="#dc2626" />
            </svg>
          </div>

          {/* Arrow 2 -> 3 (Arcs Low) */}
          <div className="absolute top-16 left-[28%] w-[12%] h-12 pointer-events-none z-0">
            <svg viewBox="0 0 100 40" className="w-full h-full fill-none overflow-visible">
              <path
                d="M 5 10 Q 50 42 95 15"
                stroke="#031c3f"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <polygon points="98,15 91,10 93,20" fill="#031c3f" />
            </svg>
          </div>

          {/* Arrow 3 -> 4 (Arcs High) */}
          <div className="absolute top-5 left-[45%] w-[12%] h-12 pointer-events-none z-0">
            <svg viewBox="0 0 100 40" className="w-full h-full fill-none overflow-visible">
              <path
                d="M 5 28 Q 50 -10 95 18"
                stroke="#dc2626"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <polygon points="98,18 90,13 94,22" fill="#dc2626" />
            </svg>
          </div>

          {/* Arrow 4 -> 5 (Arcs Low) */}
          <div className="absolute top-16 left-[62%] w-[12%] h-12 pointer-events-none z-0">
            <svg viewBox="0 0 100 40" className="w-full h-full fill-none overflow-visible">
              <path
                d="M 5 10 Q 50 42 95 15"
                stroke="#031c3f"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <polygon points="98,15 91,10 93,20" fill="#031c3f" />
            </svg>
          </div>

          {/* Arrow 5 -> 6 (Arcs High) */}
          <div className="absolute top-5 left-[78%] w-[12%] h-12 pointer-events-none z-0">
            <svg viewBox="0 0 100 40" className="w-full h-full fill-none overflow-visible">
              <path
                d="M 5 28 Q 50 -10 95 18"
                stroke="#dc2626"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <polygon points="98,18 90,13 94,22" fill="#dc2626" />
            </svg>
          </div>

          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10 group">
              {/* Hexagon Box with Top Badge */}
              <div className="relative pt-4 w-full flex justify-center">
                {/* Number Badge at Top Center */}
                <div
                  className={`absolute top-0 z-20 w-8 h-8 rounded-full ${item.badgeBg} text-white text-xs font-extrabold flex items-center justify-center border-2 border-white shadow-md`}
                >
                  {item.step}
                </div>

                {/* Hexagon Container */}
                <div
                  className={`w-full max-w-[170px] aspect-[1.32/1] bg-gradient-to-br ${item.bgGradient} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}
                  style={{
                    clipPath:
                      'polygon(16% 0%, 84% 0%, 100% 50%, 84% 100%, 16% 100%, 0% 50%)',
                  }}
                >
                  <div className="transform transition-transform duration-200 group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Dotted Vertical Connector Line with Point */}
              <div className="flex flex-col items-center my-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#031c3f]" />
                <div className="w-[1px] h-5 border-l-2 border-dashed border-slate-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#031c3f]" />
              </div>

              {/* Step Title */}
              <h4 className="text-xs sm:text-[14px] font-bold text-[#031c3f] leading-snug px-1">
                {item.title}
              </h4>

              {/* Step Description */}
              <p className="text-[14px] text-slate-700 leading-relaxed mt-2 px-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tablet & Mobile Layout: Responsive 2-Col or 3-Col Cards with Connectors */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50/70 border border-slate-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm"
            >
              {/* Hexagon Icon */}
              <div className="relative pt-3 mb-2">
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 z-20 w-7 h-7 rounded-full ${item.badgeBg} text-white text-[11px] font-extrabold flex items-center justify-center border-2 border-white shadow`}
                >
                  {item.step}
                </div>
                <div
                  className={`w-32 h-24 bg-gradient-to-br ${item.bgGradient} flex items-center justify-center shadow`}
                  style={{
                    clipPath:
                      'polygon(16% 0%, 84% 0%, 100% 50%, 84% 100%, 16% 100%, 0% 50%)',
                  }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <h4 className="text-sm font-bold text-[#031c3f] mt-3 leading-snug">
                {item.title}
              </h4>
              <p className="text-[13px] text-slate-700 leading-relaxed mt-1.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
