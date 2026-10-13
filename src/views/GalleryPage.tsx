'use client'

import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import {
  ZoomIn,
  X,
  Play,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'

// Types
interface PhotoItem {
  id: string
  title: string
  category: 'Events' | 'Activities' | 'Sports' | 'Competitions' | 'Celebrations'
  image: string
  subtitle?: string
}

interface VideoItem {
  id: string
  title: string
  date: string
  thumbnail: string
  videoUrl?: string
}


// 1. Feb 17 Annual Day celebrations 2023-24 (8 images from feb 17 folder)
const FEB_17_IMAGES: PhotoItem[] = [
  {
    id: 'feb17-1',
    title: 'Feb 17 Annual Day celebrations 2023-24 - Student Guard of Honour',
    category: 'Celebrations',
    image: '/images/feb%2017/1.webp',
  },
  {
    id: 'feb17-2',
    title: 'Feb 17 Annual Day celebrations 2023-24 - Honored Guests & Dignitaries',
    category: 'Celebrations',
    image: '/images/feb%2017/2.webp',
  },
  {
    id: 'feb17-3',
    title: 'Feb 17 Annual Day celebrations 2023-24 - UTSAHA 2K24 Stage',
    category: 'Celebrations',
    image: '/images/feb%2017/3.webp',
  },
  {
    id: 'feb17-4',
    title: 'Feb 17 Annual Day celebrations 2023-24 - Primary Students Stage Dance',
    category: 'Celebrations',
    image: '/images/feb%2017/4.webp',
  },
  {
    id: 'feb17-5',
    title: 'Feb 17 Annual Day celebrations 2023-24 - Cultural Dance Group',
    category: 'Celebrations',
    image: '/images/feb%2017/5.webp',
  },
  {
    id: 'feb17-6',
    title: 'Feb 17 Annual Day celebrations 2023-24 - Patriotic Army Drama Presentation',
    category: 'Celebrations',
    image: '/images/feb%2017/6.webp',
  },
  {
    id: 'feb17-7',
    title: 'Feb 17 Annual Day celebrations 2023-24 - Classical & Sparkle Dance Ensemble',
    category: 'Celebrations',
    image: '/images/feb%2017/7.webp',
  },
  {
    id: 'feb17-8',
    title: 'Feb 17 Annual Day celebrations 2023-24 - School Campus & Open Air Venue',
    category: 'Celebrations',
    image: '/images/feb%2017/8.webp',
  },
]

// 2. Feb 11th Annual Day Celebrations (17 images from feb 11 folder)
const FEB_11_IMAGES: PhotoItem[] = [
  { id: 'feb11-1', title: 'Feb 11th Annual Day Celebrations - Stage LED Performance', category: 'Celebrations', image: '/images/feb%2011/1.webp' },
  { id: 'feb11-2', title: 'Feb 11th Annual Day Celebrations - Shimmer & Shades Dance', category: 'Celebrations', image: '/images/feb%2011/2.webp' },
  { id: 'feb11-3', title: 'Feb 11th Annual Day Celebrations - Special Guest Vishwak Sen Tribute', category: 'Celebrations', image: '/images/feb%2011/3.webp' },
  { id: 'feb11-4', title: 'Feb 11th Annual Day Celebrations - Cultural Stage Drama', category: 'Celebrations', image: '/images/feb%2011/4.webp' },
  { id: 'feb11-5', title: 'Feb 11th Annual Day Celebrations - Student Dance Performance', category: 'Celebrations', image: '/images/feb%2011/5.webp' },
  { id: 'feb11-7', title: 'Feb 11th Annual Day Celebrations - Thematic Presentation', category: 'Celebrations', image: '/images/feb%2011/7.webp' },
  { id: 'feb11-8', title: 'Feb 11th Annual Day Celebrations - Traditional Classical Ensemble', category: 'Celebrations', image: '/images/feb%2011/8.webp' },
  { id: 'feb11-9', title: 'Feb 11th Annual Day Celebrations - Group Dance Choreography', category: 'Celebrations', image: '/images/feb%2011/9.webp' },
  { id: 'feb11-10', title: 'Feb 11th Annual Day Celebrations - Vibrant Costumes on Stage', category: 'Celebrations', image: '/images/feb%2011/10.webp' },
  { id: 'feb11-11', title: 'Feb 11th Annual Day Celebrations - Festive Celebration Dance', category: 'Celebrations', image: '/images/feb%2011/11.webp' },
  { id: 'feb11-12', title: 'Feb 11th Annual Day Celebrations - Senior Students Performance', category: 'Celebrations', image: '/images/feb%2011/12.webp' },
  { id: 'feb11-13', title: 'Feb 11th Annual Day Celebrations - Grand Finale Dance Act', category: 'Celebrations', image: '/images/feb%2011/13.webp' },
  { id: 'feb11-14', title: 'Feb 11th Annual Day Celebrations - Rhythm & Beats Showcase', category: 'Celebrations', image: '/images/feb%2011/14.webp' },
  { id: 'feb11-15', title: 'Feb 11th Annual Day Celebrations - Youth Performing Arts', category: 'Celebrations', image: '/images/feb%2011/15.webp' },
  { id: 'feb11-16', title: 'Feb 11th Annual Day Celebrations - Colorful Stage Display', category: 'Celebrations', image: '/images/feb%2011/16.webp' },
  { id: 'feb11-17', title: 'Feb 11th Annual Day Celebrations - Celebration Moments', category: 'Celebrations', image: '/images/feb%2011/17.webp' },
  { id: 'feb11-18', title: 'Feb 11th Annual Day Celebrations - Students Felicitation & Honors', category: 'Celebrations', image: '/images/feb%2011/18.webp' },
]

// 3. Science Experiment & Activities… (10 images from science-activities folder)
const SCIENCE_ACTIVITIES_IMAGES: PhotoItem[] = [
  {
    id: 'sci-1',
    title: 'Science Experiment & Activities… - Microscope Lab Observation',
    category: 'Activities',
    image: '/images/science-activities/1.jpg',
  },
  {
    id: 'sci-2',
    title: 'Science Experiment & Activities… - Karate & Martial Arts Training',
    category: 'Sports',
    image: '/images/science-activities/2.png',
  },
  {
    id: 'sci-3',
    title: 'Science Experiment & Activities… - Chemistry Laboratory Experiment',
    category: 'Activities',
    image: '/images/science-activities/3.jpg',
  },
  {
    id: 'sci-4',
    title: 'Science Experiment & Activities… - Classical Cultural Dance Performance',
    category: 'Events',
    image: '/images/science-activities/4.jpg',
  },
  {
    id: 'sci-5',
    title: 'Science Experiment & Activities… - Outdoor Roller Skating Activity',
    category: 'Sports',
    image: '/images/science-activities/5.png',
  },
  {
    id: 'sci-6',
    title: 'Science Experiment & Activities… - JRS Student Leaders in Blazers',
    category: 'Activities',
    image: '/images/science-activities/6.png',
  },
  {
    id: 'sci-7',
    title: 'Science Experiment & Activities… - Outdoor Martial Arts Splits & Kata Drill',
    category: 'Sports',
    image: '/images/science-activities/7.png',
  },
  {
    id: 'sci-8',
    title: 'Science Experiment & Activities… - Classroom Learning & Desk Writing',
    category: 'Activities',
    image: '/images/science-activities/8.png',
  },
  {
    id: 'sci-9',
    title: 'Science Experiment & Activities… - Library English Literature Reading Hour',
    category: 'Activities',
    image: '/images/science-activities/9.jpg',
  },
  {
    id: 'sci-10',
    title: 'Science Experiment & Activities… - Confident Student Ambassador',
    category: 'Activities',
    image: '/images/science-activities/10.jpg',
  },
]

// 4. Republic Day Celebrations (21 images from republicday folder)
const REPUBLIC_DAY_IMAGES: PhotoItem[] = Array.from({ length: 21 }, (_, i) => ({
  id: `rep-${i + 1}`,
  title: 'Republic Day Celebrations',
  category: 'Celebrations',
  image: `/images/republicday/${i + 1}.webp`,
}))

// 3. Videos - Create Life Skills (2 YouTube videos)
const VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Grade-IX JRSIS English Activity: Debate on Technology Replacing Teachers',
    date: 'Create Life Skills • Debate',
    thumbnail: '/images/video-life-skills-1.jpg',
    videoUrl: 'https://www.youtube.com/embed/qm7Klq9kTZI',
  },
  {
    id: 'vid-2',
    title: 'Grade-8 English: Debate On Using Gadgets In School',
    date: 'Create Life Skills • Communication',
    thumbnail: '/images/video-life-skills-2.jpg',
    videoUrl: 'https://www.youtube.com/embed/ZNgiOdt-8pg',
  },
]

// 4. Amphitheatre (3 images from amphitheatre folder)
const AMPHITHEATRE_IMAGES: PhotoItem[] = [
  {
    id: 'amphi-1',
    title: 'Amphitheatre - Aerial View with Running Track & Sports Ground',
    category: 'Activities',
    image: '/images/amphitheatre/1.jpg',
  },
  {
    id: 'amphi-2',
    title: 'Amphitheatre - Open-Air Tiered Seating under the Grand Bodhi Tree',
    category: 'Activities',
    image: '/images/amphitheatre/2.jpg',
  },
  {
    id: 'amphi-3',
    title: 'Amphitheatre - Overhead Bird\'s Eye View of Circular Stone Tiers & Walkway',
    category: 'Activities',
    image: '/images/amphitheatre/3.png',
  },
]

// 5. Classroom (4 images from classrooms folder)
const CLASSROOM_IMAGES: PhotoItem[] = [
  {
    id: 'classroom-1',
    title: 'Classroom',
    category: 'Activities',
    image: '/images/classrooms/1.png',
  },
  {
    id: 'classroom-2',
    title: 'Classroom',
    category: 'Activities',
    image: '/images/classrooms/2.png',
  },
  {
    id: 'classroom-3',
    title: 'Classroom',
    category: 'Activities',
    image: '/images/classrooms/3.png',
  },
  {
    id: 'classroom-4',
    title: 'Classroom',
    category: 'Activities',
    image: '/images/classrooms/4.png',
  },
]

// 6. Campus Building & Entrance (3 images from campus folder)
const CAMPUS_IMAGES: PhotoItem[] = [
  {
    id: 'campus-1',
    title: 'Main Building',
    subtitle: 'Main Building',
    category: 'Activities',
    image: '/images/campus/main-building.png',
  },
  {
    id: 'campus-2',
    title: 'Entrance',
    subtitle: 'Entrance',
    category: 'Activities',
    image: '/images/campus/entrance-1.png',
  },
  {
    id: 'campus-3',
    title: 'Entrance',
    subtitle: 'Entrance',
    category: 'Activities',
    image: '/images/campus/entrance-2.png',
  },
]

export default function GalleryPage() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null)
  const [lightboxItems, setLightboxItems] = useState<PhotoItem[]>([])
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)
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
        setActiveVideo(null)
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
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#f59e0b] selection:text-slate-900">
      {/* 1. Navbar */}
      <Navbar activePage="gallery" />

      <main className="flex-1">
        {/* 2. Hero Section (70vh with crisp title & breadcrumb) */}
        <PageHero
          breadcrumb="Gallery"
          title="Photo & Event"
          titleHighlight="Gallery"
          subtitle="Moments of Excellence, Passion & Achievement"
          description="Explore the vibrant life, achievements, sports, and cultural milestones celebrated at JRS International School."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Gallery"
          primaryButton={{
            text: 'Explore Gallery',
            href: '#amphitheatre',
          }}
          secondaryButton={{
            text: 'News & Media',
            href: '/media',
          }}
        />

        {/* Section 1: Amphitheatre Open-Air Arena */}
        <section id="amphitheatre" className="pt-12 sm:pt-16 pb-6 sm:pb-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10" data-aos="fade-up">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#e31e24]" />
                <span
                  style={{ fontSize: '13px', lineHeight: '23px' }}
                  className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]"
                >
                  CAMPUS INFRASTRUCTURE & OPEN-AIR ARENA
                </span>
                <span className="w-8 h-[2px] bg-[#e31e24]" />
              </div>
              <h2
                style={{ fontSize: '40px', lineHeight: '50px' }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                Amphitheatre <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Open-Air Arena</span>
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
                A serene circular open-air theatre built around the majestic heritage tree, hosting assemblies, student debates, cultural gatherings, and outdoor performances.
              </p>
            </div>

            {/* 3 Pure Images from amphitheatre folder (3 columns on md/lg) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {AMPHITHEATRE_IMAGES.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={(e) => openLightbox(AMPHITHEATRE_IMAGES, index, e)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.src = '/images/campus-building.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Classroom (No Section Heading, "Classroom" directly below each image) */}
        <section id="classroom" className="py-5 sm:py-6 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {CLASSROOM_IMAGES.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={(e) => openLightbox(CLASSROOM_IMAGES, index, e)}
                >
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.src = '/images/campus-building.jpg'
                      }}
                    />
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  {/* Label directly below image */}
                  <span className="mt-3 text-sm sm:text-base font-bold text-slate-800 tracking-tight group-hover:text-[#e31e24] transition-colors">
                    Classroom
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Main Building & Entrance (Labels directly below images) */}
        <section id="campus-entrance" className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              {CAMPUS_IMAGES.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={(e) => openLightbox(CAMPUS_IMAGES, index, e)}
                >
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.src = '/images/campus-building.jpg'
                      }}
                    />
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  {/* Label directly below image */}
                  <span className="mt-3 text-sm sm:text-base font-bold text-slate-800 tracking-tight group-hover:text-[#e31e24] transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Feb 17 Annual Day celebrations 2023-24 */}
        <section id="annual-day-celebrations" className="py-14 sm:py-18 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10" data-aos="fade-up">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#e31e24]" />
                <span
                  style={{ fontSize: '13px', lineHeight: '23px' }}
                  className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]"
                >
                  CAMPUS HIGHLIGHTS
                </span>
                <span className="w-8 h-[2px] bg-[#e31e24]" />
              </div>
              <h2
                style={{ fontSize: '40px', lineHeight: '50px' }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                Feb 17 <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Annual Day celebrations 2023-24</span>
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
                Moments from UTSAHA 2K24 — Annual Day celebrations at JRS International School.
              </p>
            </div>

            {/* 8 Pure Images from feb 17 folder (4 columns x 2 rows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {FEB_17_IMAGES.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 80}
                  onClick={(e) => openLightbox(FEB_17_IMAGES, index, e)}
                  className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer aspect-[4/3] bg-slate-100"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.src = '/images/campus-building.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Section 2: Feb 11th Annual Day Celebrations */}
        <section id="feb-11-celebrations" className="py-14 sm:py-18 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10" data-aos="fade-up">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#e31e24]" />
                <span
                  style={{ fontSize: '13px', lineHeight: '23px' }}
                  className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]"
                >
                  STAGE & CULTURAL HIGHLIGHTS
                </span>
                <span className="w-8 h-[2px] bg-[#e31e24]" />
              </div>
              <h2
                style={{ fontSize: '40px', lineHeight: '50px' }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                Feb 11th <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Annual Day Celebrations</span>
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
                Spectacular stage dances, cultural performances, and memorable moments from JRS International School.
              </p>
            </div>

            {/* 17 Pure Images from feb 11 folder (4 columns grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {FEB_11_IMAGES.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 80}
                  onClick={(e) => openLightbox(FEB_11_IMAGES, index, e)}
                  className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer aspect-[4/3] bg-slate-100"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.src = '/images/campus-building.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Section 3: Science Experiment & Activities… */}
        <section id="science-activities" className="py-14 sm:py-18 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10" data-aos="fade-up">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#e31e24]" />
                <span
                  style={{ fontSize: '13px', lineHeight: '23px' }}
                  className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]"
                >
                  LABS & BEYOND CLASSROOM
                </span>
                <span className="w-8 h-[2px] bg-[#e31e24]" />
              </div>
              <h2
                style={{ fontSize: '40px', lineHeight: '50px' }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                Science Experiment & <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Activities…</span>
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
                Hands-on scientific inquiry, sports training, and extracurricular learning at JRS International School.
              </p>
            </div>

            {/* 5 Pure Images from science-activities folder */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {SCIENCE_ACTIVITIES_IMAGES.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={(index % 5) * 80}
                  onClick={(e) => openLightbox(SCIENCE_ACTIVITIES_IMAGES, index, e)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.src = '/images/campus-building.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Videos - Create Life Skills (Middle of the Page) */}
        <section id="life-skills-videos" className="py-14 sm:py-18 bg-white border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10" data-aos="fade-up">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#e31e24]" />
                <span
                  style={{ fontSize: '13px', lineHeight: '23px' }}
                  className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]"
                >
                  STUDENT DISCUSSIONS & SESSIONS
                </span>
                <span className="w-8 h-[2px] bg-[#e31e24]" />
              </div>
              <h2
                style={{ fontSize: '40px', lineHeight: '50px' }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                Create <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Life Skills</span>
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
                Watch our students in action developing communication, critical thinking, debate skills, and creative expression.
              </p>
            </div>

            {/* 2 Video Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {VIDEOS.map((vid, index) => (
                <div
                  key={vid.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  onClick={() => setActiveVideo(vid)}
                  className="group relative aspect-video w-full rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer bg-slate-900"
                >
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.src = '/images/campus-building.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />

                  {/* Centered Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 border-2 border-white/80 group-hover:bg-[#e31e24] group-hover:border-[#e31e24] text-white flex items-center justify-center transition-all duration-300 shadow-2xl group-hover:scale-110">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* 7. Section 4: Republic Day Celebrations */}
        <section id="republic-day-celebrations" className="py-14 sm:py-18 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10" data-aos="fade-up">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#e31e24]" />
                <span
                  style={{ fontSize: '13px', lineHeight: '23px' }}
                  className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]"
                >
                  PATRIOTIC TRADITIONS
                </span>
                <span className="w-8 h-[2px] bg-[#e31e24]" />
              </div>
              <h2
                style={{ fontSize: '40px', lineHeight: '50px' }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                Republic Day <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Celebrations</span>
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
                Honoring national pride and constitutional values with student parades, freedom fighter tributes, and ceremonial drills at JRS International School.
              </p>
            </div>

            {/* 21 Pure Images from republicday folder */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-5">
              {REPUBLIC_DAY_IMAGES.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={(index % 6) * 50}
                  onClick={(e) => openLightbox(REPUBLIC_DAY_IMAGES, index, e)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.src = '/images/campus-building.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>






      </main>

      {/* 10. Magnified Image Lightbox Modal */}
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
                className="max-h-[82vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl ring-1 ring-white/15 transition-all duration-200"
              />
              {/* Title / Counter bar */}
              <div className="mt-3 flex items-center justify-between w-full max-w-2xl px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/20">
                <span className="truncate">{lightboxItems[activeLightboxIndex].title}</span>
                <span className="shrink-0 text-amber-400 font-bold ml-4">
                  {activeLightboxIndex + 1} / {lightboxItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 11. Video Lightbox Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          {/* Single Top-Right Screen Close Button */}
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[70] w-12 h-12 rounded-full bg-[#e31e24] hover:bg-[#b91c1c] text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl border-2 border-white hover:scale-110 active:scale-95"
            aria-label="Close video"
            title="Close (Esc)"
          >
            <X className="w-6 h-6 stroke-[3]" />
          </button>

          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full">
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 sm:p-5 bg-[#031c3f] text-white flex items-center justify-between">
              <div>
                <h4 className="font-extrabold text-base sm:text-lg">{activeVideo.title}</h4>
                <p className="text-xs text-amber-400 font-semibold mt-0.5">{activeVideo.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 12. Footer */}
      <Footer />
    </div>
  )
}
