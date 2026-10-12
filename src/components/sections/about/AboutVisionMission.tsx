'use client'

import React from 'react'
import { Eye, Rocket } from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

export default function AboutVisionMission() {
  return (
    <section id="vision-mission" className="py-[50px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: OUR VISION */}
          <div
            data-aos="fade-up"
            className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-stretch group"
          >
            {/* Content Area */}
            <div className="w-full sm:w-[58%] lg:w-[60%] xl:w-[58%] p-6 sm:p-7 xl:p-8 flex flex-col justify-between shrink-0">
              <div>
                {/* Standardized Eyebrow with Symmetrical Accent Lines */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-6 h-[2px] bg-[#e31e24]" />
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
                    OUR VISION
                  </span>
                  <span className="w-6 h-[2px] bg-[#e31e24]" />
                </div>

                {/* Main Heading */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#031c3f] leading-snug tracking-tight mt-1">
                  To be a foremost learning institution in Hyderabad.
                </h3>

                {/* Description Paragraph */}
                <p className="text-slate-700 text-[14px] sm:text-[15px] lg:text-[16px] lg:leading-[26px] mt-2.5 sm:mt-3">
                  To create a nurturing environment where every student can learn, explore, innovate and lead, becoming confident individuals who contribute positively to society.
                </p>
              </div>

              {/* Bottom Red Circular Action/Badge Icon */}
              <div className="pt-5 sm:pt-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e31e24] text-white flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:scale-110 active:scale-95 transition-all duration-200">
                  <Eye className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* Photo Column */}
            <div className="relative w-full sm:w-[42%] lg:w-[40%] xl:w-[42%] h-56 sm:h-auto min-h-[200px] sm:min-h-full overflow-hidden shrink-0 order-first sm:order-last bg-slate-100">
              <SchoolImage
                src="/images/library.jpg"
                alt="JRS International School Students in Library"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                fallbackText="JRS Library"
                fallbackBg="from-slate-100 via-blue-50 to-slate-200"
              />
              {/* Subtle edge blend */}
              <div className="hidden sm:block absolute inset-y-0 left-0 w-8 lg:w-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              <div className="sm:hidden absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Card 2: OUR MISSION */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-stretch group"
          >
            {/* Content Area */}
            <div className="w-full sm:w-[58%] lg:w-[60%] xl:w-[58%] p-6 sm:p-7 xl:p-8 flex flex-col justify-between shrink-0">
              <div>
                {/* Standardized Eyebrow with Symmetrical Accent Lines */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-6 h-[2px] bg-[#e31e24]" />
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
                    OUR MISSION
                  </span>
                  <span className="w-6 h-[2px] bg-[#e31e24]" />
                </div>

                {/* Main Heading */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#031c3f] leading-snug tracking-tight mt-1">
                  Education Beyond the Classroom.
                </h3>

                {/* Description Paragraph */}
                <p className="text-slate-700 text-[14px] sm:text-[15px] lg:text-[16px] lg:leading-[26px] mt-2.5 sm:mt-3">
                  To provide a balanced education combining academic excellence, human values, creativity, innovation and real-world skills, preparing every child for a brighter future.
                </p>
              </div>

              {/* Bottom Red Circular Action/Badge Icon */}
              <div className="pt-5 sm:pt-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e31e24] text-white flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:scale-110 active:scale-95 transition-all duration-200">
                  <Rocket className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* Photo Column */}
            <div className="relative w-full sm:w-[42%] lg:w-[40%] xl:w-[42%] h-56 sm:h-auto min-h-[200px] sm:min-h-full overflow-hidden shrink-0 order-first sm:order-last bg-slate-100">
              <SchoolImage
                src="/images/science-lab.jpg"
                alt="JRS International School Students in Science Laboratory"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                fallbackText="JRS Science Lab"
                fallbackBg="from-slate-100 via-blue-50 to-slate-200"
              />
              {/* Subtle edge blend */}
              <div className="hidden sm:block absolute inset-y-0 left-0 w-8 lg:w-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              <div className="sm:hidden absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
