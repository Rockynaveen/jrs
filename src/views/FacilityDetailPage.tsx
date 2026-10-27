'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
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
  const [activePhoto, setActivePhoto] = useState<string>(facility.primaryImage)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Reset active photo when facility changes
  useEffect(() => {
    setActivePhoto(facility.primaryImage)
  }, [facility.slug, facility.primaryImage])

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

      {/* 2. Main Content Container */}
      <main className="flex-1 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:pb-24">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 mb-4 sm:mb-5">
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

        {/* Page Title & Subtitle */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#031c3f] tracking-tight leading-tight mb-2">
            World-Class Environment for <span className="text-[#e31e24]">{facility.title}</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-[15px] text-slate-500 max-w-3xl leading-relaxed">
            {facility.heroTagline}
          </p>
        </div>

        {/* Top Feature Section: Main Image on Left + Overview Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Main Facility Image (Reduced width & height) */}
          <div className="lg:col-span-7 w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs relative">
            <img
              src={activePhoto}
              alt={facility.title}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

          {/* Right Overview Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-center">
            <h2 className="text-xl sm:text-[22px] font-extrabold text-[#031c3f] tracking-tight mb-3">
              {facility.title} Overview
            </h2>

            <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed mb-6">
              {facility.overview}
            </p>

            {/* Checklist with soft red circles & checkmarks */}
            <ul className="space-y-3.5">
              {facility.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fde8e8] text-[#e31e24] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                  </div>
                  <span className="text-xs sm:text-[13.5px] text-slate-700 font-medium leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Photo Gallery Section */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-[2.5px] bg-[#e31e24] rounded-full" />
              <h3 className="text-base sm:text-lg font-bold text-[#031c3f] tracking-tight">
                Photo Gallery
              </h3>
            </div>

            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#e31e24] hover:text-[#b9151b] transition-colors cursor-pointer"
            >
              <span>View All Photos</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </button>
          </div>

          {/* 5 Photos in a Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {gallery.map((photo, idx) => {
              const isSelected = activePhoto === photo.url
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setActivePhoto(photo.url)
                    setLightboxIndex(idx)
                  }}
                  className={`group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer bg-slate-100 transition-all duration-300 ${
                    isSelected
                      ? 'ring-2 ring-[#e31e24] ring-offset-2 border-transparent scale-[1.02] shadow-sm'
                      : 'border border-slate-200/90 hover:scale-[1.03] hover:shadow-md'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              )
            })}
          </div>
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
