'use client'

import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import { Play, X } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'

interface VideoItem {
  id: string
  title: string
  date: string
  thumbnail: string
  videoUrl: string
}

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

export default function LifeSkillsPage() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null)
      }
    }
    if (activeVideo) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeVideo])

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111] antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar activePage="videos" />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <PageHero
          parentBreadcrumb={{
            label: 'Gallery',
            href: '/gallery',
          }}
          breadcrumb="Create Life Skills"
          title="Create"
          titleHighlight="Life Skills"
          subtitle="STUDENT DISCUSSIONS & SESSIONS"
          description="Watch our students in action developing communication, critical thinking, debate skills, and creative expression."
          imageSrc="/images/video-life-skills-1.jpg"
          imageAlt="JRS International School Student Discussions and Sessions"
          imagePosition="object-cover object-center"
          overlayType="cinematic"
        />

        {/* 3. Videos Section */}
        <section id="life-skills-videos" className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14" data-aos="fade-up">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#031c3f]" />
                <span
                  style={{ fontSize: '13px', lineHeight: '23px' }}
                  className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]"
                >
                  STUDENT DISCUSSIONS & SESSIONS
                </span>
                <span className="w-8 h-[2px] bg-[#031c3f]" />
              </div>
              <h2
                style={{ fontSize: '40px', lineHeight: '50px' }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                Create <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Life Skills</span>
              </h2>
              <p className="mt-2 text-[#111] text-sm sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
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
      </main>

      {/* 4. Video Lightbox Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          {/* Close Button */}
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
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
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

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
