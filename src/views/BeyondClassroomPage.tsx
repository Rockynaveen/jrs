'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import AboutBeyond from '@/components/sections/about/AboutBeyond'
import AboutBottomCTA from '@/components/sections/about/AboutBottomCTA'
import Footer from '@/components/layout/Footer'

export default function BeyondClassroomPage() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111] antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Navbar */}
      <Navbar activePage="beyond" />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <PageHero
          breadcrumb="Beyond Classroom"
          title="Beyond The"
          titleHighlight="Classroom"
          subtitle="Nurturing Creativity, Athletics, Character & Life Skills."
          description="We empower students to discover their passions, develop talents, and build character beyond the classroom."
          descriptionStyle={{ lineHeight: '25px' }}
          descriptionClassName="leading-[25px] md:leading-[25px]"
          imageSrc="/images/beyond-hero.png"
          imageAlt="JRS International School Beyond Classroom Activities"
          imagePosition="object-cover object-center md:object-[center_35%]"
        />

        {/* 3. Co-Curricular Excellence Section (10 Detailed Activity Cards) */}
        <div id="activities">
          <AboutBeyond />
        </div>

        {/* 4. Bottom CTA Banner */}
        <AboutBottomCTA
          imageSrc="/images/beyond cta.png"
          imageAlt="JRS International School Beyond Classroom Activities"
          imagePosition="object-cover object-center lg:object-[center_15%]"
        />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  )
}
