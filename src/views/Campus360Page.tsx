'use client'

import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface CampusViewItem {
  id: string
  title: string
  category: string
  image: string
}

const CAMPUS_360_VIEWS: CampusViewItem[] = [
  {
    id: 'main-building',
    title: 'Iconic Academic Block & Main Entrance',
    category: 'Architecture',
    image: '/images/campus/main-building-front.jpg',
  },
  {
    id: 'panoramic-campus',
    title: 'Expansive Campus Panorama & Running Track',
    category: 'Campus Panorama',
    image: '/images/campus/campus-panoramic-view.jpg',
  },
  {
    id: 'sports-court',
    title: 'Multi-Sport Court & Outdoor Arena',
    category: 'Sports & Fitness',
    image: '/images/campus/sports-court.jpg',
  },
  {
    id: 'athletic-track',
    title: 'Athletic Running Track & Sports Ground',
    category: 'Athletics',
    image: '/images/campus/athletic-running-track.jpg',
  },
  {
    id: 'kids-playground',
    title: 'Kindergarten & Primary Play Station',
    category: 'Recreation',
    image: '/images/campus/kids-playground.jpg',
  },
  {
    id: 'central-library',
    title: 'Central Library & Knowledge Hub',
    category: 'Learning Resources',
    image: '/images/campus/library-reading.jpg',
  },
  {
    id: 'innovation-lab',
    title: 'STEM & Design Thinking Innovation Lab',
    category: 'Hands-on Learning',
    image: '/images/campus/student-innovation-lab.jpg',
  },
]

export default function Campus360Page() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  // Keyboard navigation for Lightbox & lock scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null)
      }
      if (activeLightboxIndex !== null) {
        if (e.key === 'ArrowRight') {
          setActiveLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % CAMPUS_360_VIEWS.length : 0
          )
        }
        if (e.key === 'ArrowLeft') {
          setActiveLightboxIndex((prev) =>
            prev !== null
              ? (prev - 1 + CAMPUS_360_VIEWS.length) % CAMPUS_360_VIEWS.length
              : 0
          )
        }
      }
    }

    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [activeLightboxIndex])

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Header with active gallery dropdown */}
      <Navbar activePage="360-degree-campus" />

      <main className="flex-1 bg-white">
        {/* 2. Hero Section */}
        <PageHero
          breadcrumb="Gallery"
          title="360 Degree"
          titleHighlight="Campus"
          subtitle="Explore our vibrant campus through visual highlights"
          description="Immerse yourself in high-definition perspectives showcasing our world-class architecture, expansive green grounds, athletic sports arenas, and modern learning spaces."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School 360 Degree Campus Tour"
        />

        {/* 3. Campus 360° Perspectives & Photo Highlights */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14" data-aos="fade-up">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#031c3f]" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]">
                  CAMPUS PERSPECTIVES & VIEWS
                </span>
                <span className="w-8 h-[2px] bg-[#031c3f]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#031c3f] tracking-tight leading-tight mb-3">
                Signature Campus <span className="text-[#e31e24]">Highlights</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Explore high-resolution visual perspectives of our academic infrastructure, athletic facilities, children&apos;s play areas, and rich learning spaces.
              </p>
            </div>

            {/* Grid: 2 Large Cards, 3 Cards, 2 Large Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-7">
              {CAMPUS_360_VIEWS.map((item, index) => {
                const isWide = index < 2 || index >= 5
                return (
                  <div
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    onClick={() => setActiveLightboxIndex(index)}
                    className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer bg-slate-900 ${
                      isWide ? 'lg:col-span-3' : 'lg:col-span-2'
                    }`}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          const target = e.currentTarget
                          target.src = '/images/campus-building.jpg'
                        }}
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#031c3f] font-bold text-[11px] shadow-sm uppercase tracking-wider">
                          {item.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                          <ZoomIn className="w-4 h-4 stroke-[2.5]" />
                        </div>
                      </div>

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#031c3f]/90 via-[#031c3f]/25 to-transparent flex flex-col justify-end p-4 sm:p-5 text-white transition-opacity duration-300">
                        <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-snug drop-shadow-xs">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-semibold text-slate-300">
                  {activeLightboxIndex + 1} / {CAMPUS_360_VIEWS.length}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs sm:text-sm font-bold text-amber-400">
                  {CAMPUS_360_VIEWS[activeLightboxIndex].category}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveLightboxIndex(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Frame with Navigation */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-black/60 shadow-2xl flex items-center justify-center max-h-[72vh]">
              <img
                src={CAMPUS_360_VIEWS[activeLightboxIndex].image}
                alt={CAMPUS_360_VIEWS[activeLightboxIndex].title}
                className="max-w-full max-h-[72vh] w-auto h-auto object-contain select-none"
              />

              {/* Prev / Next Arrows */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveLightboxIndex(
                    (prev) =>
                      prev !== null
                        ? (prev - 1 + CAMPUS_360_VIEWS.length) % CAMPUS_360_VIEWS.length
                        : 0
                  )
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Previous view"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveLightboxIndex(
                    (prev) =>
                      prev !== null
                        ? (prev + 1) % CAMPUS_360_VIEWS.length
                        : 0
                  )
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Next view"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption */}
            <div className="w-full text-center mt-3 px-4">
              <h4 className="text-sm sm:text-base font-bold text-white">
                {CAMPUS_360_VIEWS[activeLightboxIndex].title}
              </h4>
            </div>
          </div>
        </div>
      )}

      {/* 4. Footer */}
      <Footer />
    </div>
  )
}
