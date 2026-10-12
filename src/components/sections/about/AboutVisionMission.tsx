'use client'

import React from 'react'
import { Eye, Rocket } from 'lucide-react'

export default function AboutVisionMission() {
  return (
    <section id="vision-mission" className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: OUR VISION */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-stretch">
            {/* Content Area (Left on Desktop, Below on Mobile) */}
            <div className="w-full sm:w-[58%] lg:w-[60%] xl:w-[58%] p-6 sm:p-7 xl:p-8 flex flex-col justify-between shrink-0">
              <div>
                {/* Red Eyebrow Tag */}
                <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#e31e24] block">
                  OUR VISION
                </span>

                {/* Main Heading */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#031c3f] leading-snug tracking-tight mt-2 sm:mt-2.5">
                  To be a foremost learning institution in Hyderabad.
                </h3>

                {/* Description Paragraph */}
                <p className="text-slate-700 text-[13.5px] sm:text-[14px] leading-relaxed mt-2.5 sm:mt-3">
                  To create a nurturing environment where every student can learn, explore, innovate and lead, becoming confident individuals who contribute positively to society.
                </p>
              </div>

              {/* Bottom Red Circular Action/Badge Icon */}
              <div className="pt-5 sm:pt-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e31e24] text-white flex items-center justify-center shadow-lg shadow-red-500/30 hover:scale-110 active:scale-95 transition-all duration-200">
                  <Eye className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* Photo Column: Sibling column (Top on Mobile, Right on Desktop - NEVER overlaps text) */}
            <div className="relative w-full sm:w-[42%] lg:w-[40%] xl:w-[42%] h-48 sm:h-auto min-h-[190px] sm:min-h-full overflow-hidden shrink-0 order-first sm:order-last">
              <img
                src="/images/vision-student.jpg"
                alt="JRS International School Student Learning"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle edge blend */}
              <div className="hidden sm:block absolute inset-y-0 left-0 w-8 lg:w-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              <div className="sm:hidden absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Card 2: OUR MISSION */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-stretch">
            {/* Content Area (Left on Desktop, Below on Mobile) */}
            <div className="w-full sm:w-[58%] lg:w-[60%] xl:w-[58%] p-6 sm:p-7 xl:p-8 flex flex-col justify-between shrink-0">
              <div>
                {/* Red Eyebrow Tag */}
                <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#e31e24] block">
                  OUR MISSION
                </span>

                {/* Main Heading */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#031c3f] leading-snug tracking-tight mt-2 sm:mt-2.5">
                  Education Beyond the Classroom.
                </h3>

                {/* Description Paragraph */}
                <p className="text-slate-700 text-[13.5px] sm:text-[14px] leading-relaxed mt-2.5 sm:mt-3">
                  To provide a balanced education combining academic excellence, human values, creativity, innovation and real-world skills, preparing every child for a brighter future.
                </p>
              </div>

              {/* Bottom Red Circular Action/Badge Icon */}
              <div className="pt-5 sm:pt-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e31e24] text-white flex items-center justify-center shadow-lg shadow-red-500/30 hover:scale-110 active:scale-95 transition-all duration-200">
                  <Rocket className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* Photo Column: Sibling column (Top on Mobile, Right on Desktop - NEVER overlaps text) */}
            <div className="relative w-full sm:w-[42%] lg:w-[40%] xl:w-[42%] h-48 sm:h-auto min-h-[190px] sm:min-h-full overflow-hidden shrink-0 order-first sm:order-last">
              <img
                src="/images/mission-students.jpg"
                alt="JRS International School Students in Computer Lab"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
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
