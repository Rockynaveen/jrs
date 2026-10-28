'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Phone, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

export default function AdmissionsPopup() {
  const [isOpen, setIsOpen] = useState(false)

  // Open modal automatically on page load / refresh after a brief natural delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  // Lock body scroll and handle Escape key while modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="admissions-popup-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      {/* Modal Dialog Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg md:max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row max-h-[92vh] sm:max-h-[88vh] animate-scale-up"
        style={{
          boxShadow: '0 25px 60px -15px rgba(3, 28, 63, 0.35)',
        }}
      >
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close admissions announcement"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-[#e31e24] text-slate-700 hover:text-white shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer border border-slate-200/60 focus:outline-none"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Left Side: Photo & Admissions Banner */}
        <div className="relative w-full md:w-5/12 h-48 sm:h-56 md:h-auto min-h-[190px] md:min-h-[380px] bg-slate-900 overflow-hidden shrink-0">
          <img
            src="/images/admissions-popup.jpg"
            alt="JRS International School Admissions 2027-2028"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#031c3f]/80 via-[#031c3f]/40 to-transparent" />

          {/* Top Badge on Image */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-[#e31e24] shadow-md tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Admissions Open
            </span>
          </div>

          {/* Bottom Caption on Image */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 text-white">
            <p className="text-[11px] font-semibold tracking-wider uppercase text-amber-300">
              CBSE Affiliation: 3630478 • School Code: 56725
            </p>
            <h4 className="text-sm sm:text-base font-bold leading-tight drop-shadow-sm text-white">
              JRS International School
            </h4>
            <p className="text-[11px] text-white/80">Narapally, Near Uppal, Hyderabad</p>
          </div>
        </div>

        {/* Right Side: Details & Actions */}
        <div className="flex-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#e31e24] border border-red-200/60 mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e31e24]" />
              <span>Academic Year 2027 – 2028</span>
            </div>

            {/* Main Headline */}
            <h3
              id="admissions-popup-title"
              className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#031c3f] tracking-tight leading-snug"
            >
              Admissions Open for <br className="hidden sm:inline" />
              <span className="text-[#e31e24]">2027 – 2028</span>
            </h3>

            <p className="text-xs sm:text-[13.5px] text-slate-600 mt-1 leading-relaxed">
              Enrolling students from <strong>Nursery to Grade XII</strong> (Admissions open for <strong>11th &amp; 12th Standard also</strong>). Give your child the foundation for academic excellence, character development, and global leadership.
            </p>

            {/* Highlights List */}
            <div className="mt-4 space-y-2 text-xs sm:text-[13px] text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>CBSE Curriculum</strong> with experiential, inquiry-based learning</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>STEM, Robotics & Cognospace</strong> innovation labs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>World-Class Sports</strong> & Co-curricular clubs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Safe GPS-Enabled Fleet</strong> & 100% CCTV secured campus</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            {/* Primary Apply Button */}
            <Link
              href="/admissions#enquiry-form"
              onClick={() => setIsOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#e31e24] hover:bg-[#c9181e] active:scale-95 shadow-md shadow-red-600/25 transition-all duration-200 text-center"
            >
              <span>Enquire / Apply Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Call Helpline Button */}
            <a
              href="tel:+919281409674"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#031c3f] bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all duration-200 text-center shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#e31e24]" />
              <span>Call: +91 92814 09674</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
