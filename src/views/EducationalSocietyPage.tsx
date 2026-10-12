'use client'

import React, { useState, useEffect, useMemo } from 'react'
import AOS from 'aos'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import { ArrowUpDown, UserCheck, Shield } from 'lucide-react'

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

type SortField = 'sn' | 'name' | 'status'

export default function EducationalSocietyPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState<SortField>('sn')
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

  const filteredAndSortedMembers = useMemo(() => {
    let result = managingMembers.filter((member) => {
      const term = searchTerm.toLowerCase()
      return (
        member.name.toLowerCase().includes(term) ||
        member.status.toLowerCase().includes(term) ||
        member.sn.toString().includes(term)
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

  const totalPages =
    Math.ceil(filteredAndSortedMembers.length / entriesPerPage) || 1
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
      <Navbar activePage="educational-society" />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <PageHero
          breadcrumb="Educational Society"
          title="Educational Society —"
          titleHighlight="Managing Committee"
          subtitle="Distinguished Governing Body & Leadership"
          description="Distinguished governing body steering the vision, academic excellence, statutory compliance, and strategic growth of JRS International School."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Campus"
        />

        {/* 3. Managing Committee Section */}
        <div className="py-10 sm:py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

            {/* Section Header */}
            <div data-aos="fade-up">
              <h2 className="text-xl sm:text-2xl font-bold text-[#dc2626] mb-3 tracking-tight">
                MANAGING COMMITTEE :
              </h2>
            </div>

            {/* DataTables Controls */}
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

            {/* Soft Powder Blue Header Table */}
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
                        onClick={() => handleSort('sn')}
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
                        className="py-2.5 px-4 sm:px-6 min-w-[280px] cursor-pointer select-none hover:bg-[#d0ddf0] transition-colors"
                      >
                        <div className="inline-flex items-center gap-1">
                          <span>NAME OF THE PERSON</span>
                          <ArrowUpDown className="w-3 h-3 text-slate-500" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        onClick={() => handleSort('status')}
                        className="py-2.5 px-4 sm:px-6 min-w-[200px] text-right cursor-pointer select-none hover:bg-[#d0ddf0] transition-colors"
                      >
                        <div className="inline-flex items-center gap-1 justify-end">
                          <span>STATUS / DESIGNATION</span>
                          <ArrowUpDown className="w-3 h-3 text-slate-500" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-[13px] text-slate-700">
                    {paginatedMembers.length > 0 ? (
                      paginatedMembers.map((member) => {
                        const isPresident =
                          member.status.toLowerCase() === 'president'
                        const isVicePresident = member.status
                          .toLowerCase()
                          .includes('vice')
                        const isSecretary = member.status
                          .toLowerCase()
                          .includes('secretary')

                        return (
                          <tr
                            key={member.sn}
                            className={`hover:bg-slate-50/70 transition-colors ${
                              isPresident ? 'bg-red-50/20' : ''
                            }`}
                          >
                            <td className="py-3 px-4 sm:px-6 font-medium text-slate-800">
                              {member.sn}
                            </td>
                            <td className="py-3 px-4 sm:px-6 font-semibold text-slate-800">
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
                            <td className="py-3 px-4 sm:px-6 text-right font-medium">
                              {isPresident ? (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-bold bg-red-100 text-red-700 border border-red-200">
                                  <Shield className="w-3 h-3" />
                                  {member.status}
                                </span>
                              ) : isVicePresident ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                                  {member.status}
                                </span>
                              ) : isSecretary ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-100">
                                  {member.status}
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                                  {member.status}
                                </span>
                              )}
                            </td>
                          </tr>
                        )
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan={3}
                          className="py-8 text-center text-slate-500 italic"
                        >
                          No matching members found for &ldquo;{searchTerm}&rdquo;
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
