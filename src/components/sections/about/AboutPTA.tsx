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
    <section id="pta" className="py-8 sm:py-12 bg-[#f8fafc] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-[11px] font-bold tracking-wider uppercase mb-1.5">
            <Users className="w-3 h-3" />
            <span>Community & Collaboration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031c3f] tracking-tight">
            Parent Teacher Association
          </h2>
          <p className="mt-1 text-slate-600 text-xs sm:text-sm">
            Promoting continuous collaboration between parents and educators to support the holistic development of our students.
          </p>
        </div>

        {/* Clean, Simple Compact Table Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  <th scope="col" className="py-2.5 px-3 sm:px-5 w-14 text-center">
                    S.N
                  </th>
                  <th scope="col" className="py-2.5 px-3 sm:px-5 min-w-[190px]">
                    Name
                  </th>
                  <th scope="col" className="py-2.5 px-3 sm:px-5 min-w-[130px]">
                    Designation
                  </th>
                  <th scope="col" className="py-2.5 px-3 sm:px-5 min-w-[240px]">
                    Address
                  </th>
                  <th scope="col" className="py-2.5 px-3 sm:px-5 min-w-[150px] text-right">
                    Contact Number
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[13px] text-slate-700">
                {ptaMembers.map((member) => {
                  const isChairman = member.designation.toLowerCase() === 'chairman'
                  return (
                    <tr
                      key={member.sn}
                      className={`transition-colors duration-150 hover:bg-slate-50/80 ${
                        isChairman ? 'bg-red-50/20' : ''
                      }`}
                    >
                      <td className="py-2 px-3 sm:px-5 text-center font-semibold text-slate-400 text-xs">
                        {member.sn}
                      </td>
                      <td className="py-2 px-3 sm:px-5 font-semibold text-[#031c3f]">
                        <div className="flex items-center gap-2">
                          <UserCheck className={`w-3.5 h-3.5 shrink-0 ${isChairman ? 'text-red-600' : 'text-slate-400'}`} />
                          <span>{member.name}</span>
                        </div>
                      </td>
                      <td className="py-2 px-3 sm:px-5">
                        {isChairman ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-red-100 text-red-700">
                            <Shield className="w-2.5 h-2.5" />
                            Chairman
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700">
                            Member
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-3 sm:px-5 text-slate-600">
                        <div className="flex items-start gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span>{member.address}</span>
                        </div>
                      </td>
                      <td className="py-2 px-3 sm:px-5 text-right font-medium">
                        <a
                          href={`tel:${member.contact}`}
                          className="inline-flex items-center gap-1.5 text-slate-700 hover:text-red-600 transition-colors font-mono text-xs"
                        >
                          <Phone className="w-3 h-3 text-slate-400 hover:text-red-600" />
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
