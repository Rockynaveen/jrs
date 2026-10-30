'use client'

import React from 'react'
import { Users, Phone, MapPin, Crown, ArrowRight } from 'lucide-react'

interface PTAMember {
  sn: number
  name: string
  designation: string
  address: string
  contact: string
}

const ptaMembers: PTAMember[] = [
  {
    sn: 1,
    name: 'Mrs. Jagadishwari Nataraj',
    designation: 'Chairman',
    address: 'Divya Enclave Vijaypuri Tarnaka, Hyderabad',
    contact: '9160300046',
  },
  {
    sn: 2,
    name: 'Mrs Amaravathi',
    designation: 'Member',
    address: 'Karthikeya Nagar Nacharam, Hyderabad',
    contact: '9346065525',
  },
  {
    sn: 3,
    name: 'Mrs Jyothi',
    designation: 'Member',
    address: '12-13-415/3 Tarnaka Secunderabad',
    contact: '9666312947',
  },
  {
    sn: 4,
    name: 'Mrs Nagasunitha',
    designation: 'Member',
    address: 'Muthvelliguda Hyderabad',
    contact: '8897503215',
  },
  {
    sn: 5,
    name: 'Mrs B Sheetal',
    designation: 'Member',
    address: 'Venkatadri Township Chowdariguda',
    contact: '8309981778',
  },
  {
    sn: 6,
    name: 'Mr Satyam',
    designation: 'Member',
    address: 'L.B Nagar Hyderabad',
    contact: '8520047067',
  },
  {
    sn: 7,
    name: 'Mr Yashwanth',
    designation: 'Member',
    address: 'Tarnaka Hyderabad',
    contact: '8885262483',
  },
  {
    sn: 8,
    name: 'Mr Vijay Bhaskar',
    designation: 'Member',
    address: '306, Venkatadri Township Chowdarguda',
    contact: '9908330490',
  },
  {
    sn: 9,
    name: 'Mr Ashok',
    designation: 'Member',
    address: 'Sai Enclave, Narapally Hyderabad',
    contact: '9949845482',
  },
  {
    sn: 10,
    name: 'Mrs Deepika',
    designation: 'Member',
    address: 'Plot No.187, Sheshadri Enclave Chowdariguda',
    contact: '8688246412',
  },
  {
    sn: 11,
    name: 'Mrs Harika',
    designation: 'Member',
    address: 'Plot No.42, Sai Sri Enclave Narapally',
    contact: '7674995822',
  },
]

export default function AboutPTA() {
  return (
    <section id="pta" className="py-[50px] bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow: — COMMUNITY & COLLABORATION — */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#031c3f]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]">
              COMMUNITY & COLLABORATION
            </span>
            <span className="w-8 h-[2px] bg-[#031c3f]" />
          </div>

          <h2
            style={{ lineHeight: '50px' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
          >
            Parent Teacher <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Association</span>
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            Promoting continuous collaboration between parents and educators to support the holistic development of our students.
          </p>
        </div>

        {/* Member Cards Grid - 4 Cards per Row on Large Screens matching site alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 items-stretch">
          {ptaMembers.map((member) => {
            const isChairman = member.designation.toLowerCase() === 'chairman'

            return (
              <div
                key={member.sn}
                className="relative bg-white rounded-[22px] border border-slate-200/90 shadow-none hover:border-slate-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden h-full group"
              >
                {/* Image Area with Placeholder Headshot & Bottom-Right Frosted Designation Badge */}
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

                {/* Card Content Area: Left Aligned with Red Map Pin & Bottom Action Pill Row */}
                <div className="p-4 sm:p-4.5 flex flex-col flex-1 justify-between bg-white text-left">
                  <div>
                    {/* Member Name */}
                    <h3
                      style={{ lineHeight: '26px' }}
                      className="text-[15.5px] sm:text-[16px] font-bold text-[#031c3f] group-hover:text-[#013aa3] transition-colors leading-[26px] line-clamp-1"
                    >
                      {member.name}
                    </h3>

                    {/* Address with Red Location Pin - High Contrast & Visible */}
                    <div className="flex items-start gap-1.5 mt-2">
                      <MapPin className="w-3.5 h-3.5 text-[#e31e24] shrink-0 mt-0.5" />
                      <span
                        style={{ lineHeight: '23px', fontWeight: 400 }}
                        className="text-xs sm:text-[12.5px] font-normal text-slate-700 leading-[23px] line-clamp-2"
                      >
                        {member.address}
                      </span>
                    </div>
                  </div>

                  {/* Phone & Arrow Action Row (High Contrast & Clear) */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
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
  )
}
