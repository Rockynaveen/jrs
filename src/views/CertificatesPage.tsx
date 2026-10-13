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
  { sno: 1, info: 'Name of the School', details: 'JRS INTERNATIONAL SCHOOL' },
  { sno: 2, info: 'Affiliation No. (if applicable)', details: '3630135' },
  { sno: 3, info: 'School Code (if applicable)', details: '57648' },
  {
    sno: 4,
    info: 'Complete Address with Pin Code',
    details:
      'Sy. No. 129, Narapally, Korremula Road, Ghatkesar Mandal, Medchal-Malkajgiri District, Hyderabad, Telangana - 500088.',
  },
  {
    sno: 5,
    info: 'Principal Name & Qualification',
    details: 'Mrs. Marlene Mannas, M.Sc., B.Ed., M.A.',
  },
  { sno: 6, info: 'School Email ID', details: 'info@jrsinternationalschool.com' },
  {
    sno: 7,
    info: 'Contact Details (Landline / Mobile)',
    details: '+91 915740 43210 / 08415-295555',
  },
]

const documentsAndInformation: DocumentItem[] = [
  {
    sno: 1,
    title:
      'Copies of Affiliation/Upgradation Letter and recent Extension of Affiliation, if any',
    btnLabel: 'Affiliation / Upgradation Letter',
    pdfUrl: '/certificates/preprimary-to-8-noc.pdf',
    authority: 'Central Board of Secondary Education (CBSE)',
  },
  {
    sno: 2,
    title:
      'Copies of Societies/Trust/Company Registration/Renewal Certificate, as applicable',
    btnLabel: 'Society Registration',
    href: '/educational-society',
    authority: 'Registrar of Societies, Govt. of Telangana',
  },
  {
    sno: 3,
    title:
      'Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt./UT',
    btnLabel: 'NOC Certificate',
    pdfUrl: '/certificates/preprimary-to-8-noc.pdf',
    authority: 'Department of School Education, Govt. of Telangana',
  },
  {
    sno: 4,
    title:
      "Copies of Recognition Certificate under RTE Act, 2009, and its renewal if applicable",
    btnLabel: 'Recognition Certificate',
    pdfUrl: '/certificates/preprimary-to-8-noc.pdf',
    authority: 'District Educational Officer, Medchal-Malkajgiri',
  },
  {
    sno: 5,
    title:
      'Copy of valid Building Safety Certificate as per the National Building Code',
    btnLabel: 'Building Safety Certificate',
    pdfUrl: '/certificates/annexure%20D.pdf',
    authority:
      'Deputy Executive Engineer (R&B), Buildings Sub-Division, Medchal-Malkajgiri',
  },
  {
    sno: 6,
    title:
      'Copy of valid Fire Safety Certificate issued by the competent authority',
    btnLabel: 'Fire Safety Certificate',
    pdfUrl: '/certificates/fire%20safety%20certificate.pdf',
    authority: 'Station Fire Officer, Fire Services Department',
  },
  {
    sno: 7,
    title:
      'Copy of the DEO Certificate submitted by the school for Affiliation / Upgradation / Extension of Affiliation or Self Certification by School',
    btnLabel: 'Self Certification',
    pdfUrl: '/certificates/preprimary-to-8-noc.pdf',
    authority: 'School Administration / Competent Authority',
  },
  {
    sno: 8,
    title: 'Copies of valid Water, Health and Sanitation Certificates',
    btnLabel: 'Water, Health & Sanitation',
    pdfUrl: '/certificates/report%20bacteriological.pdf',
    authority:
      'Directorate of I.P.M., P.H. Labs & Food Administration, Telangana',
  },
  {
    sno: 9,
    title: 'Copies of valid Certificate of Land (as per CBSE Affiliation Norms)',
    btnLabel: 'Certificate of Land',
    pdfUrl: '/certificates/certificate%20of%20land.pdf',
    authority: 'Sub-Registrar Office, Narapally, Medchal-Malkajgiri',
  },
]

const schoolInfrastructure = [
  {
    sno: 1,
    info: 'Total Campus Area of the School',
    details: '12,477 Sq. Mtr. (3.08 Acres)',
    docAction: {
      label: 'Land Certificate',
      title: 'Certificate of Land (Annexure B)',
      pdfUrl: '/certificates/certificate%20of%20land.pdf',
      authority: 'Sub-Registrar Office, Narapally, Medchal-Malkajgiri',
    },
  },
  {
    sno: 2,
    info: 'No. and Size of Classrooms (Sq. Mtr.)',
    details: '22 Classrooms (48 Sq. Mtr. each)',
  },
  {
    sno: 3,
    info: 'No. and Size of Laboratories including Computer Labs (Sq. Mtr.)',
    details: '4 Laboratories (46 Sq. Mtr. each)',
  },
  { sno: 4, info: 'Internet Facility', details: 'Yes' },
  { sno: 5, info: 'No. of Girls Toilets', details: '20' },
  { sno: 6, info: 'No. of Boys Toilets', details: '20' },
  {
    sno: 7,
    info: 'Link of YouTube Video of inspection of school infrastructure',
    action: {
      label: 'Watch Video',
      href: 'https://www.youtube.com/@JRSInternationalSchool',
    },
  },
]

const smcDocuments: DocumentItem[] = [
  {
    sno: 1,
    title: 'School Management Committee (SMC)',
    btnLabel: 'View SMC Details',
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
        <section className="py-[50px] bg-white scroll-mt-20">
          <div className="max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#e31e24]" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
                  STATUTORY COMPLIANCE & PUBLIC DISCLOSURE
                </span>
                <span className="w-8 h-[2px] bg-[#e31e24]" />
              </div>

              <h2
                style={{ lineHeight: '50px' }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                Mandatory Public <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>Disclosure</span>
              </h2>
              <p
                style={{ margin: '10px auto', lineHeight: '26px' }}
                className="text-slate-600 text-xs sm:text-[15px] my-[10px] mx-auto text-center max-w-2xl leading-[26px] sm:leading-[26px]"
              >
                In compliance with CBSE regulations, here are the mandatory public disclosures, statutory certificates, infrastructure details, and academic records for JRS International School.
              </p>
            </div>

            {/* SECTION 1: General Information */}
            <section data-aos="fade-up">
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-1.5 h-6 bg-[#e31e24] rounded-full inline-block shrink-0" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#031c3f] tracking-tight font-['Manrope',sans-serif]">
                  General Information
                </h3>
              </div>

              <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f0f5fc] border-b border-slate-200 text-xs sm:text-[13px] font-bold text-[#031c3f] uppercase tracking-wider font-['Manrope',sans-serif]">
                        <th scope="col" className="py-3 px-4 sm:px-6 w-20 text-left">
                          S.NO.
                        </th>
                        <th scope="col" className="py-3 px-4 sm:px-6 min-w-[280px]">
                          INFORMATION
                        </th>
                        <th scope="col" className="py-3 px-4 sm:px-6 min-w-[320px]">
                          DETAILS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[13.5px] sm:text-[14px] text-slate-700 font-['Inter',sans-serif]">
                      {generalInformation.map((item) => (
                        <tr
                          key={item.sno}
                          className="hover:bg-slate-50/80 transition-colors"
                        >
                          <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-500">
                            {item.sno}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#031c3f] leading-relaxed">
                            {item.info}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-slate-700 leading-relaxed font-normal">
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
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-1.5 h-6 bg-[#e31e24] rounded-full inline-block shrink-0" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#031c3f] tracking-tight font-['Manrope',sans-serif]">
                  Documents and Information
                </h3>
              </div>

              <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f0f5fc] border-b border-slate-200 text-xs sm:text-[13px] font-bold text-[#031c3f] uppercase tracking-wider font-['Manrope',sans-serif]">
                        <th scope="col" className="py-3 px-4 sm:px-6 w-20 text-left">
                          S.NO.
                        </th>
                        <th scope="col" className="py-3 px-4 sm:px-6 min-w-[380px]">
                          DOCUMENTS / INFORMATION
                        </th>
                        <th scope="col" className="py-3 px-4 sm:px-6 min-w-[240px] text-center sm:text-left">
                          UPLOAD DOCUMENTS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[13.5px] sm:text-[14px] text-slate-700 font-['Inter',sans-serif]">
                      {documentsAndInformation.map((doc) => (
                        <tr
                          key={doc.sno}
                          className="hover:bg-slate-50/80 transition-colors"
                        >
                          <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-500">
                            {doc.sno}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-[#031c3f] font-medium leading-relaxed">
                            {doc.title}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6">
                            {doc.pdfUrl ? (
                              <button
                                type="button"
                                onClick={() => handleDocumentClick(doc)}
                                className="bg-[#013aa3]/10 hover:bg-[#013aa3] text-[#013aa3] hover:text-white border border-[#013aa3]/20 font-semibold text-xs sm:text-[12.5px] px-3.5 py-1.5 rounded-lg tracking-wide shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5 font-['Inter',sans-serif]"
                              >
                                <FileText className="w-3.5 h-3.5 shrink-0" />
                                <span>{doc.btnLabel}</span>
                              </button>
                            ) : doc.href ? (
                              <Link
                                href={doc.href}
                                className="bg-[#013aa3]/10 hover:bg-[#013aa3] text-[#013aa3] hover:text-white border border-[#013aa3]/20 font-semibold text-xs sm:text-[12.5px] px-3.5 py-1.5 rounded-lg tracking-wide shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5 font-['Inter',sans-serif]"
                              >
                                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                                <span>{doc.btnLabel}</span>
                              </Link>
                            ) : (
                              <span className="bg-[#013aa3]/10 text-[#013aa3] border border-[#013aa3]/20 font-semibold text-xs sm:text-[12.5px] px-3.5 py-1.5 rounded-lg tracking-wide inline-flex items-center gap-1.5 font-['Inter',sans-serif]">
                                <FileText className="w-3.5 h-3.5 shrink-0" />
                                <span>{doc.btnLabel}</span>
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

            {/* SECTION 3: School Infrastructure */}
            <section data-aos="fade-up">
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-1.5 h-6 bg-[#e31e24] rounded-full inline-block shrink-0" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#031c3f] tracking-tight font-['Manrope',sans-serif]">
                  School Infrastructure
                </h3>
              </div>

              <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f0f5fc] border-b border-slate-200 text-xs sm:text-[13px] font-bold text-[#031c3f] uppercase tracking-wider font-['Manrope',sans-serif]">
                        <th scope="col" className="py-3 px-4 sm:px-6 w-20 text-left">
                          S.NO.
                        </th>
                        <th scope="col" className="py-3 px-4 sm:px-6 min-w-[340px]">
                          INFORMATION
                        </th>
                        <th scope="col" className="py-3 px-4 sm:px-6 min-w-[280px]">
                          DETAILS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[13.5px] sm:text-[14px] text-slate-700 font-['Inter',sans-serif]">
                      {schoolInfrastructure.map((item) => (
                        <tr
                          key={item.sno}
                          className="hover:bg-slate-50/80 transition-colors"
                        >
                          <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-500">
                            {item.sno}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-[#031c3f] font-semibold leading-relaxed">
                            {item.info}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-slate-700 leading-relaxed font-normal">
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
                                  className="bg-[#013aa3]/10 hover:bg-[#013aa3] text-[#013aa3] hover:text-white border border-[#013aa3]/20 font-semibold text-xs sm:text-[12.5px] px-3.5 py-1.5 rounded-lg tracking-wide shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5 w-fit font-['Inter',sans-serif]"
                                >
                                  <FileText className="w-3.5 h-3.5 shrink-0" />
                                  <span>{item.docAction.label}</span>
                                </button>
                              </div>
                            ) : item.action ? (
                              <a
                                href={item.action.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#e31e24]/10 hover:bg-[#e31e24] text-[#e31e24] hover:text-white border border-[#e31e24]/20 font-semibold text-xs sm:text-[12.5px] px-3.5 py-1.5 rounded-lg tracking-wide shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5 font-['Inter',sans-serif]"
                              >
                                <Play className="w-3.5 h-3.5 fill-current shrink-0" />
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

            {/* SECTION 4: School Management Committee */}
            <section data-aos="fade-up">
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-1.5 h-6 bg-[#e31e24] rounded-full inline-block shrink-0" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#031c3f] tracking-tight font-['Manrope',sans-serif]">
                  School Management Committee
                </h3>
              </div>

              {/* DataTables-style controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 text-xs sm:text-[13px] text-slate-600 font-['Inter',sans-serif]">
                <div className="flex items-center gap-1.5">
                  <span>Show</span>
                  <select
                    value={entriesPerPage}
                    onChange={(e) => setEntriesPerPage(e.target.value)}
                    className="border border-slate-300 rounded-lg px-2.5 py-1 text-xs sm:text-[13px] bg-white text-slate-800 focus:outline-hidden focus:border-[#013aa3] focus:ring-1 focus:ring-[#013aa3]"
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
                    placeholder="Search records..."
                    className="border border-slate-300 rounded-lg px-3 py-1.5 text-xs sm:text-[13px] bg-white text-slate-800 focus:outline-hidden focus:border-[#013aa3] focus:ring-1 focus:ring-[#013aa3] w-full sm:w-52"
                  />
                </div>
              </div>

              {/* SMC Table */}
              <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f0f5fc] border-b border-slate-200 text-xs sm:text-[13px] font-bold text-[#031c3f] uppercase tracking-wider font-['Manrope',sans-serif]">
                        <th scope="col" className="py-3 px-4 sm:px-6 w-24 text-left">
                          <div className="inline-flex items-center gap-1 cursor-pointer select-none">
                            <span>S.NO.</span>
                            <ArrowUpDown className="w-3 h-3 text-slate-400" />
                          </div>
                        </th>
                        <th scope="col" className="py-3 px-4 sm:px-6 min-w-[380px]">
                          <div className="inline-flex items-center gap-1 cursor-pointer select-none">
                            <span>DOCUMENTS / INFORMATION</span>
                            <ArrowUpDown className="w-3 h-3 text-slate-400" />
                          </div>
                        </th>
                        <th scope="col" className="py-3 px-4 sm:px-6 min-w-[240px]">
                          <div className="inline-flex items-center gap-1 cursor-pointer select-none">
                            <span>UPLOAD DOCUMENTS</span>
                            <ArrowUpDown className="w-3 h-3 text-slate-400" />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[13.5px] sm:text-[14px] text-slate-700 font-['Inter',sans-serif]">
                      {filteredSmc.length > 0 ? (
                        filteredSmc.map((item) => (
                          <tr
                            key={item.sno}
                            className="hover:bg-slate-50/80 transition-colors"
                          >
                            <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-500">
                              {item.sno}
                            </td>
                            <td className="py-3.5 px-4 sm:px-6 text-[#031c3f] font-semibold leading-relaxed">
                              {item.title}
                            </td>
                            <td className="py-3.5 px-4 sm:px-6">
                              {item.href ? (
                                <Link
                                  href={item.href}
                                  className="bg-[#013aa3]/10 hover:bg-[#013aa3] text-[#013aa3] hover:text-white border border-[#013aa3]/20 font-semibold text-xs sm:text-[12.5px] px-3.5 py-1.5 rounded-lg tracking-wide shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5 font-['Inter',sans-serif]"
                                >
                                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                                  <span>{item.btnLabel}</span>
                                </Link>
                              ) : (
                                <span className="bg-[#013aa3]/10 text-[#013aa3] border border-[#013aa3]/20 font-semibold text-xs sm:text-[12.5px] px-3.5 py-1.5 rounded-lg tracking-wide inline-flex items-center gap-1.5 font-['Inter',sans-serif]">
                                  <FileText className="w-3.5 h-3.5 shrink-0" />
                                  <span>{item.btnLabel}</span>
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
              <div className="flex items-center justify-between mt-3 text-xs sm:text-[13px] text-slate-600 font-['Inter',sans-serif]">
                <div>
                  Showing 1 to {filteredSmc.length} of {filteredSmc.length} entry
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    disabled
                    className="border border-slate-300 rounded px-2.5 py-0.5 text-xs text-slate-400 bg-slate-50 cursor-not-allowed"
                  >
                    ‹
                  </button>
                  <span className="border border-[#013aa3] bg-[#013aa3]/10 text-[#013aa3] rounded px-2.5 py-0.5 text-xs font-semibold">
                    1
                  </span>
                  <button
                    type="button"
                    disabled
                    className="border border-slate-300 rounded px-2.5 py-0.5 text-xs text-slate-400 bg-slate-50 cursor-not-allowed"
                  >
                    ›
                  </button>
                </div>
              </div>
            </section>

          </div>
        </section>
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
