'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  X,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

export default function AcademicsSection() {
  const [activeCurriculum, setActiveCurriculum] = useState<number | null>(null)

  // Lock scroll when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCurriculum(null)
    }

    if (activeCurriculum !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeCurriculum])

  const stages = [
    {
      title: 'Pre-Primary',
      stageTag: 'STAGE 01 • EARLY YEARS',
      subtitle: 'NURSERY, PP1 & PP2',
      badge: 'Early Years',
      description:
        'Feel grounded and supported in an environment where early learners are encouraged to participate, share ideas, explore phonics, and build confidence through play.',
      image: '/images/pre-primary-classroom.jpg',
      alt: 'Pre-Primary students engaged in colorful classroom activity',
      imagePosition: 'object-center',
      curriculumHighlights: [
        'Phonics-based English language & early communication',
        'Montessori-inspired sensorial and tactile activities',
        'Early numeracy, number sense and playful logical thinking',
        'Gross and fine motor skill development through play',
        'Art, rhymes, music, and interactive storytelling',
      ],
    },
    {
      title: 'Primary School',
      stageTag: 'STAGE 02 • PRIMARY WING',
      subtitle: 'CLASSES I TO V • CBSE / NCERT',
      badge: 'Primary Wing',
      description:
        'Building strong scholastic foundations through hands-on inquiry, experiential STEM learning, bilingual communication, and well-rounded character development.',
      image: '/images/primary-school-classroom.jpg',
      alt: 'Primary school students in classroom with teacher',
      imagePosition: 'object-[center_30%]',
      curriculumHighlights: [
        'Integrated CBSE-aligned NCERT syllabus framework',
        'Experiential STEM learning and scientific experiments',
        'Bilingual communication, reading, and creative writing',
        'Computer literacy, introductory coding, and digital tools',
        'Physical education, yoga, sports, and performing arts',
      ],
    },
    {
      title: 'Middle School',
      stageTag: 'STAGE 03 • MIDDLE WING',
      subtitle: 'CLASSES VI TO VIII • CBSE & IIT/NIT FOUNDATION',
      badge: 'Middle Wing',
      description:
        'Encouraging independent analytical thinking, teamwork, advanced science laboratory inquiry, and specialized competitive exam readiness.',
      image: '/images/middle-school-classroom.jpg',
      alt: 'Middle school students collaborating with laptops and smart board',
      imagePosition: 'object-[center_35%]',
      curriculumHighlights: [
        'Rigorous CBSE syllabus emphasizing core conceptual depth',
        'Specialized IIT/NIT and Olympiad foundation preparation',
        'Practical experiments in modern Science and Computer labs',
        'Critical thinking, debating, and collaborative projects',
        'Leadership mentoring, ethical values, and co-curricular pursuits',
      ],
    },
    {
      title: 'Secondary Education',
      stageTag: 'STAGE 04 • SECONDARY WING',
      subtitle: 'CLASSES IX TO XII • CBSE, IIT-JEE & NEET',
      badge: 'Secondary Wing',
      description:
        'Empowering high school students with rigorous academic training, board examination mastery, and dedicated coaching for IIT-JEE, NEET, and Olympiads.',
      image: '/images/secondary-school-classroom.jpg',
      alt: 'Secondary Education students in modern computer lab and classroom',
      imagePosition: 'object-[center_25%]',
      curriculumHighlights: [
        'Comprehensive CBSE curriculum for Classes IX, X, XI & XII',
        'Integrated coaching for IIT-JEE, NEET, Olympiads & CUET',
        'State-of-the-art Physics, Chemistry, Biology & AI Robotics laboratories',
        'Specialized stream guidance across Science, Commerce & Humanities',
        'Personalized mentorship, regular mock test series & career counseling',
      ],
    },
    {
      title: 'IIT Foundation',
      stageTag: 'STAGE 05 • COMPETITIVE EXCELLENCE',
      subtitle: 'CLASSES VI TO X • IIT-JEE, NEET & OLYMPIAD FOUNDATION',
      badge: 'Competitive Edge',
      description:
        'A comprehensive early-start curriculum designed to build robust conceptual depth, higher-order problem-solving skills, and competitive aptitude in Mathematics, Physics, Chemistry, and Logical Reasoning.',
      image: '/images/science.jpg',
      alt: 'Students engaged in advanced IIT Foundation science and mathematics learning',
      imagePosition: 'object-[center_30%]',
      curriculumHighlights: [
        'Comprehensive analytical depth in Mathematics, Physics & Chemistry',
        'Early-start preparation for IIT-JEE, NEET, NTSE & National Olympiads',
        'Daily practice problems (DPPs) with structured speed and accuracy drills',
        'Regular national benchmarking tests, error analysis & doubt clearance',
        'Specialized faculty mentoring from premier coaching backgrounds',
      ],
    },
  ]

  const currentModal = activeCurriculum !== null ? stages[activeCurriculum] : null

  return (
    <section id="academics" className="py-10 bg-transparent relative scroll-mt-16 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 sm:w-8 h-[2px] bg-[#031c3f]" />
            <span
              style={{ fontSize: '13px', lineHeight: '23px' }}
              className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[#031c3f]"
            >
              ACADEMIC PROGRAMMES
            </span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#031c3f]" />
          </div>

          <h2
            style={{ lineHeight: '58px' }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#031c3f] tracking-tight leading-[58px] sm:leading-[58px] lg:leading-[58px]"
          >
            Shaping <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Inquiring Minds</span> at Every Stage
          </h2>
          <p
            style={{ margin: '10px auto', lineHeight: '26px', textAlign: 'center' }}
            className="text-[#111] text-xs sm:text-base my-[10px] mx-auto text-center max-w-2xl leading-[26px] sm:leading-[26px]"
          >
            Our progressive CBSE curriculum combines academic rigor, experiential STEM learning, and competitive exam readiness from early years to senior secondary excellence (Nursery to Grade XII).
          </p>
        </div>

        {/* Academic Stage Cards with On-Scroll Sticky Stacking & Reveal */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="sticky [top:var(--stack-top-mobile)] sm:[top:var(--stack-top-tablet)] lg:[top:var(--stack-top-desktop)] flex flex-col lg:flex-row items-stretch rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden border border-slate-200/90 bg-white text-slate-900 group transition-all duration-300 shadow-none"
              style={{
                ['--stack-top-mobile' as any]: `${76 + index * 20}px`,
                ['--stack-top-tablet' as any]: `${96 + index * 26}px`,
                ['--stack-top-desktop' as any]: `${124 + index * 32}px`,
                zIndex: index + 10,
              }}
            >
              {/* Left Column: Image */}
              <div className="w-full lg:w-1/2 min-h-[220px] sm:min-h-[300px] lg:min-h-[460px] relative overflow-hidden bg-slate-950 shrink-0">
                <SchoolImage
                  src={stage.image}
                  alt={stage.alt}
                  className={`w-full h-full object-cover ${stage.imagePosition} group-hover:scale-105 transition-transform duration-700`}
                  fallbackText={stage.title}
                  fallbackBg="from-slate-800 via-slate-900 to-slate-800"
                />
              </div>

              {/* Right Column: Clean Content Area */}
              <div className="w-full lg:w-1/2 bg-white p-5 sm:p-8 lg:p-11 text-slate-900 relative overflow-hidden flex flex-col justify-between">
                
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  {/* Stage Tag: Blue background with pure white text */}
                  <div
                    style={{ backgroundColor: '#031c3f', color: '#ffffff' }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white !text-white bg-[#031c3f] border border-[#031c3f]"
                  >
                    <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white" style={{ color: '#ffffff' }} />
                    <span className="text-white !text-white" style={{ color: '#ffffff' }}>
                      {stage.stageTag}
                    </span>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold text-[#031c3f] tracking-tight leading-tight">
                    {stage.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-[#e31e24]">
                    {stage.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    style={{ lineHeight: '26px' }}
                    className="text-[#111] text-xs sm:text-base leading-[26px] max-w-xl"
                  >
                    {stage.description}
                  </p>

                  {/* Curriculum Preview Chips */}
                  <div className="pt-1 sm:pt-2 space-y-2 max-w-lg">
                    {stage.curriculumHighlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#031c3f] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Pill Button */}
                <div className="pt-6 sm:pt-8 relative z-10 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveCurriculum(index)}
                    className="w-full sm:w-auto justify-center bg-[#e31e24] hover:bg-[#c9181e] text-white font-extrabold text-sm sm:text-base px-7 py-3 rounded-full transition-all duration-300 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 inline-flex items-center gap-2.5 group/btn cursor-pointer"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Curriculum Details Modal */}
      {currentModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveCurriculum(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#09172e] rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 relative animate-scale-up text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-white/15 relative bg-white/5 sticky top-0 bg-[#09172e]/95 backdrop-blur-md z-10">
              <button
                type="button"
                onClick={() => setActiveCurriculum(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/25 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentModal.badge}</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white">{currentModal.title}</h3>
              <p className="text-xs text-slate-300 mt-1 font-medium">{currentModal.subtitle}</p>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4 text-white font-bold text-sm">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Curriculum & Learning Highlights</span>
              </div>

              <ul className="space-y-3 mb-6">
                {currentModal.curriculumHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/admissions"
                  onClick={() => setActiveCurriculum(null)}
                  className="flex-1 py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
                >
                  Apply for Admission
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveCurriculum(null)}
                  className="py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
