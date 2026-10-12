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
      <div className="max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow: — COMMUNITY & COLLABORATION — */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#e31e24]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
              COMMUNITY & COLLABORATION
            </span>
            <span className="w-8 h-[2px] bg-[#e31e24]" />
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

        {/* Member Cards Grid - 5 Cards per Row on Large Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4.5 xl:gap-5 items-stretch">
          {ptaMembers.map((member) => {
            const isChairman = member.designation.toLowerCase() === 'chairman'

            return (
              <div
                key={member.sn}
                className="relative bg-white rounded-[22px] border border-slate-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden h-full group"
              >
                {/* Image Area with Placeholder Headshot & Bottom-Right Frosted Designation Badge */}
                <div className="relative w-full aspect-[4/3.3] bg-slate-100 overflow-hidden flex-shrink-0">
                  <img
                    src="/images/avatar-placeholder.jpg"
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Glassmorphism Designation Pill Badge in Logo Blue with Less Opacity */}
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-10">
                    <div
                      style={{
                        backgroundColor: 'rgba(1, 58, 163, 0.45)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: isChairman ? '1px solid rgba(251, 191, 36, 0.55)' : '1px solid rgba(255, 255, 255, 0.28)',
                        boxShadow: '0 4px 14px rgba(1, 58, 163, 0.25)',
                      }}
                      className="px-3 py-1 rounded-full flex items-center gap-1.5 text-white"
                    >
                      {isChairman ? (
                        <Crown className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      ) : (
                        <Users className="w-3.5 h-3.5 text-white/90 shrink-0" />
                      )}
                      <span className={`text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider ${isChairman ? 'text-amber-200' : 'text-white'}`}>
                        {member.designation}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content Area: Left Aligned with Red Map Pin & Bottom Action Pill Row */}
                <div className="p-4 sm:p-4.5 flex flex-col flex-1 justify-between bg-white text-left">
                  <div>
                    {/* Member Name */}
                    <h3 className="text-[15px] sm:text-[15.5px] font-bold text-[#031c3f] group-hover:text-[#013aa3] transition-colors leading-snug line-clamp-1">
                      {member.name}
                    </h3>

                    {/* Address with Red Location Pin */}
                    <div className="flex items-start gap-1.5 mt-2 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-[#ef4444] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-[12.5px] leading-snug line-clamp-2">
                        {member.address}
                      </span>
                    </div>
                  </div>

                  {/* Phone & Arrow Action Row (Logo Blue Tint) */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={`tel:${member.contact}`}
                      className="flex items-center gap-2 group/phone"
                    >
                      <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover/phone:scale-110 bg-[#013aa3]/10 text-[#013aa3]">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-[12.5px] sm:text-[13px] text-slate-800 group-hover/phone:text-[#013aa3] transition-colors font-mono tracking-tight">
                        {member.contact}
                      </span>
                    </a>

                    <a
                      href={`tel:${member.contact}`}
                      aria-label={`Call ${member.name}`}
                      className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all hover:scale-110 bg-[#013aa3]/10 hover:bg-[#013aa3]/20 text-[#013aa3]"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
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
