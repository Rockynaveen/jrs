'use client'

import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'

// Types
interface PhotoItem {
  id: string
  title: string
  category: 'Celebrations' | 'Activities' | 'Sports' | 'Campus' | 'All'
  image: string
}

// Complete Unified Photo Gallery Dataset (All dates stripped)
const ALL_GALLERY_IMAGES: PhotoItem[] = [
  // Campus & Infrastructure
  {
    id: 'amphi-1',
    title: 'Amphitheatre - Aerial View with Running Track & Sports Ground',
    category: 'Campus',
    image: '/images/amphitheatre/1.jpg',
  },
  {
    id: 'campus-1',
    title: 'Main Campus Building - State-of-the-Art Academic Block',
    category: 'Campus',
    image: '/images/campus/main-building.png',
  },
  {
    id: 'classroom-1',
    title: 'Modern Smart Classroom with Interactive Digital Learning',
    category: 'Campus',
    image: '/images/classrooms/1.png',
  },
  {
    id: 'amphi-2',
    title: 'Amphitheatre - Open-Air Tiered Seating under Heritage Tree',
    category: 'Campus',
    image: '/images/amphitheatre/2.jpg',
  },
  {
    id: 'campus-2',
    title: 'Main Entrance & Grand Administrative Portico',
    category: 'Campus',
    image: '/images/campus/entrance-1.png',
  },
  {
    id: 'classroom-2',
    title: 'Ergonomic Student Workspaces & Activity Tables',
    category: 'Campus',
    image: '/images/classrooms/2.png',
  },

  // Annual Day & Cultural Celebrations
  {
    id: 'feb17-1',
    title: 'Annual Day Celebrations - Student Guard of Honour',
    category: 'Celebrations',
    image: '/images/feb%2017/1.webp',
  },
  {
    id: 'feb11-1',
    title: 'Annual Day Celebrations - Stage LED Cultural Showcase',
    category: 'Celebrations',
    image: '/images/feb%2011/1.webp',
  },
  {
    id: 'feb17-3',
    title: 'Annual Day Celebrations - UTSAHA Grand Stage Production',
    category: 'Celebrations',
    image: '/images/feb%2017/3.webp',
  },
  {
    id: 'feb11-2',
    title: 'Annual Day Celebrations - Shimmer & Shades Performing Arts',
    category: 'Celebrations',
    image: '/images/feb%2011/2.webp',
  },
  {
    id: 'feb17-4',
    title: 'Annual Day Celebrations - Primary Students Stage Dance',
    category: 'Celebrations',
    image: '/images/feb%2017/4.webp',
  },
  {
    id: 'feb11-3',
    title: 'Annual Day Celebrations - Special Guest & Dignitaries Tribute',
    category: 'Celebrations',
    image: '/images/feb%2011/3.webp',
  },
  {
    id: 'feb17-5',
    title: 'Annual Day Celebrations - Cultural Dance Ensemble',
    category: 'Celebrations',
    image: '/images/feb%2017/5.webp',
  },
  {
    id: 'feb11-4',
    title: 'Annual Day Celebrations - Cultural Stage Drama & Theatre',
    category: 'Celebrations',
    image: '/images/feb%2011/4.webp',
  },
  {
    id: 'feb17-6',
    title: 'Annual Day Celebrations - Patriotic Army Drama Presentation',
    category: 'Celebrations',
    image: '/images/feb%2017/6.webp',
  },

  // Science & Hands-On Activities
  {
    id: 'sci-1',
    title: 'Science Experiment - High-Precision Microscope Lab Observation',
    category: 'Activities',
    image: '/images/science-activities/1.jpg',
  },
  {
    id: 'sci-2',
    title: 'Martial Arts Training - Discipline & Karate Techniques',
    category: 'Sports',
    image: '/images/science-activities/2.png',
  },
  {
    id: 'sci-3',
    title: 'Chemistry Laboratory - Interactive Chemical Reactions & Analysis',
    category: 'Activities',
    image: '/images/science-activities/3.jpg',
  },
  {
    id: 'sci-4',
    title: 'Performing Arts - Classical Cultural Dance Choreography',
    category: 'Celebrations',
    image: '/images/science-activities/4.jpg',
  },
  {
    id: 'sci-5',
    title: 'Sports & Athletics - Professional Outdoor Roller Skating Session',
    category: 'Sports',
    image: '/images/science-activities/5.png',
  },
  {
    id: 'sci-6',
    title: 'Student Leadership - JRS Student Council in Official Blazers',
    category: 'Activities',
    image: '/images/science-activities/6.png',
  },
  {
    id: 'sci-7',
    title: 'Martial Arts - Outdoor Flexibility Drills & Kata Focus',
    category: 'Sports',
    image: '/images/science-activities/7.png',
  },
  {
    id: 'sci-8',
    title: 'Classroom Academics - Focus, Inquiry & Collaborative Learning',
    category: 'Activities',
    image: '/images/science-activities/8.png',
  },
  {
    id: 'sci-9',
    title: 'School Central Library - Reading Hour & Knowledge Exploration',
    category: 'Activities',
    image: '/images/science-activities/9.jpg',
  },
  {
    id: 'sci-10',
    title: 'Student Excellence - Confident Academic Achievers',
    category: 'Activities',
    image: '/images/science-activities/10.jpg',
  },

  // Republic Day Celebrations
  {
    id: 'rep-1',
    title: 'Republic Day Celebrations - Ceremonial Assembly & March Past',
    category: 'Celebrations',
    image: '/images/republicday/1.webp',
  },
  {
    id: 'rep-2',
    title: 'Republic Day Celebrations - Tricolor Tribute & Floral Honors',
    category: 'Celebrations',
    image: '/images/republicday/2.webp',
  },
  {
    id: 'rep-3',
    title: 'Republic Day Celebrations - Patriotic Songs & Student Choirs',
    category: 'Celebrations',
    image: '/images/republicday/3.webp',
  },
  {
    id: 'rep-4',
    title: 'Republic Day Celebrations - Freedom Fighter Tribute Tableau',
    category: 'Celebrations',
    image: '/images/republicday/4.webp',
  },
  {
    id: 'rep-5',
    title: 'Republic Day Celebrations - National Pride Cultural Display',
    category: 'Celebrations',
    image: '/images/republicday/5.webp',
  },
  {
    id: 'rep-6',
    title: 'Republic Day Celebrations - Student March Past & Salutation',
    category: 'Celebrations',
    image: '/images/republicday/6.webp',
  },
  {
    id: 'rep-7',
    title: 'Republic Day Celebrations - Flag Hoisting by School Leadership',
    category: 'Celebrations',
    image: '/images/republicday/7.webp',
  },
  {
    id: 'rep-8',
    title: 'Republic Day Celebrations - Student Drill Performance',
    category: 'Celebrations',
    image: '/images/republicday/8.webp',
  },
  {
    id: 'rep-9',
    title: 'Republic Day Celebrations - Synchronized Marching Contingents',
    category: 'Celebrations',
    image: '/images/republicday/9.webp',
  },
  {
    id: 'rep-10',
    title: 'Republic Day Celebrations - National Anthem & Salute',
    category: 'Celebrations',
    image: '/images/republicday/10.webp',
  },

  // Additional Campus & Stage Highlights
  {
    id: 'feb11-5',
    title: 'Annual Day Celebrations - Dynamic Fusion Dance Troupe',
    category: 'Celebrations',
    image: '/images/feb%2011/5.webp',
  },
  {
    id: 'feb11-7',
    title: 'Annual Day Celebrations - Thematic Cultural Choreography',
    category: 'Celebrations',
    image: '/images/feb%2011/7.webp',
  },
  {
    id: 'feb11-8',
    title: 'Annual Day Celebrations - Traditional Classical Ensemble',
    category: 'Celebrations',
    image: '/images/feb%2011/8.webp',
  },
  {
    id: 'feb11-9',
    title: 'Annual Day Celebrations - Rhythm & Beats Group Performance',
    category: 'Celebrations',
    image: '/images/feb%2011/9.webp',
  },
  {
    id: 'feb11-10',
    title: 'Annual Day Celebrations - Vibrant Costumes on Stage',
    category: 'Celebrations',
    image: '/images/feb%2011/10.webp',
  },
  {
    id: 'feb11-11',
    title: 'Annual Day Celebrations - Festive Folk Dance Extravaganza',
    category: 'Celebrations',
    image: '/images/feb%2011/11.webp',
  },
  {
    id: 'feb11-12',
    title: 'Annual Day Celebrations - Senior Students Spotlight Performance',
    category: 'Celebrations',
    image: '/images/feb%2011/12.webp',
  },
  {
    id: 'feb11-13',
    title: 'Annual Day Celebrations - Grand Finale Musical Showcase',
    category: 'Celebrations',
    image: '/images/feb%2011/13.webp',
  },
  {
    id: 'feb11-14',
    title: 'Annual Day Celebrations - Expressive Stage Performance',
    category: 'Celebrations',
    image: '/images/feb%2011/14.webp',
  },
  {
    id: 'feb11-15',
    title: 'Annual Day Celebrations - Youth Performing Arts Talents',
    category: 'Celebrations',
    image: '/images/feb%2011/15.webp',
  },
  {
    id: 'feb11-16',
    title: 'Annual Day Celebrations - Vibrant Lighting & Stage Art',
    category: 'Celebrations',
    image: '/images/feb%2011/16.webp',
  },
  {
    id: 'feb11-17',
    title: 'Annual Day Celebrations - Cheering Audience & Memorable Moments',
    category: 'Celebrations',
    image: '/images/feb%2011/17.webp',
  },
  {
    id: 'feb11-18',
    title: 'Annual Day Celebrations - Meritorious Student Felicitation',
    category: 'Celebrations',
    image: '/images/feb%2011/18.webp',
  },
  {
    id: 'feb17-2',
    title: 'Annual Day Celebrations - Chief Guests & Dignitaries Felicitation',
    category: 'Celebrations',
    image: '/images/feb%2017/2.webp',
  },
  {
    id: 'feb17-7',
    title: 'Annual Day Celebrations - Sparkle Dance Ensemble',
    category: 'Celebrations',
    image: '/images/feb%2017/7.webp',
  },
  {
    id: 'feb17-8',
    title: 'Annual Day Celebrations - Open-Air Arena Assembly Venue',
    category: 'Campus',
    image: '/images/feb%2017/8.webp',
  },
  {
    id: 'amphi-3',
    title: 'Amphitheatre - Stone Tier Architecture & Shaded Greenery',
    category: 'Campus',
    image: '/images/amphitheatre/3.png',
  },
  {
    id: 'classroom-3',
    title: 'Digital Classrooms - Modern Interactive Audio-Visual Smart Boards',
    category: 'Campus',
    image: '/images/classrooms/3.png',
  },
  {
    id: 'classroom-4',
    title: 'Well-Ventilated Classrooms with Natural Light and Comfort',
    category: 'Campus',
    image: '/images/classrooms/4.png',
  },
  {
    id: 'campus-3',
    title: 'Campus Front Entrance with Green Landscaped Walkways',
    category: 'Campus',
    image: '/images/campus/entrance-2.png',
  },
  {
    id: 'rep-11',
    title: 'Republic Day Celebrations - Ceremonial Student Parade Drill',
    category: 'Celebrations',
    image: '/images/republicday/11.webp',
  },
  {
    id: 'rep-12',
    title: 'Republic Day Celebrations - Cultural Tableau on Heritage',
    category: 'Celebrations',
    image: '/images/republicday/12.webp',
  },
  {
    id: 'rep-13',
    title: 'Republic Day Celebrations - Inspirational Leadership Speeches',
    category: 'Celebrations',
    image: '/images/republicday/13.webp',
  },
  {
    id: 'rep-14',
    title: 'Republic Day Celebrations - Student Choir Musical Presentation',
    category: 'Celebrations',
    image: '/images/republicday/14.webp',
  },
  {
    id: 'rep-15',
    title: 'Republic Day Celebrations - Flag Salutation with Teachers & Staff',
    category: 'Celebrations',
    image: '/images/republicday/15.webp',
  },
  {
    id: 'rep-16',
    title: 'Republic Day Celebrations - Student Leaders March Past',
    category: 'Celebrations',
    image: '/images/republicday/16.webp',
  },
  {
    id: 'rep-17',
    title: 'Republic Day Celebrations - Youth Parade Ceremony',
    category: 'Celebrations',
    image: '/images/republicday/17.webp',
  },
  {
    id: 'rep-18',
    title: 'Republic Day Celebrations - Patriotic Song Choreography',
    category: 'Celebrations',
    image: '/images/republicday/18.webp',
  },
  {
    id: 'rep-19',
    title: 'Republic Day Celebrations - School Band & Percussion Ensemble',
    category: 'Celebrations',
    image: '/images/republicday/19.webp',
  },
  {
    id: 'rep-20',
    title: 'Republic Day Celebrations - Students Holding National Flags',
    category: 'Celebrations',
    image: '/images/republicday/20.webp',
  },
  {
    id: 'rep-21',
    title: 'Republic Day Celebrations - Grand Finale Assembly',
    category: 'Celebrations',
    image: '/images/republicday/21.webp',
  },
]

export default function GalleryPage() {
  // Show 15 images initially (multiple of 3, between 12 and 16)
  const [visibleCount, setVisibleCount] = useState<number>(15)
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null)
  const [lightboxItems, setLightboxItems] = useState<PhotoItem[]>([])
  const [isClosing, setIsClosing] = useState(false)
  const [originStyle, setOriginStyle] = useState<{ x: number; y: number; scale: number } | null>(null)

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  // Visible subset for masonry layout
  const visibleImages = ALL_GALLERY_IMAGES.slice(0, visibleCount)

  const handleViewMore = () => {
    // Show remaining images in increments of 15
    setVisibleCount((prev) => Math.min(prev + 15, ALL_GALLERY_IMAGES.length))
  }

  const closeLightbox = () => {
    setIsClosing(true)
    setTimeout(() => {
      setActiveLightboxIndex(null)
      setIsClosing(false)
      setOriginStyle(null)
    }, 240)
  }

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      }
      if (activeLightboxIndex !== null && lightboxItems.length > 0) {
        if (e.key === 'ArrowRight') {
          setOriginStyle(null)
          setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % lightboxItems.length : 0))
        }
        if (e.key === 'ArrowLeft') {
          setOriginStyle(null)
          setActiveLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + lightboxItems.length) % lightboxItems.length : 0
          )
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeLightboxIndex, lightboxItems])

  const openLightbox = (items: PhotoItem[], index: number, e?: React.MouseEvent) => {
    if (e && e.currentTarget) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const screenCenterX = window.innerWidth / 2
      const screenCenterY = window.innerHeight / 2

      const deltaX = Math.round(centerX - screenCenterX)
      const deltaY = Math.round(centerY - screenCenterY)
      const scale = Math.max(0.2, Math.min(0.55, rect.width / Math.min(window.innerWidth * 0.85, 900)))

      setOriginStyle({ x: deltaX, y: deltaY, scale })
    } else {
      setOriginStyle(null)
    }
    setLightboxItems(items)
    setActiveLightboxIndex(index)
    setIsClosing(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111] antialiased selection:bg-[#e31e24] selection:text-white">
      {/* 1. Navbar */}
      <Navbar activePage="gallery" />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <PageHero
          breadcrumb="Gallery"
          title="Photo & Event"
          titleHighlight="Gallery"
          subtitle="Moments of Excellence, Passion & Achievement"
          description="Explore vibrant campus life, extracurricular achievements, sports, and cultural milestones celebrated at JRS International School."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Gallery"
          primaryButton={{
            text: 'Explore Gallery',
            href: '#gallery-grid',
          }}
          secondaryButton={{
            text: 'Admissions 2027-28',
            href: '/admissions',
          }}
        />

        {/* 3. Unified Masonry Gallery Section */}
        <section id="gallery-grid" className="py-12 sm:py-16 md:py-20 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Section Header (No dates) */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14" data-aos="fade-up">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#031c3f]" />
                <span
                  style={{ fontSize: '13px', lineHeight: '23px' }}
                  className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]"
                >
                  CAMPUS LIFE & MOMENTS
                </span>
                <span className="w-8 h-[2px] bg-[#031c3f]" />
              </div>
              <h2
                style={{ fontSize: '40px', lineHeight: '50px' }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                School Life <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>in Action</span>
              </h2>
              <p className="mt-2 text-[#111] text-sm sm:text-[15px] max-w-2xl mx-auto leading-relaxed font-normal">
                A glimpse into our classrooms, laboratories, cultural festivities, sports competitions, and campus celebrations.
              </p>
            </div>

            {/* 3 Images Per Row Masonry Style Layout without Shadow & without Border Radius */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 sm:gap-6 [column-fill:_balance]">
              {visibleImages.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 60}
                  onClick={(e) => openLightbox(ALL_GALLERY_IMAGES, index, e)}
                  className="break-inside-avoid mb-5 sm:mb-6 group cursor-pointer block w-full rounded-none shadow-none"
                >
                  {/* Image Container with No Shadow and No Border Radius */}
                  <div className="relative overflow-hidden bg-slate-100 rounded-none shadow-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-auto block rounded-none shadow-none group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.src = '/images/campus-building.jpg'
                      }}
                    />

                    {/* Subtle Dark Hover Tint with Centered Zoom Icon */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-none pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-md">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Clean Title without dates */}
                  {item.title && (
                    <div className="pt-2 px-0.5">
                      <p className="text-xs sm:text-[13px] font-medium text-[#111] leading-snug group-hover:text-[#e31e24] transition-colors line-clamp-2">
                        {item.title}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Center "View More" Button at bottom */}
            {visibleCount < ALL_GALLERY_IMAGES.length && (
              <div className="flex flex-col items-center justify-center mt-10 sm:mt-14" data-aos="fade-up">
                <button
                  type="button"
                  onClick={handleViewMore}
                  className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-none text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#e31e24] hover:bg-[#c9181e] transition-all duration-300 active:scale-95 cursor-pointer shadow-none"
                >
                  <span>View More Images</span>
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </button>
                <span className="text-xs text-[#111] mt-2.5 font-normal">
                  Showing {visibleImages.length} of {ALL_GALLERY_IMAGES.length} images
                </span>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* 4. Magnified Image Lightbox Modal */}
      {activeLightboxIndex !== null && lightboxItems[activeLightboxIndex] && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/92 backdrop-blur-md transition-opacity duration-200 select-none ${
            isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-fade-in'
          }`}
          onClick={closeLightbox}
        >
          {/* Main Top-Right Screen Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="fixed top-3 right-3 sm:top-6 sm:right-6 z-[70] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#e31e24] hover:bg-[#b91c1c] text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl border-2 border-white hover:scale-110 active:scale-95"
            aria-label="Close popup"
            title="Close (Esc)"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setOriginStyle(null)
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + lightboxItems.length) % lightboxItems.length : 0
              )
            }}
            className="absolute left-2 sm:left-6 z-50 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-[#e31e24] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/30"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setOriginStyle(null)
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % lightboxItems.length : 0
              )
            }}
            className="absolute right-2 sm:right-6 z-50 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-[#e31e24] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/30"
            aria-label="Next Image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Center Image Container */}
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              key={activeLightboxIndex}
              className={`flex flex-col items-center justify-center w-full ${
                isClosing ? 'animate-zoom-close' : 'animate-zoom-open'
              }`}
              style={
                {
                  '--origin-x': `${originStyle?.x ?? 0}px`,
                  '--origin-y': `${originStyle?.y ?? 0}px`,
                  '--origin-scale': originStyle ? `${originStyle.scale}` : '0.85',
                } as React.CSSProperties
              }
            >
              <img
                src={lightboxItems[activeLightboxIndex].image}
                alt={lightboxItems[activeLightboxIndex].title}
                className="max-h-[82vh] max-w-full w-auto h-auto object-contain rounded-none shadow-2xl ring-1 ring-white/15 transition-all duration-200"
              />
              {/* Title / Counter bar without dates */}
              <div className="mt-3 flex items-center justify-between w-full max-w-2xl px-4 py-2 rounded-none bg-white/15 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/20">
                <span className="truncate">{lightboxItems[activeLightboxIndex].title}</span>
                <span className="shrink-0 text-amber-400 font-bold ml-4">
                  {activeLightboxIndex + 1} / {lightboxItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
