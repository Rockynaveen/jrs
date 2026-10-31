'use client'

import React, { useState, useEffect, useCallback } from 'react'
import {
  ChevronRight,
  ChevronLeft,
  X,
  FlaskConical,
  Brain,
  Laptop,
  ShieldCheck,
  Sparkles,
  Lightbulb,
  Layers,
  Monitor,
  Users,
  Cpu,
  BookOpen,
  Compass,
  GraduationCap,
  Trophy,
  Activity,
  Target,
  Award,
  MapPin,
  Video,
  UserCheck,
  Bus,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { FacilityItem } from '@/data/facilitiesData'

function getPointIcon(slug: string, idx: number, point: string) {
  if (slug === 'science-computer-labs') {
    switch (idx) {
      case 0:
        return FlaskConical
      case 1:
        return Brain
      case 2:
        return Laptop
      case 3:
        return ShieldCheck
    }
  }
  if (slug === 'smart-classrooms') {
    switch (idx) {
      case 0:
        return Sparkles
      case 1:
        return Lightbulb
      case 2:
        return Layers
      case 3:
        return Monitor
    }
  }
  if (slug === 'cognospace') {
    switch (idx) {
      case 0:
        return Sparkles
      case 1:
        return Lightbulb
      case 2:
        return Users
      case 3:
        return Cpu
    }
  }
  if (slug === 'library') {
    switch (idx) {
      case 0:
        return BookOpen
      case 1:
        return Compass
      case 2:
        return Users
      case 3:
        return GraduationCap
    }
  }
  if (slug === 'sports') {
    switch (idx) {
      case 0:
        return Trophy
      case 1:
        return Activity
      case 2:
        return Target
      case 3:
        return Award
    }
  }
  if (slug === 'transport') {
    switch (idx) {
      case 0:
        return MapPin
      case 1:
        return Video
      case 2:
        return UserCheck
      case 3:
        return Bus
    }
  }

  const lower = point.toLowerCase()
  if (lower.includes('lab') || lower.includes('experiment')) return FlaskConical
  if (lower.includes('curiosity') || lower.includes('logic') || lower.includes('brain')) return Brain
  if (lower.includes('apparatus') || lower.includes('workstation') || lower.includes('computer')) return Laptop
  if (lower.includes('safety') || lower.includes('supervision')) return ShieldCheck
  if (lower.includes('creat') || lower.includes('innovat')) return Lightbulb
  if (lower.includes('book') || lower.includes('read') || lower.includes('library')) return BookOpen
  if (lower.includes('sport') || lower.includes('athletic')) return Trophy
  if (lower.includes('gps') || lower.includes('bus') || lower.includes('transport')) return Bus

  return Sparkles
}

interface FacilityDetailPageProps {
  facility: FacilityItem
}

export default function FacilityDetailPage({ facility }: FacilityDetailPageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const gallery = facility.galleryImages || []

  // Lightbox controls
  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % gallery.length)
  }, [gallery.length])

  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }, [gallery.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight') nextLightbox()
      if (e.key === 'ArrowLeft') prevLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, nextLightbox, prevLightbox])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Navbar */}
      <Navbar activePage="facilities" />

      {/* 2. Main Content Container - Aligned with Navbar Logo & Enquire Now button */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:pb-24">
        
        {/* Page Title & Subtitle - Centered */}
        <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#031c3f] tracking-tight leading-tight mb-2.5">
            World-Class Environment for <span className="text-[#e31e24]">{facility.title}</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-[15px] text-[#111] leading-relaxed mx-auto">
            {facility.heroTagline}
          </p>
        </div>

        {/* Facility Overview & Key Points */}
        <div className="w-full mb-10 sm:mb-14">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#031c3f] tracking-tight mb-3">
              {facility.title} Overview
            </h2>

            <p className="text-[#111] text-xs sm:text-sm md:text-[15px] leading-relaxed">
              {facility.overview}
            </p>
          </div>

          {/* Key Points Cards with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {facility.keyPoints.map((point, idx) => {
              const IconComponent = getPointIcon(facility.slug, idx, point)
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-[#031c3f]/40 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#031c3f] text-white group-hover:bg-[#0b2959] group-hover:scale-105 flex items-center justify-center mb-4 transition-all duration-300 shrink-0">
                    <IconComponent className="w-6 h-6 stroke-[2] text-white" />
                  </div>
                  <h3 className="text-xs sm:text-[13.5px] md:text-sm font-semibold text-[#031c3f] leading-snug text-center">
                    {point}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>

        {/* Masonry Gallery Section - 3 cards per row (Chunky & deep masonry cards) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 sm:gap-6 [column-fill:_balance]">
          {gallery.map((photo, idx) => {
            const aspectRatios = [
              'aspect-[4/5]',
              'aspect-[1/1]',
              'aspect-[4/5]',
              'aspect-[1/1]',
              'aspect-[4/5]',
              'aspect-[4/3]',
              'aspect-[1/1]',
              'aspect-[4/5]',
              'aspect-[4/3]',
            ]
            const aspectClass = aspectRatios[idx % aspectRatios.length]

            return (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className={`break-inside-avoid mb-5 sm:mb-6 group relative overflow-hidden cursor-pointer bg-slate-100 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 block w-full ${aspectClass}`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-sm sm:text-[15px] font-semibold tracking-wide drop-shadow-sm">
                    {photo.title}
                  </span>
                </div>
              </div>
            )
          })}
        </div>



      </main>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Top Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between text-white z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
                {lightboxIndex + 1} / {gallery.length}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline">
                {gallery[lightboxIndex]?.title}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#e31e24] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image with Navigation Arrows */}
          <div
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {gallery.length > 1 && (
              <button
                type="button"
                onClick={prevLightbox}
                className="absolute left-2 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-[#e31e24] text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div className="max-h-[75vh] max-w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={gallery[lightboxIndex]?.url}
                alt={gallery[lightboxIndex]?.title || 'Facility Photo'}
                className="max-h-[75vh] w-auto object-contain select-none"
              />
            </div>

            {gallery.length > 1 && (
              <button
                type="button"
                onClick={nextLightbox}
                className="absolute right-2 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-[#e31e24] text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Caption */}
          <div
            className="w-full max-w-3xl text-center text-white pb-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-base sm:text-lg font-bold">
              {gallery[lightboxIndex]?.title}
            </h4>
          </div>
        </div>
      )}

      {/* 3. Footer */}
      <Footer />
    </div>
  )
}
