'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  ChevronLeft,
  Check,
  X,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { FacilityItem } from '@/data/facilitiesData'

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
        
        {/* Page Title, Subtitle & Breadcrumb - Centered */}
        <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#031c3f] tracking-tight leading-tight mb-2.5">
            World-Class Environment for <span className="text-[#e31e24]">{facility.title}</span>
          </h1>

          {/* Breadcrumb below heading */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-[13px] text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#031c3f] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 stroke-[2.2]" />
            <Link href="/facilities" className="hover:text-[#031c3f] transition-colors">
              Facilities
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 stroke-[2.2]" />
            <span className="font-semibold text-slate-800">
              {facility.title}
            </span>
          </nav>

          <p className="text-xs sm:text-sm md:text-[15px] text-[#111] leading-relaxed mx-auto">
            {facility.heroTagline}
          </p>
        </div>

        {/* Facility Overview & Key Points (Without background tab/box) */}
        <div className="w-full mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#031c3f] tracking-tight mb-3">
            {facility.title} Overview
          </h2>

          <p className="text-[#111] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-6 sm:mb-8">
            {facility.overview}
          </p>

          {/* Key Points Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {facility.keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#fde8e8] text-[#e31e24] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                </div>
                <span className="text-xs sm:text-[13.5px] text-[#111] font-medium leading-snug">
                  {point}
                </span>
              </div>
            ))}
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
