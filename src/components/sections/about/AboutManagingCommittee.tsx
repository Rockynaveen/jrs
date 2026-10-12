'use client'

import React from 'react'
import { UserCheck, Shield } from 'lucide-react'

interface CommitteeMember {
  sn: number
  name: string
  status: string
}

const managingMembers: CommitteeMember[] = [
  {
    sn: 1,
    name: 'Mr. C. R. Jagadish',
    status: 'President',
  },
  {
    sn: 2,
    name: 'Ms. V. Jyothi',
    status: 'Vice-President',
  },
  {
    sn: 3,
    name: 'Ms. C. Amaravathi',
    status: 'General Secretary',
  },
  {
    sn: 4,
    name: 'Dr. C. Suman Kumar',
    status: 'Joint-Secretary',
  },
  {
    sn: 5,
    name: 'Ms. V. Vedavathi',
    status: 'Treasurer',
  },
  {
    sn: 6,
    name: 'Mr. Sreepathi Rao',
    status: 'Executive-Member',
  },
  {
    sn: 7,
    name: 'Mr. Sudharshan Rao',
    status: 'Exe-Member',
  },
  {
    sn: 8,
    name: 'Mr. Baskar Reddy',
    status: 'Exe-Member',
  },
]

export default function AboutManagingCommittee() {
  return (
    <section
      id="educational-society"
      className="py-8 sm:py-12 bg-white border-t border-slate-200/70 scroll-mt-20"
    >
      {/* Anchor for alternate URL */}
      <div id="educational-committee" className="scroll-mt-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#dc2626] tracking-tight mb-1">
            MANAGING COMMITTEE :
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Distinguished governing body steering the vision, academic excellence, and strategic growth of JRS International School.
          </p>
        </div>

        {/* Clean, Simple Table Card */}
        <div className="bg-white rounded-md border border-slate-300 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#dce7f6] border-b border-slate-300 text-xs sm:text-[13px] font-bold text-slate-800 uppercase tracking-wider">
                  <th scope="col" className="py-2.5 px-4 sm:px-6 w-16 text-center">
                    S.NO.
                  </th>
                  <th scope="col" className="py-2.5 px-4 sm:px-6 min-w-[260px]">
                    NAME OF THE PERSON
                  </th>
                  <th scope="col" className="py-2.5 px-4 sm:px-6 text-right min-w-[180px]">
                    STATUS / DESIGNATION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[13px] text-slate-700">
                {managingMembers.map((member) => {
                  const isPresident = member.status.toLowerCase() === 'president'
                  const isVicePresident = member.status.toLowerCase().includes('vice')
                  const isSecretary = member.status.toLowerCase().includes('secretary')

                  return (
                    <tr
                      key={member.sn}
                      className={`transition-colors duration-150 hover:bg-white ${
                        isPresident ? 'bg-red-50/20' : ''
                      }`}
                    >
                      <td className="py-2 px-4 sm:px-6 text-center font-semibold text-slate-400 text-xs">
                        {member.sn}
                      </td>
                      <td className="py-2 px-4 sm:px-6 font-semibold text-[#031c3f]">
                        <div className="flex items-center gap-2">
                          <UserCheck
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isPresident
                                ? 'text-red-600'
                                : isVicePresident
                                ? 'text-blue-600'
                                : 'text-slate-400'
                            }`}
                          />
                          <span>{member.name}</span>
                        </div>
                      </td>
                      <td className="py-2 px-4 sm:px-6 text-right">
                        {isPresident ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-100 text-red-700">
                            <Shield className="w-2.5 h-2.5" />
                            {member.status}
                          </span>
                        ) : isVicePresident ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                            {member.status}
                          </span>
                        ) : isSecretary ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-100">
                            {member.status}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700">
                            {member.status}
                          </span>
                        )}
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
