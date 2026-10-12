'use client'

import React from 'react'
import Link from 'next/link'
import { Sparkles, CheckCircle2, Calendar, ArrowRight } from 'lucide-react'

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
      className="relative py-16 sm:py-24 bg-[#031c3f] text-white overflow-hidden scroll-mt-20"
    >
      {/* Background Campus/Event Photo with Enhanced Dark Transparent Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/annual-day.jpg"
          alt="JRS International School Campus Atmosphere"
          className="w-full h-full object-cover object-center scale-105 opacity-45"
          onError={(e) => {
            const target = e.currentTarget
            target.src = '/images/campus-building.jpg'
          }}
        />
        {/* Dark Transparent Overlay for Maximum Text Clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031c3f]/95 via-[#031c3f]/88 to-[#031c3f]/70 md:from-[#031c3f]/95 md:via-[#031c3f]/82 md:to-[#031c3f]/65 backdrop-blur-[1px]" />

        {/* Subtle Decorative Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Content Related to the Video */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e31e24]/15 border border-[#e31e24]/30 text-[#ff4d53] text-xs font-extrabold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Campus Tour & Life at JRS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.18]">
                Experience the Spirit of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  JRS International School
                </span>
              </h2>
            </div>

            <p className="text-slate-100 text-[14px] leading-relaxed opacity-90">
              Take a virtual walk through our campus, state-of-the-art facilities, and interactive learning spaces where students discover their passions, build lifelong confidence, and prepare for a global tomorrow.
            </p>

            {/* Feature Highlights List */}
            <div className="space-y-3 pt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                  <span className="text-[14px] font-medium text-slate-200 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/30 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Campus Visit</span>
              </Link>

              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Admissions 2026-27</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Horizontal Video Player (Uncut Video) */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="relative">
              {/* Outer Glowing Accent */}
              <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-[#e31e24]/40 via-amber-400/30 to-[#2563eb]/40 rounded-2xl sm:rounded-3xl blur-md opacity-70" />

              {/* White-Framed Horizontal Player Card */}
              <div className="relative bg-white p-2 sm:p-3 md:p-3.5 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/90">
                {/* Top Bar inside the Card */}
                <div className="flex items-center justify-between px-2 sm:px-3 pb-2 sm:pb-2.5 border-b border-slate-100 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e31e24]" />
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight truncate max-w-[180px] sm:max-w-none">
                      JRS International School — Campus Video Tour
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">
                    HD Video
                  </span>
                </div>

                {/* Horizontal 16:9 Video Player with object-contain (Full Uncut Video) */}
                <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-inner flex items-center justify-center">
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
        </div>
      </div>
    </section>
  )
}
