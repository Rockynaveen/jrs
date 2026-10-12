'use client'

import React from 'react'
import {
  Sparkles,
  ClipboardCheck,
  Users,
  FileText,
  CheckCircle2,
} from 'lucide-react'

export default function AdmissionsKeyInfo() {
  const guidelines = [
    {
      id: 'nursery',
      num: '01',
      badge: 'Early Years (Age 2+)',
      badgeClass:
        'bg-red-50 text-[#dc2626] border-red-200/80 group-hover:bg-red-100/80',
      topBar: 'bg-gradient-to-r from-[#dc2626] to-[#ef4444]',
      hoverBorder: 'hover:border-[#dc2626]/50',
      hoverShadow: 'hover:shadow-xl hover:shadow-red-500/10',
      hoverBg: 'hover:bg-gradient-to-br hover:from-white hover:to-red-50/20',
      icon: Sparkles,
      iconDefault: 'bg-red-50 text-[#dc2626]',
      iconHover:
        'group-hover:bg-[#dc2626] group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/30 group-hover:scale-110',
      titleHover: 'group-hover:text-[#dc2626]',
      numHover: 'group-hover:text-red-200/70',
      title: 'Nursery Admission',
      description:
        'You can apply for a place in our Nursery by filling in an application form available from the school office or online. Children are admitted to Nursery the term after their second birthday.',
      keyPoints: [
        'Proof of address & birth certificate required',
        'Campus visits welcome to meet our caring staff',
      ],
    },
    {
      id: 'clt',
      num: '02',
      badge: 'Grades 1 to 12',
      badgeClass:
        'bg-blue-50 text-[#031c3f] border-blue-200/80 group-hover:bg-blue-100/80',
      topBar: 'bg-gradient-to-r from-[#031c3f] via-[#1d4ed8] to-[#2563eb]',
      hoverBorder: 'hover:border-[#2563eb]/50',
      hoverShadow: 'hover:shadow-xl hover:shadow-blue-600/10',
      hoverBg: 'hover:bg-gradient-to-br hover:from-white hover:to-blue-50/20',
      icon: ClipboardCheck,
      iconDefault: 'bg-blue-50 text-[#031c3f]',
      iconHover:
        'group-hover:bg-[#031c3f] group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-900/30 group-hover:scale-110',
      titleHover: 'group-hover:text-[#1d4ed8]',
      numHover: 'group-hover:text-blue-200/70',
      title: 'Competency Level Test (CLT)',
      description:
        'Applicants seeking admission to Grades 1 to 12 will be required to appear for a Competency Level Test (CLT).',
      highlight:
        'The sole purpose of CLT is to rightly assess the grade for which the child is eligible rather than to grant or refuse admission.',
    },
    {
      id: 'allocation',
      num: '03',
      badge: 'Fair & Transparent',
      badgeClass:
        'bg-blue-50 text-[#031c3f] border-blue-200/80 group-hover:bg-blue-100/80',
      topBar: 'bg-gradient-to-r from-[#031c3f] via-[#1d4ed8] to-[#2563eb]',
      hoverBorder: 'hover:border-[#2563eb]/50',
      hoverShadow: 'hover:shadow-xl hover:shadow-blue-600/10',
      hoverBg: 'hover:bg-gradient-to-br hover:from-white hover:to-blue-50/20',
      icon: Users,
      iconDefault: 'bg-blue-50 text-[#031c3f]',
      iconHover:
        'group-hover:bg-[#031c3f] group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-900/30 group-hover:scale-110',
      titleHover: 'group-hover:text-[#1d4ed8]',
      numHover: 'group-hover:text-blue-200/70',
      title: 'Seat Allocation & Waitlist Policy',
      description:
        'Admission will be offered only on a first-come, first-served basis. If no seats are available at the time the application is received, the applicant will be placed on the waitlist.',
      keyPoints: [
        'Offered strictly on a first-come, first-served basis',
        'Parents/Guardians notified promptly once a seat opens',
      ],
    },
    {
      id: 'appeals',
      num: '04',
      badge: 'Guidance & Appeals',
      badgeClass:
        'bg-red-50 text-[#dc2626] border-red-200/80 group-hover:bg-red-100/80',
      topBar: 'bg-gradient-to-r from-[#dc2626] to-[#ef4444]',
      hoverBorder: 'hover:border-[#dc2626]/50',
      hoverShadow: 'hover:shadow-xl hover:shadow-red-500/10',
      hoverBg: 'hover:bg-gradient-to-br hover:from-white hover:to-red-50/20',
      icon: FileText,
      iconDefault: 'bg-red-50 text-[#dc2626]',
      iconHover:
        'group-hover:bg-[#dc2626] group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/30 group-hover:scale-110',
      titleHover: 'group-hover:text-[#dc2626]',
      numHover: 'group-hover:text-red-200/70',
      title: 'Admissions Appeals & Support',
      description:
        'Information on admissions appeals and procedural guidelines is readily available from the school office. Our team is here to assist you at every stage of the application.',
      keyPoints: [
        'Appeals assistance available at school office',
        'Transparent review and parent guidance',
      ],
    },
  ]

  return (
    <section className="py-10 bg-slate-50/80 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10" data-aos="fade-up">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#dc2626] block mb-2">
            ADMISSION ARRANGEMENTS & POLICY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031c3f] tracking-tight leading-tight">
            Admission Criteria & Guidelines
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Essential guidelines for parents applying to Nursery and Grades 1 through 12, designed to ensure a fair, supportive, and child-centered enrollment process.
          </p>
        </div>

        {/* 4 Cards Grid: 2 Cards per Row with dynamic hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
          {guidelines.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className={`group relative bg-white rounded-2xl p-5 sm:p-7 shadow-sm border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 ${item.hoverBorder} ${item.hoverShadow} ${item.hoverBg} overflow-hidden flex flex-col justify-between`}
              >
                {/* Colored Top Accent Stripe that expands on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all duration-300 ${item.topBar}`}
                />

                {/* Subtle Ghost Number Watermark */}
                <span
                  className={`absolute top-4 right-5 text-3xl sm:text-4xl font-black text-slate-100/90 ${item.numHover} select-none pointer-events-none transition-colors duration-300`}
                >
                  {item.num}
                </span>

                <div className="flex items-start gap-3.5 sm:gap-4 relative z-10">
                  {/* Icon with Hover Pop Effect */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ${item.iconDefault} ${item.iconHover}`}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                  </div>

                  <div className="flex-1 space-y-2 sm:space-y-2.5 pr-2 sm:pr-8">
                    {/* Badge and Title */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors duration-300 ${item.badgeClass}`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold text-[#031c3f] transition-colors duration-300 ${item.titleHover}`}
                    >
                      {item.title}
                    </h3>

                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlight Box if present */}
                    {item.highlight && (
                      <div className="bg-blue-50/70 border border-blue-100/90 rounded-xl p-3 text-xs text-blue-950 leading-relaxed font-medium transition-colors duration-300 group-hover:bg-blue-50 group-hover:border-blue-200">
                        <span className="font-bold text-[#031c3f]">Note: </span>
                        {item.highlight}
                      </div>
                    )}

                    {/* Bullet points if present */}
                    {item.keyPoints && (
                      <ul className="space-y-1.5 pt-1">
                        {item.keyPoints.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-center gap-2 text-xs text-slate-600 font-medium"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
