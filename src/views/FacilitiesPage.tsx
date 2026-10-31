'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import {
  Activity,
  Trophy,
  Bus,
  ShieldCheck,
  HeartPulse,
  Building2,
  Wifi,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export default function FacilitiesPage() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    })
  }, [])

  const facilities = [
    {
      title: 'Cognospace - Advanced Cognitive Learning & Discovery Zone',
      icon: Sparkles,
      iconBg: 'bg-[#063ca3] text-white',
      href: '/facilities/cognospace',
    },
    {
      title: 'Athletics Track and Meditation Hall',
      icon: Activity,
      iconBg: 'bg-[#063ca3] text-white',
      href: '/facilities/sports-facilities',
    },
    {
      title: 'Spacious playgrounds for football, cricket, basketball and volleyball',
      icon: Trophy,
      iconBg: 'bg-[#063ca3] text-white',
      href: '/facilities/sports-facilities',
    },
    {
      title: 'Transport facilities for students and staff',
      icon: Bus,
      iconBg: 'bg-[#063ca3] text-white',
      href: '/facilities/transport',
    },
    {
      title: 'Secure campus with widespread CCTV coverage',
      icon: ShieldCheck,
      iconBg: 'bg-[#063ca3] text-white',
    },
    {
      title: 'Medical facilities and First aid',
      icon: HeartPulse,
      iconBg: 'bg-[#063ca3] text-white',
    },
    {
      title: 'World Class Infrastructure with elegant Ambience',
      icon: Building2,
      iconBg: 'bg-[#063ca3] text-white',
      href: '/facilities/smart-classrooms',
    },
    {
      title: 'Excellent computing facilities with Internet and Wi-Fi',
      icon: Wifi,
      iconBg: 'bg-[#063ca3] text-white',
      href: '/facilities/science-computer-labs',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111] antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Header */}
      <Navbar activePage="facilities" />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <PageHero
          breadcrumb="Facilities"
          title="State-of-the-Art"
          titleHighlight="Facilities"
          subtitle="World Class Infrastructure with Elegant Ambience."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Facilities"
        />

        {/* 3. Simple & Clean Facilities Section */}
        <section id="facilities-list" className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
              {/* Eyebrow: â€” OUR CAMPUS â€” */}
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#031c3f]" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]">
                  OUR CAMPUS
                </span>
                <span className="w-8 h-[2px] bg-[#031c3f]" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-tight">
                State-of-the-Art <span className="text-[#e31e24]">Facilities</span>
              </h2>
              <p className="text-[#111] text-sm sm:text-base mt-2.5 leading-relaxed">
                The campus boasts of the following unique facilities to make this happen:
              </p>
            </div>

            {/* Simple, Clean 4-Column Grid in Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {facilities.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    className="p-4 sm:p-5 rounded-2xl bg-white hover:bg-slate-50/50 border border-slate-200/90 hover:border-[#e31e24]/40 transition-all duration-200 flex items-center gap-3.5 sm:gap-4 group shadow-xs hover:shadow-md h-full"
                  >
                    <div
                      style={{ backgroundColor: 'rgb(6, 60, 163)' }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-md transition-transform duration-200 group-hover:scale-110"
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2] text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] sm:text-[14px] font-medium text-[#111] group-hover:text-[#e31e24] transition-colors leading-snug">
                        {item.title}
                      </p>
                    </div>
                  </div>
                )

                if (item.href) {
                  return (
                    <Link key={index} href={item.href} className="block h-full">
                      {content}
                    </Link>
                  )
                }

                return <div key={index} className="block h-full">{content}</div>
              })}
            </div>

            {/* Invitation Glassmorphic Card with Contained Background Image */}
            <div
              className="mt-14 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              data-aos="fade-up"
            >
              {/* Background Image confined strictly to this card */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/campus-building.jpg"
                  alt="JRS International School Campus"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#031127]/90 via-[#031c3f]/80 to-[#031127]/90 backdrop-blur-[2px]" />
              </div>

              {/* Glassmorphic Content Layer */}
              <div className="relative z-10 w-full bg-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
                  {/* Left Side: Content */}
                  <div className="flex-1 space-y-3 sm:space-y-4 text-left">
                    <div className="mb-1">
                      <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-amber-300">
                        JOIN THE JRS JOURNEY
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold leading-snug sm:leading-[38px] text-white drop-shadow-sm">
                      We invite everyone to join us on our journey towards <span className="text-amber-300">excellence</span>.
                    </h3>

                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-2xl">
                      Experience our vibrant learning atmosphere, state-of-the-art facilities, and nurturing environment firsthand.
                    </p>
                  </div>

                  {/* Right Side: Buttons */}
                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-end xl:items-center gap-3 shrink-0">
                    <Link
                      href="/admissions"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 transition-all shadow-lg shadow-red-600/30 whitespace-nowrap"
                    >
                      <span>Book a Campus Tour</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all whitespace-nowrap"
                    >
                      <span>Contact School</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  )
}
