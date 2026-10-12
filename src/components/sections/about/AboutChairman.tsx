'use client'

import React from 'react'
import Link from 'next/link'
import { Quote, Sparkles, Award, Compass, HeartHandshake, ArrowRight } from 'lucide-react'

export default function AboutChairman() {
  return (
    <section id="chairman" className="py-16 sm:py-20 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-100 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEADERSHIP & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031c3f] tracking-tight leading-tight">
            Chairman of <span className="text-[#dc2626]">JRS</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-4">
            Guiding JRS International School towards academic excellence, moral integrity, and holistic student development.
          </p>
        </div>

        {/* Chairman Feature Grid */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Portrait Card & Badge */}
            <div className="lg:col-span-5" data-aos="fade-right">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Decorative Background Blob */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-blue-900/10 rounded-3xl filter blur-xl opacity-70" />

                {/* Portrait Frame */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a2559] to-[#031c3f] p-1.5 shadow-2xl">
                  <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden bg-slate-100 flex items-center justify-center">
                    {/* Placeholder portrait illustration / photo */}
                    <div className="w-full h-full bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-28 h-28 rounded-full bg-[#0a2559] text-white flex items-center justify-center shadow-lg border-4 border-white mb-4">
                        <Award className="w-14 h-14 text-amber-400" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-red-600">Chairman</span>
                      <h4 className="text-xl font-extrabold text-[#031c3f] mt-1">JRS International School</h4>
                      <p className="text-xs text-slate-700 mt-1">Narapally, Hyderabad</p>
                    </div>

                    {/* Bottom Floating Badge */}
                    <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/60 text-center">
                      <p className="text-xs font-bold text-[#031c3f]">
                        &ldquo;Nurturing Tomorrow&apos;s Leaders Today&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Message & Pillars */}
            <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
              {/* Quote Icon Header */}
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                <Quote className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wider block mb-1">
                  CHAIRMAN&apos;S MESSAGE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#031c3f] leading-snug">
                  Empowering Young Minds Through Excellence, Character & Innovation
                </h3>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                <p>
                  At <strong className="text-slate-800">JRS International School</strong>, we believe that education is far more than scholastic achievement; it is a sacred journey of discovering a child&apos;s innate gifts, strengthening their moral compass, and preparing them to thrive in an interconnected global community.
                </p>
                <p>
                  We have carefully built an institution that marries traditional Indian values of respect, discipline, and empathy with modern experiential pedagogy, cutting-edge STEM labs, and creative self-expression. Every child at JRS is encouraged to question, experiment, and grow into a compassionate, responsible, and visionary global citizen.
                </p>
              </div>

              {/* Core Leadership Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col">
                  <Compass className="w-5 h-5 text-red-600 mb-2" />
                  <span className="text-xs font-bold text-slate-900 mb-1">Inquiry-Led Pedagogy</span>
                  <p className="text-[11px] text-slate-700 leading-normal">
                    Fostering curiosity, conceptual mastery, and active thinking.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col">
                  <HeartHandshake className="w-5 h-5 text-amber-600 mb-2" />
                  <span className="text-xs font-bold text-slate-900 mb-1">Human Values</span>
                  <p className="text-[11px] text-slate-700 leading-normal">
                    Instilling ethics, respect, empathy, and collaborative spirit.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col">
                  <Award className="w-5 h-5 text-blue-900 mb-2" />
                  <span className="text-xs font-bold text-slate-900 mb-1">Global Standard</span>
                  <p className="text-[11px] text-slate-700 leading-normal">
                    World-class campus, smart classrooms, and holistic co-curriculars.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#dc2626] hover:bg-[#b91c1c] transition-all shadow-md shadow-red-500/20 active:scale-95"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <span>Contact School Office</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
