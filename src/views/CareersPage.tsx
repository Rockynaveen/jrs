'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import {
  Users,
  GraduationCap,
  Lightbulb,
  Star,
  Mail,
  CheckCircle2,
  Send,
} from 'lucide-react'

export default function CareersPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  const whyJoinReasons = [
    {
      title: 'Collaborative Community',
      description:
        'Work with passionate educators and supportive leadership.',
      icon: Users,
    },
    {
      title: 'Continuous Growth',
      description:
        'Access to training, seminars and professional development programs.',
      icon: GraduationCap,
    },
    {
      title: 'Innovative Teaching',
      description:
        'Use modern tools and research-based methods in the classroom.',
      icon: Lightbulb,
    },
    {
      title: 'Make a Difference',
      description:
        'Be part of a mission to create confident, ethical and future-ready students.',
      icon: Star,
    },
  ]

  const applicationRequirements = [
    'Contact number',
    'Experience, subjects taught along with the curriculum followed by the school or the position & nature of work in the prior organization.',
    'Your resume should mention educational degrees and the subjects you graduated in.',
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar activePage="careers" />

      <main className="flex-1">
        {/* 2. Hero Section (Standard PageHero matching remaining pages with 70vh, breadcrumbs & headings) */}
        <PageHero
          breadcrumb="Careers"
          title="Careers"
          titleHighlight="@ JRS"
          subtitle="Be a part of a team that shapes brighter futures."
          imageSrc="/images/careers-hero.jpg"
          imageAlt="Careers at JRS International School"
          imagePosition="object-cover object-[center_35%]"
        />

        {/* 3. Section 1: "Grow. Teach. Inspire. Make a Difference." */}
        <section className="py-10 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading and Body */}
              <div className="lg:col-span-6 space-y-4" data-aos="fade-right">
                <div>
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="w-8 h-[2px] bg-[#031c3f]" />
                    <span
                      style={{ fontSize: '13px', lineHeight: '23px' }}
                      className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]"
                    >
                      TEACHING AT JRS
                    </span>
                    <span className="w-8 h-[2px] bg-[#031c3f]" />
                  </div>

                  <h2
                    style={{ fontSize: '40px', lineHeight: '50px' }}
                    className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
                  >
                    Grow. Teach. <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Inspire.</span>
                    <br className="hidden sm:inline" />
                    Make a <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Difference.</span>
                  </h2>
                </div>

                {/* Description Paragraph */}
                <p
                  style={{ lineHeight: '30px' }}
                  className="text-slate-700 text-sm sm:text-[15px] leading-[30px] sm:leading-[30px] pt-1"
                >
                  We believe that the teacher community at JRS is our unique asset.
                  Here, teachers are given the push to innovate, create, and approach
                  teaching methodology through interactive and research-based methods.
                  Teacher Development programs are constantly conducted to enhance
                  our teachers with the latest developments in the field of
                  education. Teacher seminars, events, and workshops are organized
                  on-campus periodically through professional training centers.
                </p>
              </div>

              {/* Right Column: Campus Architecture Image */}
              <div className="lg:col-span-6" data-aos="fade-left">
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-md bg-slate-100 group">
                  <img
                    src="/images/admissions-bg.jpg"
                    alt="JRS International School Campus"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.src = '/images/campus-building.jpg'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Section 2: "Why Join JRS?" (4 Horizontal Cards) */}
        <section className="py-10 bg-transparent overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10" data-aos="fade-up">
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#031c3f]" />
                <span
                  style={{ fontSize: '13px', lineHeight: '23px' }}
                  className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]"
                >
                  WORK CULTURE & BENEFITS
                </span>
                <span className="w-8 h-[2px] bg-[#031c3f]" />
              </div>

              <h2
                style={{ fontSize: '40px', lineHeight: '50px' }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                Why Join <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>JRS?</span>
              </h2>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyJoinReasons.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div
                      style={{ backgroundColor: 'rgb(6 60 163)' }}
                      className="w-12 h-12 rounded-full text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs"
                    >
                      <Icon className="w-5 h-5 stroke-[2.2] text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-bold text-[#031c3f] leading-snug group-hover:text-[#013aa3] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-slate-700 leading-relaxed mt-1.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 5. Section 3: "Who are passionate about their field" & "How to Apply" */}
        <section className="py-10 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Who are passionate about their field */}
              <div className="lg:col-span-6 space-y-4" data-aos="fade-right">
                <div>
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="w-8 h-[2px] bg-[#031c3f]" />
                    <span
                      style={{ fontSize: '13px', lineHeight: '23px' }}
                      className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]"
                    >
                      CAREER OPPORTUNITIES
                    </span>
                    <span className="w-8 h-[2px] bg-[#031c3f]" />
                  </div>
                  <h2
                    style={{ lineHeight: '44px' }}
                    className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#031c3f] tracking-tight leading-[44px] sm:leading-[44px] lg:leading-[44px]"
                  >
                    Who are passionate about their field –
                    <span
                      style={{ lineHeight: '44px' }}
                      className="text-[#e31e24] block mt-1.5 leading-[44px]"
                    >
                      A great future awaits you at JRS
                    </span>
                  </h2>
                </div>

                {/* Description */}
                <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed pt-1">
                  At JRS we are looking for professionals who understand and
                  believe in our philosophy. People who are genuinely interested in
                  creating students who are world-ready, in sync with today&apos;s
                  technology and backed by the Indian value system.
                </p>
              </div>

              {/* Right Column: How to Apply Card */}
              <div className="lg:col-span-6" data-aos="fade-left">
                <div className="relative bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-xs">
                  {/* Decorative Paper Airplane Watermark */}
                  <Send className="w-16 h-16 text-slate-200/50 absolute top-5 right-5 pointer-events-none transform rotate-12" />

                  {/* Heading */}
                  <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#e31e24] block mb-1">
                    APPLICATION PROCESS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#031c3f] tracking-tight mb-2.5">
                    How to Apply
                  </h3>

                  {/* Instructions */}
                  <p className="text-[14px] text-slate-700 leading-relaxed">
                    If you are looking for an opportunity to work at JRS International School,{' '}
                    <span className="inline-flex flex-wrap sm:flex-nowrap items-center gap-1.5 align-middle">
                      <span>please send your resume to:</span>
                      <a
                        href="mailto:hrjrshyd@gmail.com"
                        className="inline-flex items-center gap-1.5 font-bold text-[#013aa3] hover:text-[#e31e24] hover:underline transition-colors whitespace-nowrap"
                      >
                        <Mail className="w-4 h-4 text-[#013aa3] shrink-0" />
                        <span>hrjrshyd@gmail.com</span>
                      </a>
                    </span>
                  </p>

                  {/* What to mention */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <h4 className="text-[14px] font-bold text-slate-900 mb-3">
                      Please ensure you mention:
                    </h4>

                    <ul className="space-y-2.5">
                      {applicationRequirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-[14px] text-slate-700 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#013aa3] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  )
}
