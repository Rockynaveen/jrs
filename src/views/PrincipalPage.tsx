'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import {
  Quote,
  Sparkles,
  GraduationCap,
} from 'lucide-react'

export default function PrincipalPage() {
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
      {/* 1. Header / Navbar */}
      <Navbar activePage="principal" />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <PageHero
          breadcrumb="Principalâ€™s Message"
          title="Principalâ€™s"
          titleHighlight="Message"
          subtitle="Empowering Minds and Enriching Lives."
          description="At JRS International School, we believe that every child has unique potential, and meaningful education is about discovering, nurturing and transforming that potential into purpose."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Campus"
        />

        {/* 3. Principal Profile & Core Address */}
        <section
          id="message"
          className="py-14 sm:py-20 bg-gradient-to-b from-slate-100/70 via-slate-50 to-slate-100/70 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Portrait Frame (kept exact same as it is) */}
              <div className="lg:col-span-5" data-aos="fade-right">
                <div className="sticky top-28 space-y-6">
                  <div className="relative mx-auto max-w-sm lg:max-w-none">
                    {/* Glow Backdrop */}
                    <div className="absolute -inset-3 bg-gradient-to-tr from-red-500/15 via-amber-500/15 to-blue-900/15 rounded-3xl filter blur-xl opacity-80" />

                    {/* Portrait Frame */}
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a2559] to-[#031c3f] p-2 shadow-2xl">
                      <div className="relative rounded-[22px] overflow-hidden bg-white flex flex-col items-center">
                        {/* Real Principal Photo */}
                        <div className="relative w-full aspect-[4/4.5] overflow-hidden bg-slate-100">
                          <img
                            src="/images/principal.jpeg"
                            alt="Mrs. Marlene Mannas, Principal - JRS International School"
                            className="w-full h-full object-cover object-[center_15%] hover:scale-105 transition-transform duration-500"
                          />
                          {/* Subtle Gradient Fade at Bottom of Photo */}
                          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                          {/* Floating Academic Leadership Badge */}
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#dc2626] text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                              <Sparkles className="w-3 h-3 text-amber-500" />
                              <span>Principal</span>
                            </span>
                          </div>
                        </div>

                        {/* Profile Details */}
                        <div className="w-full p-5 sm:p-6 text-center">
                          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#dc2626] block mb-1">
                            ACADEMIC LEADERSHIP
                          </span>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-[#031c3f] tracking-tight">
                            Mrs. Marlene Mannas
                          </h3>
                          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-[11px] font-bold text-[#111] shadow-2xs">
                            <span className="text-[#dc2626] font-extrabold">Qualifications:</span>
                            <span>M.A., B.Ed., PPTC, ECE</span>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-[#111] mt-2">
                            Principal, JRS International School
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Message on Authentic Paper Sheet */}
              <div className="lg:col-span-7" data-aos="fade-left">
                <div className="relative bg-[#fffdfa] rounded-2xl sm:rounded-3xl border border-[#e5e0d3] p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12),0_4px_16px_rgba(15,23,42,0.04),0_0_0_1px_rgba(0,0,0,0.02)] overflow-hidden">
                  {/* Subtle Paper Dog-Ear Corner at Top Right */}
                  <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none overflow-hidden z-20">
                    <div className="absolute top-0 right-0 w-0 h-0 border-solid border-t-[38px] border-r-[38px] border-t-slate-200/80 border-r-transparent shadow-xs" />
                    <div className="absolute top-0 right-0 w-0 h-0 border-solid border-t-[36px] border-r-[36px] border-t-[#f8f5ee] border-r-transparent" />
                  </div>

                  {/* Faint School Watermark in Paper Center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.035]">
                    <img
                      src="/images/logo.png"
                      alt=""
                      className="w-80 h-80 object-contain grayscale"
                    />
                  </div>

                  {/* Paper Letterhead Header */}
                  <div className="border-b-2 border-[#031c3f] pb-5 mb-8 relative">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src="/images/logo.png"
                          alt="JRS International School"
                          className="h-10 sm:h-12 w-auto object-contain"
                        />
                        <div className="border-l-2 border-slate-300 pl-3">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#dc2626] block">
                            FROM THE DESK OF
                          </span>
                          <span className="text-xs sm:text-sm font-extrabold text-[#031c3f]">
                            The Principal, JRS International School
                          </span>
                        </div>
                      </div>

                      <div className="text-left sm:text-right">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                          Official Address
                        </span>
                        <span className="text-[11px] font-medium text-slate-800">
                          Academic Year 2027 â€“ 2028
                        </span>
                      </div>
                    </div>

                    {/* Dual Red Accent Line beneath Navy Border */}
                    <div className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#dc2626] via-[#f59e0b] to-[#031c3f]" />
                  </div>

                  {/* Document Title Header */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#dc2626] text-xs font-extrabold uppercase tracking-wider mb-2">
                      <Quote className="w-3.5 h-3.5" />
                      <span>PRINCIPALâ€™S MESSAGE</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031c3f] tracking-tight">
                      Empowering Minds and Enriching Lives
                    </h2>
                  </div>

                  {/* Formal Salutation */}
                  <div className="pt-1 mb-5">
                    <h3 className="text-base sm:text-[17px] font-bold text-[#031c3f]">
                      Dear Parents, Students and Well-Wishers,
                    </h3>
                  </div>

                  {/* Official Letter Body Text */}
                  <div className="space-y-4 text-slate-800 text-[14px] sm:text-[14.5px] leading-[1.8] text-justify sm:text-left">
                    <p>
                      Welcome to <strong className="text-[#031c3f] font-bold">JRS International School</strong>, where we are committed to <em>â€œEmpowering Minds and Enriching Lives.â€</em> We believe that every child has unique potential, and meaningful education is about discovering, nurturing and transforming that potential into purpose.
                    </p>

                    <p>
                      At JRS, we go beyond academic excellence to develop curious thinkers, confident communicators, compassionate individuals and responsible global citizens. Through strong academics, innovative pedagogy, technology-enabled learning, AI, robotics and experiential opportunities, we create an environment where students are encouraged to question, explore, create and lead.
                    </p>

                    <p>
                      Our focus extends beyond the classroom. We nurture character, values, leadership, creativity, collaboration and resilience, preparing our students not simply for examinations, but for life.
                    </p>

                    <p>
                      With the partnership of our dedicated teachers and supportive parents, we strive to provide every learner with the confidence, knowledge and values needed to embrace the opportunities of tomorrow.
                    </p>

                    {/* Pull Quote Highlight on Paper */}
                    <div className="my-6 p-4 sm:p-5 rounded-xl bg-amber-50/60 border-l-4 border-[#dc2626] shadow-2xs">
                      <p className="text-[15px] sm:text-[16px] font-extrabold text-[#031c3f] italic leading-relaxed">
                        &ldquo;At JRS, we donâ€™t just prepare students for the futureâ€”we empower them to shape it.&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Formal Paper Sign-Off & Official Seal */}
                  <div className="mt-8 pt-6 border-t border-slate-200/90 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase font-extrabold tracking-wider text-[#111] mb-1">
                        Warm regards,
                      </p>
                      {/* Stylized Signature */}
                      <div className="py-1">
                        <span className="font-serif italic text-2xl sm:text-3xl text-[#031c3f] tracking-wide select-none">
                          Marlene Mannas
                        </span>
                      </div>
                      <h4 className="text-lg font-extrabold text-[#031c3f]">
                        Mrs. Marlene Mannas
                      </h4>
                      <p className="text-xs font-bold text-[#dc2626] tracking-wide mt-0.5">
                        M.A., B.Ed., PPTC, ECE
                      </p>
                      <p className="text-[13px] font-semibold text-[#111]">
                        Principal, JRS International School
                      </p>
                    </div>

                    {/* Official Institutional Stamp / Seal */}
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#031c3f]/35 flex flex-col items-center justify-center p-1 text-center select-none rotate-[-6deg] opacity-80 shadow-2xs">
                        <span className="text-[8px] font-black uppercase tracking-tight text-[#031c3f]">
                          JRS INT. SCHOOL
                        </span>
                        <span className="text-[7px] font-bold text-[#dc2626] my-0.5">
                          â˜… HYDERABAD â˜…
                        </span>
                        <span className="text-[7.5px] font-semibold text-slate-500">
                          PRINCIPAL
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
