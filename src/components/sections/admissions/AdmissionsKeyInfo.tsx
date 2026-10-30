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
      icon: Sparkles,
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
      icon: ClipboardCheck,
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
      icon: Users,
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
      icon: FileText,
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
    <section className="py-[50px] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#031c3f]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]">
              ADMISSION ARRANGEMENTS & POLICY
            </span>
            <span className="w-8 h-[2px] bg-[#031c3f]" />
          </div>
          <h2
            style={{ lineHeight: '52px' }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#031c3f] tracking-tight leading-[52px]"
          >
            Admission Criteria & <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Guidelines</span>
          </h2>
          <p
            style={{ lineHeight: '36px' }}
            className="text-slate-600 text-sm sm:text-base mt-3 leading-[36px] max-w-2xl mx-auto"
          >
            Essential guidelines for parents applying to Nursery and Grades 1 through 12, designed to ensure a fair, supportive, and child-centered enrollment process.
          </p>
        </div>

        {/* 4 Cards Grid: 2 Cards per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
          {guidelines.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                className="group relative bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle Ghost Number Watermark */}
                <span
                  className="absolute top-4 right-5 text-3xl sm:text-4xl font-black text-slate-100/90 select-none pointer-events-none"
                >
                  {item.num}
                </span>

                <div className="flex items-start gap-3.5 sm:gap-4 relative z-10">
                  {/* Icon: Logo Blue Background, White Icon */}
                  <div
                    style={{ backgroundColor: '#013aa3' }}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:scale-110 text-white"
                  >
                    <Icon className="w-5 h-5 text-white stroke-[2.2]" />
                  </div>

                  <div className="flex-1 space-y-2 sm:space-y-2.5 pr-2 sm:pr-8">
                    {/* Badge and Title */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-blue-200/80 bg-blue-50 text-[#013aa3]"
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3
                      className="text-base sm:text-lg font-bold text-[#031c3f]"
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{ lineHeight: '24px' }}
                      className="text-slate-700 text-xs sm:text-sm leading-[24px]"
                    >
                      {item.description}
                    </p>

                    {/* Highlight Box if present */}
                    {item.highlight && (
                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-800 leading-relaxed font-medium">
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
                            style={{ fontSize: '14px', fontWeight: 400, lineHeight: '26px' }}
                            className="flex items-start gap-2 text-[13px] text-slate-600 font-normal leading-[26px]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-[6px] transition-transform duration-300 group-hover:scale-110" />
                            <span style={{ fontSize: '14px', fontWeight: 400, lineHeight: '26px' }} className="text-[13px] font-normal leading-[26px]">{pt}</span>
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
