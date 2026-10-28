'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

// Clean SVG Icons matching the reference design
const ClassroomDeskIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="5" y="4" width="14" height="8" rx="1.5" />
    <path d="M3 15h18" />
    <path d="M5 15v5" />
    <path d="M19 15v5" />
    <circle cx="12" cy="18" r="1.5" />
  </svg>
)

const LabFlaskIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 2v5.5L4.5 18c-.8 1.4.2 3 1.8 3h11.4c1.6 0 2.6-1.6 1.8-3L14 7.5V2" />
    <path d="M8.5 2h7" />
    <path d="M7 15h10" />
    <circle cx="10" cy="18" r="0.5" fill="currentColor" />
    <circle cx="13" cy="17" r="0.5" fill="currentColor" />
  </svg>
)

const BrainCognitiveIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 .7.16 1.36.45 1.95A4 4 0 0 0 5 12a4 4 0 0 0 1.5 3.12A4.5 4.5 0 0 0 11 19.5v.5a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-.5a4.5 4.5 0 0 0 4.5-4.38A4 4 0 0 0 20 12a4 4 0 0 0-2.95-3.55c.29-.59.45-1.25.45-1.95A4.5 4.5 0 0 0 13 2h-1Z" />
    <path d="M12 2v18" />
    <path d="M7.5 9h9" />
    <path d="M6.5 14h11" />
  </svg>
)

const OpenBookIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

const RunningAthleteIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="15" cy="4" r="2" />
    <path d="m13 8-3 4 2 2-3 6" />
    <path d="m10 12-4-1" />
    <path d="m14 10 3 2 3-1" />
    <path d="m12 14 3 3 3-1" />
  </svg>
)

const SchoolBusIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="3" width="16" height="15" rx="3" />
    <path d="M4 11h16" />
    <path d="M4 6h16" />
    <circle cx="7.5" cy="15" r="1.5" />
    <circle cx="16.5" cy="15" r="1.5" />
    <path d="M6 18v2" />
    <path d="M18 18v2" />
  </svg>
)

const facilities = [
  {
    slug: 'smart-classrooms',
    title: 'Smart Classrooms',
    subtitle: 'Modern and interactive learning spaces',
    image: '/images/facilities/smart-classroom.jpg',
    icon: ClassroomDeskIcon,
    waveColor: 'text-[#031c3f]',
    iconBg: 'bg-[#031c3f]',
    href: '/facilities/smart-classrooms',
  },
  {
    slug: 'science-computer-labs',
    title: 'Science & Computer Labs',
    subtitle: 'Well-equipped labs for hands-on learning',
    image: '/images/facilities/science-lab.jpg',
    icon: LabFlaskIcon,
    waveColor: 'text-[#e31e24]',
    iconBg: 'bg-[#e31e24]',
    href: '/facilities/science-computer-labs',
  },
  {
    slug: 'cognospace',
    title: 'Cognospace',
    subtitle: 'Innovative cognitive learning & creative discovery zone',
    image: '/images/facilities/cognospace.jpg',
    icon: BrainCognitiveIcon,
    waveColor: 'text-[#031c3f]',
    iconBg: 'bg-[#031c3f]',
    href: '/facilities/cognospace',
  },
  {
    slug: 'library',
    title: 'Library',
    subtitle: 'A world of knowledge and imagination',
    image: '/images/facilities/library.jpg',
    icon: OpenBookIcon,
    waveColor: 'text-[#e31e24]',
    iconBg: 'bg-[#e31e24]',
    href: '/facilities/library',
  },
  {
    slug: 'sports-facilities',
    title: 'Sports Facilities',
    subtitle: 'Indoor & outdoor sports for all-round growth',
    image: '/images/facilities/sports.jpg',
    icon: RunningAthleteIcon,
    waveColor: 'text-[#031c3f]',
    iconBg: 'bg-[#031c3f]',
    href: '/facilities/sports-facilities',
  },
  {
    slug: 'transport',
    title: 'Transport',
    subtitle: 'Safe, reliable and secure transport',
    image: '/images/facilities/transport.jpg',
    icon: SchoolBusIcon,
    waveColor: 'text-[#e31e24]',
    iconBg: 'bg-[#e31e24]',
    href: '/facilities/transport',
  },
]

export default function FacilitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4)
  const [isHovered, setIsHovered] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // Responsive cardsPerView (1 on mobile, 2 on tablet, 4 on desktop)
  useEffect(() => {
    const updateCardsPerView = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setCardsPerView(1)
        } else if (window.innerWidth < 1024) {
          setCardsPerView(2)
        } else {
          setCardsPerView(4)
        }
      }
    }
    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, facilities.length - cardsPerView)

  // Ensure index stays valid when window is resized
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [maxIndex, currentIndex])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Autoplay (pauses when hovered)
  useEffect(() => {
    if (isHovered || maxIndex === 0) return
    const timer = setInterval(() => {
      nextSlide()
    }, 4500)
    return () => clearInterval(timer)
  }, [isHovered, maxIndex, nextSlide])

  // Touch swipe support for mobile/tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section id="facilities" className="py-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 relative" data-aos="fade-up">
          {/* Eyebrow: — OUR FACILITIES — */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#e31e24]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
              OUR FACILITIES
            </span>
            <span className="w-8 h-[2px] bg-[#e31e24]" />
          </div>

          {/* Heading */}
          <h2
            style={{ lineHeight: '50px' }}
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
          >
            World-Class <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Infrastructure</span>
          </h2>

          {/* Subtitle */}
          <p
            style={{ margin: 0, lineHeight: '26px' }}
            className="text-slate-600 text-[15px] sm:text-base m-0 leading-[26px] sm:leading-[26px] mt-1"
          >
            Modern facilities designed to inspire, explore and grow
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative px-0 sm:px-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Floating Left Arrow */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous facility"
            className="absolute -left-3 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#031c3f] hover:bg-[#e31e24] hover:text-white shadow-lg border border-slate-200/90 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </button>

          {/* Floating Right Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next facility"
            className="absolute -right-3 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#031c3f] hover:bg-[#e31e24] hover:text-white shadow-lg border border-slate-200/90 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </button>

          {/* Overflow Hidden Viewport */}
          <div className="overflow-hidden py-4 -my-4">
            {/* Sliding Track: 4 cards per row on desktop (lg), 2 on tablet (sm), 1 on mobile */}
            <div
              className="flex transition-transform duration-500 ease-out -mx-2.5 sm:-mx-3"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {facilities.map((facility, index) => {
                const Icon = facility.icon
                return (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-2.5 sm:px-3 flex flex-col"
                  >
                    <Link
                      href={facility.href}
                      style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                      className="bg-white rounded-3xl overflow-hidden transition-all duration-300 border border-slate-100 flex flex-col h-full group hover:-translate-y-1.5 cursor-pointer w-full select-none"
                    >
                      {/* Photo with Organic Wave Cut at Bottom */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                        <SchoolImage
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          fallbackText={facility.title}
                          fallbackBg="from-slate-100 via-blue-50 to-slate-200"
                        />

                        {/* Organic Colored Wave Rising on the Right */}
                        <div className="absolute bottom-0 left-0 right-0 pointer-events-none leading-none z-10">
                          <svg
                            viewBox="0 0 300 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-full h-10 sm:h-12 block ${facility.waveColor}`}
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M 0,90 L 0,65 C 50,65 85,82 135,76 C 190,70 230,28 300,8 L 300,90 Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Floating Circle Icon */}
                      <div className="relative px-4 sm:px-4.5 z-20 -mt-5">
                        <div
                          className={`w-10 h-10 rounded-full ${facility.iconBg} text-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}
                        >
                          <Icon className="w-5 h-5 stroke-[2]" />
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="pt-2 pb-5 sm:pb-6 px-4 sm:px-4.5 flex flex-col flex-1 justify-between">
                        <div>
                          {/* Facility Title */}
                          <h3 className="text-[15px] sm:text-[16px] font-bold text-[#031c3f] tracking-tight leading-snug min-h-[44px] flex items-center group-hover:text-[#e31e24] transition-colors">
                            {facility.title}
                          </h3>

                          {/* Facility Subtitle */}
                          <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed mt-1">
                            {facility.subtitle}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Pagination Indicators / Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-[#e31e24]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
