'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Play, X, Megaphone } from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const slides = [
    {
      titlePart1: 'Empowering',
      titlePart2: 'Future Leaders',
      tagline: 'NURTURING BRIGHT MINDS • BUILDING A BETTER TOMORROW',
      description:
        'At JRS International School, we inspire curiosity, creativity and compassion. A place where every child discovers their potential and shines in their own unique way.',
      image: '/images/hero image.png',
      alt: 'JRS International School Campus Building and Assembly',
    },
    {
      titlePart1: 'Inspiring',
      titlePart2: 'Excellence & Values',
      tagline: 'WORLD-CLASS EDUCATION • ROOTED IN ETHOS',
      description:
        'Providing an innovative curriculum and a nurturing environment where students develop leadership, critical thinking, and lifelong values.',
      image: '/images/heroslider3.png',
      alt: 'JRS International School Students',
    },
    {
      titlePart1: 'Holistic & Global',
      titlePart2: 'Future-Ready Education',
      tagline: 'SHAPING MINDS • FOSTERING CREATIVITY',
      description:
        'Empowering students with 21st-century skills, digital classrooms, sports excellence, and a lifelong passion for knowledge.',
      image: '/images/campus-building.jpg',
      alt: 'JRS International School Campus Infrastructure',
    },
  ]

  const current = slides[activeSlide]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Automatic slide progression every 5 seconds (pauses only when video modal is open)
  useEffect(() => {
    if (isVideoModalOpen) return
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [activeSlide, isVideoModalOpen, slides.length])

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
    <section
      id="home"
      className="relative w-full overflow-hidden flex flex-col justify-center bg-[#031c3f] min-h-[100vh] min-h-[100dvh] h-[100vh] h-[100dvh]"
    >
      {/* Background Hero Slider Images (full section width & height) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <SchoolImage
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
              fallbackText={slide.image}
              fallbackBg="from-slate-800 via-[#0d2146] to-[#0a1931]"
            />
          </div>
        ))}

        {/* Mobile Overlay: Solid/vertical navy gradient protecting full-width text */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#031c3f] via-[#031c3f]/90 to-[#031c3f]/75 z-[1] pointer-events-none" />

        {/* Desktop Overlay: Soft navy horizontal gradient fading to showcase campus photography */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#031c3f] via-[#031c3f]/85 via-45% to-transparent z-[1] pointer-events-none" />

        {/* Subtle Dark Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#031c3f]/40 via-transparent to-transparent z-[1] pointer-events-none" />
      </div>

      {/* Latest News Marquee Ticker (Below Header, Attached to the End) */}
      <div
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        className="relative z-20 w-full max-w-full overflow-hidden border-b border-white/15 flex items-stretch shrink-0 pl-0 pr-3 sm:pr-6"
      >
        <div className="flex items-center gap-1.5 shrink-0 bg-[#dc2626] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3 py-[10px] shadow-sm z-10 self-stretch">
          <Megaphone className="w-3.5 h-3.5 shrink-0 animate-bounce" />
          <span>News</span>
        </div>
        <div className="flex-1 min-w-0 max-w-full overflow-hidden ml-2.5 sm:ml-3 flex items-center py-[10px]">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="6"
            className="w-full max-w-full text-[13px] sm:text-[14px] font-normal text-white/95 cursor-pointer block leading-normal font-['Inter',sans-serif]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            onMouseEnter={(e: any) => e.currentTarget.stop()}
            onMouseLeave={(e: any) => e.currentTarget.start()}
          >
            <span className="inline-flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8">
              <span className="inline-flex items-center gap-2">
                <span className="text-[#f59e0b] font-bold">★</span>
                <span>Admissions Open for Academic Year 2027–2028 (Nursery to Grade XII) — Enroll Today!</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="inline-flex items-center gap-2">
                <span className="text-[#f59e0b] font-bold">★</span>
                <span>CBSE Curriculum with State-of-the-Art STEM, Robotics & AI Labs</span>
              </span>
              <span className="text-white/30">•</span>
              <a
                href="https://jrsinternationalschooluppal.com/wp-content/uploads/2022/01/Brochure-2020-JRS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-[#f59e0b] transition-colors"
              >
                <span className="text-[#f59e0b] font-bold">★</span>
                <span>Download Official School Prospectus & Admission Guidelines (PDF)</span>
              </a>
              <span className="text-white/30">•</span>
              <span className="inline-flex items-center gap-2">
                <span className="text-[#f59e0b] font-bold">★</span>
                <span>Campus Tours & Personalized Counseling Sessions Available at Narapally Campus</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="inline-flex items-center gap-2">
                <span className="text-[#f59e0b] font-bold">★</span>
                <span>Admissions Helpline: +91 92814 09674, +91 92814 09672 | Email: Jrsinternationalschool6@gmail.com</span>
              </span>
            </span>
            <span className="text-white/40">•</span>
            <span className="inline-flex items-center gap-6 sm:gap-8 pl-6 sm:pl-8">
              <span className="inline-flex items-center gap-2">
                <span className="text-[#f59e0b] font-bold">★</span>
                <span>Admissions Open for Academic Year 2027–2028 (Nursery to Grade XII) — Enroll Today!</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="inline-flex items-center gap-2">
                <span className="text-[#f59e0b] font-bold">★</span>
                <span>CBSE Curriculum with State-of-the-Art STEM, Robotics & AI Labs</span>
              </span>
              <span className="text-white/30">•</span>
              <a
                href="https://jrsinternationalschooluppal.com/wp-content/uploads/2022/01/Brochure-2020-JRS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-[#f59e0b] transition-colors"
              >
                <span className="text-[#f59e0b] font-bold">★</span>
                <span>Download Official School Prospectus & Admission Guidelines (PDF)</span>
              </a>
              <span className="text-white/30">•</span>
              <span className="inline-flex items-center gap-2">
                <span className="text-[#f59e0b] font-bold">★</span>
                <span>Campus Tours & Personalized Counseling Sessions Available at Narapally Campus</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="inline-flex items-center gap-2">
                <span className="text-[#f59e0b] font-bold">★</span>
                <span>Admissions Helpline: +91 92814 09674, +91 92814 09672 | Email: Jrsinternationalschool6@gmail.com</span>
              </span>
            </span>
          </marquee>
        </div>
      </div>

      {/* Main Hero Slider Content Area */}
      <div className="relative z-10 flex-1 w-full flex items-center">
        {/* Hero Content on Clean Solid Navy Left Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 md:pt-16 pb-16 sm:pb-8 w-full">
          <div key={activeSlide} className="max-w-xl lg:max-w-2xl text-left animate-fade-in translate-y-2 sm:translate-y-4">
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 mb-2.5 sm:mb-4">
              <span className="text-white/95 text-xs sm:text-[13px] font-bold tracking-wider uppercase flex flex-wrap items-center gap-x-2 gap-y-1">
                {current.tagline.split('•').map((part, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="text-[#f59e0b] font-black">•</span>}
                    <span>{part.trim()}</span>
                  </React.Fragment>
                ))}
              </span>
            </div>

            {/* Big Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-white tracking-tight leading-[1.14] mb-3 sm:mb-4 lg:mb-5 break-words">
              <span>{current.titlePart1}</span>{' '}
              <span className="text-[#ffbe1a] block mt-1 sm:mt-1.5">
                {current.titlePart2}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-[15px] lg:text-base text-white/90 leading-relaxed font-normal mb-5 sm:mb-7 max-w-lg lg:max-w-xl">
              {current.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Primary Admissions Button */}
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-[#e31e24] hover:bg-[#c9181e] active:scale-95 shadow-lg shadow-red-600/30 transition-all duration-200 text-center"
              >
                <span>Admissions 2027-28</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary Virtual Tour Button */}
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                aria-label="Play virtual campus tour video"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-[#031c3f]/50 hover:bg-[#031c3f]/80 active:scale-95 border border-white/40 backdrop-blur-sm transition-all duration-200 group cursor-pointer text-center"
              >
                <span>Take a Virtual Tour</span>
                <Play className="w-3 h-3 fill-white text-white group-hover:scale-110 transition-transform ml-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Right Carousel Controls matching design */}
        <div className="absolute bottom-3 sm:bottom-5 lg:bottom-6 right-3 sm:right-6 lg:right-12 z-20 flex items-center gap-2 sm:gap-2.5">
          {/* Previous Button (Dark) */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#031c3f] hover:bg-[#02132d] text-white flex items-center justify-center transition-colors border border-white/10 shadow-lg cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx
                    ? 'w-5 sm:w-6 h-2 sm:h-2.5 bg-[#e31e24]'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white opacity-85 hover:opacity-100'
                }`}
              />
            ))}
          </div>

          {/* Next Button (White) */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-100 text-[#031c3f] flex items-center justify-center transition-colors shadow-lg cursor-pointer"
          >
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#031c3f]" />
          </button>
        </div>
      </div>

      {/* Magnified Virtual Tour Video Modal Popup */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsVideoModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Virtual Tour Video"
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

            {/* Magnified 16:9 Video Container */}
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

