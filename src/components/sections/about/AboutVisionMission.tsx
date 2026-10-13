'use client'

import React from 'react'
import { Eye, Rocket } from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

export default function AboutVisionMission() {
  return (
    <section id="vision-mission" className="py-[50px] bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: OUR VISION */}
          <div
            data-aos="fade-up"
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.16)] transition-all duration-300 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between group"
          >
            {/* Full Background Image */}
            <div className="absolute inset-0 z-0">
              <SchoolImage
                src="/images/library.jpg"
                alt="JRS International School Students in Library"
                className="w-full h-full object-cover object-center sm:object-right transform group-hover:scale-105 transition-transform duration-700 ease-out"
                fallbackText="JRS Library"
                fallbackBg="from-slate-900 to-[#031c3f]"
              />
              {/* Dark Gradient Overlay for Text Visibility: Heavy dark on text side (left), fading toward right to showcase the photo */}
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#031c3f]/95 via-[#031c3f]/85 via-55% to-[#031c3f]/25 pointer-events-none" />
              {/* Mobile overlay protecting text readability */}
              <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-[#031c3f]/95 via-[#031c3f]/85 to-[#031c3f]/50 pointer-events-none" />
            </div>

            {/* Content Area on the Text Side */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 xl:p-10 flex flex-col justify-between h-full max-w-full sm:max-w-[72%] lg:max-w-[76%] xl:max-w-[70%]">
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
                <h3 className="text-xl sm:text-2xl lg:text-[25px] font-extrabold text-white leading-snug tracking-tight mt-1">
                  To be a foremost learning institution in Hyderabad.
                </h3>

                {/* Description Paragraph */}
                <p className="text-slate-200 text-[14px] sm:text-[15px] lg:text-[16px] lg:leading-[26px] mt-2.5 sm:mt-3 leading-relaxed">
                  To create a nurturing environment where every student can learn, explore, innovate and lead, becoming confident individuals who contribute positively to society.
                </p>
              </div>

              {/* Bottom Red Circular Action/Badge Icon */}
              <div className="pt-6 sm:pt-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e31e24] text-white flex items-center justify-center shadow-lg shadow-red-500/40 group-hover:scale-110 active:scale-95 transition-all duration-300">
                  <Eye className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: OUR MISSION */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.16)] transition-all duration-300 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between group"
          >
            {/* Full Background Image */}
            <div className="absolute inset-0 z-0">
              <SchoolImage
                src="/images/science-lab.jpg"
                alt="JRS International School Students in Science Laboratory"
                className="w-full h-full object-cover object-center sm:object-right transform group-hover:scale-105 transition-transform duration-700 ease-out"
                fallbackText="JRS Science Lab"
                fallbackBg="from-slate-900 to-[#031c3f]"
              />
              {/* Dark Gradient Overlay for Text Visibility: Heavy dark on text side (left), fading toward right to showcase the photo */}
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#031c3f]/95 via-[#031c3f]/85 via-55% to-[#031c3f]/25 pointer-events-none" />
              {/* Mobile overlay protecting text readability */}
              <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-[#031c3f]/95 via-[#031c3f]/85 to-[#031c3f]/50 pointer-events-none" />
            </div>

            {/* Content Area on the Text Side */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 xl:p-10 flex flex-col justify-between h-full max-w-full sm:max-w-[72%] lg:max-w-[76%] xl:max-w-[70%]">
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
                <h3 className="text-xl sm:text-2xl lg:text-[25px] font-extrabold text-white leading-snug tracking-tight mt-1">
                  Education Beyond the Classroom.
                </h3>

                {/* Description Paragraph */}
                <p className="text-slate-200 text-[14px] sm:text-[15px] lg:text-[16px] lg:leading-[26px] mt-2.5 sm:mt-3 leading-relaxed">
                  To provide a balanced education combining academic excellence, human values, creativity, innovation and real-world skills, preparing every child for a brighter future.
                </p>
              </div>

              {/* Bottom Red Circular Action/Badge Icon */}
              <div className="pt-6 sm:pt-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e31e24] text-white flex items-center justify-center shadow-lg shadow-red-500/40 group-hover:scale-110 active:scale-95 transition-all duration-300">
                  <Rocket className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
