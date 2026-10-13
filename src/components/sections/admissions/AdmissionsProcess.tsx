'use client'

import React from 'react'
import {
  Users,
  FileText,
  UserCheck,
  FileEdit,
  MessagesSquare,
  CreditCard,
} from 'lucide-react'

export default function AdmissionsProcess() {
  const steps = [
    {
      step: '01',
      isEven: false,
      title: 'Meet the Admission Officer',
      description:
        'Visit the school campus and meet our admission officer for guidance.',
      icon: <Users className="w-9 h-9 text-[#031c3f] stroke-[1.8]" />,
    },
    {
      step: '02',
      isEven: true,
      title: 'Procure the Application Form',
      description:
        'Collect the application form from the school or download it as provided.',
      icon: <FileText className="w-9 h-9 text-[#e31e24] stroke-[1.8]" />,
    },
    {
      step: '03',
      isEven: false,
      title: 'Register With Us',
      description:
        'Submit the completed application form with the required details.',
      icon: <UserCheck className="w-9 h-9 text-[#031c3f] stroke-[1.8]" />,
    },
    {
      step: '04',
      isEven: true,
      title: 'Appear For The Admission Test',
      description:
        'The student needs to appear for the admission test as per the grade.',
      icon: <FileEdit className="w-9 h-9 text-[#e31e24] stroke-[1.8]" />,
    },
    {
      step: '05',
      isEven: false,
      title: 'Appear For The Personal Interview',
      description:
        'The student and parents may be called for a personal interview.',
      icon: <MessagesSquare className="w-9 h-9 text-[#031c3f] stroke-[1.8]" />,
    },
    {
      step: '06',
      isEven: true,
      title: 'Pay Fee',
      description:
        'Upon selection, complete the fee payment to confirm admission.',
      icon: <CreditCard className="w-9 h-9 text-[#e31e24] stroke-[1.8]" />,
    },
  ]

  return (
    <section id="admission-process" className="py-[50px] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow: — STEPS OF — */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#e31e24]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
              STEPS OF
            </span>
            <span className="w-8 h-[2px] bg-[#e31e24]" />
          </div>

          <h2
            style={{ lineHeight: '52px' }}
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[52px] sm:leading-[52px] lg:leading-[52px]"
          >
            Admission <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Process</span>
          </h2>
          <p className="text-slate-600 text-[14px] sm:text-[15px] font-normal mt-2.5 max-w-xl mx-auto">
            Follow these simple steps to complete the admission process at JRS.
          </p>
        </div>

        {/* Desktop 6-Step Visual Stepper with Horizontal Connector Bar */}
        <div className="hidden lg:block">
          {/* Horizontal Timeline Connector Bar */}
          <div className="grid grid-cols-6 gap-3.5 xl:gap-5 relative mb-0">
            {/* Continuous horizontal connecting line spanning from column 1 center to column 6 center */}
            <div className="absolute top-[6px] left-[8.33%] right-[8.33%] h-[1.5px] bg-slate-300/80 z-0" />

            {steps.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center relative z-10">
                {/* Circle dot node on the horizontal line */}
                <div
                  className={`w-3.5 h-3.5 rounded-full ${
                    item.isEven ? 'bg-[#e31e24]' : 'bg-[#031c3f]'
                  } border-2 border-white shadow-xs`}
                />
                {/* Vertical line connecting down to the card */}
                <div className="w-[1.5px] h-6 bg-slate-300/80" />
              </div>
            ))}
          </div>

          {/* 6 Step Cards Grid */}
          <div className="grid grid-cols-6 gap-3.5 xl:gap-5 items-stretch">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 p-4 xl:p-5 pt-5 pb-6 flex flex-col items-center text-center overflow-hidden h-full group"
              >
                {/* Top-Left Corner Accent Swoop */}
                <div className="absolute top-0 left-0 w-12 xl:w-14 h-12 xl:h-14 pointer-events-none z-10">
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
                  className={`w-9 h-9 rounded-full ${
                    item.isEven ? 'bg-[#e31e24]' : 'bg-[#031c3f]'
                  } text-white text-xs font-black flex items-center justify-center shadow-xs mb-4 border-2 border-white relative z-10 group-hover:scale-105 transition-transform`}
                >
                  {item.step}
                </div>

                {/* Icon */}
                <div className="mb-3.5 flex items-center justify-center h-12 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[14px] xl:text-[15px] font-bold text-[#031c3f] leading-snug min-h-[42px] flex items-center justify-center">
                  {item.title}
                </h3>

                {/* Accent Divider Dash */}
                <div
                  className={`w-6 h-[2px] ${
                    item.isEven ? 'bg-[#e31e24]' : 'bg-[#031c3f]'
                  } rounded-full my-2.5 mx-auto`}
                />

                {/* Description */}
                <p className="text-slate-600 text-[12px] xl:text-[12.5px] leading-[18px] xl:leading-[19px] font-normal flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Mobile Layout: Responsive Grid Cards with Matching Aesthetics */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300 p-5 pt-6 pb-6 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Top-Left Corner Accent Swoop */}
              <div className="absolute top-0 left-0 w-14 h-14 pointer-events-none z-10">
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
                className={`w-9 h-9 rounded-full ${
                  item.isEven ? 'bg-[#e31e24]' : 'bg-[#031c3f]'
                } text-white text-xs font-black flex items-center justify-center shadow-xs mb-3.5 border-2 border-white relative z-10`}
              >
                {item.step}
              </div>

              {/* Icon */}
              <div className="mb-3 flex items-center justify-center h-12">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-bold text-[#031c3f] leading-snug">
                {item.title}
              </h3>

              {/* Accent Divider Dash */}
              <div
                className={`w-6 h-[2px] ${
                  item.isEven ? 'bg-[#e31e24]' : 'bg-[#031c3f]'
                } rounded-full my-2.5 mx-auto`}
              />

              {/* Description */}
              <p className="text-slate-600 text-[13px] leading-[20px] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
