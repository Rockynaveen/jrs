'use client'

import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import {
  Compass,
  Building,
  Bus,
  Users,
  Trophy,
  Briefcase,
  Award,
  Landmark,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from 'lucide-react'

export interface Campus360Item {
  id: string
  title: string
  category: 'Campus' | 'Classrooms' | 'Sports' | 'Administration' | 'Facilities' | 'Others'
  image: string
  icon: React.ComponentType<{ className?: string }>
}

const ITEMS_360: Campus360Item[] = [
  {
    id: 'entrance-1',
    title: 'Entrance',
    category: 'Campus',
    image: '/images/360/R0013410.jpg',
    icon: Building,
  },
  {
    id: 'entrance-2',
    title: 'Entrance',
    category: 'Campus',
    image: '/images/360/R0013411.jpg',
    icon: Building,
  },
  {
    id: 'transport-1',
    title: 'Transport',
    category: 'Facilities',
    image: '/images/360/R0013412.jpg',
    icon: Bus,
  },
  {
    id: 'amphitheatre-1',
    title: 'Amphitheatre',
    category: 'Campus',
    image: '/images/360/R0013413.jpg',
    icon: Landmark,
  },
  {
    id: 'amphitheatre-2',
    title: 'Amphitheatre',
    category: 'Campus',
    image: '/images/360/R0013414.jpg',
    icon: Landmark,
  },
  {
    id: 'amphitheatre-3',
    title: 'Amphitheatre',
    category: 'Campus',
    image: '/images/360/R0013415.jpg',
    icon: Landmark,
  },
  {
    id: 'amphitheatre-4',
    title: 'Amphitheatre',
    category: 'Campus',
    image: '/images/360/R0013416.jpg',
    icon: Landmark,
  },
  {
    id: 'amphitheatre-5',
    title: 'Amphitheatre',
    category: 'Campus',
    image: '/images/360/R0013417.jpg',
    icon: Landmark,
  },
  {
    id: 'volleyball-court',
    title: 'Volleyball Court',
    category: 'Sports',
    image: '/images/360/R0013418.jpg',
    icon: Trophy,
  },
  {
    id: 'front-office-1',
    title: 'Front Office',
    category: 'Administration',
    image: '/images/360/R0013419.jpg',
    icon: Building,
  },
  {
    id: 'front-office-2',
    title: 'Front Office',
    category: 'Administration',
    image: '/images/360/R0013421.jpg',
    icon: Building,
  },
  {
    id: 'classrooms-1',
    title: 'Classrooms',
    category: 'Classrooms',
    image: '/images/360/R0013422.jpg',
    icon: Users,
  },
  {
    id: 'admin-office',
    title: 'Admin Office',
    category: 'Administration',
    image: '/images/360/R0013423.jpg',
    icon: Briefcase,
  },
  {
    id: 'principal-office',
    title: 'Principal Office',
    category: 'Administration',
    image: '/images/360/R0013424.jpg',
    icon: Award,
  },
  {
    id: 'main-building-1',
    title: 'Main Building',
    category: 'Campus',
    image: '/images/360/R0013425.jpg',
    icon: Landmark,
  },
  {
    id: 'transport-2',
    title: 'Transport',
    category: 'Facilities',
    image: '/images/360/R0013427.jpg',
    icon: Bus,
  },
  {
    id: 'classrooms-2',
    title: 'Classrooms',
    category: 'Classrooms',
    image: '/images/360/R0013428.jpg',
    icon: Users,
  },
  {
    id: 'classrooms-3',
    title: 'Classrooms',
    category: 'Classrooms',
    image: '/images/360/R0013429.jpg',
    icon: Users,
  },
  {
    id: 'classrooms-4',
    title: 'Classrooms',
    category: 'Classrooms',
    image: '/images/360/R0013430.jpg',
    icon: Users,
  },
  {
    id: 'classrooms-5',
    title: 'Classrooms',
    category: 'Classrooms',
    image: '/images/360/R0013431.jpg',
    icon: Users,
  },
  {
    id: 'main-building-2',
    title: 'Main Building',
    category: 'Campus',
    image: '/images/360/R0013432.jpg',
    icon: Landmark,
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

  // Lightbox keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return
      if (e.key === 'Escape') setActiveLightboxIndex(null)
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % ITEMS_360.length : 0
        )
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + ITEMS_360.length) % ITEMS_360.length : 0
        )
      }
    }

    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeLightboxIndex])

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index)
  }

  const closeLightbox = () => {
    setActiveLightboxIndex(null)
  }

  const currentItem =
    activeLightboxIndex !== null ? ITEMS_360[activeLightboxIndex] : null

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Header with active gallery dropdown */}
      <Navbar activePage="360-degree-campus" />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <PageHero
          breadcrumb="Gallery"
          title="360 Degree"
          titleHighlight="Campus"
          subtitle="Explore our vibrant campus through 360° views"
          description="Immerse yourself in high-definition panoramic perspectives showcasing our world-class architecture, expansive green grounds, smart classrooms, and modern amenities."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School 360 Degree Campus Tour"
          primaryButton={{
            text: 'Explore 360° Views',
            href: '#campus-360-views',
          }}
          secondaryButton={{
            text: 'Photo Gallery',
            href: '/gallery',
          }}
        />

        {/* 3. 360 Panoramic Cards Grid (2 Columns) */}
        <section id="campus-360-views" className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {ITEMS_360.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={(index % 4) * 80}
                    onClick={() => openLightbox(index)}
                    className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-200/80"
                  >
                    {/* Panoramic Image Frame */}
                    <div className="relative aspect-[16/10] sm:aspect-[2/1] w-full overflow-hidden bg-slate-800">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          const target = e.currentTarget
                          target.src = '/images/campus-building.jpg'
                        }}
                      />

                      {/* Subtle top-to-bottom dark gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* Zoom Hint Icon in Top Right */}
                      <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-4 h-4" />
                      </div>

                      {/* 360 Badge in Top Left */}
                      <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                        <span>360° View</span>
                      </div>
                    </div>

                    {/* Bottom Floating Overlay Pill Bar */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 bg-slate-950/80 group-hover:bg-[#031c3f]/95 backdrop-blur-md rounded-xl p-3 border border-white/15 flex items-center justify-between transition-colors duration-300 shadow-lg">
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
                          {item.title}
                        </span>
                      </div>

                      {/* White Circular Arrow Button */}
                      <div className="w-8 h-8 rounded-full bg-white text-[#031c3f] group-hover:bg-[#e31e24] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md shrink-0 group-hover:scale-110">
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 4. Fullscreen Lightbox / 360 Panoramic Viewer Modal */}
        {currentItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in select-none"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            {/* Top Toolbar */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>360° View</span>
                </div>
                <h3 className="text-white text-base sm:text-xl font-bold tracking-tight">
                  {currentItem.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close 360 preview"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#e31e24] hover:bg-[#b9151b] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 cursor-pointer"
              >
                <X className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

            {/* Navigation Buttons */}
            {ITEMS_360.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveLightboxIndex((prev) =>
                      prev !== null
                        ? (prev - 1 + ITEMS_360.length) % ITEMS_360.length
                        : 0
                    )
                  }}
                  aria-label="Previous view"
                  className="absolute left-3 sm:left-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 cursor-pointer border border-white/20"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveLightboxIndex((prev) =>
                      prev !== null ? (prev + 1) % ITEMS_360.length : 0
                    )
                  }}
                  aria-label="Next view"
                  className="absolute right-3 sm:right-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 cursor-pointer border border-white/20"
                >
                  <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                </button>
              </>
            )}

            {/* Image Container */}
            <div
              className="relative max-w-6xl w-full max-h-[85vh] p-4 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-slate-950">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                />
              </div>

              {/* Bottom Caption Info */}
              <div className="mt-3 flex items-center justify-between w-full max-w-xl text-slate-300 text-xs sm:text-sm px-2">
                <span className="font-semibold text-white">
                  {currentItem.title} ({currentItem.category})
                </span>
                <span className="text-slate-400">
                  {activeLightboxIndex !== null ? activeLightboxIndex + 1 : 0} of{' '}
                  {ITEMS_360.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  )
}
