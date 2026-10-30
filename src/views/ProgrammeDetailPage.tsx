'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos'
import {
  Check,
  ArrowRight,
  Sparkles,
  Baby,
  Users,
  Heart,
  CheckCircle2,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import SchoolImage from '@/components/common/SchoolImage'
import { AcademicProgrammeItem, ProgrammeIconName } from '@/data/academicProgrammes'

const iconMap: Record<ProgrammeIconName, React.ComponentType<{ className?: string }>> = {
  baby: Baby,
  users: Users,
  sparkles: Sparkles,
  heart: Heart,
}

interface ProgrammeDetailPageProps {
  programme: AcademicProgrammeItem
}

export default function ProgrammeDetailPage({ programme }: ProgrammeDetailPageProps) {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  const ProgIcon = iconMap[programme.iconName] || Baby

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar activePage="academics" />

      <main className="flex-1">
        {/* 2. Hero Section (70vh, matching remaining pages design) */}
        <PageHero
          breadcrumb="Academic Journey"
          title={programme.heroTitle}
          titleHighlight={programme.heroHighlight}
          titleStyle={{ lineHeight: '52px' }}
          titleClassName="leading-[52px] sm:leading-[52px] lg:leading-[52px]"
          subtitle={programme.ageBadge}
          description={programme.description}
          descriptionStyle={{ lineHeight: '26px' }}
          descriptionClassName="leading-[26px] sm:leading-[26px]"
          imageSrc={programme.image}
          imageAlt={programme.title}
          primaryButton={{
            text: 'Apply for Admission',
            href: '/admissions',
          }}
          secondaryButton={{
            text: 'All Programmes',
            href: '/academics#programmes',
          }}
        />

        {/* 3. Detailed Programme Section: Left Side Content & Right Side Image */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Left Side Content */}
              <div className="lg:col-span-7" data-aos="fade-right">
                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-8 h-[2px] bg-[#031c3f]" />
                  <span
                    style={{ fontSize: '13px', lineHeight: '23px' }}
                    className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]"
                  >
                    ACADEMIC JOURNEY • {programme.ageBadge}
                  </span>
                </div>

                {/* Main Heading */}
                <h2
                  style={{ fontSize: '38px', lineHeight: '48px' }}
                  className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#031c3f] tracking-tight leading-[48px] sm:leading-[48px] lg:leading-[48px] mb-5"
                >
                  {programme.title}{' '}
                  <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>
                    Curriculum
                  </span>
                </h2>

                {/* Full Details Paragraphs */}
                <div className="space-y-4 mb-8">
                  {programme.fullDetails.map((para, i) => (
                    <p
                      key={i}
                      style={{ fontSize: '15px', lineHeight: '25px' }}
                      className={
                        i === 0
                          ? 'text-slate-800 text-[15px] leading-[25px] font-medium border-l-4 border-[#e31e24] pl-4 py-1'
                          : 'text-[#111] text-[15px] leading-[25px]'
                      }
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Curriculum & Learning Highlights */}
                {programme.highlights && programme.highlights.length > 0 && (
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-[#031c3f] font-bold text-xs uppercase tracking-wider">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e31e24]" />
                      <span style={{ fontSize: '13px', lineHeight: '23px' }}>
                        Curriculum & Learning Highlights
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {programme.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-red-200/80 transition-all duration-200"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#feecee] text-[#e31e24] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span
                            style={{ fontSize: '13.5px', lineHeight: '23.5px' }}
                            className="text-[13.5px] text-[#111] leading-snug font-medium"
                          >
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/25 transition-all duration-200 active:scale-95"
                  >
                    <span>Apply for Admission</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/academics#programmes"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-[#111] hover:text-[#031c3f] bg-slate-100 hover:bg-slate-200/80 transition-colors"
                  >
                    <span>View All Programmes</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Right Side Image */}
              <div className="lg:col-span-5" data-aos="fade-left">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Card Container */}
                  <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl group">
                    {/* Programme Image Frame */}
                    <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-slate-100">
                      <SchoolImage
                        src={programme.image}
                        alt={programme.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        fallbackText={programme.title}
                        fallbackBg="from-slate-200 to-slate-300"
                      />

                      {/* Cinematic Gradient Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#031c3f] via-[#031c3f]/40 to-transparent pointer-events-none" />

                      {/* Floating Badge in Bottom Overlay */}
                      <div className="absolute bottom-5 inset-x-5 z-10 flex items-end gap-3.5">
                        <div
                          style={{ backgroundColor: 'rgb(6, 60, 163)' }}
                          className="w-12 h-12 rounded-2xl text-white shadow-lg border-2 border-white flex items-center justify-center shrink-0"
                        >
                          <ProgIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e31e24] text-white shadow-sm shadow-red-600/30 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            {programme.ageBadge}
                          </span>
                          <h3 className="text-xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                            {programme.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Image Footer Details */}
                    <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-[#111]">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Interactive Montessori Methods</span>
                      </div>
                      <span className="text-[11px] font-medium text-[#111]">JRS Campus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
