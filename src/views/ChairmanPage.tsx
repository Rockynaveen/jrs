'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import {
  Quote,
  Award,
  ArrowRight,
  Target,
} from 'lucide-react'

export default function ChairmanPage() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Navbar */}
      <Navbar activePage="chairman" />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <PageHero
          breadcrumb="Chairman of JRS"
          title="Chairman of"
          titleHighlight="JRS"
          subtitle="Inspiring a Culture of Inquiry, Character & Leadership."
          description="Dedicated to fostering an educational ecosystem where academic brilliance, moral integrity, and modern global competencies thrive together."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Campus"
        />

        {/* 3. Chairman Profile & Core Message */}
        <section id="message" className="py-16 sm:py-20 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Portrait Card */}
                <div className="lg:col-span-5" data-aos="fade-right">
                  <div className="sticky top-28 space-y-6">
                    <div className="relative mx-auto max-w-sm lg:max-w-none">
                      {/* Glow Backdrop */}
                      <div className="absolute -inset-3 bg-gradient-to-tr from-red-500/15 via-amber-500/15 to-blue-900/15 rounded-3xl filter blur-xl opacity-80" />

                      {/* Portrait Frame */}
                      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a2559] to-[#031c3f] p-2 shadow-2xl">
                        <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
                          {/* Inner Avatar Graphic */}
                          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#031c3f] to-[#0a2559] text-white flex items-center justify-center shadow-xl border-4 border-white mb-4">
                            <Award className="w-16 h-16 text-amber-400" />
                          </div>

                          <span className="text-xs font-extrabold uppercase tracking-widest text-[#dc2626]">
                            FOUNDING LEADERSHIP
                          </span>
                          <h3 className="text-2xl font-extrabold text-[#031c3f] mt-1">
                            Chairman of JRS
                          </h3>
                          <p className="text-xs font-semibold text-[#111] mt-1">
                            JRS International School â€¢ Hyderabad
                          </p>

                          {/* Floating Motto Badge */}
                          <div className="mt-6 w-full bg-white rounded-2xl p-3.5 shadow-sm border border-slate-200/80 text-center">
                            <p className="text-xs font-bold text-[#0a2559]">
                              &ldquo;Nurturing Tomorrow&apos;s Leaders with Global Competence & Indian Values&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Right Column: Detailed Message */}
                <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
                  {/* Quote Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shadow-xs">
                      <Quote className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-[#dc2626] uppercase tracking-wider block">
                        CHAIRMAN&apos;S ADDRESS
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031c3f] tracking-tight">
                        Empowering Young Minds for a Changing World
                      </h2>
                    </div>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="space-y-4 text-[#111] text-sm sm:text-base leading-relaxed">
                    <p>
                      Welcome to <strong className="text-[#031c3f]">JRS International School</strong>. It gives me immense pride to introduce our institution as a place where education transcends the boundaries of textbooks and rote memorization, becoming an exhilarating voyage of curiosity, character formation, and discovery.
                    </p>
                    <p>
                      In today&apos;s dynamic global landscape, the role of schooling is not merely to prepare students for examinations, but to equip them with the resilience, creativity, critical thinking, and ethical depth necessary to solve real-world problems.
                    </p>
                    <p>
                      At JRS, we have seamlessly woven the timeless values of Indian ethosâ€”respect, empathy, integrity, and mindfulnessâ€”with world-class pedagogical frameworks, smart interactive classrooms, and advanced science and computer laboratories.
                    </p>
                    <p>
                      Every child is uniquely gifted. Through personalized mentoring, an optimal 1:25 student-teacher ratio, and a vibrant co-curricular curriculum spanning skating, karate, music, arts, and robotics, we foster an environment where every young learner blossoms with joy and confidence.
                    </p>
                  </div>


                  {/* Signoff */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase font-extrabold tracking-wider text-[#111]">
                        With Warm Wishes & Commitment,
                      </p>
                      <h4 className="text-lg font-extrabold text-[#031c3f] mt-0.5">
                        Chairman
                      </h4>
                      <p className="text-xs text-[#111]">JRS International School, Hyderabad</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href="/admissions"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#dc2626] hover:bg-[#b91c1c] transition-all shadow-md shadow-red-500/20 active:scale-95 cursor-pointer"
                      >
                        <span>Apply for Admission</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Vision 2030 Card */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#031c3f] via-[#0a2559] to-[#031737] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5" />
                  <span>OUR STRATEGIC COMMITMENT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Building an Empowered Generation for Tomorrow
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed opacity-95">
                  Under the chairman&apos;s visionary stewardship, JRS International School continues to upgrade educational infrastructure, introduce emerging digital technologies, and ensure every child receives the finest learning foundation in Hyderabad.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#0a2559] bg-white hover:bg-slate-100 transition-all shadow-md active:scale-95"
                  >
                    <span>Read Our School Story</span>
                  </Link>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
                  >
                    <span>Contact Leadership Office</span>
                  </Link>
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
