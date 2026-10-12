'use client'

import React from 'react'
import { Users, Phone, MapPin, UserCheck, Shield } from 'lucide-react'

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
    <section id="pta" className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#e31e24]" />
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#e31e24]">
              COMMUNITY & COLLABORATION
            </span>
            <span className="w-8 h-[2px] bg-[#e31e24]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[36px] md:leading-[46px] lg:text-[42px] lg:leading-[52px] font-extrabold text-[#031c3f] tracking-tight">
            Parent Teacher <span className="text-[#e31e24]">Association</span>
          </h2>

          <p className="mt-2.5 text-slate-600 text-sm sm:text-[16px] sm:leading-[26px] lg:text-[16px] lg:leading-[26px]">
            Promoting continuous collaboration between parents and educators to support the holistic development of our students.
          </p>
        </div>

        {/* Premium Executive Table Card */}
        <div
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/90 overflow-hidden"
          data-aos="fade-up"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#dce7f6] border-b border-slate-300 text-slate-800 text-xs sm:text-[13px] font-bold uppercase tracking-wider">
                  <th scope="col" className="py-3 sm:py-3.5 px-3 sm:px-6 w-14 sm:w-16 text-center">
                    S.N
                  </th>
                  <th scope="col" className="py-3 sm:py-3.5 px-3 sm:px-6 min-w-[200px]">
                    Name
                  </th>
                  <th scope="col" className="py-3 sm:py-3.5 px-3 sm:px-6 min-w-[140px]">
                    Designation
                  </th>
                  <th scope="col" className="py-3 sm:py-3.5 px-3 sm:px-6 min-w-[260px]">
                    Address
                  </th>
                  <th scope="col" className="py-3 sm:py-3.5 px-3 sm:px-6 min-w-[170px] text-right">
                    Contact Number
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[13px] sm:text-[13.5px] text-slate-700">
                {ptaMembers.map((member) => {
                  const isChairman = member.designation.toLowerCase() === 'chairman'
                  return (
                    <tr
                      key={member.sn}
                      className={`transition-colors duration-150 ${isChairman
                          ? 'bg-red-50/40 hover:bg-red-50/70 border-l-4 border-l-[#e31e24]'
                          : 'even:bg-slate-50/40 hover:bg-slate-50/90'
                        }`}
                    >
                      {/* S.N */}
                      <td className="py-3.5 px-3 sm:px-6 text-center font-bold text-slate-400 text-xs">
                        #{member.sn}
                      </td>

                      {/* Name */}
                      <td className="py-3.5 px-3 sm:px-6 font-bold text-[#031c3f]">
                        <div className="flex items-center gap-2.5">
                          <UserCheck
                            className={`w-4 h-4 shrink-0 ${isChairman ? 'text-[#e31e24]' : 'text-slate-400'
                              }`}
                          />
                          <span className={isChairman ? 'font-black text-[#031c3f]' : ''}>
                            {member.name}
                          </span>
                        </div>
                      </td>

                      {/* Designation */}
                      <td className="py-3.5 px-3 sm:px-6">
                        {isChairman ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-[#e31e24] text-white shadow-sm shadow-red-500/25">
                            <Shield className="w-3 h-3" />
                            Chairman
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                            Member
                          </span>
                        )}
                      </td>

                      {/* Address */}
                      <td className="py-3.5 px-3 sm:px-6 text-slate-600">
                        <div className="flex items-start gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#e31e24] shrink-0 mt-0.5" />
                          <span className="leading-snug">{member.address}</span>
                        </div>
                      </td>

                      {/* Contact Number */}
                      <td className="py-3.5 px-3 sm:px-6 text-right font-medium">
                        <a
                          href={`tel:${member.contact}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#031c3f] text-slate-800 hover:text-white font-bold font-mono text-xs transition-all duration-200 shadow-sm"
                        >
                          <Phone className="w-3 h-3 text-[#e31e24]" />
                          <span>{member.contact}</span>
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}
