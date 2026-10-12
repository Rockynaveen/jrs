'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, X, ExternalLink } from 'lucide-react'

interface AboutBottomCTAProps {
  imageSrc?: string
  imageAlt?: string
  imagePosition?: string
}

export default function AboutBottomCTA({
  imageSrc = '/images/science.jpg',
  imageAlt = 'JRS International School Students in Science Lab',
  imagePosition = 'object-center lg:object-[center_20%]',
}: AboutBottomCTAProps = {}) {
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
    <section className="relative overflow-hidden bg-[#031c3f] text-white">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031c3f] via-[#0a1931] to-[#031c3f]" />

      {/* Decorative Red Curved Swoosh in Bottom-Right Corner (matching design) */}
      <div className="absolute -bottom-8 -right-8 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none z-10 opacity-70 lg:opacity-40 overflow-hidden">
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100 300 C 170 270, 260 220, 300 110 L 300 300 Z"
            fill="#e31e24"
            opacity="0.95"
          />
          <path
            d="M 160 300 C 210 275, 275 235, 300 160 L 300 300 Z"
            fill="#ff3b44"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Right Column: Students Photo touching the right edge of the section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[50%] xl:w-[54%] w-full h-[220px] sm:h-[340px] lg:h-full z-0 overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`w-full h-full object-cover ${imagePosition} transform hover:scale-105 transition-transform duration-700`}
        />

        {/* Seamless Gradient Fade on the Left of the Image to blend into Navy */}
        <div className="absolute inset-y-0 left-0 w-28 sm:w-44 lg:w-60 bg-gradient-to-r from-[#031c3f] via-[#031c3f]/85 to-transparent pointer-events-none" />
        {/* Soft Gradient Fade at the Bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#031c3f]/80 to-transparent pointer-events-none" />
        {/* Soft Gradient at the Top for mobile */}
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#031c3f]/60 to-transparent lg:hidden pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl py-12 sm:py-16 lg:py-24 space-y-4 sm:space-y-5">
          {/* Left Column: CTA Content */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.3] sm:leading-[1.35]">
            Give Your Child a Strong <br />
            Foundation <span className="text-[#f59e0b]">for Tomorrow</span>
          </h2>

          <p className="text-slate-300 text-[14px] leading-relaxed max-w-lg opacity-90">
            Join JRS International School and be a part of a nurturing environment that shapes confident, responsible and future-ready individuals.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-3">
            {/* Enquire for Admission */}
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/30 transition-all duration-200 active:scale-95"
            >
              <span>Enquire for Admission</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            {/* Take a Campus Tour (Linked to https://youtu.be/LBvByB-S0O4 with interactive modal) */}
            <a
              href="https://youtu.be/LBvByB-S0O4"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault()
                setIsVideoModalOpen(true)
              }}
              aria-label="Take a Campus Tour (Watch Video)"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-sm transition-all duration-200 active:scale-95 cursor-pointer group"
            >
              <span>Take a Campus Tour</span>
              <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-2 h-2 fill-white ml-0.5" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Magnified Campus Tour Video Modal Popup */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsVideoModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Campus Tour Video"
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
                  JRS International School — Campus Tour Video
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://youtu.be/LBvByB-S0O4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  aria-label="Close campus tour video"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Magnified 16:9 Video Container */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/LBvByB-S0O4?autoplay=1&rel=0&modestbranding=1"
                title="JRS International School Campus Tour Video"
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
