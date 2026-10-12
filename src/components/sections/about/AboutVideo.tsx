'use client'

import React from 'react'
import Link from 'next/link'
import {
  Sparkles,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

export default function AboutVideo() {
  const highlights = [
    'Pollution-free green campus in Narapally, Hyderabad',
    'Interactive smart classrooms & modern robotics labs',
    'Comprehensive CBSE curriculum blended with Indian ethos',
    'Expansive arenas for sports, martial arts & skating',
  ]

  return (
    <section
      id="campus-video"
      className="relative py-16 sm:py-20 lg:py-24 bg-white text-slate-800 overflow-hidden scroll-mt-20 border-t border-slate-100"
    >
      {/* Subtle Soft Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-[#e31e24] text-xs font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e31e24]" />
            <span>CAMPUS TOUR & LIFE AT JRS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[36px] md:leading-[46px] lg:text-[42px] lg:leading-[52px] font-extrabold text-[#031c3f] tracking-tight">
            Experience the Spirit of <br className="hidden sm:inline" />
            <span className="text-[#e31e24]">JRS International School</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-[16px] sm:leading-[26px] lg:text-[16px] lg:leading-[26px] mt-3 max-w-2xl mx-auto">
            Take a virtual walk through our campus, state-of-the-art facilities, and interactive learning spaces where students discover their passions, build lifelong confidence, and prepare for a global tomorrow.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Clean Highlights Checklist & Action Buttons */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#031c3f] tracking-tight">
                Why Choose JRS Campus
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                Modern facilities designed to nurture curiosity, discipline, and well-rounded character.
              </p>
            </div>

            {/* Feature Highlights Checklist */}
            <div className="space-y-3.5 pt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100/90 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-emerald-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-semibold text-slate-700 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/25 border border-red-500/20 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Campus Visit</span>
              </Link>

              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#031c3f] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Admissions 2026-27</span>
                <ArrowRight className="w-4 h-4 text-[#e31e24]" />
              </Link>
            </div>

          </div>

          {/* Right Column: Exact Previous Video Player with Full Video Display */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-2xl shadow-slate-900/15 border border-slate-200/80 flex items-center justify-center">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/images/annual-day.jpg"
                className="w-full h-full object-contain bg-black"
              >
                <source
                  src="https://jrsinternationalschooluppal.com/wp-content/uploads/2025/10/IMG_9372-1.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
