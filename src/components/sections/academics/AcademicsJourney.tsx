import React from 'react'
import Link from 'next/link'
import { ChevronRight, Baby, Users, Sparkles, Heart } from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'
import { earlyYearsProgrammes, ProgrammeIconName } from '@/data/academicProgrammes'

const iconMap: Record<ProgrammeIconName, React.ComponentType<{ className?: string }>> = {
  baby: Baby,
  users: Users,
  sparkles: Sparkles,
  heart: Heart,
}

export default function AcademicsJourney() {
  return (
    <section id="programmes" className="py-12 sm:py-16 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Journey Content */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[2px] bg-[#031c3f]" />
              <span
                style={{ fontSize: '13px', lineHeight: '23px' }}
                className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]"
              >
                ACADEMIC JOURNEY
              </span>
              <span className="w-8 h-[2px] bg-[#031c3f]" />
            </div>

            <h2
              style={{ fontSize: '40px', lineHeight: '50px' }}
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
            >
              Learning That Goes <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Beyond Textbooks</span>
            </h2>
            <p
              style={{ fontSize: '16px', lineHeight: '26px' }}
              className="text-[#111] text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-[26px]"
            >
              We provide a nurturing and stimulating environment where every child is encouraged to explore, question, create and grow at their own pace.
            </p>
          </div>

          {/* Academic Programmes Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {earlyYearsProgrammes.map((prog, index) => {
              const Icon = iconMap[prog.iconName] || Baby
              return (
                <Link
                  key={prog.slug}
                  href={`/academics/${prog.slug}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full group hover:-translate-y-1 cursor-pointer"
                >
                  {/* Image with Overlapping Icon Badge */}
                  <div className="relative aspect-[16/11] w-full bg-slate-100">
                    <div className="w-full h-full overflow-hidden">
                      <SchoolImage
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        fallbackText={prog.title}
                        fallbackBg="from-slate-100 to-slate-200"
                      />
                    </div>

                    {/* Overlapping Circular Icon Badge in bottom-left */}
                    <div className="absolute -bottom-5 left-5 z-20">
                      <div
                        style={{ backgroundColor: 'rgb(6, 60, 163)' }}
                        className="w-11 h-11 rounded-full text-white shadow-md border-2 border-white flex items-center justify-center transition-transform group-hover:scale-110"
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content with aligned rows */}
                  <div className="px-5 pt-8 pb-0 flex flex-col flex-1">
                    {/* Title Row with fixed min-height for uniform alignment */}
                    <div className="min-h-[3rem] flex items-center mb-1">
                      <h3
                        style={{ fontSize: '20px', lineHeight: '30px' }}
                        className="text-[20px] sm:text-[20px] font-semibold text-[#031c3f] tracking-tight group-hover:text-blue-900 transition-colors leading-[30px]"
                      >
                        {prog.title}
                      </h3>
                    </div>

                    {/* Badge Row with highlighted tag */}
                    <div className="min-h-[28px] flex items-center mb-2.5">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#e31e24] text-white shadow-sm shadow-red-600/30 uppercase tracking-wider"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        {prog.ageBadge}
                      </span>
                    </div>

                    {/* Description with fixed min-height */}
                    <p
                      style={{ fontSize: '14px', lineHeight: '24px' }}
                      className="text-[#111] text-[14px] leading-[24px] flex-1 line-clamp-4 min-h-[4.5rem]"
                    >
                      {prog.description}
                    </p>

                    {/* Bottom Action Footer pinned neatly */}
                    <div className="py-2 mt-auto border-t border-slate-100 flex items-center justify-between">
                      <span
                        style={{ fontSize: '14px', lineHeight: '24px' }}
                        className="text-[14px] font-semibold text-[#111] group-hover:text-[#0a2559] transition-colors leading-[24px]"
                      >
                        Explore details
                      </span>
                      <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-[#0a2559] group-hover:bg-[#0a2559] group-hover:text-white text-[#111] flex items-center justify-center transition-all duration-200 shadow-2xs">
                        <ChevronRight className="w-4 h-4 ml-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
