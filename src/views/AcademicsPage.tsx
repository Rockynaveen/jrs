'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import AcademicsHero from '@/components/sections/academics/AcademicsHero'
import AcademicsJourney from '@/components/sections/academics/AcademicsJourney'
import Footer from '@/components/layout/Footer'

export default function AcademicsPage() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Header / Navbar with active 'academics' state */}
      <Navbar activePage="academics" />

      <main className="flex-1">
        {/* 2. Academics Hero Section (Curved Navy Banner, Microscope Photo, Breadcrumb, Titles) */}
        <AcademicsHero />

        {/* 3. Academic Journey Section (Learning Beyond Textbooks Cards) */}
        <AcademicsJourney />
      </main>

      {/* 4. Footer with Quick Links, Contact, Interactive Map, and Copyright bar */}
      <Footer />
    </div>
  )
}
