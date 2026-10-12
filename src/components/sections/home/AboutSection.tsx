'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Play, X } from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

export default function AboutSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Handle escape key and body scroll lock for video popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false)
      }
    }

    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isVideoModalOpen])

  return (
    <section id="about" className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Exact reference composition (Left tall photo, Right photo, Video card below right photo) */}
          <div className="lg:col-span-6 relative pb-6 sm:pb-8" data-aos="fade-right">
            <div className="relative grid grid-cols-12 gap-3 sm:gap-4 items-start">
              
              {/* Image 1 (Left - Portrait photo) */}
              <div className="col-span-6">
                <div className="relative aspect-[3/4.4] w-full overflow-hidden bg-slate-100 shadow-md rounded-2xl">
                  <SchoolImage
                    src="/images/about-students.jpg"
                    alt="JRS International School Students"
                    className="w-full h-full object-cover object-center"
                    fallbackText="JRS Students"
                    fallbackBg="from-slate-100 via-blue-50 to-slate-200"
                  />
                </div>
              </div>

              {/* Right Side: Image 2 (Same as 1st image) + Video card below it */}
              <div className="col-span-6">
                <div className="relative aspect-[3/4.4] w-full overflow-hidden bg-slate-100 shadow-md rounded-2xl">
                  <SchoolImage
                    src="/images/campus-building.jpg"
                    alt="JRS International School Campus Building"
                    className="w-full h-full object-cover object-center"
                    fallbackText="JRS Campus"
                    fallbackBg="from-slate-100 via-amber-50 to-slate-200"
                  />
                </div>
              </div>

              {/* Floating Video Card with border radius */}
              <div
                className="col-span-12 sm:col-span-auto sm:absolute sm:bottom-0 sm:right-0 sm:left-[28%] z-20 bg-white p-4 sm:p-5 mt-3 sm:mt-0 transition-transform duration-300 hover:-translate-y-1 rounded-2xl border border-slate-100"
                style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
              >
                <p className="text-[13px] sm:text-sm font-bold text-[#031c3f] leading-snug mb-3">
                  Watch a video about how we work and try for our students
                </p>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    className="text-xs sm:text-[13px] font-medium text-slate-700 hover:text-[#031c3f] transition-colors cursor-pointer shrink-0"
                  >
                    Play video
                  </button>

                  {/* Horizontal line */}
                  <div className="flex-1 h-[1px] bg-slate-200 mx-2" />

                  {/* Circular Play Button */}
                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    aria-label="Play campus tour video"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#031c3f] hover:bg-[#e31e24] text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 cursor-pointer shrink-0"
                  >
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white ml-0.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Standardized typography & theme styling */}
          <div className="lg:col-span-6 space-y-5 lg:pl-4" data-aos="fade-left">
            <div>
              {/* Eyebrow: — ABOUT JRS */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#e31e24]" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
                  ABOUT JRS
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-tight sm:leading-snug lg:leading-[1.18]">
                A Legacy of Excellence <span className="text-[#e31e24]">in Education</span>
              </h2>
            </div>

            {/* Paragraph 1 */}
            <p className="text-slate-600 text-[14px] sm:text-[15px] leading-relaxed">
              JRS International School, Uppal, Hyderabad is committed to providing quality education with a perfect blend of academics, values and co-curricular activities. We focus on developing confident, responsible and compassionate individuals who are prepared for a constantly evolving world.
            </p>

            {/* Paragraph 2 */}
            <p className="text-slate-600 text-[14px] sm:text-[15px] leading-relaxed">
              Rooted in rich Indian ethos and empowered by global pedagogical standards, our campus provides modern smart classrooms, advanced robotics and science laboratories, sports coaching, and a holistic environment where every student thrives.
            </p>

            {/* Read more Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#031c3f] hover:text-[#e31e24] group transition-colors"
              >
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                <span className="underline underline-offset-4 decoration-1 decoration-[#e31e24]">Read more</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsVideoModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Campus Virtual Tour Video"
        >
          <div
            className="relative w-full max-w-5xl bg-[#031c3f] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-gradient-to-r from-[#031c3f] to-[#0a2f64] border-b border-white/10 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e31e24] animate-pulse" />
                <h3 className="text-sm sm:text-base font-bold tracking-tight">
                  JRS International School — Campus Virtual Tour
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                aria-label="Close virtual tour video"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/LBvByB-S0O4?autoplay=1&rel=0&modestbranding=1"
                title="JRS International School Virtual Tour"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
