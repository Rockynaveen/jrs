'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import { Crown, Users, MapPin, Phone } from 'lucide-react'

interface SMCMember {
  sno: number
  name: string
  designation: string
  address: string
  contact: string
}

const smcMembers: SMCMember[] = [
  {
    sno: 1,
    name: 'Mrs. Jagadishwari Nataraj',
    designation: 'Chairman',
    address: 'Divya Enclave Vijaypuri Tarnaka, Hyderabad',
    contact: '9160300046',
  },
  {
    sno: 2,
    name: 'Mr. C. R. Jagadish',
    designation: 'Member',
    address: 'Karthikeya Nagar Nacharam, Hyderabad',
    contact: '9542664980',
  },
  {
    sno: 3,
    name: 'Mrs. Jyothi',
    designation: 'Member',
    address: '12-13-415/3 Tarnaka, Secunderabad',
    contact: '9666312947',
  },
  {
    sno: 4,
    name: 'Mr. Vijay Bhaskar',
    designation: 'Member',
    address: 'Venkatadri Township Chowdarguda, Hyderabad',
    contact: '9908330490',
  },
  {
    sno: 5,
    name: 'Mr. Ashok',
    designation: 'Member',
    address: 'Sai Enclave, Narapally, Hyderabad',
    contact: '9949845482',
  },
  {
    sno: 6,
    name: 'Mrs B. Sheetal',
    designation: 'Member',
    address: 'Venkatadri Township Chowdarguda, Hyderabad',
    contact: '8309981778',
  },
  {
    sno: 7,
    name: 'Mrs Nagasunitha',
    designation: 'Member',
    address: 'Muthvelliguda, Hyderabad',
    contact: '8897503215',
  },
  {
    sno: 8,
    name: 'Dr. VinayShree',
    designation: 'Member',
    address: 'Siddhartha School Boduppal, Hyderabad',
    contact: '9502499979',
  },
  {
    sno: 9,
    name: 'Mr. Narsing Rao',
    designation: 'Member',
    address: 'Sivaji Vidya Peeth School, Hyderabad',
    contact: '9963701615',
  },
  {
    sno: 10,
    name: 'Dr Srinivas',
    designation: 'Member',
    address: 'Venkatadri Township Chowdarguda, Hyderabad',
    contact: '9912712798',
  },
  {
    sno: 11,
    name: 'Dr. Anil Kumar',
    designation: 'Member',
    address: 'Boduppal, Hyderabad',
    contact: '9926811371',
  },
]

export default function SchoolManagementCommitteePage() {
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
      {/* 1. Navbar */}
      <Navbar activePage="school-management-committee" />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <PageHero
          breadcrumb="School Management Committee"
          title="School Management"
          titleHighlight="Committee"
          subtitle="Governing Body & Institutional Leadership"
          description="The School Management Committee (SMC) ensures academic integrity, statutory compliance, student welfare, and continuous institutional growth at JRS International School."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Campus"
        />

        {/* 3. SMC Cards Section (5 Cards per Row on Large Screens) */}
        <section className="py-[50px] bg-white scroll-mt-20">
          <div className="max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#e31e24]" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
                  STATUTORY GOVERNANCE & COMPLIANCE
                </span>
                <span className="w-8 h-[2px] bg-[#e31e24]" />
              </div>

              <h2
                style={{ lineHeight: '50px' }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                School Management <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Committee</span>
              </h2>
              <p
                style={{ margin: '10px auto', lineHeight: '26px' }}
                className="text-slate-600 text-xs sm:text-[15px] my-[10px] mx-auto text-center max-w-2xl leading-[26px] sm:leading-[26px]"
              >
                The School Management Committee (SMC) ensures academic integrity, statutory compliance, student welfare, and continuous institutional growth at JRS International School.
              </p>
            </div>

            {/* Member Cards Grid - 5 Cards per Row on Large Screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4.5 xl:gap-5 items-stretch">
              {smcMembers.map((member) => {
                const isChairman = member.designation.toLowerCase() === 'chairman'

                return (
                  <div
                    key={member.sno}
                    data-aos="fade-up"
                    className="relative bg-white rounded-[22px] border border-slate-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden h-full group"
                  >
                    {/* Image Area with Placeholder Headshot & Bottom-Right Glassmorphism Designation Badge */}
                    <div className="relative w-full aspect-[4/3.3] bg-slate-100 overflow-hidden flex-shrink-0">
                      <img
                        src="/images/avatar-placeholder.jpg"
                        alt={member.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Floating True Glassmorphism Designation Pill Badge */}
                      <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-10">
                        <div
                          style={
                            isChairman
                              ? {
                                  background:
                                    'linear-gradient(135deg, rgba(255, 255, 255, 0.38) 0%, rgba(254, 243, 199, 0.22) 100%)',
                                  backdropFilter: 'blur(12px) saturate(190%)',
                                  WebkitBackdropFilter: 'blur(12px) saturate(190%)',
                                  border: '1.5px solid rgba(245, 158, 11, 0.65)',
                                  boxShadow:
                                    '0 8px 24px -4px rgba(0, 0, 0, 0.12), inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.06)',
                                }
                              : {
                                  background:
                                    'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.12) 100%)',
                                  backdropFilter: 'blur(12px) saturate(190%)',
                                  WebkitBackdropFilter: 'blur(12px) saturate(190%)',
                                  border: '1.5px solid rgba(255, 255, 255, 0.85)',
                                  boxShadow:
                                    '0 8px 24px -4px rgba(0, 0, 0, 0.12), inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.06)',
                                }
                          }
                          className="px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md transition-all duration-300 hover:scale-105"
                        >
                          {isChairman ? (
                            <Crown className="w-3.5 h-3.5 text-amber-600 fill-amber-500/20 shrink-0 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]" />
                          ) : (
                            <Users className="w-3.5 h-3.5 text-black shrink-0 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]" />
                          )}
                          <span className="text-[11px] sm:text-[11.5px] font-extrabold uppercase tracking-wider text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                            {member.designation}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content Area: Left Aligned with Red Map Pin & Phone */}
                    <div className="p-4 sm:p-4.5 flex flex-col flex-1 justify-between bg-white text-left">
                      <div>
                        {/* Member Name */}
                        <h3 className="text-[15.5px] sm:text-[16px] font-bold text-[#031c3f] group-hover:text-[#013aa3] transition-colors leading-snug line-clamp-1">
                          {member.name}
                        </h3>

                        {/* Address with Red Location Pin */}
                        <div className="flex items-start gap-1.5 mt-2">
                          <MapPin className="w-3.5 h-3.5 text-[#e31e24] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-[12.5px] font-medium text-slate-700 leading-snug line-clamp-2">
                            {member.address}
                          </span>
                        </div>
                      </div>

                      {/* Phone Row */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <a
                          href={`tel:${member.contact}`}
                          className="flex items-center gap-2 group/phone"
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover/phone:scale-110 bg-[#013aa3]/10 text-[#013aa3]">
                            <Phone className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-bold text-[13px] text-slate-900 group-hover/phone:text-[#013aa3] transition-colors tracking-tight">
                            {member.contact}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  )
}
