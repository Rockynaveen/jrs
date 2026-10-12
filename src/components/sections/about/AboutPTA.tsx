'use client'

import React from 'react'
import { Users, Phone, MapPin, User, Shield } from 'lucide-react'

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
    address: 'Divya Enclave Vijaypuri Tarnaka',
    contact: '9160300046',
  },
  {
    sn: 2,
    name: 'Mrs Amaravathi',
    designation: 'Member',
    address: 'Karthikeya Nagar Nacharam Hyderabad',
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
    address: 'Venkatadri Township Chowdarguda',
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
    address: 'Plot No.42, Sai Sri Enclave Near Venkatadri Township Narapally',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 xl:gap-4 items-stretch">
          {ptaMembers.map((member) => {
            const isChairman = member.designation.toLowerCase() === 'chairman'

            return (
              <div
                key={member.sn}
                className="relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden h-full group"
              >
                {/* Image Area with Placeholder Headshot & Bottom Designation Badge */}
                <div className="relative w-full aspect-[16/12] bg-slate-100 overflow-hidden flex-shrink-0">
                  <img
                    src="/images/avatar-placeholder.jpg"
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Glassmorphism Designation Card matching About JRS Section */}
                  <div className="absolute bottom-2.5 right-2.5 z-10">
                    <div
                      className="glass-badge px-3 py-1 rounded-xl transition-all duration-300 flex items-center gap-1.5"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.22)',
                        backdropFilter: 'blur(16px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.22)',
                        boxShadow: '0 8px 24px 0 rgba(0, 0, 0, 0.25), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      {isChairman && <Shield className="w-3 h-3 text-amber-400 shrink-0" />}
                      <span className="text-[11px] font-bold text-white tracking-wide uppercase drop-shadow-sm">
                        {member.designation}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content Area: Name, Address, Contact in line with minimal spacing */}
                <div className="p-3.5 pt-2.5 pb-3.5 flex flex-col items-center text-center w-full space-y-1.5">
                  {/* Member Name */}
                  <h3 className="text-[15px] xl:text-[16px] font-bold text-[#031c3f] group-hover:text-[#e31e24] transition-colors leading-tight line-clamp-1 w-full">
                    {member.name}
                  </h3>

                  {/* Address */}
                  <div className="flex items-center justify-center gap-1.5 text-[12.5px] xl:text-[13px] text-slate-600 leading-tight w-full">
                    <MapPin className="w-3.5 h-3.5 text-[#e31e24] shrink-0" />
                    <span className="truncate">{member.address}</span>
                  </div>

                  {/* Contact Number */}
                  <div className="w-full flex justify-center pt-0.5">
                    <a
                      href={`tel:${member.contact}`}
                      className="inline-flex items-center gap-1.5 text-[12.5px] xl:text-[13px] font-semibold text-slate-700 hover:text-[#e31e24] transition-colors leading-tight"
                    >
                      <Phone className="w-3 h-3 text-[#e31e24] shrink-0" />
                      <span className="font-mono">{member.contact}</span>
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
