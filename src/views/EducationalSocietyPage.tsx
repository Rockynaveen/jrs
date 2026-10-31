'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import { Crown, Users, MapPin, Phone } from 'lucide-react'

interface CommitteeMember {
  sn: number
  name: string
  status: string
  address: string
  contact: string
}

const managingMembers: CommitteeMember[] = [
  {
    sn: 1,
    name: 'Mr. C. R. Jagadish',
    status: 'President',
    address: 'Karthikeya Nagar Nacharam, Hyderabad',
    contact: '9542664980',
  },
  {
    sn: 2,
    name: 'Ms. V. Jyothi',
    status: 'Vice-President',
    address: '12-13-415/3 Tarnaka, Secunderabad',
    contact: '9666312947',
  },
  {
    sn: 3,
    name: 'Ms. C. Amaravathi',
    status: 'General Secretary',
    address: 'Karthikeya Nagar Nacharam, Hyderabad',
    contact: '9346065525',
  },
  {
    sn: 4,
    name: 'Dr. C. Suman Kumar',
    status: 'Joint-Secretary',
    address: 'Boduppal, Hyderabad',
    contact: '9926811371',
  },
  {
    sn: 5,
    name: 'Ms. V. Vedavathi',
    status: 'Treasurer',
    address: 'Divya Enclave Vijaypuri Tarnaka, Hyderabad',
    contact: '9160300046',
  },
  {
    sn: 6,
    name: 'Mr. Sreepathi Rao',
    status: 'Executive-Member',
    address: 'Uppal, Hyderabad',
    contact: '9963701615',
  },
  {
    sn: 7,
    name: 'Mr. Sudharshan Rao',
    status: 'Exe-Member',
    address: 'L.B Nagar, Hyderabad',
    contact: '8520047067',
  },
  {
    sn: 8,
    name: 'Mr. Baskar Reddy',
    status: 'Exe-Member',
    address: 'Venkatadri Township Chowdarguda, Hyderabad',
    contact: '9908330490',
  },
]

export default function EducationalSocietyPage() {
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
      <Navbar activePage="educational-society" />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <PageHero
          breadcrumb="Educational Society"
          title="Educational Society â€”"
          titleHighlight="Managing Committee"
          subtitle="Distinguished Governing Body & Leadership"
          description="Distinguished governing body steering the vision, academic excellence, statutory compliance, and strategic growth of JRS International School."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Campus"
        />

        {/* 3. Managing Committee Section */}
        <section className="py-[50px] bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#031c3f]" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]">
                  GOVERNING BODY & LEADERSHIP
                </span>
                <span className="w-8 h-[2px] bg-[#031c3f]" />
              </div>

              <h2
                style={{ lineHeight: '50px' }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                Managing <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Committee</span>
              </h2>
              <p
                style={{ margin: '10px auto', lineHeight: '26px' }}
                className="text-[#111] text-xs sm:text-[15px] my-[10px] mx-auto text-center max-w-2xl leading-[26px] sm:leading-[26px]"
              >
                Distinguished governing body steering the vision, academic excellence, statutory compliance, and strategic growth of JRS International School.
              </p>
            </div>

            {/* Member Cards Grid (Matching PTA Section / Image 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 items-stretch">
              {managingMembers.map((member) => {
                const isPresident = member.status.toLowerCase() === 'president'

                return (
                  <div
                    key={member.sn}
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
                            isPresident
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
                          {isPresident ? (
                            <Crown className="w-3.5 h-3.5 text-amber-600 fill-amber-500/20 shrink-0 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]" />
                          ) : (
                            <Users className="w-3.5 h-3.5 text-black shrink-0 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]" />
                          )}
                          <span className="text-[11px] sm:text-[11.5px] font-extrabold uppercase tracking-wider text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                            {member.status}
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
                          <span className="text-xs sm:text-[12.5px] font-medium text-[#111] leading-snug line-clamp-2">
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
