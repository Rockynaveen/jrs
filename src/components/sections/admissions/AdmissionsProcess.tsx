'use client'

import React from 'react'
import { GraduationCap } from 'lucide-react'

export default function AdmissionsProcess() {
  const steps = [
    {
      step: '01',
      isEven: false,
      title: 'Meet the Admission HR',
      description:
        'Visit the school campus and meet our HR for guidance.',
      image: '/images/admissions/admission-officer.png',
    },
    {
      step: '02',
      isEven: true,
      title: 'Procure the Application Form',
      description:
        'Collect the application form from the school or download it as provided.',
      image: '/images/admissions/application-form.png',
    },
    {
      step: '03',
      isEven: false,
      title: 'Register With Us',
      description:
        'Submit the completed application form with the required details.',
      image: '/images/admissions/register-student.png',
    },
    {
      step: '04',
      isEven: true,
      title: 'Appear For The Admission Test',
      description:
        'The student needs to appear for the admission test as per the grade.',
      image: '/images/admissions/admission-test.png',
    },
    {
      step: '05',
      isEven: false,
      title: 'Appear For The Personal Interview',
      description:
        'The student and parents may be called for a personal interview.',
      image: '/images/admissions/personal-interview.png',
    },
    {
      step: '06',
      isEven: true,
      title: 'Pay Fee',
      description:
        'Upon selection, complete the fee payment to confirm admission.',
      image: '/images/admissions/pay-fee.png',
    },
  ]

  return (
    <section id="admission-process" className="py-[50px] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow: — STEPS OF — */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#031c3f]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]">
              STEPS OF
            </span>
            <span className="w-8 h-[2px] bg-[#031c3f]" />
          </div>

          <h2
            style={{ lineHeight: '52px' }}
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[52px] sm:leading-[52px] lg:leading-[52px]"
          >
            Admission <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Process</span>
          </h2>
          <p
            style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
            className="text-[#111] text-[14px] font-normal leading-[24px] mt-2.5 max-w-xl mx-auto"
          >
            Follow these simple steps to complete the admission process at JRS.
          </p>
        </div>

        {/* 6 Step Cards Grid: 3 Cards per Row on Large Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 p-6 sm:p-7 pt-6 pb-6 flex flex-col items-center text-center overflow-hidden h-full group"
            >
              {/* Top-Left Corner Accent Swoop */}
              <div className="absolute top-0 left-0 w-14 sm:w-16 h-14 sm:h-16 pointer-events-none z-10">
                <svg
                  viewBox="0 0 56 56"
                  className={`w-full h-full ${item.isEven ? 'text-[#e31e24]' : 'text-[#031c3f]'}`}
                  fill="currentColor"
                >
                  <path d="M 0 0 L 46 0 C 38 18, 18 38, 0 46 Z" />
                </svg>
              </div>

              {/* Number Badge at Top Center */}
              <div
                className={`w-10 h-10 rounded-full ${item.isEven ? 'bg-[#e31e24]' : 'bg-[#031c3f]'
                  } text-white text-xs sm:text-sm font-black flex items-center justify-center shadow-xs mb-4 border-2 border-white relative z-10 group-hover:scale-105 transition-transform`}
              >
                {item.step}
              </div>

              {/* 3D Flat Icon with transparent background */}
              <div className="mb-4 flex items-center justify-center h-20 sm:h-24 w-full">
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="w-18 h-18 sm:w-20 sm:h-20 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)] group-hover:scale-110 transition-transform duration-300 pointer-events-none"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#031c3f] leading-snug min-h-[32px] flex items-center justify-center">
                {item.title}
              </h3>

              {/* Accent Divider Dash */}
              <div
                className={`w-8 h-[2px] ${item.isEven ? 'bg-[#e31e24]' : 'bg-[#031c3f]'
                  } rounded-full my-3 mx-auto`}
              />

              {/* Description */}
              <p
                style={{ fontSize: '14px', fontWeight: 400, lineHeight: '24px' }}
                className="text-[#111] text-[14px] font-normal leading-[24px] flex-1"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
