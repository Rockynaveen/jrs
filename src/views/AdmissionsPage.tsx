'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import AdmissionsHero from '@/components/sections/admissions/AdmissionsHero'
import AdmissionsProcess from '@/components/sections/admissions/AdmissionsProcess'
import AdmissionsKeyInfo from '@/components/sections/admissions/AdmissionsKeyInfo'
import AdmissionsFAQ from '@/components/sections/admissions/AdmissionsFAQ'
import AdmissionsEnquiryForm from '@/components/sections/admissions/AdmissionsEnquiryForm'
import Footer from '@/components/layout/Footer'

export default function AdmissionsPage() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-amber-400 selection:text-slate-900">
      {/* 1. Header / Navbar with active admissions link */}
      <Navbar activePage="admissions" />

      <main className="flex-1">
        {/* 2. Admissions Hero Section */}
        <AdmissionsHero />

        {/* 3. Steps of Admission Process */}
        <AdmissionsProcess />

        {/* 4. Important Admission Information (6 Items & Campus Photo) */}
        <AdmissionsKeyInfo />

        {/* 5. Frequently Asked Questions (Accordion & Arched Student Photo) */}
        <AdmissionsFAQ />

        {/* 6. Ready to take the next step? / Admission Enquiry Form */}
        <AdmissionsEnquiryForm />
      </main>

      {/* 9. Branded Footer with crisp separation */}
      <Footer />
    </div>
  )
}
