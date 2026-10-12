'use client'

import React, { useState, useEffect, useMemo } from 'react'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import { ArrowUpDown, Phone, MapPin, UserCheck, Shield } from 'lucide-react'

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
    address: 'Divya Enclave Vijaypuri Tarnaka',
    contact: '9160300046',
  },
  {
    sno: 2,
    name: 'Mr. C. R. Jagadish',
    designation: 'Member',
    address: 'Karthikeya Nagar Nacharam Hyderabad',
    contact: '9542664980',
  },
  {
    sno: 3,
    name: 'Mrs. Jyothi',
    designation: 'Member',
    address: '12-13-415/3 Tarnaka Secunderabad',
    contact: '9666312947',
  },
  {
    sno: 4,
    name: 'Mr. Vijay Bhaskar',
    designation: 'Member',
    address: 'Venkatadri Township Chowdarguda',
    contact: '9908330490',
  },
  {
    sno: 5,
    name: 'Mr. Ashok',
    designation: 'Member',
    address: 'Narapally Hyderabad',
    contact: '9949845482',
  },
  {
    sno: 6,
    name: 'Mrs B. Sheetal',
    designation: 'Member',
    address: 'Venkatadri Township Chowdarguda',
    contact: '8309981778',
  },
  {
    sno: 7,
    name: 'Mrs Nagasunitha',
    designation: 'Member',
    address: 'Muthvelliguda Hyderabad',
    contact: '8897503215',
  },
  {
    sno: 8,
    name: 'Dr. VinayShree',
    designation: 'Member',
    address: 'Siddhartha School Boduppal',
    contact: '9502499979',
  },
  {
    sno: 9,
    name: 'Mr. Narsing Rao',
    designation: 'Member',
    address: 'Sivaji Vidya Peeth School',
    contact: '9963701615',
  },
  {
    sno: 10,
    name: 'Dr Srinivas',
    designation: 'Member',
    address: 'Venkatadri Township Chowdarguda',
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

type SortField = 'sno' | 'name' | 'designation' | 'address' | 'contact'

export default function SchoolManagementCommitteePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState<SortField>('sno')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  // Filter and sort members
  const filteredAndSortedMembers = useMemo(() => {
    let result = smcMembers.filter((member) => {
      const term = searchTerm.toLowerCase()
      return (
        member.name.toLowerCase().includes(term) ||
        member.designation.toLowerCase().includes(term) ||
        member.address.toLowerCase().includes(term) ||
        member.contact.includes(term) ||
        member.sno.toString().includes(term)
      )
    })

    result.sort((a, b) => {
      let aVal = a[sortField]
      let bVal = b[sortField]

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal
      }

      aVal = String(aVal).toLowerCase()
      bVal = String(bVal).toLowerCase()

      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

    return result
  }, [searchTerm, sortField, sortDirection])

  const totalPages = Math.ceil(filteredAndSortedMembers.length / entriesPerPage) || 1
  const startIndex = (currentPage - 1) * entriesPerPage
  const paginatedMembers = filteredAndSortedMembers.slice(
    startIndex,
    startIndex + entriesPerPage
  )

  const startEntry = filteredAndSortedMembers.length === 0 ? 0 : startIndex + 1
  const endEntry = Math.min(
    startIndex + entriesPerPage,
    filteredAndSortedMembers.length
  )

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

        {/* 3. SMC Table Section in Mandatory Disclosure format */}
        <div className="py-10 sm:py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

            {/* Section Header */}
            <div data-aos="fade-up">
              <h2 className="text-xl sm:text-2xl font-bold text-[#dc2626] mb-3 tracking-tight">
                SCHOOL MANAGEMENT COMMITEE :
              </h2>
            </div>

            {/* DataTables Controls: Show entries per page & Search */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 text-xs text-slate-700"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-1.5">
                <span>Show</span>
                <select
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value))
                    setCurrentPage(1)
                  }}
                  className="border border-slate-300 rounded px-2 py-1 text-xs bg-white text-slate-800 focus:outline-hidden focus:border-blue-500"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span>entries per page</span>
              </div>

              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <span>Search:</span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setCurrentPage(1)
                  }}
                  placeholder=""
                  className="border border-slate-300 rounded px-2 py-1 text-xs bg-white text-slate-800 focus:outline-hidden focus:border-blue-500 w-full sm:w-48"
                />
              </div>
            </div>

            {/* Table Container in Soft Powder Blue Header style */}
            <div
              className="bg-white rounded-md border border-slate-300 shadow-2xs overflow-hidden"
              data-aos="fade-up"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#dce7f6] border-b border-slate-300 text-xs sm:text-[13px] font-bold text-slate-800 uppercase tracking-wider">
                      <th
                        scope="col"
                        onClick={() => handleSort('sno')}
                        className="py-2.5 px-4 sm:px-6 w-20 text-left cursor-pointer select-none hover:bg-[#d0ddf0] transition-colors"
                      >
                        <div className="inline-flex items-center gap-1">
                          <span>S.NO.</span>
                          <ArrowUpDown className="w-3 h-3 text-slate-500" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        onClick={() => handleSort('name')}
                        className="py-2.5 px-4 sm:px-6 min-w-[220px] cursor-pointer select-none hover:bg-[#d0ddf0] transition-colors"
                      >
                        <div className="inline-flex items-center gap-1">
                          <span>NAME</span>
                          <ArrowUpDown className="w-3 h-3 text-slate-500" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        onClick={() => handleSort('designation')}
                        className="py-2.5 px-4 sm:px-6 min-w-[140px] cursor-pointer select-none hover:bg-[#d0ddf0] transition-colors"
                      >
                        <div className="inline-flex items-center gap-1">
                          <span>DESIGNATION</span>
                          <ArrowUpDown className="w-3 h-3 text-slate-500" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        onClick={() => handleSort('address')}
                        className="py-2.5 px-4 sm:px-6 min-w-[260px] cursor-pointer select-none hover:bg-[#d0ddf0] transition-colors"
                      >
                        <div className="inline-flex items-center gap-1">
                          <span>ADDRESS</span>
                          <ArrowUpDown className="w-3 h-3 text-slate-500" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        onClick={() => handleSort('contact')}
                        className="py-2.5 px-4 sm:px-6 min-w-[160px] text-left cursor-pointer select-none hover:bg-[#d0ddf0] transition-colors"
                      >
                        <div className="inline-flex items-center gap-1">
                          <span>CONTACT NUMBER</span>
                          <ArrowUpDown className="w-3 h-3 text-slate-500" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-[13px] text-slate-700">
                    {paginatedMembers.length > 0 ? (
                      paginatedMembers.map((member) => {
                        const isChairman =
                          member.designation.toLowerCase() === 'chairman'

                        return (
                          <tr
                            key={member.sno}
                            className={`hover:bg-slate-50/70 transition-colors ${
                              isChairman ? 'bg-red-50/20' : ''
                            }`}
                          >
                            <td className="py-3 px-4 sm:px-6 font-medium text-slate-800">
                              {member.sno}
                            </td>
                            <td className="py-3 px-4 sm:px-6 font-semibold text-slate-800">
                              <div className="flex items-center gap-2">
                                <UserCheck
                                  className={`w-3.5 h-3.5 shrink-0 ${
                                    isChairman
                                      ? 'text-red-600'
                                      : 'text-slate-400'
                                  }`}
                                />
                                <span>{member.name}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 sm:px-6">
                              {isChairman ? (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-bold bg-red-100 text-red-700 border border-red-200">
                                  <Shield className="w-3 h-3" />
                                  Chairman
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                                  Member
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 sm:px-6 text-slate-700">
                              <div className="flex items-start gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                                <span>{member.address}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 sm:px-6 text-slate-800 font-medium">
                              <a
                                href={`tel:${member.contact}`}
                                className="inline-flex items-center gap-1.5 text-slate-800 hover:text-red-600 transition-colors font-mono text-xs sm:text-[13px]"
                              >
                                <Phone className="w-3 h-3 text-slate-400 hover:text-red-600" />
                                <span>{member.contact}</span>
                              </a>
                            </td>
                          </tr>
                        )
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan={5}
                          className="py-8 text-center text-slate-500 italic"
                        >
                          No matching committee members found for &ldquo;{searchTerm}&rdquo;
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* DataTables Pagination & Entry Counts */}
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700 pt-1"
              data-aos="fade-up"
            >
              <div>
                Showing {startEntry} to {endEntry} of{' '}
                {filteredAndSortedMembers.length} entries
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`border border-slate-300 rounded px-2.5 py-1 text-xs transition-colors ${
                    currentPage === 1
                      ? 'text-slate-400 bg-slate-50 cursor-not-allowed'
                      : 'text-slate-700 bg-white hover:bg-slate-100 cursor-pointer'
                  }`}
                  aria-label="Previous page"
                >
                  ‹
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`rounded px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                        currentPage === page
                          ? 'border border-blue-600 bg-blue-50 text-blue-700'
                          : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={`border border-slate-300 rounded px-2.5 py-1 text-xs transition-colors ${
                    currentPage === totalPages
                      ? 'text-slate-400 bg-slate-50 cursor-not-allowed'
                      : 'text-slate-700 bg-white hover:bg-slate-100 cursor-pointer'
                  }`}
                  aria-label="Next page"
                >
                  ›
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  )
}
