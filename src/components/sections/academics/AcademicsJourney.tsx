'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  Baby,
  Users,
  Sparkles,
  Heart,
  X,
  Check,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

export default function AcademicsJourney() {
  const [activeModal, setActiveModal] = useState<number | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null)
    }
    if (activeModal !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeModal])

  const earlyYearsProgrammes = [
    {
      title: 'Pre-primary Programme',
      ageBadge: 'Early Years',
      description:
        'We have adopted the inquiry and self-research-based Pre-primary program of international quality for the first few and most critical learning years of your child.',
      fullDetails: [
        'We have adopted the inquiry and self-research-based Pre-primary program of international quality for the first few and most critical learning years of your child.',
        'Your child no longer needs to mug up lessons. He/she will know exactly how to apply the knowledge that’s gathered each day.',
      ],
      highlights: [
        'Inquiry and self-research based international methodology',
        'Practical application of concepts with zero rote learning',
        'Sensory-rich exploration and joyful classroom activities',
        'Individual nurturing attention for foundational growth',
      ],
      image: '/images/pre-primary-learning.jpg',
      icon: Baby,
      iconBg: 'bg-rose-100 text-rose-600',
    },
    {
      title: 'Young Buddies',
      ageBadge: 'Age 2.5 to 3.5 years',
      description:
        'We provide experienced and trained staff to help toddlers develop key learning skills through sensory-based learning, healthy habits, and sports activities.',
      fullDetails: [
        'We provide experienced and trained staff to help toddlers develop key learning skills. Sensory-based learning, healthy eating habits, play-based thinking skills, and sports activities are based on this program.',
        'This program boasts about training children to be independent in terms of speech therapy, potty training, self-learning skills, social skills, and self-management. Montessori methods are adopted in teaching.',
      ],
      highlights: [
        'Montessori methods adopted in teaching',
        'Independence in speech therapy, potty training & self-management',
        'Sensory-based learning & healthy eating habits',
        'Play-based thinking skills & active sports activities',
        'Experienced and specially trained early years staff',
      ],
      image: '/images/young-buddies.jpg',
      icon: Users,
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      title: 'Butterflies Programme',
      ageBadge: 'Age 3.5 to 4.5 years',
      description:
        'At this age, children are more willing to learn, share and explore through languages, writing skills, memory-building, and story studios.',
      fullDetails: [
        'At this age, children are more willing to learn, share and explore. Our staff is trained to teach children different languages, and writing skills and engage them in memory-building activities.',
        'Through singing, sports, dancing, and story studios children are encouraged to build their extra-curricular activities. Montessori methods are adopted in teaching.',
      ],
      highlights: [
        'Montessori methods adopted in teaching',
        'Different languages, writing skills & memory-building',
        'Story studios, singing, sports, and dancing',
        'Co-curricular and extra-curricular talent building',
        'Encouraging sharing, active learning, and exploration',
      ],
      image: '/images/butterflies-programme.jpg',
      icon: Sparkles,
      iconBg: 'bg-amber-100 text-amber-600',
    },
    {
      title: 'Honey Bees Programme',
      ageBadge: 'Age 4.5 to 5.5 years',
      description:
        'Just like the hardworking honeybee, children build overall skills through hands-on learning, field trips, reading, writing, and early Math and Science.',
      fullDetails: [
        'Just like the hardworking honeybee, the children are taught to work towards building their overall skills. Hands-on learning experience, field trips, writing abilities, reading capabilities and Math and Science concepts will be taught.',
        'This program aims at preparing the students for primary school learning challenges. Montessori methods are adopted in teaching.',
      ],
      highlights: [
        'Montessori methods adopted in teaching',
        'Hands-on learning experience & educational field trips',
        'Writing abilities & reading capabilities development',
        'Foundational Math and Science conceptual mastery',
        'Comprehensive preparation for primary school challenges',
      ],
      image: '/images/middle-school-students.jpg',
      icon: Heart,
      iconBg: 'bg-blue-100 text-blue-600',
    },
  ]

  const currentProgramme = activeModal !== null ? earlyYearsProgrammes[activeModal] : null


  return (
    <section id="programmes" className="py-12 sm:py-16 bg-[#f8fafc] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Journey Content */}
        <div className="space-y-8" data-aos="fade-up">
            {/* Header with Title and Illustrated Line Art Doodle */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              {/* Illustrated Line Art Doodle: Open Book with Airplane Flying (from screenshot) */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-8 opacity-25 hidden sm:block pointer-events-none">
                <svg
                  width="130"
                  height="80"
                  viewBox="0 0 160 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-900"
                >
                  {/* Open Book Outline */}
                  <path
                    d="M 80 40 C 60 25, 30 25, 10 32 L 10 82 C 30 75, 60 75, 80 90 C 100 75, 130 75, 150 82 L 150 32 C 130 25, 100 25, 80 40 Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 80 40 L 80 90"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Paper Plane */}
                  <path
                    d="M 125 15 L 155 5 L 140 32 L 132 20 Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 155 5 L 132 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  {/* Dashed flight trail */}
                  <path
                    d="M 100 45 C 115 35, 120 28, 128 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                </svg>
              </div>

              <div>
                <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#e31e24] block mb-2">
                  ACADEMIC JOURNEY
                </span>
                <h2
                  style={{ fontSize: '40px', lineHeight: '50px' }}
                  className="text-[40px] sm:text-[40px] lg:text-[40px] font-extrabold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px] max-w-xl"
                >
                  Learning That Goes <span className="text-[#0a2559]" style={{ fontSize: 'inherit', lineHeight: 'inherit' }}>Beyond Textbooks</span>
                </h2>
                <p
                  style={{ fontSize: '16px', lineHeight: '26px' }}
                  className="text-slate-700 text-[16px] sm:text-[16px] leading-[26px] sm:leading-[26px] mt-3 max-w-2xl"
                >
                  We provide a nurturing and stimulating environment where every child is encouraged to explore, question, create and grow at their own pace.
                </p>
              </div>

            </div>

            {/* Academic Programmes Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {earlyYearsProgrammes.map((prog, index) => {
                  const Icon = prog.icon
                  return (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 80}
                      onClick={() => setActiveModal(index)}
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
                            className={`w-11 h-11 rounded-full ${prog.iconBg} shadow-md border-2 border-white flex items-center justify-center transition-transform group-hover:scale-110`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Card Content with aligned rows */}
                      <div className="px-5 pt-8 pb-0 flex flex-col flex-1">
                        {/* Title Row with fixed min-height for uniform alignment */}
                        <div className="min-h-[3rem] flex items-center mb-1">
                          <h3
                            style={{ fontSize: '20px' }}
                            className="text-[20px] sm:text-[20px] font-semibold text-[#031c3f] tracking-tight group-hover:text-blue-900 transition-colors leading-snug"
                          >
                            {prog.title}
                          </h3>
                        </div>

                        {/* Badge Row with uniform height and style */}
                        <div className="h-6 flex items-center mb-2.5">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200/60 uppercase tracking-wider">
                            {prog.ageBadge}
                          </span>
                        </div>

                        {/* Description with fixed min-height */}
                        <p className="text-slate-700 text-[14px] leading-relaxed flex-1 line-clamp-4 min-h-[4.5rem]">
                          {prog.description}
                        </p>

                        {/* Bottom Action Footer pinned neatly */}
                        <div className="py-2 mt-auto border-t border-slate-100 flex items-center justify-between">
                          <span
                            style={{ fontSize: '14px' }}
                            className="text-[14px] font-semibold text-slate-700 group-hover:text-[#0a2559] transition-colors"
                          >
                            Explore details
                          </span>
                          <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-[#0a2559] group-hover:bg-[#0a2559] group-hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-2xs">
                            <ChevronRight className="w-4 h-4 ml-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
        </div>
      </div>

      {/* Interactive Programme Details Modal */}
      {currentProgramme && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100 relative animate-scale-up flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Programme Photo & Gradient Overlay */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900 flex-shrink-0">
              <SchoolImage
                src={currentProgramme.image}
                alt={currentProgramme.title}
                className="w-full h-full object-cover"
                fallbackText={currentProgramme.title}
                fallbackBg="from-[#031c3f] to-[#0a2559]"
              />
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#031c3f] via-[#031c3f]/80 to-black/30 pointer-events-none" />

              {/* Frosted Glass Close Button */}
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer z-10 active:scale-95"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Content at bottom of hero */}
              <div className="absolute bottom-4 left-5 right-5 sm:left-6 sm:right-6 z-10 flex items-end gap-3.5">
                {/* Programme Icon */}
                {(() => {
                  const ProgIcon = currentProgramme.icon
                  return (
                    <div className={`w-12 h-12 rounded-2xl ${currentProgramme.iconBg} shadow-lg border-2 border-white flex items-center justify-center flex-shrink-0`}>
                      <ProgIcon className="w-6 h-6" />
                    </div>
                  )
                })()}

                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 backdrop-blur-sm mb-1.5">
                    <span>{currentProgramme.ageBadge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight drop-shadow-sm">
                    {currentProgramme.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1">
              {/* Detailed Programme Overview */}
              <div className="space-y-3">
                {currentProgramme.fullDetails.map((para, i) => (
                  <p
                    key={i}
                    style={{ fontSize: '15px', lineHeight: '25px' }}
                    className={
                      i === 0
                        ? "text-slate-800 text-[15px] leading-[25px] font-medium border-l-4 border-[#e31e24] pl-3.5 py-1 bg-red-50/40 rounded-r-xl"
                        : "text-slate-600 text-[14px] sm:text-[15px] leading-[25px]"
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Programme Highlights */}
              {currentProgramme.highlights && (
                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-2 text-[#031c3f] font-bold text-xs uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#e31e24]" />
                    <span>Curriculum & Learning Highlights</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {currentProgramme.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 hover:bg-red-50/30 border border-slate-100 transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#feecee] text-[#e31e24] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-[14px] text-slate-700 leading-snug font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Pinned Footer CTA */}
            <div className="px-6 py-4 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                Close
              </button>
              <Link
                href="/admissions"
                onClick={() => setActiveModal(null)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-md shadow-red-600/25 transition-all hover:gap-3 cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
