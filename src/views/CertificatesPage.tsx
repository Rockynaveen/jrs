'use client'

import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import {
  FileText,
  Download,
  ExternalLink,
  X,
  Play,
  ArrowUpDown,
} from 'lucide-react'

interface DocumentItem {
  sno: number
  title: string
  btnLabel: string
  pdfUrl?: string
  href?: string
  anchorId?: string
  authority?: string
}

const generalInformation = [
  { sno: 1, info: 'NAME OF THE SCHOOL', details: 'JRS INTERNATIONAL SCHOOL' },
  { sno: 2, info: 'AFFILIATION NO. (IF APPLICABLE)', details: '3630135' },
  { sno: 3, info: 'SCHOOL CODE (IF APPLICABLE)', details: '57648' },
  {
    sno: 4,
    info: 'COMPLETE ADDRESS WITH PIN CODE',
    details:
      'Sy. No. 129, Narapally, Korremula Road, Ghatkesar Mandal, Medchal-Malkajgiri District, Hyderabad, Telangana - 500088.',
  },
  {
    sno: 5,
    info: 'PRINCIPAL NAME & QUALIFICATION:',
    details: 'Mrs. Marlene Mannas, M.Sc., B.Ed., M.A.',
  },
  { sno: 6, info: 'SCHOOL EMAIL ID', details: 'info@jrsinternationalschool.com' },
  {
    sno: 7,
    info: 'CONTACT DETAILS (LANDLINE/MOBILE)',
    details: '+91 915740 43210 / 08415-295555',
  },
]

const documentsAndInformation: DocumentItem[] = [
  {
    sno: 1,
    title:
      'COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY',
    btnLabel: 'AFFILIATION/UPGRADATION LETTER',
    pdfUrl: '/certificates/preprimary-to-8-noc.pdf',
    authority: 'Central Board of Secondary Education (CBSE)',
  },
  {
    sno: 2,
    title:
      'COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE',
    btnLabel: 'SOCIETY REGISTRATION',
    href: '/educational-society',
    authority: 'Registrar of Societies, Govt. of Telangana',
  },
  {
    sno: 3,
    title:
      'COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT',
    btnLabel: 'NOC',
    pdfUrl: '/certificates/preprimary-to-8-noc.pdf',
    authority: 'Department of School Education, Govt. of Telangana',
  },
  {
    sno: 4,
    title:
      "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE",
    btnLabel: 'RECOGNITION CERTIFICATE',
    pdfUrl: '/certificates/preprimary-to-8-noc.pdf',
    authority: 'District Educational Officer, Medchal-Malkajgiri',
  },
  {
    sno: 5,
    title:
      'COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE',
    btnLabel: 'BUILDING SAFETY CERTIFICATE',
    pdfUrl: '/certificates/annexure%20D.pdf',
    authority:
      'Deputy Executive Engineer (R&B), Buildings Sub-Division, Medchal-Malkajgiri',
  },
  {
    sno: 6,
    title:
      'COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY',
    btnLabel: 'FIRE SAFETY CERTIFICATE',
    pdfUrl: '/certificates/fire%20safety%20certificate.pdf',
    authority: 'Station Fire Officer, Fire Services Department',
  },
  {
    sno: 7,
    title:
      'COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION / UPGRADATION / EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL',
    btnLabel: 'SELF CERTIFICATION',
    pdfUrl: '/certificates/preprimary-to-8-noc.pdf',
    authority: 'School Administration / Competent Authority',
  },
  {
    sno: 8,
    title: 'COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES',
    btnLabel: 'WATER, HEALTH AND SANITATION',
    pdfUrl: '/certificates/report%20bacteriological.pdf',
    authority:
      'Directorate of I.P.M., P.H. Labs & Food Administration, Telangana',
  },
  {
    sno: 9,
    title: 'COPIES OF VALID CERTIFICATE OF LAND (AS PER CBSE AFFILIATION NORMS)',
    btnLabel: 'CERTIFICATE OF LAND',
    pdfUrl: '/certificates/certificate%20of%20land.pdf',
    authority: 'Sub-Registrar Office, Narapally, Medchal-Malkajgiri',
  },
]

const schoolInfrastructure = [
  {
    sno: 1,
    info: 'TOTAL CAMPUS AREA OF THE SCHOOL',
    details: '12,477 SQ MTR (3.08 ACRES)',
    docAction: {
      label: 'LAND CERTIFICATE',
      title: 'CERTIFICATE OF LAND (ANNEXURE B)',
      pdfUrl: '/certificates/certificate%20of%20land.pdf',
      authority: 'Sub-Registrar Office, Narapally, Medchal-Malkajgiri',
    },
  },
  {
    sno: 2,
    info: 'NO. AND SIZE OF THE CLASSROOM (SQ MTR)',
    details: '22, 48 SQ MTR',
  },
  {
    sno: 3,
    info: 'NO. AND SIZE OF THE LABORATORIES INCLUDING COMPUTER LABS (SQ MTR)',
    details: '4, 46 SQ Mtr',
  },
  { sno: 4, info: 'INTERNET FACILITY', details: 'YES' },
  { sno: 5, info: 'NO. OF GIRLS TOILETS', details: '20' },
  { sno: 6, info: 'NO. OF BOYS TOILETS', details: '20' },
  {
    sno: 7,
    info: 'LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL',
    action: {
      label: 'Watch Now',
      href: 'https://www.youtube.com/@JRSInternationalSchool',
    },
  },
]

const smcDocuments: DocumentItem[] = [
  {
    sno: 1,
    title: 'SCHOOL MANAGEMENT COMMITTEE',
    btnLabel: 'SCHOOL MANAGEMENT COMMITTEE',
    href: '/school-management-committee',
    authority: 'JRS Educational Society',
  },
]

export default function CertificatesPage() {
  const [selectedPdf, setSelectedPdf] = useState<{
    title: string
    pdfUrl: string
    authority?: string
  } | null>(null)

  const [smcSearch, setSmcSearch] = useState('')
  const [entriesPerPage, setEntriesPerPage] = useState('10')

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPdf(null)
      }
    }
    if (selectedPdf) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedPdf])

  const filteredSmc = smcDocuments.filter((item) =>
    item.title.toLowerCase().includes(smcSearch.toLowerCase())
  )

  const handleDocumentClick = (doc: DocumentItem) => {
    if (doc.pdfUrl) {
      setSelectedPdf({
        title: doc.btnLabel || doc.title,
        pdfUrl: doc.pdfUrl,
        authority: doc.authority,
      })
    } else if (doc.anchorId) {
      const el = document.getElementById(doc.anchorId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Navbar */}
      <Navbar activePage="certificates" />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <PageHero
          breadcrumb="Mandatory Disclosure"
          title="Mandatory"
          titleHighlight="Disclosure"
          subtitle="CBSE Public Disclosure & Statutory Compliance"
          description="In compliance with CBSE regulations, here are the mandatory public disclosures, statutory certificates, infrastructure details, and academic records for JRS International School."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Campus"
        />

        {/* 3. Main Tables Section */}
        <div className="py-10 sm:py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">

            {/* SECTION 1: General Information */}
            <section data-aos="fade-up">
              <h2 className="text-xl sm:text-2xl font-bold text-[#dc2626] mb-3 tracking-tight">
                General Information
              </h2>

              <div className="bg-white rounded-md border border-slate-300 shadow-2xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#dce7f6] border-b border-slate-300 text-xs sm:text-[13px] font-bold text-slate-800 uppercase tracking-wider">
                        <th scope="col" className="py-2.5 px-4 sm:px-6 w-20 text-left">
                          S.NO.
                        </th>
                        <th scope="col" className="py-2.5 px-4 sm:px-6 min-w-[280px]">
                          INFORMATION
                        </th>
                        <th scope="col" className="py-2.5 px-4 sm:px-6 min-w-[320px]">
                          DETAILS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs sm:text-[13px] text-slate-700">
                      {generalInformation.map((item) => (
                        <tr
                          key={item.sno}
                          className="hover:bg-slate-50/70 transition-colors"
                        >
                          <td className="py-3 px-4 sm:px-6 font-medium text-slate-800">
                            {item.sno}
                          </td>
                          <td className="py-3 px-4 sm:px-6 font-semibold text-slate-800">
                            {item.info}
                          </td>
                          <td className="py-3 px-4 sm:px-6 text-slate-800">
                            {item.details}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 2: Documents And Information */}
            <section data-aos="fade-up">
              <h2 className="text-xl sm:text-2xl font-bold text-[#dc2626] mb-3 tracking-tight">
                Documents And Information
              </h2>

              <div className="bg-white rounded-md border border-slate-300 shadow-2xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#dce7f6] border-b border-slate-300 text-xs sm:text-[13px] font-bold text-slate-800 uppercase tracking-wider">
                        <th scope="col" className="py-2.5 px-4 sm:px-6 w-20 text-left">
                          S.NO.
                        </th>
                        <th scope="col" className="py-2.5 px-4 sm:px-6 min-w-[380px]">
                          DOCUMENTS/INFORMATION
                        </th>
                        <th scope="col" className="py-2.5 px-4 sm:px-6 min-w-[240px] text-center sm:text-left">
                          UPLOAD DOCUMENTS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs sm:text-[13px] text-slate-700">
                      {documentsAndInformation.map((doc) => (
                        <tr
                          key={doc.sno}
                          className="hover:bg-slate-50/70 transition-colors"
                        >
                          <td className="py-3 px-4 sm:px-6 font-medium text-slate-800">
                            {doc.sno}
                          </td>
                          <td className="py-3 px-4 sm:px-6 text-slate-800 font-medium leading-relaxed">
                            {doc.title}
                          </td>
                          <td className="py-3 px-4 sm:px-6">
                            {doc.pdfUrl ? (
                              <button
                                type="button"
                                onClick={() => handleDocumentClick(doc)}
                                className="bg-[#eaf1fb] hover:bg-[#dbe7f6] text-[#1e40af] border border-[#bfdbfe] font-bold text-[11px] sm:text-xs px-3.5 py-1.5 rounded uppercase tracking-wider shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5"
                              >
                                <span>{doc.btnLabel}</span>
                              </button>
                            ) : doc.href ? (
                              <Link
                                href={doc.href}
                                className="bg-[#eaf1fb] hover:bg-[#dbe7f6] text-[#1e40af] border border-[#bfdbfe] font-bold text-[11px] sm:text-xs px-3.5 py-1.5 rounded uppercase tracking-wider shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5"
                              >
                                <span>{doc.btnLabel}</span>
                              </Link>
                            ) : (
                              <span className="bg-[#eaf1fb] text-[#1e40af] border border-[#bfdbfe] font-bold text-[11px] sm:text-xs px-3.5 py-1.5 rounded uppercase tracking-wider inline-block">
                                {doc.btnLabel}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 6: SCHOOL INFRASTRUCTURE: */}
            <section data-aos="fade-up">
              <h2 className="text-xl sm:text-2xl font-bold text-[#dc2626] mb-3 tracking-tight">
                SCHOOL INFRASTRUCTURE:
              </h2>

              <div className="bg-white rounded-md border border-slate-300 shadow-2xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#dce7f6] border-b border-slate-300 text-xs sm:text-[13px] font-bold text-slate-800 uppercase tracking-wider">
                        <th scope="col" className="py-2.5 px-4 sm:px-6 w-20 text-left">
                          S.NO.
                        </th>
                        <th scope="col" className="py-2.5 px-4 sm:px-6 min-w-[340px]">
                          INFORMATION
                        </th>
                        <th scope="col" className="py-2.5 px-4 sm:px-6 min-w-[280px]">
                          DETAILS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs sm:text-[13px] text-slate-700">
                      {schoolInfrastructure.map((item) => (
                        <tr
                          key={item.sno}
                          className="hover:bg-slate-50/70 transition-colors"
                        >
                          <td className="py-3 px-4 sm:px-6 font-medium text-slate-800">
                            {item.sno}
                          </td>
                          <td className="py-3 px-4 sm:px-6 text-slate-800 font-medium">
                            {item.info}
                          </td>
                          <td className="py-3 px-4 sm:px-6 text-slate-800">
                            {item.docAction ? (
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <span>{item.details}</span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setSelectedPdf({
                                      title: item.docAction.title,
                                      pdfUrl: item.docAction.pdfUrl,
                                      authority: item.docAction.authority,
                                    })
                                  }
                                  className="bg-[#eaf1fb] hover:bg-[#dbe7f6] text-[#1e40af] border border-[#bfdbfe] font-bold text-[11px] sm:text-xs px-3 py-1 rounded uppercase tracking-wider shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5 w-fit"
                                >
                                  <span>{item.docAction.label}</span>
                                </button>
                              </div>
                            ) : item.action ? (
                              <a
                                href={item.action.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#eaf1fb] hover:bg-[#dbe7f6] text-[#1e40af] border border-[#bfdbfe] font-bold text-[11px] sm:text-xs px-3.5 py-1.5 rounded uppercase tracking-wider shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5"
                              >
                                <Play className="w-3 h-3 fill-current" />
                                <span>{item.action.label}</span>
                              </a>
                            ) : (
                              item.details
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 7: SCHOOL MANAGEMENT COMMITEE : */}
            <section data-aos="fade-up">
              <h2 className="text-xl sm:text-2xl font-bold text-[#dc2626] mb-3 tracking-tight">
                SCHOOL MANAGEMENT COMMITEE :
              </h2>

              {/* DataTables-style controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <span>Show</span>
                  <select
                    value={entriesPerPage}
                    onChange={(e) => setEntriesPerPage(e.target.value)}
                    className="border border-slate-300 rounded px-2 py-1 text-xs bg-white text-slate-800 focus:outline-hidden focus:border-blue-500"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>
                  <span>entries per page</span>
                </div>

                <div className="flex items-center gap-1.5 w-full sm:w-auto">
                  <span>Search:</span>
                  <input
                    type="text"
                    value={smcSearch}
                    onChange={(e) => setSmcSearch(e.target.value)}
                    placeholder=""
                    className="border border-slate-300 rounded px-2 py-1 text-xs bg-white text-slate-800 focus:outline-hidden focus:border-blue-500 w-full sm:w-44"
                  />
                </div>
              </div>

              {/* SMC Table */}
              <div className="bg-white rounded-md border border-slate-300 shadow-2xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#dce7f6] border-b border-slate-300 text-xs sm:text-[13px] font-bold text-slate-800 uppercase tracking-wider">
                        <th scope="col" className="py-2.5 px-4 sm:px-6 w-24 text-left">
                          <div className="inline-flex items-center gap-1 cursor-pointer select-none">
                            <span>S.NO.</span>
                            <ArrowUpDown className="w-3 h-3 text-slate-400" />
                          </div>
                        </th>
                        <th scope="col" className="py-2.5 px-4 sm:px-6 min-w-[380px]">
                          <div className="inline-flex items-center gap-1 cursor-pointer select-none">
                            <span>DOCUMENTS/INFORMATION</span>
                            <ArrowUpDown className="w-3 h-3 text-slate-400" />
                          </div>
                        </th>
                        <th scope="col" className="py-2.5 px-4 sm:px-6 min-w-[240px]">
                          <div className="inline-flex items-center gap-1 cursor-pointer select-none">
                            <span>UPLOAD DOCUMENTS</span>
                            <ArrowUpDown className="w-3 h-3 text-slate-400" />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs sm:text-[13px] text-slate-700">
                      {filteredSmc.length > 0 ? (
                        filteredSmc.map((item) => (
                          <tr
                            key={item.sno}
                            className="hover:bg-slate-50/70 transition-colors"
                          >
                            <td className="py-3 px-4 sm:px-6 font-medium text-slate-800">
                              {item.sno}
                            </td>
                            <td className="py-3 px-4 sm:px-6 text-slate-800 font-medium">
                              {item.title}
                            </td>
                            <td className="py-3 px-4 sm:px-6">
                              {item.href ? (
                                <Link
                                  href={item.href}
                                  className="bg-[#eaf1fb] hover:bg-[#dbe7f6] text-[#1e40af] border border-[#bfdbfe] font-bold text-[11px] sm:text-xs px-3.5 py-1.5 rounded uppercase tracking-wider shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5"
                                >
                                  <span>{item.btnLabel}</span>
                                </Link>
                              ) : (
                                <span className="bg-[#eaf1fb] text-[#1e40af] border border-[#bfdbfe] font-bold text-[11px] sm:text-xs px-3.5 py-1.5 rounded uppercase tracking-wider inline-block">
                                  {item.btnLabel}
                                </span>
                              )}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={3}
                            className="py-6 text-center text-slate-500 italic"
                          >
                            No matching records found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* DataTables-style pagination info */}
              <div className="flex items-center justify-between mt-3 text-xs text-slate-700">
                <div>
                  Showing 1 to {filteredSmc.length} of {filteredSmc.length} entry
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    disabled
                    className="border border-slate-300 rounded px-2 py-0.5 text-xs text-slate-400 bg-slate-50 cursor-not-allowed"
                  >
                    ‹
                  </button>
                  <span className="border border-blue-600 bg-blue-50 text-blue-700 rounded px-2.5 py-0.5 text-xs font-semibold">
                    1
                  </span>
                  <button
                    type="button"
                    disabled
                    className="border border-slate-300 rounded px-2 py-0.5 text-xs text-slate-400 bg-slate-50 cursor-not-allowed"
                  >
                    ›
                  </button>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* 4. Full View PDF Modal Dialog */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-fade-in">
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-[#031c3f] to-[#0a2f64] text-white">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold tracking-tight">
                    {selectedPdf.title}
                  </h3>
                  {selectedPdf.authority && (
                    <p className="text-[11px] text-slate-300">
                      {selectedPdf.authority}
                    </p>
                  )}
                </div>
              </div>

              {/* Action & Close Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={selectedPdf.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-white/15 hover:bg-white/25 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open in Tab</span>
                </a>
                <a
                  href={selectedPdf.pdfUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedPdf(null)}
                  className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ml-1"
                  aria-label="Close viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 w-full bg-slate-100 overflow-hidden relative">
              <iframe
                src={`${selectedPdf.pdfUrl}#toolbar=1`}
                title={selectedPdf.title}
                className="w-full h-full border-0 bg-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
