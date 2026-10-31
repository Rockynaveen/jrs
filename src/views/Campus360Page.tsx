'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import { Compass } from 'lucide-react'

export default function Campus360Page() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  // Device motion & message synchronization for Panoee 360 interactive tour
  useEffect(() => {
    const iframeId = 'tour-embedded'
    const targetOrigin = 'https://tour.panoee.net'
    let isReady = false

    function sanitize(v: any, keys: string[]) {
      if (!v) return null
      const x: Record<string, number | null> = {}
      keys.forEach((k) => {
        x[k] = typeof v[k] === 'number' ? v[k] : null
      })
      return x
    }

    function checkReady(f: HTMLIFrameElement) {
      try {
        const h = f.contentWindow?.location.href
        if (h && h !== 'about:blank') isReady = true
      } catch {
        isReady = true
      }
    }

    function sendPayload(payload: any) {
      const el = document.getElementById(iframeId) as HTMLIFrameElement | null
      if (!el || !el.contentWindow) return
      try {
        el.contentWindow.postMessage(payload, targetOrigin)
      } catch {}
    }

    const iframeEl = document.getElementById(iframeId) as HTMLIFrameElement | null
    const onLoad = () => {
      isReady = true
    }

    if (iframeEl) {
      iframeEl.addEventListener('load', onLoad)
      checkReady(iframeEl)
    }

    const onMessage = (ev: MessageEvent) => {
      if (!isReady || !ev.data || ev.data.type !== 'devicemotion') return
      if (ev.source !== window.parent) return
      sendPayload(ev.data)
    }

    const onDeviceMotion = (e: DeviceMotionEvent) => {
      if (!isReady) return
      sendPayload({
        type: 'devicemotion',
        deviceMotionEvent: {
          acceleration: sanitize(e.acceleration, ['x', 'y', 'z']),
          accelerationIncludingGravity: sanitize(
            e.accelerationIncludingGravity,
            ['x', 'y', 'z']
          ),
          rotationRate: sanitize(e.rotationRate, ['alpha', 'beta', 'gamma']),
          interval: typeof e.interval === 'number' ? e.interval : 0,
          timeStamp: e.timeStamp,
        },
      })
    }

    window.addEventListener('message', onMessage, false)
    window.addEventListener('devicemotion', onDeviceMotion, { passive: true })

    return () => {
      if (iframeEl) {
        iframeEl.removeEventListener('load', onLoad)
      }
      window.removeEventListener('message', onMessage)
      window.removeEventListener('devicemotion', onDeviceMotion)
    }
  }, [])

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
          subtitle="Explore our vibrant campus through 360° views"
          description="Immerse yourself in high-definition panoramic perspectives showcasing our world-class architecture, expansive green grounds, smart classrooms, and modern amenities."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School 360 Degree Campus Tour"
        />

        {/* 3. Interactive 360 Virtual Tour Section */}
        <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-b from-white via-slate-50/60 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Badge & Title */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#e31e24] text-xs font-bold tracking-wider uppercase mb-3.5 shadow-xs">
                <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Interactive Virtual Tour</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#031c3f] tracking-tight leading-tight mb-3">
                Experience Our Campus in <span className="text-[#e31e24]">360°</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Take an immersive walk through JRS International School. Rotate freely in all directions, zoom into details, and explore classrooms, labs, and sports facilities seamlessly.
              </p>
            </div>

            {/* Embedded 360 Virtual Tour Frame */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="relative w-full h-[520px] sm:h-[620px] md:h-[720px] lg:h-[780px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-950"
            >
              <iframe
                id="tour-embedded"
                title="Jrs-School"
                src="https://tour.panoee.net/iframe/6ae58243b0cdc820a05a2df0?embedFullscreen=1&embedVr=1&embedGyro=1"
                className="w-full h-full border-0 block"
                scrolling="no"
                allow="autoplay; accelerometer; gyroscope; fullscreen; xr-spatial-tracking"
                loading="eager"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  )
}
